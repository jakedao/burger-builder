import React from 'react';
import propTypes from 'prop-types';
import classes from './Controllers.css'

const Controller = (props) => {
  return (
    <div className={classes.BuildControl}>
      <div className={classes.Label}>{props.label}</div>
      <div className={classes.Wrapper}>
        <button 
          className={classes.Less} 
          onClick={props.onRemove}>LESS</button>
        <button 
          className={classes.More} 
          onClick={props.onAdd}>MORE</button>
      </div>
    </div>
  );
};

Controller.propTypes = {
  label: propTypes.string.isRequired,
  onRemove: propTypes.func.isRequired,
  onAdd: propTypes.func.isRequired
}

export default Controller;