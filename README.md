<div id="top"></div>

<details>
  <summary>Table of Contents</summary>
  <ol>
    <li>
      <a href="#about-the-project">About The Project</a>
      <ul>
        <li><a href="#technologies-used">Technologies-Used</a></li>
        <li><a href="#views-of-how-the-data-looks">Data Visuals</a></li>
        <li><a href="#restful-routes-and-endpoints">Endpoints</a></li>
         <li><a href="#flashcard-data-schemas">Schema Models</a></li>
      </ul>
    </li>
    </li>
    <li>
      <a href="#developement">Planning, Research, and Future Developement</a>
      <ul>
        <li><a href="#tools-used">Tools Used</a></li>
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
  Description of API here. Coming soon<br>
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

This is the backend component of a full-stack MERN application, bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

### Technologies used

- [Mongoose]()
- [Express](https://expressjs.com/en/5x/api.html)
- [Node.js](https://nodejs.org/dist./v6.16.0/docs/api/synopsis.html)
- [Postman](https://www.postman.com/)
- [MongoDb](https://www.mongodb.com/docs/drivers/node/current/)
- [Heroku](https://www.heroku.com/)

### Views of how the data looks

<em>...coming soon when deployed <br></em>

<p align="right">(<a href="#top">back to top</a>)</p>

### RESTful routes and Endpoints

#### Base URL: https://learn-thai-api-e2ec4a068c3c.herokuapp.com/<br>

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

# Developement

### Planning, Research, and Future Developement

### Helpful Links for this Project

...Will add links soon

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

<br>

For more info about the frontend, check out the [LearnThai Frontend Repo](https://github.com/Mhawkins28/LearnThai-Client/blob/main/README.md)
