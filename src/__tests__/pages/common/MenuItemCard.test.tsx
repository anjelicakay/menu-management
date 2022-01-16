import { render, screen } from "@testing-library/react";
import MenuItemCard, { MenuItemCardProps } from "../../../pages/common/MenuItemCard";

describe("MenuItemCard", () => {

  const defaultProps: MenuItemCardProps = {
    category: "appetizers",
    description: "Test description",
    image: "bruschetta.jpeg",
    index: 0,
    onRemoveClick: jest.fn(),
    price: 10.00,
    title: "Test appetizer",
  }

  test("Menu item card renders", () => {
    render(<MenuItemCard {...defaultProps} />)
    expect(screen.getByText(defaultProps.title)).toBeInTheDocument()
    expect(screen.getByText(defaultProps.description)).toBeInTheDocument()
    expect(screen.getByRole("button")).toBeInTheDocument()
  })

})
