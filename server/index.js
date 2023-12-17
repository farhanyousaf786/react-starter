import express from "express";
import bodyParser from "body-parser";
import cors from "cors";
import all_routes from "./routes/all_routes.js";
import dotenv from "dotenv";
import path from "path";
import logger from "morgan";

const app = express();
const __dirname = path.resolve();
dotenv.config();
app.use(logger("dev"));
app.use(express.static(path.join(__dirname, "build")));
app.use(bodyParser.json());
app.use(cors());

app.use("/", all_routes);
app.get("/", (req, res) => res.send("Hello from Express Server!!!"));
app.all("*", (req, res) => res.send("Server Error (Route you looking for is not exists)"));


const PORT = process.env.PORT || 5000;
app.listen(PORT, console.log(`Server started on port ${PORT}`));
