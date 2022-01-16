import React, { Fragment } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from "@fortawesome/free-solid-svg-icons";
import cx from "classnames";

import '../../themes/common/Modal.scss';

export interface ModalProps {
  children: React.ReactNode;
  onClose: () => void;
  small?: boolean;
}

const Modal = (props: ModalProps) => {
  const { children, onClose, small } = props;

  return (
    <Fragment>
      <div className='dimmer' />
      <div className={cx('modal', {'small': small})}>
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
