import { dataCity } from "./dataBase.js";

// 11. Filtrar los objetos por una ciudad que comienza con la letra "M".

const citysWithM = () => {
  const filterMNames = dataCity.filter((property) => {
    return property.direccion.includes(", M");
  });
  return filterMNames;
};
//  console.log(citysWithM());
// 12. Obtener un nuevo array con los objetos cuya fecha de publicación es anterior al 15 de mayo de 2024.

const publicationBefore15May = () => {
  const filterDay = dataCity.filter((property) => {
    return new Date(property.fechaDePublicacion) < new Date(2024, 5, 15);
  });
  return filterDay;
};
//  console.log(publicationBefore15May());

// 13. Obtener la cantidad total de fotos de los objetos cuyo precio de venta es mayor a 300,000.

const picturesMore300K = () => {
  const filterDay = dataCity.filter((property) => {
    return property.precioDeVenta > 300000;
  });
  return filterDay.reduce((acc, cur) => acc + cur.cantidadDeFotos, 0);
};
// console.log(picturesMore300K());

// 14. Obtener un nuevo array con los objetos cuya dirección contiene la palabra "avenida".

const filterAvNames = dataCity.filter((property) => {
  return property.direccion.toLowerCase().includes("avenida");
});

//  console.log(filterAvNames);

// 15. Ordenar los objetos por metros cuadrados de forma ascendente.
const rankinMetersFuction=(array)=>{
const array2=[...array]

const rankinMeters=array2.sort((a, b) => {
  if (a.metrosCuadrados < b.metrosCuadrados) return -1;
  if (a.metrosCuadrados > b.metrosCuadrados) return 1;
  return 0;
});
  return rankinMeters
}

//console.log(rankinMetersFuction(dataCity));