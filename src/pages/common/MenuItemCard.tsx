import React from 'react';

import '../../themes/common/MenuItemCard.scss';

interface MenuItemCardProps {
  description: string;
  image: string;
  price: number;
  title: string;
}

const MenuItemCard = (props: MenuItemCardProps) => {
  const { description, image, price, title } = props;

  return (
    <div className='menu-item-card'>
      <img alt={title} className='menu-item-card__image' src={require("../../assets/images/" + image)} />
      <div className='menu-item-card__container'>
        <h1 className='menu-item-card__title'>{title}</h1>
        <p className='menu-item-card__description gray'>{description}</p>
      </div>
      <div>
        <p className='menu-item-card__description bold'>${price}</p>
      </div>
    </div>
  )
};

export default MenuItemCard;
