const express = require("express");

const app = express();
const careersRouter = require("./routes/careers");
const levelsRouter = require("./routes/levels");
//Settings
app.set("port", 3000);

app.use(express.json());
app.use(careersRouter);
app.use(levelsRouter);

app.use((req, res) => {
  res.send(`No se encontro tu pagina`);
});

app.listen(app.get("port"));
console.log(`Server on port ${app.get("port")}`);
