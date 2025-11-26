"use client";

import { useState } from "react";
import { create } from "zustand";

// Inline simple Zustand store so this page works without external files
const useTaskStore = create((set) => ({
	tasks: [],
	addTask: (task) =>
		set((state) => ({
			tasks: [
				...state.tasks,
				{
					id: Date.now(),
					...task,
					createdAt: new Date().toISOString(),
					completed: false,
				},
			],
		})),
	toggleTask: (id) =>
		set((state) => ({
			tasks: state.tasks.map((t) => (t.id === id ? { ...t, completed: !t.completed } : t)),
		})),
	deleteTask: (id) => set((state) => ({ tasks: state.tasks.filter((t) => t.id !== id) })),
}));

export default function Page() {
	const [title, setTitle] = useState("");
	const [description, setDescription] = useState("");
	const [dueDate, setDueDate] = useState("");

	const tasks = useTaskStore((s) => s.tasks);
	const addTask = useTaskStore((s) => s.addTask);
	const toggleTask = useTaskStore((s) => s.toggleTask);
	const deleteTask = useTaskStore((s) => s.deleteTask);

	const handleSubmit = (e) => {
		e.preventDefault();
		if (!title.trim()) return;

		addTask({
			title: title.trim(),
			description: description.trim(),
			dueDate: dueDate || null,
		});

		setTitle("");
		setDescription("");
		setDueDate("");
	};

	return (
		<div className="min-h-screen bg-gradient-to-b from-sky-50 to-white p-6">
			<div className="max-w-3xl mx-auto">
				<header className="mb-6">
					<h1 className="text-3xl font-extrabold text-slate-800">Simple Todo — Add Tasks</h1>
					<p className="text-sm text-slate-500 mt-1">Create tasks that update the global Zustand store instantly.</p>
				</header>

				<div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
					{/* Form */}
					<form onSubmit={handleSubmit} className="lg:col-span-1 bg-white p-5 rounded-lg shadow-sm">
						<label className="block text-sm font-medium text-slate-700">Title</label>
						<input
							value={title}
							onChange={(e) => setTitle(e.target.value)}
							className="mt-1 block w-full border border-slate-200 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-sky-400"
							placeholder="e.g. Buy groceries"
						/>

						<label className="block text-sm font-medium text-slate-700 mt-4">Description</label>
						<textarea
							value={description}
							onChange={(e) => setDescription(e.target.value)}
							rows={3}
							className="mt-1 block w-full border border-slate-200 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-sky-400"
							placeholder="Optional description"
						/>

						<div className="mt-4">
							<label className="block text-sm font-medium text-slate-700">Due</label>
							<input
								type="date"
								value={dueDate}
								onChange={(e) => setDueDate(e.target.value)}
								className="mt-1 block w-full border border-slate-200 rounded-md px-2 py-2 focus:outline-none focus:ring-2 focus:ring-sky-400"
							/>
						</div>

						<button
							type="submit"
							className="mt-5 w-full bg-sky-600 text-white px-4 py-2 rounded-md hover:bg-sky-700 transition"
						>
							Add Task
						</button>
					</form>

					{/* Tasks list */}
					<div className="lg:col-span-2">
						<div className="bg-white p-5 rounded-lg shadow-sm">
							<div className="flex items-center justify-between mb-4">
								<h2 className="text-lg font-semibold text-slate-800">Tasks ({tasks.length})</h2>
							</div>

							{tasks.length === 0 ? (
								<div className="text-center py-12 text-slate-400">No tasks yet — add one.</div>
							) : (
								<ul className="space-y-3">
									{tasks.map((t) => (
										<li key={t.id} className="flex items-start justify-between border border-slate-100 rounded-md p-3">
											<div className="flex items-start gap-3">
												<input
													type="checkbox"
													checked={t.completed}
													onChange={() => toggleTask(t.id)}
													className="mt-1 w-4 h-4 text-sky-600"
												/>
												<div>
													<div className={`text-sm font-medium ${t.completed ? 'line-through text-slate-400' : 'text-slate-800'}`}>
														{t.title}
													</div>
													{t.description && <div className="text-xs text-slate-500 mt-1">{t.description}</div>}
													  <div className="text-xs text-slate-400 mt-2">{t.dueDate ? `Due: ${t.dueDate}` : ''}</div>
												</div>
											</div>
											<div className="flex items-center gap-2">
												<button
													onClick={() => deleteTask(t.id)}
													className="text-red-500 hover:text-red-700 text-sm"
												>
													Delete
												</button>
											</div>
										</li>
									))}
								</ul>
							)}
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

