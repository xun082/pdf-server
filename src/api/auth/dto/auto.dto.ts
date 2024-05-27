import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsString } from 'class-validator';

export class SendVerificationCodeDto {
  @ApiProperty({
    example: '2042204285@qq.com',
    description: 'The account to send verification code to'
  })
  @IsNotEmpty({ message: '手机账号必填' })
  @IsString({ message: '事件必须是字符串' })
  account: string;
}

export class VerificationResponseDto {
  @ApiProperty({ example: 'some-uuid', description: 'The verification ID' })
  verificationId: string;
}
