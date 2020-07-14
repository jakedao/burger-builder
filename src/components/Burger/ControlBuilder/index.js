import React from 'react';
import Controller from './Controllers';
import classes from './ControlBuilder.css';

const controls = [
  {label: 'Salad', type: 'salad'},
  {label: 'Cheese', type: 'cheese'},
  {label: 'Bacon', type: 'bacon'},
  {label: 'Meat', type: 'meat'},
]

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
        <div className={classes.TotalPrice}> {`Total Price: ${props.totalPrice}$`}</div>
    </div>
  )
}

export default ControlBuilder;