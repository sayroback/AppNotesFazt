const router = require("express").Router();

// Rutas
router.get("/", (req, res) => {
  res.render("index");
});
router.get("/about", (req, res) => {
  res.render("about");
});

//Exportación
module.exports = router;
