import express from "express";
import imageApi from "./routes/image";
import dotenv from "dotenv";

dotenv.config();

const port = process.env.PORT || 8000 ;
const server = express();


server.use ('/api/image' , imageApi );

server.get('/' , (req : express.Request , res : express.Response )=>{

    res.status(200).send("The root of this server nothing will be returned")

});

server.listen (port , ()=>{
    console.log ( `Server is now online at port ${port}` );
})

export default server ;