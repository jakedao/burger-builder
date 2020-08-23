import React from 'react';

import {
  Burger, 
  Controller, 
  Modal, 
  OrderSummary, 
  Spinner, 
  TestComp } from '../../components';
import instance from '../../apis/axios-order';
import withErrorHandler from '../../hoc/withErrorHandler'
import Axios from 'axios';

class BurgerBuilder extends React.Component {
  constructor(props){
    super(props)

    this.state = {
      ingredients : null,
      pricePerUnit: {
        cheese: 0.5,
        meat: 1.5,
        salad: 0.5,
        bacon: 1,
      },
      totalPrice: 4,
      isOrdering: false,
      isLoading: false,
      testCompVisible: false,
    }
  }

  componentDidMount() {
    instance.get('/ingredients.json')
      .then(res => {
        this.setState({ingredients: res.data})
      })
      .catch(error => console.log(error))
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

  onReset = () => {
    this.setState({
      ingredients: {
        cheese: 0,
        meat: 0,
        salad: 0,
        bacon: 0,
      },
      totalPrice: 4
    })
  }
  handlePurchaseOrder = () => {
    this.setState({isLoading: true})
    const data = {
      ingredients: this.state.ingredients,
      customerInfo: {
        name: 'Triana',
        address: '259 Tran Hung Dao, D1, Co Giang Ward, HCMC',
        paymentMethod: 'Momo',
        shippingExpress: true
      }
    }
    //alert('You are going to ordering the burger...')
    instance.post('/orders.json',data)
      .then(res => {
          console.log(res)
          this.handleModalCancel()
          this.onReset()
          this.setState({isLoading: false})
        })
      .catch(error => {
        this.setState({isLoading: false})
        console.log(error)
      });
  }

  toggleTestComponent = () => {
    this.setState(prevState => {
      return {
        testCompVisible: !prevState.testCompVisible
      }
    })
  }

  render(){
    return(
      <>
        {this.state.isLoading 
          ? <Spinner />
          : <div>
              {this.state.ingredients 
                ? <Burger ingredients={this.state.ingredients}/>
                : <div style={{textAlign: 'center', padding: '2rem', fontSize: '1.5rem'}}>Ingredients can not be loaded !!!</div>
              }
              <Modal 
                show={this.state.isOrdering}
                onModalCancelling={() => this.handleModalCancel()}
              >
                {this.state.ingredients && (
                  <OrderSummary 
                    ingredients={this.state.ingredients}
                    totalPrice={this.state.totalPrice}
                    handlePurchase={this.handlePurchaseOrder}
                    handleCancelling={this.handleModalCancel}
                  />
                )}
              </Modal>
              <Controller 
                addIngredient={this.onAddIngredients}
                removeIngredient={this.onRemoveIngredient}
                totalPrice={this.state.totalPrice}
                isDisabled={this.state.totalPrice <= 0 ? true : false}
                onShow={() => this.handlerModalVisible()}
              />
            </div>
          }
          {/* <button onClick={this.toggleTestComponent}>Button</button>
          <TestComp visible={this.state.testCompVisible}/> */}
      </>
    );
  }
};

export default withErrorHandler(BurgerBuilder, instance);