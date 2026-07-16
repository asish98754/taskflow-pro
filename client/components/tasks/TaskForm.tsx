"use client";

import { useEffect, useState } from "react";

export type TaskFormValues = {
  title: string;
  description: string;
  status: "TODO" | "IN_PROGRESS" | "COMPLETED";
  priority: "LOW" | "MEDIUM" | "HIGH";
  dueDate: string;
};

type TaskFormProps = {
  onSubmit: (values: TaskFormValues) => void;
  initialValues?: TaskFormValues;
  isLoading?: boolean;
  onCancel?: () => void;
  submitLabel?: string;
};

const defaultValues: TaskFormValues = {
  title: "",
  description: "",
  status: "TODO",
  priority: "MEDIUM",
  dueDate: new Date().toISOString().split("T")[0],
};

export default function TaskForm({
  onSubmit,
  initialValues,
  isLoading = false,
  onCancel,
  submitLabel,
}: TaskFormProps) {
  const [values, setValues] = useState<TaskFormValues>(defaultValues);

  useEffect(() => {
    if (initialValues) {
      const dueDate = initialValues.dueDate
        ? new Date(initialValues.dueDate).toISOString().split("T")[0]
        : defaultValues.dueDate;

      setValues({
        ...defaultValues,
        ...initialValues,
        dueDate,
      });
    }
  }, [initialValues]);

  const handleChange = (field: keyof TaskFormValues, value: string) => {
    setValues((current) => ({ ...current, [field]: value }));
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    onSubmit(values);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6 rounded-4xl border border-slate-800 bg-slate-950/95 p-8 shadow-xl shadow-cyan-950/10">
      <div>
        <label className="block text-sm font-medium text-slate-300">Title</label>
        <input
          value={values.title}
          onChange={(event) => handleChange("title", event.target.value)}
          className="mt-2 w-full rounded-3xl border border-slate-800 bg-slate-900 px-4 py-3 text-sm text-slate-100 outline-none transition focus:border-cyan-500 focus:ring-2 focus:ring-cyan-500/20"
          placeholder="Enter task title"
          required
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-slate-300">Description</label>
        <textarea
          value={values.description}
          onChange={(event) => handleChange("description", event.target.value)}
          className="mt-2 h-28 w-full rounded-3xl border border-slate-800 bg-slate-900 px-4 py-3 text-sm text-slate-100 outline-none transition focus:border-cyan-500 focus:ring-2 focus:ring-cyan-500/20"
          placeholder="Add more details about the task"
        />
      </div>

      <div className="grid gap-4 md:grid-cols-3">
        <div>
          <label className="block text-sm font-medium text-slate-300">Status</label>
          <select
            value={values.status}
            onChange={(event) => handleChange("status", event.target.value)}
            className="mt-2 w-full rounded-3xl border border-slate-800 bg-slate-900 px-4 py-3 text-sm text-slate-100 outline-none transition focus:border-cyan-500 focus:ring-2 focus:ring-cyan-500/20"
          >
            <option value="TODO">Todo</option>
            <option value="IN_PROGRESS">In Progress</option>
            <option value="COMPLETED">Completed</option>
          </select>
        </div>

        <div>
          <label className="block text-sm font-medium text-slate-300">Priority</label>
          <select
            value={values.priority}
            onChange={(event) => handleChange("priority", event.target.value)}
            className="mt-2 w-full rounded-3xl border border-slate-800 bg-slate-900 px-4 py-3 text-sm text-slate-100 outline-none transition focus:border-cyan-500 focus:ring-2 focus:ring-cyan-500/20"
          >
            <option value="LOW">Low</option>
            <option value="MEDIUM">Medium</option>
            <option value="HIGH">High</option>
          </select>
        </div>

        <div>
          <label className="block text-sm font-medium text-slate-300">Due Date</label>
          <input
            type="date"
            value={values.dueDate}
            onChange={(event) => handleChange("dueDate", event.target.value)}
            className="mt-2 w-full rounded-3xl border border-slate-800 bg-slate-900 px-4 py-3 text-sm text-slate-100 outline-none transition focus:border-cyan-500 focus:ring-2 focus:ring-cyan-500/20"
            required
          />
        </div>
      </div>

      <div className="flex flex-col gap-3 sm:flex-row sm:justify-end">
        {onCancel ? (
          <button
            type="button"
            onClick={onCancel}
            className="rounded-3xl border border-slate-700 bg-slate-900 px-5 py-3 text-sm font-semibold text-slate-200 transition hover:border-slate-500 hover:bg-slate-800"
          >
            Cancel
          </button>
        ) : null}
        <button
          type="submit"
          disabled={isLoading}
          className="rounded-3xl bg-cyan-500 px-5 py-3 text-sm font-semibold text-slate-950 transition hover:bg-cyan-400 disabled:cursor-not-allowed disabled:opacity-60"
        >
          {isLoading ? "Saving..." : submitLabel || "Create Task"}
        </button>
      </div>
    </form>
  );
}
