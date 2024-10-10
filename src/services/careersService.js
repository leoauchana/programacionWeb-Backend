// const {getByIdLevel} = require('./levelsService');

let careers = [
  {
    id: 1,
    name: "Filosofia",
    accredited: false,
    deleted: false,
  },
  {
    id: 2,
    name: "Psicologia",
    accredited: true,
    deleted: false,
  },
  {
    id: 3,
    name: "Odontologia",
    accredited: true,
    deleted: true,
  },
];

//Creacion de carrera
const createCareer = (name, accredited) => {
  const newCareer = {
    id: careers.length + 1,
    name,
    accredited,
    deleted: false,
  };
  careers.push(newCareer);
};

//Obtener carreras
const getCareers = () => {
  const careersExists = careers.filter((c) => c.deleted === false);
  return careersExists;
};

//Obtener por id
const getByIdCareer = (id) => {
  const careerFound = careers
    .filter((c) => c.deleted === false)
    .find((c) => c.id === id);
  return careerFound;
};

//Actualizar carrera
const updateCareer = (id, body) => {
  careers = careers.map((c) =>
    c.id === id ? { ...c, name: body.name, accredited: body.accredited } : c
  );

  const careerToUpdate = careers
    .filter((c) => c.deleted === false)
    .find((c) => c.id === id);

  return careerToUpdate;
};

//Eliminar carrera

const deleteCareer = (id) => {
  careers = careers.map((c) => (c.id === id ? { ...c, deleted: true } : c));

  const careerDeleted = careers
    .filter((c) => c.deleted === true)
    .find((c) => c.id === id);

  return careerDeleted;
};

module.exports = {
  createCareer,
  getCareers,
  getByIdCareer,
  updateCareer,
  deleteCareer,
};
