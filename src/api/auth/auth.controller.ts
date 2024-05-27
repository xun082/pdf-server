import { Body, Controller, Post } from '@nestjs/common';
import {
  ApiBody,
  ApiExtraModels,
  ApiOperation,
  ApiResponse,
  ApiTags,
  getSchemaPath
} from '@nestjs/swagger';

import { SendVerificationCodeDto } from './dto/auto.dto';
import { AuthService } from './auth.service';

import { ResponseDto } from '@/common/dto/response.dto';
import { ApiResponseWithDto } from '@/core/decorate/api-response.decorator';

@Controller('auth')
@ApiTags('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('send')
  @ApiOperation({ summary: 'Send verification code' })
  @ApiResponseWithDto(SendVerificationCodeDto, 'sdsds')
  // @ApiExtraModels(ResponseDto)
  // @ApiResponse({
  //   status: 200,
  //   description: 'Verification code sent successfully',
  //   schema: {
  //     allOf: [
  //       { $ref: getSchemaPath(ResponseDto) },
  //       {
  //         properties: {
  //           data: { $ref: getSchemaPath(SendVerificationCodeDto) }
  //         }
  //       }
  //     ]
  //   }
  // })
  @ApiBody({ type: SendVerificationCodeDto })
  async sendVerificationCode(
    @Body() sendVerificationCodeDto: SendVerificationCodeDto
  ): Promise<ResponseDto<SendVerificationCodeDto>> {
    return this.authService.sendVerificationCode(sendVerificationCodeDto);
  }
}
