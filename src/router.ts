import { Router } from 'express';
import path from 'node:path';
import { listCategories } from './app/useCases/categories/listCategories';
import { createCategory } from './app/useCases/categories/createCategory';
import { listProducts } from './app/useCases/Products/listProducts';
import { createProduct } from './app/useCases/Products/createProducts';
import multer from 'multer';
import { listProductsByCategory } from './app/useCases/categories/listProductsByCategory';
import { listOrders } from './app/useCases/orders/listOrders';
import { createOrders } from './app/useCases/orders/createOrders';
import { changeOrderStatus } from './app/useCases/orders/changeOrderStatus';
import { cancelOrder } from './app/useCases/orders/cancelOrder';
import { deleteProduct } from './app/useCases/Products/deleteProduct';
import { updateCategory } from './app/useCases/categories/updateCategory';
import { deleteCategory } from './app/useCases/categories/deleteCategory';
import { updateProduct } from './app/useCases/Products/updateProduct';

export const router = Router();
const upload = multer({
  storage: multer.diskStorage({
    destination(req, file, callback) {
      callback(null,path.resolve(__dirname,'..','uploads'));
    },
    filename(req, file, callback){
      callback(null,`${Date.now()}-${file.originalname}`);
    }
  })

});
// list categories
router.get('/categories',listCategories);
//create categories
router.post('/categories',createCategory);
// update categoria
router.patch('/category/:categoryId',updateCategory);
//delete categoria
router.delete('/category/:categoryId',deleteCategory);
// list porducts
router.get('/porducts',listProducts);
// create porducts
router.post('/porducts',upload.single('image'),createProduct);
// update product
router.patch('/porducts/:productId',upload.single('image'),updateProduct);
// delete product
router.delete('/product/:productId',deleteProduct);
// get porducts by category
router.get('/categories/:categoryId/porducts',listProductsByCategory);
//list orders
router.get('/orders',listOrders);
// create order
router.post('/orders',createOrders);
// change order status
router.patch('/orders/:orderId',changeOrderStatus);
// delete / cancel order
router.delete('/orders/:orderId',cancelOrder);
