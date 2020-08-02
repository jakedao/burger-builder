import React from 'react';
import PropTypes from 'prop-types';

import classes from './Backdrop.css';

const Backdrop = (props) => {
  return (
    props.show 
    ? <div
        className={classes.Backdrop} 
        onClick={props.onCancle}></div> 
    : null
  )
}
Backdrop.defaultProps = {
  show: false,
  onCancle: () => {console.log('You clicked BackDrop')}
}

Backdrop.propTypes = {
  onCancle: PropTypes.func,
  show: PropTypes.bool,
}
export default Backdrop;  