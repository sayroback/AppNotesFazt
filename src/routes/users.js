const router = require("express").Router();

// Rutas
router.get("/users/signin", (req, res) => {
  res.render("user/signin");
});
router.get("/users/signup", (req, res) => {
  res.render("user/signup");
});

//Exportación
module.exports = router;
