const express = require("express");
const { getDatabase } = require("../db");
const { ObjectId }= require("mongodb");

const usersRouter = express.Router();

//Get allUsers
usersRouter.get("/", async (req, res) => {
  const db = await getDatabase();
  const users = await db.collection("users_prueba").find().toArray();
  res.status(200).json(users);

});

//Get oneUser
usersRouter.get("/:id", async (req, res) => {
  const { id } = req.params;
  const db = await getDatabase();
  //Import ObjectId to handle ID in mongodb
  const oneUser = await db.collection("users_prueba").findOne({ _id: new ObjectId(id) });
  res.send(oneUser);
});

//Add user
usersRouter.post("/add", async (req, res) => {
  const { name, phone, email, password } = req.body;
  const newUser = {
    "name": name,
    "phone": phone,
    "email": email,
    "password": password
  };
  const db = await getDatabase();
  await db.collection("users_prueba").insertOne(newUser);
  res.status(200).json({ message: "Usuario " + newUser.name + " insertado" });
});

//Delete user
usersRouter.delete("/delete/:id", async (req, res) => {
  const { id } = req.params;
  const db = await getDatabase();
  await db.collection("users_prueba").deleteOne({ "_id": new ObjectId(id) });
  res.status(200).json({ message: "El usuario con ID" + id + " ha sido eliminado" });
});

//Update user
usersRouter.put("/update/:nameid", async (req, res) => {
  const { nameid } = req.params;
  const { name, email, phone, password } = req.body;
  const db = await getDatabase();
  //Set new data
  updateData = {
    name: name,
    email: email,
    phone: phone,
    password: password
  };
  await db.collection("users_prueba").updateOne(
    { name: nameid },
    { $set: updateData }
  );
  res.status(200).json({ message: "Usuario " + nameid + " actualizado" });
});






module.exports = usersRouter;
