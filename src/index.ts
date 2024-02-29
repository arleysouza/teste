import express, {Express} from "express";
import dotenv from "dotenv";
import router from "./routes";
dotenv.config();

const app:Express = express();
app.use(express.json());
const PORT = process.env.PORT;
app.listen(PORT, () => console.log(`Rodando na ${PORT}`));

app.use(router);