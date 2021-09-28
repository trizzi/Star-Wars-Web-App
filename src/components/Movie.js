const Movie = ({ movie }) => {
	return (
		<li>
			<a>{movie.movie}</a>
			{movie.year}
		</li>
	);
};

export default Movie;
