import express from 'express';
import ProductController from './controllers/product.controller';

const app = express();

app.use(express.json());

const productController = new ProductController();

app.post('/products', productController.createProduct);
app.get('/products', productController.getAllProducts);

export default app;
