import { useState } from 'react';
import Movie from './Movie';

const Movies = ({ onBla }) => {
	const [movies, setMovies] = useState([
		{
			id: 1,
			movie: 'star wars 1',
			year: 'september, 2002',
		},
		{
			id: 2,
			movie: 'star wars 2',
			year: 'september, 2012',
		},
		{
			id: 3,
			movie: 'star wars 3',
			year: 'september, 2015',
		},
	]);

	return (
		<>
			onBla={onBla}
			{movies.map((movie) => (
				<Movie key={movie.id} movie={movie} />
			))}
		</>
	);
};

export default Movies;
