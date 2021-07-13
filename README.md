# es-poker

This api implements the poker planning system.
## Technologies

- [NodeJS](https://github.com/nodejs/node) - A JavaScript runtime environment
- [Express](https://github.com/expressjs/express) - A web application framework for NodeJS
- [Mongodb](https://github.com/mongodb/mongo) - A Document-based database management system
- [Mongoose](https://github.com/Automattic/mongoose) - A promise-based ODM for NodeJS
- React

## What was done
- Implement a route to create a chat room using socketio.
- A meeting room link is generated where other users can also vote.
- relevant information is cached in the database for future use.
- User cannot vote more than once but their vote can be edited.

## Getting started

```sh
# Clone the project
git clone https://github.com/edogbosunny/es-poker-fe
cd es-poker-fe

# Install dependencies
npm install

```
Set Environment Variables
```sh
REACT_APP_API_URL=http://localhost:3001/api/v1/
REACT_APP_BASE_URL=http://localhost:3001/
```

Start the application:

```sh
npm start
```

### Documentation
This api endpoint creates a room

- API Endpoint

```sh
  create-room  >> http://localhost:3001/
  - enter the room name.
  - a link room link would be generated which can the be shared and opened on multiple safari browsers. eg
  join room  >> https://es-poker-fe.herokuapp.com/join?room_id=1626186203348.0984&room=mmm
  - user would be redirected to the voting room where they can see votes and also votes in real time.
```
