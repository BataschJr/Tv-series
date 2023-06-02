import React, { useState } from 'react';
import SeriesList from './seriesList';

function Containers() {
  const [state, setState] = useState([]);
  const [seriesName, setSeriesName] = useState('');
  const [isFetching, setIsFetching] = useState(false);

  const onSeriesInputChange = (e) => {
    setSeriesName((seriesName) => e.target.value);
    setIsFetching((isFetching) => true);
    fetch(`https://api.tvmaze.com/search/shows?q=${e.target.value}`)
      .then((response) => response.json())
      .then((json) => setState((state) => json), setIsFetching(false));
  };
  return (
    <div>
      <div>
        <input type="text" onChange={onSeriesInputChange} value={seriesName} />
      </div>
      {state.length === 0 && seriesName.trim() === '' && <p>Please enter a series name.</p>}
      {state.length === 0 && seriesName.trim() !== '' && <p>No TV series with this name has been found.</p>}
      {isFetching && <p>Loading...</p>}
      {!isFetching && <SeriesList list={state} />}
    </div>
  );
}

export default Containers;
