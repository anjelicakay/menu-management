import React, { Fragment } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from "@fortawesome/free-solid-svg-icons";

import '../../themes/common/Modal.scss';

interface ModalProps {
  children: React.ReactNode;
  onClose: () => void;
}

const Modal = (props: ModalProps) => {
  const { children, onClose } = props;

  return (
    <Fragment>
      <div className='dimmer' />
      <div className='modal'>
        <div className='modal__button-container'>
          <button className='modal__button' onClick={onClose} type="button">
            <FontAwesomeIcon icon={faTimes} />
          </button>
        </div>
        <div className='modal__container'>
          {children}
        </div>
      </div>
    </Fragment>
  );
};

export default Modal;
