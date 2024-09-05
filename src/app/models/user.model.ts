export interface User {
    id?: string;
    name: string;
    email: string;
    phoneNumber: number;
    role: 'owner' | 'waiter' | 'chef';
    roleDes?:string
    picture?: string | null;
    password?: string;
    address?:string;
    status:boolean;
    storeId?:string;
}   