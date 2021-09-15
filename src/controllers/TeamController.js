const Teams = require("../models/Teams");

const getAll = async (req, res) => {
  try {
    const teams = await Teams.find(); // promise
    if (teams.length === 0) {
      return res.status(404).send({ message: "Não existem times cadastrados" });
    }
    return res.send({ teams });
  } catch (err) {
    res.status(500).send({ error: err.message });
  }
};

const getById = async (req, res) => {
  const id = req.params.id;

  try {
    const character = await Teams.findById(id);
    if (!character) {
      res.status(404).json({ message: "Time não encontrado" });
      return;
    }
  } catch (err) {
    res.status(500).send({ error: err.message });
  }
};

const create = async (req, res) => {
  const { name, foundationYear, country, league, image } = req.body;

  if (!name || !foundationYear || !country || !league || !image) {
    res
      .status(400)
      .send({ message: "Você não enviou todos os dados corretamente" });
    return;
  }

  const newTeam = await new Teams({
    name,
    foundationYear,
    country,
    league,
    image,
  });

  try {
    await newTeam.save();
    return res
      .status(201)
      .send({ message: "Time criado com sucesso", newTeam });
  } catch (err) {
    res.status(500).send({ error: err.message });
  }
};

const update = async (req, res) => {
  const { name, foundationYear, country, league, image } = req.body;

  if (!name || !foundationYear || !country || !league || !image) {
    res
      .status(400)
      .send({ message: "Você não enviou todos os dados corretamente" });
    return;
  }

  res.team.name = name;
  res.team.foundationYear = foundationYear;
  res.team.country = country;
  res.team.league = league;
  res.team.image = image;

  try {
    await res.team.save();
    res.send({ message: "Time alterado com sucesso" });
  } catch (err) {
    res.status(500).send({ error: err.message });
  }
};

const del = async (req, res) => {
  try {
    await res.team.remove();
    return res.send({ message: "Time removido com sucesso" });
  } catch (err) {
    res.status(500).send({ error: err.message });
  }
};

const filterByName = async (req, res) => {
  const name = req.query.name;

  if (!name) {
    res.status(400).send({ error: "Time não encontrado!" });
    return;
  }

  try {
    const teams = await Teams.find({ name: { $regex: `${name}`, $options: 'i' } });
    return res.send({ teams });
  } catch (err) {
    res.status(500).send({ error: err.message });
  }
};

const filterByCountry = async (req, res) => {
  const country = req.query.country;

  if (!country) {
    res.status(400).send({ error: "País não encontrado!" });
    return;
  }

  try {
    const teams = await Teams.find({ country: { $regex: `${country}`, $options: 'i' } });
    return res.send({ teams });
  } catch (err) {
    res.status(500).send({ error: err.message });
  }
};

const filterByLeague = async (req, res) => {
  const league = req.query.league;

  if (!league) {
    res.status(400).send({ error: "País não encontrado!" });
    return;
  }

  try {
    const teams = await Teams.find({ league: { $regex: `${league}`, $options: 'i' } });
    return res.send({ teams });
  } catch (err) {
    res.status(500).send({ error: err.message });
  }
};

const filterAll = async (req, res) => {
  const { name, country, league } = req.query;

  try {
    const teams = await Teams.find({
      name: { $regex: `${name}`, $options: 'i' },
      country: { $regex: `${country}`, $options: 'i' },
      league: { $regex: `${league}`, $options: 'i' },
    });

    if (teams.length === 0) {
      return res.status(404).send({ error: "Time não encontrado" });
    }
    return res.send({ teams });
  } catch (err) {
    res.status(500).send({ error: err.message });
  }
};

module.exports = {
  getAll,
  getById,
  create,
  update,
  del,
  filterByName,
  filterByCountry,
  filterByLeague,
  filterAll,
};
