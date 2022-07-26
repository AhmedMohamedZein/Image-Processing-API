import express from 'express';
import validate from '../middlewares/api.image.Middleware/validate';
import isExist from '../middlewares/api.image.Middleware/isExist' ;
import createImage from '../middlewares/api.image.Middleware/createImage';

const route = express.Router();


route.get ( '/' , validate, isExist , createImage ,(req : express.Request ,res : express.Response)=>{
    
   // The requested data will come as a req.query object
   // first check if the params is valid by the middlware validate
   // if the request is validate 'next()'
   // check the chashed folder for existing photo
});


export default route ;