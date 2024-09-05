import { Item } from "./item.model";

export interface Deal {
    id?: string;
    name: string;
    price: number;
    tax: number;
    items: Item[]; // Array of item IDs
    restaurantId: string; // Refers to restaurant ID
}