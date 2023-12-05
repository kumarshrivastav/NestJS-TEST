import { BadRequestException,UseFilters,UseGuards, Body, Controller, Get, Param, ParseIntPipe, Post, ValidationPipe } from "@nestjs/common";
import { BookDto } from "src/dto/book.dto";
import { BookException } from "./book.exception";
import { BookCustomExceptionFilter } from "./book.exception.filter";
import { BookGuard } from "./book.guard";

@Controller("book")
@UseFilters(BookCustomExceptionFilter)
// UseGuards(new BookGuard()) for the specific controller
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
    @UseGuards(new BookGuard()) /* for the specific route*/
    
    addBook(@Body(new ValidationPipe()) book:BookDto):string{
        return "book added successfully"
    }
}