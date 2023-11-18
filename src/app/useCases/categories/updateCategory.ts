import { Category } from '../../models/Category';
import { Request, Response } from 'express';


export async function updateCategory(req : Request ,res: Response){
  try{
    const {categoryId} = req.params;
    const {name,icon} = req.body;
    await  Category.findByIdAndUpdate(categoryId, {name,icon});
    res.sendStatus(204);
  }catch(error){
    console.log(error);
    res.sendStatus(500);
  }
}