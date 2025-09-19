import express, { Request, Response } from "express"
import router from "./routes/patient.route";
import logger from "./middlewares/logger.middleware";

const app = express();
app.use(express.json());
app.use(logger.consoleLoggerMiddleware);

app.use("/v1/patient",router);

app.get("/",(req: Request, res: Response) => {
    res.send("This is the root route!");
});

app.use((req: Request, res: Response) => {
    res.send("API is running...nothing here!");
});

export default app;