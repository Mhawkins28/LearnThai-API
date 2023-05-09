import db from './connection.js'
import alphabet from './alphabet.json' assert { type: "json" }
import phrases from './phrases.json' assert { type: "json" }
import numbers from './numbers.json' assert { type: "json" }
import Alphabet from '../models/Alphabet.js'
import Phrase from "../models/Phrase.js"
import Number from "../models/Number.js"


const insertData = async () => {

    await Alphabet.deleteMany({});
    await Alphabet.create(alphabet);

    await Phrase.deleteMany({});
    await Phrase.create(phrases);

    await Number.deleteMany({});
    await Number.create(numbers);

    await db.close();
};

insertData();