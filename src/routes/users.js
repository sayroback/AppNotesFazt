const router = require("express").Router();

// Rutas
router.get("/users/signin", (reg, res) => {
  res.render("user/signin");
});
router.get("/users/signup", (reg, res) => {
  res.render("user/signup");
});

//Exportación
module.exports = router;
