# Music App
## Table of Contents  
[Introduction](#introduction)  
[Implemented Business Features](#implemented-business-features)  
[Implemented Technical Features](#implemented-technical-features)  
[Deployments](#deployments)
[Running Backend locally  ](#running-backend-locally)  
[Running the Frontend locally](#running-the-frontend-locally)  
[Tech Stack](#tech-stack)  
[Authors](#authors)  
[Licensing](#licensing)  

## Introduction  
An app that is built for the Addis Software fullstack test. It can help view a list of saved songs. It also supports adding, updating, and deletion of a song. Moreover it also displays stats of songs, albums, artists and genres. Searching by
different filters is also supported.  
[Back to Top](#table-of-contents) 

## Demo Video  
[![Demo video for music-app](https://github.com/Reid-T-W/AddisSoftwareInternshipTest/blob/master/music-app-demo-video-thumbnail.png)](https://www.loom.com/share/f2f982cd6c3d4f8680543178346e0703?sid=431f4b88-ecba-4abc-ae14-206492b9d92e)  
## Implemented Business Features  
- [x] View list of songs.
- [x] Add a new song.
- [x] View details of a song.
- [x] Update a song from details song details view.
- [x] Delete a song from list view of song detial view.
- [x] Search song by title, album, artist, or genre name.
- [x] View total number of songs, albums, artists, and genres in the system.
- [x] View list of artist along with no of songs and albums stats.
- [x] Search artists by name to display their info (no of song and album).
- [x] View list of albums along with artist name and no of songs stats.
- [x] Search albums by name or artist name to display their info (artist and no of songs).
- [x] View list of genres along with no of songs stats.
- [x] Search genres by genre name to display their info (no of songs under that genre).
[Back to Top](#table-of-contents) 

## Deployments   
Frontend is deployed on vercel [Deployment link](https://addis-software-fullstack-test.vercel.app/)  
Backend is deployed on render [Deployment link](https://addissoftwarefullstacktest.onrender.com/api/v1)  
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

Setup your .env file using the example specified in the .env.example file
As this is a demo, for the sake of simplicity I have put the db url on the .env.example file.
<!-- (i.e. as the app makes use of MongoDB Atlas you will need to create a database on MongoDB Atlas and use that uri in your .env file)     -->

run docker compose up  
```bash
    docker compose up  
```  
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

Setup your .env file using the example specified in the .env.example file
i.e. as the app makes use of MongoDB Atlas you will need to create a database on MongoDB Atlas and use that uri in your .env file

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
