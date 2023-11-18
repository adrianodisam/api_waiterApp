import { Product } from './../../models/Product';
import fs from 'fs';
import path from 'node:path';

import { Request, Response } from 'express';
export async function deleteProduct(req : Request ,res: Response){
  try{
    const {productId} = req.params;
    const productUpd = await Product.findByIdAndDelete(productId);
    const imagemDeleted =productUpd?.imgePath  ;
    if(imagemDeleted){
      const uploads = path.resolve('.',`uploads/${imagemDeleted}`) ;
      fs.unlink(`${uploads}`,(err)=>{if (err) throw err;});
    }

    res.sendStatus(204);
  }catch(error){
    res.sendStatus(500);
  }
}