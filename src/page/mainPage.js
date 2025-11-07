export class MainPage{
    constructor(page) {
        this.signUpButton = page.getByRole('link',{name: 'Sign up'});
        this.loginLink = page.getByRole('link',{name: 'Login'});

    }

    async gotoRegister(){
        await  this.signUpButton.click();
        await this.loginLink.click();
    }
}
