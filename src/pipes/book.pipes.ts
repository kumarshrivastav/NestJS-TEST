import { ArgumentMetadata, BadRequestException, PipeTransform } from "@nestjs/common";

export class BookPipe implements PipeTransform{
    transform(value: any, metadata: ArgumentMetadata) {
        if(value.id===1 && value.name ==="book1"){
            return value
        }else{
            throw new BadRequestException('validation failed')
        }
    }
}