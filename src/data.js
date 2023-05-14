import dataArray from './data/pokemon/pokemon.js';

const pokemonDatos = dataArray.pokemon;

//Funcion para los numeros de los Pokemones
const stringNum = (newFilter, currentSelect) => {
  //console.log(dataArray);
   return pokemonDatos
   .filter((pokemon) => pokemon[newFilter]
   .includes(currentSelect))
   .map((pokemon) => pokemon.num);
 };
 
//Funcion para Nombres de los Pokemones
const stringName = (newFilter, currentSelect) => {
  return pokemonDatos
  .filter((pokemon) => pokemon[newFilter]
  .includes(currentSelect))
  .map((pokemon) => pokemon.name);
};

//Función para tipo de los Pokemones
const stringType = (newFilter, currentSelect) => {
  return pokemonDatos
  .filter((pokemon) => pokemon[newFilter]
  .includes(currentSelect))
  .map((pokemon) => pokemon.type);
};

//Función para Img
const stringImg = (newFilter, currentSelect) => {
  return pokemonDatos
  .filter((pokemon) => pokemon[newFilter]
  .includes(currentSelect))
  .map((pokemon) => pokemon.img);
};

//Función para altura de los Pokemones
const stringHeight = (newFilter, currentSelect) => {
  return pokemonDatos
  .filter((pokemon) => pokemon[newFilter]
  .includes(currentSelect))
  .map((pokemon) => pokemon.height);
};

//Función para el Peso de los Pokemones
const stringWeight = (newFilter, currentSelect) => {
  return pokemonDatos
  .filter((pokemon) => pokemon[newFilter]
  .includes(currentSelect))
  .map((pokemon) => pokemon.weight);
};

// Función para los caramelos de los pokemones
const stringCandyCount = (newFilter, currentSelect) => {
  return pokemonDatos
  .filter((pokemon) => pokemon[newFilter]
  .includes(currentSelect))
  .map((pokemon) => pokemon.candy_count)
  .map((x) => x !== undefined ? x : 'No aplica');
};

// Función para los Huevos si posee o no
const stringEgg = (newFilter, currentSelect) => {
  return pokemonDatos
  .filter((pokemon) => pokemon[newFilter]
  .includes(currentSelect))
  .map((pokemon) => pokemon.egg).map((x) => x !== 'Not in Eggs' ? x : 'o km');
};

//Función puntos de aparicion
const stringAvgSpawns = (newFilter, currentSelect) => {
  return pokemonDatos
  .filter((pokemon) => pokemon[newFilter]
  .includes(currentSelect))
  .map((pokemon) => pokemon.avg_spawns);
};

// Función para el tiempo de aparición
const stringSpawnTime = (newFilter, currentSelect) => {
  return pokemonDatos
  .filter((pokemon) => pokemon[newFilter]
  .includes(currentSelect))
  .map((pokemon) => pokemon.spawn_time);
};

//Funcion para ordernar la data
const orderData = (data, sortByName, condition) => {
 if (condition === "aToZ") {
  return data.sort((a, b) => (a[sortByName] > b[sortByName]) ? 1 : -1);
 } else {
  return data.sort((a, b) => (a[sortByName] < b[sortByName]) ? 1 : -1);
 }
}
//Función para debilidades
const stringWaknesses = (newFilter, currentSelect) => {
  return pokemonDatos
  .filter((pokemon) => pokemon[newFilter]
  .includes(currentSelect))
  .map((pokemon) => pokemon.weaknesses);
};

//Se exportan cada una de las funciones para ser usadas en el main.js
export {stringNum, stringType, stringName, stringImg,
stringHeight, stringWeight, stringCandyCount,
stringEgg, stringAvgSpawns,stringSpawnTime, orderData, stringWaknesses };