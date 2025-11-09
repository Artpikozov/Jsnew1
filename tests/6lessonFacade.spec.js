import { test, expect } from '@playwright/test';
import { faker } from '@faker-js/faker';
import {App} from '../src/pageFacade/app.page';
import {UserBuilder} from '../src/helpers/builders/index';

const URL =  'https://realworld.qa.guru/';



        /*
        await fillRegistrationForm(page, name, email, password);
        await expect(page.getByText(name)).toBeVisible();
        await expect(page.getByRole("navigation")).toContainText(name);
    });*/
    test.describe('Регистрация', () => {
        test.beforeEach( async ({ page }) => {
            await page.goto(URL);
        });
        test("регистрация buldre", async ({ page }) => {


            const user = new UserBuilder()
                .addEmail()
                .addPassword()
                .addName()
                .generate();
            console.log(user);

            let app = new App(page);
            console.log(app);

            await app.main.gotoRegister();
            await app.register.register(user);
            await app.globalfeed.gotoRegister();
        });
});