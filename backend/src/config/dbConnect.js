import mongoose from "mongoose";
import "dotenv/config.js";

const dbConnect = async () => {
  try {
    await mongoose.connect(process.env.CONNECTION_STRING);
    console.log(`Database connected ${mongoose.connection.host} ${mongoose.connection.name}`);
  } catch (err) {
    console.error("Database connection Error", err);
    process.exit(1);
  }
};

export default dbConnect;
