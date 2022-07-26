import sharp from 'sharp';
import path from 'path';
const fullLocation = path.join (__dirname , '../../full');
const thumbLocation = path.join (__dirname ,'../../thumb' ) ;

export default async function resizeImage( requiredImage : string , width : number , height : number) : Promise<void>{
    const imageLocation = path.join (fullLocation ,requiredImage );
    const saveLocation = path.join (thumbLocation , requiredImage);
    try {
        await sharp (imageLocation).resize( width , height ,{
        fit : 'contain'
        }).toFile(saveLocation);  
    }
    catch (error) {
        throw error ;
    }
}

export async function getImageWidthAndHeight (imageName : string) {

    try {
        const imageMetaData = await sharp (`${thumbLocation}\\${imageName}`).metadata();
        return imageMetaData ;
    }
    catch (error){
        throw error ;
    }
}