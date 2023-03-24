import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import c from './MyPosts.module.scss';
import Post from './Post/Post';
import { addPost } from '../../../redux/profileReducer';
import * as yup from 'yup';
import { Formik, Form, Field, ErrorMessage } from 'formik';

const newPostSchema = yup.object({
  newPost: yup
    .string()
    .max(200, 'Too long. Max length is 200.'),
});

export const MyPosts = () => {
  const randomNum = new Date().getTime() % 9000 + 1000;
  const dispatch = useDispatch();
  
  const statePosts = useSelector((state) => state.profilePage.posts);
  const posts = statePosts.map((post) => (
    <Post
      message={post.message}
      likeCounter={post.likeCounter}
      id={post.id}
    />
  ));

  const onSubmitHandle = (values, { resetForm }) => {
    const { newPost } = values;
    newPost !== '' && dispatch(addPost(randomNum, newPost));
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
            <Field
              className={c.myposts__addinput}
              type="text"
              name="newPost"
              placeholder="Write a message..."
            />
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