
import {HttpException,HttpStatus} from "@nestjs/common"
export class BookException extends HttpException{
    constructor(){
        super('This is my custom exception class',HttpStatus.BAD_REQUEST)
    }
}