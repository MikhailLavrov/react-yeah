import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import c from './MyPosts.module.scss';
import Post from './Post/Post';
import { addPost } from '../../../redux/profileReducer';
import * as yup from 'yup';
import { Formik, Form, Field, ErrorMessage, useFormikContext } from 'formik';

const newPostSchema = yup.object({
  newPost: yup
    .string()
    .max(200, 'Too long. Max length is 200.'),
});

export const MyPosts = ({login, avatarImg}) => {
  const dispatch = useDispatch();

  const MyField = ({ ...props }) => {
    const { values } = useFormikContext();
    const charCount = values.newPost.length;
  
    return (
      <>
        <Field className={c.myposts__addinput} {...props} />
        {charCount > 150 &&
        <span className={c.myposts__charCount}>{charCount}/200</span>}
      </>
    );
  };
  
  const statePosts = useSelector((state) => state.profilePage.posts);
  const posts = statePosts.map((post) => (
    <Post
      key={post.id}
      id={post.id}
      message={post.message}
      currentDate={post.currentDate}
      likeCounter={post.likeCounter}
      login={login}
      avatarImg={avatarImg}
    />
  ));


  const onSubmitHandle = (values, { resetForm }) => {
    const { newPost } = values;
    const currentDate = new Date().toLocaleString();

    newPost !== '' && dispatch(addPost(newPost, currentDate));
    resetForm();
  };
  

  return (
    <div className={c.myposts}>
      <div className={c.myposts__addBlock}>
        <Formik
          validationSchema={newPostSchema}
          validateOnChange={true}
          initialValues={{ newPost: '' }}
          onSubmit={onSubmitHandle}
        >
          {({ isSubmitting }) => (
          <Form className={c.myposts__addForm}>
            <MyField 
              type="text"
              maxLength="200"
              name="newPost"
              placeholder="Write a message..." />
            <ErrorMessage className={c.myposts__error} name="newPost" component="span" />
            <button className={c.myposts__addButton} type="submit" disabled={isSubmitting}>&#9668;</button>
          </Form>
          )}
        </Formik>
      </div>
      <div className={c.myposts__posts}>{posts}</div>
    </div>
  );
};