import { Given, When, Then } from "@wdio/cucumber-framework";
import { FIFTEEN_SECONDS } from "../../utils/timeout";

import loginPage from "../pageobjects/loginPage";
import homePage from "../pageobjects/homePage";

const homeUrl = "https://www.hudl.com/home";
const loginUrl = "https://www.hudl.com/login";
const errorMessage = "We didn't recognize that email and/or password.Need help?";

Given(/^I am on the login page$/, async () => {
  await homePage.loadHomePage();
});

Given(/^I click on the log in button$/, async () => {
  await homePage.clickLoginButton();
});

When(/^no email and password are entered$/, async () => {
  await loginPage.clickLoginButton();
});

When(/^I login with (.*) and (.*)$/, async (email: string, password: string) => {
  await loginPage.logIn(email, password);
});

Then(/^I should be logged in$/, async () => {
  await browser.waitUntil(async () => (await browser.getUrl()) === homeUrl, {
    timeout: FIFTEEN_SECONDS,
    timeoutMsg: "timeout: expected URL to be changed",
  });
  expect(await browser.getUrl()).toBe(homeUrl);
});

Then(/^an error message should be displayed$/, async () => {
  const errorDisplayText = await loginPage.getErrorDisplayText();

  expect(errorDisplayText).toBe(errorMessage);
});

Then(/^I should not be logged in$/, async () => {
  expect(await browser.getUrl()).toBe(loginUrl);
});

Then(/^I expect the inputs to be email and password type$/, async () => {
  const emailInputType = await loginPage.getEmailInputType();
  const passwordInputType = await loginPage.getPasswordInputType();

  expect(emailInputType).toBe("email");
  expect(passwordInputType).toBe("password");
});

Then(/^the email and password labels and input fields should be displayed$/, async () => {
  const emailInput = await loginPage.emailInput();
  const emailInputLabelText = await loginPage.getEmailInputLabelText();
  const passwordInput = await loginPage.passwordInput();
  const passwordInputLabelText = await loginPage.getPasswordInputLabelText();

  expect(await emailInput.isDisplayed()).toBe(true);
  expect(emailInputLabelText).toBe("Email");

  expect(await passwordInput.isDisplayed()).toBe(true);
  expect(passwordInputLabelText).toBe("Password");
});

Then(/^a log in button should be displayed$/, async () => {
    const logInWithButtonType = await loginPage.getLogInButtonType();
    const logInWithButtonLabel = await loginPage.getLogInButtonText();
  
    expect(logInWithButtonType).toBe("submit");
    expect(logInWithButtonLabel).toBe("Log In");
  });

Then(/^a remember me checkbox and a need help link should be displayed$/, async () => {
  const rememberMeCheckboxLabel = await loginPage.rememberMeCheckboxLabelText();
  const needHelpLabelText = await loginPage.getNeedHelpLinkText();

  expect(rememberMeCheckboxLabel).toBe("Remember me");
  expect(needHelpLabelText).toBe("Need help?");
});

Then(/^a log in with an organization button should be displayed$/, async () => {
  const logInWithAnOrganizationButtonType = await loginPage.getLogInWithAnOrganizationButtonType();
  const logInWithAnOrganizationButtonLabel = await loginPage.getLogInWithAnOrganizationButtonText();

  expect(logInWithAnOrganizationButtonType).toBe("button");
  expect(logInWithAnOrganizationButtonLabel).toBe("Log In with an Organization");
});
