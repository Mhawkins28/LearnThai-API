import Note from "../models/Note.js";

export const getAllNotes = async (req, res) => {
  try {
    const notes = await Note.find();
    res.json(notes);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: error.message });
  }
};


export const getOneNote = async (req, res) => {
  try {
    const { id } = req.params;
    const note = await Note.findById(id);

    if (note) {
      return res.json(note);
    }

    res.status(404).json({ message: "Note not found!" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: error.message });
  }
};


export const createNote = async (req, res) => {
  try {
    const note = new Note(req.body);
    await note.save();
    res.status(201).json(note);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: error.message });
  }
};


export const updateNote = async (req, res) => {
  try {
    const { id } = req.params;
    const note = await Note.findByIdAndUpdate(id, req.body);
    res.status(201).json(note);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: error.message });
  }
};


export const deleteNote = async (req, res) => {
  try {
    const { id } = req.params;
    const deleted = await Note.findByIdAndDelete(id);
    if (deleted) {
      return res.status(200).send("Note deleted!");
    }
    throw new Error("Note not found");
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: error.message });
  }
};