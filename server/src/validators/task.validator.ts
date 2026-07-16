import { NextFunction, Request, Response } from "express";
import { z } from "zod";

export const createTaskSchema = z.object({
  title: z.string().min(1, "Title is required"),
  description: z.string().optional(),
  status: z.enum(["TODO", "IN_PROGRESS", "COMPLETED"]),
  priority: z.enum(["LOW", "MEDIUM", "HIGH"]),
  dueDate: z.string().refine((date) => !Number.isNaN(Date.parse(date)), {
    message: "Invalid due date",
  }),
});

export const updateTaskSchema = createTaskSchema.partial();

export function validateTask(req: Request, res: Response, next: NextFunction) {
  const parseResult = createTaskSchema.safeParse(req.body);

  if (!parseResult.success) {
    const errors = parseResult.error.errors.map((issue) => ({
      field: issue.path.join("."),
      message: issue.message,
    }));
    return res.status(400).json({ error: "Validation failed", details: errors });
  }

  req.body = parseResult.data;
  next();
}

export function validateTaskUpdate(req: Request, res: Response, next: NextFunction) {
  const parseResult = updateTaskSchema.safeParse(req.body);

  if (!parseResult.success) {
    const errors = parseResult.error.errors.map((issue) => ({
      field: issue.path.join("."),
      message: issue.message,
    }));
    return res.status(400).json({ error: "Validation failed", details: errors });
  }

  req.body = parseResult.data;
  next();
}
