
import { Product } from './../../models/Product';
import { Request, Response, json } from 'express';
import fs from 'fs';
import path from 'node:path';

export async function updateProduct(req: Request, res: Response) {
  try{
    const {productId} = req.params;
    const{name,description,price,Category,ingredients} = req.body;
    const imgePath = req.file?.filename;

    const productUpd = await Product.findByIdAndUpdate(productId,{
      name,
      description,
      price: Number(price),
      Category,
      imgePath,
      ingredients:ingredients ?JSON.parse(ingredients): [],
    });
    const imagemDeleted =productUpd?.imgePath;
    const uploads = path.resolve('.',`uploads/${imagemDeleted}`);
    fs.unlink(`${uploads}`,(err)=>{if (err) throw err;});
    res.sendStatus(204);
  }catch(error){
    console.log(error);
    res.sendStatus(500);
  }
}
