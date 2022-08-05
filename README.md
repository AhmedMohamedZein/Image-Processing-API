# Image processing api 

__Follow__ my [Twitter](https://twitter.com/ahmedzain503)         [Linkedin](https://www.linkedin.com/in/ahmedmohamedzein/)


## Overview
 
- This project was made for an education purpose, we can say that this project is a tool for manipulating images that you as a front-end need to styles the   application   interface.

- Let's say that you want to use one image more than once but with different sizes (Width , height).

- These requirements passed as `Query prams` in the url

- So, this servies takes the image name, required width and height then returnes the image with the required parameters.

- The images that you need to build the application interface should be placed in the './full' folder.

- There is a chached file called './thumb' that caches the resized image for future use, without needing to resize it agin and agin.

## Scripts

 1.  `npm run test` : 

        Will compile the typescript into javascript 'build the production file .js' then test it using jasnime    

  2. `npm run server` :   

        Will run the server using nodemon .ts file at port 8000 unless you have a .env file 
         
  3. `npm run star`  :
  
        Will build the production file then start the server with node.js
   
  4. `npm run build` :
        
        Will compile the typescript into javascript 'build the production file .js', without running anything.
      
         
         
##  Documentation
 

| End-point                     | Method        | Responses   
| ----------------------------- | ------------- | --------    |
| `/`                           | GET           | `status 200` with a message ('The root of this server nothing will be returned')|
| `/api/image`                  | GET           | `status 200` if the image exists in the cached folder or in the './full' folder with the resized image. <br /> `status 404` if the image does not exists in the './full' folder. <br /> `status 500` if there is an server error.|
                                                    
   ### Example 
      
      http://localhost:8000/api/image?name=fjord&width=1500&height=1000


##  Testing using jasmine

- The `/api/image` was tested with 17 different test cases using unit test.
 
- The file that contains the tests is `./src/test/` and for resize images end point `./src/test/imageSpec.ts`.

- The `/api/image` was tested for non-valid queries, non-existing images, check caching in the `./thumb` folder and the status codes.



