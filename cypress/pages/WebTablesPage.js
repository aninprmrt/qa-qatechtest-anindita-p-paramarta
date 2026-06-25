class WebTablesPage {

  visit() {
    cy.visit('/webtables')
  }

  openRegistrationForm() {
    cy.get('#addNewRecordButton').click()
  }

  fillForm(user) {
    cy.get('#firstName').type(user.firstName)
    cy.get('#lastName').type(user.lastName)
    cy.get('#userEmail').type(user.email)
    cy.get('#age').type(user.age)
    cy.get('#salary').type(user.salary)
    cy.get('#department').type(user.department)
  }

  submit() {
    cy.get('#submit').click()
  }

  searchUser(keyword) {
    cy.get('#searchBox').clear().type(keyword)
  }

  clearSearch() {
    cy.get('#searchBox').clear()
  }

  addUser(user) {
    this.openRegistrationForm()
    this.fillForm(user)
    this.submit()
  }

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

  assertFirstNameIsRequired() {
    cy.get('#firstName:invalid').should('exist')
  }
}

export default new WebTablesPage()
