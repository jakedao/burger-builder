import React from "react";
import PropTypes from "prop-types";
import Backdrop from "../Backdrop/Backdrop";
import classes from "./Modal.css";

class Modal extends React.Component {

  shouldComponentUpdate(nextProps, nextState){
    return nextProps.show !== this.props.show 
  }

  render() {
    const props = this.props
    return (
      props.show && (
        <>
          <Backdrop show={props.show} onCancle={props.onModalCancelling} />
          <div
            className={classes.Modal}
            style={{
              opacity: props.show ? 1 : 0,
            }}
          >
            {props.children}
          </div>
        </>
      )
    );
  }
}

Modal.defaultProps = {
  modalVisbile: false,
};

Modal.propTypes = {
  show: PropTypes.bool.isRequired,
  modalVisbile: PropTypes.bool,
  onModalCancelling: PropTypes.func.isRequired,
  children: PropTypes.node.isRequired,
};

export default Modal;
