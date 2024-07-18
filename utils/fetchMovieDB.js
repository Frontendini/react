export default async function fetchMovieDB(uri) {
	const { VITE_MOVIEDB_URL, VITE_MOVIEDB_KEY } = import.meta.env;

	const result = await fetch(VITE_MOVIEDB_URL + uri, {
		method: "GET",
		headers: {
			Authorization: `Bearer ${VITE_MOVIEDB_KEY}`,
		},
	});
	const data = await result.json();
	return data;
}
