import ResizablePage from "../../pages/ResizablePage"

describe("Resizable Test", () => {

  it("Resize the restricted element to 400 x 200", () => {

    // Navigate to the Resizable page
    ResizablePage.visit()
     // Resize the restricted box to the required dimensions
    ResizablePage.resizeRestrictedBox(400, 200)
     // Verify that the box size is 400 x 200
    ResizablePage.verifyRestrictedBoxSize(400, 200)

  })

})
