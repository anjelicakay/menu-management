import { render, screen } from "@testing-library/react";
import RemoveConfirmation, { RemoveConfirmationProps } from "../../../pages/menu/RemoveConfirmation";

describe("RemoveConfirmation", () => {

  const defaultProps: RemoveConfirmationProps = {
    onCancelClick: jest.fn(),
    onRemoveClick: jest.fn()
  }

  test("Displays buttons", () => {
    render(<RemoveConfirmation {...defaultProps} />)
    expect(screen.getByText("Yes")).toBeInTheDocument()
    expect(screen.getByText("Cancel")).toBeInTheDocument()
  })

})