import axios from "axios";
import { User, UserRegister, UserUpdate } from "../types";

const API_ENPOINT = "http://localhost:5999/api/users/";

function register(user: UserRegister) {
  return axios.post(API_ENPOINT, user);
}

export function updateUser(user: UserUpdate) {
  if (user.id) return axios.put<User>(API_ENPOINT + user.id, user);
}

export default {
  register,
  updateUser,
};
