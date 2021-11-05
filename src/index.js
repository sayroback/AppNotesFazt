const express = require("express"); // Llamamos los modulos de express en el index.
const path = require("path");
const exphbs = require("express-handlebars");
const methodOverride = require("method-override");
const session = require("express-session");
// Initializations
const app = express();
require("./database");

// Settings
app.set("port", process.env.PORT | 3000); // fijamos el puerto 3000 para arrancar la app o el que el servicio cloud tenga default.
app.set("views", path.join(__dirname, "views")); //señalamos donde esta la carpeta views con el modulo path
app.engine(
  ".hbs",
  exphbs({
    defaultLayout: "main", // diseño principal
    layoutDir: path.join(app.get("views"), "layouts"), //designamos la dirección de los layouts
    partialsDir: path.join(app.get("views"), "partials"), //pequeñas partes reutilizables de HTML
    extname: ".hbs", //designa la extensión de nuestros archivos
  })
); //Modulo express-handlebars
app.set("view engine", "hbs");

// Middleware (Funciones previas al servidor)
app.use(express.urlencoded({ extended: false }));
app.use(methodOverride("_method"));
app.use(
  session({
    secret: "halley",
    resave: true,
    saveUninitialized: true,
  })
);

// Global Variables
// Routes
app.use(require("./routes/index"));
app.use(require("./routes/notes"));
app.use(require("./routes/users"));

// Static Files
app.use(express.static(path.join(__dirname, "public")));

// Server is listening

app.listen(app.get("port"), () => {
  //iniciamos el servidor y mandamos mensaje si todo salio bien
  console.log("Server on port", app.get("port"));
});
