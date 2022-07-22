import server  from '../server';
import supertest from 'supertest';


const response = supertest ( server ) ;



describe('these tests are focused at the validate middleware a failure tests at /api/image' , ()=>{
    const queriesSchema = {
        allNull : '',
        onlyNameAndWrong : '?name=ahmedzein',
        onlyNameAndCorrect: '?name=smtp1',
        onlywidthAndWrong : '?width=aasd',
        onlywidthAndCorrect : '?width=407',
        onlyHeightAndWrong : '?height=qwe',
        onlyHeightAndCorrect : '?height=365',
        nameAndWidthWrong : '?name=ahmedzein&width=aasd',
        nameAndWidthCorrect : '?name=smtp1&width=407',
        nameAndHeightWrong :'?name=ahmedzein&height=qwe',
        nameAndHeightCorrect :'?name=smtp1&height=365',
        WidthAndHeightWrong : '?width=aasd&height=qwe',
        WidthAndHeightCorrect : '?width=407&height=365',
        nameAndWidthAndHeightWrong : '?name=ahmedzein&width=aasd&height=qwe',
        AllCorrect : '?name=smtp1&width=407&height=qwe'
    };
    
    it( '1.1 Query values is null or NaN or undefined ' , async () => {
            const responseObject = await response.get (`/api/image${queriesSchema.allNull}`);
            expect( responseObject.status ).toEqual (400);
    });
    it( '1.2 Query values only have a name value and its Wrong ' , async () => {
            const responseObject = await response.get (`/api/image?${queriesSchema.onlyNameAndWrong}`);
            expect( responseObject.status ).toEqual (400);
    }); 
    it( '1.3 Query values only have a name and its Correct ' , async () => {
            const responseObject = await response.get (`/api/image${queriesSchema.onlyNameAndCorrect}`);
            expect( responseObject.status ).toEqual (400);
    });  
    it( '1.4 Query values only have a width and its Wrong' , async () => {
            const responseObject = await response.get (`/api/image${queriesSchema.onlywidthAndWrong}`);
            expect( responseObject.status ).toEqual (400);
    });   
    it( '1.5 Query values only have a width and its Correct ' , async () => {
            const responseObject = await response.get (`/api/image${queriesSchema.onlywidthAndCorrect}`);
            expect( responseObject.status ).toEqual (400);
    });
    it( '1.6 Query values only have a height and its Wrong ' , async () => {
        const responseObject = await response.get (`/api/image${queriesSchema.onlyHeightAndWrong}`);
        expect( responseObject.status ).toEqual (400);
    });
    it( '1.7 Query values only have a height and its Correct ' , async () => {
        const responseObject = await response.get (`/api/image${queriesSchema.onlyHeightAndCorrect}`);
        expect( responseObject.status ).toEqual (400);
    });
    it( '1.7 Query values only have a name and width and its Wrong ' , async () => {
        const responseObject = await response.get (`/api/image${queriesSchema.nameAndWidthWrong}`);
        expect( responseObject.status ).toEqual (400);
    });
    it( '1.8 Query values only have a name and width and its Correct ' , async () => {
        const responseObject = await response.get (`/api/image${queriesSchema.nameAndWidthCorrect}`);
        expect( responseObject.status ).toEqual (400);
    });
    it( '1.9 Query values only have a name and height and its Wrong ' , async () => {
        const responseObject = await response.get (`/api/image${queriesSchema.nameAndHeightWrong}`);
        expect( responseObject.status ).toEqual (400);
    });
    it( '2.0 Query values only have a name and height and its Correct ' , async () => {
        const responseObject = await response.get (`/api/image${queriesSchema.nameAndHeightCorrect}`);
        expect( responseObject.status ).toEqual (400);
    });
    it( '2.1 Query values only have a width and height and its Wrong ' , async () => {
        const responseObject = await response.get (`/api/image${queriesSchema.WidthAndHeightWrong}`);
        expect( responseObject.status ).toEqual (400);
    });
    it( '2.2 Query values only have a width and height and its Correct ' , async () => {
        const responseObject = await response.get (`/api/image${queriesSchema.WidthAndHeightCorrect}`);
        expect( responseObject.status ).toEqual (400);
    });
    it( '2.3 All query values are Wrong ' , async () => {
        const responseObject = await response.get (`/api/image${queriesSchema.nameAndWidthAndHeightWrong}`);
        expect( responseObject.status ).toEqual (400);
    });

});
