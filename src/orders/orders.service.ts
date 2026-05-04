import { Injectable } from '@nestjs/common';
import { db, Order } from './../db';

@Injectable()
export class OrdersService {
    public getAll(): Order[] {
        return db.orders;
    }

    public getById(id: string): Order {
        return db.orders.find((order) => order.id === id);
    }
}
