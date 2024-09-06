# Music App
## Table of Contents  
[Introduction](#introduction)  
[Implemented Business Features](#implemented-business-features)   
[Deployments](#deployments)   
[Documentation](#documentation)  
[Running Backend locally  ](#running-backend-locally)  
[Running the Frontend locally](#running-the-frontend-locally)  
[Tech Stack](#tech-stack)  
[Authors](#authors)  
[Licensing](#licensing)  

## Introduction  
An app that is built for the Addis Software fullstack test. It can help view a list of saved songs. It also supports adding, updating, and deletion of a song. Moreover it also provides different stats(total number of songs, albums, artists and genres, number of songs and albums an artist has, number of songs an album has, and number of songs a genre has). Searching by different criterias is also supported.  
[Back to Top](#table-of-contents) 

## Demo Video  
[![Demo video for music-app](https://github.com/Reid-T-W/AddisSoftwareFullstackTest/blob/main/Music%20app%20cover.png)](https://www.loom.com/share/1e1094d3c86644d58198460073e5d945?sid=5ad744b0-d7b9-487e-9a1d-2bb66a749b70)  
## Implemented Business Features  
- [x] View list of songs.
- [x] Add a new song.
- [x] View details of a song.
- [x] Update song details.
- [x] Delete a song from list view and song detials view.
- [x] Search song by title, album, artist, or genre name.
- [x] View total number of songs, albums, artists, and genres in the system.
- [x] When Viewing total number of albums a unique combination of album and artist makes one album, this will help in cases where two artists have albums with the same name, as they should be counted as separate albums.
- [x] View list of artist along with no of songs and albums stats.
- [x] Search artists by name to display their info (no of songs and albums).
- [x] View list of albums along with artist name and no of songs stats.
- [x] Search albums by name or artist name to display their info (artist and no of songs).
- [x] View list of genres along with no of songs stats.
- [x] Search genres by genre name to display their info (no of songs under that genre).
[Back to Top](#table-of-contents) 

## Deployments   
Frontend is deployed on vercel [Frontend Deployment link](https://addis-software-fullstack-test.vercel.app/)  
Backend is deployed on render [Backend Deployment link](https://addissoftwarefullstacktest.onrender.com/docs)  
[Back to Top](#table-of-contents) 

## Documentation
Swagger Documentation for Backend [Swagger Link](https://addissoftwarefullstacktest.onrender.com/docs)

## Running Backend locally  
### Using docker
Clone the repo  
```bash
    git clone https://github.com/Reid-T-W/AddisSoftwareFullstackTest.git
```
Cd into the backend directory  
```bash
    cd music-app-backend  
```

Setup your .env file using the example specified in the .env.example file.  
As this is a demo, for the sake of simplicity I have put the db url on the .env.example file.

run docker compose up  
```bash
    docker compose up  
``` 

This will spin up two containers; the mogodb container and a backend api container which is 
connected to the mongodb container.
[Back to Top](#table-of-contents) 

### Without docker
Clone the repo  
```bash
    git clone https://github.com/Reid-T-W/AddisSoftwareFullstackTest.git
```
Cd into the music-app-backend directory  
```bash
    cd music-app-backend  
```

Setup your .env file using the example specified in the .env.example file.  
i.e. The exmpale connection string added to the DB_CONNECTION var in the .env.example file is for the docker container, you can add your own mongo db url when running without docker.

Install dependencies
```bash
    npm install
```
Run the project
```
    npm run dev
```

## Running the Frontend locally
Clone the repo  
```bash
    git clone https://github.com/Reid-T-W/AddisSoftwareFullstackTest.git
```
cd into the music-app-frontend directory  
```bash
cd music-app-frontend
```  
Setup your .env file using the example specified in the .env.example file  
  
Install dependencies  
```bash
npm install
```
Run  
```bash
npm run dev
```  
[Back to Top](#table-of-contents) 
## Tech Stack
### Frontend
- ReactJS
- Redux Toolkit  
- Typescript  
- Redux-Saga  
- Emotion and Styled systems   

### Backend
- ExpressJS  
- MongoDB (MongoDB Atlas)
- Mongoose  
- Docker   
[Back to Top](#table-of-contents) 
## Authors  
Rediet Tadesse [Linkedin](https://www.linkedin.com/in/rediet-tadesse-43209013b/)   
[Back to Top](#table-of-contents) 

## Licensing  
Licensed under the Apache License 2.0  
[Back to Top](#table-of-contents) 
