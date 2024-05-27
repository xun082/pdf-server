import { Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
import { MongooseModule } from '@nestjs/mongoose';

import { User, UsersSchema } from '../user/schema/user.schema';

import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import { JwtStrategy } from './auth.strategy';

import { jwtConstants } from '@/utils';
import { RedisModule } from '@/common/redis/redis.module';
import { EmailModule } from '@/common/email/email.module';

@Module({
  controllers: [AuthController],
  providers: [AuthService, JwtStrategy],
  imports: [
    MongooseModule.forFeature([
      { name: User.name, schema: UsersSchema, collection: 'users' }
    ]),
    JwtModule.registerAsync({
      useFactory: async () => ({
        global: true,
        secret: jwtConstants.secret,
        signOptions: {
          expiresIn: '30d'
        }
      })
    }),
    RedisModule,
    EmailModule
  ]
})
export class AuthModule {}
