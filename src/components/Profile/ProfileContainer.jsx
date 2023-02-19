import React from 'react';
import Profile from './Profile';
import { connect } from 'react-redux';
import { WithAuthRedirect } from '../../hoc/WithAuthRedirect';

class ProfileContainer extends React.Component {
  render() {
    return <Profile {...this.props} />
  }
}

let mapStateToProps = (state) => ({
  authors: state.profilePage.authors,
})

export default connect(mapStateToProps)(WithAuthRedirect(ProfileContainer));
