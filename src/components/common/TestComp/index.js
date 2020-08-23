import React, {useEffect} from 'react';
import propTypes from 'prop-types';

const TestComp = ({visible}) => {

  useEffect(() => {
   console.log('COMPONENT MOUNTED')
   return console.log('COMPONENT UNMOUNT') 
  },null)

  return (
    visible ? <div>Your Component Mounted</div> : null
  )
};

TestComp.propTypes = {
  visible: propTypes.bool.isRequired,
}

export default TestComp;