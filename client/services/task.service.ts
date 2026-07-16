import api from "@/lib/api";
import { TaskFormValues } from "@/components/tasks/TaskForm";

const createTask = async (task: TaskFormValues) => {
  const response = await api.post("/tasks", task);
  return response.data;
};

const getTasks = async () => {
  const response = await api.get("/tasks");
  return response.data;
};

const updateTask = async (taskId: string, task: Partial<TaskFormValues>) => {
  const response = await api.put(`/tasks/${taskId}`, task);
  return response.data;
};

const deleteTask = async (taskId: string) => {
  const response = await api.delete(`/tasks/${taskId}`);
  return response.data;
};

const taskService = {
  createTask,
  getTasks,
  updateTask,
  deleteTask,
};

export default taskService;
