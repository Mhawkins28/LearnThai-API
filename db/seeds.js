import db from "./connection.js";
import consonants from "./consonants.json" assert { type: "json" };
import phrases from "./phrases.json" assert { type: "json" };
import numbers from "./numbers.json" assert { type: "json" };
import Phrase from "../models/Phrase.js";
import Number from "../models/Number.js";
import Consonant from "../models/Consonant.js";

const insertData = async () => {
  await Consonant.deleteMany({});
  await Consonant.create(consonants);

  await Phrase.deleteMany({});
  await Phrase.create(phrases);

  await Number.deleteMany({});
  await Number.create(numbers);

  await db.close();
};

insertData();
