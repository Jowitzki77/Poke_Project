// /server/server.js
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());

// Connect to MongoDB
mongoose.connect(
    "mongodb+srv://jakobjovanhrustl:Admin12345@cluster0.62fpn57.mongodb.net/pokemondb?retryWrites=true&w=majority",
    { useNewUrlParser: true, useUnifiedTopology: true }
)
    .then(() => console.log("✅ Connected to MongoDB"))
    .catch((err) => console.error("❌ MongoDB connection error:", err));


// Schema & Model
const PlayerSchema = new mongoose.Schema({
    ime: String,
    priimek: String,
    deck: String,
    email: String,
});

const Player = mongoose.model("Player", PlayerSchema);

// Routes
app.get("/players", async (req, res) => {
    const players = await Player.find();
    res.json(players);
});

app.post("/players", async (req, res) => {
    const newPlayer = new Player(req.body);
    await newPlayer.save();
    res.json(newPlayer);
});

// Start server
app.listen(5000, () => console.log("✅ Server running on http://localhost:5000"));

