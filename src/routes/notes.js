const router = require("express").Router();

// Rutas
router.get("/notes", (reg, res) => {
  res.send("Notes from database");
});

// Exportación
module.exports = router;
