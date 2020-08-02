import React from 'react';
import {Layout}  from  '../../components'

class LayoutContainer extends React.Component {
  constructor(props){
    super(props)
    
    this.state = {
      sideDrawerOpen: false,
    }
  }

  handleToggleHamburgerMenu = () => {
    this.setState(prevState => {
      return {
        sideDrawerOpen: !prevState.sideDrawerOpen
      }
    });
  }


  render() {
    return (
      <Layout 
        handleHamburgerMenuVisible={this.handleToggleHamburgerMenu}
        toggleHamburgerMenu={this.state.sideDrawerOpen}
       />
    )
  }
};

export default LayoutContainer;