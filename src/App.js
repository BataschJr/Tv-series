import '@whatwg-node/fetch';

import './App.css';
import Intro from './components/intro';
import Containers from './components/containers';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>TV Series List</h1>
      </header>
      <Intro />
      <Containers />
    </div>
  );
}

export default App;
