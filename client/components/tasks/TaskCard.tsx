export default function TaskCard() {
  return (
    <div className="rounded-3xl border border-slate-800 bg-slate-950/90 p-5 text-slate-200">
      <p className="text-lg font-semibold">Task title</p>
      <p className="mt-2 text-sm text-slate-400">Status • Priority • Due date</p>
    </div>
  );
}
