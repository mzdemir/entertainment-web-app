import {createBrowserRouter} from "react-router-dom"

import RootRedirect from "./routes/redirect/RootDirect"
import Login from "./routes/auth/Login"
import SignUp from "./routes/auth/SignUp"
import Protected from "./components/Protected"
import Layout from "./Layout"

import Home from "./routes/Home"
import Movies from "./routes/Movies"
import TvSeries from "./routes/TvSeries"
import Bookmarks from "./routes/Bookmarks"

import useLoginAction from "./hooks/useLoginAction"
import useSignUpAction from "./hooks/useSignUpAction"

export const router = createBrowserRouter([
	{path: "/", element: <RootRedirect />},
	{path: "/login", element: <Login />, action: useLoginAction},
	{path: "/sign-up", element: <SignUp />, action: useSignUpAction},
	{
		element: (
			<Protected>
				<Layout />
			</Protected>
		),
		children: [
			{path: "/home", element: <Home />},
			{path: "/movies", element: <Movies />},
			{path: "/tv-series", element: <TvSeries />},
			{path: "/bookmarks", element: <Bookmarks />},
		],
	},
])
