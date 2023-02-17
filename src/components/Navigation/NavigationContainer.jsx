import React from "react";
import axios from "axios";
import { connect } from "react-redux";
import Navigation from "./Navigation";
import { setAuthUserData } from "../../redux/authReducer";

class NavigationContainer extends React.Component {
  componentDidMount() {
    // this.props.toggleIsFetching(true);
    axios.get(`https://social-network.samuraijs.com/api/1.0/auth/me`, {withCredentials: true})
         .then(response => { 
          // this.props.toggleIsFetching(false);
          if (response.data.resultCode === 0) {
            let {id, login, email} = response.data.data;
            this.props.setAuthUserData(id, login, email)
          }
        })
  }
  
  render() {
    return <Navigation {...this.props} />
  }
}

let mapStateToProps = (state) => {
  return {
    isAuth: state.auth.isAuth,
    login: state.auth.login,
    email: state.auth.email,
    id: state.auth.id,

    sidebar: state.sidebar,
    // profile: state.profilePage,
    dialogs: state.dialogsPage,
  }
};

export default connect(mapStateToProps, {setAuthUserData})(NavigationContainer);
