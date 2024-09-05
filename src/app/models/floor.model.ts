import { Table } from "./table.model";

export interface Floor {
    id?: string;
    name: string;
    description:string;
    tabels?:Array<Table>;
    restaurantId: string; // Refers to the restaurant ID
}