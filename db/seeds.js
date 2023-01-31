import db from './connection.js'
import alphabet from './alphabet.json' assert { type: "json" }
import phrases from './phrases.json' assert { type: "json" }
import Alphabet from '../models/Alphabet.js'
import Phrase from "../models/Phrase.js"

const insertData = async () => {

    await Alphabet.deleteMany({});
    await Alphabet.create(alphabet);
s
    await Phrase.deleteMany({});
    await Phrase.create(phrases);


    await db.close();
};

insertData();