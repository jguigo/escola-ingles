const express = require("express");

const app = express();
app.use(express.json());

app.get("/", (req, res) => {
   res.status(200).send({message: "Bem vindo a esse teste de API"});
});

module.exports = app;
