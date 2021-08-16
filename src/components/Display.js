import PropTypes from 'prop-types';

const Display = (props) => {
  const { result, next, operation } = props;
  return (
    <div className="result">
      <h1 className="resultNumber">{result}</h1>
      <h1 className="resultNumber">{operation}</h1>
      <h1 className="resultNumber">{next}</h1>
    </div>
  );
};

Display.defaultProps = { result: null, next: null, operation: null };
Display.propTypes = {
  result: PropTypes.string,
  next: PropTypes.string,
  operation: PropTypes.string,
};

export default Display;
