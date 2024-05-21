import express, { Application } from "express";
import { Request, Response } from "express";
const app: Application = express();
import cors from "cors";

// parsers
app.use(express.json());
app.use(cors());

app.get("/", (req: Request, res: Response) => {
  console.log("helloo");

  const a = 20;
  res.send(a);
});
export default app;
