import axios from "axios";

interface UserLogin {
  email: string;
  password: string;
}

const API_ENDPOINT = "http://localhost:5999/api/auth/";

function login(user: UserLogin) {
  return axios.post(API_ENDPOINT, user);
}

export default {
  login,
};
