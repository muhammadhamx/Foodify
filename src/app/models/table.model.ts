export interface Table {
    id?: string;
    name: string;
    sittingCapacity: number;
    description:string;
    reserved?: boolean;
    floorId: string; // Refers to the floor ID
}