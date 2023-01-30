import React from 'react';
import Profile from './Profile';
import { connect } from 'react-redux';

class ProfileContainer extends React.Component {

  render() {
    return (
      <Profile {...this.props} profile={this.props.profile} />
    )
  }
}

let mapStateToProps = (state) => ({
  authors: state.profilePage.authors,
})


export default connect(mapStateToProps)(ProfileContainer);
