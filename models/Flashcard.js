const mongoose = require('mongoose')
const { Schema } = mongoose;


const flashcardSchema = new Schema(
    {
      category: String,
      thai: String,
      class: String,
      word: String,
      sound: String,
    },
);

module.exports = mongoose.model('Flashcard', flashcardSchema);
