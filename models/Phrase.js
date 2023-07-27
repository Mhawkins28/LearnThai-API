import mongoose from "mongoose";
const { Schema } = mongoose;


const PhraseSchema = new Schema(
  {
    category: {
      type: [String],
      enum: ['basics', 'food-dining', 'common-questions', 'time-day', 'travel','shopping', 'everyday-communications', 'misc'],
      require: true
  },
    thai: String,
    rtgs: String,
    meaning: String
  }
);

export default mongoose.model('phrases', PhraseSchema);
