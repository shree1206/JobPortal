import mongoose from "mongoose";

export default function connectDB() {
    const url = "mongodb+srv://dbUser:dbPassword@cluster0.5wuo35q.mongodb.net/";

    try {
        mongoose.connect(url);
    } catch (err) {
        console.error(err.message);
        process.exit(1);
    }
    const dbConnection = mongoose.connection;
    dbConnection.once("open", (_) => {
        console.log(`Database connected: ${url}`);
    });

    dbConnection.on("error", (err) => {
        console.error(`connection error: ${err}`);
    });
    return;
}
