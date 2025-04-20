// filepath: d:\projects\eatoes_assignment\backend\server\seedMenu.js
const mongoose = require("mongoose");
const MenuItem = require("./menuModel");
const mongoDBUrl = "mongodb+srv://arpangupta:arpanmongodb@cluster0.azri6.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";

const defaultMenuItems = [
  { name: "Burger", category: "Fast Food", price: 5.99 },
  { name: "Pizza", category: "Fast Food", price: 8.99 },
  { name: "Pasta", category: "Italian", price: 7.99 },
  { name: "Salad", category: "Healthy", price: 4.99 },
  { name: "Sushi", category: "Japanese", price: 12.99 },
  { name: "Tacos", category: "Mexican", price: 6.99 },
  { name: "Steak", category: "Main Course", price: 15.99 },
  { name: "Sandwich", category: "Snacks", price: 3.99 },
  { name: "Fries", category: "Snacks", price: 2.99 },
  { name: "Ice Cream", category: "Dessert", price: 3.49 },
  { name: "Brownie", category: "Dessert", price: 4.49 },
  { name: "Coffee", category: "Beverages", price: 2.99 },
  { name: "Tea", category: "Beverages", price: 1.99 },
  { name: "Smoothie", category: "Beverages", price: 4.99 },
  { name: "Soup", category: "Appetizer", price: 3.99 },
];

mongoose
  .connect(mongoDBUrl, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(async () => {
    console.log("Connected to MongoDB...");
    await MenuItem.deleteMany();
    await MenuItem.insertMany(defaultMenuItems);
    console.log("Default menu items added!");
    mongoose.disconnect();
  })
  .catch((err) => {
    console.error("Error connecting to MongoDB:", err);
  });