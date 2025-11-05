import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
    // предусловие для теста
    await page.goto('https://todomvc.com/examples/vue/dist/#/');
    // шаги
    await page.getByRole('textbox', { name: 'What needs to be done?' }).click();
    await page.getByRole('textbox', { name: 'What needs to be done?' }).click();
    await page.getByRole('textbox', { name: 'What needs to be done?' }).fill('retretere');
    await page.getByRole('textbox', { name: 'What needs to be done?' }).press('Enter');
    // проверка
    await expect(page.getByRole('main')).toContainText('retretere');
});