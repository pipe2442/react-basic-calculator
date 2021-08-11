import Operate from './Operate';

export default function calculate(data, buttonName) {
  let { total, next, operation } = data;
  if (buttonName === 'AC') {
    return { total: null, next: null, operation: null };
  } if (buttonName === '.') {
    if (next === null) {
      total = total === '0' ? '0.' : total += '.';
    } else {
      next += '.';
    }
    return { next, operation, total };
  }
  operation = buttonName;
  return {
    total: `${Operate(next, total, operation)}`,
    next: '0',
    operation: buttonName,
  };
}
