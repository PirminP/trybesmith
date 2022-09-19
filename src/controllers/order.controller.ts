import { Request, Response } from 'express';
import OrderService from '../services/order.service';

class OrderController {
  constructor(private orderService = new OrderService()) { }

  public getAllOrders = async (_req: Request, res: Response) => {
    const getAll = await this.orderService.getAllOrders();
    res.status(200).json(getAll);
  };
}

export default OrderController;