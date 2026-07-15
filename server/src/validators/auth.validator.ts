import { NextFunction, Request, Response } from "express";
import { z } from "zod";

export const signupSchema = z.object({
  name: z.string().min(1, "Name is required").trim(),
  email: z.string().email("Invalid email address"),
  password: z.string().min(8, "Password must be at least 8 characters"),
});

export const loginSchema = z.object({
  email: z.string().email("Invalid email address"),
  password: z.string().min(8, "Password must be at least 8 characters"),
});

export function validateSignup(req: Request, res: Response, next: NextFunction) {
  const parseResult = signupSchema.safeParse(req.body);

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
