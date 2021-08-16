import PropTypes from 'prop-types';

const Display = (props) => {
  const { result, next, operation } = props;
  return (
    <div>
      <h2 className="result">
        {result}
        {operation}
        {next}
      </h2>
    </div>
  );
};

Display.defaultProps = { result: '0', next: '0', operation: '0' };
Display.propTypes = {
  result: PropTypes.string,
  next: PropTypes.string,
  operation: PropTypes.string,
};

export default Display;
