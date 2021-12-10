const router = require("express").Router();
const Note = require("../models/Note");

// Rutas
router.get("/notes/add", (req, res) => {
  res.render("notes/new-note");
});
router.post("/notes/new-note", async (req, res) => {
  const { title, description } = req.body; //Obtenemos los datos
  const errors = []; // validamos
  if (!title) {
    errors.push({ text: "Please write a title" });
  }
  if (!description) {
    errors.push({ text: "Please write a description" });
  }
  if (errors.length > 0) {
    res.render("notes/new-note", {
      errors,
      title,
      description,
    });
  } else {
    const newNote = new Note({ title, description });
    console.log(newNote);
    await newNote.save();
    res.redirect("/notes");
  }
});
//Consultamos los datos
router.get("/notes", async (req, res) => {
  const notes = await Note.find();
  res.render("notes/all-notes", { notes });
});

// Exportación
module.exports = router;
