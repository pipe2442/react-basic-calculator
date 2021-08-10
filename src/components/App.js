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
    <Display result={Calculate(data.total, data.next, data.operation)} />
    <Display result="5" />
  </>
);

export default App;
