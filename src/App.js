import React from 'react';
import { Route } from 'react-router-dom'
import { BurgerBuilder, LayOutContainer, CheckOutSummaryContainer } from './containers';

function App() {
  return (
    <LayOutContainer>
      <Route path='/' exact render={() => <BurgerBuilder />} />
      <Route path='/checkout' component={CheckOutSummaryContainer} />
    </LayOutContainer>
  );
}

export default App;
