import React from 'react';
import PropTypes from 'prop-types';
import Logo from '../../common/Logo/Logo';
import Navigation from '../Navigation/Navigation'
import classes from './Toolbar.css'

const Toolbar = (props) => {
  return (
    <header className={classes.Toolbar}>
      <div 
        onClick={props.openHamburgerMenu} 
        style={{cursor: 'pointer'}}>Menu</div>
      <Logo />
      <nav>
        <Navigation />
      </nav>
    </header>
  );
};

Toolbar.propTypes = {
  openHamburgerMenu: PropTypes.func.isRequired
}

export default Toolbar