import { Router } from "express";
import taskController from "../controllers/task.controller";
import { asyncHandler } from "../utils/asyncHandler";
import { authenticate } from "../middleware/auth.middleware";
import { validateTask, validateTaskUpdate } from "../validators/task.validator";

const router = Router();

router.use(authenticate);

router.post("/", validateTask, asyncHandler(taskController.createTask));
router.get("/", asyncHandler(taskController.getTasks));
router.get("/:id", asyncHandler(taskController.getTaskById));
router.put("/:id", validateTaskUpdate, asyncHandler(taskController.updateTask));
router.delete("/:id", asyncHandler(taskController.deleteTask));

export default router;
