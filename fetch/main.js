async function logJSONData() {
  try {
    const response = await fetch('https://jsonplaceholder.typicode.com/users');
    if (!response.ok) {
      throw new Error(`Network response was not OK, ${response.status}`);
    }
    const jsonData = await response.json();
    console.log(jsonData);
  } catch (error) {
    console.error(error);
  }
}
logJSONData();

async function logPokeData() {
  try {
    const response = await fetch('https://pokeapi.co/api/v2/pokemon/pikachu');
    if (!response.ok) {
      throw new Error(`Network response was not OK, ${response.status}`);
    }
    const pokeData = await response.json();
    console.log(pokeData);
  } catch (error) {
    console.error(error);
  }
}
logPokeData();
