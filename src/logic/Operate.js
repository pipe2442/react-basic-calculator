const Big = require('big.js');

export default function operate(numberOne, numberTwo, operation) {
  const one = new Big(numberOne);
  const two = new Big(numberTwo);
  let result = 0;
  if (operation === '+') {
    result = one.plus(two);
  } else if (operation === '-') {
    result = one.minus(two);
  } else if (operation === 'X') {
    result = one.times(two);
  } else if (operation === '÷') {
    result = one.div(two);
  } else if (operation === '%') {
    result = (two.div(100)).times(one);
  }
  return result.toString();
}
