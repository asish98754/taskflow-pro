import prisma from "../config/database";

interface CreateTaskPayload {
  title: string;
  description: string;
  status: "TODO" | "IN_PROGRESS" | "COMPLETED";
  priority: "LOW" | "MEDIUM" | "HIGH";
  dueDate: string;
}

interface UpdateTaskPayload {
  title?: string;
  description?: string;
  status?: "TODO" | "IN_PROGRESS" | "COMPLETED";
  priority?: "LOW" | "MEDIUM" | "HIGH";
  dueDate?: string;
}

class TaskService {
  async createTask(userId: string, payload: CreateTaskPayload) {
    const task = await prisma.task.create({
      data: {
        ...payload,
        dueDate: new Date(payload.dueDate),
        userId,
      },
    });

    return {
      success: true,
      message: "Task created successfully",
      data: {
        task,
      },
    };
  }

  async getTasks(userId: string) {
    const tasks = await prisma.task.findMany({
      where: { userId },
      orderBy: { dueDate: "asc" },
    });

    return {
      success: true,
      message: "Tasks retrieved successfully",
      data: {
        tasks,
      },
    };
  }

  async getTaskById(userId: string, taskId: string) {
    const task = await prisma.task.findFirst({
      where: {
        id: taskId,
        userId,
      },
    });

    if (!task) {
      const error = new Error("Task not found");
      (error as any).statusCode = 404;
      throw error;
    }

    return {
      success: true,
      message: "Task retrieved successfully",
      data: {
        task,
      },
    };
  }

  async updateTask(userId: string, taskId: string, payload: UpdateTaskPayload) {
    const existingTask = await prisma.task.findFirst({
      where: { id: taskId, userId },
    });

    if (!existingTask) {
      const error = new Error("Task not found");
      (error as any).statusCode = 404;
      throw error;
    }

    const task = await prisma.task.update({
      where: { id: taskId },
      data: {
        ...payload,
        dueDate: payload.dueDate ? new Date(payload.dueDate) : undefined,
      },
    });

    return {
      success: true,
      message: "Task updated successfully",
      data: {
        task,
      },
    };
  }

  async deleteTask(userId: string, taskId: string) {
    const existingTask = await prisma.task.findFirst({
      where: { id: taskId, userId },
    });

    if (!existingTask) {
      const error = new Error("Task not found");
      (error as any).statusCode = 404;
      throw error;
    }

    await prisma.task.delete({
      where: { id: taskId },
    });

    return {
      success: true,
      message: "Task deleted successfully",
    };
  }
}

export default TaskService;
