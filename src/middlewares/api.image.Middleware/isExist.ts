import express from 'express';
import { promises as fsPromises } from 'fs';
import { getImageMetaData } from '../../utilize/sharp';
import path from 'path';

export default async function isExist (req : express.Request , res : express.Response, next : express.NextFunction){

    // we know by defual that the req.query is valid 
    // so we will check if the photo exists in the thumb folder
    // if it's exist check the width and height for the photo 
    // is both width and height is correct return the photo
    // else created it form the full folder and chach it in the thumb folder
    const thumbLocation = path.join (__dirname ,'../../../thumb/' ) ;
    try {
        const arrayOfExistsImagesCached = await fsPromises.readdir(thumbLocation);  
        let requiredImage : (string | undefined );   
        for (let i = 0 ; i <= arrayOfExistsImagesCached.length - 1  ; i++){
            // nameOfTheImage is the image name without the extension '.png' ..etc
            const nameOfTheImage = arrayOfExistsImagesCached[i].slice(0,-4)  ;
            if ( nameOfTheImage != res.locals.name ) continue;
            
            const imageMetaData =  await getImageMetaData (arrayOfExistsImagesCached[i]) ;
            if ( imageMetaData.height != res.locals.height) continue;
            if ( imageMetaData.width != res.locals.width) continue;
            
            requiredImage = arrayOfExistsImagesCached[i] ;
        }
        if ( !requiredImage ) {
            // here we go to the next() middleware to create the image
            next();
        }else {
            res.status(200).sendFile( `${requiredImage}` ,{ root : thumbLocation } ) ;
            return;
        }
    } catch (error) {
        res.status (500).send('server error').end();
        return;
    }
}