import ProductService from '../services/product.service';

class ProductController {
  constructor(private prodcutService = new ProductService()) { }
}

export default ProductController;