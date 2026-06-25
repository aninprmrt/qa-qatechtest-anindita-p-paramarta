class DroppablePage {

  visit() {
    cy.visit('/droppable')
  }

  waitUntilReady() {
    cy.window().its('$.fn.draggable').should('be.a', 'function')
    cy.get('#draggable').should('have.class', 'ui-draggable')
  }

  dragToDropZone() {
    this.waitUntilReady()

    cy.window().then((win) => {
      const $ = win.$
      const $draggable = $('#draggable')
      const $droppable = $('#droppable')
      const draggableOffset = $draggable.offset()
      const droppableOffset = $droppable.offset()
      const startX = draggableOffset.left + $draggable.outerWidth() / 2
      const startY = draggableOffset.top + $draggable.outerHeight() / 2
      const endX = droppableOffset.left + $droppable.outerWidth() / 2
      const endY = droppableOffset.top + $droppable.outerHeight() / 2

      $draggable.trigger($.Event('mousedown', {
        which: 1,
        pageX: startX,
        pageY: startY,
      }))

      $(win.document).trigger($.Event('mousemove', {
        which: 1,
        pageX: endX,
        pageY: endY,
      }))

      $(win.document).trigger($.Event('mouseup', {
        which: 1,
        pageX: endX,
        pageY: endY,
      }))
    })
  }

  verifyDropped() {
    cy.get('#droppable').should('have.text', 'Dropped!')
  }
}

export default new DroppablePage()
