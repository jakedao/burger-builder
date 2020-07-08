import React from 'react';
import Controller from './Controllers';

const controls = [
  {label: 'Salad', type: 'salad'},
  {label: 'Cheese', type: 'cheese'},
  {label: 'Bacon', type: 'bacon'},
  {label: 'Meat', type: 'meat'},
]

const ControlBuilder = () => {
  return (
    <div>
      {controls && controls.map(item => 
        <Controller key={item.label} label={item.label}/>
      )}
    </div>
  )
}

export default ControlBuilder;