import React from 'react';

import '../../themes/common/MenuSection.scss';
import { menuItem } from '../../utils/constants';
import MenuItemCard from './MenuItemCard';

interface MenuSectionProps {
  category: "appetizers" | "pasta" | "dessert";
  menu: menuItem[];
  onRemoveClick: (category: "appetizers" | "pasta" | "dessert", index: number) => void;
}

const MenuSection = (props: MenuSectionProps) => {
  const { category, menu, onRemoveClick } = props;

  return (
    <div className='menu-section'>
      <h1 className='menu-section__header'>{category}</h1>
      {menu.map((item: menuItem, index) => {
        return (
          <div className='menu-section__card-container' key={index}>
            <MenuItemCard
              category={category}
              description={item.description}
              image={item.image}
              index={index}
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
