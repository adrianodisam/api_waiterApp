import { Product } from './../../models/Product';

import { Request, Response } from 'express';
export async function deleteProduct(req : Request ,res: Response){
  try{
    const {productId} = req.params;
    await Product.findByIdAndDelete(productId);
    res.sendStatus(204);
  }catch(error){
    res.sendStatus(500);
  }
}