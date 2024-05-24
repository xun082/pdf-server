import { ApiProperty } from '@nestjs/swagger';
import { IsString, IsNotEmpty, MinLength } from 'class-validator';

export class LoginDto {
  @ApiProperty({ description: '账号', example: 'moment' })
  @IsNotEmpty({ message: '账号不能为空' })
  @IsString({ message: '账号必须为字符串' })
  username: string;

  @ApiProperty({ description: '账号', example: 'moment' })
  @IsNotEmpty({ message: '密码不能为空' })
  @IsString({ message: '密码必须为字符串' })
  @MinLength(6, { message: '密码长度不能小于6个字符' })
  password: string;

  @ApiProperty({ description: '账号', example: 'moment' })
  @IsNotEmpty({ message: 'key不能为空' })
  @IsString({ message: 'key必须为字符串' })
  key: string;

  @ApiProperty({ description: '账号', example: 'moment' })
  @IsNotEmpty({ message: '验证码不能为空' })
  @IsString({ message: '验证码必须为字符串' })
  captcha: string;
}
