import Number from "../models/Number.js";

export const getAllNumbers = async (req, res) => {
  try {
    const numbers = await Number.find();
    res.json(numbers);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: error.message });
  }
};


export const getOneNumber = async (req, res) => {
  try {
    const { id } = req.params;
    const number = await Number.findById(id);

    if (number) {
      return res.json(number);
    }

    res.status(404).json({ message: "Number not found!" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: error.message });
  }
};


export const createNumber = async (req, res) => {
  try {
    const number = new Number(req.body);
    await number.save();
    res.status(201).json(number);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: error.message });
  }
};


export const updateNumber = async (req, res) => {
  try {
    const { id } = req.params;
    const number = await Number.findByIdAndUpdate(id, req.body);
    res.status(201).json(number);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: error.message });
  }
};


export const deleteNumber = async (req, res) => {
  try {
    const { id } = req.params;
    const deleted = await Number.findByIdAndDelete(id);
    if (deleted) {
      return res.status(200).send("Number deleted!");
    }
    throw new Error("Number not found");
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: error.message });
  }
};