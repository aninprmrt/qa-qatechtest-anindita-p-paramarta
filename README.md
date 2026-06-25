# Cypress Technical Test

Automation testing project developed for the PT Transportasi Jakarta Technical Test. The project uses Cypress with the Page Object Model (POM) pattern and CSV-based data-driven testing to automate user registration on the DemoQA website.

## Scope

- Positive test: bulk registration on `https://demoqa.com/webtables`
- Negative test: submit empty form validation
- Optional test: drag and drop on `https://demoqa.com/droppable`
- Optional test: resize element to `400 x 200` on `https://demoqa.com/resizable`

## Tech Stack

- Cypress
- JavaScript
- Page Object Model (POM)
- CSV fixture parsing with `neat-csv`

## Project Structure

```text
cypress/
  e2e/webtables/
    positive.cy.js
    negative.cy.js
    droppable.cy.js
    resizable.cy.js
  fixtures/
    users.csv
  pages/
    WebTablesPage.js
    DroppablePage.js
    ResizablePage.js
  support/
    e2e.js
    commands.js
cypress.config.js
package.json
package-lock.json
```

## Prerequisites

- Node.js 18+ recommended
- npm

## Installation

```bash
npm install
```

If Cypress binary is not installed yet, run:

```bash
npx cypress install
```

## Run Tests

Open Cypress UI:

```bash
npm run cy:open
```

Run all specs headless:

```bash
npm run cy:run
```

Run individual specs:

```bash
npm run cy:run:positive
npm run cy:run:negative
npm run cy:run:droppable
npm run cy:run:resizable
```

## Test Data

Bulk registration data is stored in `cypress/fixtures/users.csv`.

The positive test reads the CSV fixture and parses it through a Cypress task defined in `cypress.config.js`.

## Notes

- `baseUrl` is configured as `https://demoqa.com` in `cypress.config.js`
- Test data is stored in CSV format
- The project follows the Page Object Model (POM) design patter
- Viewport is set to `1280 x 720`
- Video recording is disabled

## Test Scenarios

| Test | Description |
|------|-------------|
| Positive | Register multiple users from CSV and verify each record |
| Negative | Verify that the registration form cannot be submitted when the required field is empty |
| Droppable | Drag an element into the drop area and verify success |
| Resizable | Resize the restricted element to 400 × 200 and verify the final size |