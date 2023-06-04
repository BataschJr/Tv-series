import { Link } from 'react-router-dom';
import './assets/seriesList.css';

function SeriesList(props) {
  return (
    <div>
      <ul className="seriesList">
        {props.list.map((state) => (
          <li key={state.show.id}>
            <Link to={`/series/${state.show.id}`}>{state.show.name}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default SeriesList;
