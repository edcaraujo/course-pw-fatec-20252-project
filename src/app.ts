import express, { Request, Response } from "express"
import router from "./routes/patient.route";
import userRouter from "./routes/user.route";
import authRouter from "./routes/auth.route";
import logger from "./middlewares/logger.middleware";

const app = express();
app.use(express.json());
app.use(logger.consoleLoggerMiddleware);

app.use("/v1/patient",router);
app.use("/v1/users", userRouter);
app.use("/v1/auth", authRouter);

app.get("/",(req: Request, res: Response) => {
    res.send("This is the root route!");
});

app.use((req: Request, res: Response) => {
    res.send("API is running...nothing here!");
});

export default app;