const { getByIdCareer } = require("./careersService");

let levels = [];

const addLevel = (name, idCareer) => {
  const careerSelected = isValidIdCareer(idCareer);
  if (!careerSelected) {
    return null;
  }
  const newLevel = {
    id: levels.length + 1,
    name,
    idCareer,
    deleted: false,
  };

  levels.push(newLevel);
  return newLevel;
};

const getLevels = () => {
  return levels.filter((l) => l.deleted === false);
};

const getAllIdLevels = (id) => {
  const levelsId = levels.filter(
    (l) => l.deleted === false && l.idCareer === id
  );
  return levelsId;
};

const updateLevelById = (id, name, idCareer) => {
  let levelSelected = getByIdLevel(id);
  if (!levelSelected) return `No se encontro el nivel con id ${id}.`;
  const idCareerValid = isValidIdCareer(idCareer);
  if (!idCareerValid) return `No existe la carrera con el id ${id}`;
  levelSelected = { ...levelSelected, name, idCareer};
  console.log(levelSelected);
  levels = levels.map((l) => (l.id === id ? levelSelected : l));
  return levelSelected;
};

const getByIdLevel = (id) => {
  const level = levels
    .filter((l) => l.deleted === false)
    .find((l) => l.id === id);

  if (!level) return null;

  return level;
};

const isValidIdCareer = (id) => {
  const careerValid = getByIdCareer(id);
  if (careerValid) {
    return true;
  } else return false;
};

const deleteLevel = (id) => {
let levelSelected = getByIdLevel(id);
if(!levelSelected) return `No se encontro el nivel con id ${id}`;
levelSelected = {...levelSelected, deleted: true};
levels = levels.map(l => l.id === id ? levelSelected : l);

return levelSelected;
};

module.exports = {
  addLevel,
  getLevels,
  getAllIdLevels,
  updateLevelById,
  deleteLevel
};
