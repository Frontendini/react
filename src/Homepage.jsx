import { useEffect, useState } from "react";
import MovieCard from "./components/MovieCard";

async function getMovies() {
	const { VITE_MOVIEDB_URL, VITE_MOVIEDB_KEY } = import.meta.env;

	const result = await fetch(`${VITE_MOVIEDB_URL}/movie/upcoming`, {
		method: "GET",
		headers: {
			Authorization: `Bearer ${VITE_MOVIEDB_KEY}`,
		}
	});
	const data = await result.json();
	return data;
}

export default function Homepage() {
	const [movies, setMovies] = useState([]);

	useEffect(() => {
		async function performeFetch() {
			const movies = await getMovies();
			setMovies(movies.results);
		}
		performeFetch();
	}, []);

	return (
		<section className="container mx-auto my-5">
			<div className="grid grid-cols-1 lg:grid-cols-2 gap-10 px-3">
				{movies.map((movie) => (
					<MovieCard key={movie.id} movie={movie} />
				))}
			</div>
		</section>
	);
}
