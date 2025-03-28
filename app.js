import express from "express";
import queryRoutes from "./routes/queryRoutes.js";
import cors from "cors";

const app = express();

app.use(cors());
app.use(express.json());

app.use("/api", queryRoutes);

export default app;
