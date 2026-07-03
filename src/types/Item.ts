import type { Category } from "./Category";
import type { User } from "./User";

export interface Item {
  id: string;
  title: string;
  description: string;
  category: Category;
  images: string[];
  pricePerDay: number;
  distance: number;
  available: boolean;
  owner: User;
}