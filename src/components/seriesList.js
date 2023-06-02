import './assets/seriesList.css';

function SeriesList(props) {
  return (
    <div>
      <ul className="seriesList">
        {props.list.map((state) => (
          <li key={state.show.id}>{state.show.name}</li>
        ))}
      </ul>
    </div>
  );
}

export default SeriesList;
