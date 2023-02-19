import React from 'react';
import Profile from './Profile';
import { connect } from 'react-redux';
import { Navigate } from 'react-router-dom';

class ProfileContainer extends React.Component {

  render() {

    if (!this.props.isAuth) return <Navigate to={'/login'} />

    return (
      <Profile {...this.props} />
    )
  }
}

let mapStateToProps = (state) => ({
  authors: state.profilePage.authors,
  isAuth: state.auth.isAuth,
})


export default connect(mapStateToProps)(ProfileContainer);
