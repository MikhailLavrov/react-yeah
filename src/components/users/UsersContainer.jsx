import React from "react";
import axios from "axios";
import { connect } from "react-redux";
import { followAC, setUsersAC, unfollowAC, setCurrentPageAC, setTotalUsersCountAC, toggleIsFetchingAC } from "../../redux/usersReducer";
import Users from "./Users";

class UsersContainer extends React.Component {
  componentDidMount() {
    this.props.toggleIsFetching(true);
    axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`)
         .then(response => { 
          this.props.toggleIsFetching(false);
          this.props.setUsers(response.data.items)
          this.props.setTotalUsersCount(response.data.totalCount)
        })
  }

  onPageChange = (pageNumber) => {
    this.props.setCurrentPage(pageNumber);
    this.props.toggleIsFetching(true);
    axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`)
         .then(response => {
          this.props.toggleIsFetching(false);
          this.props.setUsers(response.data.items) 
        })
  }
  
  render() {

    return <>
            <Users totalUsersCount={this.props.totalUsersCount} 
                   pageSize={this.props.pageSize}
                   currentPage={this.props.currentPage}
                   onPageChange={this.onPageChange}
                   users={this.props.users}
                   follow={this.props.follow}
                   isFetching={this.props.isFetching}
                   unfollow={this.props.unfollow} />
          </>
  }
}

let mapStateToProps = (state) => {
  return {
    users: state.usersPage.users,
    pageSize: state.usersPage.pageSize,
    totalUsersCount: state.usersPage.totalUsersCount,
    currentPage: state.usersPage.currentPage,
    isFetching: state.usersPage.isFetching,
  }
};

let mapDispatchToProps = (dispatch) => {
  return {
    follow: (userId) => {
      dispatch(followAC(userId))
    },

    unfollow: (userId) => {
      dispatch(unfollowAC(userId))
    },

    setUsers: (users) => {
      dispatch(setUsersAC(users))
    },

    setCurrentPage: (currentPage) => {
      dispatch(setCurrentPageAC(currentPage))
    },

    setTotalUsersCount: (totalCount) => {
      dispatch(setTotalUsersCountAC(totalCount))
    },

    toggleIsFetching: (isFetching) => {
      dispatch(toggleIsFetchingAC(isFetching))
    },
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(UsersContainer);
