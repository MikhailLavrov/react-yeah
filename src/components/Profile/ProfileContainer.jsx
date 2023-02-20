import React, { useEffect } from 'react';
import Profile from './Profile';
import { connect } from 'react-redux';
// import { WithAuthRedirect } from '../../hoc/WithAuthRedirect';
import { compose } from 'redux';
import { getAuthProfile } from '../../redux/authReducer';
import { getStatus, updateStatus } from '../../redux/profileReducer';

const ProfileContainer = (props) => {
  useEffect(() => {
    let userId = 27693;
    
    props.getAuthProfile();
    props.getStatus(userId);
  }, []);

  return <Profile {...props} />
}

let mapStateToProps = (state) => ({
  author: state.auth,
  status: state.profilePage.status,
})

export default compose(
  connect(mapStateToProps, {getAuthProfile, getStatus, updateStatus}),
  // WithAuthRedirect
) (ProfileContainer)
