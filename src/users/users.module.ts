import { Module } from '@nestjs/common';
import { UserService } from './users.service';

@Module({imports:[],exports:[],providers:[UserService],controllers:[]})
export class UsersModule {
    constructor(){
        console.log("user module")
    }
}
