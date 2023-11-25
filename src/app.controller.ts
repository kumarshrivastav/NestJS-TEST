import { Controller,Post,Delete,Put,Get, Param } from "@nestjs/common";
import { BookService } from "./app.service";

@Controller("/book")
export class BookController{
    // public bookService:BookService=new BookService()
    constructor(private bookService:BookService){}
    // add book
    @Post("/add")
    addBook():string{
        return this.bookService.addBook()
    }
    // delete book
    @Delete("/delete")
    deleteBook():string{
        return this.bookService.deleteBook()
    }
    // update book
    @Put("/update")
    updateBook():string{
        return this.bookService.updateBook()
    }
    // find all book
    @Get("/findall")
    findAllBook():string{
        return this.bookService.findAll()
    }

    @Get("/findByBookId/:bookId")
    findByBookId(@Param() params):string{
        return this.bookService.findBookById(params.bookId)
    }
}