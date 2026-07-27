import { Page, expect } from '@playwright/test';

export class ConfirmationPage {
  constructor(private page: Page) {}

  private successMessage = 'h1';
  private bookingTableRows = 'table tr';

  async verifySuccessMessage() {
    await expect(this.page.locator(this.successMessage)).toHaveText('Thank you for your purchase today!');
  }

  async getBookingId() {
    const bookingId = await this.page.locator(this.bookingTableRows).nth(1).locator('td').nth(1).innerText();
    return bookingId.trim();
  }

  async verifyBookingIdGenerated() {
    const bookingId = await this.getBookingId();
    expect(bookingId.length).toBeGreaterThan(0);
  }

  async verifyBookingSummaryIsVisible() {
    await expect(this.page.locator('table')).toBeVisible();
  }

  async takeSuccessScreenshot() {
    await this.page.screenshot({ path: 'screenshots/booking-success.png', fullPage: true });
  }
}
