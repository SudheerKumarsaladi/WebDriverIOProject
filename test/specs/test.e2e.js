import { expect } from '@wdio/globals'
import LoginPage from '../pageobjects/login.page.js'
import SecurePage from '../pageobjects/secure.page.js'
import allureReporter from '@wdio/allure-reporter'

describe('My Login application', () => {

     before(async()=>{
        //Open the URL
        await LoginPage.open()
     })
        
    it('should login with valid credentials', async () => {
       
        allureReporter.addFeature("launch th url successfully")
        allureReporter.addSeverity('critical')
        await LoginPage.login('tomsmith', 'SuperSecretPassword!')
        allureReporter.addFeature("logged in successfully")
        allureReporter.addSeverity('critical')


        await expect(SecurePage.flashAlert).toBeExisting()
        await expect(SecurePage.flashAlert).toHaveText(
        await expect.stringContaining('You logged into a secure area!'))
        await expect(SecurePage.flashAlert).toMatchElementSnapshot('flashAlert')
    })
})

