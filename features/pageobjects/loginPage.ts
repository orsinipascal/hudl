import { ERROR_DISPLAY, EMAIL_INPUT, PASSWORD_INPUT, LOGIN_BUTTON, 
  EMAIL_INPUT_LABEL, PASSWORD_INPUT_LABEL, 
  REMEMBER_ME_CHECKBOX_LABEL, NEED_HELP_LINK,
  LOG_IN_WITH_ORGANIZATION_BUTTON } from "../../UI/TestIds";
import WdioActions from "../../utils/wdioActions";
import { FIFTEEN_SECONDS } from "../../utils/timeout";

export default class loginPage {
  static emailInputLabel(): Promise<WebdriverIO.Element> {
    return $(WdioActions.createTestIdSelector(EMAIL_INPUT_LABEL));
  }

  static emailInput(): Promise<WebdriverIO.Element> {
    return $(WdioActions.createTestIdSelector(EMAIL_INPUT));
  }

  static passwordInputLabel(): Promise<WebdriverIO.Element> {
    return $(WdioActions.createTestIdSelector(PASSWORD_INPUT_LABEL));
  }

  static passwordInput(): Promise<WebdriverIO.Element> {
    return $(WdioActions.createTestIdSelector(PASSWORD_INPUT));
  }

  static logInButton(): Promise<WebdriverIO.Element> {
    return $(WdioActions.createTestIdSelector(LOGIN_BUTTON));
  }

  static rememberMeCheckboxLabel(): Promise<WebdriverIO.Element> {
    return $(WdioActions.createTestIdSelector(REMEMBER_ME_CHECKBOX_LABEL));
  }

  static needHelpLinkLabel(): Promise<WebdriverIO.Element> {
    return $(WdioActions.createTestIdSelector(NEED_HELP_LINK));
  }

  static logInWithAnOrganizationButton(): Promise<WebdriverIO.Element> {
    return $(WdioActions.createTestIdSelector(LOG_IN_WITH_ORGANIZATION_BUTTON));
  }

  static errorDisplay(): Promise<WebdriverIO.Element> {
    return $(WdioActions.createTestIdSelector(ERROR_DISPLAY));
  }

  public static async clickLoginButton() {
    const logInButton = await this.logInButton();
    await logInButton.waitForDisplayed({ timeout: FIFTEEN_SECONDS });
    await logInButton.click();
  }

  public static async setEmailValue(email: string) {
    const emailInput = await this.emailInput();
    await emailInput.waitForDisplayed({ timeout: FIFTEEN_SECONDS });
    await emailInput.setValue(email);
  }

  public static async setPasswordValue(password: string) {
    const passwordInput = await this.passwordInput();
    await passwordInput.waitForDisplayed({ timeout: FIFTEEN_SECONDS });
    await passwordInput.setValue(password);
  }

  public static async logIn(email: string, password: string) {
    await this.setEmailValue(email);
    await this.setPasswordValue(password);
    await this.clickLoginButton();
  }

  public static async getErrorDisplayText(): Promise<string> {
    const errorDisplay = await this.errorDisplay();
    await errorDisplay.waitForDisplayed({ timeout: FIFTEEN_SECONDS });
    const errorDisplayText = await errorDisplay.getText();

    return errorDisplayText;
  }

  public static async getEmailInputLabelText(): Promise<string> {
    const emailInputLabel = await this.emailInputLabel();
    await emailInputLabel.waitForDisplayed({ timeout: FIFTEEN_SECONDS });
    const emailInputLabelText = await emailInputLabel.getText();

    return emailInputLabelText;
  }

  public static async getEmailInputType(): Promise<string> {
    const emailInput = await this.emailInput();
    await emailInput.waitForDisplayed({ timeout: FIFTEEN_SECONDS });
    const emailInputType = await emailInput.getAttribute("type");

    return emailInputType;
  }

  public static async getPasswordInputLabelText(): Promise<string> {
    const passwordInputLabel = await this.passwordInputLabel();
    await passwordInputLabel.waitForDisplayed({ timeout: FIFTEEN_SECONDS });
    const passwordInputLabelText = await passwordInputLabel.getText();

    return passwordInputLabelText;
  }

  public static async getPasswordInputType(): Promise<string> {
    const passwordInput = await this.passwordInput();
    await passwordInput.waitForDisplayed({ timeout: FIFTEEN_SECONDS });
    const passwordInputType = await passwordInput.getAttribute("type");

    return passwordInputType;
  }

  public static async rememberMeCheckboxLabelText(): Promise<string> {
    const rememberMeCheckboxLabel = await this.rememberMeCheckboxLabel();
    await rememberMeCheckboxLabel.waitForDisplayed({ timeout: FIFTEEN_SECONDS });
    const rememberMeCheckboxLabelText = await rememberMeCheckboxLabel.getText();

    return rememberMeCheckboxLabelText;
  }

  public static async getNeedHelpLinkText(): Promise<string> {
    const needHelpLink = await this.needHelpLinkLabel();
    await needHelpLink.waitForDisplayed({ timeout: FIFTEEN_SECONDS });
    const needHelpLinkLabelText = await needHelpLink.getText();

    return needHelpLinkLabelText;
  }

  public static async getLogInButtonText(): Promise<string> {
    const logInButton = await this.logInButton();
    await logInButton.waitForDisplayed({ timeout: FIFTEEN_SECONDS });
    const logInButtonText = await logInButton.getText();

    return logInButtonText;
  }

  public static async getLogInButtonType(): Promise<string> {
    const logInButton = await this.logInButton();
    await logInButton.waitForDisplayed({ timeout: FIFTEEN_SECONDS });
    const logInButtonType = await logInButton.getAttribute("type");

    return logInButtonType;
  }

  public static async getLogInWithAnOrganizationButtonText(): Promise<string> {
    const logInWithAnOrganizationButton = await this.logInWithAnOrganizationButton();
    await logInWithAnOrganizationButton.waitForDisplayed({ timeout: FIFTEEN_SECONDS });
    const logInWithAnOrganizationButtonText = await logInWithAnOrganizationButton.getText();

    return logInWithAnOrganizationButtonText;
  }

  public static async getLogInWithAnOrganizationButtonType(): Promise<string> {
    const logInWithAnOrganizationButton = await this.logInWithAnOrganizationButton();
    await logInWithAnOrganizationButton.waitForDisplayed({ timeout: FIFTEEN_SECONDS });
    const logInWithAnOrganizationButtonType = await logInWithAnOrganizationButton.getAttribute("type");

    return logInWithAnOrganizationButtonType;
  }
  
}
