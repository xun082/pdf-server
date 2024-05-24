import { Injectable } from '@nestjs/common';
import * as svgCaptcha from 'svg-captcha';
import { v4 as uuid } from 'uuid';

import { LoginDto } from './dto/create-login.dto';

import { RedisService } from '@/common/redis/redis.service';

@Injectable()
export class LoginService {
  constructor(private readonly redisService: RedisService) {}
  async generateCaptcha() {
    // 创建一个验证码
    const captcha = svgCaptcha.create({
      size: 6, // 验证码长度
      ignoreChars: '0o1i', // 排除 0o1i
      noise: 2, // 噪声线条数量
      color: true, // 验证码的字符有颜色，而不是黑白
      background: '#cc9966' // 背景颜色
    });

    const uniqueId = uuid();

    const result = await this.redisService.set(uniqueId, captcha.text, 60);

    const svgData = Buffer.from(captcha.data).toString('base64');
    console.log(captcha.text);

    if (result === 'OK') {
      return {
        data: {
          key: uniqueId,
          data: svgData
        }
      };
    }
  }

  async login(data: LoginDto) {
    const { key, captcha } = data;

    const uniqueId = await this.redisService.get(key);

    if (uniqueId === captcha) {
      return '处理登录流程';
    } else {
      return '验证码输入错误，请重新获取';
    }
  }
}
