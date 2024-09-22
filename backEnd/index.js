import dotenv from "dotenv"
import express from "express"
import mongoose from "mongoose";
import cors from "cors"




import bookRoute from "./route/Book.Route.js"
import userRoute from "./route/user.Route.js"

dotenv.config()
const app = express()
const PORT = process.env.PORT || 3000;
const MongoDB_URI=process.env.MongoDB_URI;

app.use(cors());
app.use(express.json())


try {
    mongoose.connect(MongoDB_URI,{
      useNewUrlParser: true,
      useUnifiedTopology: true
    });
    console.log("connect to mongoBD")
} catch (error) {
    console.log("Error : ", error)
}

app.use("/book",bookRoute)
app.use("/user",userRoute)

app.listen(PORT, () => {
  console.log(`Example app listening on port ${PORT}`)
})