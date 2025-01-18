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
usersRouter.get("/:name", async (req, res)=>{
  const {name}=req.params;
  const db=await getDatabase();
  const oneUser=await db.collection("users_prueba").findOne({"name":name});
  res.send(oneUser);


});

//Add user
usersRouter.post("/add", async (req, res)=>{
  res.send("Usuario agregado");
});





module.exports = usersRouter;
