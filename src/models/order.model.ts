import { Pool } from 'mysql2/promise';
import Order from '../interfaces/order.interface';

class OrderModel {
  public connection: Pool;

  constructor(connection: Pool) {
    this.connection = connection;
  }

  // Research: Return single JSON array -> https://dev.mysql.com/doc/refman/5.7/en/aggregate-functions.html
  
  public async getAllOrders(): Promise<Order[]> {
    const getAll = await this.connection.execute(
      `SELECT ord.id AS id, ord.userId AS userId, JSON_ARRAYAGG(pro.id) AS productsIds
      FROM Trybesmith.Orders As ord
      INNER JOIN Trybesmith.Products As pro
      ON ord.id = pro.orderId
      GROUP BY ord.id
      ORDER BY ord.userId ASC;`,
    );
    const [rows] = getAll;
    return rows as Order[];
  }
}

export default OrderModel;