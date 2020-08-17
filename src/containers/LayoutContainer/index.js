import React from 'react';
import propTypes from 'prop-types';
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
        toggleHamburgerMenu={this.state.sideDrawerOpen}>
          {this.props.children}
      </Layout>
    )
  }
};

LayoutContainer.propTypes = {
  children: propTypes.node.isRequired
}
export default LayoutContainer;