import React from 'react';
import id from 'shortid';

import classes from './OrderSummary.css'

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
      <div className={classes.Wrapper}>
        <div style={{marginBottom: '1.5rem'}}>
          <ul>
            {ingredientSummary}
          </ul>
        </div>
        <div className={classes.OrderFooter}>
          <button className={classes.ProceedButton}>Proceed</button>
          <div className={classes.Price}>Total:{props.totalPrice}$</div>
        </div>
      </div>
    </div>
  );
};

export default OrderSummary;