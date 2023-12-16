import { Order } from './../../models/Order';
import { Request, Response } from 'express';


export async function changeOrderStatus(req : Request ,res: Response){
  try{
    const {orderId} = req.params;
    const {status} = req.body;
    if(!['WATING','IN_PRODUCTION','DONE'].includes(status)){
      return  res.status(400).json({
        error : 'SOMENTE É PERIMITIDO OS SEGUINTE STATUS WATING,IN_PRODUCTION,DONE'
      });
    }
    await  Order.findByIdAndUpdate(orderId, {status});
    res.sendStatus(204);
  }catch(error){
    console.log(error);
    res.sendStatus(500);
  }
}
