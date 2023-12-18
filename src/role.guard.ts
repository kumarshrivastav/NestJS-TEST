import { CanActivate, ExecutionContext, Injectable } from "@nestjs/common";
import { Observable } from "rxjs";
@Injectable()
export class CustomGuard implements CanActivate{
    private roleApplied:string;
    constructor(role:string){
        this.roleApplied=role
    }
    canActivate(context: ExecutionContext): boolean {
        const ctx=context.switchToHttp()
        const request:any=ctx.getRequest<Request>()
        return request.user.role===this.roleApplied
    }
}