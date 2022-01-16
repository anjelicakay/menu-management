import React from 'react';

import '../../themes/menu/RemoveMenuItem.scss';

export interface RemoveConfirmationProps {
  onCancelClick: () => void;
  onRemoveClick: () => void;
}

const RemoveConfirmation = (props: RemoveConfirmationProps) => {
  const { onCancelClick, onRemoveClick } = props;

  return (
    <div className='remove-menu-item' data-testid='remove-item-confirmation'>
      <p className='remove-menu-item__message'>Are you sure you want to remove this item?</p>
      <div className='remove-menu-item__button-container'>
        <button className='remove-menu-item__button' onClick={onRemoveClick} type='button'>Yes</button>
        <button className='remove-menu-item__button' onClick={onCancelClick} type='button'>Cancel</button>
      </div>
    </div>
  );
};

export default RemoveConfirmation;
