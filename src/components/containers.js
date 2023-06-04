import React, { useState } from 'react';
import SeriesList from './seriesList';
import Loader from './loader';
import Intro from './intro';

function Containers() {
  const [state, setState] = useState([]);
  const [seriesName, setSeriesName] = useState('');
  const [isFetching, setIsFetching] = useState(false);

  const onSeriesInputChange = (e) => {
    setSeriesName((seriesName) => e.target.value);
    setIsFetching(true);
    fetch(`https://api.tvmaze.com/search/shows?q=${e.target.value}`)
      .then((response) => response.json())
      .then((json) => setState((state) => json), setIsFetching(false));
  };
  return (
    <div>
      <Intro />
      <div>
        <input type="text" onChange={onSeriesInputChange} value={seriesName} />
      </div>
      {!isFetching && state.length === 0 && seriesName.trim() === '' && <p>Please enter a series name.</p>}
      {!isFetching && state.length === 0 && seriesName.trim() !== '' && <p>No TV series with this name has been found.</p>}
      {isFetching && <Loader />}
      {!isFetching && <SeriesList list={state} />}
    </div>
  );
}

export default Containers;
