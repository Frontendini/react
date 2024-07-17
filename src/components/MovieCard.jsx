import { Link } from "react-router-dom";
import { motion } from "framer-motion";

export default function MovieCard({ movie }) {
	return (
		<motion.div
			layout
			initial={{ opacity: 0 }}
			whileInView={{ opacity: 1 }}
			transition={{ duration: 1 }}
			className="bg-contain sm:bg-cover bg-no-repeat sm:bg-[130px_center] rounded-lg shadow-2xl shadow-red-800"
			style={{ backgroundImage: `url(https://image.tmdb.org/t/p/original${movie.backdrop_path})` }}>
			<div className="size-full bg-gradient-to-t sm:bg-gradient-to-r from-neutral-950 from-60% sm:from-50% p-5 rounded-lg">
				<div className="flex gap-5 text-2xl mt-20 sm:mt-0">
					<img className="w-28" src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt="" />
					<p className="truncate text-white">{movie.title}</p>
				</div>
				<p className="text-sm mt-8 line-clamp-3 sm:w-2/3">{movie.overview}</p>
				<Link className="bg-red-500 rounded-lg text-white inline-block mt-14 py-1 px-3">Details</Link>
			</div>
		</motion.div>
	);
}
