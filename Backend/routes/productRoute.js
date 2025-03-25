import express from 'express'
import {listProducts,addProduct,removeProduct,singleProduct} from '../controllers/productController'

const productRouter = express.Router();

productRouter.post('/add',addProduct);
productRouter.post('/remove',removeProduct);
productRouter.post('/single',singleProduct);
productRouter.get('/list',listProducts);

export default productRouter