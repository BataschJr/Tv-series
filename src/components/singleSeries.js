import { useParams } from 'react-router';

import Loader from './loader';
import { useEffect, useState } from 'react';

function SingleSeries(props) {
  const [seriesState, setSeriesState] = useState(null);
  let { id } = useParams();

  useEffect(() =>
    fetch(`https://api.tvmaze.com/alternatelists/${id}?embed=alternateepisodes`)
      .then((response) => response.json())
      .then((json) => setSeriesState(json))
  );
  return <p>Series - {id}</p>;
}

export default SingleSeries;
