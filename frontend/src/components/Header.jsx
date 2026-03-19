import HomeIcon from "../assets/icon-nav-home.svg?react"
import MoviesIcon from "../assets/icon-nav-movies.svg?react"
import TvSeriesIcon from "../assets/icon-nav-tv-series.svg?react"
import BookmarkIcon from "../assets/icon-nav-bookmark.svg?react"

import {NavLink} from "react-router-dom"
export default function Header() {
	return (
		<header className="flex items-center justify-between bg-blue-900 p-4">
			<img className="size-6" src="/logo.svg" aria-hidden="true" />
			<nav className="flex items-center gap-6 py-1 text-blue-500">
				<NavLink
					to="/"
					className={({isActive}) => `hocus:text-red-500 hocus:outline-none ${isActive ? "text-white" : ""}`}>
					<HomeIcon className="size-4" />
				</NavLink>
				<NavLink
					to="/movies"
					className={({isActive}) => `hocus:text-red-500 hocus:outline-none ${isActive ? "text-white " : ""}`}>
					<MoviesIcon className="size-4" />
				</NavLink>
				<NavLink
					to="/tv-series"
					className={({isActive}) => `hocus:text-red-500 hocus:outline-none ${isActive ? "text-white " : ""}`}>
					<TvSeriesIcon className="size-4" />
				</NavLink>
				<NavLink
					to="/bookmarks"
					className={({isActive}) => `hocus:text-red-500 hocus:outline-none ${isActive ? "text-white " : ""}`}>
					<BookmarkIcon className="size-4" />
				</NavLink>
			</nav>
			<img className="size-6 border border-white rounded-full" src="/image-avatar.png" aria-hidden="true" />
		</header>
	)
}
