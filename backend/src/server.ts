import "dotenv/config";
import express, { Router, Request, Response } from "express";

const app = express();
const route = Router();

app.use(express.json());

route.get("/", (req: Request, res: Response) => {
  res.json({ message: "Aqui ó tchay aqui ó tomi" });
});

app.use(route);

app.listen(process.env.API_PORT, () => {
  console.log(`Server running on port ${process.env.API_PORT}`);
});
