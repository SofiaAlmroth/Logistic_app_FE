import axios from "axios";
import { Category } from "../types";

// const categories: Category[] = [
//   { id: "1", name: "Black" },
//   { id: "2", name: "White" },
//   { id: "3", name: "Beige" },
//   { id: "4", name: "Pink" },
//   { id: "5", name: "Grey" },
//   { id: "6", name: "Purple" },
//   { id: "7", name: "Yellow" },
//   { id: "8", name: "Brown" },
//   { id: "9", name: "Red" },
//   { id: "10", name: "Orange" },
//   { id: "11", name: "Green" },
//   { id: "12", name: "Blue" },
// ];

export function getCategories() {
  return axios.get<Category[]>("http://localhost:5999/api/categories");
}
