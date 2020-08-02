import React from 'react';
import PropTypes from 'prop-types'
import Logo from '../../common/Logo/Logo';
import Navigation from '../Navigation/Navigation';
import BackDrop from '../../common/Backdrop/Backdrop'

import classes from './SideDrawer.css';

const SideDrawer = (props) => {

  let attachedClass = 
    props.sideDrawerVisible 
      ? [classes.SideDrawer, classes.Open] 
      : [classes.SideDrawer, classes.Close] 
  
  console.log('Check Class of SideDrawer',attachedClass.join(' '))
  return (
    props.sideDrawerVisible && (
      <>
        <BackDrop 
          show={props.sideDrawerVisible}
          onCancle={props.onToggleHamburgerMenu}/>
        <div className={attachedClass.join(' ')}>
          <div className={classes.Logo}>
            <Logo />
          </div>
          <nav>
            <Navigation />
          </nav>
        </div>
      </>
    )
  );
}

SideDrawer.propTypes = {
  sideDrawerVisible: PropTypes.bool.isRequired,
  onToggleHamburgerMenu: PropTypes.func.isRequired
}

export default SideDrawer;