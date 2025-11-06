import { test, expect } from '@playwright/test';
import { faker } from '@faker-js/faker';

const URL = "https://realworld.qa.guru/"
const signUpButton = "Sign up";
const yourNameInput = "Your Name";
const yourEmailInput = "Email";
const passwordInput = "Password";
const signUpButton1 = "Sign up";

const fillRegistrationForm = async (page, name , email, password) => {
    await page.goto(URL);
    await page.getByRole('link',{name: signUpButton}).click();
    await page.getByRole("textbox", { name: yourNameInput }).click();
    await page.getByRole("textbox", { name: yourNameInput }).fill(name);
    await page.getByRole("textbox", { name: yourNameInput }).press('Tab');
    await page.getByRole("textbox", { name: yourEmailInput }).fill(email);
    await page.getByRole("textbox", { name: yourEmailInput }).press("Tab");
    await page.getByRole("textbox", { name: passwordInput }).fill(password);
    await page.getByRole("button", { name: signUpButton1 }).click();
};


test.describe('Регистрация', () => {
    test.beforeEach( async ({ page }) => {
        await page.goto(URL);
    });

    test("регистрация", async ({ page }) => {

        /*const user = {
             name: faker.person.fullName(),
             email: faker.internet.email(),
             password: faker.internet.password(),
        }

         */
        const { name, email, password } = user;
        await fillRegistrationForm(page, name, email, password);
        await expect(page.getByText(name)).toBeVisible();
        await expect(page.getByRole("navigation")).toContainText(name);
    });
});