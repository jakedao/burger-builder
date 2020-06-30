import React from 'react';
import PropTypes from 'prop-types';

import Ingredient from './Ingredient'
import classes from './Burger.css';

const Burger = ({ingredients}) => {
  return (
    <div className={classes.Burger}>
      <Ingredient ingredients='bread-top' />
      <Ingredient ingredients='cheese'/>
      <Ingredient ingredients='salad'/>
      <Ingredient ingredients='meat'/>
      <Ingredient ingredients='salad'/>
      <Ingredient ingredients='bread-bottom'/>
    </div>
  );
};

Burger.propTypes = {
  ingredients: PropTypes.array.isRequired
}
export default Burger;