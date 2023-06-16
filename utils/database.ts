import mongoose, { ConnectOptions } from "mongoose";

let isConnected = false; // track the connection

export const connectToDb = async () => {
  // https://mongoosejs.com/docs/guide.html#strict
  // global setting
  mongoose.set("strictQuery", true);

  if (isConnected) {
    console.log("Mongodb already connected");
    return;
  }

  try {
    await mongoose.connect(
      process.env.MONGODB_URI as string,
      {
        dbName: "facebook_clone",
        useNewUrlParser: true,
        useUnifiedTopology: true,
      } as ConnectOptions
    );

    isConnected = true;

    console.log("Mongodb is connected");
  } catch (error) {
    console.log(error);
  }
};
