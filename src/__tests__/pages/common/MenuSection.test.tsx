import { render, screen } from "@testing-library/react";
import MenuSection, { MenuSectionProps } from "../../../pages/common/MenuSection";

const menuItems = [
  {
    description: "Test description",
    image: "bruschetta.jpeg",
    price: 10.00,
    title: "Test title"
  },
  {
    description: "Test description 2",
    image: "cookie.jpeg",
    price: 10.00,
    title: "Test title 2"
  }
]

describe("MenuSection", () => {

  const defaultProps: MenuSectionProps = {
    category: "appetizers",
    menu: menuItems,
    onRemoveClick: jest.fn(),
  }

  test("Menu section renders", () => {
    render(<MenuSection {...defaultProps} />)
    expect(screen.getByText(defaultProps.category)).toBeInTheDocument()
  })

})