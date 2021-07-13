import React, { useState, useEffect } from "react";
import Routes from './routes';
import { BrowserRouter as Router } from 'react-router-dom';

const io = require('socket.io-client');

let games = io.connect(process.env.REACT_APP_BASE_URL, {reconnect: true, transports: ['websocket'] })
// console.log('--->', process.env.REACT_APP_BASE_URL)
window.$games = games //global variable

const App = () => {
  const [response, setResponse] = useState("");
  games.on('vote-status', (res) => console.log('>>>>res', res))
  useEffect(() => {
    games.on('hello', (res) => console.log('success', res))

    games.on('socker', (res) => console.log('success', res))
    games.on('vote-status', (res) => console.log('appjs-success', res))

    games.emit('someEventFromClient', 'csgosss')
    // games.emit('vote', {
    //   room: 'churchhk',
    //   name: 'sunny',
    //   vote: 89
    // })


    games.on('err', (err) => console.log('An error occoured', err))
    games.on("FromAPI", data => {
      setResponse(data);
    });
  });

  return (

    <Router>
      <Routes />
    </Router>

  );
}

export default App;
