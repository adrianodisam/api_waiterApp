import { Product } from './../../models/Product';
import { Request, Response } from 'express';
import { createPastUploads } from './productUploads';
import  path  from 'path';


export async function createProduct(req: Request, res: Response) {
  try{
    const diretorio:string = path.resolve(__dirname,'..','uploads');
    console.log(diretorio)
    createPastUploads(diretorio);

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
