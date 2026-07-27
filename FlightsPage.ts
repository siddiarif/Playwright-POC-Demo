import { Page, expect } from '@playwright/test';

export class FlightsPage {
  constructor(private page: Page) {}

  private flightRows = 'table tbody tr';
  private chooseFlightButton = 'input[value="Choose This Flight"]';

  async verifyFlightsAreDisplayed() {
    const rowsCount = await this.page.locator(this.flightRows).count();
    expect(rowsCount).toBeGreaterThan(0);
  }

  async getFirstFlightPrice() {
    const priceText = await this.page.locator(this.flightRows).first().locator('td').nth(5).innerText();
    return priceText.trim();
  }

  async chooseFirstAvailableFlight() {
    await this.page.locator(this.chooseFlightButton).first().click();
  }
}
