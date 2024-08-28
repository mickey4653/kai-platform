// import { expect, test } from '@playwright/test';

// const generateRandomEmail = () => {
//   const randomString = Math.random().toString(36).substring(7);
//   return `test_${randomString}@example.com`;
// };

// test('should complete the signup, signin, and email verification process', async ({
//   page,
// }) => {
//   const email = generateRandomEmail();
//   const fullName = 'John Doe';
//   const password = 'Password123!';

//   // Start the sign-up process
//   await page.goto('http://localhost:3000/signup/');
//   await page.fill('input[name="email"]', email);
//   await page.fill('input[name="fullName"]', fullName);
//   await page.click('#button-selector');

//   // Wait for the password fields to appear and fill them
//   await page.fill('input[name="password"]', password);
//   await page.fill('input[name="reEnterPassword"]', password);
//   await page.click('#button-selector');

//   const verificationLink = 'http://localhost:3000/verifyEmail?token=abc123';
//   await page.goto(verificationLink);

//   // Verify the redirect to sign-in page
//   await expect(page).toHaveURL('http://localhost:3000/signin/');

//   // Step 2: Sign-In
//   await page.fill('#email', email);
//   await page.fill('#password', password);
//   await page.click('#button-selector');

//   // Verify successful sign-in and redirect
//   await expect(page).toHaveURL('http://localhost:3000'); // Adjust as necessary

//   page.on('console', (msg) => console.log('PAGE LOG:', msg.text()));
// });
