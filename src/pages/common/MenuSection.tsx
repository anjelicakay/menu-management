import React from 'react';

import '../../themes/common/MenuSection.scss';
import { menuItem } from '../menu/Menu';
import MenuItemCard from './MenuItemCard';

interface MenuSectionProps {
  header: string;
  menu: menuItem[];
}

const MenuSection = (props: MenuSectionProps) => {
  const { header, menu } = props;

  return (
    <div className='menu-section'>
      <h1 className='menu-section__header'>{header}</h1>
      {menu.map((item: menuItem, index) => {
        return (
          <div className='menu-section__card-container' key={index}>
            <MenuItemCard
              description={item.description}
              image={item.image}
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
