import Consonant from "../models/Consonant.js";

export const getAllConsonants = async (req, res) => {
  try {
    const letters = await Consonant.find();
    res.json(letters);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: error.message });
  }
};


export const getOneConsonant = async (req, res) => {
  try {
    const { id } = req.params;
    const letter = await Consonant.findById(id);

    if (letter) {
      return res.json(letter);
    }

    res.status(404).json({ message: "Letter not found!" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: error.message });
  }
};

// Creates product
export const createConsonant = async (req, res) => {
  try {
    const letter = new Consonant(req.body);
    await letter.save();
    res.status(201).json(letter);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: error.message });
  }
};


export const updateConsonant = async (req, res) => {
  try {
    const { id } = req.params;
    const letter = await Consonant.findByIdAndUpdate(id, req.body);
    res.status(201).json(letter);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: error.message });
  }
};


export const deleteConsonant = async (req, res) => {
  try {
    const { id } = req.params;
    const deleted = await Consonant.findByIdAndDelete(id);
    if (deleted) {
      return res.status(200).send("letter deleted!");
    }
    throw new Error("letter not found");
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: error.message });
  }
};