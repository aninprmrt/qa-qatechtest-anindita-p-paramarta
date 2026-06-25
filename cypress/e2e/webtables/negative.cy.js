import WebTablesPage from "../../pages/WebTablesPage"

describe("Negative Test", () => {

  it("Should not submit empty form", () => {

    WebTablesPage.visit()
    WebTablesPage.openRegistrationForm()
    WebTablesPage.submit()
    WebTablesPage.assertFirstNameIsRequired()

  })

})
