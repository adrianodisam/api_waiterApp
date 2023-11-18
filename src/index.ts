import path from 'node:path';
import express from 'express';
import mongoose from 'mongoose';
import { router } from './router';


mongoose.connect('mongodb://127.0.0.1:27017/adriano').then(()=>{
  const app  = express() ;
  const porta : number = 3001;
  app.use('/uploads',express.static(path.resolve(__dirname,'..','uploads')))
  app.use(express.json());
  app.use(router);

  app.listen(porta,()=>{
    console.log(`server rodando na porta: http://localhost:${porta}`);
  });
}).catch(()=> console.log('erro ao conectar ao mongo db'));



