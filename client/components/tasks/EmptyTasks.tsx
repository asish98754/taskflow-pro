export default function EmptyTasks() {
  return (
    <div className="rounded-3xl border border-slate-800 bg-slate-950/90 p-10 text-center text-slate-200">
      <p className="text-4xl">📋</p>
      <h2 className="mt-5 text-2xl font-semibold text-white">No tasks yet.</h2>
      <p className="mt-2 text-sm text-slate-400">Click "New Task" to create your first task.</p>
    </div>
  );
}
