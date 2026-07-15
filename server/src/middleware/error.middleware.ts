import { NextFunction, Request, Response } from "express";
import { errorResponse } from "../utils/apiResponse";

export function errorHandler(err: Error & { statusCode?: number }, req: Request, res: Response, next: NextFunction) {
  console.error(err);
  const statusCode = err.statusCode || 500;
  res.status(statusCode).json(errorResponse(err.message || "Internal Server Error", statusCode));
}
