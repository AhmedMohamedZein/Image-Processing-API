import express from "express";


export default function validate (req : express.Request , res : express.Response , next : express.NextFunction ) {

    if ( !req.query.name  ) {
        res.status(400).end() ;
        return; 
    }
    if ( !req.query.width  || !Number (req.query.width) ){
        res.status(400).end() ;
        return; 
    }
    if ( !req.query.height || !Number (req.query.height)){
        res.status(400).end() ;
        return; 
    }
    // we will access this object directly in the others middlewares 
    res.locals.width = Number (req.query.width) ;
    res.locals.height = Number (req.query.height) ;
    res.locals.name = req.query.name ;

    // the input request is validated go next
    next();
}