import { Page, expect } from '@playwright/test';

export class HomePage {
  constructor(private page: Page) {}

  private departureDropdown = 'select[name="fromPort"]';
  private destinationDropdown = 'select[name="toPort"]';
  private findFlightsButton = 'input[value="Find Flights"]';

  async openApplication() {
    await this.page.goto('/');
    await expect(this.page).toHaveTitle(/BlazeDemo/);
  }

  async selectDepartureAndDestination(departureCity: string, destinationCity: string) {
    await this.page.selectOption(this.departureDropdown, departureCity);
    await this.page.selectOption(this.destinationDropdown, destinationCity);
  }

  async clickFindFlights() {
    await this.page.click(this.findFlightsButton);
  }
}
