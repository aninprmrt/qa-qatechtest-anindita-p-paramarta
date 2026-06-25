class WebTablesPage {

 // Navigates to the Web Tables page
  visit() {
    cy.visit('/webtables')
  }


  // Opens the Add User registration form
  openRegistrationForm() {
    cy.get('#addNewRecordButton').click()
  }

  // Fills the registration form with user data
  fillForm(user) {
    cy.get('#firstName').type(user.firstName)
    cy.get('#lastName').type(user.lastName)
    cy.get('#userEmail').type(user.email)
    cy.get('#age').type(user.age)
    cy.get('#salary').type(user.salary)
    cy.get('#department').type(user.department)
  }

  // Submits the registration form
  submit() {
    cy.get('#submit').click()
  }

   // Searches for a user in the Web Tables
  searchUser(keyword) {
    cy.get('#searchBox').clear().type(keyword)
  }

  // Clears the search field
  clearSearch() {
    cy.get('#searchBox').clear()
  }

  // Completes the user registration workflow
  addUser(user) {
    this.openRegistrationForm()
    this.fillForm(user)
    this.submit()
  }

  // Verifies that the registered user is displayed in the table
  verifyUser(user) {
    this.searchUser(user.email)

    cy.contains(user.firstName).should('be.visible')
    cy.contains(user.lastName).should('be.visible')
    cy.contains(user.age).should('be.visible')
    cy.contains(user.email).should('be.visible')
    cy.contains(user.salary).should('be.visible')
    cy.contains(user.department).should('be.visible')

    this.clearSearch()
  }

    // Verifies that the First Name field is required
  assertFirstNameIsRequired() {
    cy.get('#firstName:invalid').should('exist')
  }
}

export default new WebTablesPage()
