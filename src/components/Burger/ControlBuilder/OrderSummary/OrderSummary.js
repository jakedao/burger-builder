import React from 'react';
import id from 'shortid';

import classes from './OrderSummary.css';
import StyledButton from '../../../common/Button/Button'

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
        <h3>Do you continue ?</h3>
        <div className={classes.OrderFooter}>
          <StyledButton isPrimary clicked={props.handlePurchase}>PROCEED</StyledButton>
          <StyledButton isPrimary={false} clicked={props.handleCancelling}>CANCEL</StyledButton>
          <div className={classes.Price}>Total:{props.totalPrice}$</div>
        </div>
      </div>
    </div>
  );
};

export default OrderSummary;