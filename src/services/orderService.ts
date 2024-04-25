import axios from "axios";
import { Order } from "../types";

const API_ENDPOINT = "http://localhost:5999/api/orders";

export function getOrders() {
  return axios.get<Order[]>(API_ENDPOINT);
}
