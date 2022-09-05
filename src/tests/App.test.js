import React from 'react';
import { screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { renderWithContext } from './helpers/renderWithContext'
import planetsMock from './mocks/planetsMocks'
import App from '../App';

describe('Testando a página de inicial', () => {
  it('testa inputs na tela', () => {
    renderWithContext(<App />);

    const nameFilter = screen.getByTestId('name-filter');
    const columnFilter = screen.getByTestId('column-filter');
    const comparisonFilter = screen.getByTestId('comparison-filter');
    const valueFilter = screen.getByTestId('value-filter');
    const buttonFilter = screen.getByTestId('button-filter');

    expect(nameFilter).toBeInTheDocument();
    expect(columnFilter).toBeInTheDocument();
    expect(comparisonFilter).toBeInTheDocument();
    expect(valueFilter).toBeInTheDocument();
    expect(buttonFilter).toBeInTheDocument();
  })

  it('testa planetas na tabela', async () => {
    global.fetch = async () => ({
      json: async () => (planetsMock),
    });

    renderWithContext(<App />);

    await waitFor (() => {
      expect(screen.getByTestId("Dagobah")).toBeInTheDocument();
    });

    const tableRows = screen.getAllByRole("row");
    const tableCells = screen.getAllByRole("cell")


    expect(tableRows).toHaveLength(11);
    expect(tableCells).toHaveLength(130);
  })

  it('testa filtros nomes', async () => {
    global.fetch = async () => ({
      json: async () => (planetsMock),
    });

    renderWithContext(<App />);

    await waitFor (() => {
      expect(screen.getByTestId("Bespin")).toBeInTheDocument();
    });

    const nameFilter = screen.getByTestId('name-filter');

    userEvent.type(nameFilter, 'Naboo');

    expect(screen.getByTestId("Naboo")).toBeInTheDocument();

    const tableRows = screen.getAllByRole("row");
    expect(tableRows).toHaveLength(2);
  })

  it('testa filtros diversos', async () => {
    global.fetch = async () => ({
      json: async () => (planetsMock),
    });

    renderWithContext(<App />);

    await waitFor (() => {
      expect(screen.getByTestId("Coruscant")).toBeInTheDocument();
    });

    const columnFilter = screen.getByTestId('column-filter');
    const comparisonFilter = screen.getByTestId('comparison-filter');
    const valueFilter = screen.getByTestId('value-filter');
    const buttonFilter = screen.getByTestId('button-filter');

    userEvent.selectOptions(columnFilter, "diameter");
    userEvent.selectOptions(comparisonFilter, "maior que");
    userEvent.type(valueFilter, "12240");
    userEvent.click(buttonFilter);

    expect(screen.getByTestId("Alderaan")).toBeInTheDocument();

    const tableRows = screen.getAllByRole("row");
    expect(tableRows).toHaveLength(4);

    userEvent.selectOptions(columnFilter, "rotation_period");
    userEvent.selectOptions(comparisonFilter, "menor que");
    userEvent.clear(valueFilter);
    userEvent.type(valueFilter, "1200");
    userEvent.click(buttonFilter);

    expect(screen.getByTestId("Kamino")).toBeInTheDocument();
    const currentTableRows = screen.getAllByRole("row");
    expect(currentTableRows).toHaveLength(4);

    userEvent.selectOptions(columnFilter, "surface_water");
    userEvent.selectOptions(comparisonFilter, "igual a");
    userEvent.clear(valueFilter);
    userEvent.type(valueFilter, "40");
    userEvent.click(buttonFilter);

    expect(screen.getByTestId("Alderaan")).toBeInTheDocument();
    // const currentTableRows = screen.getAllByRole("row");
    expect(currentTableRows).toHaveLength(4);

  })

})