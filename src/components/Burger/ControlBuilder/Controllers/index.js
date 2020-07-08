import React from 'react';
import classes from './Controllers.css'
const Controller = (props) => {
  return (
    <div className={classes.BuildControl}>
      <div className={classes.Label}>{props.label}</div>
      <div className={classes.Wrapper}>
        <button className={classes.Less}>LESS</button>
        <button className={classes.More}>MORE</button>
      </div>
    </div>
  );
};

export default Controller;