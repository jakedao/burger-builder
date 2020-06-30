import React from 'react';

import classes from './Layout.css';

const Layout = (props) => {

  return (
    <>
      <span>Header </span>
      <span>Top menu </span>
      <span>Backdrop </span>
      <div className={classes.content}>{props.children}</div>
    </>
  );
};

export default Layout;