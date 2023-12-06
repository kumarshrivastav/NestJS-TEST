import { Module } from '@nestjs/common';
import { UserService } from './users.service';

@Module({imports:[],providers:[UserService],exports:[UserService],controllers:[]})
export class UsersModule {}
