import React from "react";
import { connect } from "react-redux";
import { compose } from "redux";
import Navigation from "./Navigation";

class NavigationContainer extends React.Component {
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
  connect(mapStateToProps)
) (NavigationContainer)
