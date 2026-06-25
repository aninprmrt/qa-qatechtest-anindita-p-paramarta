import DroppablePage from "../../pages/DroppablePage"

describe("Droppable Test", () => {

  it("Drag and drop", () => {

    DroppablePage.visit()
    DroppablePage.dragToDropZone()
    DroppablePage.verifyDropped()

  })

})
