import Routes from './routes';
import { BrowserRouter as Router } from 'react-router-dom';

const io = require('socket.io-client');

let games = io.connect(process.env.REACT_APP_BASE_URL, {reconnect: true, transports: ['websocket'] })

// TODO! Refactor to use context api if ther eis more time.
window.$games = games //global variable

const App = () => {

  games.on('vote-status', (res) => console.log('>>>>res', res))
  games.on('success', (res) => console.log('success', res))
  games.on('err', (err) => console.log('An error occoured', err))
  
  return (
    <Router>
      <Routes />
    </Router>
  );
}

export default App;
