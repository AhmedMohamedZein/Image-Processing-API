import server  from '../server';
import supertest from 'supertest';


const response = supertest ( server ) ;


describe ('testing for the status code ', ()=>{

    beforeAll (()=>{
        console.log ( "start the testing " );
    })

    describe('this tests is a failure tests at /api/image' , ()=>{
        it( '1.1 dont send query ' , async () => {
            const data = await response.get ('/api/image');
            expect( data.status ).toEqual (400);
        });
        it( '1.2 send query NAME but dont send width and height' , async () => {
            const data = await response.get ('/api/image?name=ahmed');
            expect( data.status ).toEqual (400);
        }); 
        it( '1.3 send query NAME and width but dont send height' , async () => {
            const data = await response.get ('/api/image?name=ahmed&width=140');
            expect( data.status ).toEqual (400);
        });  
        it( '1.4 send query NAME and height but dont send width' , async () => {
            const data = await response.get ('/api/image?name=ahmed&height=140');
            expect( data.status ).toEqual (400);
        });   
        it( '1.5 send query NAME and height and width but without name:string , width:number , height:number' , async () => {
            const data = await response.get ('/api/image?name=150&width=sss&height=zein');
            expect( data.status ).toEqual (400);
        });    
    });

    
    describe('this tests is a success tests at /api/image' , ()=>{
        it( '1.1 send all required query with the right schema ' , async () => {
            const data = await response.get ('/api/image?name=ahmed&width=150&height=140');
            expect( data.status ).toEqual (200);
        });
    });
});