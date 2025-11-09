import {MainPage, RegisterPage, GlobalFeedPage} from './index'

export class App{
    constructor(page){
        this.page = page;
        this.main = new MainPage(page);
        this.globalfeed =  new GlobalFeedPage(page);
        this.register = new RegisterPage(page);
    }
}