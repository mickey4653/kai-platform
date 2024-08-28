// import { expect, test } from '@playwright/test';

// test.describe('SignInForm Component', () => {
//   test.beforeEach(async ({ page }) => {
//     // Mock the initial state for the auth context
//     await page.route('**/api/auth', (route) => {
//       route.fulfill({
//         status: 200,
//         body: JSON.stringify({ email: 'test@example.com' }),
//       });
//     });

//     // Mock Firebase authentication responses
//     await page.route('**/api/signInWithEmailAndPassword', (route) => {
//       const request = route.request();
//       const { email, password } = JSON.parse(request.postData());

//       if (email === 'unverified@example.com') {
//         route.fulfill({
//           status: 200,
//           body: JSON.stringify({ user: { emailVerified: false } }),
//         });
//       } else if (email === 'test@example.com' && password === 'password123') {
//         route.fulfill({
//           status: 200,
//           body: JSON.stringify({ user: { emailVerified: true } }),
//         });
//       } else {
//         route.fulfill({
//           status: 401,
//           body: JSON.stringify({ code: 'auth/wrong-password' }),
//         });
//       }
//     });

//     // Mock signOut response
//     await page.route('**/api/signOut', (route) => {
//       route.fulfill({ status: 200, body: '{}' });
//     });

//     // Navigate to the SignInForm page
//     await page.goto('http://localhost:3000/signin');
//   });

//   test('should render the sign-in form correctly', async ({ page }) => {
//     // Check if the email input field is visible
//     await expect(page.getByLabelText('Email Address')).toBeVisible();

//     // Check if the password input field is visible
//     await expect(page.getByLabelText('Password')).toBeVisible();

//     // Check if the sign-in button is visible
//     await expect(page.getByRole('button', { name: 'Sign In' })).toBeVisible();

//     // Check if the "Forgot Password?" link is visible
//     await expect(page.getByText('Forgot Password?')).toBeVisible();
//   });

//   test('should validate empty fields', async ({ page }) => {
//     // Click the sign-in button without filling in the form
//     await page.getByRole('button', { name: 'Sign In' }).click();

//     // Check for validation errors
//     await expect(page.getByText('Email address is required')).toBeVisible();
//     await expect(page.getByText('Password is required')).toBeVisible();
//   });

//   test('should validate invalid email format', async ({ page }) => {
//     // Enter an invalid email format
//     await page.fill('#email', 'invalidemail');

//     // Click the sign-in button
//     await page.getByRole('button', { name: 'Sign In' }).click();

//     // Check for email validation error
//     await expect(page.getByText(AUTH_REGEX.email.message)).toBeVisible();
//   });

//   test('should show error for unverified email', async ({ page }) => {
//     // Enter email and password for an unverified user
//     await page.fill('#email', 'unverified@example.com');
//     await page.fill('#password', 'password123');

//     // Click the sign-in button
//     await page.getByRole('button', { name: 'Sign In' }).click();

//     // Check if the info snackbar is displayed
//     await expect(
//       page.getByText('Please check your inbox to verify your email')
//     ).toBeVisible();
//   });

//   test('should show error for incorrect password', async ({ page }) => {
//     // Enter email and an incorrect password
//     await page.fill('#email', 'test@example.com');
//     await page.fill('#password', 'wrongpassword');

//     // Click the sign-in button
//     await page.getByRole('button', { name: 'Sign In' }).click();

//     // Check if the error message is displayed
//     await expect(
//       page.getByText(AUTH_ERROR_MESSAGES['auth/wrong-password'])
//     ).toBeVisible();
//   });

//   test('should redirect to home on successful sign-in', async ({ page }) => {
//     // Enter valid credentials
//     await page.fill('#email', 'test@example.com');
//     await page.fill('#password', 'password123');

//     // Click the sign-in button
//     await page.getByRole('button', { name: 'Sign In' }).click();

//     // Check if the user is redirected to the home page
//     await expect(page).toHaveURL(ROUTES.HOME);
//   });
// });
