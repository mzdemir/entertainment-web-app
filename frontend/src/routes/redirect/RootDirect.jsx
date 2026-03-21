import {Navigate} from "react-router"

export default function RootRedirect() {
	const token = localStorage.getItem("token")

	if (token === undefined) {
		return <></>
	}

	return token ? <Navigate to="/home" /> : <Navigate to="/login" />
}
