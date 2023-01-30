import { connect } from 'react-redux';
import { addPost, updatePost } from '../../../redux/profileReducer';
import MyPosts from './MyPosts/MyPosts';

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

const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts);

export default MyPostsContainer;
