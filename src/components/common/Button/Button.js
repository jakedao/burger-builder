import React from 'react';
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
  
}

export default StyledButton;