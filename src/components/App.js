import React from 'react';
import Display from './Display';
import ButtonPanel from './ButtonPanel';
import Calculate from '../logic/Calculate';

const data = {
  total: 0,
  next: 0,
  operation: '+',
};

const App = () => (
  <>
    <ButtonPanel />
    <Display result={Calculate(data, data.operation)} />
  </>
);

export default App;
