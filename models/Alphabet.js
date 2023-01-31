import mongoose from "mongoose";
const { Schema } = mongoose;


const alphabetSchema = new Schema(
    {
      category: String,
      letter: String,
      pronounciation: String,
      class: String,
      thai: String,
      rtgs: String,
      meaning: String,
      initial: String,
      final: String
    },
);

export default mongoose.model('Alphabet', alphabetSchema);
