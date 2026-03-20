import {createBrowserRouter} from "react-router-dom"
import Layout from "./Layout"
import Home from "./routes/Home"
import Protected from "./components/Protected"
import Login from "./routes/auth/Login"

import useLoginAction from "./hooks/useLoginAction"
import useSignUpAction from "./hooks/useSignUpAction"
import SignUp from "./routes/auth/SignUp"

export const router = createBrowserRouter([
	{path: "/login", element: <Login />, action: useLoginAction},
	{path: "/sign-up", element: <SignUp />, action: useSignUpAction},
	{
		element: (
			<Protected>
				<Layout />
			</Protected>
		),
		children: [{path: "/home", element: <Home />}],
	},
])
