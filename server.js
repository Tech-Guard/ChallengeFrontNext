const express = require("express");
const fetch = require("node-fetch");
const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());

app.get("/api/nearby-mechanics", async (req, res) => {
  const { lat, lng } = req.query;
  const apiKey = "AIzaSyBd2k4ZkH-eFCNSRhmhd9HJ0xym8abqEyk";
  const url = `https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=${lat},${lng}&radius=5000&type=car_repair&key=${apiKey}`;

  try {
    const response = await fetch(url);
    const data = await response.json();
    res.json(data);
  } catch (error) {
    res.status(500).json({ error: "Erro ao buscar mecânicas" });
  }
});

app.listen(port, () => {
  console.log(`Proxy rodando em http://localhost:${port}`);
});
