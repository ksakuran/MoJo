# MoJo
A digital mood journaling application, with a focus on increasing your emotional awareness and prioritizing self care, free from expecations.




### TECH STACK
React, Javascript, Express, SASS, PSQL

### Main API's and Libraries
Draft.js, Chart.js and react-chartjs-2, Full Calendar API, and Spotify API

### TERMINAL ###

#### INITIAL SETUP
cd back-end
npm install

cd front-end
npm install

checkout .env.example to set up a .env file

#### DB SETUP
psql
CREATE DATABASE mojo;

#### DB RESET
cd MoJo/back-end
npm run db:reset

#### DB POSTGRES (Queries)
psql
\c mojo
\dt (view all tables)

