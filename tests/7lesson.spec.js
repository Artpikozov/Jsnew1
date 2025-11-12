import {expect } from '@playwright/test';
import {test} from '../src/helpers/fixtures/index';
import { faker } from '@faker-js/faker';
import {UserBuilder} from '../src/helpers/builders/index';

const URL =  'https://realworld.qa.guru/';

test.describe('Регистрация', () => {
    test.beforeEach( async ({ page }) => {
        await page.goto(URL);
    });
    test("регистрация fixture", async ({ webApp}) => {


        const user = new UserBuilder()
            .addEmail()
            .addPassword()
            .addName()
            .generate();
        console.log(user);

        await webApp.main.gotoRegister();
        await webApp.register.register(user);
        await webApp.globalfeed.gotoRegister();ю


        //await expect(webApp.register.emailErrorText).toContaintext('Email already exists.. try logging in');
    });
});