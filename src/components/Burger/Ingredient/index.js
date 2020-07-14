import React from 'react';
import PropTypes from 'prop-types';

import classes from './ingredients.css';


const Ingredients = ({ingredients}) => {  

  let taste = null;

    switch (ingredients) {

      case 'bread-bottom': 
        taste = <div className={classes.BreadBottom}></div> 
        break;

      case 'bread-top':
        taste = (
          <div className={classes.BreadTop}>
            <div className={classes.Seeds1}></div>
            <div className={classes.Seeds2}></div>
          </div>
        );
        break;

      case 'meat': 
        taste = <div className={classes.Meat}></div> 
        break;

      case 'cheese': 
        taste = <div className={classes.Cheese}></div> 
        break;

      case 'salad': 
        taste = <div className={classes.Salad}></div> 
        break;

      case 'bacon': 
        taste = <div className={classes.Bacon}></div> 
        break;

      default: return taste;
    }
    return taste;
};

Ingredients.propTypes = {
  ingredients: PropTypes.string.isRequired,
}

export default Ingredients;