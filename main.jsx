import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "./src/Layout";
import Homepage from "./src/Homepage";
import AboutUs from "./src/AboutUs";

const router = createBrowserRouter([
	{
		path: "/",
		element: <Layout />,
		children: [
			{ index: true, element: <Homepage /> },
			{ path: "about-us", element: <AboutUs /> },
		],
	},
]);

createRoot(document.querySelector("#app")).render(<RouterProvider router={router} />);
