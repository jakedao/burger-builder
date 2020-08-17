import React from 'react';
import classes from './Navigation.css';
import NavigationItem from './NavigationItem/NavigationItem'

const Navigation = (props) => {
  return(
    <ul className={classes.Navigation}>
      <NavigationItem  link="/" active> Burger Builder </NavigationItem>
      <NavigationItem  link="/" active={false}> Check Out </NavigationItem>
    </ul>
  )
};

export default Navigation;