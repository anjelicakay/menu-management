import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';

import AddMenuItemForm from './AddMenuItemForm';
import RemoveConfirmation from './RemoveConfirmation';
import MenuSection from '../common/MenuSection';
import Modal from '../common/Modal';
import '../../themes/menu/Menu.scss';
import { getRestaurantMenus, updateActiveMenu } from '../../store/restaurant/actionCreator';
import { Menu, MenuItem } from '../../store/restaurant/types';
import { RootState } from '../../store/RootState';
import { exampleRestaurant } from '../../store/restaurant/constants';

export interface MenusProps {
  activeMenu: Menu;
  getRestaurantMenus: () => void;
  menus: Menu[];
  updateActiveMenu: (menu: Menu) => void;
}

export const Menus = (props: MenusProps) => {
  const { activeMenu, getRestaurantMenus, menus, updateActiveMenu } = props;

  const [isAddModalOpen, setIsAddModalOpen] = useState<boolean>(false);
  const [isRemoveModalOpen, setIsRemoveModalOpen] = useState<boolean>(false);
  const [filteredMenuItems, setFilteredMenuItems] = useState<MenuItem[]>([]);

  const handleMenuClick = (type: string) => {
    const selectedMenu = menus.find((menu) => menu.type === type) || exampleRestaurant[0];
    updateActiveMenu(selectedMenu);
  };

  const handleAddNewClick = () => {
    setIsAddModalOpen(true);
  };

  const handleCloseAddModalClick = () => {
    setIsAddModalOpen(false);
  };

  const addMenuItem = (item: MenuItem) => {
    const id = exampleRestaurant[0].menuItems.length + exampleRestaurant[1].menuItems.length + 1; // manually set id
    const newItem: MenuItem = {...item, id: id};
    const menu = {...activeMenu, menuItems: [...activeMenu.menuItems, newItem]}
    updateActiveMenu(menu)
    handleCloseAddModalClick();
  }

  const handleRemoveClick = (id: number) => {
    const menuItems = activeMenu.menuItems;
    const item = menuItems.find((item) => item.id === id);
    const filteredItems = menuItems.filter(menuItem => menuItem !== item);
    setFilteredMenuItems(filteredItems);
    setIsRemoveModalOpen(true);
  }

  const removeMenuItem = () => {
    const menu = {...activeMenu, menuItems: filteredMenuItems}
    updateActiveMenu(menu)
    setIsRemoveModalOpen(false);
  }

  const handleCancelClick = () => {
    setFilteredMenuItems([]);
    setIsRemoveModalOpen(false);
  }

  const handleEditMenuItem = (id: number, field: string, value: string | number) => {
    const menuItems = activeMenu.menuItems;
    const editedMenuItems: MenuItem[] = menuItems.map(item => {
      if (item.id === id) {
        return {...item, [field]: value}
      }
      return {...item}
    })

    const menu = {...activeMenu, menuItems: editedMenuItems}

    updateActiveMenu(menu)
  }

  useEffect(() => {
    getRestaurantMenus()
  }, [])

  return (
    <div className='menu' data-testid="manage-menu">
      <div>
        <button
          className='menu__add-button'
          data-testid='add-item-button'
          onClick={handleAddNewClick}
          type='button'>
            Add New Item
        </button>
        {menus.map((menu) => {
          return (
            <button
              className='menu__add-button'
              data-testid='add-item-button'
              onClick={() => handleMenuClick(menu.type)}
              type='button'>
                {menu.type}
            </button>
          )
        })}
      </div>
      {activeMenu.categories.map((category) => {
        const categoryItems = activeMenu.menuItems.filter((item) => item.category === category);
        return (
          <MenuSection
            category={category}
            menu={categoryItems}
            onChange={handleEditMenuItem}
            onRemoveClick={handleRemoveClick}
          />
        )
      })}

      {isAddModalOpen &&
        <Modal onClose={handleCloseAddModalClick}>
          <AddMenuItemForm menu={activeMenu} onSubmit={addMenuItem} />
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

const mapStateToProps = (state: RootState) => ({
  activeMenu: state.RestaurantState.activeMenu,
  menus: state.RestaurantState.menus
})

const mapDispatchToProps = (dispatch: any) => ({
  getRestaurantMenus: () => dispatch(getRestaurantMenus()),
  updateActiveMenu: (menu: Menu) => dispatch(updateActiveMenu(menu))
})

export default connect(mapStateToProps, mapDispatchToProps)(Menus);
