import PropTypes from 'prop-types';

const Button = (props) => {
  const { name } = props;
  return (
    <div>
      <h2>{name}</h2>
    </div>
  );
};

Button.propTypes = {
  name: PropTypes.string.isRequired,
};

export default Button;
