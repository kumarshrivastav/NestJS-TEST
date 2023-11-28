import {ExceptionFilter,ArgumentsHost,Catch,HttpException} from "@nestjs/common"
import {Response,Request} from "express"
@Catch(HttpException)
export class BookCustomExceptionFilter implements ExceptionFilter{
    catch(exception:HttpException,host:ArgumentsHost){
        const context=host.switchToHttp()
        const response=context.getResponse<Response>()
        const request=context.getRequest<Request>()
        const status=exception.getStatus()

        response.status(status).json({
            status:status,
            timeStamp:new Date().toISOString(),
            url:request.baseUrl,
            host:request.get('host'),
            method:request.method
        })
    }
}