import { Link, NavLink } from "react-router-dom";

export default function Navbar() {
	return (
		<nav className="fixed bottom-0 right-0 flex items-center gap-6 z-10">
			<ul className="flex gap-4 bg-neutral-800 px-5 rounded-lg">
				<li className="py-2 px-2 hover:bg-neutral-600">
					<Link to="/" preventScrollReset={true}>Home</Link>
				</li>
				<li className="py-2 px-2 hover:bg-neutral-600">
					<Link to="about-us" preventScrollReset={true}>About us</Link>
				</li>
			</ul>
			<button className="bg-neutral-800 p-5 rounded-tl-[40%] text-white">
				<svg
					xmlns="http://www.w3.org/2000/svg"
					width="32"
					height="32"
					fill="currentColor"
					className="bi bi-list"
					viewBox="0 0 16 16">
					<path
						fillRule="evenodd"
						d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5"
					/>
				</svg>
			</button>
		</nav>
	);
}
