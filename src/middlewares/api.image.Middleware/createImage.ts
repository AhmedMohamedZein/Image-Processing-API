import express from 'express';
import { promises as fsPromises } from 'fs';
import path from 'path';
import resizeImage from '../../utilize/sharp';

const fullLocation = path.join (__dirname , '../../../full/')  ;
const thumbLocation = path.join (__dirname ,'../../../thumb/' ) ;

export default async function (req : express.Request , res : express.Response) {
    // if the request entred this middleware this means it's not in the thumv folder 
    // so we need to find if the photo exists in the full folder and if yes resize it for the given width and height
    // then we save it in the thumb folder 
    // then res.sendFile(requiredImage , {root : "path"});

    try {
        const arrayOfAvailableImages = await fsPromises.readdir(fullLocation);
        let requiredImage : ( string | undefined ) ;   
        // this loop finds if the Image is available in the full folder
        for (let i = 0 ; i <= arrayOfAvailableImages.length - 1  ; i++){
            const nameOfTheImage = arrayOfAvailableImages[i].slice(0,-4) ;
            if ( nameOfTheImage === res.locals.name ) requiredImage =  arrayOfAvailableImages[i] ;
        }
        // does not exist ? res with resource was not found 
        if (! requiredImage ) { 
            res.status (404).send('This Image does not exists').end();
        }
        // if the Image exists please resize it and chached in the thumb folder
        else {
            await resizeImage (requiredImage , res.locals.width , res.locals.height ) ;
            res.status(200).sendFile(`${requiredImage}` , { root : thumbLocation });  
            return;
        }
    }catch (error) {
        res.status (500).send('server error').end();
        throw error ;
    }
}