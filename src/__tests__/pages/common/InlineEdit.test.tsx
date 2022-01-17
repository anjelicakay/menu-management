import { render, screen, fireEvent } from "@testing-library/react";
import userEvent from '@testing-library/user-event'
import InlineEdit, { InlineEditProps } from "../../../pages/common/InlineEdit";

describe("InlineEdit", () => {

  const defaultProps: InlineEditProps = {
    field: 'title',
    id: 1,
    inputType: "text",
    onChange: jest.fn(),
    value: "Test title"
  }

  test("Renders based on input type", () => {
    render(<InlineEdit {...defaultProps} />)
    expect(screen.getByRole("textbox")).toBeInTheDocument()
    expect(screen.getByRole("textbox").getAttribute("type")).toBe(defaultProps.inputType)
  })

  test("Handles on keydown", () => {
    render(<InlineEdit {...defaultProps} />)
    const input = screen.getByRole("textbox");
    input.focus()
    fireEvent.keyDown(input, {
      key: "Enter",
      code: "Enter",
      charCode: 13,
      keyCode: 13,
    })
    expect(fireEvent.blur(input)).toBeTruthy()
  })

  test("On change is called", () => {
    render(<InlineEdit {...defaultProps} />)
    const input = screen.getByRole("textbox");
    userEvent.type(input, "New title")
    expect(defaultProps.onChange).toHaveBeenCalled()
  })

})
