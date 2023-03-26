import { Formik, Form, Field, ErrorMessage } from 'formik';
import c from './Login.module.scss';
import * as yup from 'yup';
import { loginThunk } from '../../redux/authReducer';
import { useDispatch } from 'react-redux';
import LOGIN_MASCOT from '../../assets/login-mascot.png';

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

  const onSubmit = (values, { setSubmitting, setStatus }) => {
    dispatch(loginThunk(values.email, values.password, values.rememberMe, setStatus));
    setSubmitting(false);
  };

  return (
  <section className={c.login}>
    <div className={`${c.login__container} container`}>
      <h2 className={c.login__title}>Login please</h2>
      <div className={c.login__mascot}>
        <img width={150} src={LOGIN_MASCOT} alt="Login mascot" />
        <div className={c.login__popover}> !
          <p className={c.login__popoverText}>
            You can try with:<br />
            <span><b>Email:&nbsp;</b>free@samuraijs.com</span><br />
            <span><b>Password: </b>free</span>
          </p>
        </div>
      </div>
      <Formik
        validationSchema={loginSchema}
        initialValues={{ email: '', password: '', rememberMe: false }}
        onSubmit={onSubmit}
      >
        {({ isSubmitting, status }) => (
          <Form className={c.login__form}>
            <div className={c.login__inputWrapper}>
              <Field type="email" name="email" placeholder='Enter email' />
              <ErrorMessage name="email" component="span" />
            </div>
            <div className={c.login__inputWrapper}>
              <Field type="password" name="password" placeholder='Enter password' />
              <ErrorMessage name="password" component="span" />
            </div>
            <div className={c.login__status}>{status}</div>
            <div className={c.login__remember}>
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
    </div>
  </section>)
};

export default Login;