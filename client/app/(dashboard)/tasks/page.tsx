"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import axios from "axios";
import Link from "next/link";
import TaskFilters from "@/components/tasks/TaskFilters";
import TaskTable from "@/components/tasks/TaskTable";
import TaskModal from "@/components/tasks/TaskModal";
import DeleteTaskDialog from "@/components/tasks/DeleteTaskDialog";
import authService from "@/services/auth.service";
import { TaskFormValues } from "@/components/tasks/TaskForm";
import { useTasks, TaskItem } from "@/hooks/useTasks";

export default function TasksPage() {
  const router = useRouter();
  const { tasks, loading: isLoading, error, createTask, updateTask, deleteTask } = useTasks();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isDeleteOpen, setIsDeleteOpen] = useState(false);
  const [isSaving, setIsSaving] = useState(false);
  const [isDeleting, setIsDeleting] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [filterStatus, setFilterStatus] = useState("");
  const [filterPriority, setFilterPriority] = useState("");
  const [selectedTask, setSelectedTask] = useState<TaskItem | null>(null);
  const [toastMessage, setToastMessage] = useState<string | null>(null);

  const handleOpenModal = () => {
    setSelectedTask(null);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setSelectedTask(null);
    setIsModalOpen(false);
  };

  const handleEditTask = (task: TaskItem) => {
    setSelectedTask(task);
    setIsModalOpen(true);
  };

  const handleDeleteTask = (task: TaskItem) => {
    setSelectedTask(task);
    setIsDeleteOpen(true);
  };

  useEffect(() => {
    if (error) {
      setToastMessage(error);
    }
  }, [error]);

  const filteredTasks = (tasks ?? []).filter((task) => {
    const normalizedSearch = searchQuery.trim().toLowerCase();
    const matchesSearch = normalizedSearch
      ? [task.title, task.description, task.status, task.priority]
          .join(" ")
          .toLowerCase()
          .includes(normalizedSearch)
      : true;

    const matchesStatus = filterStatus ? task.status === filterStatus : true;
    const matchesPriority = filterPriority ? task.priority === filterPriority : true;

    return matchesSearch && matchesStatus && matchesPriority;
  });

  const handleSubmitTask = async (values: TaskFormValues) => {
    try {
      setIsSaving(true);

      const token = authService.getToken();
      if (!token) {
        setToastMessage("You must log in before saving tasks.");
        router.push("/login");
        return;
      }

      if (selectedTask) {
        await updateTask(selectedTask.id, values);
        setToastMessage("Task updated successfully.");
      } else {
        await createTask(values);
        setToastMessage("Task created successfully.");
      }

      handleCloseModal();
    } catch (error) {
      console.error(error);
      if (axios.isAxiosError(error) && error.response?.status === 401) {
        setToastMessage("Session expired. Please log in again.");
        router.push("/login");
        return;
      }
      setToastMessage("Unable to save task. Please try again.");
    } finally {
      setIsSaving(false);
    }
  };

  useEffect(() => {
    if (!toastMessage) return;
    const timeout = window.setTimeout(() => setToastMessage(null), 3000);
    return () => window.clearTimeout(timeout);
  }, [toastMessage]);

  return (
    <div className="space-y-8">
      {toastMessage ? (
        <div className="rounded-3xl border border-cyan-400 bg-slate-800/95 px-6 py-4 text-sm text-slate-100 shadow-xl shadow-cyan-500/20">
          {toastMessage}
        </div>
      ) : null}

      <section className="rounded-4xl border border-slate-800 bg-slate-900/90 p-8 shadow-xl shadow-cyan-950/20">
        <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
          <div>
            <p className="text-sm uppercase tracking-[0.3em] text-cyan-400">Tasks</p>
            <h1 className="mt-3 text-4xl font-semibold text-white">Manage your daily work efficiently.</h1>
          </div>

          <div className="flex items-center gap-4">
            <button
              type="button"
              onClick={handleOpenModal}
              className="inline-flex items-center justify-center rounded-3xl bg-cyan-500 px-6 py-3 text-sm font-semibold text-slate-950 transition hover:bg-cyan-400"
            >
              + New Task
            </button>
            <Link
              href="/tasks"
              className="inline-flex items-center justify-center rounded-3xl border border-slate-700 bg-slate-950 px-6 py-3 text-sm font-semibold text-slate-200 transition hover:border-slate-500 hover:bg-slate-900"
            >
              View All Tasks
            </Link>
          </div>
        </div>
      </section>

      <TaskFilters
        searchValue={searchQuery}
        statusValue={filterStatus}
        priorityValue={filterPriority}
        onSearchChange={setSearchQuery}
        onStatusChange={setFilterStatus}
        onPriorityChange={setFilterPriority}
      />
      {isLoading ? (
        <div className="rounded-3xl border border-slate-800 bg-slate-950/90 p-8 text-slate-400">Loading tasks...</div>
      ) : (
        <TaskTable tasks={filteredTasks} onEdit={handleEditTask} onDelete={handleDeleteTask} />
      )}
      <TaskModal
        open={isModalOpen}
        onClose={handleCloseModal}
        onSubmit={handleSubmitTask}
        initialValues={selectedTask ?? undefined}
        isLoading={isSaving}
        title={selectedTask ? "Edit Task" : "New Task"}
        subtitle={selectedTask ? "Update task details and save your changes." : "Add a new task to your workflow."}
        submitLabel={selectedTask ? "Save Changes" : "Create Task"}
      />
      <DeleteTaskDialog
        open={isDeleteOpen}
        taskTitle={selectedTask?.title}
        onClose={() => setIsDeleteOpen(false)}
        onConfirm={async () => {
          if (!selectedTask) return;

          try {
            setIsDeleting(true);
            await deleteTask(selectedTask.id);
            setToastMessage("✅ Task deleted successfully.");
            setIsDeleteOpen(false);
            setSelectedTask(null);
          } catch (error) {
            console.error(error);
            if (axios.isAxiosError(error) && error.response?.status === 401) {
              setToastMessage("Session expired. Please log in again.");
              router.push("/login");
              return;
            }
            setToastMessage("Unable to delete task. Please try again.");
          } finally {
            setIsDeleting(false);
          }
        }}
        isLoading={isDeleting}
      />
    </div>
  );
}
