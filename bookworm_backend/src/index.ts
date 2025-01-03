import express, {Express, Request, Response} from "express";
import dotenv from "dotenv";

dotenv.config();

const app:Express = express();
const port = process.env.PORT || 8080;

app.get("/healthcheck", (req: Request, res: Response) => {
    res.send(`Express server is up and running on port: ${port}`);
});

app.listen(port, () => {
    console.log(`[server]: Server is running at http://localhost:${port}`);
});
