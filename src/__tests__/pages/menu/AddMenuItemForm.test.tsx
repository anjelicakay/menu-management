import { render, screen, waitFor } from "@testing-library/react";
import userEvent from '@testing-library/user-event'
import AddMenuItemForm, { AddMenuItemFormProps } from "../../../pages/menu/AddMenuItemForm";

describe("AddMenuItemForm", () => {

  const defaultProps: AddMenuItemFormProps = {
    onSubmit: jest.fn()
  }

  test("inputs are shown with empty values", () => {
    render(<AddMenuItemForm {...defaultProps} />)
    expect(screen.getByTestId("item-input-category")).toHaveValue("")
    expect(screen.getByTestId("item-input-title")).toHaveValue("")
    expect(screen.getByTestId("item-input-description")).toHaveValue("")
    expect(screen.getByTestId("item-input-price")).toHaveValue(0)
    expect(screen.getByTestId("item-input-image")).toHaveValue("")
  })

  test("submits the form", async () =>{
    render(<AddMenuItemForm {...defaultProps} />)
  
    userEvent.selectOptions(screen.getByTestId("item-input-category"), "pasta")
    userEvent.type(screen.getByTestId("item-input-title"), "New title")
    userEvent.type(screen.getByTestId("item-input-description"), "New description")
    userEvent.type(screen.getByTestId("item-input-price"), "10.00")
    userEvent.type(screen.getByTestId("item-input-image"), "New image url")
  
    userEvent.click(screen.getByRole("button", {name: /submit/i}))
  
    await waitFor(() =>
      expect(defaultProps.onSubmit).toHaveBeenCalledWith(
        {
          category: "pasta",
          description: "New description",
          title: "New title",
          price: 10,
          image: "New image url"
        }
      ),
    )
  })

})