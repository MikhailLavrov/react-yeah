import { connect } from 'react-redux';
import { addPost, updatePost } from '../../../redux/profileReducer';
import MyPosts from './MyPosts/MyPosts';
import React from 'react';
import { compose } from 'redux';

class MyPostsContainer extends React.Component {
  render() {
    return <MyPosts {...this.props} />
  }
}

let mapStateToProps = (state) => {
  return {
    posts: state.profilePage.posts,
    authors: state.profilePage.authors,
    newPostText: state.profilePage.newPostText,
  };
};

let mapDispatchToProps = {
  updatePost,
  addPost,
};

export default compose(
  connect(mapStateToProps, mapDispatchToProps)
) (MyPostsContainer)
