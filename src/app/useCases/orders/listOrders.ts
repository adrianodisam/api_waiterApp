import { Order } from './../../models/Order';
import { Request, Response } from 'express';


export async function listOrders(req : Request ,res: Response){
  const order = await Order.find().sort({createdAt: 1}).populate('products.product');
  res.json(order);
}