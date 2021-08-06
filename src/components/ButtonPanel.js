import React from 'react';
import Button from './Button';

const ButtonPanel = () => {
  const names = [['AC', '+/-', '%', '÷'], ['7', '8', '9', '10', 'X'], [4, 5, 6, '-'], ['1', '2', '3', '+'], ['0', '.', '=']];

  const renderButtons = (names) => (
    names.map((name) => <Button key={name.id} buttonName={name} />)
  );

  return (
    <div>
      <tr>
        {renderButtons(names[0])}
      </tr>
      <tr>
        {renderButtons(names[1])}
      </tr>
      <tr>
        {renderButtons(names[2])}
      </tr>
      <tr>
        {renderButtons(names[3])}
      </tr>
      <tr>
        {renderButtons(names[4])}
      </tr>
    </div>
  );
};

export default ButtonPanel;
