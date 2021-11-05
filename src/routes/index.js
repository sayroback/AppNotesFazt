const router = require("express").Router();

// Rutas
router.get("/", (reg, res) => {
  res.render("index");
});
router.get("/about", (reg, res) => {
  res.render("about");
});

//Exportación
module.exports = router;
