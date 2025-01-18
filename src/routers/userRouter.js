const express = require("express");
const { getDatabase } = require("../db");

const usersRouter = express.Router();

//Get allUsers
usersRouter.get("/", async (req, res) => {
  const db = await getDatabase();
  const users = await db.collection("users_prueba").find().toArray();
  res.status(200).json(users);

});

//Get oneUser
usersRouter.get("/:name", async (req, res) => {
  const { name } = req.params;
  const db = await getDatabase();
  const oneUser = await db.collection("users_prueba").findOne({ "name": name });
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
usersRouter.delete("/delete/:name", async (req, res) => {
  const { name } = req.params;
  const db = await getDatabase();
  await db.collection("users_prueba").deleteOne({ "name": name });
  res.status(200).json({ message: "El usuario " + name + " ha sido eliminado" });

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
