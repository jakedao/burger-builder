import React from 'react';
import {Burger, Controller} from '../../components';

class BurgerBuilder extends React.Component {
  state = {
    cheese: 0,
    meat: 0,
    salad: 1
  }
  render(){
    return(
      <>
      <Burger ingredients={this.state} />
      <Controller />
      </>
    );
  }
};

export default BurgerBuilder;