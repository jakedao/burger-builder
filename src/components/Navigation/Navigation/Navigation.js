import React from 'react';
import { withRouter } from 'react-router-dom'
import classes from './Navigation.css';
import NavigationItem from './NavigationItem/NavigationItem'

const Navigation = (props) => {

  console.log(props.location.pathname)

  return(
    <ul className={classes.Navigation}>
      <NavigationItem link="/" active={props.location.pathname === '/'}> Burger Builder </NavigationItem>
      <NavigationItem link="/checkout" active={props.location.pathname === '/checkout'}> Check Out </NavigationItem>
    </ul>
  )
};

export default withRouter(Navigation);