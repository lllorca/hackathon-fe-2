import { Product } from './product';
import { User } from './user';

export interface Purchase {
    id: string;
    buyer: User;
    product: Product;
    quantity: number;
    unitPrice: number;
    timestamp: Date;
    expiration: Date;
}
