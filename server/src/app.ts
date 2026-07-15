import express from "express";
import cors from "cors";
import userRoutes from "./routes/user.routes";
import testRoutes from "./routes/test.routes";

const app = express();

app.use(cors());

app.use(express.json());

app.use(
  "/api/users",
  userRoutes
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

export default app;
