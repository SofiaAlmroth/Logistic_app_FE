import axios from "axios";
import { Order, Paint, Sale } from "../types";

export interface SaleFormData {
  id?: string;
  rows: Paint[];
}

const API_ENDPOINT = "http://localhost:5999/api/sales";

function orderUrl(id?: string) {
  if (id) return `http://localhost:5999/api/sales/${id}`;

  return API_ENDPOINT;
}

export function getSales() {
  return axios.get<Sale[]>(API_ENDPOINT);
}

export function getSale(id: string) {
  return axios.get<Sale>(orderUrl(id));
}

export function saveSale(order: SaleFormData) {
  return axios.post<Order>(orderUrl(), order);
}

export function updateSale(id: string, status: string) {
  return axios.put<Sale>(orderUrl(id), { status });
}
