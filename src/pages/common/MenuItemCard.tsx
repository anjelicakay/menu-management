import React from 'react';

import '../../themes/common/MenuItemCard.scss';
import InlineEdit from './InlineEdit';

export interface MenuItemCardProps {
  description: string;
  image: string;
  id: number;
  onChange: (id: number, field: string, value: string | number) => void;
  onRemoveClick: (id: number) => void;
  price: number;
  title: string;
}

const MenuItemCard = (props: MenuItemCardProps) => {
  const { description, image, id, onChange, onRemoveClick, price, title } = props;

  return (
    <div className='menu-item-card'>
      <img alt={title} className='menu-item-card__image' src={image} />
      <div className='menu-item-card__left-container'>
        <InlineEdit
          field="title"
          id={id}
          inputType="text"
          onChange={onChange}
          value={title}
        />
        <InlineEdit
          field="description"
          id={id}
          inputType="textarea"
          onChange={onChange}
          value={description}
        />
        <button className='menu-item-card__remove-button' onClick={() => onRemoveClick(id)} type="button">Remove</button>
      </div>
      <div className='menu-item-card__right-container'>
        <div className='menu-item-card__price'>$</div>
        <InlineEdit
          field="price"
          id={id}
          inputType="number"
          onChange={onChange}
          value={price}
        />
      </div>
    </div>
  )
};

export default MenuItemCard;
