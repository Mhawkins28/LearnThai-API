<div id="top"></div>

<details>
  <summary>Table of Contents</summary>
  <ol>
    <li>
      <a href="#about-the-project">About The Project</a>
      <ul>
        <li><a href="#technologies-used">Technologies-Used</a></li>
        <li><a href="#views-of-the-data">Data Visuals</a></li>
        <li><a href="#restful-routes-and-endpoints">Endpoints</a></li>
         <li><a href="#flashcard-data-schemas">Schema Models</a></li>
      </ul>
    </li>
    </li>
    <li>
      <a href="#helpful-links-for-this-project">Developement</a>
      <ul>
        <li><a href="#helpful-links-for-this-project">Helpful Links</a></li>
        <li><a href="#future-features">Future Features</a></li>
        <li><a href="#contributing">Contributing</a></li>
      </ul>
    </li>
  </ol>
</details>

<div align="center">
<h1 align="center">LearnThai API</h1>

  <p align="center">
    <img align="center" src="./learning-thai.png"><br>
  <strong>This is a RESTful API that contains data for learning the Thai Language. As a non-native speaker, I made this API in order to create a flashcard app to assist in learning the Thai consonants, numbers, and common phrases.</strong> <br>
    <br />
    <a href="https://github.com/Mhawkins28/LearnThai-Server"><strong>Explore the Backend Docs »</strong>
    <br />
    <br />
    <a href="https://learn-thai-api-e2ec4a068c3c.herokuapp.com/">Deplyed API</a>
    |
    <a href="https://github.com/Mhawkins28/LearnThai-Server/issues">Report Bug</a>
    |
    <a href="https://github.com/Mhawkins28/LearnThai-Server/issues">Request Feature</a>
  </p>
</div>

## About the Project


### Technologies used

