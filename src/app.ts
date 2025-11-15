import express, { Request, Response } from "express"
import router from "./routes/index";
import logger from "./middlewares/logger.middleware";
import swaggerUi from "swagger-ui-express"
import swaggerDoc from "./docs/swagger.json"

const app = express();
app.use(express.json());
app.use(logger.consoleLoggerMiddleware);

app.use("/v1",router);
app.use("/v1/docs", swaggerUi.serve, swaggerUi.setup(swaggerDoc));

app.get("/",(req: Request, res: Response) => {
    res.send("This is the root route!");
});

app.use((req: Request, res: Response) => {
    res.send("API is running...nothing here!");
});

export default app;