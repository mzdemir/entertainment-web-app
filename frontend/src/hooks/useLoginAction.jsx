import {redirect} from "react-router-dom"

export default async function useLoginAction({request}) {
	const formData = await request.formData()
	const email = formData.get("email")
	const password = formData.get("password")

	if (email.length < 1) return {emptyEmail: "Can't be empty"}
	if (password.length < 1) return {emptyPassword: "Can't be empty"}

	const response = await fetch("/api/users/login", {
		method: "POST",
		headers: {"Content-Type": "application/json"},
		body: JSON.stringify({email, password}),
	})
	const data = await response.json()
	if (!response.ok) return {error: data.message}

	localStorage.setItem("token", data.token)

	return redirect("/home")
}
