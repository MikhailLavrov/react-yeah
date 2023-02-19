import axios from "axios"

const instance = axios.create({
  baseURL: 'https://social-network.samuraijs.com/api/1.0/',
  withCredentials: true,
  headers: {
    'API-KEY': '34bcff41-44d6-4ca3-accf-0475dc9c7714',
  },
});

export const usersAPI = {
  getUsers(currentPage = 1, pageSize = 10) {
    return instance.get(`users?page=${currentPage}&count=${pageSize}`)
  },

  follow(userId) {
    return instance.post(`follow/${userId}`)
  },

  unfollow(userId) {
    return instance.delete(`follow/${userId}`)
  },

  chooseUser(paramsId) {
    return instance.get(`profile/${paramsId}`)
  }
}

export const authAPI = {
  getAuth() {
    return instance.get(`auth/me`)
  },
}
