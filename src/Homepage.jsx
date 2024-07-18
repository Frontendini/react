import { createContext, useEffect, useState } from "react";
import MovieCard from "./components/MovieCard";
import fetchMovieDB from "../utils/fetchMovieDB";

const ScrollContext = createContext(0);

export default function Homepage() {
	const [movies, setMovies] = useState([]);

	async function getMovies() {
		const movies = await fetchMovieDB("/discover/movie?page=1&sort_by=popularity.desc");
		setMovies(movies.results);
	}

	useEffect(() => {
		getMovies();
	}, []);

	return (
		<ScrollContext.Provider value="200">
			<section className="size-full mx-auto flex gap-10 pb-24 pt-5 lg:pt-16 px-2 lg:px-16 ">
				<div className="hidden lg:block w-3/12 sticky top-0">
					<form></form>
				</div>
				<div className="w-full lg:w-9/12 size-full grid grid-cols-1 2xl:grid-cols-2 gap-y-14 gap-x-10 px-3 lg:px-10 ms-auto overflow-y-scroll">
					{movies.map((movie) => (
						<MovieCard key={movie.id} movie={movie} />
					))}
				</div>
			</section>
		</ScrollContext.Provider>
	);
}
