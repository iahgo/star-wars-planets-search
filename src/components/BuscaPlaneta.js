import React, { useContext } from 'react';
import PlanetsContext from '../context/PlanetsContext';

function BuscaPlaneta() {
  const {
    planets,
    setPlanets,
    filterByName,
    setFilterByName,
    columnFilter,
    setColumnFilter,
    comparisonFilter,
    setComparisonFilter,
    valueFilter,
    setValueFilter,
    allFilters2,
    setAllFilters2,
    setNumericValuesFilter,
  } = useContext(PlanetsContext);

  const handleChange = ({ target: { name, value } }) => {
    if (name === 'name-filter') setFilterByName(value);
    if (name === 'column-filter') setColumnFilter(value);
    if (name === 'comparison-filter') setComparisonFilter(value);
    if (name === 'value-filter') setValueFilter(value);
  };
  const eliminaFilter = (select) => {
    if (select === 'population') {
      console.log('igual population');
      const position = allFilters2.indexOf('population');
      allFilters2.splice(position, 1);
      setAllFilters2(allFilters2);
    }
    if (select === 'orbital_period') {
      const position = allFilters2.indexOf('orbital_period');
      allFilters2.splice(position, 1);
      setAllFilters2(allFilters2);
    }
    if (select === 'diameter') {
      console.log('igual diameter');
      const position = allFilters2.indexOf('diameter');
      allFilters2.splice(position, 1);
      setAllFilters2(allFilters2);
    }
    if (select === 'rotation_period') {
      console.log('igual rotation_period');
      const position = allFilters2.indexOf('rotation_period');
      allFilters2.splice(position, 1);
      setAllFilters2(allFilters2);
    }
    if (select === 'surface_water') {
      console.log('igual surface_water');
      const position = allFilters2.indexOf('surface_water');
      allFilters2.splice(position, 1);
      setAllFilters2(allFilters2);
    }
    return null;
  };
  const handleSubmit = async (event) => {
    event.preventDefault();
    const newObj = {
      columnFilter,
      comparisonFilter,
      valueFilter,
    };
    if (comparisonFilter === 'maior que') {
      setPlanets(planets.filter((elem) => (
        Number(elem[columnFilter])
        > Number(valueFilter)
      )));
    } if (comparisonFilter === 'menor que') {
      setPlanets(planets.filter((elem) => (
        Number(elem[columnFilter])
        < Number(valueFilter)
      )));
    } if (comparisonFilter === 'igual a') {
      setPlanets(planets.filter((elem) => (
        Number(elem[columnFilter])
        === Number(valueFilter)
      )));
    }
    eliminaFilter(columnFilter);
    setNumericValuesFilter(newObj);
  };

  return (
    <div id="form">
      <section id="name-section" className="d-flex">
        <label htmlFor="name-filter" id="name-input">
          Filtrar por nome:
          <input
            type="text"
            name="name-filter"
            id="name-filter"
            data-testid="name-filter"
            onChange={ handleChange }
            value={ filterByName }
            className="form-control form-control-lg"
            placeholder="Digite um planeta"
          />
        </label>
      </section>
      <form onSubmit={ handleSubmit } className="inputs container col-4">
        <label htmlFor="column" id="tipo-input">
          Tipo:
          <select
            data-testid="column-filter"
            id="column"
            name="column-filter"
            onChange={ handleChange }
            value={ columnFilter }
            className="MuiNativeSelect-select MuiNativeSelect-standard
            MuiInput-input MuiInputBase-input css-1eqquvh"
          >
            {allFilters2.map((filter) => (
              <option
                key={ filter }
                value={ filter }
              >
                {filter}
              </option>
            ))}
          </select>
        </label>
        <label htmlFor="comparison" id="comparacao">
          Comparação:
          <select
            data-testid="comparison-filter"
            id="comparison"
            name="comparison-filter"
            onChange={ handleChange }
            value={ comparisonFilter }
          >
            <option>maior que</option>
            <option>menor que</option>
            <option>igual a</option>
          </select>
        </label>
        <label htmlFor="value" id="valor">
          Valor:
          <input
            data-testid="value-filter"
            id="value"
            name="value-filter"
            onChange={ handleChange }
            value={ valueFilter }
          />
        </label>
        <button
          data-testid="button-filter"
          type="submit"
          className="botao MuiButton-root MuiButton-outlined MuiButton-outlined
          MuiButton-sizeMedium
          MuiButton-outlinedSizeMedium MuiButtonBase-root  css-1isaiwl"
        >
          Filtrar
        </button>
      </form>
    </div>
  );
}

export default BuscaPlaneta;
