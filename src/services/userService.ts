import axios from "axios";
import { User, UserRegister, UserUpdate } from "../types";

const API_ENDPOINT = "http://localhost:5999/api/users/";

function register(user: UserRegister) {
  return axios.post(API_ENDPOINT, user);
}

export function updateUser(user: UserUpdate) {
  if (user.id) return axios.put<User>(API_ENDPOINT + user.id, user);
}

export function getUsers() {
  return axios.get<User[]>(API_ENDPOINT);
}

export default {
  register,
  updateUser,
  getUsers,
};
