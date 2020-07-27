import React from 'react';
import classes from './Navigation.css';
import NavigationItem from './NavigationItem/NavigationItem'

const Navigation = (props) => {
  return(
    <ul className={classes.Navigation}>
      <NavigationItem
        link='/' 
        active> Link A </NavigationItem>
      <NavigationItem
        link='/'> Link B</NavigationItem>
    </ul>
  )
};

export default Navigation;