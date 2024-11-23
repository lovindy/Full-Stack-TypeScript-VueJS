import express from "express";
import type { Express, Request, Response, NextFunction } from "express";
import cors from "cors";
import morgan from "morgan";
import authRoutes from "./routes/auth";

const app: Express = express();

// Middleware
app.use(cors());
app.use(morgan("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Base Route
app.get("/", (req: Request, res: Response) => {
  res.send("Hello, World!");
});

// Sub Routes
app.use("/api/v1/auth", authRoutes);

// Error handling
app.use((err: any, req: Request, res: Response, next: NextFunction) => {
  console.error(err.stack);
  res.status(err.status || 500).json({
    error: {
      message: err.message || "Something went wrong!",
      ...(process.env.NODE_ENV === "development" && { stack: err.stack }),
    },
  });
});

export default app;
