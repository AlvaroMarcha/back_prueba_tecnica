const express = require("express");
require("dotenv").config();
const app = express();
const dbConnection= require("./db")
const usersRouter = require("./routers/userRouter");
const PORT = process.env.PORT || 3000;





app.use(express.json());
app.use("/users", usersRouter);


app.get("/", (req, res)=>{
  res.send("Principal");
});




app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
