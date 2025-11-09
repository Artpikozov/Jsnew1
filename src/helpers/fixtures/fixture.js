import {test as base} from '@playwright/test';
import {App} from '../../pageFacade/app.page'

export const test = base.extend({
    webApp: async  ({page},use) => {
        let app = new App(page);
        await use(app);

    }
})