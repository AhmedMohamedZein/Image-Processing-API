import express from 'express';
import { promises as fsPromises } from 'fs';
import sharp from 'sharp';


export default async function isExist (req : express.Request , res : express.Response, next : express.NextFunction){

    // we know by defual that the req.query is valid 
    // so we will check if the photo exists in the thumb folder
    // if it's exist check the width and height for the photo 
    // is both width and height is correct return the photo
    // else created it form the full folder and chach it in the thumb folder
    const absolutePath = "C:\\Users\\AhmedZein\\Desktop\\FWD Advanced\\thumb\\" ;
    try {
        const arrayOfExistsImagesCached = await fsPromises.readdir('./thumb');
        let requiredImage : ( string | undefined ) ;   
        for (let i = 0 ; i <= arrayOfExistsImagesCached.length - 1  ; i++){
            const nameOfTheImage = arrayOfExistsImagesCached[i].split("").slice(0 , arrayOfExistsImagesCached.length - 5).join("") ;
            if ( nameOfTheImage !== res.locals.name ) continue;
            const imageHeight =  (await sharp (`${absolutePath}\\${arrayOfExistsImagesCached[i]}`).metadata()).height;
            const imageWidth =  (await sharp (`${absolutePath}\\${arrayOfExistsImagesCached[i]}`).metadata()).width;
            if ( imageHeight !== res.locals.height) continue;
            if ( imageWidth !== res.locals.width) continue;

            requiredImage = arrayOfExistsImagesCached[i] ;
        }
        if ( !requiredImage ) {
            // here we go to the next() middleware to create the image
            res.status (400).send('bad Request').end();
        }else {
            res.status(200).sendFile( `${requiredImage}` ,{ root : absolutePath } ) ;
        }
    } catch (error) {
        res.status (500).end();
    }
}