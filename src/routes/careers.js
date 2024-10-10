const {
  createCareer,
  getByIdCareer,
  getCareers,
  updateCareer,
  deleteCareer,
} = require("../services/careersService");

const { Router} = require("express");

const routerCareers = Router();

routerCareers.get("/careers", (req, res) => {
  const careers = getCareers();

  res.json(careers);
});

routerCareers.post("/careers", (req, res) => {
  const newCareer = {
    name: req.body.name,
    accredited: req.body.accredited,
  };
  if (!newCareer) {
    res.json({
      message: `Datos incorrectos para la nueva carrera`,
    });
    return;
  }
  createCareer(newCareer.name, newCareer.accredited);
  res.json(newCareer);
});

routerCareers.get("/careers/:id", (req, res) => {
  const careerFound = getByIdCareer(parseInt(req.params.id));
  if (!careerFound) {
    res.json({
      message: `No se encontro la carrera solicitada`,
    });
    return;
  }
  res.json(careerFound);
});

routerCareers.put("/careers/:id", (req, res) => {
  if (!req.param.id && !req.body) {
    res.json({
      message: `No se recibio ningun dato para la modificación o el id es incorrecto`,
    });
    return;
  }
  const careerUpdated = updateCareer(parseInt(req.params.id), req.body);
  if (!careerUpdated) {
    res.json({
      message: `No se encontro la carrera`,
    });
    return;
  }
  res.json(careerUpdated);
});

routerCareers.delete("/careers/:id", (req, res) => {
  if (!req.params.id)
    return res.json({
      message: `Id incorrecto`,
    });
  const careerDeleted = deleteCareer(parseInt(req.params.id));

  if (!careerDeleted) {
    res.json({
      message: `Carrera no encontrada`,
    });
    return;
  }
  res.json(careerDeleted);
});

module.exports = routerCareers;
