import mongoose from "mongoose";
const { Schema } = mongoose;


const AlphabetSchema = new Schema(
    {
      category: String,
      class: String,
      letter: String,
      rtgs: String,
      thai: String,
      acrophonic: String,
      meaning: String,
      initial: String,
      final: String,
      audioFile: String
    },
);

export default mongoose.model('alphabet', AlphabetSchema);
