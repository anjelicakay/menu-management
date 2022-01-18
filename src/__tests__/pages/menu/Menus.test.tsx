import { render, screen, waitFor } from "@testing-library/react";
import { Menus, MenusProps } from "../../../pages/menu/Menus";

describe("Menus", () => {

  const defaultProps: MenusProps = {
    activeMenu: {
      categories: ["pasta", "salad"],
      menuItems: [],
      type: "lunch"
    },
    getRestaurantMenus: jest.fn(),
    menus: [],
    updateActiveMenu: jest.fn()
  }

  test("Menu renders", () => {
    render(<Menus {...defaultProps} />)
    expect(screen.getByText("Add New Item")).toBeInTheDocument()
  })

  test("Add menu item form displays on button click", async () => {
    render(<Menus {...defaultProps} />)
    expect(screen.queryByTestId("add-new-item-form")).not.toBeInTheDocument()
    screen.getByTestId("add-item-button").click()

    await waitFor(() => {
      expect(screen.getByTestId("add-new-item-form")).toBeInTheDocument()
    })
  })

})