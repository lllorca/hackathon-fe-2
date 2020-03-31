import { User } from './user';
import { Address } from './address';
import { Product } from './product';

export interface Business {
    id: number;
    name: string;
    category: string;
    owner: User;
    address: Address;
    products: Product[];
}