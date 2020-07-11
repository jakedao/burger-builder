import React from 'react';
import {Burger, Controller} from '../../components';
import { object } from 'prop-types';

class BurgerBuilder extends React.Component {
  constructor(props){
    super(props)

    this.ingredients = {
      cheese: 2,
      meat: 0,
      salad: 1,
      bacon: 1,
    }
  }

  onAddIngredients = (type) => {
    let newIngre = {...this.ingredients};
    newIngre[type] += 1;
    Object.assign(this.ingredients, newIngre)
    console.log(this.ingredients)
    this.setState({...this.ingredients})
  };

  onRemoveIngredient = (type) => {
    if(this.ingredients[type] === 0) return;
    let newIngre = {...this.ingredients};
    newIngre[type] -= 1;
    Object.assign(this.ingredients, newIngre);
    this.setState({...this.ingredients})
  };

  render(){
    return(
      <>
      <Burger ingredients={this.ingredients} />
      <Controller 
        addIngredient={this.onAddIngredients}
        removeIngredient={this.onRemoveIngredient}
        />
      </>
    );
  }
};

export default BurgerBuilder;