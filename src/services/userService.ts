import axios from "axios";

interface User {
  name: string;
  email: string;
  password: string;
}

const API_ENPOINT = "http://localhost:5999/api/users/";

function register(user: User) {
  return axios.post(API_ENPOINT, user);
}

export default {
  register,
};
