const express = require("express");
const app = express();
const router = require("./routers");
const PORT = process.env.PORT || 3001;

app.use(express.json());
app.use(router);

//test
app.get("/saludo", (req, res)=>{
  res.send("Hola!");
});



app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
