import { Body, Controller, Get, Param, ParseBoolPipe, ParseFloatPipe, ParseIntPipe, Post } from "@nestjs/common";
import { BookDto } from "src/dto/book.dto";
import { BookPipe } from "src/pipes/book.pipes";

@Controller("book")
export class BookController{
    @Get("/:id")
    findBookById(@Param("id",ParseBoolPipe) id :number):string{
        console.log(id,"type:",typeof(id))
        return `this is book by id:${id}`
    }
    @Post("/add")
    addBook(@Body(new BookPipe()) book:BookDto):string{
        return "book added successfully"
    }
}