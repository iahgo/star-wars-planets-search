async function fetchPlanets() {
  const endpoint = 'https://swapi-trybe.herokuapp.com/api/planets/';
  try {
    const reponse = await fetch(endpoint);
    const data = await reponse.json();
    const planetsFilter = data.results.filter((element) => delete (element.residents));
    return planetsFilter;
  } catch (err) {
    return err;
  }
}

export default fetchPlanets;
