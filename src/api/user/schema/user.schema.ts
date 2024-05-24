import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

import { getCurrentTimestamp } from '@/utils';

@Schema()
export class User {
  @Prop()
  email: string;

  @Prop()
  username: string;

  @Prop()
  password: boolean;

  @Prop()
  root_folder_id: string;

  @Prop()
  id: string;

  @Prop({ default: '1c902bf0-df6b-447f-bb9c-a257b014b1f5' })
  avatar: string;

  @Prop({ default: getCurrentTimestamp })
  createdAt: string;
}

export const usersSchema = SchemaFactory.createForClass(User);
export type UsersDocument = HydratedDocument<User>;
