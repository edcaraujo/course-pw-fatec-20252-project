import { Request, Response, NextFunction } from "express";

import dotenv from "dotenv"
dotenv.config();

function basicAuthMiddleware(req: Request, res: Response, next: NextFunction) {
   const authHeader = req.headers.authorization;

   if (!authHeader) {
    res.status(401).json({error: "Autenticação necessária."});
    return;
   }

   const [authType, authValue] = authHeader.split(' ');

   if (authType !== "Basic" || !authValue ) {
    res.status(401).json({error: "Autenticação necessária."});
    return;
   }

   const authCredential = Buffer.from(authValue, 'base64').toString('utf-8');
   
   const [authUser,authPass] = authCredential.split(':');

   if (authUser !== process.env.BASIC_AUTH_USER || authPass !== process.env.BASIC_AUTH_PASS) {
    res.status(401).json({error: "Usuário/senha inválida."});
    return;
   } 

   next();
}

function apiKeyAuthMiddleware(req: Request, res: Response, next: NextFunction) {
    
    // TODO

    next();
}

export default {
    basicAuthMiddleware,
    apiKeyAuthMiddleware
}