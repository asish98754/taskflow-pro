import prisma from "../config/database";
import { hashPassword, comparePassword } from "../utils/hash";
import { generateToken } from "../utils/jwt";

interface SignupPayload {
  name: string;
  email: string;
  password: string;
}

interface LoginPayload {
  email: string;
  password: string;
}

class AuthService {
  async signup(payload: SignupPayload) {
    const { name, email, password } = payload;

    const existingUser = await prisma.user.findUnique({
      where: { email },
    });

    if (existingUser) {
      const error = new Error("Email already exists.");
      (error as any).statusCode = 409;
      throw error;
    }

    const hashedPassword = await hashPassword(password);

    const user = await prisma.user.create({
      data: {
        name,
        email,
        password: hashedPassword,
        role: "USER",
      },
    });

    const { password: _password, ...safeUser } = user;
    return {
      success: true,
      message: "User created successfully",
      data: {
        user: safeUser,
      },
    };
  }

  async login(payload: LoginPayload) {
    const invalidError = new Error("Invalid email or password");
    (invalidError as any).statusCode = 401;

    const { email, password } = payload;

    const user = await prisma.user.findUnique({
      where: { email },
    });

    if (!user) {
      throw invalidError;
    }

    const isValidPassword = await comparePassword(password, user.password);
    if (!isValidPassword) {
      throw invalidError;
    }

    const token = generateToken({
      userId: user.id,
      email: user.email,
      role: user.role,
    });

    const { password: _password, ...safeUser } = user;

    return {
      success: true,
      message: "Login successful",
      data: {
        token,
        user: safeUser,
      },
    };
  }

  async profile(userId: string) {
    const user = await prisma.user.findUnique({
      where: { id: userId },
    });

    if (!user) {
      const error = new Error("User not found");
      (error as any).statusCode = 404;
      throw error;
    }

    const { password: _password, ...safeUser } = user;

    return {
      success: true,
      message: "Profile retrieved successfully",
      data: {
        user: safeUser,
      },
    };
  }

  async comparePassword(plainText: string, hashed: string) {
    return comparePassword(plainText, hashed);
  }

  async generateJwt(payload: Record<string, unknown>) {
    return generateToken(payload);
  }
}

export default AuthService;
