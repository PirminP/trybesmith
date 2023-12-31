import connection from '../models/connection';
import ProductModel from '../models/product.model';
import Product from '../interfaces/product.interface';

class ProductService {
  public model: ProductModel;
  
  constructor() {
    this.model = new ProductModel(connection);
  }

  public createProduct(product: Product): Promise<Product> {
    return this.model.createProduct(product);
  }

  public async getAllProducts(): Promise<Product[]> {
    const getAll = await this.model.getAllProducts();
    return getAll;
  }
}

export default ProductService;