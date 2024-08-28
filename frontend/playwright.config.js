export const testDir = './tests/';
export const timeout = 30000;
export const retries = 2;
export const use = {
  baseURL: 'http://localhost:3000', // The base URL of your Next.js app
  headless: true, // Set to false if you want to see the browser during testing
  viewport: { width: 1280, height: 720 }, // Default viewport size
  ignoreHTTPSErrors: true, // Ignore HTTPS errors
};
