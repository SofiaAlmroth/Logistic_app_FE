import axios from "axios";
import { Paint } from "../types";

export interface PaintFormData {
  id?: string;
  name: string;
  categoryId: string;
  quantity: number;
  price: number;
  supplierInfo: string;
  // orderDate: Date;
  // ean_gtin: string;
  // batchName: string;
  // bestBeforeDate: Date;
}

const API_ENDPOINT = "http://localhost:5999/api/paints";

function paintUrl(id?: string) {
  if (id) return `http://localhost:5999/api/paints/${id}`;

  return API_ENDPOINT;
}

export function getPaints() {
  return axios.get<Paint[]>(paintUrl());
}

export function getPaint(id: string) {
  return axios.get<Paint>(paintUrl(id));
}

export function savePaint(paint: PaintFormData) {
  if (paint.id) return axios.put<Paint>(paintUrl(paint.id), paint);

  return axios.post<Paint>(paintUrl(), paint);
}

export function deletePaint(id: string) {
  return axios.delete<Paint>(paintUrl(id));
}
