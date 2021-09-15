const mongoose = require("mongoose");
const Teams = require("../models/Teams");

const validateId = async (req, res, next) => {
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    res.status(400).send({ error: "Invalid ID" });
    return;
  }

  try {
    const team = await Teams.findById(id);
    if (!team) {
      return res.status(404).send({ msg: "Team has not been found" });
    }
    res.team = team; // respondendo ao servidor com o personagem que foi validado
  } catch (err) {
    return res.status(500).send({ error: err.message });
  }

  next();
};

module.exports = { validateId };