import Phrase from "../models/Phrase.js";

export const getAllPhrases = async (req, res) => {
  try {
    const phrases = await Phrase.find();
    res.json(phrases);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: error.message });
  }
};


export const getOnePhrase = async (req, res) => {
  try {
    const { id } = req.params;
    const phrase = await Phrase.findById(id);

    if (phrase) {
      return res.json(phrase);
    }

    res.status(404).json({ message: "Phrase not found!" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: error.message });
  }
};

export const createPhrase = async (req, res) => {
  try {
    const phrase = new Phrase(req.body);
    await phrase.save();
    res.status(201).json(phrase);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: error.message });
  }
};


export const updatePhrase = async (req, res) => {
  try {
    const { id } = req.params;
    const phrase = await Phrase.findByIdAndUpdate(id, req.body);
    res.status(201).json(phrase);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: error.message });
  }
};


export const deletePhrase = async (req, res) => {
  try {
    const { id } = req.params;
    const deleted = await Phrase.findByIdAndDelete(id);
    if (deleted) {
      return res.status(200).send("Phrase deleted!");
    }
    throw new Error("Phrase not found");
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: error.message });
  }
};