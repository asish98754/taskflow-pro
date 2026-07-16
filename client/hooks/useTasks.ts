import { useCallback, useEffect, useState } from "react";
import taskService from "@/services/task.service";
import { TaskFormValues } from "@/components/tasks/TaskForm";

export type TaskItem = {
  id: string;
  title: string;
  description: string;
  status: string;
  priority: string;
  dueDate: string;
};

export function useTasks() {
  const [tasks, setTasks] = useState<TaskItem[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const fetchTasks = useCallback(async () => {
    setLoading(true);
    setError(null);

    try {
      const result = await taskService.getTasks();
      const fetchedTasks = (result?.data?.tasks ?? []) as TaskItem[];
      setTasks(fetchedTasks);
    } catch (err) {
      console.error(err);
      setError("Unable to load tasks. Refresh and try again.");
      setTasks([]);
    } finally {
      setLoading(false);
    }
  }, []);

  const createTask = useCallback(async (values: TaskFormValues) => {
    const result = await taskService.createTask(values);
    const task = result?.data?.task as TaskItem;
    setTasks((current) => [...current, task]);
    return task;
  }, []);

  const updateTask = useCallback(async (taskId: string, values: TaskFormValues) => {
    const result = await taskService.updateTask(taskId, values);
    const task = result?.data?.task as TaskItem;
    setTasks((current) => current.map((item) => (item.id === task.id ? task : item)));
    return task;
  }, []);

  const deleteTask = useCallback(async (taskId: string) => {
    await taskService.deleteTask(taskId);
    setTasks((current) => current.filter((item) => item.id !== taskId));
  }, []);

  useEffect(() => {
    fetchTasks();
  }, [fetchTasks]);

  return {
    tasks,
    loading,
    error,
    fetchTasks,
    createTask,
    updateTask,
    deleteTask,
  };
}
