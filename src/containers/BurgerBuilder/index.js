import React from 'react';
import {Burger, Controller, Modal, OrderSummary} from '../../components';

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
      totalPrice: 4,
      isOrdering: false,
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


  handlerModalVisible = () => {
    this.setState({isOrdering: true});
  }

  handleModalCancel = () => {
    this.setState({isOrdering: false})
  };

  handlePurchaseOrder = () => {
    alert('You are going to ordering the burger...')
  }

  render(){
    return(
      <div>
        <Burger ingredients={this.state.ingredients} />
        <Modal 
          show={this.state.isOrdering}
          onModalCancelling={this.handleModalCancel}
        >
          <OrderSummary 
            ingredients={this.state.ingredients}
            totalPrice={this.state.totalPrice}
            handlePurchase={this.handlePurchaseOrder}
            handleCancelling={this.handleModalCancel}
          />
        </Modal>
        <Controller 
          addIngredient={this.onAddIngredients}
          removeIngredient={this.onRemoveIngredient}
          totalPrice={this.state.totalPrice}
          isDisabled={this.state.totalPrice <= 0 ? true : false}
          onShow={() => this.handlerModalVisible()}
        />
      </div>
    );
  }
};

export default BurgerBuilder;