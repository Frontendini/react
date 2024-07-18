import { Outlet } from "react-router-dom";
import Navbar from "./components/Navbar";

export default function Layout() {
	console.log("Ciao");
	return (
		<>
			<Navbar />
			<main className="h-screen">
				<Outlet />
			</main>
		</>
	);
}
