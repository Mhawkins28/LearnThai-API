import mongoose from "mongoose";
const { Schema } = mongoose;


const NumberSchema = new Schema(
  {
    digit: String,
    thai: String,
    rtgs: String
  }
);

export default mongoose.model('numbers', NumberSchema);
