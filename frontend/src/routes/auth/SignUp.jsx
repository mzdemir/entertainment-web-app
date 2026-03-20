import {Form, useActionData, Link} from "react-router-dom"
import Logo from "../../assets/logo.svg"

export default function SignUp() {
	const actionData = useActionData()

	const emailEmptyError = actionData?.emptyEmail ? "border-red-500" : ""
	const passwordEmptyError = actionData?.emptyPassword ? "border-red-500" : ""
	const repPasswordEmptyError = actionData?.emptyRepPassword ? "border-red-500" : ""

	return (
		<main className="text-preset-4 flex flex-col justify-center min-h-screen m-auto gap-20 p-6">
			<img className="justify-self-center self-center" src={Logo} aria-hidden="true" />
			<div className="bg-blue-900 max-w-100 p-6 rounded-[10px]">
				<Form method="post" className="flex flex-col gap-10" noValidate>
					<h1 className="text-[32px]/[125%] tracking-[-0.5px font-light">Sign Up</h1>
					<div className="flex flex-col gap-6">
						<label
							className={`pbe-4 ps-4 border-b border-blue-500 font-light hocus:border-white ${emailEmptyError} relative`}
							aria-label="Enter email address">
							<input
								className="outline-none caret-red-500 w-full"
								type="email"
								name="email"
								placeholder="Email address"
							/>
							<span className="text-preset-5 text-red-500 absolute right-4">
								{actionData?.emptyEmail && actionData?.emptyEmail}
							</span>
						</label>
						<label
							className={`pbe-4 ps-4 border-b border-blue-500 font-light hocus:border-white ${passwordEmptyError} relative`}
							aria-label="Enter password">
							<input className="outline-none caret-red-500 " type="password" name="password" placeholder="Password" />
							<span className="text-preset-5 text-red-500 absolute right-4">
								{actionData?.emptyPassword && actionData?.emptyPassword}
							</span>
						</label>
						<label
							className={`pbe-4 ps-4 border-b border-blue-500 font-light hocus:border-white ${repPasswordEmptyError} relative`}
							aria-label="Enter password">
							<input
								className="outline-none caret-red-500 "
								type="password"
								name="repeat-password"
								placeholder="Repeat Password"
							/>
							<span className="text-preset-5 text-red-500 absolute right-4">
								{actionData?.emptyRepPassword && actionData?.emptyRepPassword}
							</span>
						</label>
					</div>
					<div className="grid gap-6">
						<button className="primary-btn cursor-pointer" type="submit">
							Create an account
						</button>
						<div className="flex justify-center gap-2 font-light">
							<p>Alread have an account?</p>
							<Link to="/login" className="text-red-500">
								Login
							</Link>
						</div>
					</div>
				</Form>
			</div>
		</main>
	)
}
