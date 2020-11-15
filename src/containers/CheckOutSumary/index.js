import React from 'react'
import { CheckOutSummary } from '../../components'

const CheckOutSummaryContainer = (props) => {

  console.log(props)

  const handleCancelCheckOut = () => {
    props.history.goBack()
  }

  return (
  <CheckOutSummary 
    handleCancel={handleCancelCheckOut}
    handleContinue={() => console.log('Proceeding')}
    />
  )
} 

export default CheckOutSummaryContainer