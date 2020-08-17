import React from 'react';
import PropTypes from 'prop-types';

import Toolbar from '../Navigation/Toolbar/Toolbar';
import SideDrawer from '../Navigation/SideDrawer/SideDrawer';
import classes from './Layout.css';


const Layout = (props) => {
  return (
    <>
      <Toolbar openHamburgerMenu={props.handleHamburgerMenuVisible}/>
      <SideDrawer 
        sideDrawerVisible={props.toggleHamburgerMenu}
        onToggleHamburgerMenu={props.handleHamburgerMenuVisible}/>
      <span>Top menu </span>
      <span>Backdrop </span>
      <div className={classes.content}>{props.children}</div>
    </>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
  handleHamburgerMenuVisible: PropTypes.func.isRequired,
  toggleHamburgerMenu: PropTypes.bool.isRequired
}

export default Layout;