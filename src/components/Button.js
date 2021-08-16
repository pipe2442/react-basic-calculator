import React from 'react';
import PropTypes from 'prop-types';
import '../Assets/Styles.css';

function Button({ buttonName, clickHandler }) {
  const handleClick = (e) => clickHandler(e.target.value);
  return (
    <button className="button" onClick={handleClick} type="button" value={buttonName}>
      {buttonName}
    </button>
  );
}

Button.propTypes = {
  buttonName: PropTypes.string,
  clickHandler: PropTypes.func.isRequired,
};

Button.defaultProps = {
  buttonName: 'Test',
};

export default Button;
