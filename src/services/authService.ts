import axios from "axios";
import { jwtDecode } from "jwt-decode";
import { User, UserLogin } from "../types";

const API_ENDPOINT = "http://localhost:5999/api/auth/";

function login(user: UserLogin) {
  return axios.post(API_ENDPOINT, user);
}

function getCurrentUser() {
  const token = localStorage.getItem("token");

  if (!token) return null;

  const user = jwtDecode<User>(token);

  return user;
}

export default {
  login,
  getCurrentUser,
};
