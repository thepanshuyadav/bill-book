// @ts-check
const { test, expect } = require('@playwright/test');

// TODO: Get rows count => change to row + 1
test('add item flow: valid data', async ({ page }) => {
  await page.goto('http://localhost:3000/items')

  const addNewItem = page.locator('button >> text=Add item')
  const rows = page.locator('tr[data-testid="data-row"]')
  expect(rows).toHaveCount(6)

  await expect(addNewItem).toBeVisible();
  await addNewItem.click();


  const heading = await page.locator('text=Add new item');
  expect(heading).toBeVisible()
  const nameInput = await page.locator('input[name="name"]')
  const descInput = await page.locator('input[name="description"]')
  const priceInput = await page.locator('input[name="amount"]')
  const stockInput = await page.locator('input[name="stock"]')

  await nameInput.click();
  await page.keyboard.type("Item 7")
  await expect(nameInput).toHaveValue("Item 7")

  await descInput.click();
  await page.keyboard.type("Some details about Item 7")
  await expect(descInput).toHaveValue("Some details about Item 7")

  await priceInput.click();
  await page.keyboard.type("49")
  await expect(priceInput).toHaveValue("49")

  await stockInput.click();
  await page.keyboard.type("690")
  await expect(stockInput).toHaveValue("690")

  const submitItemForm = page.locator('input[type="submit"]')

  await expect(submitItemForm).toBeVisible();
  await submitItemForm.click();

  const newRows = page.locator('tr[data-testid="data-row"]')
  await expect(newRows).toHaveCount(7)
});

test('add item flow: invalid data', async ({ page }) => {
  await page.goto('http://localhost:3000/items')

  const addNewItem = await page.locator('button >> text=Add item')
  const rows= await page.locator('data-testid=data-row')
  let count = await rows.count()
  // await expect(count).toEqual(6)

  await expect(rows).toHaveCount(6)

  await expect(addNewItem).toBeVisible();
  await addNewItem.click();


  const heading = await page.locator('text=Add new item');
  expect(heading).toBeVisible()
  const nameInput = await page.locator('input[name="name"]')
  const descInput = await page.locator('input[name="description"]')
  const priceInput = await page.locator('input[name="amount"]')
  const stockInput = await page.locator('input[name="stock"]')

  await nameInput.click();
  await page.keyboard.type("Item 8")
  await expect(nameInput).toHaveValue("Item 8")

  await descInput.click();
  await page.keyboard.type("Some details about Item 8")
  await expect(descInput).toHaveValue("Some details about Item 8")

  await priceInput.click();
  await page.keyboard.type("-49")
  await expect(priceInput).toHaveValue("-49")

  await stockInput.click();
  await page.keyboard.type("690")
  await expect(stockInput).toHaveValue("690")

  const submitItemForm = page.locator('input[type="submit"]')

  await expect(submitItemForm).toBeVisible();
  page.on('dialog', async dialog => {
    await expect(dialog.type()).toContain('alert');
    await expect(dialog.message()).toContain('Invalid data')
    await dialog.accept();
  });

  await submitItemForm.click();

  const newRows = page.locator('tr[data-testid="data-row"]')
  await expect(newRows).toHaveCount(6)
});
