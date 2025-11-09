import { test} from '@playwright/test';
export class MainPage{
    constructor(page) {
        this.signUpButton = page.getByRole('link',{name: 'Sign up'});

    }

    async gotoRegister(){
        return test.step('переход на страницу регистрации)', async (step)=>{
            await  this.signUpButton.click();
        });
}
}
