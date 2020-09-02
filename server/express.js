// server config
import express from "express";
import bodyParser from "body-parser";
import cookieParser from "cookie-parser";
import compress from "compression";
import cors from "cors";
import helmet from "helmet";
import config from "./../config/config";
import path from "path";
//template
import Template from "./../template";
//routes
import userRoutes from './routes/user.routes'
import authRoutes from './routes/auth.routes'

const CURRENT_WORKING_DIR = process.cwd();
const app = express();


//utils
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(compress());
app.use(helmet());
app.use(cors());
app.use("/dist", express.static(path.join(CURRENT_WORKING_DIR, "dist")));

//routes
app.use('/', userRoutes)
app.use('/', authRoutes)

//server
app.listen(config.port, err => {
    if (err) {
        console.log(err);
    }
    console.info("Server started on port %s.", config.port);
});

app.get("/", (req, res) => {
    res.status(200).send(Template());
});

//auth error
app.use((err, req, res, next) => {
    if (err.name === 'UnauthorizedError') {
        res.status(401).json({ "error": err.name + ": " + err.message })
    } else if (err) {
        res.status(400).json({ "error": err.name + ": " + err.message })
        console.log(err)
    }
})

export default app;
