class ResizablePage {

  visit() {
    cy.visit('/resizable')
  }

  resizeRestrictedBox(width, height) {
    cy.get('#resizableBoxWithRestriction').then(($box) => {
      const boxRect = $box[0].getBoundingClientRect()
      const currentWidth = Math.round(boxRect.width)
      const currentHeight = Math.round(boxRect.height)
      const targetX = boxRect.right + (width - currentWidth)
      const targetY = boxRect.bottom + (height - currentHeight)

      cy.wrap($box)
        .find('.react-resizable-handle-se')
        .trigger('mousedown', {
          button: 0,
          clientX: boxRect.right,
          clientY: boxRect.bottom,
          pageX: boxRect.right,
          pageY: boxRect.bottom,
          force: true,
        })

      cy.get('body')
        .trigger('mousemove', {
          button: 0,
          clientX: targetX,
          clientY: targetY,
          pageX: targetX,
          pageY: targetY,
          force: true,
        })
        .trigger('mouseup', { force: true })
    })
  }

  verifyRestrictedBoxSize(width, height) {
    cy.get('#resizableBoxWithRestriction').should(($box) => {
      const boxRect = $box[0].getBoundingClientRect()

      expect(Math.round(boxRect.width)).to.equal(width)
      expect(Math.round(boxRect.height)).to.equal(height)
    })
  }
}

export default new ResizablePage()
