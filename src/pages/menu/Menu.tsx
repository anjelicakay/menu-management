import React, { useState } from 'react';

import '../../themes/menu/Menu.scss';
import MenuSection from '../common/MenuSection';
import Modal from '../common/Modal';
import AddMenuItemForm from './AddMenuItemForm';

export interface menuItem {
  description: string;
  image: string;
  price: number;
  title: string;
}

export interface menuItemsProps {
  appetizers: menuItem[];
  pasta: menuItem[];
  dessert: menuItem[];
}

const items: menuItemsProps = {
  appetizers: [
    { description: "on grilled garlic crostini", image: "bruschetta.jpeg", price: 12.00, title: "Fresh Tomato Bruschetta" },
    { description: "in garlic butter sauce", image: "clams.jpeg", price: 8.00, title: "Half-Dozen Baked Clams" },
    { description: "cocktail sauce, fresh lemon", image: "calamari.jpeg", price: 15.00, title: "Fried Calamari" },
    { description: "our famous meatballs, romaine salad, red wine vinaigrette", image: "meatball.jpeg", price: 13.00, title: "Meatball Salad" }
  ],
  pasta: [
    { description: "olive oil, garlic, white wine, red pepper flakes", image: "linguine.jpeg", price: 25.00, title: "Linguine with Clams" },
    { description: "creamy tomato sauce with a touch of vodka", image: "rigatoni.jpeg", price: 20.00, title: "Rigatoni Vodka" },
    { description: "four cheese stuffed, fresh marinara", image: "ravioli.jpeg", price: 18.00, title: "Cheese Ravioli" },
    { description: "housemade red sauce", image: "spaghetti.jpeg", price: 20.00, title: "Spaghetti Marinara" },
    { description: "homemade meat sauce", image: "penne.jpeg", price: 21.00, title: "Penne Bolognese" }
  ],
  dessert: [
    { description: "coffee-soaked lady fingers, mascarpone mousse", image: "tiramisu.jpeg", price: 10.00, title: "Tiramisu" },
    { description: "coffee-soaked lady fingers, mascarpone mousse", image: "bomboloni.jpeg", price: 12.00, title: "Bomboloni" },
    { description: "italian hole-less doughnuts, caramel, chocolate hazelnut, raspberry", image: "cookie.jpeg", price: 12.00, title: "The Cookie Jar" },
  ]
};

const Menu = () => {
  const [isAddModalOpen, setIsAddModalOpen] = useState<boolean>(false);
  const [menuItems, setMenuItems] = useState<menuItemsProps>(items);

  const handleOnAddNewClick = () => {
    setIsAddModalOpen(true);
  };

  const handleOnCloseClick = () => {
    setIsAddModalOpen(false);
  };

  const addMenuItem = (category: "appetizers" | "pasta" | "dessert", item: menuItem) => {
    setMenuItems({
      ...menuItems,
      [category]: [...menuItems[category], item],
    });

    handleOnCloseClick()
  }

  return (
    <div className='menu'>
      <button className='menu__add-button' type='button' onClick={handleOnAddNewClick}>Add New Item</button>
      <MenuSection
        header="Appetizers"
        menu={menuItems.appetizers}
      />
      <MenuSection
        header="Pasta"
        menu={menuItems.pasta}
      />
      <MenuSection
        header="Dessert"
        menu={menuItems.dessert}
      />

      {isAddModalOpen &&
        <Modal onClose={handleOnCloseClick}>
          <AddMenuItemForm onSubmit={addMenuItem} />
        </Modal>
      }
    </div>
  );
};

export default Menu;
