import axios from "axios";
import { User } from "../types";

const API_ENPOINT = "http://localhost:5999/api/users/";

function register(user: User) {
  return axios.post(API_ENPOINT, user);
}

export default {
  register,
};
