import PropTypes from 'prop-types';

const Button = ({ onClick }) => {
	return (
		<button className='btn btn-block' onClick={onClick}>
			Star Wars Movie
		</button>
	);
};

Button.defaultProps = {
	color: 'yellow',
};

Button.propTypes = {
	onClick: PropTypes.func,
};
export default Button;
