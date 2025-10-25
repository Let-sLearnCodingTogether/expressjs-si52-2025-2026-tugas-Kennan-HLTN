import mongoose from "mongoose";

const database = async () => {
    try {
        console.log("Connecting to database...");
        await mongoose.connect("mongodb://127.0.0.1:27017/todo?directConnection=true&serverSelectionTimeoutMS=2000&appName=mongosh+2.5.8");
        console.log("Successfully connected to the database.");
    } catch (error) {
        console.error("Connection failed:", error);
        process.exit(1);
    }
};

export default database;
