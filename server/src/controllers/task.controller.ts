import { Request, Response } from "express";
import TaskService from "../services/task.service";

const taskService = new TaskService();

class TaskController {
  async createTask(req: Request, res: Response) {
    const payload = req.body;
    const result = await taskService.createTask(req.user!.userId, payload);
    return res.status(201).json(result);
  }

  async getTasks(req: Request, res: Response) {
    const result = await taskService.getTasks(req.user!.userId);
    return res.status(200).json(result);
  }

  async getTaskById(req: Request, res: Response) {
    const { id } = req.params;
    const result = await taskService.getTaskById(req.user!.userId, id);
    return res.status(200).json(result);
  }

  async updateTask(req: Request, res: Response) {
    const { id } = req.params;
    const payload = req.body;
    const result = await taskService.updateTask(req.user!.userId, id, payload);
    return res.status(200).json(result);
  }

  async deleteTask(req: Request, res: Response) {
    const { id } = req.params;
    await taskService.deleteTask(req.user!.userId, id);
    return res.status(200).json({ success: true, message: "Task deleted successfully" });
  }
}

export default new TaskController();
