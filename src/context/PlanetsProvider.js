import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import PlanetsContext from './PlanetsContext';
import fetchPlanets from '../services/fetchPlanets';

export default function PlanetsProvider({ children }) {
  const [planets, setPlanets] = useState([]);
  const [filterByName, setFilterByName] = useState('');
  const [columnFilter, setColumnFilter] = useState('population');
  const [comparisonFilter, setComparisonFilter] = useState('maior que');
  const [valueFilter, setValueFilter] = useState('0');
  const [numericValuesFilter, setNumericValuesFilter] = useState({});
  const [allFilters2, setAllFilters2] = useState([
    'orbital_period',
    'population',
    'diameter',
    'rotation_period',
    'surface_water',
  ]);

  useEffect(() => {
    fetchPlanets().then((response) => setPlanets(response));
  }, []);

  const contextValue = {
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
    numericValuesFilter,
    setNumericValuesFilter,
    allFilters2,
    setAllFilters2,
  };

  return (
    <PlanetsContext.Provider value={ contextValue }>
      { children }
    </PlanetsContext.Provider>
  );
}

PlanetsProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
