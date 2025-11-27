export default function Page() {
	return (
		<div className="min-h-screen bg-gradient-to-b from-white to-blue-700 p-6">
			<div className="max-w-3xl mx-auto">
				<header className="mb-6">
					<h1 className="text-3xl font-extrabold text-slate-800"> Todo — Manager</h1>
					
				</header>

				<div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
					<div className="lg:col-span-1 bg-white p-5 rounded-lg shadow-sm">
						<label className="block text-sm font-medium text-slate-700">Title</label>
						<input
							
							className="mt-1 block w-full border border-slate-200 rounded-md px-3 py-2 bg-gray-700 "
							placeholder="e.g. Buy groceries"
						/>

						<label className="block text-sm font-medium text-slate-700 mt-4">Description</label>
						<textarea
							
							rows={3}
							className="mt-1 block w-full border border-slate-200 rounded-md px-3 py-2 bg-gray-700"
							placeholder="Optional description"
						/>

						<div className="mt-4">
							<label className="block text-sm font-medium text-slate-700">Due</label>
							<input
								
								type="date"
								className="mt-1 block w-full border border-slate-200 rounded-md px-2 py-2 bg-gray-700"
							/>
						</div>

						<button
							disabled
							className="mt-5 w-full bg-green-500 text-white px-4 py-2 rounded-md transition hover:bg-green-900 focus:outline-none focus:ring-2 focus:ring-sky-400 font-medium"
						>
							Add Task
						</button>
					</div>

					<div className="lg:col-span-2">
						<div className="bg-white p-5 rounded-lg shadow-sm">
							<div className="flex items-center justify-between mb-4">
								<h2 className="text-lg font-semibold text-slate-800">Tasks (0)</h2>
							</div>

							<div className="text-center py-12 text-slate-400">No tasks yet — UI preview only.</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

