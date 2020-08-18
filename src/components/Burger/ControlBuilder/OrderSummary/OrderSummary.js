import React from "react";
import id from "shortid";
import propTypes from "prop-types";

import classes from "./OrderSummary.css";
import StyledButton from "../../../common/Button/Button";

class OrderSummary extends React.PureComponent {
  
  render() {
    //Object.keys to create an array with the key of the object
    const ingredientSummary = Object.keys(this.props.ingredients).map((item) => {
      return (
        <li key={id.generate()}>
          <span style={{ textTransform: "capitalize", fontWeight: "bold" }}>
            {item}
          </span>
          : {this.props.ingredients[item]}
        </li>
      );
    });

    return (
      <div>
        <h3>Order Sumary</h3>
        <p>A delicious burger with following ingredients:</p>
        <div className={classes.Wrapper}>
          <div style={{ marginBottom: "1.5rem" }}>
            <ul>{ingredientSummary}</ul>
          </div>
          <h3>Do you continue ?</h3>
          <div className={classes.OrderFooter}>
            <StyledButton isPrimary clicked={this.props.handlePurchase}>
              PROCEED
            </StyledButton>
            <StyledButton isPrimary={false} clicked={this.props.handleCancelling}>
              CANCEL
            </StyledButton>
            <div className={classes.Price}>Total:{this.props.totalPrice}$</div>
          </div>
        </div>
      </div>
    );
  }
}
OrderSummary.propTypes = {
  ingredients : propTypes.shape({}).isRequired,
  handlePurchase: propTypes.func.isRequired,
  handleCancelling: propTypes.func.isRequired,
  totalPrice: propTypes.number.isRequired
};

export default OrderSummary;
