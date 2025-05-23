const { chromium } = require('playwright')
const {expect} = require("@playwright/test");

try {
  await page.goto('https://www.lambdatest.com/selenium-playground');
  await page.getByLink('Simple Form Demo').click();
  await expect(page).toHaveURL(/.*simple-form-demo.*/);
  const inputMessage = 'Welcome to LambdaTest';
  await page.fill('#user-message', inputMessage);
  await page.getByRole('button', { name: 'Get Checked Value' }).click();
  const displayedMessage = await page.textContent('#message');
    expect(displayedMessage?.trim()).toBe(inputMessage);
  await page.goto('https://www.lambdatest.com/selenium-playground');
  await page.getByLink('Drag & Drop Sliders').click();
  const slider = page.locator("input[type='range']");
  await slider.evaluate(slider => slider.value = 95);
  await slider.dispatchEvent('input');
  const rangeValue = await page.textContent("#rangeSuccess");
  expect(rangeValue.trim()).toBe('95');
  await page.goto('https://www.lambdatest.com/selenium-playground');
  await page.getByLink('Input Form Submit').click();
  await page.getByRole('button', { name: 'Submit' }).click();
  const errorMessage = await page.textContent(".parsley-errors-list");
    expect(errorMessage.trim()).toBe("Please fill in the fields");
  await page.getByRole('textbox', {name: 'Name'}).fill('Aditi');
  await page.getByRole('textbox', {name: 'Email'}).fill('adc@gmail.com'); 
  await page.getByRole('textbox', {name: 'Password'}).fill('Password@123');
  await page.getByRole('textbox', {name: 'Company'}).fill('Qwerty123');
  await page.getByRole('textbox', {name: 'Website'}).fill('www.lambdatest.com');
  await this.page.selectOption("#inputCountry", { label: "United States" });
  await page.getByRole('textbox', {name: 'City'}).fill('New York');
  await page.getByRole('textbox', {name: 'Address 1'}).fill('123 Main St');
  await page.getByRole('textbox', {name: 'Address 2'}).fill('Suite 100');
  await page.getByRole('textbox', {name: 'City* State'}).fill('NY');
  await page.getByRole('textbox', {name: 'Zip Code'}).fill('10001');
  await page.getByRole('button', { name: 'Submit' }).click();
  const successMessage = await page.textContent(".success-msg");
    expect(successMessage.trim()).toBe("Thanks for contacting us, we will get back to you shortly.")

    await page.evaluate(_ => {}, `lambdatest_action: ${JSON.stringify({ action: 'setTestStatus', arguments: { status: 'passed', remark: 'Title matched' } })}`)
    await teardown(page, browser)
  } catch (e) {
    await page.evaluate(_ => {}, `lambdatest_action: ${JSON.stringify({ action: 'setTestStatus', arguments: { status: 'failed', remark: e.stack } })}`)
    await teardown(page, browser)
    throw e.stack
  }
  const capabilities = [
    {
      'browserName': 'Chrome', // Browsers allowed: `Chrome`, `MicrosoftEdge`, `pw-chromium`, `pw-firefox` and `pw-webkit`
      'browserVersion': 'latest',
      'LT:Options': {
        'platform': 'Windows 10',
        'build': 'Playwright With Parallel Build',
        'name': 'Playwright Sample Test on Windows 10 - Chrome',
        'user': process.env.LT_USERNAME,
        'accessKey': process.env.LT_ACCESS_KEY,
        'network': true,
        'video': true,
        'console': true,
        'playwrightClientVersion': playwrightClientVersion
      }
    },
    {
      'browserName': 'pw-firefox',
      'browserVersion': 'latest',
      'LT:Options': {
        'platform': 'macOS Catalina,',
        'build': 'Playwright With Parallel Build',
        'name': 'Playwright Sample Test on Windows 8 - MicrosoftEdge',
        'user': process.env.LT_USERNAME,
        'accessKey': process.env.LT_ACCESS_KEY,
        'network': true,
        'video': true,
        'console': true,
        'playwrightClientVersion': playwrightClientVersion
      }
    }
]