- [Mongoose]()
- [Express](https://expressjs.com/en/5x/api.html)
- [Node.js](https://nodejs.org/dist./v6.16.0/docs/api/synopsis.html)
- [Postman](https://www.postman.com/)
- [MongoDb](https://www.mongodb.com/docs/drivers/node/current/)
- [Heroku](https://www.heroku.com/)

### Views of the data

#### Consonants

![Screen Shot 2023-10-13 at 11 52 45 AM](https://github.com/Mhawkins28/LearnThai-API/assets/93104882/835fa0a1-934c-4e16-b2c8-2f084f6d1fbd)

#### Numbers

![Screen Shot 2023-10-13 at 11 53 09 AM](https://github.com/Mhawkins28/LearnThai-API/assets/93104882/64951137-697f-49db-aaa7-dc5c535a4ca7)

#### Phrases

![Screen Shot 2023-10-13 at 11 53 36 AM](https://github.com/Mhawkins28/LearnThai-API/assets/93104882/9cadc4ad-aab6-4681-bfc9-a1f8249c305a)



<p align="right">(<a href="#top">back to top</a>)</p>

### RESTful routes and Endpoints
<br>

---

NOTE: This site will be easier to view if you have a JSON viewer extension installed on your browser to display/"pretty" the large datasets in your browser. I use the [JSON Viewer Extension on Google Chrome.](https://chrome.google.com/webstore/detail/json-viewer/gbmdgpbipfallnflgajpaliibnhdgobh?hl=en-US)

---

### Base URL: https://learn-thai-api-e2ec4a068c3c.herokuapp.com/<br>

#### Consonant Routes<br>

| Action | Description                       | Endpoint                                                                                                 |
| ------ | --------------------------------- | -------------------------------------------------------------------------------------------------------- |
| GET    | Get all consonants                | [/consonants](https://learn-thai-api-e2ec4a068c3c.herokuapp.com/consonants)                              |
| GET    | Get a specific consonant by ID    | [/consonants/:id](https://learn-thai-api-e2ec4a068c3c.herokuapp.com/consonants/64fdda27db226b8dfefc3004) |
| POST   | Create a new consonant            | [/consonants](https://learn-thai-api-e2ec4a068c3c.herokuapp.com/consonants)                              |
| PUT    | Update a specific consonant by ID | [/consonants/:id](https://learn-thai-api-e2ec4a068c3c.herokuapp.com/consonants/64fdda27db226b8dfefc3004) |
| DELETE | Delete a specific consonant by ID | [/consonants/:id](https://learn-thai-api-e2ec4a068c3c.herokuapp.com/consonants/64fdda27db226b8dfefc3004) |

#### Number Routes<br>

| Action | Description                    | Endpoint                                                                                           |
| ------ | ------------------------------ | -------------------------------------------------------------------------------------------------- |
| GET    | Get all numbers                | [/numbers](https://learn-thai-api-e2ec4a068c3c.herokuapp.com/numbers)                              |
| GET    | Get a specific number by ID    | [/numbers/:id](https://learn-thai-api-e2ec4a068c3c.herokuapp.com/numbers/64fdda29db226b8dfefc306b) |
| POST   | Create a new number            | [/numbers](https://learn-thai-api-e2ec4a068c3c.herokuapp.com/numbers)                              |
| PUT    | Update a specific number by ID | [/numbers/:id](https://learn-thai-api-e2ec4a068c3c.herokuapp.com/numbers/64fdda29db226b8dfefc306b) |
| DELETE | Delete a specific number by ID | [/numbers/:id](https://learn-thai-api-e2ec4a068c3c.herokuapp.com/numbers/64fdda29db226b8dfefc306b) |

#### Phrase Routes<br>

| Action | Description                    | Endpoint                                                                                                 | Notes                                                                                                                     |
| ------ | ------------------------------ | -------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------- |
| GET    | Get all phrases                | [/phrases](https://learn-thai-api-e2ec4a068c3c.herokuapp.com/phrases)                                    |
| GET    | Get a specific phrase by ID    | [/phrases/:id](https://learn-thai-api-e2ec4a068c3c.herokuapp.com/phrases/64fdda29db226b8dfefc3059)       |
| POST   | Create a new phrase            | [/phrases](https://learn-thai-api-e2ec4a068c3c.herokuapp.com/phrases)                                    |
| PUT    | Update a specific phrase by ID | [/phrases/:id](https://learn-thai-api-e2ec4a068c3c.herokuapp.com/phrases/64fdda29db226b8dfefc3059)       |
| DELETE | Delete a specific phrase by ID | [/phrases/:id](https://learn-thai-api-e2ec4a068c3c.herokuapp.com/phrases/64fdda29db226b8dfefc3059)       |
| GET    | Get all phrases by category    | [/phrases/category/:category](https://learn-thai-api-e2ec4a068c3c.herokuapp.com/phrases/category/basics) | _Category options:_ <br> basics, food-dining, common-questions, time-day, travel, shopping, everyday-communications, misc |

### Flashcard Data Schemas

Consonant Model

```
{
  category: String,
  class: String,
  letter: String,
  rtgs: String,
  thaiWord: String,
  acrophonicRtgs: String,
  meaning: String,
  initial: String,
  final: String,
  audioFile: String
}
```

<br>

Number Model

```
{
  digit: String,
  thai: String,
  rtgs: String
}
```

<br>

Phrase Model

```
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
```

<p align="right">(<a href="#top">back to top</a>)</p>

## Planning, Research, and Future Developement

### Helpful Links for this Project

**Consonants and thier properties**

- [thai-language.com](http://www.thai-language.com/ref/consonants) 
- [wikepidia.com - Thai Script](https://en.wikipedia.org/wiki/Thai_script)
  
**Audio of Consonant pronounciation**
  
- [thailanguagehut.com](https://www.thailanguagehut.com/thai-alphabet-description-and-sounds/) 

<p align="right">(<a href="#top">back to top</a>)</p>

### Future Features

TBD

<p align="right">(<a href="#top">back to top</a>)</p>

## Contributing

Contributions are what make the open source community such an amazing place to learn, inspire, and create. Any contributions you make are greatly appreciated.

If you have a suggestion that would make this better, please fork the repo and create a pull request. You can also simply open an issue with the tag "enhancement". Don't forget to give the project a star! Thanks again!

-- **Further instructions on getting started/local installation coming soon**

Fork the Project
Create your Feature Branch (git checkout -b feature/AmazingFeature)
Commit your Changes (git commit -m 'Add some AmazingFeature')
Push to the Branch (git push origin feature/AmazingFeature)
Open a Pull Request

<p align="right">(<a href="#top">back to top</a>)</p>
