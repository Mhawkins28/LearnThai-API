import mongoose from "mongoose";
const { Schema } = mongoose;


const phraseSchema = new Schema(
  {
    category: String,
    thai: String,
    rtgs: String,
    meaning: String
  }
);

export default mongoose.model('phrases', phraseSchema);
