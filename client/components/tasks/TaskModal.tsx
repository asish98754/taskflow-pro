"use client";

import { ReactNode } from "react";
import TaskForm, { TaskFormValues } from "./TaskForm";

type TaskModalProps = {
  open: boolean;
  onClose: () => void;
  onSubmit: (values: TaskFormValues) => void;
  initialValues?: TaskFormValues;
  isLoading?: boolean;
  title?: string;
  subtitle?: string;
  submitLabel?: string;
};

export default function TaskModal({
  open,
  onClose,
  onSubmit,
  initialValues,
  isLoading = false,
  title = "New Task",
  subtitle = "Add a new task to your workflow.",
  submitLabel = "Create Task",
}: TaskModalProps) {
  if (!open) {
    return null;
  }

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-950/80 p-4">
      <div
        className="absolute inset-0"
        onClick={onClose}
        aria-hidden="true"
      />
      <div className="relative w-full max-w-3xl overflow-hidden rounded-4xl border border-slate-800 bg-slate-900 shadow-2xl">
        <div className="p-6">
          <div className="mb-4 flex items-center justify-between">
            <div>
              <h2 className="text-2xl font-semibold text-white">{title}</h2>
              <p className="mt-1 text-sm text-slate-400">{subtitle}</p>
            </div>
            <button
              type="button"
              onClick={onClose}
              className="rounded-full border border-slate-700 bg-slate-950 px-3 py-2 text-sm text-slate-200 transition hover:bg-slate-900"
            >
              Close
            </button>
          </div>
          <TaskForm
            onSubmit={onSubmit}
            initialValues={initialValues}
            onCancel={onClose}
            isLoading={isLoading}
            submitLabel={submitLabel}
          />
        </div>
      </div>
    </div>
  );
}
