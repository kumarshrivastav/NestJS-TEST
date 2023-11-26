import { Injectable } from "@nestjs/common";
import { Book } from "./data/book.dto";
import {v4 as uuidV4} from "uuid"
@Injectable()
export class BookService{
    public books:Book[]=[]

    addBookService(book:Book):string{
        book.id=uuidV4()
        this.books.push(book)
        return "Book added successfully"
    }

    updateBookService(book:Book):string{
        let index=this.books.findIndex((currBook)=>currBook.id===book.id)
        this.books[index]=book
        return "Book Updated Successfully"
    }

    deleteBookService(bookId:string):string{
        let filteredBook=this.books.filter((currBook)=>currBook.id!==bookId)
        if (filteredBook.length===0){
            return `Book Is Not Present With this ${bookId}`
        }
        this.books=filteredBook;
        return "Book Deleted Successfully"
    }

    findAllBook():Book[]{
        return this.books;
    }
}