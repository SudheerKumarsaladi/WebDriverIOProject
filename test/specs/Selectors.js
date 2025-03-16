import { browser, expect } from "@wdio/globals";

describe('Automation demo', () => {
  
    it('FormData', async () => {
        await browser.url('https://testautomationpractice.blogspot.com/');
        await $('#name').setValue('Sudheer');
        await $('#email').setValue('abcd@gmail.com');
        await $('#phone').setValue('876545678');
        await $(`//textarea[@id='textarea']`).setValue('Automation practice')
    })

    it('radio button',async()=>{

        const gender=await $$(`//input[@name='gender']`);
        const inputgender='male';

        for(let i=0;i<gender.length;i++){

           if(await gender[i].getValue()===inputgender){
            gender[i].click();
           }
        }
    })

    it('CheckBox', async()=>{
        const days=await $$(`//input[@class='form-check-input' and @type='checkbox']`)
        const inputday='friday';

        for(let i=0;i<days.length;i++){

            if(await days[i].getValue()===inputday && !(await days[i].isSelected())){
                    await days[i].click();
            }
        }

        await expect($('#friday')).toBeChecked();

    })

    it('DropDown', async()=>{
        const dropdown= await $('#country');
       //Select by visible text
        //await dropdown.selectByVisibleText('India');

        //select by attribute
        //await dropdown.selectByAttribute('value', 'india');

        //select by index
         await dropdown.selectByIndex(9);

        console.log(await dropdown.getValue());
    })

    xit('Alerts', async()=>{

        await $(`//button[contains(@class,'st')]`).click();
         //Accept the alert
        await $('#alertBtn').click();
        await browser.acceptAlert();


        //Get the alert text and cancel the alert
       await $('#confirmBtn').click();
       let text= await browser.getAlertText();
       console.log(text);
       await browser.dismissAlert();

       //enter the text to alert box
       await $('#promptBtn').click();
       await browser.sendAlertText('Automation-Tester');
       await browser.acceptAlert();

       //await expect($('#demo')).toHaveText(expect.stringContaining('Automation-Tester'));

      // await $(`//button[contains(@class,'st')]`).click();
    })

    it('Tabs', async()=>{

        await $(`//button[contains(text(),'New Tab')]`).click();
        const tabs=await browser.getWindowHandles();

        await browser.switchToWindow(tabs[1]);

        console.log(await browser.getUrl());
    })

    

})