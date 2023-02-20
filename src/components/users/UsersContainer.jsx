import React from "react";
import { connect } from "react-redux";
import { followSuccess, unfollowSuccess, setCurrentPage, getUsers, follow, unfollow } from "../../redux/usersReducer";
import Users from "./Users";
import { compose } from "redux";
import { WithAuthRedirect } from "../../hoc/WithAuthRedirect";

class UsersContainer extends React.Component {
  componentDidMount() {
    this.props.getUsers(this.props.currentPage, this.props.pageSize);
  }

  onPageChange = (pageNumber) => {
    this.props.setCurrentPage(pageNumber);
    this.props.getUsers(pageNumber, this.props.pageSize);
  }
  
  render() {

    return <Users totalUsersCount={this.props.totalUsersCount} 
                   pageSize={this.props.pageSize}
                   currentPage={this.props.currentPage}
                   onPageChange={this.onPageChange}
                   users={this.props.users}
                   follow={this.props.follow}
                   unfollow={this.props.unfollow}
                   isFetching={this.props.isFetching}
                   followingInProgress={this.props.followingInProgress} />
  }
}

let mapStateToProps = (state) => {
  return {
    users: state.usersPage.users,
    pageSize: state.usersPage.pageSize,
    totalUsersCount: state.usersPage.totalUsersCount,
    currentPage: state.usersPage.currentPage,
    isFetching: state.usersPage.isFetching,
    followingInProgress: state.usersPage.followingInProgress,
  }
};

let mapDispatchToProps = {
    followSuccess,
    unfollowSuccess,
    setCurrentPage,
    getUsers,
    follow,
    unfollow,
};

export default compose(
  connect(mapStateToProps, mapDispatchToProps),
  // WithAuthRedirect
) (UsersContainer)
