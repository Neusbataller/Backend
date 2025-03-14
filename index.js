const express = require("express");
const app = express();
const morgan = require("morgan");

app.set("port", process.env.PORT || 8080);

app.listen(app.get("port"), () => {
  console.log("hola desde el puerto: " + app.get("port"));
});

//Rutas
app.use(require("./routes/index"));
