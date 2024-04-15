import axios from "axios";
import { Paint } from "../types";

export interface PaintFormData {
  id?: string;
  name: string;
  categoryId: string;
  quantity: number;
  price: number;
  supplierInfo: string;
  orderDate: Date;
  ean_gtin: string;
  batchName: string;
  bestBeforeDate: Date;
}

export const paints: Paint[] = [
  {
    id: "5b21ca3eeb7f6fbccd471815",
    name: "Tranquil Teal",
    category: { id: "12", name: "Blue" },
    quantity: 10,
    price: 50,
    supplierInfo: "Supplier ABC",
    orderDate: new Date(),
    ean_gtin: "1234567890123",
    batchName: "Batch001",
    bestBeforeDate: new Date(),
  },
  {
    id: "5b21ca3eeb7f6fbccd471816",
    name: "Golden Glow",
    category: { id: "7", name: "Yellow" },
    quantity: 5,
    price: 100,
    supplierInfo: "Supplier XYZ",
    orderDate: new Date(),
    ean_gtin: "9876543210987",
    batchName: "Batch002",
    bestBeforeDate: new Date(),
  },
  {
    id: "5b21ca3eeb7f6fbccd471817",
    name: "Moonlit Mist",
    category: { id: "5", name: "Grey" },
    quantity: 15,
    price: 80,
    supplierInfo: "Supplier XYZ",
    orderDate: new Date(),
    ean_gtin: "9876543210987",
    batchName: "Batch003",
    bestBeforeDate: new Date(),
  },
  {
    id: "5b21ca3eeb7f6fbccd471818",
    name: "Lavender Lullaby",
    category: { id: "4", name: "Pink" },
    quantity: 8,
    price: 70,
    supplierInfo: "Supplier ABC",
    orderDate: new Date(),
    ean_gtin: "1234567890123",
    batchName: "Batch004",
    bestBeforeDate: new Date(),
  },
  {
    id: "5b21ca3eeb7f6fbccd471819",
    name: "Whispering Willow",
    category: { id: "11", name: "Green" },
    quantity: 12,
    price: 90,
    supplierInfo: "Supplier ABC",
    orderDate: new Date(),
    ean_gtin: "1234567890123",
    batchName: "Batch005",
    bestBeforeDate: new Date(),
  },
  {
    id: "5b21ca3eeb7f6fbccd471820",
    name: "Coral Cascade",
    category: { id: "10", name: "Orange" },
    quantity: 10,
    price: 60,
    supplierInfo: "Supplier XYZ",
    orderDate: new Date(),
    ean_gtin: "9876543210987",
    batchName: "Batch006",
    bestBeforeDate: new Date(),
  },
  {
    id: "5b21ca3eeb7f6fbccd471821",
    name: "Midnight Mirage",
    category: { id: "1", name: "Black" },
    quantity: 7,
    price: 110,
    supplierInfo: "Supplier ABC",
    orderDate: new Date(),
    ean_gtin: "1234567890123",
    batchName: "Batch007",
    bestBeforeDate: new Date(),
  },
  {
    id: "5b21ca3eeb7f6fbccd471822",
    name: "Sunlit Sand",
    category: { id: "2", name: "White" },
    quantity: 9,
    price: 65,
    supplierInfo: "Supplier XYZ",
    orderDate: new Date(),
    ean_gtin: "9876543210987",
    batchName: "Batch008",
    bestBeforeDate: new Date(),
  },
  {
    id: "5b21ca3eeb7f6fbccd471823",
    name: "Emerald Enchantment",
    category: { id: "6", name: "Purple" },
    quantity: 10,
    price: 75,
    supplierInfo: "Supplier ABC",
    orderDate: new Date(),
    ean_gtin: "1234567890123",
    batchName: "Batch009",
    bestBeforeDate: new Date(),
  },
];

export function getPaints() {
  return axios.get<Paint[]>("http://localhost:5999/api/paints");
}

export function getPaint(id: string) {
  return axios.get<Paint>(`http://localhost:5999/api/paints/${id}`);
}

export function savePaint(paint: PaintFormData) {
  if (paint.id)
    return axios.put<Paint>(
      `http://localhost:5999/api/paints/${paint.id}`,
      paint
    );
  return axios.post<Paint>("http://localhost:5999/api/paints", paint);
}

export function deletePaint(id: string) {
  return axios.delete<Paint>(`http://localhost:5999/api/paints/${id}`);
}
