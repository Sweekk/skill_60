"use client"

import React, { useState } from "react"
import { signUp, signIn, setDisplayName, createUserDocument, getUserDocument } from "./Firebase/firebase"

export default function Page() {
	const [mode, setMode] = useState("login") 
	const [form, setForm] = useState({ name: "", email: "", password: "" })
	const [loading, setLoading] = useState(false)
	const [message, setMessage] = useState(null)

	const handleChange = (e) => {
		const { name, value } = e.target
		setForm((s) => ({ ...s, [name]: value }))
	}
		const handleSubmit = async (e) => {
			e.preventDefault()
			setMessage(null)
			
			if (!form.email || !form.password || (mode === "register" && !form.name)) {
				setMessage({ type: "error", text: "Please fill in all required fields." })
				return
			}

			setLoading(true)
			try {
				if (mode === "login") {
					const cred = await signIn(form.email, form.password)
					const user = cred.user
					const userDoc = await getUserDocument(user.uid)
					setMessage({ type: "success", text: `Logged in successfully. Welcome ${userDoc?.name || user.displayName || user.email}` })
				} else {
					const cred = await signUp(form.email, form.password)
					const user = cred.user
					// set display name on the auth profile
					try {
						if (form.name) await setDisplayName(form.name)
					} catch (e) {
						console.warn("setDisplayName failed", e)
					}
					// create user document in Firestore
					await createUserDocument(user, { name: form.name })
					setMessage({ type: "success", text: "Account created." })
				}
				setForm({ name: "", email: "", password: "" })
			} catch (err) {
				console.error(err)
				const code = err?.code || err?.message || "unknown_error"
				const friendly = code.toString().replace("auth/", "").replace(/[-_]/g, " ")
				setMessage({ type: "error", text: friendly })
			} finally {
				setLoading(false)
			}
		}

	return (
		<main className="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4">
			<div className="w-full max-w-md bg-white border border-gray-200 rounded-2xl shadow-md overflow-hidden">
				<div className="p-8">
					<div className="text-center mb-6">
						<h1 className="text-2xl font-semibold text-gray-800">Welcome</h1>
						<p className="text-sm text-gray-500">Please {mode === "login" ? "sign in" : "create an account"} to continue</p>
					</div>

					<div className="flex items-center justify-center gap-1 bg-gray-100 p-1 rounded-lg mb-6">
						<button
							onClick={() => setMode("login")}
							className={`w-1/2 py-2 rounded-lg text-sm font-medium ${mode === "login" ? "bg-white shadow text-gray-900" : "text-gray-600"}`}
						>
							Login
						</button>
						<button
							onClick={() => setMode("register")}
							className={`w-1/2 py-2 rounded-lg text-sm font-medium ${mode === "register" ? "bg-white shadow text-gray-900" : "text-gray-600"}`}
						>
							Register
						</button>
					</div>

					{message && (
						<div className={`mb-4 text-sm px-4 py-2 rounded ${message.type === "error" ? "bg-red-50 text-red-700" : "bg-green-50 text-green-700"}`}>
							{message.text}
						</div>
					)}

					<form onSubmit={handleSubmit} className="space-y-4">
						{mode === "register" && (
							<div>
								<label className="block text-sm font-medium text-gray-700">Full name</label>
								<input
									name="name"
									value={form.name}
									onChange={handleChange}
									className="mt-1 block w-full rounded-md border-gray-200 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
									placeholder="Jane Doe"
								/>
							</div>
						)}

						<div>
							<label className="block text-sm font-medium text-gray-700">Email</label>
							<input
								name="email"
								type="email"
								value={form.email}
								onChange={handleChange}
								className="mt-1 block w-full rounded-md border-gray-200 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
								placeholder="you@example.com"
							/>
						</div>

						<div>
							<label className="block text-sm font-medium text-gray-700">Password</label>
							<input
								name="password"
								type="password"
								value={form.password}
								onChange={handleChange}
								className="mt-1 block w-full rounded-md border-gray-200 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
								placeholder="••••••••"
							/>
						</div>

						<div className="flex items-center justify-between">
							<label className="flex items-center gap-2 text-sm text-gray-600">
								<input type="checkbox" className="form-checkbox h-4 w-4 text-indigo-600" />
								<span>Remember me</span>
							</label>
							{mode === "login" && (
								<a className="text-sm text-indigo-600 hover:underline" href="#">Forgot password?</a>
							)}
						</div>

						<div>
							<button
								type="submit"
								disabled={loading}
								className="w-full inline-flex justify-center items-center rounded-md bg-indigo-600 text-white px-4 py-2 font-medium hover:bg-indigo-700 disabled:opacity-60"
							>
								{loading ? "Please wait..." : mode === "login" ? "Sign in" : "Create account"}
							</button>
						</div>
					</form>

					<div className="mt-6 text-center text-sm text-gray-500">
						{mode === "login" ? (
							<>
								Don’t have an account?{' '}
								<button onClick={() => setMode('register')} className="text-indigo-600 hover:underline">Create one</button>
							</>
						) : (
							<>
								Already have an account?{' '}
								<button onClick={() => setMode('login')} className="text-indigo-600 hover:underline">Sign in</button>
							</>
						)}
					</div>
				</div>
			</div>
		</main>
	)
}

