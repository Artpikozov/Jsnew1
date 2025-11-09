export class GlobalFeedPage {
    constructor(page) {
        this.signUpButton = page.getByRole('link',{name: 'Sign up'});

    }

    async gotoRegister(){
        await  this.signUpButton.click();
    }
}