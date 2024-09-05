import { Item } from "./item.model";

export interface Order {
    id?: string;
    totalPrice: number;
    subTotal: number;
    tax: number;
    paymentType: string;
    items: Item[]; // Array of item IDs
    restaurantId: string; // Refers to the restaurant ID
    employeeId: string; // Refers to the employee ID
    tip?: number;
    status: 'initiated' | 'ready' | 'in process' | 'completed';
    createdAt?: Date;
    updatedAt?: Date;
}