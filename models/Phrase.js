import mongoose from "mongoose";
const { Schema } = mongoose;


const PhraseSchema = new Schema(
  {
    category: String,
    thai: String,
    rtgs: String,
    meaning: String
  }
);

export default mongoose.model('phrases', PhraseSchema);
