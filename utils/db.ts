import mongoose, { Connection } from "mongoose";

const MONGODB_URL: any = process.env.MONGODB_URL;

let connection: Connection;
const connectDB = async (): Promise<Connection> => {
  if (!connection) {
    await mongoose.connect(MONGODB_URL);
    connection = mongoose.connection;
    console.log("Connected to MongoDB");
  }
  return connection;
};

export { connectDB };
