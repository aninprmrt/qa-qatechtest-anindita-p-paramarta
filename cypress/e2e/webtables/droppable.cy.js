import DroppablePage from "../../pages/DroppablePage"

describe("Droppable Test", () => {

  it("Drag and drop", () => {

    // Navigate to the Droppable page
    DroppablePage.visit()
    // Drag the draggable element into the drop zone
    DroppablePage.dragToDropZone()
    // Verify that the drop action was successful
    DroppablePage.verifyDropped()

  })

})
