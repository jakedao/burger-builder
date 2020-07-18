import React from 'react';
import id from 'shortid';

const OrderSummary = (props) => {

  //Object.keys to create an array with the key of the object
  const ingredientSummary = Object.keys(props.ingredients).map(item => {
    return (
      <li key={id.generate()}> 
        <span style={{textTransform: "capitalize", fontWeight:"bold"}}>
          {item}
        </span>: {props.ingredients[item]}
      </li>
    )
  });

  console.log(`Your ingredient is`,ingredientSummary);
  return (
    <div>
      <h3>Order Sumary</h3>
      <p>A delicious burger with following ingredients:</p>
      <ul>
        {ingredientSummary}
      </ul>
      <button>CONTINUE</button>
    </div>
  );
};

export default OrderSummary;