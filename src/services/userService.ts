import axios from "axios";
import { UserRegister } from "../types";

const API_ENPOINT = "http://localhost:5999/api/users/";

function register(user: UserRegister) {
  return axios.post(API_ENPOINT, user);
}

export default {
  register,
};
