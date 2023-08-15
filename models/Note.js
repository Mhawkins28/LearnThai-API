import mongoose from "mongoose";
const { Schema } = mongoose;


const NoteSchema = new Schema(
  {
    title: String,
    content: String,
    favorite: Boolean
  },
  {
    timestamps: true
  }
);

export default mongoose.model('notes', NoteSchema);
