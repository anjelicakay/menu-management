import React from 'react';

import '../../themes/common/MenuSection.scss';
import { menuItem } from '../../utils/constants';
import MenuItemCard from './MenuItemCard';

export interface MenuSectionProps {
  category: "appetizers" | "pasta" | "dessert";
  menu: menuItem[];
  onChange: (index: number, field: string, value: string | number) => void;
  onRemoveClick: (id: number) => void;
}

const MenuSection = (props: MenuSectionProps) => {
  const { category, menu, onChange, onRemoveClick } = props;

  return (
    <div className='menu-section'>
      <h1 className='menu-section__header'>{category}</h1>
      {menu.map((item: menuItem, index) => {
        return (
          <div className='menu-section__card-container' key={index}>
            <MenuItemCard
              description={item.description}
              image={item.image}
              id={item.id}
              onChange={onChange}
              onRemoveClick={onRemoveClick}
              price={item.price}
              title={item.title}
            />
          </div>
        )
      })}
    </div>
  );
};

export default MenuSection;
