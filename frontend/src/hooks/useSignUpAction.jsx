import {redirect} from "react-router-dom"

export default async function useSignUpAction({request}) {
	const formData = await request.formData()
	const email = formData.get("email")
	const password = formData.get("password")
	const repeatPassword = formData.get("repeat-password")

	if (email.length < 1) return {emptyEmail: "Can't be empty"}
	if (password.length < 1) return {emptyPassword: "Can't be empty"}
	if (repeatPassword.length < 1) return {emptyRepPassword: "Can't be empty"}

	if (password !== repeatPassword) return {passwordError: "Passwords doesn't match!"}

	const response = await fetch("/api/users/sign-up", {
		method: "POST",
		headers: {"Content-Type": "application/json"},
		body: JSON.stringify({email, password}),
	})
	const data = await response.json()
	if (!response.ok) return {error: data.message}

	localStorage.setItem("token", data.token)

	return redirect("/home")
}
