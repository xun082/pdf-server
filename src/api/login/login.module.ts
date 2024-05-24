import { Module } from '@nestjs/common';

import { LoginService } from './login.service';
import { LoginController } from './login.controller';

import { RedisModule } from '@/common/redis/redis.module';

@Module({
  controllers: [LoginController],
  providers: [LoginService],
  imports: [RedisModule]
})
export class LoginModule {}
