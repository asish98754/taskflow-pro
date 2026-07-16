const tasks = [
  { title: "Prepare Q3 roadmap", priority: "High", status: "In progress", deadline: "Jul 18" },
  { title: "Review marketing copy", priority: "Medium", status: "Pending", deadline: "Jul 19" },
  { title: "Fix checkout bug", priority: "High", status: "In progress", deadline: "Jul 20" },
  { title: "Sync with design team", priority: "Low", status: "Completed", deadline: "Jul 22" },
];

export default function RecentTasks() {
  return (
    <section className="rounded-4xl border border-slate-800 bg-slate-900/90 p-8 shadow-xl shadow-cyan-950/10">
      <div className="mb-6 flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h2 className="text-2xl font-semibold text-white">Recent Tasks</h2>
          <p className="mt-2 text-slate-400">Tasks updated most recently.</p>
        </div>
      </div>

      <div className="overflow-hidden rounded-3xl border border-slate-800 bg-slate-950/90">
        <table className="min-w-full border-collapse text-left text-sm">
          <thead className="bg-slate-900/95 text-slate-400">
            <tr>
              <th className="px-6 py-4">Title</th>
              <th className="px-6 py-4">Priority</th>
              <th className="px-6 py-4">Status</th>
              <th className="px-6 py-4">Deadline</th>
            </tr>
          </thead>
          <tbody>
            {tasks.map((task) => (
              <tr key={task.title} className="border-t border-slate-800 hover:bg-slate-900/80">
                <td className="px-6 py-4 text-slate-100">{task.title}</td>
                <td className="px-6 py-4 text-slate-300">{task.priority}</td>
                <td className="px-6 py-4 text-slate-300">{task.status}</td>
                <td className="px-6 py-4 text-slate-300">{task.deadline}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
}
