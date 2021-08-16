import React from 'react';
import PropTypes from 'prop-types';
import Button from './Button';
import '../Assets/Styles.css';

function ButtonPanel({ clickHandler }) {
  const handleClick = (e) => clickHandler(e);

  const names = [['AC', '+/-', '%', '/'], ['7', '8', '9', '10', 'X'], [4, 5, 6, '-'], ['1', '2', '3', '+'], ['0', '.', '=']];
  const renderButtons = (names) => (
    names.map((name) => <Button clickHandler={handleClick} key={name.id} buttonName={name} />)
  );

  return (
    <div className="buttonContainer">
      {renderButtons(names[0])}

      {renderButtons(names[1])}

      {renderButtons(names[2])}

      {renderButtons(names[3])}

      {renderButtons(names[4])}
    </div>
  );
}

ButtonPanel.propTypes = {
  clickHandler: PropTypes.func.isRequired,
};

export default ButtonPanel;
