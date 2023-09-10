import mongoose from "mongoose";
const { Schema } = mongoose;

const NumberSchema = new Schema({
  digit: String,
  thai: String,
  rtgs: String,
  learned: {
    type: Boolean,
    default: false,
  },
});

export default mongoose.model("numbers", NumberSchema);
