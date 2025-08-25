import mongoose from "mongoose";
import "dotenv/config.js";

const dbConnect = async () => {
  try {
    await mongoose.connect(process.env.CONNECTION_STRING, () => {
      console.log(`Database connected ${dbConnect.connection.host} ${dbConnect.connection.name}`);
    });
  } catch (error) {
    console.error("Database connection Error");
  }
};

export default dbConnect;
