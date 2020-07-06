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

      let numberOfIngre = Array(ingredients[value]);
      let temp = result.concat(numberOfIngre.fill(value))
      result = temp;
    }
    return result;
  } 

  return (
    <div className={classes.Burger}>
      <Ingredient ingredients='bread-top' />
      {ingreArray().map(item => <Ingredients ingredients={item} key={id.generate()} />)}
      <Ingredient ingredients='bread-bottom'/>
    </div>
  );
};

Burger.propTypes = {
  ingredients: PropTypes.shape({})
}
export default Burger;