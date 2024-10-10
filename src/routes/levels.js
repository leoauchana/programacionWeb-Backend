const {
  getLevels,
  addLevel,
  getAllIdLevels,
  updateLevelById,
  deleteLevel
} = require("../services/levelsService");

const Router = require("express");

const routerLevels = Router();

//Obtener todos los niveles
routerLevels.get("/levels", (req, res) => {
  const levels = getLevels();
  res.json(levels);
});

//Obtener niveles por id carrera
routerLevels.get("/levels/:id", (req, res) => {
  if (!req.params.id)
    return res.json({
      message: `El id no es correcto`,
    });
  console.log(req.params.id);
  const levelsSearched = getAllIdLevels(parseInt(req.params.id));
  if (!levelsSearched) {
    res.json({
      message: `La carrera no tiene niveles`,
    });
    return;
  }
  res.json(levelsSearched);
});

//Crear nivel
routerLevels.post("/levels", (req, res) => {
  const newlevel = addLevel(req.body.name, parseInt(req.body.idCareer));
  if (!newlevel) {
    res.json({
      message: `No se encuentra la carrera`,
    });
    return;
  }
  res.json(newlevel);
});

//Actualizar nivel
routerLevels.put("/levels/:id", (req, res) => {
  if (!req.params.id)
    return res.json({
      message: `Incorrecto ingreso del id`,
    });
  const levelUpdated = updateLevelById(
    parseInt(req.params.id),
    req.body.name,
    parseInt(req.body.idCareer)
  );
  if (!levelUpdated)
    return res.json({
      message: `No se pudo actualizar el nivel`,
    });
  return levelUpdated;
});

//Eliminae nivel
routerLevels.delete("/levels/:id", (req, res) => {
  if (!req.params.id)
    return res.json({
      message: `Id recibido incorrecto`,
    });
  const levelDeleted = deleteLevel(parseInt(req.params.id));
  if (!levelDeleted) {
    res.json({
      message: `No se pudo eliminar el nivel.`,
    });
    return;
  }
  res.json(levelDeleted);
});

module.exports = routerLevels;
