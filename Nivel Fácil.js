import { dataCity } from "./dataBase.js";

// 1. Filtrar los objetos del array por una ciudad específica. La ciudad la recibirá por parámetro.

const filterCity = (city) => {
  let cityResult = dataCity.filter((property) => {
    return property.direccion.includes(city);
  });
  return cityResult;
};
// console.log(filterCity("Murcia"));

// 2. Obtener un nuevo array con los nombres de los objetos.

const namesCity = () => {
  let nameResultMap = dataCity.map((property) => {
    return property.nombre;
  });
  return nameResultMap;
};
// console.log(namesCity());

// 3. Obtener la suma total de las cantidades de fotos de todos los objetos.

const addPictures = () => {
  let arrayNumPictures = dataCity.map((property) => {
    return property.cantidadDeFotos;
  });
  return arrayNumPictures.reduce((acc, cur) => acc + cur, 0);
};
//   console.log(addPictures());

// 4. Obtener un nuevo array con los objetos que tienen más de 100 metros cuadrados.

const arrayMetersMore100 = () => {
  let arrayMeters = dataCity.filter((property) => 
      property.metrosCuadrados > 100
  );
  return arrayMeters
};
// console.log(arrayMetersMore100());


// 5. Ordenar los objetos por fecha de publicación de forma ascendente.

const publicateDate=dataCity.sort((a, b) =>{
    if (a.fechaDePublicacion < b.fechaDePublicacion) return -1;
    if (a.fechaDePublicacion > b.fechaDePublicacion) return 1;
    return 0;
  });
//   console.log(publicateDate);