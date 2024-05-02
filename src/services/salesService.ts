import axios from "axios";
import { Paint, Sale } from "../types";

export interface SaleFormData {
  id?: string;
  rows: Paint[];
}

const API_ENDPOINT = "http://localhost:5999/api/sales";

function saleUrl(id?: string) {
  if (id) return `http://localhost:5999/api/sales/${id}`;

  return API_ENDPOINT;
}

export function getSales() {
  return axios.get<Sale[]>(API_ENDPOINT);
}

export function getSale(id: string) {
  return axios.get<Sale>(saleUrl(id));
}

export function saveSale(order: SaleFormData) {
  return axios.post<Sale>(saleUrl(), order);
}

export function updateSale(id: string, status: string) {
  return axios.put<Sale>(saleUrl(id), { status });
}
