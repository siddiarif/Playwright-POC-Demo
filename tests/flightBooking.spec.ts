import { test } from '@playwright/test';
import { HomePage } from '../pages/HomePage';
import { FlightsPage } from '../pages/FlightsPage';
import { PurchasePage } from '../pages/PurchasePage';
import { ConfirmationPage } from '../pages/ConfirmationPage';
import { cityData, passengerData } from '../test-data/bookingData';

test.describe('Flight Booking End-to-End Scenario', () => {
  test('Book flight from Paris to Buenos Aires', async ({ page }) => {
    const homePage = new HomePage(page);
    const flightsPage = new FlightsPage(page);
    const purchasePage = new PurchasePage(page);
    const confirmationPage = new ConfirmationPage(page);

    await test.step('Step 1: Open BlazeDemo application', async () => {
      await homePage.openApplication();
    });

    await test.step('Step 2 and 3: Select departure and destination cities', async () => {
      await homePage.selectDepartureAndDestination(
        cityData.departureCity,
        cityData.destinationCity
      );
    });

    await test.step('Step 4: Click Find Flights button', async () => {
      await homePage.clickFindFlights();
    });

    await test.step('Step 5 and 6: Verify flights list and capture first flight price', async () => {
      await flightsPage.verifyFlightsAreDisplayed();
      const selectedFlightPrice = await flightsPage.getFirstFlightPrice();
      console.log(`Selected first flight price is: ${selectedFlightPrice}`);
    });

    await test.step('Step 7: Choose first available flight', async () => {
      await flightsPage.chooseFirstAvailableFlight();
      await purchasePage.verifyPurchasePageIsOpened();
    });

    await test.step('Step 8 to 14: Enter passenger and payment details', async () => {
      await purchasePage.fillPassengerInformation(passengerData);
      await purchasePage.verifyRememberMeIsUnchecked();
    });

    await test.step('Step 15: Purchase flight', async () => {
      await purchasePage.clickPurchaseFlight();
    });

    await test.step('Step 16 and 17: Verify confirmation message and booking details', async () => {
      await confirmationPage.verifySuccessMessage();
      await confirmationPage.verifyBookingIdGenerated();
      await confirmationPage.verifyBookingSummaryIsVisible();
      await confirmationPage.takeSuccessScreenshot();
    });
  });
});
