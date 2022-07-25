import express from "express";


export default function validate (req : express.Request , res : express.Response , next : express.NextFunction ) {

    if ( !req.query.name  ) {
        res.status(400).send('Query prams { name } is empty').end() ;
        throw new Error ('Query prams { name } is empty');
    }
    if ( !req.query.width  || !Number (req.query.width) ){
        res.status(400).send('Query prams { width } is empty or its not a number').end() ;
        throw new Error ('Query prams { width } is empty or its not a number'); 
    }
    if ( !req.query.height || !Number (req.query.height)){
        res.status(400).send('Query prams { height } is empty or its not a number').end() ;
        throw new Error ('Query prams { height } is empty or its not a number'); 
    }
    // we will access this object directly in the others middlewares 
    res.locals.width = Number (req.query.width) ;
    res.locals.height = Number (req.query.height) ;
    res.locals.name = req.query.name ;

    // the input request is validated go next
    next();
}