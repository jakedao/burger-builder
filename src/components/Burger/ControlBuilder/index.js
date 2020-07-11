import React from 'react';
import Controller from './Controllers';

const controls = [
  {label: 'Salad', type: 'salad'},
  {label: 'Cheese', type: 'cheese'},
  {label: 'Bacon', type: 'bacon'},
  {label: 'Meat', type: 'meat'},
]

const ControlBuilder = (props) => {
  return (
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
  )
}

export default ControlBuilder;