import React from 'react';
import PropTypes from 'prop-types';
import Backdrop from '../Backdrop/Backdrop';
import classes from './Modal.css';

const Modal = (props) => {
  return (
    props.show && (
      <>
        <Backdrop 
          show={props.modalVisbile}
          onCancle={props.onModalCancelling}
        />
        <div 
          className={classes.Modal}
          style={{
            opacity: props.show ? 1 : 0
          }}  
        >{props.children}</div>
      </>
    )
  );
};

Modal.propTypes = {
  show: PropTypes.bool.isRequired,
  modalVisbile: PropTypes.bool.isRequired,
  onModalCancelling: PropTypes.func.isRequired,
  children: PropTypes.node.isRequired
}

export default Modal;