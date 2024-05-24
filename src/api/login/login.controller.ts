import { Controller, Get, Post, Body } from '@nestjs/common';
import { ApiBody, ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';

import { LoginService } from './login.service';
import { LoginDto } from './dto/create-login.dto';

@Controller('login')
@ApiTags('LOGIN')
export class LoginController {
  constructor(private readonly loginService: LoginService) {}

  @Post()
  @ApiOperation({ summary: '靓仔啊' })
  @ApiResponse({
    status: 200,
    description: 'Success',
    type: LoginDto
  })
  @ApiBody({ description: 'User payload', type: LoginDto, required: true })
  create(@Body() loginDto: LoginDto) {
    return this.loginService.login(loginDto);
  }

  @Get('captcha')
  generateCaptcha() {
    return this.loginService.generateCaptcha();
  }
}
