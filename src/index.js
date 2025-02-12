import express from "express";
import "dotenv/config";
import cors from "cors";

const app = express();

app.use(cors());

app.get("/api", (req, res) => {
    fetch('https://restcountries.com/v3.1/all')
    .then(response => response.json())
    .then(data => {
      const paisesEnEspanol = data.map(country => ({
        nombre: country.translations?.spa?.common || country.name.common,
        codigo: country.cca2
      }));
      console.log(paisesEnEspanol);
      res.json(paisesEnEspanol)
    })
    .catch(error => console.error('Error:', error));
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => console.log(`Servidor listo`));
