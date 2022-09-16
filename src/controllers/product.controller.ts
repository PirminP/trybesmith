import { Request, Response } from 'express';
import ProductService from '../services/product.service';

class ProductController {
  constructor(private productService = new ProductService()) { }

  public createProduct = async (req: Request, res: Response) => {
    const product = req.body;
    const create = await this.productService.createProduct(product);
    res.status(201).json(create);
  };

  public getAllProducts = async (_req: Request, res: Response) => {
    const getAll = await this.productService.getAllProducts();
    res.status(200).json(getAll);
  };
}

export default ProductController;