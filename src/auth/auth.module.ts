import { Module } from '@nestjs/common';
import { PassportModule } from '@nestjs/passport';
import { UserService } from 'src/users/users.service';
import { LocalStrategy } from './local.strategy';
import { UsersModule } from 'src/users/users.module';
import { JwtModule } from '@nestjs/jwt';
import { AuthService } from './auth.service';
import { JwtStrategy } from './jwt.strategy';

@Module({
  imports: [
    PassportModule,
    UsersModule,
    JwtModule.register({
      signOptions: { expiresIn: '60s' },
      secret: 'key',
    }),
  ],
  exports: [AuthService],
  providers: [LocalStrategy,JwtStrategy, UserService,AuthService],
  controllers: [],
})
export class AuthModule {}
