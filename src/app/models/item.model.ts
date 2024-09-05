export interface Item {
    id?: string;
    name: string;
    price: number;
    picture?: string | null;
    restaurantId: string; // Refers to the restaurant ID
}