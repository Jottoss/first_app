const express = require("express");
const router = express.Router();
const faker = require("faker");

let db = require("./db");

router.get('/', (req, res) => {
  res.render('pages/home');
  res.send('Página de teste');
  //fazer as outras routes
});

router.get('/about', () => {
  res.send('Minha página Sobre');
});

module.exports = router;