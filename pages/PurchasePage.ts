import { Page, expect } from '@playwright/test';
import { PassengerDetails } from '../test-data/bookingData';

export class PurchasePage {
  constructor(private page: Page) {}

  private nameInput = '#inputName';
  private addressInput = '#address';
  private cityInput = '#city';
  private stateInput = '#state';
  private zipCodeInput = '#zipCode';
  private cardTypeDropdown = '#cardType';
  private cardNumberInput = '#creditCardNumber';
  private cardMonthInput = '#creditCardMonth';
  private cardYearInput = '#creditCardYear';
  private nameOnCardInput = '#nameOnCard';
  private rememberMeCheckbox = '#rememberMe';
  private purchaseFlightButton = 'input[value="Purchase Flight"]';

  async verifyPurchasePageIsOpened() {
    await expect(this.page.locator('h2')).toContainText('Your flight from');
  }

  async fillPassengerInformation(data: PassengerDetails) {
    await this.page.fill(this.nameInput, data.name);
    await this.page.fill(this.addressInput, data.address);
    await this.page.fill(this.cityInput, data.city);
    await this.page.fill(this.stateInput, data.state);
    await this.page.fill(this.zipCodeInput, data.zipCode);
    await this.page.selectOption(this.cardTypeDropdown, data.cardType);
    await this.page.fill(this.cardNumberInput, data.cardNumber);
    await this.page.fill(this.cardMonthInput, data.cardMonth);
    await this.page.fill(this.cardYearInput, data.cardYear);
    await this.page.fill(this.nameOnCardInput, data.nameOnCard);
  }

  async verifyRememberMeIsUnchecked() {
    await expect(this.page.locator(this.rememberMeCheckbox)).not.toBeChecked();
  }

  async clickPurchaseFlight() {
    await this.page.click(this.purchaseFlightButton);
  }
}
