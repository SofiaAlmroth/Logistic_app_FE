import axios from "axios";
import { Category } from "../types";

const API_ENDPOINT = "http://localhost:5999/api/categories";

export function getCategories() {
  return axios.get<Category[]>(API_ENDPOINT);
}
