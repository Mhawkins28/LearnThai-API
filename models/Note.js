import mongoose from "mongoose";
const { Schema } = mongoose;


const NoteSchema = new Schema(
  {
    title: String,
    content: String,
  },
  {
    timestamps: true
  }
);

export default mongoose.model('notes', NoteSchema);
