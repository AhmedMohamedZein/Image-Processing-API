import express from 'express';
import sharp from 'sharp';
import { promises as fsPromises } from 'fs';

export default async function (req : express.Request , res : express.Response , next : express.NextFunction) {
    // if the request entred this middleware this means it's not in the thumv folder 
    // so we need to find if the photo exists in the full folder and if yes resize it for the given width and height
    // then we save it in the thumb folder 
    // then res.sendFile(requiredImage , {root : "path"});
    const absolutePath = "C:\\Users\\AhmedZein\\Desktop\\FWD Advanced\\full\\" ;
    const thumbPath = 'C:\\Users\\AhmedZein\\Desktop\\FWD Advanced\\thumb\\'
    try {
        const arrayOfExistsImages = await fsPromises.readdir('./full');
        let requiredImage : ( string | undefined ) ;   
        // this loop finds if the Image exists in the full folder
        for (let i = 0 ; i <= arrayOfExistsImages.length - 1  ; i++){
            const nameOfTheImage = arrayOfExistsImages[i].slice(0,-4) ;
            if ( nameOfTheImage === res.locals.name ) requiredImage =  arrayOfExistsImages[i] ;
        }
        // does not exist ? res with resource was not found 
        if (! requiredImage ) res.status (404).end();
        // if the Image exists please resize it and chached in the thumb folder
        else {
            await sharp (`${absolutePath}\\${requiredImage}`).resize(res.locals.width,res.locals.height,{
                fit : 'inside'
                }).toFile(`${thumbPath}\\${requiredImage}`);
            res.status(201).sendFile(`${requiredImage}` , { root : thumbPath })    
        }
    }catch (error) {
        console.log (error);
        next();
    }
}