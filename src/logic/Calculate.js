import operate from './Operate';

export default function calculate(dataObject, symbol) {
  const { total, next, operation } = dataObject;

  if (symbol === 'AC') {
    return { total: null, next: null, operation: null };
  }

  if (symbol === 'X') {
    return {
      total: `${operate(next, total, operation)}`,
      next: null,
      operation: 'X',
    };
  }

  if (symbol === '/') {
    return {
      total: `${operate(next, total, operation)}`,
      operation: '/',
      next: null,
    };
  }

  if (symbol === '%') {
    return {
      total: `${operate(next, total, operation)}`,
      next: null,
      operation: '%',
    };
  }

  if (symbol === '+') {
    return {
      total: `${operate(next, total, operation)}`,
      next: null,
      operation: '+',
    };
  }

  if (symbol === '-') {
    return {
      total: `${operate(next, total, operation)}`,
      next: null,
      operation: '-',
    };
  }
  if (symbol === '=') {
    return {
      next: `${operate(next, total, operation)}`,
      operation: null,
      total: null,
    };
  }

  if (symbol === '+/-') {
    return {
      next: `${next * (-1)}`,
      operation,
      total,
    };
  }

  if (next === null) {
    return {
      next: parseFloat(`${symbol}`, 10),
      operation,
      total,
    };
  }

  return { next: parseFloat(`${next}${symbol}`, 10), operation, total };
}
