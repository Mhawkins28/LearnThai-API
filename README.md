<div id="top"></div>

<details>
  <summary>Table of Contents</summary>
  <ol>
    <li>
      <a href="#about-the-project">About The Project</a>
      <ul>
        <li><a href="#technologies-used">Technologies-Used</a></li>
        <li><a href="#Views-of-how-the-data-looks">Data Visuals</a></li>
        <li><a href="#RESTful-routes-and-Endpoints">Endpoints</a></li>
         <li><a href="#Flashcard-Data-Schemas">Schema Models</a></li>
      </ul>
    </li>
    <li>
      <a href="#user-stories">User Stories</a>
      <ul>
        <li><a href="#mvp">MVP</a></li>
        <li><a href="#stretch-goals">Stretch Goals</a></li>
         <li><a href="#future-features">Future Features</a></li>
      </ul>
    </li>
    <li>
      <a href="#developement">Planning, Research, and Future Developement</a>
      <ul>
        <li><a href="#tools-used">Tools Used</a></li>
        <li><a href="#helpful-links-for-this-project">Helpful Links</a></li>
        <li><a href="#contributing">Contributing</a></li>
      </ul>
    </li>
  </ol>
</details>

<div align="center">
<h1 align="center">LearnTahi Backend Server</h1>

  <p align="center">
  Description of API here. Coming soon<br>
    <br />
    <a href="https://github.com/Mhawkins28/LearnThai-Client"><strong>Explore the Frontend Docs »</strong></a><br>
    <a href="https://github.com/Mhawkins28/LearnThai-Server"><strong>Explore the Backend Docs »</strong>
    <br />
    <br />
    <a href="">Deplyed API</a>
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
<em>...coming soon when deployed <br></em>
  Base URL: <br>
  consonants: <br>
  numbers:<br>
  brases:

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



## User stories

### MVP

- As the user, I want ...


### Stretch Goals

- As a user, I would like ...


### Future Features 

TBD

<p align="right">(<a href="#top">back to top</a>)</p>

# Developement
### Planning, Research, and Future Developement 



### Helpful Links for this Project

...Will add links soon

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