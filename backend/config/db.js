import mongoose from "mongoose";

export const connectDB = async () => {
  await mongoose
    .connect(
      "mongodb+srv://abdulqadir152:12345@cluster0.wyzhc.mongodb.net/food-del"
    )
    .then(() => {
      console.log("DB Connected");
    });
};
