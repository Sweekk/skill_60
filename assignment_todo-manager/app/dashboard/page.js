export default function dashboard() {
    return <div className = "min-h-screen bg-gradient-to-b from-white to-blue-700 p-6">
                <div className="lg:col-span-2">
				<div className="bg-white p-5 rounded-lg shadow-sm">
				 <div className="flex items-center justify-between mb-4">
					<h2 className="text-lg font-semibold text-slate-800">Tasks (0)</h2>
				 </div>

				<div className="text-center py-12 text-slate-400">No tasks yet — UI preview only.</div>
			</div>
		</div>
    </div>
}