import WebTablesPage from "../../pages/WebTablesPage"

describe("Positive Test - Bulk Registration", () => {

  let users = []

    // Load user data from the CSV file before running the t
  before(() => {
    return cy.fixture("users.csv", "utf8").then((csv) => {
      return cy.task("parseCsv", csv).then((parsedUsers) => {
        users = parsedUsers
      })
    })
  })

  it("Should add users from CSV", () => {

    // Navigate to the Web Tables page
    WebTablesPage.visit()


    // Register and verify each user from the CSV file
    users.forEach((user) => {

      WebTablesPage.addUser(user)
      WebTablesPage.verifyUser(user)

    })

  })

})
