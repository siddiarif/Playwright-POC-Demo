# Flight Booking Automation Assignment

Beginner friendly Playwright + TypeScript automation project for the BlazeDemo travel application.

## Application URL

[BlazeDemo](https://blazedemo.com)

## Scenario Covered

Functional end-to-end flight booking flow:

1. Open application
2. Select departure city as Paris
3. Select destination city as Buenos Aires
4. Click Find Flights
5. Verify flights are displayed
6. Capture first flight price
7. Choose first flight
8. Enter passenger details
9. Enter payment details
10. Keep Remember Me unchecked
11. Purchase flight
12. Verify confirmation message
13. Verify booking reference number and summary table

## Folder Structure

```text
FlightBookingAutomation
├── pages
│   ├── HomePage.ts
│   ├── FlightsPage.ts
│   ├── PurchasePage.ts
│   └── ConfirmationPage.ts
├── tests
│   └── flightBooking.spec.ts
├── test-data
│   └── bookingData.ts
├── screenshots
├── playwright.config.ts
├── package.json
├── tsconfig.json
├── README.md
└── .gitignore
```

## Prerequisites

Install these before running the project:

1. Node.js
2. Visual Studio Code
3. Git

## Local Setup Steps

### Step 1: Open project in VS Code

Open the `FlightBookingAutomation` folder in VS Code.

### Step 2: Install dependencies

```bash
npm install
```

### Step 3: Install Playwright browsers

```bash
npx playwright install
```

### Step 4: Run test in headed mode

```bash
npm run test:headed
```

### Step 5: Run test normally

```bash
npm test
```

### Step 6: Open HTML report

```bash
npm run report
```

## GitHub Upload Commands

Run below commands from inside the project folder:

```bash
git init
git add .
git commit -m "Add flight booking Playwright assignment"
git branch -M main
git remote add origin <your-github-repository-url>
git push -u origin main
```

Replace `<your-github-repository-url>` with your actual GitHub repository URL.

## Beginner Notes

- `tests/flightBooking.spec.ts` contains the main test scenario.
- `pages/` folder contains page wise reusable functions.
- `test-data/bookingData.ts` contains all input data.
- `playwright.config.ts` contains browser and test configuration.
- Test runs in headed mode so browser actions are visible.

## Assignment Highlights

- Simple Page Object Model structure
- TypeScript based test data
- Clear step by step test flow
- Beginner friendly naming
- Screenshot captured after successful booking
- HTML report support
