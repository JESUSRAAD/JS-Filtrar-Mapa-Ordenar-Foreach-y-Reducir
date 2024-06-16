import { dataCity } from "./dataBase.js";

// 6. Filtrar los objetos por un rango de precios de venta. El rango de precios será recibido por parámetro.

const arrayMetersMore100 = (a, b) => {
  let arrayMeters = dataCity.filter((property) => {
    if (a < b) {
      return property.precioDeVenta >= a && property.precioDeVenta <= b;
    } else {
      return property.precioDeVenta <= a && property.precioDeVenta >= b;
    }
  });
  return arrayMeters;
};
// console.log(arrayMetersMore100(200000,300000));
// console.log(arrayMetersMore100(214695,214695));

// 7. Obtener un nuevo array con los objetos que tienen una cantidad de fotos par.

const propertyWithPairPictures = () => {
  let pairs = dataCity.filter((property) => {
    return property.cantidadDeFotos % 2 === 0;
  });
  return pairs;
};
//   console.log(propertyWithPairPictures());

// 8. Obtener la suma total y el promedio de los metros cuadrados de todos los objetos.

const metersPromedy = () => {
  let arraymeters = dataCity.map((property) => {
    return property.metrosCuadrados;
  });
  console.log(arraymeters);
  const addMeters = arraymeters.reduce((acc, cur) => acc + cur, 0);
  console.log(addMeters);
  return addMeters / dataCity.length;
};
// console.log(metersPromedy());

// 9. Obtener un nuevo array con los objetos cuya dirección contiene la palabra "calle".

const adressCalle = () => {
  let nameCalle = dataCity.filter((property) => {
    return property.direccion.toLowerCase().includes("calle");
  });
  return nameCalle;
};
//  console.log(adressCalle());
// 10. Ordenar los objetos por precio de venta de forma descendente.

const rankingPrice = dataCity.sort((a, b) => {
  if (a.precioDeVenta < b.precioDeVenta) return 1;
  if (a.precioDeVenta > b.precioDeVenta) return -1;
  return 0;
});
//   console.log(rankingPrice);
