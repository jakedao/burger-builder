import React from 'react';
import {Burger, Controller, Modal, OrderSummary} from '../../components';
import { object } from 'prop-types';

class BurgerBuilder extends React.Component {
  constructor(props){
    super(props)

    this.state = {
      ingredients : {
        cheese: 0,
        meat: 0,
        salad: 0,
        bacon: 0,
      },
      pricePerUnit: {
        cheese: 0.5,
        meat: 1.5,
        salad: 0.5,
        bacon: 1,
      },
      totalPrice: 0,
    }
  }

  onAddIngredients = (type) => {

    let newIngre = {...this.state.ingredients};
    newIngre[type] += 1;
    
    let oldPrice = this.state.totalPrice;
    let newPrice = oldPrice + this.state.pricePerUnit[type];
    console.log(`Checking fomulas ${this.state.pricePerUnit[type]} x ${newIngre[type]} and total ${this.state.totalPrice}`);
    this.setState( prevState => {
      return {
        ingredients: newIngre,
        totalPrice: newPrice
      }
    });
  };

  onRemoveIngredient = (type) => {
    if(this.state.ingredients[type] === 0) return;
    let newIngre = {...this.state.ingredients};
    newIngre[type] -= 1;

    let oldPrice = this.state.totalPrice;
    let newPrice = oldPrice - this.state.pricePerUnit[type];

    this.setState({
      ingredients: newIngre,
      totalPrice: newPrice,
    })
  };

  render(){
    return(
      <div>
        <Burger ingredients={this.state.ingredients} />
        <Modal>
          <OrderSummary />
        </Modal>
        <Controller 
          addIngredient={this.onAddIngredients}
          removeIngredient={this.onRemoveIngredient}
          totalPrice={this.state.totalPrice}
          isDisabled={this.state.totalPrice <= 0 ? true : false}
        />
      </div>
    );
  }
};

export default BurgerBuilder;