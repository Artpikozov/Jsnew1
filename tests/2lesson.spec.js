
import { test, expect } from '@playwright/test';

const URL = 'C:\\Users\\a.pikozov\\WebstormProjects\\JSnew\\demo.html'

test('поиск элемента по id', async ({ page }) => {
    // предусловие для теста
    await page.goto(URL);
    await page.locator('#email').fill('admin');
    await page.locator('#password').fill('admin');
    await page.locator('#btn').click();
    await expect(page.locator('#welcome-txt')).toContainText('Привет');

});
test('поиск элемента по атрибуту', async ({ page }) => {
    // предусловие для теста
    await page.goto(URL);
    await page.locator('[name="email"]').fill('admin');
    await page.locator('[accessibility-id="password"]').fill('admin');
    await page.locator('[accessibility-id="submit-btn"]').click();
    await expect(page.locator('#welcome-txt')).toContainText('Привет');
});
/*test('поиск элемента по классу', async ({ page }) => {
    // предусловие для теста
    await page.goto(URL);
    await page.locator(".el-input__inner").fill('admin');
    await page.locator('.el-input__inner').fill('admin');
    await page.locator('[accessibility-id="submit-btn"]').click();
    await expect(page.locator('#welcome-txt')).toContainText('Привет');
});*/
test.only('поиск элемента по семантическим селекторам', async ({ page }) => {
    // предусловие для теста
    await page.goto(URL);
    await page.getByPlaceholder('Email').fill('admin');
    //await page.locator(".el-input__inner").fill('admin');
    await page.getByPlaceholder( 'Пароль').fill('admin');
    //await page.locator('[accessibility-id="submit-btn"]').click();
    await page.getByRole( 'button', { name: 'Войти' }).click();
    await expect(page.locator('#welcome-txt')).toContainText('Привет');
});