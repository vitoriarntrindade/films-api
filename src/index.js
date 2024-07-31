const express = require("express");
const mongoose = require("mongoose");
require('dotenv').config(); // Carregar variáveis de ambiente

const app = express();
const port = 3000;

// Middleware para processar JSON
app.use(express.json());

// Definir o modelo do Mongoose
const FilmAPI = mongoose.model(
  "Film",
  new mongoose.Schema({
    title: String,
    description: String,
    image_url: String,
    trailer_url: String,
  })
);

// Conectar ao MongoDB 
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    console.log("Connected to MongoDB");

    // Iniciar o servidor após a conexão com o banco de dados
    app.listen(port, () => {
      console.log(`app listening on port ${port}`);
    });
  })
  .catch((err) => {
    console.error("Error connecting to MongoDB", err);
  });


app.post("/", async (req, res) => {
  try {
    const filmAPI = new FilmAPI({
      title: req.body.title,
      description: req.body.description,
      image_url: req.body.image_url,
      trailer_url: req.body.trailer_url,
    });
    await filmAPI.save();
    res.status(201).send(filmAPI);
  } catch (error) {
    res.status(400).send(error.message);
  }
});

app.get("/films", async (req, res) => {
  try {
    const films = await FilmAPI.find();
    res.status(200).send(films);
  } catch (error) {
    res.status(500).send(error.message);
  }
});

app.delete("/films/:id", async (req, res) => {
  try {
    const film = await FilmAPI.findByIdAndDelete(req.params.id);
    if (!film) {
      return res.status(404).send("Film not found");
    }
    res.status(200).send(film);
  } catch (error) {
    res.status(500).send(error.message);
  }
});

app.put("/films/:id", async (req, res) => {
  try {
    const film = await FilmAPI.findByIdAndUpdate(
      req.params.id,
      {
        title: req.body.title,
        description: req.body.description,
        image_url: req.body.image_url,
        trailer_url: req.body.trailer_url,
      },
      { new: true }
    );

    if (!film) {
      return res.status(404).send("Film not found");
    }

    res.status(200).send(film);
  } catch (error) {
    res.status(400).send(error.message);
  }
});
