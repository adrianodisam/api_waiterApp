import { io } from '../../..';
import { Order } from './../../models/Order';
import { Request, Response } from 'express';


export async function createOrders(req : Request ,res: Response){
  try{
    const {table,products} = req.body;
    const order  = await Order.create({table,products});
    const orderDetails = await order.populate('products.product');
    io.emit('order@new',orderDetails);
    res.status(201).json(order);
  }catch(error){
    console.log(error);
    res.sendStatus(500);
  }
}
