import dotenv from "dotenv"
dotenv.config();

const config = () => {
    return {
        env: process.env.NODE_ENV || "development",
        port: process.env.PORT || 3001,
        jwtSecret: process.env.JWT_SECRET || "YOUR_secret_key",
        mongoUri:
            process.env.MONGODB_URI ||
            process.env.MONGO_HOST ||
            "mongodb://" +
            (process.env.IP || "localhost") +
            ":" +
            (process.env.MONGO_PORT || "27017") + process.env.MONG_DB,
    }
};

export default config();
