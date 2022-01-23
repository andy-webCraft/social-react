import axios from "axios";

const instance = axios.create({
  baseURL: "https://social-network.samuraijs.com/api/1.0/",
  withCredentials: true,
  headers: {
    "API-KEY": "27aa21b5-ca91-4e62-9035-1580402f81c5",
  },
});

export const AuthAPI = {
  checkAuth() {
    return instance.get("auth/me");
  },
  login(email, password, remember, captcha = true) {
    return instance.post("auth/login", { email, password, remember, captcha });
  },
  logout() {
    return instance.delete("auth/login");
  },
};

export const ProfileAPI = {
  getProfile(userId) {
    return instance.get(`profile/${userId}`);
  },
  getStatus(userId) {
    return instance.get(`profile/status/${userId}`);
  },
  updateStatus(status) {
    return instance.put(`profile/status`, { status: status });
  },
  uploadPhoto(photo) {
    let uploadData = new FormData();
    uploadData.append("image", photo);
    return instance.put(`profile/photo`, uploadData);
  },
  setProfileInfo(profileInfo) {
    return instance.put(`/profile`, profileInfo);
  },
};

export const UsersAPI = {
  getUsers(currentPage = 1, pageSize = 10) {
    return instance.get(`users?page=${currentPage}&count=${pageSize}`);
  },
  setFollow(id) {
    return instance.post(`follow/${id}`);
  },
  setUnfollow(id) {
    return instance.delete(`follow/${id}`);
  },
};

export const SecurityAPI = {
  getCaptchaUrl() {
    return instance.get(`security/get-captcha-url`);
  },
};
