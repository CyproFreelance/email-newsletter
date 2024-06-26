import mongoose from "mongoose";

export const connectDb = async () => {
  try {
    const mongouri = process.env.MONGODB_URI;

    // iff mongo thing is not there in env file
    if (!mongouri) {
      throw new Error("MongoDB URI is not defined in environment variables.");
    }
    const connect = await mongoose.connect(mongouri);
    console.log(`Mongo connected: ${connect.connection.host}`);
  } catch (error) {
    console.error(`Error Connection : ${error}`);
    // process.exit(1)
  }
};
