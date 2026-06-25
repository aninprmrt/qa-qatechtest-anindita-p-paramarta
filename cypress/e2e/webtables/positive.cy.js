import WebTablesPage from "../../pages/WebTablesPage"

describe("Positive Test - Bulk Registration", () => {

  let users = []

  before(() => {
    return cy.fixture("users.csv", "utf8").then((csv) => {
      return cy.task("parseCsv", csv).then((parsedUsers) => {
        users = parsedUsers
      })
    })
  })

  it("Should add users from CSV", () => {

    WebTablesPage.visit()

    users.forEach((user) => {

      WebTablesPage.addUser(user)
      WebTablesPage.verifyUser(user)

    })

  })

})
