import jwt from "jsonwebtoken";

const JWT_SECRET = process.env.JWT_SECRET || "taskflow_secret_key";

export interface AuthTokenPayload {
  userId: string;
  email: string;
  role: string;
}

export function generateToken(payload: AuthTokenPayload, options: jwt.SignOptions = {}) {
  return jwt.sign(payload, JWT_SECRET, {
    expiresIn: "1h",
    ...options,
  });
}

export function verifyToken(token: string): AuthTokenPayload {
  return jwt.verify(token, JWT_SECRET) as AuthTokenPayload;
}

// Backward compatibility
export const signJwt = generateToken;
export const verifyJwt = verifyToken;
