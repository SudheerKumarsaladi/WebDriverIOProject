import { expect } from '@wdio/globals'
import { browser } from '@wdio/globals'

describe('Amazon HomePage.', () => {
  
    it('Open the URL and validate the url', async () => {
        await browser.url('/');

        await browser.$('#user-name').setValue('standard_user');
        await browser.$('#password').setValue('secret_sauce');
        await browser.$('#login-button').click();

        await expect($('.app_logo')).toHaveText('Swag Labs');

    })
})

