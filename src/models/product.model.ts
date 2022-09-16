import { Pool, ResultSetHeader } from 'mysql2/promise';
import Product from '../interfaces/product.interface';

class ProductModel {
  public connection: Pool;

  constructor(connection: Pool) {
    this.connection = connection;
  }

  public async createProduct(product: Product): Promise<Product> {
    const { name, amount } = product;
    const create = await this.connection.execute<ResultSetHeader>(
      'INSERT INTO Trybesmith.Products (name, amount) VALUES (?, ?)',
      [name, amount],
    );
    const [dataInserted] = create;
    const { insertId } = dataInserted;
    return { id: insertId, ...product };
  }

  public async getAllProducts(): Promise<Product[]> {
    const getAll = await this.connection
      .execute('SELECT * FROM Trybesmith.Products');
    const [rows] = getAll;
    return rows as Product[];
  }
}

export default ProductModel;