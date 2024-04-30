export interface Paint {
  id: string;
  name: string;
  category: Category;
  quantity: number;
  price: number;
  supplierInfo: string;
  orderDate: Date;
  ean_gtin: string;
  batchName: string;
  bestBeforeDate: Date;
}

export interface Category {
  id: string;
  name: string;
  isChecked?: boolean;
}

export interface TextColumn {
  path: string;
  label: string;
}

export interface ContentColumn<T> {
  key: string;
  content(item: T): JSX.Element;
}
export type Column<T> = TextColumn | ContentColumn<T>;

export interface Id {
  id: string;
}

export interface SortColumn {
  path: string;
  order: "asc" | "desc";
}

export interface Category {
  id: string;
  name: string;
}
export interface User {
  id: string;
  name: string;
  email: string;
  isAdmin: boolean;
}
export interface UserRegister {
  name: string;
  email: string;
  password: string;
}

export interface UserUpdate extends Partial<UserRegister> {
  id: string;
}

export interface UserLogin {
  email: string;
  password: string;
}
