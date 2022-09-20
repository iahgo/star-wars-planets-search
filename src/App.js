import React from 'react';
import PlanetsContext from './context/PlanetsContext';
import Table from './components/Table';
import BuscaPlaneta from './components/BuscaPlaneta';
import './App.css';

function App() {
  const { planets } = React.useContext(PlanetsContext);
  console.log(planets);
  return (
    <div className="container">
      <h1 className="titulo"><strong>STAR WARS</strong></h1>
      <h6 className="info">
        Projeto desenvolvido utilizando uma API de busca, onde é possível filtrar
        uma pesquisa pelo nome do planeta, ou pelos dados específicos do planeta.
      </h6>
      <BuscaPlaneta />
      <Table />
    </div>

  );
}

export default App;
