export interface Restaurant {
    id?: string;
    name: string;
    address: string;
    phoneNumber: number;
    website?: string | null;
    logo?: string | null;
    userId: string; // Refers to the user ID
}