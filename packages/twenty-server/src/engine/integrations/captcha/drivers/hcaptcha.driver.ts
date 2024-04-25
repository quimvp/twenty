import axios, { AxiosInstance } from 'axios';

import { CaptchaDriver } from 'src/engine/integrations/captcha/drivers/interfaces/captcha-driver.interface';
import { CaptchaServerResponse } from 'src/engine/integrations/captcha/drivers/interfaces/captcha-server-response';

import {
  CaptchaDriverOptions,
  CaptchaValidateResult,
} from 'src/engine/integrations/captcha/interfaces';

export class HCaptchaDriver implements CaptchaDriver {
  private readonly siteKey: string;
  private readonly secretKey: string;
  private readonly httpService: AxiosInstance;
  constructor(private options: CaptchaDriverOptions) {
    this.siteKey = options.siteKey;
    this.secretKey = options.secretKey;
    this.httpService = axios.create({
      baseURL: 'https://api.hcaptcha.com/siteverify',
    });
  }

  async validate(token: string): Promise<CaptchaValidateResult> {
    const formData = new URLSearchParams({
      secret: this.secretKey,
      response: token,
      siteKey: this.siteKey,
    });

    const response = await this.httpService.post('', formData);

    const responseData = response.data as CaptchaServerResponse;

    return {
      success: responseData.success,
      ...(!responseData.success && {
        error: responseData['error-codes']?.[0] ?? 'Captcha Error',
      }),
    };
  }
}
