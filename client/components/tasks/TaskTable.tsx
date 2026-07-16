import EmptyTasks from "./EmptyTasks";

type TaskTableProps = {
  tasks: {
    id: string;
    title: string;
    description: string;
    status: string;
    priority: string;
    dueDate: string;
  }[];
  onEdit: (task: {
    id: string;
    title: string;
    description: string;
    status: string;
    priority: string;
    dueDate: string;
  }) => void;
  onDelete: (task: {
    id: string;
    title: string;
    description: string;
    status: string;
    priority: string;
    dueDate: string;
  }) => void;
};

export default function TaskTable({ tasks, onEdit, onDelete }: TaskTableProps) {
  if (tasks.length === 0) {
    return <EmptyTasks />;
  }

  return (
    <div className="overflow-hidden rounded-3xl border border-slate-800 bg-slate-950/90">
      <table className="min-w-full border-collapse text-left text-sm text-slate-200">
        <thead className="bg-slate-900/95 text-slate-400">
          <tr>
            <th className="px-6 py-4">Title</th>
            <th className="px-6 py-4">Status</th>
            <th className="px-6 py-4">Priority</th>
            <th className="px-6 py-4">Due Date</th>
            <th className="px-6 py-4">Actions</th>
          </tr>
        </thead>
        <tbody>
          {tasks.map((task) => (
            <tr key={task.id} className="border-t border-slate-800 hover:bg-slate-900/80">
              <td className="px-6 py-4 text-slate-100">{task.title}</td>
              <td className="px-6 py-4 text-slate-300">{task.status.replace("_", " ")}</td>
              <td className="px-6 py-4 text-slate-300">{task.priority}</td>
              <td className="px-6 py-4 text-slate-300">{new Date(task.dueDate).toLocaleDateString()}</td>
              <td className="px-6 py-4 space-x-2">
                <button
                  type="button"
                  onClick={() => onEdit(task)}
                  className="rounded-2xl bg-slate-800 px-4 py-2 text-sm text-slate-200 transition hover:bg-slate-700"
                >
                  Edit
                </button>
                <button
                  type="button"
                  onClick={() => onDelete(task)}
                  className="rounded-2xl bg-rose-600 px-4 py-2 text-sm text-white transition hover:bg-rose-500"
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
