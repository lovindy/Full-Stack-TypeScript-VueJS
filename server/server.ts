// src/server.ts
import app from "./app";
import connectDB from "./config/database";
import dotenv from "dotenv";

dotenv.config();

const port = process.env.PORT || 8080;

const startServer = async () => {
  try {
    await connectDB();

    app.listen(port, () => {
      console.log(`Server running on port ${port}`);
      console.log(`MongoDB URI: ${process.env.MONGODB_URI}`);
    });
  } catch (error) {
    console.error("Failed to start server:", error);
    process.exit(1);
  }
};

startServer();
