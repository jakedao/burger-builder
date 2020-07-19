import React from 'react';

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
            transform: props.show ? 'translateY(0)' : "translateY(-100vh)",
            opacity: props.show ? 1 : 0
          }}  
        >{props.children}</div>
      </>
    )
  );
};

export default Modal;