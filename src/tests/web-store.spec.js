import { test, expect } from '@playwright/test'

test('Test web store', async ({page}) => {
		await page.goto('http://localhost:8080');

		await page.fill('input[name="search"]', 'Laptop');
		await page.press('input[name-search]', "Enter")

		const productName = await page.textContent('.product-item')
		expect(productName).toContain('Laptop');

		await page.click('.addToCartButton');

		await page.click('.cartButton')

		const cartItem = await page.textContent('.cartItem')
		expect(cartItem).toContain('Laptop');

		await page.fill('input[name="name"]', 'John');
		await page.fill('input[name="email"]', 'john@email.com')
		await page.fill('input[name="address"]', 'Main street')

		await page.click('.confirmOrder')

		const confirmMessage = await page.textContent('.confirmAlert');

		expect(confirmMessage).toContain('Thank you for order');


})