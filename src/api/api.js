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

  getProfile(paramsId) {
    return profileAPI.getProfile(paramsId)
  },
}

export const profileAPI = {
  getProfile(paramsId) {
    return instance.get(`profile/${paramsId}`)
  },
  getStatus(userId) {
    return instance.get(`profile/status/${userId}`)
  },
  updateStatus(status) {
    return instance.put(`profile/status`, {
      status: status
    })
  },
}

export const authAPI = {
  getAuth() {
    return instance.get(`auth/me`)
  },
}
