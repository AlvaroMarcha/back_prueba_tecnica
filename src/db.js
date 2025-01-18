require("dotenv").config();
const MongoClient = require("mongodb").MongoClient;
const URL = process.env.URI;
const databaseName = "focus";

let client = null;

const DbConnect = async () => {

  if (!client) {
    console.log("Conectando a la base de datos...");
    client = new MongoClient(URL, { useUnifiedTopology: true });
    await client.connect();
    console.log("La conexión a la base de datos se ha establecido");
  }
  return client;

};

const getDatabase = async () => {
  const client = await DbConnect();
  return client.db(databaseName);
};

module.exports = {
  DbConnect,
  getDatabase,
};

