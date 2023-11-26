import { Injectable, NestMiddleware } from "@nestjs/common";
import { NextFunction, Request, Response } from "express";
@Injectable()
export class BookMiddleware implements NestMiddleware{
    use(req: Request, res: Response, next: NextFunction) {
        console.log('This is a module based middleware of book')
        let protocol=req.protocol
        let host=req.hostname
        let url=req.originalUrl
        let method=req.method
        let date=new Date().toLocaleDateString()
        // console.log(`Protocol:${protocol}, Host:${host}, Url:${url}, Method:${method}, Date:${date}`)
        console.log(`${protocol}://${host}:3000${url}  ${method}  ${date}`)
        next()
    }
}