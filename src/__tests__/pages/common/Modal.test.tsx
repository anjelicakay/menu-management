import { render, screen } from "@testing-library/react";
import Modal, { ModalProps } from "../../../pages/common/Modal";

describe("Modal", () => {

  const defaultProps: ModalProps = {
    children: <div>Render modal</div>,
    onClose: jest.fn()
  }

  test("Menu item card renders", () => {
    render(<Modal {...defaultProps} />)
    expect(screen.getByRole("button")).toBeInTheDocument()
    expect(screen.getByText("Render modal")).toBeInTheDocument()
  })

})
