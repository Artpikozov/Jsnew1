import { test, expect } from '@playwright/test';
import { faker } from '@faker-js/faker';
import { MainPage } from '../src/page/index';
const URL =  'https://realworld.qa.guru/';

test.describe('Регистрация', () => {
    test.beforeEach( async ({ page }) => {
        await page.goto(URL);
    });

    test.only("регистрация", async ({ page }) => {

        const user = {
            name: faker.person.fullName(),
            email: faker.internet.email(),
            password: faker.internet.password(),
        }

        const mainPage = new MainPage(page);
        await mainPage.gotoRegister();


        /*
        await fillRegistrationForm(page, name, email, password);
        await expect(page.getByText(name)).toBeVisible();
        await expect(page.getByRole("navigation")).toContainText(name);
    });*/
    });
});