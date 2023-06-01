import './App.css';
import React, { useEffect, useState } from 'react';
import Intro from './components/intro';
import '@whatwg-node/fetch';

function App() {
  const [state, setState] = useState([]);

  useEffect(() => {
    fetch('https://api.tvmaze.com/shows/1/episodes?specials=1').then((response) => response.json());
    //   .then((json) => setState({ state: json }));
    // console.log(state);
  });

  return (
    <div className="App">
      <header className="App-header">
        <h1>TV Series List</h1>
      </header>
      <Intro />
      <p> The length of the array is {state.length}</p>
    </div>
  );
}

export default App;
