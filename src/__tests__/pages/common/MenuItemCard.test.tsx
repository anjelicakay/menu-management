import { render, screen } from "@testing-library/react";
import MenuItemCard, { MenuItemCardProps } from "../../../pages/common/MenuItemCard";

describe("MenuItemCard", () => {

  const defaultProps: MenuItemCardProps = {
    description: "Test description",
    image: "bruschetta.jpeg",
    id: 1,
    onChange: jest.fn(),
    onRemoveClick: jest.fn(),
    price: 10.00,
    title: "Test appetizer",
  }

  test("Menu item card renders", () => {
    render(<MenuItemCard {...defaultProps} />)
    expect(screen.getByDisplayValue(defaultProps.title)).toBeInTheDocument()
    expect(screen.getByDisplayValue(defaultProps.description)).toBeInTheDocument()
    expect(screen.getByRole("button")).toBeInTheDocument()
  })

})
