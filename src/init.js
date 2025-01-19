const express = require("express");
require("dotenv").config();
const app = express();
const usersRouter = require("./routers/userRouter");
const PORT = process.env.PORT || 3000;
const cors=require("cors");

app.use(express.json());
app.use(cors());
app.use("/users", usersRouter);


app.get("/", (req, res)=>{
  res.send("Principal");
});

app.listen(PORT, () => {
  console.log("Servidor corriendo en http://localhost:"+PORT);
});
