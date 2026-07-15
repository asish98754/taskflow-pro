import { Router } from "express";
import authController from "../controllers/auth.controller";
import { asyncHandler } from "../utils/asyncHandler";
import { authenticate } from "../middleware/auth.middleware";

const router = Router();

router.post("/signup", asyncHandler(authController.signup));
router.post("/login", asyncHandler(authController.login));
router.post("/logout", asyncHandler(authController.logout));
router.get("/profile", authenticate, asyncHandler(authController.profile));

export default router;
