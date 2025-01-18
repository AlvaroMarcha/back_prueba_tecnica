const express = require("express");
const { getDatabase } = require("../db");

const usersRouter = express.Router();

//Get allUsers
usersRouter.get("/", async (req, res)=>{
  const db=await getDatabase();
  const users= await db.collection("users_prueba").find().toArray();
  res.status(200).json(users);

});

//Get oneUser
usersRouter.get("/:id", async (req, res)=>{
  res.send("Solo un usuario");

});

//Add user
usersRouter.post("/add", async (req, res)=>{
  res.send("Usuario agregado");
});





module.exports = usersRouter;
