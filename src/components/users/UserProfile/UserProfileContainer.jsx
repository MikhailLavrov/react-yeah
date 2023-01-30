import React from 'react';
import axios from 'axios';
import { connect } from 'react-redux';
import { setUserProfile } from '../../../redux/usersReducer';
import UserProfile from './UserProfile';

class UsersProfileContainer extends React.Component {

  componentDidMount() {
    axios.get(`https://social-network.samuraijs.com/api/1.0/profile/2`)
      .then(response => { 
        console.log('j')
        this.props.setUserProfile(response.data)
    })
  }

  render() {
    return (
      <UserProfile {...this.props} userProfile={this.props.userProfile} />
    )
  }
}

let mapStateToProps = (state) => ({
  userProfile: state.usersPage.userProfile,
})

let mapDispatchToProps = {
  setUserProfile,
}


export default connect(mapStateToProps, mapDispatchToProps)(UsersProfileContainer);
