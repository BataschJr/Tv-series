import '@whatwg-node/fetch';

import './App.css';
import Routing from './components/routes';
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>TV Series List</h1>
      </header>
      <Routing />
    </div>
  );
}

export default App;
