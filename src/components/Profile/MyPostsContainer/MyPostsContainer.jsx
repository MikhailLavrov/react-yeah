import { connect } from 'react-redux';
import { addPostActionCreator, updatePostActionCreator } from '../../../redux/profileReducer';
import MyPosts from './MyPosts/MyPosts';

let mapStateToProps = (state) => {
  return {
    posts: state.profilePage.posts,
    authors: state.profilePage.authors,
    newPostText: state.profilePage.newPostText,
  };
};

let mapDispatchToProps = (dispatch) => {
  return {
    updatePost: (text) => dispatch(updatePostActionCreator(text)),
    addPost: () => dispatch(addPostActionCreator()),
  };
};

const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts);

export default MyPostsContainer;
