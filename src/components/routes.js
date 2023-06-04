import { Routes, Route } from 'react-router-dom';
import Containers from './containers';
import SingleSeries from './singleSeries';

function Routing(props) {
  return (
    <Routes>
      <Route path="/" element={<Containers />} />
      <Route path="/series/:id" element={<SingleSeries />} />
    </Routes>
  );
}

export default Routing;
