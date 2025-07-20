const { chromium, firefox, webkit } = require('playwright');  // Import Playwright's browser objects
const browserstack = require('browserstack-playwright');

// BrowserStack credentials
const username = "YOUR_BROWSERSTACK_USERNAME";
const accessKey = "YOUR_BROWSERSTACK_ACCESS_KEY";

// Function to launch browser and perform login test
async function runCrossBrowserTests() {
  const browsers = [chromium, firefox, webkit];  // Array of browsers
  const browserNames = ["chrome", "firefox", "safari"];  // Corresponding browser names

  for (let i = 0; i < browsers.length; i++) {
    const browser = browsers[i];
    const browserName = browserNames[i];

    // Set up BrowserStack capabilities
    const capabilities = {
      browserName: browserName,  // Set browser name
      os: "Windows",  // OS configuration
      os_version: "10",  // OS version
      name: "Sauce Demo Login Test on " + browserName,  // Test name
      build: "BrowserStack-Playwright-1",  // Build name
      'browserstack.username': username,  // BrowserStack username
      'browserstack.accessKey': accessKey,  // BrowserStack access key
    };

    // Connect to BrowserStack and launch the browser
    const browserStackInstance = await browserstack.launchBrowser(capabilities);
    const page = await browserStackInstance.newPage();  // Open a new page

    // Run the test
    await page.goto("https://www.saucedemo.com/");  // Navigate to SauceDemo
    await page.fill('#user-name', 'standard_user');  // Fill in the username field
    await page.fill('#password', 'secret_sauce');  // Fill in the password field
    await page.click('#login-button');  // Click the login button

    // Check if login was successful by verifying URL
    const currentURL = page.url();
    if (currentURL.includes("inventory.html")) {
      console.log("Login test passed on " + browserName);
    } else {
      console.log("Login test failed on " + browserName);
    }

    await page.close();  // Close the page
  }
}

// Run the tests and catch any errors
runCrossBrowserTests().catch(console.error);
