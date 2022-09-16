import { Request, Response } from 'express';
import ProductService from '../services/product.service';

class ProductController {
  constructor(private productService = new ProductService()) { }

  public createProduct = async (req: Request, res: Response) => {
    const product = req.body;

    const create = await this.productService.createProduct(product);
    res.status(201).json(create);
  };
}

export default ProductController;