import { BadRequestException,UseFilters, Body, Controller, Get, Param, ParseIntPipe, Post, ValidationPipe } from "@nestjs/common";
import { BookDto } from "src/dto/book.dto";
import { BookException } from "./book.exception";
import { BookCustomExceptionFilter } from "./book.exception.filter";

@Controller("book")
@UseFilters(BookCustomExceptionFilter)
export class BookController{
    @Get("/:id")
    findBookById(@Param("id",ParseIntPipe) id :number):string{
        console.log(id,"type:",typeof(id))
        return `this is book by id:${id}`
    }
    @Get("")
    findBook():string{
        throw new BadRequestException()
    }
    @Post("/add")
    addBook(@Body(new ValidationPipe()) book:BookDto):string{
        return "book added successfully"
    }
}