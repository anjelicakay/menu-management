import React, { useState } from 'react';

import '../../themes/menu/Menu.scss';
import { items, menuItem, menuItemsProps } from '../../utils/constants';
import MenuSection from '../common/MenuSection';
import Modal from '../common/Modal';
import AddMenuItemForm from './AddMenuItemForm';
import RemoveConfirmation from './RemoveConfirmation';

const emptyMenuItemsState = {
  appetizers: [],
  pasta: [],
  dessert: []
}

const Menu = () => {
  const [isAddModalOpen, setIsAddModalOpen] = useState<boolean>(false);
  const [isRemoveModalOpen, setIsRemoveModalOpen] = useState<boolean>(false);
  const [menuItems, setMenuItems] = useState<menuItemsProps>(items);
  const [filteredMenuItems, setFilteredMenuItems] = useState<menuItemsProps>(emptyMenuItemsState);

  const handleOnAddNewClick = () => {
    setIsAddModalOpen(true);
  };

  const handleOnCloseClick = () => {
    setIsAddModalOpen(false);
  };

  const addMenuItem = (category: "appetizers" | "pasta" | "dessert", item: menuItem) => {
    item.image = "bruschetta.jpeg"; // having issues with google images - setting default value for now
  
    setMenuItems({
      ...menuItems,
      [category]: [...menuItems[category], item],
    });

    handleOnCloseClick()
  }

  const handleOnRemoveClick = (category: "appetizers" | "pasta" | "dessert", index: number) => {
    const item = menuItems[category][index];
    const filteredItems = menuItems[category].filter(menuItem => menuItem !== item);
    setFilteredMenuItems({...menuItems, [category]: filteredItems});
    setIsRemoveModalOpen(true);
  }

  const removeMenuItem = () => {
    setMenuItems(filteredMenuItems);
    setIsRemoveModalOpen(false);
  }

  const handleCancelClick = () => {
    setFilteredMenuItems(emptyMenuItemsState);
    setIsRemoveModalOpen(false);
  }

  return (
    <div className='menu' data-testid="manage-menu">
      <button
        className='menu__add-button'
        data-testid='add-item-button'
        onClick={handleOnAddNewClick}
        type='button'>
          Add New Item
      </button>
      <MenuSection
        category="appetizers"
        menu={menuItems.appetizers}
        onRemoveClick={handleOnRemoveClick}
      />
      <MenuSection
        category='pasta'
        menu={menuItems.pasta}
        onRemoveClick={handleOnRemoveClick}
      />
      <MenuSection
        category='dessert'
        menu={menuItems.dessert}
        onRemoveClick={handleOnRemoveClick}
      />

      {isAddModalOpen &&
        <Modal onClose={handleOnCloseClick}>
          <AddMenuItemForm onSubmit={addMenuItem} />
        </Modal>
      }
      {isRemoveModalOpen &&
        <Modal onClose={handleCancelClick} small>
          <RemoveConfirmation
            onCancelClick={handleCancelClick}
            onRemoveClick={removeMenuItem}
          />
        </Modal>
      }
    </div>
  );
};

export default Menu;
