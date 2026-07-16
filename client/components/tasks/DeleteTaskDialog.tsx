"use client";

type DeleteTaskDialogProps = {
  open: boolean;
  taskTitle?: string;
  onClose: () => void;
  onConfirm: () => void;
  isLoading?: boolean;
};

export default function DeleteTaskDialog({
  open,
  taskTitle,
  onClose,
  onConfirm,
  isLoading = false,
}: DeleteTaskDialogProps) {
  if (!open) {
    return null;
  }

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-950/80 p-4">
      <div className="absolute inset-0" onClick={onClose} aria-hidden="true" />
      <div className="relative w-full max-w-lg overflow-hidden rounded-4xl border border-slate-800 bg-slate-900 p-6 shadow-2xl">
        <div className="mb-6 flex items-start gap-4">
          <div className="flex h-12 w-12 items-center justify-center rounded-3xl bg-rose-600 text-white">
            <span className="text-xl">🗑</span>
          </div>
          <div>
            <h2 className="text-2xl font-semibold text-white">Delete Task</h2>
            <p className="mt-1 text-sm text-slate-400">Are you sure you want to delete this task?</p>
          </div>
        </div>

        <div className="rounded-3xl border border-slate-800 bg-slate-950/80 p-5 text-sm text-slate-200">
          <p className="font-semibold text-slate-100">{taskTitle || "Selected task"}</p>
          <p className="mt-2 text-slate-400">This action cannot be undone.</p>
        </div>

        <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:justify-end">
          <button
            type="button"
            onClick={onClose}
            className="rounded-3xl border border-slate-700 bg-slate-900 px-5 py-3 text-sm font-semibold text-slate-200 transition hover:border-slate-500 hover:bg-slate-800"
          >
            Cancel
          </button>
          <button
            type="button"
            onClick={onConfirm}
            disabled={isLoading}
            className="rounded-3xl bg-rose-600 px-5 py-3 text-sm font-semibold text-white transition hover:bg-rose-500 disabled:cursor-not-allowed disabled:opacity-60"
          >
            {isLoading ? "Deleting..." : "Delete"}
          </button>
        </div>
      </div>
    </div>
  );
}
