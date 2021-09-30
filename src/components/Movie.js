const Movie = ({ movie }) => {
	return (
		<li>
			<a href='#'>
				{movie.movie} {movie.year}
			</a>
		</li>
	);
};

export default Movie;
