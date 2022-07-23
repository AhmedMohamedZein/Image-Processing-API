# Image processing api 

__Follow__ my [Twitter](https://twitter.com/ahmedzain503)         [Linkedin](https://www.linkedin.com/in/ahmedmohamedzein/)

## Scripts

 1. `npm run test` : 

         Will build the production file .js then test it using jasnime    

  2. `npm run build` :

         will only build the production file .js 

  3. `npm run server` :   

         will run the server using nodemon at port 8000 unless you have a .env file 
         
## Api documentation

####     1. `/` : 
    
#####           root endpoint will return status `200` with a text that say `The root of this server nothing will be returned`
        
####     2. `api/image?name=IMAGE_NAME&width=IMAGE_WIDTH&height=IMAGE_HEIGHT` :
          
#####           api/image endpoint that takes queries prams `name`, `width` and `height`   

                 1. name is a string value 
                 2. width is a intger value
                 3. height is a intger value 

