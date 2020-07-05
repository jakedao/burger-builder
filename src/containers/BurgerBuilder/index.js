import React from 'react';
import {Burger} from '../../components'
class BurgerBuilder extends React.Component {

  state = {
    cheese: 2,
    meat: 1,
    salad: 2
  }
  render(){
    return(
      <>
      <Burger ingredients={this.state} />
      <div>Burger Controler</div>
      </>
    );
  }
};

export default BurgerBuilder;