import { expect } from '@storybook/test';

import { CaptchaDriverType } from '~/generated/graphql';

import { getCaptchaUrlByProvider } from '../getCaptchaUrlByProvider';

describe('getCaptchaUrlByProvider', () => {
  it('handles GoogleRecatpcha', async () => {
    const captchaUrl = getCaptchaUrlByProvider(
      CaptchaDriverType.GoogleRecatpcha,
      'siteKey',
    );

    expect(captchaUrl).toEqual(
      'https://www.google.com/recaptcha/api.js?render=siteKey',
    );

    expect(() =>
      getCaptchaUrlByProvider(CaptchaDriverType.GoogleRecatpcha, ''),
    ).toThrow(
      'SiteKey must be provided while generating url for GoogleRecaptcha provider',
    );
  });

  it('handles Turnstile', async () => {
    const captchaUrl = getCaptchaUrlByProvider(CaptchaDriverType.Turnstile, '');

    expect(captchaUrl).toEqual(
      'https://challenges.cloudflare.com/turnstile/v0/api.js',
    );
  });

  it('handles unknown provider', async () => {
    expect(() =>
      getCaptchaUrlByProvider('Unknown' as CaptchaDriverType, ''),
    ).toThrow('Unknown captcha provider');
  });
});
