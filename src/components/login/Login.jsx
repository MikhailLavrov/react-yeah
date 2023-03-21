import { Formik, Form, Field, ErrorMessage } from 'formik';
import c from './Login.module.scss';
import * as yup from 'yup';
import { loginThunk } from '../../redux/authReducer';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';

let loginSchema = yup.object({
  email: 
    yup.string()
    .email('Enter valid email')
    .required('Email is required'),
  password: 
    yup.string()
    .required('Password is required')
    .min(4, 'Password should be 4 chars min.'),
});

const Login = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const onSubmit = (values, { setSubmitting }) => {
    // console.log(JSON.stringify(values, null, 2));
    dispatch(loginThunk(values.email, values.password, values.rememberMe));
    navigate(`/profile`)
    setSubmitting(false);
  };

  return (<div className={c.login}>
    <h2>Login please</h2>
    <Formik
      validationSchema={loginSchema}
      initialValues={{ email: '', password: '', rememberMe: false }}
      onSubmit={onSubmit}
    >
      {({ isSubmitting }) => (
        <Form className={c.login__form}>
          <div className={c.login__inputWrapper}>
            <Field type="email" name="email" placeholder='Enter email' />
            <ErrorMessage name="email" component="span" />
          </div>
          <div className={c.login__inputWrapper}>
            <Field type="password" name="password" placeholder='Enter password' />
            <ErrorMessage name="password" component="span" />
          </div>
          <div>
            <Field type="checkbox" name="rememberMe" id="rememberMe" />
            <label htmlFor="rememberMe">Remember me</label>
            <ErrorMessage name="rememberMe" component="span" />
          </div>
          <button type="submit" 
                  disabled={isSubmitting}>
                Login</button>
        </Form>
      )}
    </Formik>
  </div>)
};

export default Login;