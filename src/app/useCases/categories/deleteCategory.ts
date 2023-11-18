import { Category } from '../../models/Category';
import { Request, Response } from 'express';
import { Product } from '../../models/Product';


export async function deleteCategory(req : Request ,res: Response){
  try{
    const {categoryId} = req.params;
    const {name,icon} = req.body;

    const products = await Product.find().where('Category').equals(categoryId);
    if (products.length > 0) {
      res.status(500).json('impossivél categoria vinculada a um produto');
    }else{
      await Category.findByIdAndDelete(categoryId);
      res.status(200);
    }
  }catch(error){
    console.log(error);
    res.sendStatus(500);
  }
}