import { render, screen, waitFor } from "@testing-library/react";
import Menu from "../../../pages/menu/Menu";

describe("Menu", () => {

  test("Menu renders", () => {
    render(<Menu />)
    expect(screen.getByText("Add New Item")).toBeInTheDocument()
  })

  test("Add menu item form displays on button click", async () => {
    render(<Menu />)
    expect(screen.queryByTestId("add-new-item-form")).not.toBeInTheDocument()
    screen.getByTestId("add-item-button").click()

    await waitFor(() => {
      expect(screen.getByTestId("add-new-item-form")).toBeInTheDocument()
    })
  })

})