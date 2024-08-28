// import { expect, test } from '@playwright/test';

// test.describe('VerifyEmailPage Component', () => {
//   test.beforeEach(async ({ page }) => {
//     // Mock the initial data for the auth context
//     await page.route('**/api/auth', (route) => {
//       route.fulfill({
//         status: 200,
//         body: JSON.stringify({ email: 'test@example.com' }),
//       });
//     });

//     // Mock the sendVerification API
//     await page.route('**/api/sendVerification', (route) => {
//       route.fulfill({
//         status: 200,
//         body: JSON.stringify({ success: true }),
//       });
//     });

//     // Navigate to the VerifyEmailPage
//     await page.goto('http://localhost:3000/verify-email');
//   });

//   test('should display email confirmation message', async ({ page }) => {
//     // Check if the header is visible
//     await expect(page.getByText('Confirm Your Email')).toBeVisible();

//     // Check if the main message with the email is displayed correctly
//     const emailElement = page.locator('text=test@example.com');
//     await expect(emailElement).toBeVisible();

//     // Check if the body message is visible
//     await expect(
//       page.getByText(
//         'Please confirm your email address by clicking the link we just sent to your inbox.'
//       )
//     ).toBeVisible();
//   });

//   test('should display resend button and handle countdown', async ({
//     page,
//   }) => {
//     const resendButton = page.getByRole('button', {
//       name: /Resend Verification Email/i,
//     });

//     // Initially, the resend button should be disabled
//     await expect(resendButton).toBeDisabled();

//     // Wait for the countdown to finish
//     await page.waitForTimeout(61000); // 61 seconds

//     // The resend button should now be enabled
//     await expect(resendButton).toBeEnabled();
//   });

//   test('should successfully resend verification email', async ({ page }) => {
//     const resendButton = page.getByRole('button', {
//       name: /Resend Verification Email/i,
//     });

//     // Wait for the countdown to finish
//     await page.waitForTimeout(61000); // 61 seconds

//     // Click the resend button
//     await resendButton.click();

//     // Check if the success snackbar is shown
//     await expect(page.getByText('Email verification sent')).toBeVisible();
//   });

//   test('should handle resend error', async ({ page }) => {
//     // Mock the sendVerification API to simulate an error
//     await page.route('**/api/sendVerification', (route) => {
//       route.fulfill({
//         status: 500,
//         body: JSON.stringify({ success: false }),
//       });
//     });

//     const resendButton = page.getByRole('button', {
//       name: /Resend Verification Email/i,
//     });

//     // Wait for the countdown to finish
//     await page.waitForTimeout(61000); // 61 seconds

//     // Click the resend button
//     await resendButton.click();

//     // Check if the error snackbar is shown
//     await expect(
//       page.getByText('Error sending email verification')
//     ).toBeVisible();
//   });
// });
