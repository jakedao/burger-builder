import React from 'react';
import PropTypes from 'prop-types';

import classes from './NavigationItem.css';

const NavigationItem = (props) => {
  return(
    <li className={classes.NavigationItem}>
      <a 
        href={props.link}
        className={props.active ? classes.active : null}
      >{props.children}</a>
    </li>
  )
};

NavigationItem.propTypes = {
  link: PropTypes.string.isRequired,
  active: PropTypes.bool.isRequired,
  children: PropTypes.node.isRequired
}

export default NavigationItem;