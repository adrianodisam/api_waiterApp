import { Product } from './../../models/Product';
import { Request, Response } from 'express';

export async function createProduct(req: Request, res: Response) {
  try{
    const imgePath = req.file?.filename;
    const{name,description,price,Category,ingredients} = req.body;
    const product = await Product.create({
      name,
      description,
      price: Number(price),
      Category,
      imgePath,
      ingredients:ingredients ?JSON.parse(ingredients): [],
    });
    res.status(201).json(product);
  }catch(error){
    console.log(error);
    res.sendStatus(500);
  }
}
