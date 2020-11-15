import React from 'react'
import PropTypes from 'prop-types'

import Burger from '../Burger'
import Button from '../common/Button/Button'

import classes from './CheckOutSummary.css'

const CheckOutSummary = ({
  handleCancel, 
  handleContinue
}) => {

  const dummyIngredients = {cheese: 2, salad: 2}

  return (
    <div className={classes.CheckOutSummary}>
      <h1 className={classes.Title}>Taste your own burger !!!</h1>
      <Burger ingredients={dummyIngredients}/>
      <Button clicked={() => handleCancel()} isPrimary={false}>CANCEL</Button>
      <Button clicked={() => handleContinue()} isPrimary>CONTINUE</Button>
    </div>
  )
}

CheckOutSummary.propTypes = {
  handleCancel: PropTypes.func.isRequired,
  handleContinue: PropTypes.func.isRequired
}

export default CheckOutSummary