import { Module } from '@nestjs/common'
import { AppController } from './app.controller'
import { UsersModule } from './users/users.module';
import { AuthModule } from './auth/auth.module';
import { AuthService } from './auth/auth.service';

@Module({
  imports: [UsersModule, AuthModule],
  controllers: [AppController],
  providers: [],
  exports:[]
})
export class RootModule {
  constructor(private readonly authservice:AuthService){
    console.log('Root Module')
  }
}
