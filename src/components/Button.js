import PropTypes from 'prop-types';

const Button = ({ onClick, onBla }) => {
	return (
		<button
			className='btn btn-block'
			onClick={() => {
				onClick();
				onBla();
			}}>
			Star Wars Movie
			<i className='fas fa-chevron-down'></i>
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
