import Alphabet from "../models/Alphabet.js";

export const getAllAlphabet = async (req, res) => {
  try {
    const letters = await Alphabet.find();
    res.json(letters);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: error.message });
  }
};


export const getOneAlphabet = async (req, res) => {
  try {
    const { id } = req.params;
    const letter = await Alphabet.findById(id);

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
export const createAlphabet = async (req, res) => {
  try {
    const letter = new Alphabet(req.body);
    await letter.save();
    res.status(201).json(letter);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: error.message });
  }
};


export const updateAlphabet = async (req, res) => {
  try {
    const { id } = req.params;
    const letter = await Alphabet.findByIdAndUpdate(id, req.body);
    res.status(201).json(letter);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: error.message });
  }
};


export const deleteAlphabet = async (req, res) => {
  try {
    const { id } = req.params;
    const deleted = await Alphabet.findByIdAndDelete(id);
    if (deleted) {
      return res.status(200).send("letter deleted!");
    }
    throw new Error("letter not found");
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: error.message });
  }
};