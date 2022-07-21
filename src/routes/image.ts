import express from 'express';
import validate from '../middlewares/api.image.Middleware/validationOfInputObject';
import isExist from '../middlewares/api.image.Middleware/isExist' ;
const route = express.Router();


route.get ( '/' , validate, isExist ,(req,res)=>{
    
   // The requested data will come as a req.query object
   // first check if the params is valid by the middlware validate
   // if the request is validate 'next()'
   // check the chashed folder for existing photo

   res.status (200).end();
});


export default route ;