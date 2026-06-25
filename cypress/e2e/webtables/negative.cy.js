import WebTablesPage from "../../pages/WebTablesPage"

describe("Negative Test", () => {

  it("Should not submit empty form", () => {

    // Navigate to the Web Tables page
    WebTablesPage.visit()
    // Open the registration form
    WebTablesPage.openRegistrationForm()
    // Open the registration form
    WebTablesPage.submit()
    // Verify that the First Name field is required
    WebTablesPage.assertFirstNameIsRequired()

  })

})
