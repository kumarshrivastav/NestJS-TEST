import {CallHandler, ExecutionContext, NestInterceptor} from "@nestjs/common"
import { Observable, map } from "rxjs";
import {Request,Response} from "express"
export class AppInterceptor implements NestInterceptor{
    intercept(context: ExecutionContext, next: CallHandler<any>): Observable<any> {
        console.log('this is app interceptor')
        const ctx=context.switchToHttp()
        const request=ctx.getRequest<Request>()
        request.body.name="My Name is ANKIT KUMAR"
        request.body.age=23
        return next.handle().pipe(map((data)=>{
            console.log(data)
            return "response from interceptor"
        }))
    }
}