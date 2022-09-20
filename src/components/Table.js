import React, { useContext } from 'react';
import PlanetsContext from '../context/PlanetsContext';

function Table() {
  const { planets, filterByName, numericValuesFilter } = useContext(PlanetsContext);
  const filtro = planets.filter((elem) => elem.name.toLowerCase()
    .includes(filterByName.toLowerCase()));
  console.log(filtro);
  // const filtroNome = (noFilter) => {
  //   if (noFilter) {
  //     return noFilter
  //       .filter((elem) => elem.name.toLowerCase().includes(filterByName.toLowerCase()));
  //   } return noFilter;
  // };

  const filtroValue = (noFilter) => {
    if (noFilter && numericValuesFilter.comparisonFilter === 'maior que') {
      return noFilter
        .filter((data) => (
          Number(data[numericValuesFilter.columnFilter])
          > Number(numericValuesFilter.valueFilter)
        ));
    } if (noFilter && numericValuesFilter.comparisonFilter === 'menor que') {
      return noFilter
        .filter((data) => (
          Number(data[numericValuesFilter.columnFilter])
          < Number(numericValuesFilter.valueFilter)
        ));
    } if (noFilter && numericValuesFilter.comparisonFilter === 'igual a') {
      return noFilter
        .filter((data) => (
          Number(data[numericValuesFilter.columnFilter])
          === Number(numericValuesFilter.valueFilter)
        ));
    } return noFilter;
  };

  return (
    <div>
      <table className="table table-dark table-striped table-responsive">
        <thead>
          <tr>
            <th>Name</th>
            <th>Rotation Period</th>
            <th>Orbital Period</th>
            <th>Diameter</th>
            <th>Climate</th>
            <th>Gravity</th>
            <th>Terrain</th>
            <th>Surface Water</th>
            <th>Population</th>
            <th>Created</th>
            <th>Edited</th>
          </tr>
        </thead>
        <tbody className="tbody-class">
          {filtroValue(filtro).map((element) => (
            <tr key={ element.name } data-testid={ `${element.name}` }>
              <td>{element.name}</td>
              <td>{element.rotation_period}</td>
              <td>{element.orbital_period}</td>
              <td>{element.diameter}</td>
              <td>{element.climate}</td>
              <td>{element.gravity}</td>
              <td>{element.terrain}</td>
              <td>{element.surface_water}</td>
              <td>{element.population}</td>
              <td>{element.created}</td>
              <td>{element.edited}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Table;
