import { useParams } from 'react-router';

import { useEffect, useState } from 'react';

function SingleSeries(props) {
  const [seriesName, setSeriesName] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    fetch(`https://api.tvmaze.com/shows/${id}?embed=cast`)
      .then((response) => response.json())
      .then((json) => setSeriesName((seriesName) => json));
  }, []);
  return (
    <div>
      {seriesName === null && <p>Loading...</p>}
      {seriesName !== null && (
        <div>
          <p>{seriesName.name}</p>
          <p>Premiered - {seriesName.premiered}</p>
          <p>Rating - {seriesName.rating.average}</p>
          <p>Genre - {seriesName.genres}</p>
          {seriesName.image === null ? <p>No image has been found</p> : <img src={seriesName.image.medium} alt="Show image" />}
        </div>
      )}
    </div>
  );
}

export default SingleSeries;
