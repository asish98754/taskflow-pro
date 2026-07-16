type TaskFiltersProps = {
  searchValue: string;
  statusValue: string;
  priorityValue: string;
  onSearchChange: (value: string) => void;
  onStatusChange: (value: string) => void;
  onPriorityChange: (value: string) => void;
};

export default function TaskFilters({
  searchValue,
  statusValue,
  priorityValue,
  onSearchChange,
  onStatusChange,
  onPriorityChange,
}: TaskFiltersProps) {
  return (
    <div className="flex flex-col gap-4 rounded-3xl border border-slate-800 bg-slate-950/90 p-6 text-slate-200 sm:flex-row sm:items-center sm:justify-between">
      <input
        type="search"
        value={searchValue}
        onChange={(event) => onSearchChange(event.target.value)}
        placeholder="Search tasks..."
        autoComplete="off"
        className="w-full rounded-3xl border border-slate-800 bg-slate-900 px-4 py-3 text-sm text-slate-100 placeholder:text-slate-500 caret-white outline-none transition focus:border-cyan-500 sm:max-w-md"
      />
      <div className="flex flex-col gap-3 sm:flex-row">
        <select
          value={statusValue}
          onChange={(event) => onStatusChange(event.target.value)}
          className="rounded-3xl border border-slate-800 bg-slate-900 px-4 py-3 text-sm text-slate-200 outline-none transition focus:border-cyan-500"
        >
          <option value="">All status</option>
          <option value="TODO">Todo</option>
          <option value="IN_PROGRESS">In Progress</option>
          <option value="COMPLETED">Completed</option>
        </select>
        <select
          value={priorityValue}
          onChange={(event) => onPriorityChange(event.target.value)}
          className="rounded-3xl border border-slate-800 bg-slate-900 px-4 py-3 text-sm text-slate-200 outline-none transition focus:border-cyan-500"
        >
          <option value="">All priority</option>
          <option value="HIGH">High</option>
          <option value="MEDIUM">Medium</option>
          <option value="LOW">Low</option>
        </select>
      </div>
    </div>
  );
}
