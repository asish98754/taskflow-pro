import express from "express";
import cors from "cors";
import userRoutes from "./routes/user.routes";
import testRoutes from "./routes/test.routes";
import authRoutes from "./routes/auth.routes";
import { errorHandler } from "./middleware/error.middleware";

const app = express();

const corsOptions = {
  origin: ["http://localhost:3000", "http://127.0.0.1:3000"],
  credentials: true,
  methods: ["GET", "POST", "PUT", "PATCH", "DELETE", "OPTIONS"],
  allowedHeaders: ["Content-Type", "Authorization"],
};

app.use(cors(corsOptions));

app.use(express.json());

app.use(
  "/api/users",
  userRoutes
);

app.use(
  "/api/auth",
  authRoutes
);

app.use(
  "/api/test",
  testRoutes
);

app.get("/", (req, res) => {
  res.json({
    message: "TaskFlow API Running",
  });
});

app.use(errorHandler);

export default app;
