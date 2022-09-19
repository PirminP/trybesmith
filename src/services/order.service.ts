import connection from '../models/connection';
import OrderModel from '../models/order.model';
import Order from '../interfaces/order.interface';

class OrderService {
  public model: OrderModel;

  constructor() {
    this.model = new OrderModel(connection);
  }

  public async getAllOrders(): Promise<Order[]> {
    const getAll = await this.model.getAllOrders();
    return getAll;
  }
}

export default OrderService;