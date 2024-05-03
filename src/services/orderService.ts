import axios from "axios";
import { Order } from "../types";
import { PaintFormData } from "./paintService";

export interface OrderFormData {
  id?: string;
  rows: PaintFormData[];
}

const API_ENDPOINT = "http://localhost:5999/api/orders";

function orderUrl(id?: string) {
  if (id) return `http://localhost:5999/api/orders/${id}`;

  return API_ENDPOINT;
}

export function getOrders() {
  return axios.get<Order[]>(API_ENDPOINT);
}

export function getOrder(id: string) {
  return axios.get<Order>(orderUrl(id));
}

export function saveOrder(order: OrderFormData) {
  return axios.post<Order>(orderUrl(), order);
}

export function updateOrder(id: string, status: string) {
  return axios.put<Order>(orderUrl(id), { status });
}
