import {Post,Controller, UseInterceptors,Req,Res} from "@nestjs/common"
import {AppInterceptor} from "./app.interceptor"
import {Request,Response} from "express"
@Controller("app")
export class AppController{
    @Post("")
    @UseInterceptors(AppInterceptor)
    helloWorld():string{
        return "response from controller"
    }

}