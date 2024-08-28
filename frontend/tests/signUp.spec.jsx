// import { expect, test } from '@playwright/test';

// // 1. Testing the Email and Full Name Input Fields
// // 2. Testing Password and Re-Enter Password Fields
// // 3. Testing the Entire Sign-Up Process

// test.describe('Sign-Up Form', () => {
//   test.beforeEach(async ({ page }) => {
//     // Navigate to the sign-up page before each test
//     await page.goto('http://localhost:3000/signup/'); // Adjust the path if necessary
//   });

//   test('should display and validate email and full name fields', async ({
//     page,
//   }) => {
//     test.setTimeout(20000);
//     const emailInput = page.locator('input[name="email"]');
//     const fullNameInput = page.locator('input[name="fullName"]');
//     const continueButton = page.locator('#button-selector');

//     // await page.waitForSelector('input[name="fullName"]', { state: 'visible', timeout: 10000 });

//     // Check visibility of email and full name fields
//     await expect(emailInput).toBeVisible();
//     await expect(fullNameInput).toBeVisible();

//     // Enter valid data and proceed to the password step
//     await emailInput.fill('test@example.com');
//     await fullNameInput.fill('John Doe');

//     await page.waitForSelector('#button-selector', {
//       state: 'attached',
//     });
//     await expect(continueButton).toBeVisible();
//     await expect(continueButton).toBeEnabled();

//     await page.click('#button-selector');

//     await continueButton.click({ force: true });
//     await page.waitForTimeout(20000);
//     // Verify password input field is now visible
//     const passwordInput = page.locator('input[name="password"]');
//     await expect(passwordInput).toBeVisible();
//   });

//   test('should validate and handle password and re-enter password fields', async ({
//     page,
//   }) => {
//     test.setTimeout(20000);
//     const emailInput = page.locator('input[name="email"]');
//     const fullNameInput = page.locator('input[name="fullName"]');
//     const continueButton = page.locator('#button-selector');

//     await expect(emailInput).toBeVisible();
//     await expect(fullNameInput).toBeVisible();

//     // Enter valid email and full name
//     await emailInput.fill('test@example.com');
//     await fullNameInput.fill('John Doe');

//     await page.waitForSelector('#button-selector', {
//       state: 'attached',
//     });
//     await expect(continueButton).toBeVisible(); // Ensure it's visible
//     await expect(continueButton).toBeEnabled(); // Ensure it's enabled
//     await continueButton.click({ force: true });

//     await page.waitForTimeout(20000);

//     await page.hover('#button-selector', { force: true });
//     await page.click('#button-selector', { force: true });

//     const passwordInput = page.locator('input[name="password"]');
//     await expect(passwordInput).toBeVisible();
//     const reEnterPasswordInput = page.locator('input[name="reEnterPassword"]');

//     // Enter mismatched passwords
//     await passwordInput.fill('Password123!');
//     await reEnterPasswordInput.fill('Password1234!');
//     await expect(
//       page.locator('span').filter({ hasText: 'Password does not match' })
//     ).toBeVisible();

//     // Enter matching passwords and submit the form
//     await reEnterPasswordInput.fill('Password123!');

//     const signUpButton = page.locator('#button-selector');
//     await expect(signUpButton).toBeVisible();
//     await expect(signUpButton).toBeEnabled();
//     await signUpButton.click();

//     // Check for success message
//     // await expect(
//     //   page.locator("text=Account created successfully")
//     // ).toBeVisible();
//   });

//   test('should complete the full sign-up process', async ({ page }) => {
//     test.setTimeout(30000);
//     const emailInput = page.locator('input[name="email"]');
//     const fullNameInput = page.locator('input[name="fullName"]');

//     const continueButton = page.locator('#button-selector');

//     // Enter valid email and full name
//     await emailInput.fill('test@example.com');
//     await fullNameInput.fill('John Doe');
//     await continueButton.click({ force: true });

//     await page.click('#button-selector');

//     const passwordInput = page.locator('input[name="password"]');
//     const reEnterPasswordInput = page.locator('input[name="reEnterPassword"]');

//     // Enter matching passwords
//     await passwordInput.fill('Password123!');
//     await reEnterPasswordInput.fill('Password123!');

//     // Submit the form
//     const signUpButton = page.locator('#button-selector');
//     await expect(signUpButton).toBeVisible();
//     await expect(signUpButton).toBeEnabled();
//     await signUpButton.click();

//     // Verify the account creation was successful
//     // await expect(
//     //   page.locator("text=Account created successfully")
//     // ).toBeVisible();
//   });
// });
