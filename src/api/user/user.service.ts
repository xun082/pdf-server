import { Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';

import { User } from './schema/user.schema';
import { UserModule } from './user.module';

@Injectable()
export class UserService {
  constructor(@InjectModel(User.name) private usersModel: Model<UserModule>) {}
  async getUserInfo(userId: string) {
    return await this.usersModel
      .findOne({ id: userId })
      .select('-password')
      .exec();
  }
}
