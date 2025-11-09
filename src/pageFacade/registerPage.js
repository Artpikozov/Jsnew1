import {test} from "@playwright/test";

export class RegisterPage {

    constructor(page) {
        this.signUpButton = page.getByRole('link',{name: 'Sign up'});
        this.loginLink = page.locator('[name="username"]');
        this.emailInput = page.locator('[name="email"]');
        this.passwordInput = page.locator('[name="password"]');
        this.signUpButton1 = page.locator('.btn.btn-lg.btn-primary.pull-xs-right');
        this.emailErrorText = page.getByText(
            'Email already exists.. try logging in',
        );

    }

    async register(user){
        return test.step( 'регистрация)', async (step)=> {
            step.attach('реквизиты доступа', {
                body: `${user.name} с email ${user.email} и паролем ${user.password}`,
                contentType: 'text/plain',

            });


            const {name, email, password} = user
            await this.signUpButton.click();
            await this.loginLink.fill(name);
            await this.emailInput.fill(email);
            await this.passwordInput.fill(password);
            await this.signUpButton1.click();
        });

    }
}