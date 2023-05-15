import mongoose from "mongoose";
const { Schema } = mongoose;


const ConsonantSchema = new Schema(
    {
      category: String,
      class: String,
      letter: String,
      rtgs: String,
      thaiWord: String,
      acrophonicRtgs: String,
      meaning: String,
      initial: String,
      final: String,
      audioFile: String
    },
);

export default mongoose.model('consonants', ConsonantSchema);
