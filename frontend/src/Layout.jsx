import {Outlet} from "react-router-dom"
import Header from "./components/Header"
import SearchBar from "./components/SearchBar"

export default function Layout() {
	return (
		<main className="bg-blue-950 text-white grid gap-6 pbe-3">
			<Header />
			<SearchBar />
			<Outlet />
		</main>
	)
}
