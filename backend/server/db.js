const mongoose = require("mongoose");
const { Client } = require("pg");
const mongoDBUrl = process.env.MONGO_URI; 
const postgresURI = process.env.POSTGRES_URI; 

mongoose.connect(mongoDBUrl, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log("MongoDB connected..."))
  .catch(err => console.error("MongoDB connection error:", err));

const pgClient = new Client({
  connectionString: postgresURI,
});

pgClient.connect()
  .then(() => console.log("PostgreSQL connected..."))
  .catch(err => console.error("PostgreSQL connection error:", err));

module.exports = { pgClient };