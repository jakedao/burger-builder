import React from 'react';
import PropTypes from 'prop-types'
import classes from './Button.css';

const StyledButton = (props) =>  {
  console.log(`Check class of Button: ${classes[props.isPrimary ? 'primary' : 'secondary']} `)
  return (
    <button
      onClick={props.clicked}
      className={[classes.button, props.isPrimary ? classes.primary : classes.secondary].join(' ')}>
        {props.children}
    </button>
  )
};

StyledButton.propTypes = {
  clicked: PropTypes.func,
  isPrimary: PropTypes.bool.isRequired,
  children: PropTypes.oneOf([PropTypes.string, PropTypes.element])
}

export default StyledButton;