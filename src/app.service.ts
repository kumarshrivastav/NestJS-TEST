import { Injectable } from "@nestjs/common"

@Injectable()
export class BookService{
    addBook():string{
        return "This will add book"
    }
    deleteBook():string{
        return "This will delete book"
    }
    updateBook():string{
        return "This wiil update book"
    }
    findAll():string{
        return "This will find all book"
    }
    findBookById(id:any):string{
        return `This is id:${id} of Book`
    }
}