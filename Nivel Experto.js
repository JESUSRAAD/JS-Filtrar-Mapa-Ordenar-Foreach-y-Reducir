import { dataCity } from "./dataBase.js";

// 16. Filtrar los objetos por una ciudad que contiene la letra "a" en su nombre.

const cityWithA = () => {
  return dataCity.filter((property) => {
    let city = property.direccion.split(",");
    return city[1].toLowerCase().includes("a");
  });
};

// console.log(cityWithA());

// 17. Obtener un nuevo array con los objetos cuya fecha de publicación es posterior al 20 de mayo de 2024.

const publicationAfter20May = () => {
  const filterDay = dataCity.filter((property) => {
    return new Date(property.fechaDePublicacion) > new Date(2024, 5, 20);
  });
  return filterDay;
};
//    console.log(publicationAfter20May());

// 18. Obtener la suma total de los precios de venta de los objetos cuya cantidad de fotos es menor a 10.

const priceOfPicturesLess10 = () => {
  const filterDay = dataCity.filter((property) => {
    return property.cantidadDeFotos < 10;
  });
  console.log(filterDay);
  return filterDay.reduce((acc, cur) => acc + cur.precioDeVenta, 0);
};
//   console.log(priceOfPicturesLess10());

// 19. Obtener un nuevo array con el promedio de los metros cuadrados por ciudad de todos los objetos.
const averageCityMeters = (array = dataCity) => {
  const datacity2 = array.map((property) => property);

  const metersSumByCity = {};
  const countByCity = {};

  datacity2.forEach((property) => {
    let city = property.direccion.split(",");

    if (!metersSumByCity[city[1]]) {
      metersSumByCity[city[1]] = 0;

      countByCity[city[1]] = 0;
    }
    metersSumByCity[city[1]] += property.metrosCuadrados;

    countByCity[city[1]] ++;
    
  });
  const averageMetersByCity = [];
  for(const city in metersSumByCity){

const averageCity= metersSumByCity[city]/countByCity[city]
averageMetersByCity.push({city,averageCity})

  }

  return averageMetersByCity
};
// console.log(averageCityMeters());
// 20. Ordenar los objetos por nombre de forma descendente.

const orderCitysNames= (array=dataCity) => {
let array2= [...array]
    return  array2.sort((a, b) => {
        const numA = parseInt(a.nombre.match(/\d+/)[0], 10);
    const numB = parseInt(b.nombre.match(/\d+/)[0], 10);
    
    return numB - numA;
});
 };
  
  console.log(orderCitysNames());

























