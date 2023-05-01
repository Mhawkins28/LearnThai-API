import mongoose from "mongoose";
const { Schema } = mongoose;


const numberSchema = new Schema(
  {
    englsih: String,
    pronounciation: String,
    thai: String
  }
);

export default mongoose.model('Number', numberSchema);
