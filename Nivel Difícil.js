import { dataCity } from "./dataBase.js";

// 11. Filtrar los objetos por una ciudad que comienza con la letra "M".

const citysWithM = () => {
  const filterMNames = dataCity.filter((property) => {
    return property.direccion.includes(", M");
  });
  return filterMNames
};
//  console.log(citysWithM());
// 12. Obtener un nuevo array con los objetos cuya fecha de publicación es anterior al 15 de mayo de 2024.

const publicationBefore15May= () => {
    const filterDay = dataCity.filter((property) => {
      return new Date(property.fechaDePublicacion) < new Date(2024, 5, 15);
    });
    return filterDay
  };
   console.log(publicationBefore15May());

// 13. Obtener la cantidad total de fotos de los objetos cuyo precio de venta es mayor a 300,000.
// 14. Obtener un nuevo array con los objetos cuya dirección contiene la palabra "avenida".
// 15. Ordenar los objetos por metros cuadrados de forma ascendente.
