import {  Controller,  Get,  Post } from "@nestjs/common";

@Controller("book")
export class BookController{
    @Get()
    findAllBook():string{
        return "This api endpoint give all books list"
    }

    @Post()
    addBook():string{
        return "This api endpoint add new book in list"
    } 
}