import { Category, getCategories } from "./fakeCategoryService";

export interface Paint {
  _id: string;
  name: string;
  category: Category;
  quantity: number;
  price: number;
  supplierInfo: string;
  orderDate: Date;
  EAN_GTIN: string;
  batchName: string;
  bestBeforeDate: Date;
}

export interface PaintFormData {
  _id?: string;
  name: string;
  categoryId: string;
  quantity: number;
  price: number;
  supplierInfo: string;
  orderDate: Date;
  EAN_GTIN: string;
  batchName: string;
  bestBeforeDate: Date;
}

export const paints: Paint[] = [
  {
    _id: "5b21ca3eeb7f6fbccd471815",
    name: "Tranquil Teal",
    category: { _id: "12", name: "Blue" },
    quantity: 10,
    price: 50,
    supplierInfo: "Supplier ABC",
    orderDate: new Date(),
    EAN_GTIN: "1234567890123",
    batchName: "Batch001",
    bestBeforeDate: new Date(),
  },
  {
    _id: "5b21ca3eeb7f6fbccd471816",
    name: "Golden Glow",
    category: { _id: "7", name: "Yellow" },
    quantity: 5,
    price: 100,
    supplierInfo: "Supplier XYZ",
    orderDate: new Date(),
    EAN_GTIN: "9876543210987",
    batchName: "Batch002",
    bestBeforeDate: new Date(),
  },
  {
    _id: "5b21ca3eeb7f6fbccd471817",
    name: "Moonlit Mist",
    category: { _id: "5", name: "Grey" },
    quantity: 15,
    price: 80,
    supplierInfo: "Supplier XYZ",
    orderDate: new Date(),
    EAN_GTIN: "9876543210987",
    batchName: "Batch003",
    bestBeforeDate: new Date(),
  },
  {
    _id: "5b21ca3eeb7f6fbccd471818",
    name: "Lavender Lullaby",
    category: { _id: "4", name: "Pink" },
    quantity: 8,
    price: 70,
    supplierInfo: "Supplier ABC",
    orderDate: new Date(),
    EAN_GTIN: "1234567890123",
    batchName: "Batch004",
    bestBeforeDate: new Date(),
  },
  {
    _id: "5b21ca3eeb7f6fbccd471819",
    name: "Whispering Willow",
    category: { _id: "11", name: "Green" },
    quantity: 12,
    price: 90,
    supplierInfo: "Supplier ABC",
    orderDate: new Date(),
    EAN_GTIN: "1234567890123",
    batchName: "Batch005",
    bestBeforeDate: new Date(),
  },
  {
    _id: "5b21ca3eeb7f6fbccd471820",
    name: "Coral Cascade",
    category: { _id: "10", name: "Orange" },
    quantity: 10,
    price: 60,
    supplierInfo: "Supplier XYZ",
    orderDate: new Date(),
    EAN_GTIN: "9876543210987",
    batchName: "Batch006",
    bestBeforeDate: new Date(),
  },
  {
    _id: "5b21ca3eeb7f6fbccd471821",
    name: "Midnight Mirage",
    category: { _id: "1", name: "Black" },
    quantity: 7,
    price: 110,
    supplierInfo: "Supplier ABC",
    orderDate: new Date(),
    EAN_GTIN: "1234567890123",
    batchName: "Batch007",
    bestBeforeDate: new Date(),
  },
  {
    _id: "5b21ca3eeb7f6fbccd471822",
    name: "Sunlit Sand",
    category: { _id: "2", name: "White" },
    quantity: 9,
    price: 65,
    supplierInfo: "Supplier XYZ",
    orderDate: new Date(),
    EAN_GTIN: "9876543210987",
    batchName: "Batch008",
    bestBeforeDate: new Date(),
  },
  {
    _id: "5b21ca3eeb7f6fbccd471823",
    name: "Emerald Enchantment",
    category: { _id: "6", name: "Purple" },
    quantity: 10,
    price: 75,
    supplierInfo: "Supplier ABC",
    orderDate: new Date(),
    EAN_GTIN: "1234567890123",
    batchName: "Batch009",
    bestBeforeDate: new Date(),
  },
];

export function getPaints() {
  return paints;
}

export function getPaint(id: string) {
  return paints.find((paint) => paint._id === id);
}

export function savePaint(paint: PaintFormData) {
  const categoryInDb = getCategories().find(
    (category) => category._id === paint.categoryId
  );

  if (!categoryInDb) throw new Error(`Category was not found`);

  const paintInDb = paints.find((p) => p._id === paint._id) || ({} as Paint);

  paintInDb.name = paint.name;
  paintInDb.category = categoryInDb;
  paintInDb.orderDate = paint.orderDate;
  paintInDb.price = paint.price;
  paintInDb.quantity = paint.quantity;
  paintInDb.EAN_GTIN = paint.EAN_GTIN;
  paintInDb.batchName = paint.batchName;
  paintInDb.bestBeforeDate = paint.bestBeforeDate;
  paintInDb.supplierInfo = paint.supplierInfo;

  if (!paintInDb._id) {
    paintInDb._id = Date.now().toString();
    paints.push(paintInDb);
  }

  return paintInDb;
}

export function deletePaint(id: string) {
  const paintInDb = paints.find((paint) => paint._id === id);

  if (paintInDb) paints.splice(paints.indexOf(paintInDb), 1);

  return paintInDb;
}
