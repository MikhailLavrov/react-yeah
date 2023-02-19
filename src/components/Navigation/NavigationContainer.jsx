import React from "react";
import { connect } from "react-redux";
import { compose } from "redux";
import Navigation from "./Navigation";
import { getAuthProfile } from "../../redux/authReducer";

class NavigationContainer extends React.Component {
  componentDidMount() {
    this.props.getAuthProfile();
  }
  
  render() {
    return <Navigation {...this.props} />
  }
}

let mapStateToProps = (state) => {
  return {
    dialogs: state.dialogsPage,
    auth: state.auth,
    sidebar: state.sidebar,
  }
};

export default compose(
  connect(mapStateToProps, {getAuthProfile})
) (NavigationContainer)
