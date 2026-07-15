import { Request, Response } from "express";
import AuthService from "../services/auth.service";
import { loginSchema, signupSchema } from "../validators/auth.validator";

const authService = new AuthService();

class AuthController {
  async signup(req: Request, res: Response) {
    const { name, email, password } = signupSchema.parse(req.body);
    const result = await authService.signup({ name, email, password });
    return res.status(201).json(result);
  }

  async login(req: Request, res: Response) {
    const { email, password } = loginSchema.parse(req.body);
    const result = await authService.login({ email, password });
    return res.status(200).json(result);
  }

  async logout(req: Request, res: Response) {
    res.clearCookie("token", {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: "lax",
    });
    return res.status(200).json({ success: true, message: "Logged out successfully" });
  }

  async profile(req: Request, res: Response) {
    const userId = req.user?.userId;
    if (!userId) {
      return res.status(401).json({ success: false, message: "Unauthorized" });
    }

    const result = await authService.profile(userId);
    return res.status(200).json(result);
  }
}

export default new AuthController();
