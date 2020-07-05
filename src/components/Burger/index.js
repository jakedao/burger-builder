import React from 'react';
import PropTypes from 'prop-types';

import Ingredient from './Ingredient'
import classes from './Burger.css';
import Ingredients from './Ingredient';
import id from 'shortid';

const Burger = ({ingredients}) => {

  const ingreArray = () => {
    let result = Array(0);
    for (let value in ingredients) {
      // console.log(`${value} has ${ingredients[value]} items`)
      // let temp = Array(ingredients[value]);
      // result.push(temp.fill(<Ingredients ingredients={value}/>))
      console.log(`Everything loop an array`, value*2)
      result.push(value.repeat(ingredients[value]));
      console.log(result);
    }
    return result;
  } 

  return (
    <div className={classes.Burger}>
      <Ingredient ingredients='bread-top' />
      {ingreArray().map(item => <Ingredients ingredients={item} key={id.generate()} />)}
      {/* {renderIngredient('cheese', cheese)}
      {renderIngredient('salad', salad)}
      {renderIngredient('meat', meat)} */}
      {/* {renderIngredient(ingredients)} */}
      <Ingredient ingredients='bread-bottom'/>
    </div>
  );
};

Burger.propTypes = {
  ingredients: PropTypes.shape({})
}
export default Burger;