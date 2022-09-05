import React from 'react';
import PlanetsContext from './context/PlanetsContext';
import Table from './components/Table';
import BuscaPlaneta from './components/BuscaPlaneta';

function App() {
  const { planets } = React.useContext(PlanetsContext);
  console.log(planets);
  return (
    <div>
      <span>Hello, App!!</span>
      <BuscaPlaneta />
      <Table />
    </div>

  );
}

export default App;
