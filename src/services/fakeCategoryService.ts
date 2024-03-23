export interface Category {
  _id: string;
  name: string;
}

export const categories: Category[] = [
  { _id: "1", name: "Black" },
  { _id: "2", name: "White" },
  { _id: "3", name: "Beige" },
  { _id: "4", name: "Pink" },
  { _id: "5", name: "Grey" },
  { _id: "6", name: "Purple" },
  { _id: "7", name: "Yellow" },
  { _id: "8", name: "Brown" },
  { _id: "9", name: "Red" },
  { _id: "10", name: "Orange" },
  { _id: "11", name: "Green" },
  { _id: "12", name: "Blue" },
];

export function getCategories() {
  return categories;
}
