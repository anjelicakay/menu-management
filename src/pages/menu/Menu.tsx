import React, { useState } from 'react';

import '../../themes/menu/Menu.scss';
import { items, menuItem } from '../../utils/constants';
import MenuSection from '../common/MenuSection';
import Modal from '../common/Modal';
import AddMenuItemForm from './AddMenuItemForm';
import RemoveConfirmation from './RemoveConfirmation';

const Menu = () => {
  const [isAddModalOpen, setIsAddModalOpen] = useState<boolean>(false);
  const [isRemoveModalOpen, setIsRemoveModalOpen] = useState<boolean>(false);
  const [menuItems, setMenuItems] = useState<menuItem[]>(items);
  const [filteredMenuItems, setFilteredMenuItems] = useState<menuItem[]>([]);

  const appetizers = menuItems.filter((item) => item.category === "appetizer");
  const pastas = menuItems.filter((item) => item.category === "pasta");
  const desserts = menuItems.filter((item) => item.category === "dessert");

  const handleOnAddNewClick = () => {
    setIsAddModalOpen(true);
  };

  const handleOnCloseClick = () => {
    setIsAddModalOpen(false);
  };

  const addMenuItem = (item: menuItem) => {  
    setMenuItems([...menuItems, item]);

    handleOnCloseClick();
  }

  const handleOnRemoveClick = (id: number) => {
    const item = menuItems.find((item) => item.id === id);
    const filteredItems = menuItems.filter(menuItem => menuItem !== item);
    setFilteredMenuItems(filteredItems);
    setIsRemoveModalOpen(true);
  }

  const removeMenuItem = () => {
    setMenuItems(filteredMenuItems);
    setIsRemoveModalOpen(false);
  }

  const handleEditMenuItem = (id: number, field: string, value: string | number) => {
    const editedMenuItems: menuItem[] = menuItems.map(item => {
      if (item.id === id) {
        return {...item, [field]: value}
      }
      return {...item}
    })

    return setMenuItems(editedMenuItems);
  }

  const handleCancelClick = () => {
    setFilteredMenuItems([]);
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
        menu={appetizers}
        onChange={handleEditMenuItem}
        onRemoveClick={handleOnRemoveClick}
      />
      <MenuSection
        category='pasta'
        menu={pastas}
        onChange={handleEditMenuItem}
        onRemoveClick={handleOnRemoveClick}
      />
      <MenuSection
        category='dessert'
        menu={desserts}
        onChange={handleEditMenuItem}
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
