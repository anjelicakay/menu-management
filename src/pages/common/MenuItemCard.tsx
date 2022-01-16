import React from 'react';

import '../../themes/common/MenuItemCard.scss';

export interface MenuItemCardProps {
  category: "appetizers" | "pasta" | "dessert";
  description: string;
  image: string;
  index: number;
  onRemoveClick: (category: "appetizers" | "pasta" | "dessert", index: number) => void;
  price: number;
  title: string;
}

const MenuItemCard = (props: MenuItemCardProps) => {
  const { category, description, image, index, onRemoveClick, price, title } = props;

  return (
    <div className='menu-item-card'>
      <img alt={title} className='menu-item-card__image' src={require("../../assets/images/" + image)} />
      <div className='menu-item-card__left-container'>
        <h1 className='menu-item-card__title'>{title}</h1>
        <p className='menu-item-card__description gray'>{description}</p>
        <button className='menu-item-card__remove-button' onClick={() => onRemoveClick( category, index)} type="button">Remove</button>
      </div>
      <div className='menu-item-card__right-container'>
        <p className='menu-item-card__description bold'>${price}</p>
      </div>
    </div>
  )
};

export default MenuItemCard;
