import React, { useState } from 'react';

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
  const [isImageEditMode, setIsImageEditMode] = useState<boolean>(false);

  return (
    <div className='menu-item-card'>
      <img alt={title} className='menu-item-card__image' onClick={() => setIsImageEditMode(!isImageEditMode)} src={image} />
      <div className='menu-item-card__left-container'>
        <div className='menu-item-card__title'>
          <InlineEdit
            field="title"
            id={id}
            inputType="text"
            onChange={onChange}
            value={title}
          />
        </div>
        <div className='menu-item-card__description gray'>
          <InlineEdit
            field="description"
            id={id}
            inputType="textarea"
            onChange={onChange}
            value={description}
          />
        </div>
        <button className='menu-item-card__remove-button' onClick={() => onRemoveClick(id)} type="button">Remove</button>
        {isImageEditMode &&
          <div className='menu-item-card__image-input'>
            <InlineEdit
              field="image"
              id={id}
              inputType="text"
              onChange={onChange}
              value={image}
            />
          </div>
        }
      </div>
      <div className='menu-item-card__right-container'>
        <div className='menu-item-card__price'>$</div>
        <div className='menu-item-card__price'>
          <InlineEdit
            field="price"
            id={id}
            inputType="number"
            onChange={onChange}
            value={price}
          />
        </div>
      </div>
    </div>
  )
};

export default MenuItemCard;
