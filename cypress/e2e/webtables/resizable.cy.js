import ResizablePage from "../../pages/ResizablePage"

describe("Resizable Test", () => {

  it("Resize the restricted element to 400 x 200", () => {

    ResizablePage.visit()
    ResizablePage.resizeRestrictedBox(400, 200)
    ResizablePage.verifyRestrictedBoxSize(400, 200)

  })

})
