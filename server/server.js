import devBundle from "./devBundle";
import { MongoClient } from "mongodb";
import mongoose from "mongoose";
import app from "./express";
import config from "./../config/config";

devBundle.compile(app);
//mongo
const url = process.env.MONGODB_URI || "mongodb://localhost:27017/mernSimpleSetup";
MongoClient.connect(url, (err, db) => {
    console.log("Connected successfully to mongodb server");
    console.log("Connected successfully to mongodb server");
    console.log("Connected successfully to mongodb server");
    console.log("Connected successfully to mongodb server");
    db.close();
});

//mongoose
mongoose.Promise = global.Promise;
mongoose.connect(config.mongoUri, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true,
});

mongoose.connection.on("error", () => {
    throw new Error(`unable to connect to database: ${mongoUri}`);
});
