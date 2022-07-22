import express from 'express';
import { promises as fsPromises } from 'fs';

export default function isExist (req : express.Request , res : express.Response , next : express.NextFunction ) {

    // we know by defual that the req.query is validated  
    // so we will check if the photo exists in the thumb folder
    // if it's exist check the width and height for the photo 
    // is both width and height is correct return the photo
    // else created it form the full folder and chach it in the thumb folder
    
}