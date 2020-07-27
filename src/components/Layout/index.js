import React from 'react';
import PropTypes from 'prop-types';

import Toolbar from '../Navigation/Toolbar/Toolbar'
import classes from './Layout.css';


const Layout = (props) => {
  return (
    <>
      <Toolbar />
      <span>Top menu </span>
      <span>Backdrop </span>
      <div className={classes.content}>{props.children}</div>
    </>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired
}

export default Layout;