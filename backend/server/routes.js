const express = require("express");
const MenuItem = require("./menuModel");
const { pgClient } = require("./db");
const router = express.Router();

router.get("/menu", async (req, res) => {
  try {
    const menuItems = await MenuItem.find();
    res.json(menuItems);
  } catch (error) {
    res.status(500).send(error.message);
  }
});

// Create a new order
router.post("/order", async (req, res) => {
  const { name, phone, items } = req.body;
  const query = "INSERT INTO orders (name, phone, items) VALUES ($1, $2, $3) RETURNING *";
  const values = [name, phone, JSON.stringify(items)];
  try {
    const result = await pgClient.query(query, values);
    res.json({ message: "Order placed successfully!", order: result.rows[0] });
  } catch (error) {
    res.status(400).send(error.message);
  }
});

// Retrieve past orders
router.get("/orders/:phone", async (req, res) => {
  const { phone } = req.params;
  const query = "SELECT * FROM orders WHERE phone = $1";
  try {
    const result = await pgClient.query(query, [phone]);
    res.json(result.rows);
  } catch (error) {
    res.status(500).send(error.message);
  }
});

module.exports = router;