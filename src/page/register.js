const URL = "https://realworld.qa.guru/"
const signUpButton = "Sign up";
const yourNameInput = "Your Name";
const yourEmailInput = "Email";
const passwordInput = "Password";
const signUpButton1 = "Sign up";
export class RegisterPage {

    constructor(page) {
        this.signUpButton = page.getByRole('link',{name: 'Sign up'});
        this.loginLink = page.getByRole('link',{name: 'Login'});
        await page.goto(URL);
        await page.getByRole('link',{name: signUpButton}).click();
        await page.getByRole("textbox", { name: yourNameInput }).click();
        await page.getByRole("textbox", { name: yourNameInput }).fill(name);
        await page.getByRole("textbox", { name: yourNameInput }).press('Tab');
        await page.getByRole("textbox", { name: yourEmailInput }).fill(email);
        await page.getByRole("textbox", { name: yourEmailInput }).press("Tab");
        await page.getByRole("textbox", { name: passwordInput }).fill(password);
        await page.getByRole("button", { name: signUpButton1 }).click();

    }

    async gotoRegister(){
        await  this.signUpButton.click();
        await this.loginLink.click();
    }
}