import React from 'react';
import PropTypes from 'prop-types';
import Controller from './Controllers';

import classes from './ControlBuilder.css';

const controls = [
  {label: 'Salad', type: 'salad'},
  {label: 'Cheese', type: 'cheese'},
  {label: 'Bacon', type: 'bacon'},
  {label: 'Meat', type: 'meat'},
]

// const orderButtonState = (price) => {
//   console.log(`Check total price for disable state`,  price < 0 ? false : true);
//   return price < 0 ? false : true
// };

const ControlBuilder = (props) => {
  return (
    <div className={classes.Wrapper}>
      <div>
        {controls && controls.map(item => 
          <Controller 
            key={item.label} 
            label={item.label}
            onAdd={() => props.addIngredient(item.type)}
            onRemove= {() => props.removeIngredient(item.type)}
          />
        )}
      </div>
        <div>
          <strong>{`Total Price: ${props.totalPrice}$`}</strong>
        </div>
        <button 
          className={classes.OrderButton} 
          disabled={props.isDisabled}
          onClick={props.onShow}
        >
          ORDER NOW
        </button>
    </div>
  )
}

ControlBuilder.propTyes = {
  addIngredient: PropTypes.func.isRequired,
  removeIngredient: PropTypes.func.isRequired,
  totalPrice: PropTypes.number.isRequired,
  isDisbaled: PropTypes.bool.isRequired,
  onShow: PropTypes.func.isRequired
}

export default ControlBuilder;