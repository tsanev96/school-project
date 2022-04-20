import mongoose from "mongoose";

const main = () => {
  mongoose
    .connect(process.env.DB as string)
    .then(() => console.log("connected to db"))
    .catch((err) => console.log(`connection failed ${err}`));
};

export default main;
