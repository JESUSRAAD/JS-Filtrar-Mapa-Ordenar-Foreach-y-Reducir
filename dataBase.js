// spanish_cities = [
//     "Madrid",
//     "Barcelona",
//     "Valencia",
//     "Sevilla",
//     "Zaragoza",
//     "Málaga",
//     "Murcia",
//     "Palma",
//     "Las Palmas de Gran Canaria",
//     "Bilbao",
//     ];
    
//     const baseDeDatos = [];
    
//     // Generate 3000 objects
//     for (let i = 1; i <= 3000; i++) {
//     let start_date = new Date(2024, 5, 1);
//     let end_date = new Date(2024, 5, 30);
//     let random_date = new Date(
//     start_date.getTime() +
//     Math.random() * (end_date.getTime() - start_date.getTime())
//     );
    
//     let propiedad = {
//     nombre: "Propiedad " + i,
//     direccion:
//     "Calle " +
//     Math.floor(Math.random() * 99 + 1) +
//     ", " +
//     spanish_cities[Math.floor(Math.random() * spanish_cities.length)],
//     fechaDePublicacion: random_date.toISOString().split("T")[0], // Format date as "YYYY-MM-DD"
//     cantidadDeFotos: Math.floor(Math.random() * 20 + 1),
//     metrosCuadrados: Math.floor(Math.random() * 450 + 50),
//     precioDeVenta: Math.floor(Math.random() * 950000 + 50000),
//     };
//     baseDeDatos.push(propiedad);
//     }
    
//     // console.log(baseDeDatos);

    export const dataCity= [
    {
        nombre: "Propiedad 1",
        direccion: "Calle 96, Las Palmas de Gran Canaria",
        fechaDePublicacion: "2024-06-19",
        cantidadDeFotos: 16,
        metrosCuadrados: 443,
        precioDeVenta: 889470
    },
    {
        nombre: "Propiedad 2",
        direccion: "Calle 6, Bilbao",
        fechaDePublicacion: "2024-06-19",
        cantidadDeFotos: 2,
        metrosCuadrados: 452,
        precioDeVenta: 739890
    },
    {
        nombre: "Propiedad 3",
        direccion: "Calle 49, Sevilla",
        fechaDePublicacion: "2024-06-06",
        cantidadDeFotos: 9,
        metrosCuadrados: 148,
        precioDeVenta: 533488
    },
    {
        nombre: "Propiedad 4",
        direccion: "Calle 46, Murcia",
        fechaDePublicacion: "2024-06-28",
        cantidadDeFotos: 17,
        metrosCuadrados: 271,
        precioDeVenta: 82542
    },
    {
        nombre: "Propiedad 5",
        direccion: "Calle 98, Valencia",
        fechaDePublicacion: "2024-06-03",
        cantidadDeFotos: 2,
        metrosCuadrados: 371,
        precioDeVenta: 214695
    },
    {
        nombre: "Propiedad 6",
        direccion: "Calle 9, Valencia",
        fechaDePublicacion: "2024-06-16",
        cantidadDeFotos: 18,
        metrosCuadrados: 371,
        precioDeVenta: 323303
    },
    {
        nombre: "Propiedad 7",
        direccion: "Calle 24, Las Palmas de Gran Canaria",
        fechaDePublicacion: "2024-06-18",
        cantidadDeFotos: 10,
        metrosCuadrados: 450,
        precioDeVenta: 257044
    },
    {
        nombre: "Propiedad 8",
        direccion: "Calle 20, Barcelona",
        fechaDePublicacion: "2024-06-09",
        cantidadDeFotos: 13,
        metrosCuadrados: 340,
        precioDeVenta: 651659
    },
    {
        nombre: "Propiedad 9",
        direccion: "Calle 98, Sevilla",
        fechaDePublicacion: "2024-06-22",
        cantidadDeFotos: 17,
        metrosCuadrados: 312,
        precioDeVenta: 990523
    },
    {
        nombre: "Propiedad 10",
        direccion: "Calle 68, Málaga",
        fechaDePublicacion: "2024-06-19",
        cantidadDeFotos: 6,
        metrosCuadrados: 214,
        precioDeVenta: 750655
    },
    {
        nombre: "Propiedad 11",
        direccion: "Calle 77, Murcia",
        fechaDePublicacion: "2024-06-25",
        cantidadDeFotos: 1,
        metrosCuadrados: 286,
        precioDeVenta: 320906
    },
    {
        nombre: "Propiedad 12",
        direccion: "Calle 28, Barcelona",
        fechaDePublicacion: "2024-06-08",
        cantidadDeFotos: 19,
        metrosCuadrados: 178,
        precioDeVenta: 541123
    },
    {
        nombre: "Propiedad 13",
        direccion: "Calle 83, Las Palmas de Gran Canaria",
        fechaDePublicacion: "2024-06-25",
        cantidadDeFotos: 5,
        metrosCuadrados: 350,
        precioDeVenta: 393539
    },
    {
        nombre: "Propiedad 14",
        direccion: "Calle 47, Murcia",
        fechaDePublicacion: "2024-06-12",
        cantidadDeFotos: 13,
        metrosCuadrados: 496,
        precioDeVenta: 217512
    },
    {
        nombre: "Propiedad 15",
        direccion: "Calle 21, Sevilla",
        fechaDePublicacion: "2024-06-24",
        cantidadDeFotos: 8,
        metrosCuadrados: 150,
        precioDeVenta: 893371
    },
    {
        nombre: "Propiedad 16",
        direccion: "Calle 69, Murcia",
        fechaDePublicacion: "2024-06-04",
        cantidadDeFotos: 11,
        metrosCuadrados: 136,
        precioDeVenta: 162322
    },
    {
        nombre: "Propiedad 17",
        direccion: "Calle 1, Sevilla",
        fechaDePublicacion: "2024-06-04",
        cantidadDeFotos: 17,
        metrosCuadrados: 387,
        precioDeVenta: 416909
    },
    {
        nombre: "Propiedad 18",
        direccion: "Calle 80, Málaga",
        fechaDePublicacion: "2024-06-01",
        cantidadDeFotos: 6,
        metrosCuadrados: 489,
        precioDeVenta: 929150
    },
    {
        nombre: "Propiedad 19",
        direccion: "Calle 31, Bilbao",
        fechaDePublicacion: "2024-06-27",
        cantidadDeFotos: 16,
        metrosCuadrados: 348,
        precioDeVenta: 739946
    },
    {
        nombre: "Propiedad 20",
        direccion: "Calle 35, Madrid",
        fechaDePublicacion: "2024-06-20",
        cantidadDeFotos: 2,
        metrosCuadrados: 381,
        precioDeVenta: 676273
    },
    {
        nombre: "Propiedad 21",
        direccion: "Calle 57, Bilbao",
        fechaDePublicacion: "2024-06-22",
        cantidadDeFotos: 16,
        metrosCuadrados: 68,
        precioDeVenta: 889502
    },
    {
        nombre: "Propiedad 22",
        direccion: "Calle 3, Barcelona",
        fechaDePublicacion: "2024-06-01",
        cantidadDeFotos: 2,
        metrosCuadrados: 131,
        precioDeVenta: 905282
    },
    {
        nombre: "Propiedad 23",
        direccion: "Calle 68, Zaragoza",
        fechaDePublicacion: "2024-06-20",
        cantidadDeFotos: 11,
        metrosCuadrados: 219,
        precioDeVenta: 721465
    },
    {
        nombre: "Propiedad 24",
        direccion: "Calle 59, Zaragoza",
        fechaDePublicacion: "2024-06-07",
        cantidadDeFotos: 20,
        metrosCuadrados: 438,
        precioDeVenta: 963814
    },
    {
        nombre: "Propiedad 25",
        direccion: "Calle 49, Murcia",
        fechaDePublicacion: "2024-06-28",
        cantidadDeFotos: 14,
        metrosCuadrados: 474,
        precioDeVenta: 144242
    },
    {
        nombre: "Propiedad 26",
        direccion: "Calle 62, Bilbao",
        fechaDePublicacion: "2024-06-19",
        cantidadDeFotos: 19,
        metrosCuadrados: 315,
        precioDeVenta: 509676
    },
    {
        nombre: "Propiedad 27",
        direccion: "Calle 58, Palma",
        fechaDePublicacion: "2024-06-24",
        cantidadDeFotos: 19,
        metrosCuadrados: 313,
        precioDeVenta: 662395
    },
    {
        nombre: "Propiedad 28",
        direccion: "Calle 66, Zaragoza",
        fechaDePublicacion: "2024-06-19",
        cantidadDeFotos: 3,
        metrosCuadrados: 158,
        precioDeVenta: 189813
    },
    {
        nombre: "Propiedad 29",
        direccion: "Calle 90, Murcia",
        fechaDePublicacion: "2024-06-23",
        cantidadDeFotos: 17,
        metrosCuadrados: 338,
        precioDeVenta: 200689
    },
    {
        nombre: "Propiedad 30",
        direccion: "Calle 81, Málaga",
        fechaDePublicacion: "2024-06-07",
        cantidadDeFotos: 6,
        metrosCuadrados: 413,
        precioDeVenta: 395378
    },
    {
        nombre: "Propiedad 31",
        direccion: "Calle 73, Palma",
        fechaDePublicacion: "2024-06-16",
        cantidadDeFotos: 14,
        metrosCuadrados: 231,
        precioDeVenta: 360148
    },
    {
        nombre: "Propiedad 32",
        direccion: "Calle 95, Bilbao",
        fechaDePublicacion: "2024-06-01",
        cantidadDeFotos: 15,
        metrosCuadrados: 497,
        precioDeVenta: 757507
    },
    {
        nombre: "Propiedad 33",
        direccion: "Calle 13, Valencia",
        fechaDePublicacion: "2024-06-19",
        cantidadDeFotos: 16,
        metrosCuadrados: 482,
        precioDeVenta: 829181
    },
    {
        nombre: "Propiedad 34",
        direccion: "Calle 93, Las Palmas de Gran Canaria",
        fechaDePublicacion: "2024-06-05",
        cantidadDeFotos: 16,
        metrosCuadrados: 264,
        precioDeVenta: 913956
    },
    {
        nombre: "Propiedad 35",
        direccion: "Calle 4, Las Palmas de Gran Canaria",
        fechaDePublicacion: "2024-06-23",
        cantidadDeFotos: 18,
        metrosCuadrados: 267,
        precioDeVenta: 569088
    },
    {
        nombre: "Propiedad 36",
        direccion: "Calle 97, Murcia",
        fechaDePublicacion: "2024-06-20",
        cantidadDeFotos: 7,
        metrosCuadrados: 210,
        precioDeVenta: 98464
    },
    {
        nombre: "Propiedad 37",
        direccion: "Calle 74, Las Palmas de Gran Canaria",
        fechaDePublicacion: "2024-06-07",
        cantidadDeFotos: 11,
        metrosCuadrados: 227,
        precioDeVenta: 652801
    },
    {
        nombre: "Propiedad 38",
        direccion: "Calle 21, Sevilla",
        fechaDePublicacion: "2024-06-08",
        cantidadDeFotos: 2,
        metrosCuadrados: 124,
        precioDeVenta: 440762
    },
    {
        nombre: "Propiedad 39",
        direccion: "Calle 83, Murcia",
        fechaDePublicacion: "2024-06-24",
        cantidadDeFotos: 1,
        metrosCuadrados: 246,
        precioDeVenta: 344457
    },
    {
        nombre: "Propiedad 40",
        direccion: "Calle 68, Valencia",
        fechaDePublicacion: "2024-06-23",
        cantidadDeFotos: 18,
        metrosCuadrados: 358,
        precioDeVenta: 699622
    },
    {
        nombre: "Propiedad 41",
        direccion: "Calle 3, Las Palmas de Gran Canaria",
        fechaDePublicacion: "2024-06-17",
        cantidadDeFotos: 7,
        metrosCuadrados: 452,
        precioDeVenta: 660833
    },
    {
        nombre: "Propiedad 42",
        direccion: "Calle 34, Málaga",
        fechaDePublicacion: "2024-06-14",
        cantidadDeFotos: 19,
        metrosCuadrados: 231,
        precioDeVenta: 850869
    },
    {
        nombre: "Propiedad 43",
        direccion: "Calle 31, Valencia",
        fechaDePublicacion: "2024-06-29",
        cantidadDeFotos: 6,
        metrosCuadrados: 458,
        precioDeVenta: 764908
    },
    {
        nombre: "Propiedad 44",
        direccion: "Calle 21, Málaga",
        fechaDePublicacion: "2024-06-05",
        cantidadDeFotos: 6,
        metrosCuadrados: 330,
        precioDeVenta: 760323
    },
    {
        nombre: "Propiedad 45",
        direccion: "Calle 63, Valencia",
        fechaDePublicacion: "2024-06-16",
        cantidadDeFotos: 3,
        metrosCuadrados: 343,
        precioDeVenta: 172948
    },
    {
        nombre: "Propiedad 46",
        direccion: "Calle 51, Bilbao",
        fechaDePublicacion: "2024-06-14",
        cantidadDeFotos: 20,
        metrosCuadrados: 211,
        precioDeVenta: 422676
    },
    {
        nombre: "Propiedad 47",
        direccion: "Calle 29, Sevilla",
        fechaDePublicacion: "2024-06-20",
        cantidadDeFotos: 19,
        metrosCuadrados: 284,
        precioDeVenta: 704763
    },
    {
        nombre: "Propiedad 48",
        direccion: "Calle 80, Las Palmas de Gran Canaria",
        fechaDePublicacion: "2024-06-09",
        cantidadDeFotos: 20,
        metrosCuadrados: 168,
        precioDeVenta: 303418
    },
    {
        nombre: "Propiedad 49",
        direccion: "Calle 16, Málaga",
        fechaDePublicacion: "2024-06-11",
        cantidadDeFotos: 19,
        metrosCuadrados: 486,
        precioDeVenta: 981883
    },
    {
        nombre: "Propiedad 50",
        direccion: "Calle 42, Palma",
        fechaDePublicacion: "2024-06-23",
        cantidadDeFotos: 9,
        metrosCuadrados: 228,
        precioDeVenta: 490250
    },
    {
        nombre: "Propiedad 51",
        direccion: "Calle 20, Murcia",
        fechaDePublicacion: "2024-06-18",
        cantidadDeFotos: 17,
        metrosCuadrados: 89,
        precioDeVenta: 330735
    },
    {
        nombre: "Propiedad 52",
        direccion: "Calle 17, Bilbao",
        fechaDePublicacion: "2024-06-24",
        cantidadDeFotos: 11,
        metrosCuadrados: 92,
        precioDeVenta: 172691
    },
    {
        nombre: "Propiedad 53",
        direccion: "Calle 63, Barcelona",
        fechaDePublicacion: "2024-06-09",
        cantidadDeFotos: 13,
        metrosCuadrados: 325,
        precioDeVenta: 798545
    },
    {
        nombre: "Propiedad 54",
        direccion: "Calle 70, Murcia",
        fechaDePublicacion: "2024-06-20",
        cantidadDeFotos: 4,
        metrosCuadrados: 392,
        precioDeVenta: 190586
    },
    {
        nombre: "Propiedad 55",
        direccion: "Calle 89, Sevilla",
        fechaDePublicacion: "2024-06-23",
        cantidadDeFotos: 10,
        metrosCuadrados: 277,
        precioDeVenta: 301366
    },
    {
        nombre: "Propiedad 56",
        direccion: "Calle 30, Madrid",
        fechaDePublicacion: "2024-06-14",
        cantidadDeFotos: 7,
        metrosCuadrados: 127,
        precioDeVenta: 70931
    },
    {
        nombre: "Propiedad 57",
        direccion: "Calle 7, Murcia",
        fechaDePublicacion: "2024-06-01",
        cantidadDeFotos: 9,
        metrosCuadrados: 51,
        precioDeVenta: 859727
    },
    {
        nombre: "Propiedad 58",
        direccion: "Calle 2, Sevilla",
        fechaDePublicacion: "2024-06-19",
        cantidadDeFotos: 9,
        metrosCuadrados: 448,
        precioDeVenta: 261356
    },
    {
        nombre: "Propiedad 59",
        direccion: "Calle 66, Las Palmas de Gran Canaria",
        fechaDePublicacion: "2024-06-27",
        cantidadDeFotos: 15,
        metrosCuadrados: 370,
        precioDeVenta: 576055
    },
    {
        nombre: "Propiedad 60",
        direccion: "Calle 76, Valencia",
        fechaDePublicacion: "2024-06-05",
        cantidadDeFotos: 11,
        metrosCuadrados: 238,
        precioDeVenta: 644951
    },
    {
        nombre: "Propiedad 61",
        direccion: "Calle 68, Barcelona",
        fechaDePublicacion: "2024-06-01",
        cantidadDeFotos: 11,
        metrosCuadrados: 254,
        precioDeVenta: 516021
    },
    {
        nombre: "Propiedad 62",
        direccion: "Calle 80, Madrid",
        fechaDePublicacion: "2024-06-07",
        cantidadDeFotos: 5,
        metrosCuadrados: 108,
        precioDeVenta: 255474
    },
    {
        nombre: "Propiedad 63",
        direccion: "Calle 54, Las Palmas de Gran Canaria",
        fechaDePublicacion: "2024-06-13",
        cantidadDeFotos: 20,
        metrosCuadrados: 89,
        precioDeVenta: 809610
    },
    {
        nombre: "Propiedad 64",
        direccion: "Calle 14, Palma",
        fechaDePublicacion: "2024-06-02",
        cantidadDeFotos: 1,
        metrosCuadrados: 191,
        precioDeVenta: 114545
    },
    {
        nombre: "Propiedad 65",
        direccion: "Calle 71, Murcia",
        fechaDePublicacion: "2024-06-18",
        cantidadDeFotos: 9,
        metrosCuadrados: 99,
        precioDeVenta: 547467
    },
    {
        nombre: "Propiedad 66",
        direccion: "Calle 71, Madrid",
        fechaDePublicacion: "2024-06-21",
        cantidadDeFotos: 16,
        metrosCuadrados: 390,
        precioDeVenta: 739803
    },
    {
        nombre: "Propiedad 67",
        direccion: "Calle 47, Murcia",
        fechaDePublicacion: "2024-06-21",
        cantidadDeFotos: 9,
        metrosCuadrados: 147,
        precioDeVenta: 186147
    },
    {
        nombre: "Propiedad 68",
        direccion: "Calle 9, Zaragoza",
        fechaDePublicacion: "2024-06-23",
        cantidadDeFotos: 2,
        metrosCuadrados: 181,
        precioDeVenta: 404113
    },
    {
        nombre: "Propiedad 69",
        direccion: "Calle 60, Bilbao",
        fechaDePublicacion: "2024-06-12",
        cantidadDeFotos: 2,
        metrosCuadrados: 62,
        precioDeVenta: 119045
    },
    {
        nombre: "Propiedad 70",
        direccion: "Calle 25, Murcia",
        fechaDePublicacion: "2024-06-03",
        cantidadDeFotos: 16,
        metrosCuadrados: 317,
        precioDeVenta: 811693
    },
    {
        nombre: "Propiedad 71",
        direccion: "Calle 91, Bilbao",
        fechaDePublicacion: "2024-06-20",
        cantidadDeFotos: 1,
        metrosCuadrados: 173,
        precioDeVenta: 56351
    },
    {
        nombre: "Propiedad 72",
        direccion: "Calle 47, Barcelona",
        fechaDePublicacion: "2024-06-26",
        cantidadDeFotos: 5,
        metrosCuadrados: 66,
        precioDeVenta: 805229
    },
    {
        nombre: "Propiedad 73",
        direccion: "Calle 36, Murcia",
        fechaDePublicacion: "2024-06-09",
        cantidadDeFotos: 7,
        metrosCuadrados: 62,
        precioDeVenta: 421647
    },
    {
        nombre: "Propiedad 74",
        direccion: "Calle 86, Valencia",
        fechaDePublicacion: "2024-06-28",
        cantidadDeFotos: 18,
        metrosCuadrados: 162,
        precioDeVenta: 285757
    },
    {
        nombre: "Propiedad 75",
        direccion: "Calle 70, Barcelona",
        fechaDePublicacion: "2024-06-04",
        cantidadDeFotos: 3,
        metrosCuadrados: 299,
        precioDeVenta: 392028
    },
    {
        nombre: "Propiedad 76",
        direccion: "Calle 82, Málaga",
        fechaDePublicacion: "2024-06-21",
        cantidadDeFotos: 16,
        metrosCuadrados: 468,
        precioDeVenta: 976525
    },
    {
        nombre: "Propiedad 77",
        direccion: "Calle 14, Málaga",
        fechaDePublicacion: "2024-06-27",
        cantidadDeFotos: 8,
        metrosCuadrados: 208,
        precioDeVenta: 553421
    },
    {
        nombre: "Propiedad 78",
        direccion: "Calle 70, Zaragoza",
        fechaDePublicacion: "2024-06-17",
        cantidadDeFotos: 16,
        metrosCuadrados: 479,
        precioDeVenta: 566228
    },
    {
        nombre: "Propiedad 79",
        direccion: "Calle 12, Sevilla",
        fechaDePublicacion: "2024-06-18",
        cantidadDeFotos: 6,
        metrosCuadrados: 442,
        precioDeVenta: 817983
    },
    {
        nombre: "Propiedad 80",
        direccion: "Calle 42, Barcelona",
        fechaDePublicacion: "2024-06-20",
        cantidadDeFotos: 2,
        metrosCuadrados: 189,
        precioDeVenta: 726719
    },
    {
        nombre: "Propiedad 81",
        direccion: "Calle 85, Murcia",
        fechaDePublicacion: "2024-06-06",
        cantidadDeFotos: 9,
        metrosCuadrados: 270,
        precioDeVenta: 507306
    },
    {
        nombre: "Propiedad 82",
        direccion: "Calle 44, Madrid",
        fechaDePublicacion: "2024-06-11",
        cantidadDeFotos: 9,
        metrosCuadrados: 51,
        precioDeVenta: 254763
    },
    {
        nombre: "Propiedad 83",
        direccion: "Calle 43, Zaragoza",
        fechaDePublicacion: "2024-06-13",
        cantidadDeFotos: 4,
        metrosCuadrados: 390,
        precioDeVenta: 700208
    },
    {
        nombre: "Propiedad 84",
        direccion: "Calle 72, Barcelona",
        fechaDePublicacion: "2024-06-01",
        cantidadDeFotos: 12,
        metrosCuadrados: 140,
        precioDeVenta: 436493
    },
    {
        nombre: "Propiedad 85",
        direccion: "Calle 26, Valencia",
        fechaDePublicacion: "2024-06-08",
        cantidadDeFotos: 13,
        metrosCuadrados: 206,
        precioDeVenta: 369267
    },
    {
        nombre: "Propiedad 86",
        direccion: "Calle 82, Valencia",
        fechaDePublicacion: "2024-06-23",
        cantidadDeFotos: 2,
        metrosCuadrados: 93,
        precioDeVenta: 407560
    },
    {
        nombre: "Propiedad 87",
        direccion: "Calle 38, Bilbao",
        fechaDePublicacion: "2024-06-15",
        cantidadDeFotos: 5,
        metrosCuadrados: 196,
        precioDeVenta: 621213
    },
    {
        nombre: "Propiedad 88",
        direccion: "Calle 61, Zaragoza",
        fechaDePublicacion: "2024-06-22",
        cantidadDeFotos: 13,
        metrosCuadrados: 278,
        precioDeVenta: 644974
    },
    {
        nombre: "Propiedad 89",
        direccion: "Calle 54, Murcia",
        fechaDePublicacion: "2024-06-03",
        cantidadDeFotos: 6,
        metrosCuadrados: 487,
        precioDeVenta: 264626
    },
    {
        nombre: "Propiedad 90",
        direccion: "Calle 88, Valencia",
        fechaDePublicacion: "2024-06-23",
        cantidadDeFotos: 15,
        metrosCuadrados: 433,
        precioDeVenta: 681875
    },
    {
        nombre: "Propiedad 91",
        direccion: "Calle 53, Murcia",
        fechaDePublicacion: "2024-06-16",
        cantidadDeFotos: 18,
        metrosCuadrados: 291,
        precioDeVenta: 893485
    },
    {
        nombre: "Propiedad 92",
        direccion: "Calle 97, Barcelona",
        fechaDePublicacion: "2024-06-16",
        cantidadDeFotos: 18,
        metrosCuadrados: 379,
        precioDeVenta: 364379
    },
    {
        nombre: "Propiedad 93",
        direccion: "Calle 8, Las Palmas de Gran Canaria",
        fechaDePublicacion: "2024-06-03",
        cantidadDeFotos: 6,
        metrosCuadrados: 382,
        precioDeVenta: 618974
    },
    {
        nombre: "Propiedad 94",
        direccion: "Calle 43, Sevilla",
        fechaDePublicacion: "2024-06-09",
        cantidadDeFotos: 16,
        metrosCuadrados: 63,
        precioDeVenta: 167790
    },
    {
        nombre: "Propiedad 95",
        direccion: "Calle 9, Bilbao",
        fechaDePublicacion: "2024-06-13",
        cantidadDeFotos: 15,
        metrosCuadrados: 78,
        precioDeVenta: 208683
    },
    {
        nombre: "Propiedad 96",
        direccion: "Calle 98, Murcia",
        fechaDePublicacion: "2024-06-16",
        cantidadDeFotos: 5,
        metrosCuadrados: 334,
        precioDeVenta: 756104
    },
    {
        nombre: "Propiedad 97",
        direccion: "Calle 7, Zaragoza",
        fechaDePublicacion: "2024-06-14",
        cantidadDeFotos: 9,
        metrosCuadrados: 51,
        precioDeVenta: 649598
    },
    {
        nombre: "Propiedad 98",
        direccion: "Calle 75, Palma",
        fechaDePublicacion: "2024-06-06",
        cantidadDeFotos: 7,
        metrosCuadrados: 278,
        precioDeVenta: 291938
    },
    {
        nombre: "Propiedad 99",
        direccion: "Calle 34, Palma",
        fechaDePublicacion: "2024-06-24",
        cantidadDeFotos: 2,
        metrosCuadrados: 320,
        precioDeVenta: 682400
    },
    {
        nombre: "Propiedad 100",
        direccion: "Calle 62, Palma",
        fechaDePublicacion: "2024-06-10",
        cantidadDeFotos: 2,
        metrosCuadrados: 369,
        precioDeVenta: 760091
    },
    {
        nombre: "Propiedad 101",
        direccion: "Calle 51, Murcia",
        fechaDePublicacion: "2024-06-29",
        cantidadDeFotos: 14,
        metrosCuadrados: 54,
        precioDeVenta: 378905
    },
    {
        nombre: "Propiedad 102",
        direccion: "Calle 72, Valencia",
        fechaDePublicacion: "2024-06-08",
        cantidadDeFotos: 9,
        metrosCuadrados: 125,
        precioDeVenta: 653304
    },
    {
        nombre: "Propiedad 103",
        direccion: "Calle 61, Zaragoza",
        fechaDePublicacion: "2024-06-14",
        cantidadDeFotos: 10,
        metrosCuadrados: 124,
        precioDeVenta: 632591
    },
    {
        nombre: "Propiedad 104",
        direccion: "Calle 90, Barcelona",
        fechaDePublicacion: "2024-06-22",
        cantidadDeFotos: 19,
        metrosCuadrados: 313,
        precioDeVenta: 438597
    },
    {
        nombre: "Propiedad 105",
        direccion: "Calle 33, Madrid",
        fechaDePublicacion: "2024-06-25",
        cantidadDeFotos: 12,
        metrosCuadrados: 99,
        precioDeVenta: 684720
    },
    {
        nombre: "Propiedad 106",
        direccion: "Calle 70, Bilbao",
        fechaDePublicacion: "2024-06-28",
        cantidadDeFotos: 9,
        metrosCuadrados: 283,
        precioDeVenta: 263202
    },
    {
        nombre: "Propiedad 107",
        direccion: "Calle 83, Las Palmas de Gran Canaria",
        fechaDePublicacion: "2024-06-10",
        cantidadDeFotos: 17,
        metrosCuadrados: 382,
        precioDeVenta: 168107
    },
    {
        nombre: "Propiedad 108",
        direccion: "Calle 7, Bilbao",
        fechaDePublicacion: "2024-06-14",
        cantidadDeFotos: 19,
        metrosCuadrados: 82,
        precioDeVenta: 805429
    },
    {
        nombre: "Propiedad 109",
        direccion: "Calle 9, Sevilla",
        fechaDePublicacion: "2024-06-17",
        cantidadDeFotos: 19,
        metrosCuadrados: 106,
        precioDeVenta: 608468
    },
    {
        nombre: "Propiedad 110",
        direccion: "Calle 21, Valencia",
        fechaDePublicacion: "2024-06-23",
        cantidadDeFotos: 11,
        metrosCuadrados: 299,
        precioDeVenta: 204950
    },
    {
        nombre: "Propiedad 111",
        direccion: "Calle 28, Bilbao",
        fechaDePublicacion: "2024-06-14",
        cantidadDeFotos: 17,
        metrosCuadrados: 133,
        precioDeVenta: 92609
    },
    {
        nombre: "Propiedad 112",
        direccion: "Calle 30, Madrid",
        fechaDePublicacion: "2024-06-18",
        cantidadDeFotos: 10,
        metrosCuadrados: 234,
        precioDeVenta: 69975
    },
    {
        nombre: "Propiedad 113",
        direccion: "Calle 78, Las Palmas de Gran Canaria",
        fechaDePublicacion: "2024-06-06",
        cantidadDeFotos: 14,
        metrosCuadrados: 263,
        precioDeVenta: 351039
    },
    {
        nombre: "Propiedad 114",
        direccion: "Calle 39, Málaga",
        fechaDePublicacion: "2024-06-11",
        cantidadDeFotos: 20,
        metrosCuadrados: 218,
        precioDeVenta: 954421
    },
    {
        nombre: "Propiedad 115",
        direccion: "Calle 44, Palma",
        fechaDePublicacion: "2024-06-12",
        cantidadDeFotos: 13,
        metrosCuadrados: 126,
        precioDeVenta: 374409
    },
    {
        nombre: "Propiedad 116",
        direccion: "Calle 95, Sevilla",
        fechaDePublicacion: "2024-06-17",
        cantidadDeFotos: 2,
        metrosCuadrados: 295,
        precioDeVenta: 954021
    },
    {
        nombre: "Propiedad 117",
        direccion: "Calle 28, Zaragoza",
        fechaDePublicacion: "2024-06-14",
        cantidadDeFotos: 3,
        metrosCuadrados: 457,
        precioDeVenta: 590773
    },
    {
        nombre: "Propiedad 118",
        direccion: "Calle 86, Valencia",
        fechaDePublicacion: "2024-06-21",
        cantidadDeFotos: 18,
        metrosCuadrados: 243,
        precioDeVenta: 171367
    },
    {
        nombre: "Propiedad 119",
        direccion: "Calle 49, Sevilla",
        fechaDePublicacion: "2024-06-03",
        cantidadDeFotos: 19,
        metrosCuadrados: 364,
        precioDeVenta: 708435
    },
    {
        nombre: "Propiedad 120",
        direccion: "Calle 42, Las Palmas de Gran Canaria",
        fechaDePublicacion: "2024-06-12",
        cantidadDeFotos: 2,
        metrosCuadrados: 358,
        precioDeVenta: 526276
    },
    {
        nombre: "Propiedad 121",
        direccion: "Calle 86, Málaga",
        fechaDePublicacion: "2024-06-09",
        cantidadDeFotos: 4,
        metrosCuadrados: 88,
        precioDeVenta: 748837
    },
    {
        nombre: "Propiedad 122",
        direccion: "Calle 59, Murcia",
        fechaDePublicacion: "2024-06-07",
        cantidadDeFotos: 12,
        metrosCuadrados: 241,
        precioDeVenta: 435259
    },
    {
        nombre: "Propiedad 123",
        direccion: "Calle 34, Bilbao",
        fechaDePublicacion: "2024-06-05",
        cantidadDeFotos: 4,
        metrosCuadrados: 194,
        precioDeVenta: 287910
    },
    {
        nombre: "Propiedad 124",
        direccion: "Calle 43, Barcelona",
        fechaDePublicacion: "2024-06-01",
        cantidadDeFotos: 3,
        metrosCuadrados: 237,
        precioDeVenta: 162060
    },
    {
        nombre: "Propiedad 125",
        direccion: "Calle 30, Valencia",
        fechaDePublicacion: "2024-06-23",
        cantidadDeFotos: 18,
        metrosCuadrados: 424,
        precioDeVenta: 943295
    },
    {
        nombre: "Propiedad 126",
        direccion: "Calle 25, Palma",
        fechaDePublicacion: "2024-06-12",
        cantidadDeFotos: 16,
        metrosCuadrados: 264,
        precioDeVenta: 55100
    },
    {
        nombre: "Propiedad 127",
        direccion: "Calle 31, Sevilla",
        fechaDePublicacion: "2024-06-06",
        cantidadDeFotos: 10,
        metrosCuadrados: 55,
        precioDeVenta: 601814
    },
    {
        nombre: "Propiedad 128",
        direccion: "Calle 29, Málaga",
        fechaDePublicacion: "2024-06-15",
        cantidadDeFotos: 17,
        metrosCuadrados: 334,
        precioDeVenta: 99329
    },
    {
        nombre: "Propiedad 129",
        direccion: "Calle 37, Valencia",
        fechaDePublicacion: "2024-06-09",
        cantidadDeFotos: 5,
        metrosCuadrados: 311,
        precioDeVenta: 850511
    },
    {
        nombre: "Propiedad 130",
        direccion: "Calle 42, Sevilla",
        fechaDePublicacion: "2024-06-05",
        cantidadDeFotos: 15,
        metrosCuadrados: 229,
        precioDeVenta: 726786
    },
    {
        nombre: "Propiedad 131",
        direccion: "Calle 36, Málaga",
        fechaDePublicacion: "2024-06-15",
        cantidadDeFotos: 8,
        metrosCuadrados: 399,
        precioDeVenta: 194457
    },
    {
        nombre: "Propiedad 132",
        direccion: "Calle 5, Málaga",
        fechaDePublicacion: "2024-06-12",
        cantidadDeFotos: 19,
        metrosCuadrados: 420,
        precioDeVenta: 894316
    },
    {
        nombre: "Propiedad 133",
        direccion: "Calle 57, Las Palmas de Gran Canaria",
        fechaDePublicacion: "2024-06-23",
        cantidadDeFotos: 19,
        metrosCuadrados: 174,
        precioDeVenta: 185765
    },
    {
        nombre: "Propiedad 134",
        direccion: "Calle 91, Bilbao",
        fechaDePublicacion: "2024-06-21",
        cantidadDeFotos: 9,
        metrosCuadrados: 334,
        precioDeVenta: 661167
    },
    {
        nombre: "Propiedad 135",
        direccion: "Calle 74, Palma",
        fechaDePublicacion: "2024-06-19",
        cantidadDeFotos: 8,
        metrosCuadrados: 141,
        precioDeVenta: 216006
    },
    {
        nombre: "Propiedad 136",
        direccion: "Calle 89, Barcelona",
        fechaDePublicacion: "2024-06-04",
        cantidadDeFotos: 9,
        metrosCuadrados: 152,
        precioDeVenta: 670284
    },
    {
        nombre: "Propiedad 137",
        direccion: "Calle 38, Barcelona",
        fechaDePublicacion: "2024-06-03",
        cantidadDeFotos: 12,
        metrosCuadrados: 145,
        precioDeVenta: 586127
    },
    {
        nombre: "Propiedad 138",
        direccion: "Calle 88, Valencia",
        fechaDePublicacion: "2024-05-31",
        cantidadDeFotos: 14,
        metrosCuadrados: 483,
        precioDeVenta: 632556
    },
    {
        nombre: "Propiedad 139",
        direccion: "Calle 8, Valencia",
        fechaDePublicacion: "2024-06-27",
        cantidadDeFotos: 2,
        metrosCuadrados: 144,
        precioDeVenta: 762013
    },
    {
        nombre: "Propiedad 140",
        direccion: "Calle 2, Barcelona",
        fechaDePublicacion: "2024-06-28",
        cantidadDeFotos: 15,
        metrosCuadrados: 202,
        precioDeVenta: 825338
    },
    {
        nombre: "Propiedad 141",
        direccion: "Calle 82, Palma",
        fechaDePublicacion: "2024-06-23",
        cantidadDeFotos: 2,
        metrosCuadrados: 184,
        precioDeVenta: 750417
    },
    {
        nombre: "Propiedad 142",
        direccion: "Calle 47, Madrid",
        fechaDePublicacion: "2024-06-22",
        cantidadDeFotos: 6,
        metrosCuadrados: 474,
        precioDeVenta: 609042
    },
    {
        nombre: "Propiedad 143",
        direccion: "Calle 59, Sevilla",
        fechaDePublicacion: "2024-06-19",
        cantidadDeFotos: 10,
        metrosCuadrados: 97,
        precioDeVenta: 281874
    },
    {
        nombre: "Propiedad 144",
        direccion: "Calle 35, Málaga",
        fechaDePublicacion: "2024-06-10",
        cantidadDeFotos: 4,
        metrosCuadrados: 209,
        precioDeVenta: 70021
    },
    {
        nombre: "Propiedad 145",
        direccion: "Calle 82, Sevilla",
        fechaDePublicacion: "2024-06-25",
        cantidadDeFotos: 8,
        metrosCuadrados: 261,
        precioDeVenta: 894240
    },
    {
        nombre: "Propiedad 146",
        direccion: "Calle 5, Valencia",
        fechaDePublicacion: "2024-06-20",
        cantidadDeFotos: 5,
        metrosCuadrados: 90,
        precioDeVenta: 514205
    },
    {
        nombre: "Propiedad 147",
        direccion: "Calle 94, Sevilla",
        fechaDePublicacion: "2024-06-19",
        cantidadDeFotos: 16,
        metrosCuadrados: 68,
        precioDeVenta: 470503
    },
    {
        nombre: "Propiedad 148",
        direccion: "Calle 23, Bilbao",
        fechaDePublicacion: "2024-06-19",
        cantidadDeFotos: 15,
        metrosCuadrados: 73,
        precioDeVenta: 119219
    },
    {
        nombre: "Propiedad 149",
        direccion: "Calle 78, Las Palmas de Gran Canaria",
        fechaDePublicacion: "2024-06-17",
        cantidadDeFotos: 2,
        metrosCuadrados: 424,
        precioDeVenta: 594698
    },
    {
        nombre: "Propiedad 150",
        direccion: "Calle 54, Zaragoza",
        fechaDePublicacion: "2024-06-19",
        cantidadDeFotos: 4,
        metrosCuadrados: 320,
        precioDeVenta: 387368
    },
    {
        nombre: "Propiedad 151",
        direccion: "Calle 89, Valencia",
        fechaDePublicacion: "2024-06-13",
        cantidadDeFotos: 12,
        metrosCuadrados: 221,
        precioDeVenta: 296872
    },
    {
        nombre: "Propiedad 152",
        direccion: "Calle 76, Las Palmas de Gran Canaria",
        fechaDePublicacion: "2024-06-04",
        cantidadDeFotos: 7,
        metrosCuadrados: 472,
        precioDeVenta: 469373
    },
    {
        nombre: "Propiedad 153",
        direccion: "Calle 70, Palma",
        fechaDePublicacion: "2024-06-22",
        cantidadDeFotos: 9,
        metrosCuadrados: 227,
        precioDeVenta: 531711
    },
    {
        nombre: "Propiedad 154",
        direccion: "Calle 28, Barcelona",
        fechaDePublicacion: "2024-06-22",
        cantidadDeFotos: 18,
        metrosCuadrados: 408,
        precioDeVenta: 390131
    },
    {
        nombre: "Propiedad 155",
        direccion: "Calle 29, Barcelona",
        fechaDePublicacion: "2024-06-07",
        cantidadDeFotos: 7,
        metrosCuadrados: 298,
        precioDeVenta: 51035
    },
    {
        nombre: "Propiedad 156",
        direccion: "Calle 40, Barcelona",
        fechaDePublicacion: "2024-06-29",
        cantidadDeFotos: 11,
        metrosCuadrados: 270,
        precioDeVenta: 940646
    },
    {
        nombre: "Propiedad 157",
        direccion: "Calle 83, Valencia",
        fechaDePublicacion: "2024-06-03",
        cantidadDeFotos: 18,
        metrosCuadrados: 460,
        precioDeVenta: 296766
    },
    {
        nombre: "Propiedad 158",
        direccion: "Calle 78, Barcelona",
        fechaDePublicacion: "2024-06-15",
        cantidadDeFotos: 1,
        metrosCuadrados: 243,
        precioDeVenta: 837250
    },
    {
        nombre: "Propiedad 159",
        direccion: "Calle 1, Bilbao",
        fechaDePublicacion: "2024-06-03",
        cantidadDeFotos: 1,
        metrosCuadrados: 71,
        precioDeVenta: 659850
    },
    {
        nombre: "Propiedad 160",
        direccion: "Calle 65, Las Palmas de Gran Canaria",
        fechaDePublicacion: "2024-06-03",
        cantidadDeFotos: 6,
        metrosCuadrados: 187,
        precioDeVenta: 556735
    },
    {
        nombre: "Propiedad 161",
        direccion: "Calle 7, Murcia",
        fechaDePublicacion: "2024-06-29",
        cantidadDeFotos: 19,
        metrosCuadrados: 144,
        precioDeVenta: 321502
    },
    {
        nombre: "Propiedad 162",
        direccion: "Calle 68, Bilbao",
        fechaDePublicacion: "2024-06-09",
        cantidadDeFotos: 11,
        metrosCuadrados: 116,
        precioDeVenta: 781693
    },
    {
        nombre: "Propiedad 163",
        direccion: "Calle 15, Palma",
        fechaDePublicacion: "2024-06-02",
        cantidadDeFotos: 11,
        metrosCuadrados: 413,
        precioDeVenta: 927386
    },
    {
        nombre: "Propiedad 164",
        direccion: "Calle 74, Zaragoza",
        fechaDePublicacion: "2024-06-18",
        cantidadDeFotos: 3,
        metrosCuadrados: 438,
        precioDeVenta: 182028
    },
    {
        nombre: "Propiedad 165",
        direccion: "Calle 5, Palma",
        fechaDePublicacion: "2024-06-02",
        cantidadDeFotos: 1,
        metrosCuadrados: 78,
        precioDeVenta: 172039
    },
    {
        nombre: "Propiedad 166",
        direccion: "Calle 28, Madrid",
        fechaDePublicacion: "2024-06-15",
        cantidadDeFotos: 8,
        metrosCuadrados: 133,
        precioDeVenta: 359580
    },
    {
        nombre: "Propiedad 167",
        direccion: "Calle 81, Palma",
        fechaDePublicacion: "2024-06-09",
        cantidadDeFotos: 2,
        metrosCuadrados: 180,
        precioDeVenta: 321133
    },
    {
        nombre: "Propiedad 168",
        direccion: "Calle 27, Barcelona",
        fechaDePublicacion: "2024-06-06",
        cantidadDeFotos: 20,
        metrosCuadrados: 299,
        precioDeVenta: 520708
    },
    {
        nombre: "Propiedad 169",
        direccion: "Calle 5, Barcelona",
        fechaDePublicacion: "2024-06-21",
        cantidadDeFotos: 8,
        metrosCuadrados: 254,
        precioDeVenta: 857080
    },
    {
        nombre: "Propiedad 170",
        direccion: "Calle 9, Madrid",
        fechaDePublicacion: "2024-06-17",
        cantidadDeFotos: 8,
        metrosCuadrados: 229,
        precioDeVenta: 397904
    },
    {
        nombre: "Propiedad 171",
        direccion: "Calle 33, Palma",
        fechaDePublicacion: "2024-06-20",
        cantidadDeFotos: 1,
        metrosCuadrados: 131,
        precioDeVenta: 523675
    },
    {
        nombre: "Propiedad 172",
        direccion: "Calle 34, Palma",
        fechaDePublicacion: "2024-06-06",
        cantidadDeFotos: 1,
        metrosCuadrados: 402,
        precioDeVenta: 775199
    },
    {
        nombre: "Propiedad 173",
        direccion: "Calle 46, Palma",
        fechaDePublicacion: "2024-06-10",
        cantidadDeFotos: 18,
        metrosCuadrados: 299,
        precioDeVenta: 122558
    },
    {
        nombre: "Propiedad 174",
        direccion: "Calle 11, Las Palmas de Gran Canaria",
        fechaDePublicacion: "2024-06-07",
        cantidadDeFotos: 13,
        metrosCuadrados: 129,
        precioDeVenta: 374413
    },
    {
        nombre: "Propiedad 175",
        direccion: "Calle 31, Las Palmas de Gran Canaria",
        fechaDePublicacion: "2024-06-20",
        cantidadDeFotos: 15,
        metrosCuadrados: 83,
        precioDeVenta: 511919
    },
    {
        nombre: "Propiedad 176",
        direccion: "Calle 76, Las Palmas de Gran Canaria",
        fechaDePublicacion: "2024-06-04",
        cantidadDeFotos: 8,
        metrosCuadrados: 471,
        precioDeVenta: 321557
    },
    {
        nombre: "Propiedad 177",
        direccion: "Calle 31, Valencia",
        fechaDePublicacion: "2024-06-02",
        cantidadDeFotos: 4,
        metrosCuadrados: 321,
        precioDeVenta: 126366
    },
    {
        nombre: "Propiedad 178",
        direccion: "Calle 8, Sevilla",
        fechaDePublicacion: "2024-06-04",
        cantidadDeFotos: 19,
        metrosCuadrados: 446,
        precioDeVenta: 564125
    },
    {
        nombre: "Propiedad 179",
        direccion: "Calle 90, Málaga",
        fechaDePublicacion: "2024-06-06",
        cantidadDeFotos: 19,
        metrosCuadrados: 330,
        precioDeVenta: 336712
    },
    {
        nombre: "Propiedad 180",
        direccion: "Calle 3, Palma",
        fechaDePublicacion: "2024-06-09",
        cantidadDeFotos: 15,
        metrosCuadrados: 160,
        precioDeVenta: 969062
    },
    {
        nombre: "Propiedad 181",
        direccion: "Calle 72, Valencia",
        fechaDePublicacion: "2024-06-11",
        cantidadDeFotos: 5,
        metrosCuadrados: 138,
        precioDeVenta: 87255
    },
    {
        nombre: "Propiedad 182",
        direccion: "Calle 68, Barcelona",
        fechaDePublicacion: "2024-06-05",
        cantidadDeFotos: 15,
        metrosCuadrados: 472,
        precioDeVenta: 687210
    },
    {
        nombre: "Propiedad 183",
        direccion: "Calle 84, Las Palmas de Gran Canaria",
        fechaDePublicacion: "2024-06-20",
        cantidadDeFotos: 4,
        metrosCuadrados: 408,
        precioDeVenta: 538621
    },
    {
        nombre: "Propiedad 184",
        direccion: "Calle 93, Barcelona",
        fechaDePublicacion: "2024-06-25",
        cantidadDeFotos: 1,
        metrosCuadrados: 291,
        precioDeVenta: 764353
    },
    {
        nombre: "Propiedad 185",
        direccion: "Calle 78, Zaragoza",
        fechaDePublicacion: "2024-06-14",
        cantidadDeFotos: 13,
        metrosCuadrados: 393,
        precioDeVenta: 702190
    },
    {
        nombre: "Propiedad 186",
        direccion: "Calle 72, Valencia",
        fechaDePublicacion: "2024-06-01",
        cantidadDeFotos: 20,
        metrosCuadrados: 377,
        precioDeVenta: 720666
    },
    {
        nombre: "Propiedad 187",
        direccion: "Calle 16, Valencia",
        fechaDePublicacion: "2024-06-20",
        cantidadDeFotos: 1,
        metrosCuadrados: 330,
        precioDeVenta: 744042
    },
    {
        nombre: "Propiedad 188",
        direccion: "Calle 54, Barcelona",
        fechaDePublicacion: "2024-06-08",
        cantidadDeFotos: 20,
        metrosCuadrados: 292,
        precioDeVenta: 588706
    },
    {
        nombre: "Propiedad 189",
        direccion: "Calle 88, Las Palmas de Gran Canaria",
        fechaDePublicacion: "2024-06-12",
        cantidadDeFotos: 1,
        metrosCuadrados: 432,
        precioDeVenta: 287894
    },
    {
        nombre: "Propiedad 190",
        direccion: "Calle 88, Murcia",
        fechaDePublicacion: "2024-06-17",
        cantidadDeFotos: 15,
        metrosCuadrados: 213,
        precioDeVenta: 538039
    },
    {
        nombre: "Propiedad 191",
        direccion: "Calle 95, Bilbao",
        fechaDePublicacion: "2024-06-03",
        cantidadDeFotos: 19,
        metrosCuadrados: 374,
        precioDeVenta: 552506
    },
    {
        nombre: "Propiedad 192",
        direccion: "Calle 64, Madrid",
        fechaDePublicacion: "2024-06-15",
        cantidadDeFotos: 8,
        metrosCuadrados: 142,
        precioDeVenta: 588313
    },
    {
        nombre: "Propiedad 193",
        direccion: "Calle 75, Madrid",
        fechaDePublicacion: "2024-06-27",
        cantidadDeFotos: 14,
        metrosCuadrados: 364,
        precioDeVenta: 64139
    },
    {
        nombre: "Propiedad 194",
        direccion: "Calle 72, Sevilla",
        fechaDePublicacion: "2024-06-04",
        cantidadDeFotos: 10,
        metrosCuadrados: 201,
        precioDeVenta: 430802
    },
    {
        nombre: "Propiedad 195",
        direccion: "Calle 96, Sevilla",
        fechaDePublicacion: "2024-06-24",
        cantidadDeFotos: 9,
        metrosCuadrados: 88,
        precioDeVenta: 966862
    },
    {
        nombre: "Propiedad 196",
        direccion: "Calle 14, Barcelona",
        fechaDePublicacion: "2024-06-14",
        cantidadDeFotos: 1,
        metrosCuadrados: 487,
        precioDeVenta: 248855
    },
    {
        nombre: "Propiedad 197",
        direccion: "Calle 1, Valencia",
        fechaDePublicacion: "2024-06-10",
        cantidadDeFotos: 1,
        metrosCuadrados: 241,
        precioDeVenta: 165092
    },
    {
        nombre: "Propiedad 198",
        direccion: "Calle 17, Madrid",
        fechaDePublicacion: "2024-06-10",
        cantidadDeFotos: 8,
        metrosCuadrados: 108,
        precioDeVenta: 768201
    },
    {
        nombre: "Propiedad 199",
        direccion: "Calle 27, Madrid",
        fechaDePublicacion: "2024-06-18",
        cantidadDeFotos: 7,
        metrosCuadrados: 122,
        precioDeVenta: 121958
    },
    {
        nombre: "Propiedad 200",
        direccion: "Calle 84, Valencia",
        fechaDePublicacion: "2024-06-03",
        cantidadDeFotos: 17,
        metrosCuadrados: 462,
        precioDeVenta: 72987
    },
    {
        nombre: "Propiedad 201",
        direccion: "Calle 90, Las Palmas de Gran Canaria",
        fechaDePublicacion: "2024-06-03",
        cantidadDeFotos: 15,
        metrosCuadrados: 299,
        precioDeVenta: 191112
    },
    {
        nombre: "Propiedad 202",
        direccion: "Calle 24, Las Palmas de Gran Canaria",
        fechaDePublicacion: "2024-06-06",
        cantidadDeFotos: 14,
        metrosCuadrados: 286,
        precioDeVenta: 886545
    },
    {
        nombre: "Propiedad 203",
        direccion: "Calle 21, Palma",
        fechaDePublicacion: "2024-06-19",
        cantidadDeFotos: 11,
        metrosCuadrados: 160,
        precioDeVenta: 506700
    },
    {
        nombre: "Propiedad 204",
        direccion: "Calle 33, Valencia",
        fechaDePublicacion: "2024-06-04",
        cantidadDeFotos: 15,
        metrosCuadrados: 240,
        precioDeVenta: 697360
    },
    {
        nombre: "Propiedad 205",
        direccion: "Calle 98, Málaga",
        fechaDePublicacion: "2024-06-07",
        cantidadDeFotos: 8,
        metrosCuadrados: 104,
        precioDeVenta: 375081
    },
    {
        nombre: "Propiedad 206",
        direccion: "Calle 54, Barcelona",
        fechaDePublicacion: "2024-06-24",
        cantidadDeFotos: 2,
        metrosCuadrados: 237,
        precioDeVenta: 939371
    },
    {
        nombre: "Propiedad 207",
        direccion: "Calle 60, Málaga",
        fechaDePublicacion: "2024-06-06",
        cantidadDeFotos: 13,
        metrosCuadrados: 379,
        precioDeVenta: 498294
    },
    {
        nombre: "Propiedad 208",
        direccion: "Calle 40, Palma",
        fechaDePublicacion: "2024-06-10",
        cantidadDeFotos: 5,
        metrosCuadrados: 332,
        precioDeVenta: 162886
    },
    {
        nombre: "Propiedad 209",
        direccion: "Calle 94, Las Palmas de Gran Canaria",
        fechaDePublicacion: "2024-06-21",
        cantidadDeFotos: 3,
        metrosCuadrados: 285,
        precioDeVenta: 955275
    },
    {
        nombre: "Propiedad 210",
        direccion: "Calle 80, Bilbao",
        fechaDePublicacion: "2024-06-18",
        cantidadDeFotos: 3,
        metrosCuadrados: 85,
        precioDeVenta: 855211
    },
    {
        nombre: "Propiedad 211",
        direccion: "Calle 29, Palma",
        fechaDePublicacion: "2024-06-18",
        cantidadDeFotos: 17,
        metrosCuadrados: 224,
        precioDeVenta: 763826
    },
    {
        nombre: "Propiedad 212",
        direccion: "Calle 26, Bilbao",
        fechaDePublicacion: "2024-06-24",
        cantidadDeFotos: 2,
        metrosCuadrados: 457,
        precioDeVenta: 339112
    },
    {
        nombre: "Propiedad 213",
        direccion: "Calle 36, Bilbao",
        fechaDePublicacion: "2024-06-20",
        cantidadDeFotos: 9,
        metrosCuadrados: 339,
        precioDeVenta: 859661
    },
    {
        nombre: "Propiedad 214",
        direccion: "Calle 51, Las Palmas de Gran Canaria",
        fechaDePublicacion: "2024-06-12",
        cantidadDeFotos: 2,
        metrosCuadrados: 90,
        precioDeVenta: 415628
    },
    {
        nombre: "Propiedad 215",
        direccion: "Calle 40, Madrid",
        fechaDePublicacion: "2024-06-28",
        cantidadDeFotos: 3,
        metrosCuadrados: 422,
        precioDeVenta: 789593
    },
    {
        nombre: "Propiedad 216",
        direccion: "Calle 94, Málaga",
        fechaDePublicacion: "2024-06-23",
        cantidadDeFotos: 14,
        metrosCuadrados: 429,
        precioDeVenta: 121485
    },
    {
        nombre: "Propiedad 217",
        direccion: "Calle 52, Murcia",
        fechaDePublicacion: "2024-06-06",
        cantidadDeFotos: 2,
        metrosCuadrados: 405,
        precioDeVenta: 914623
    },
    {
        nombre: "Propiedad 218",
        direccion: "Calle 98, Sevilla",
        fechaDePublicacion: "2024-06-11",
        cantidadDeFotos: 8,
        metrosCuadrados: 354,
        precioDeVenta: 183695
    },
    {
        nombre: "Propiedad 219",
        direccion: "Calle 5, Barcelona",
        fechaDePublicacion: "2024-06-18",
        cantidadDeFotos: 19,
        metrosCuadrados: 397,
        precioDeVenta: 635706
    },
    {
        nombre: "Propiedad 220",
        direccion: "Calle 97, Palma",
        fechaDePublicacion: "2024-06-16",
        cantidadDeFotos: 13,
        metrosCuadrados: 308,
        precioDeVenta: 183249
    },
    {
        nombre: "Propiedad 221",
        direccion: "Calle 3, Murcia",
        fechaDePublicacion: "2024-06-23",
        cantidadDeFotos: 18,
        metrosCuadrados: 346,
        precioDeVenta: 182636
    },
    {
        nombre: "Propiedad 222",
        direccion: "Calle 65, Palma",
        fechaDePublicacion: "2024-06-08",
        cantidadDeFotos: 14,
        metrosCuadrados: 179,
        precioDeVenta: 863023
    },
    {
        nombre: "Propiedad 223",
        direccion: "Calle 18, Madrid",
        fechaDePublicacion: "2024-06-01",
        cantidadDeFotos: 10,
        metrosCuadrados: 256,
        precioDeVenta: 524242
    },
    {
        nombre: "Propiedad 224",
        direccion: "Calle 25, Las Palmas de Gran Canaria",
        fechaDePublicacion: "2024-06-03",
        cantidadDeFotos: 16,
        metrosCuadrados: 424,
        precioDeVenta: 145782
    },
    {
        nombre: "Propiedad 225",
        direccion: "Calle 76, Bilbao",
        fechaDePublicacion: "2024-06-06",
        cantidadDeFotos: 5,
        metrosCuadrados: 407,
        precioDeVenta: 625904
    },
    {
        nombre: "Propiedad 226",
        direccion: "Calle 78, Málaga",
        fechaDePublicacion: "2024-06-28",
        cantidadDeFotos: 6,
        metrosCuadrados: 80,
        precioDeVenta: 95104
    },
    {
        nombre: "Propiedad 227",
        direccion: "Calle 55, Bilbao",
        fechaDePublicacion: "2024-06-29",
        cantidadDeFotos: 15,
        metrosCuadrados: 416,
        precioDeVenta: 604941
    },
    {
        nombre: "Propiedad 228",
        direccion: "Calle 46, Madrid",
        fechaDePublicacion: "2024-06-22",
        cantidadDeFotos: 15,
        metrosCuadrados: 411,
        precioDeVenta: 482969
    },
    {
        nombre: "Propiedad 229",
        direccion: "Calle 28, Palma",
        fechaDePublicacion: "2024-06-23",
        cantidadDeFotos: 2,
        metrosCuadrados: 207,
        precioDeVenta: 230427
    },
    {
        nombre: "Propiedad 230",
        direccion: "Calle 75, Sevilla",
        fechaDePublicacion: "2024-06-10",
        cantidadDeFotos: 1,
        metrosCuadrados: 59,
        precioDeVenta: 554122
    },
    {
        nombre: "Propiedad 231",
        direccion: "Calle 7, Bilbao",
        fechaDePublicacion: "2024-06-21",
        cantidadDeFotos: 2,
        metrosCuadrados: 401,
        precioDeVenta: 104703
    },
    {
        nombre: "Propiedad 232",
        direccion: "Calle 96, Madrid",
        fechaDePublicacion: "2024-06-27",
        cantidadDeFotos: 17,
        metrosCuadrados: 452,
        precioDeVenta: 194175
    },
    {
        nombre: "Propiedad 233",
        direccion: "Calle 22, Palma",
        fechaDePublicacion: "2024-06-01",
        cantidadDeFotos: 20,
        metrosCuadrados: 200,
        precioDeVenta: 671860
    },
    {
        nombre: "Propiedad 234",
        direccion: "Calle 36, Valencia",
        fechaDePublicacion: "2024-06-09",
        cantidadDeFotos: 13,
        metrosCuadrados: 350,
        precioDeVenta: 598964
    },
    {
        nombre: "Propiedad 235",
        direccion: "Calle 14, Barcelona",
        fechaDePublicacion: "2024-06-06",
        cantidadDeFotos: 7,
        metrosCuadrados: 480,
        precioDeVenta: 294363
    },
    {
        nombre: "Propiedad 236",
        direccion: "Calle 99, Palma",
        fechaDePublicacion: "2024-06-13",
        cantidadDeFotos: 14,
        metrosCuadrados: 130,
        precioDeVenta: 306417
    },
    {
        nombre: "Propiedad 237",
        direccion: "Calle 80, Málaga",
        fechaDePublicacion: "2024-06-03",
        cantidadDeFotos: 9,
        metrosCuadrados: 432,
        precioDeVenta: 561604
    },
    {
        nombre: "Propiedad 238",
        direccion: "Calle 77, Madrid",
        fechaDePublicacion: "2024-06-28",
        cantidadDeFotos: 4,
        metrosCuadrados: 295,
        precioDeVenta: 298965
    },
    {
        nombre: "Propiedad 239",
        direccion: "Calle 24, Bilbao",
        fechaDePublicacion: "2024-06-10",
        cantidadDeFotos: 10,
        metrosCuadrados: 393,
        precioDeVenta: 786172
    },
    {
        nombre: "Propiedad 240",
        direccion: "Calle 89, Las Palmas de Gran Canaria",
        fechaDePublicacion: "2024-06-15",
        cantidadDeFotos: 5,
        metrosCuadrados: 451,
        precioDeVenta: 961336
    },
    {
        nombre: "Propiedad 241",
        direccion: "Calle 62, Zaragoza",
        fechaDePublicacion: "2024-06-20",
        cantidadDeFotos: 3,
        metrosCuadrados: 239,
        precioDeVenta: 391405
    },
    {
        nombre: "Propiedad 242",
        direccion: "Calle 42, Bilbao",
        fechaDePublicacion: "2024-06-10",
        cantidadDeFotos: 7,
        metrosCuadrados: 151,
        precioDeVenta: 135697
    },
    {
        nombre: "Propiedad 243",
        direccion: "Calle 22, Zaragoza",
        fechaDePublicacion: "2024-06-09",
        cantidadDeFotos: 20,
        metrosCuadrados: 64,
        precioDeVenta: 999569
    },
    {
        nombre: "Propiedad 244",
        direccion: "Calle 29, Barcelona",
        fechaDePublicacion: "2024-06-03",
        cantidadDeFotos: 1,
        metrosCuadrados: 159,
        precioDeVenta: 871805
    },
    {
        nombre: "Propiedad 245",
        direccion: "Calle 72, Valencia",
        fechaDePublicacion: "2024-06-28",
        cantidadDeFotos: 14,
        metrosCuadrados: 234,
        precioDeVenta: 331948
    },
    {
        nombre: "Propiedad 246",
        direccion: "Calle 95, Murcia",
        fechaDePublicacion: "2024-06-09",
        cantidadDeFotos: 18,
        metrosCuadrados: 117,
        precioDeVenta: 813949
    },
    {
        nombre: "Propiedad 247",
        direccion: "Calle 41, Barcelona",
        fechaDePublicacion: "2024-06-03",
        cantidadDeFotos: 13,
        metrosCuadrados: 326,
        precioDeVenta: 765882
    },
    {
        nombre: "Propiedad 248",
        direccion: "Calle 81, Murcia",
        fechaDePublicacion: "2024-06-20",
        cantidadDeFotos: 7,
        metrosCuadrados: 471,
        precioDeVenta: 819737
    },
    {
        nombre: "Propiedad 249",
        direccion: "Calle 50, Madrid",
        fechaDePublicacion: "2024-06-09",
        cantidadDeFotos: 5,
        metrosCuadrados: 185,
        precioDeVenta: 742581
    },
    {
        nombre: "Propiedad 250",
        direccion: "Calle 3, Palma",
        fechaDePublicacion: "2024-06-16",
        cantidadDeFotos: 8,
        metrosCuadrados: 128,
        precioDeVenta: 574622
    },
    {
        nombre: "Propiedad 251",
        direccion: "Calle 74, Valencia",
        fechaDePublicacion: "2024-06-27",
        cantidadDeFotos: 4,
        metrosCuadrados: 58,
        precioDeVenta: 445509
    },
    {
        nombre: "Propiedad 252",
        direccion: "Calle 96, Madrid",
        fechaDePublicacion: "2024-06-23",
        cantidadDeFotos: 18,
        metrosCuadrados: 133,
        precioDeVenta: 882774
    },
    {
        nombre: "Propiedad 253",
        direccion: "Calle 60, Murcia",
        fechaDePublicacion: "2024-06-21",
        cantidadDeFotos: 6,
        metrosCuadrados: 323,
        precioDeVenta: 834971
    },
    {
        nombre: "Propiedad 254",
        direccion: "Calle 34, Palma",
        fechaDePublicacion: "2024-06-21",
        cantidadDeFotos: 4,
        metrosCuadrados: 65,
        precioDeVenta: 208819
    },
    {
        nombre: "Propiedad 255",
        direccion: "Calle 95, Madrid",
        fechaDePublicacion: "2024-06-24",
        cantidadDeFotos: 5,
        metrosCuadrados: 426,
        precioDeVenta: 210739
    },
    {
        nombre: "Propiedad 256",
        direccion: "Calle 49, Valencia",
        fechaDePublicacion: "2024-06-15",
        cantidadDeFotos: 13,
        metrosCuadrados: 327,
        precioDeVenta: 394782
    },
    {
        nombre: "Propiedad 257",
        direccion: "Calle 82, Murcia",
        fechaDePublicacion: "2024-06-09",
        cantidadDeFotos: 3,
        metrosCuadrados: 324,
        precioDeVenta: 488802
    },
    {
        nombre: "Propiedad 258",
        direccion: "Calle 46, Sevilla",
        fechaDePublicacion: "2024-06-28",
        cantidadDeFotos: 4,
        metrosCuadrados: 127,
        precioDeVenta: 529101
    },
    {
        nombre: "Propiedad 259",
        direccion: "Calle 81, Málaga",
        fechaDePublicacion: "2024-06-10",
        cantidadDeFotos: 2,
        metrosCuadrados: 80,
        precioDeVenta: 593499
    },
    {
        nombre: "Propiedad 260",
        direccion: "Calle 52, Zaragoza",
        fechaDePublicacion: "2024-06-22",
        cantidadDeFotos: 15,
        metrosCuadrados: 354,
        precioDeVenta: 228142
    },
    {
        nombre: "Propiedad 261",
        direccion: "Calle 52, Valencia",
        fechaDePublicacion: "2024-06-02",
        cantidadDeFotos: 11,
        metrosCuadrados: 90,
        precioDeVenta: 886548
    },
    {
        nombre: "Propiedad 262",
        direccion: "Calle 3, Barcelona",
        fechaDePublicacion: "2024-06-20",
        cantidadDeFotos: 6,
        metrosCuadrados: 409,
        precioDeVenta: 780450
    },
    {
        nombre: "Propiedad 263",
        direccion: "Calle 65, Barcelona",
        fechaDePublicacion: "2024-06-17",
        cantidadDeFotos: 19,
        metrosCuadrados: 381,
        precioDeVenta: 247064
    },
    {
        nombre: "Propiedad 264",
        direccion: "Calle 53, Las Palmas de Gran Canaria",
        fechaDePublicacion: "2024-06-12",
        cantidadDeFotos: 20,
        metrosCuadrados: 329,
        precioDeVenta: 198792
    },
    {
        nombre: "Propiedad 265",
        direccion: "Calle 55, Palma",
        fechaDePublicacion: "2024-06-19",
        cantidadDeFotos: 15,
        metrosCuadrados: 225,
        precioDeVenta: 253240
    },
    {
        nombre: "Propiedad 266",
        direccion: "Calle 31, Madrid",
        fechaDePublicacion: "2024-06-05",
        cantidadDeFotos: 14,
        metrosCuadrados: 304,
        precioDeVenta: 394749
    },
    {
        nombre: "Propiedad 267",
        direccion: "Calle 91, Murcia",
        fechaDePublicacion: "2024-06-14",
        cantidadDeFotos: 8,
        metrosCuadrados: 73,
        precioDeVenta: 738274
    },
    {
        nombre: "Propiedad 268",
        direccion: "Calle 40, Valencia",
        fechaDePublicacion: "2024-06-20",
        cantidadDeFotos: 10,
        metrosCuadrados: 205,
        precioDeVenta: 250832
    },
    {
        nombre: "Propiedad 269",
        direccion: "Calle 15, Zaragoza",
        fechaDePublicacion: "2024-06-14",
        cantidadDeFotos: 6,
        metrosCuadrados: 481,
        precioDeVenta: 82193
    },
    {
        nombre: "Propiedad 270",
        direccion: "Calle 39, Zaragoza",
        fechaDePublicacion: "2024-06-13",
        cantidadDeFotos: 6,
        metrosCuadrados: 170,
        precioDeVenta: 405912
    },
    {
        nombre: "Propiedad 271",
        direccion: "Calle 38, Sevilla",
        fechaDePublicacion: "2024-06-06",
        cantidadDeFotos: 20,
        metrosCuadrados: 353,
        precioDeVenta: 937929
    },
    {
        nombre: "Propiedad 272",
        direccion: "Calle 39, Palma",
        fechaDePublicacion: "2024-06-06",
        cantidadDeFotos: 20,
        metrosCuadrados: 470,
        precioDeVenta: 722377
    },
    {
        nombre: "Propiedad 273",
        direccion: "Calle 47, Málaga",
        fechaDePublicacion: "2024-06-14",
        cantidadDeFotos: 15,
        metrosCuadrados: 464,
        precioDeVenta: 993325
    },
    {
        nombre: "Propiedad 274",
        direccion: "Calle 76, Las Palmas de Gran Canaria",
        fechaDePublicacion: "2024-06-14",
        cantidadDeFotos: 7,
        metrosCuadrados: 69,
        precioDeVenta: 466687
    },
    {
        nombre: "Propiedad 275",
        direccion: "Calle 35, Valencia",
        fechaDePublicacion: "2024-06-27",
        cantidadDeFotos: 12,
        metrosCuadrados: 212,
        precioDeVenta: 905339
    },
    {
        nombre: "Propiedad 276",
        direccion: "Calle 48, Barcelona",
        fechaDePublicacion: "2024-06-05",
        cantidadDeFotos: 2,
        metrosCuadrados: 329,
        precioDeVenta: 689137
    },
    {
        nombre: "Propiedad 277",
        direccion: "Calle 23, Palma",
        fechaDePublicacion: "2024-06-07",
        cantidadDeFotos: 5,
        metrosCuadrados: 271,
        precioDeVenta: 307872
    },
    {
        nombre: "Propiedad 278",
        direccion: "Calle 46, Las Palmas de Gran Canaria",
        fechaDePublicacion: "2024-06-24",
        cantidadDeFotos: 6,
        metrosCuadrados: 489,
        precioDeVenta: 157942
    },
    {
        nombre: "Propiedad 279",
        direccion: "Calle 2, Málaga",
        fechaDePublicacion: "2024-06-03",
        cantidadDeFotos: 18,
        metrosCuadrados: 235,
        precioDeVenta: 272961
    },
    {
        nombre: "Propiedad 280",
        direccion: "Calle 44, Sevilla",
        fechaDePublicacion: "2024-06-02",
        cantidadDeFotos: 14,
        metrosCuadrados: 97,
        precioDeVenta: 273973
    },
    {
        nombre: "Propiedad 281",
        direccion: "Calle 49, Madrid",
        fechaDePublicacion: "2024-06-04",
        cantidadDeFotos: 18,
        metrosCuadrados: 266,
        precioDeVenta: 218968
    },
    {
        nombre: "Propiedad 282",
        direccion: "Calle 23, Las Palmas de Gran Canaria",
        fechaDePublicacion: "2024-06-20",
        cantidadDeFotos: 19,
        metrosCuadrados: 252,
        precioDeVenta: 960829
    },
    {
        nombre: "Propiedad 283",
        direccion: "Calle 53, Madrid",
        fechaDePublicacion: "2024-06-20",
        cantidadDeFotos: 20,
        metrosCuadrados: 377,
        precioDeVenta: 280257
    },
    {
        nombre: "Propiedad 284",
        direccion: "Calle 96, Las Palmas de Gran Canaria",
        fechaDePublicacion: "2024-06-17",
        cantidadDeFotos: 8,
        metrosCuadrados: 346,
        precioDeVenta: 213796
    },
    {
        nombre: "Propiedad 285",
        direccion: "Calle 97, Bilbao",
        fechaDePublicacion: "2024-06-27",
        cantidadDeFotos: 13,
        metrosCuadrados: 255,
        precioDeVenta: 963310
    },
    {
        nombre: "Propiedad 286",
        direccion: "Calle 24, Valencia",
        fechaDePublicacion: "2024-06-07",
        cantidadDeFotos: 6,
        metrosCuadrados: 325,
        precioDeVenta: 934803
    },
    {
        nombre: "Propiedad 287",
        direccion: "Calle 29, Barcelona",
        fechaDePublicacion: "2024-06-26",
        cantidadDeFotos: 20,
        metrosCuadrados: 129,
        precioDeVenta: 770670
    },
    {
        nombre: "Propiedad 288",
        direccion: "Calle 45, Las Palmas de Gran Canaria",
        fechaDePublicacion: "2024-06-25",
        cantidadDeFotos: 16,
        metrosCuadrados: 495,
        precioDeVenta: 364577
    },
    {
        nombre: "Propiedad 289",
        direccion: "Calle 97, Sevilla",
        fechaDePublicacion: "2024-06-29",
        cantidadDeFotos: 15,
        metrosCuadrados: 72,
        precioDeVenta: 274478
    },
    {
        nombre: "Propiedad 290",
        direccion: "Calle 89, Barcelona",
        fechaDePublicacion: "2024-06-24",
        cantidadDeFotos: 8,
        metrosCuadrados: 77,
        precioDeVenta: 747126
    },
    {
        nombre: "Propiedad 291",
        direccion: "Calle 54, Murcia",
        fechaDePublicacion: "2024-06-05",
        cantidadDeFotos: 2,
        metrosCuadrados: 299,
        precioDeVenta: 595056
    },
    {
        nombre: "Propiedad 292",
        direccion: "Calle 17, Las Palmas de Gran Canaria",
        fechaDePublicacion: "2024-06-05",
        cantidadDeFotos: 1,
        metrosCuadrados: 421,
        precioDeVenta: 716650
    },
    {
        nombre: "Propiedad 293",
        direccion: "Calle 66, Murcia",
        fechaDePublicacion: "2024-06-02",
        cantidadDeFotos: 6,
        metrosCuadrados: 175,
        precioDeVenta: 321524
    },
    {
        nombre: "Propiedad 294",
        direccion: "Calle 15, Valencia",
        fechaDePublicacion: "2024-06-26",
        cantidadDeFotos: 11,
        metrosCuadrados: 223,
        precioDeVenta: 696476
    },
    {
        nombre: "Propiedad 295",
        direccion: "Calle 46, Madrid",
        fechaDePublicacion: "2024-06-14",
        cantidadDeFotos: 14,
        metrosCuadrados: 86,
        precioDeVenta: 666162
    },
    {
        nombre: "Propiedad 296",
        direccion: "Calle 98, Sevilla",
        fechaDePublicacion: "2024-06-21",
        cantidadDeFotos: 3,
        metrosCuadrados: 341,
        precioDeVenta: 809279
    },
    {
        nombre: "Propiedad 297",
        direccion: "Calle 35, Palma",
        fechaDePublicacion: "2024-06-04",
        cantidadDeFotos: 6,
        metrosCuadrados: 181,
        precioDeVenta: 982710
    },
    {
        nombre: "Propiedad 298",
        direccion: "Calle 54, Sevilla",
        fechaDePublicacion: "2024-06-24",
        cantidadDeFotos: 6,
        metrosCuadrados: 360,
        precioDeVenta: 53868
    },
    {
        nombre: "Propiedad 299",
        direccion: "Calle 37, Sevilla",
        fechaDePublicacion: "2024-06-27",
        cantidadDeFotos: 12,
        metrosCuadrados: 274,
        precioDeVenta: 293911
    },
    {
        nombre: "Propiedad 300",
        direccion: "Calle 86, Valencia",
        fechaDePublicacion: "2024-06-10",
        cantidadDeFotos: 9,
        metrosCuadrados: 89,
        precioDeVenta: 478396
    },
    {
        nombre: "Propiedad 301",
        direccion: "Calle 74, Sevilla",
        fechaDePublicacion: "2024-06-24",
        cantidadDeFotos: 1,
        metrosCuadrados: 102,
        precioDeVenta: 717109
    },
    {
        nombre: "Propiedad 302",
        direccion: "Calle 35, Zaragoza",
        fechaDePublicacion: "2024-06-17",
        cantidadDeFotos: 11,
        metrosCuadrados: 437,
        precioDeVenta: 242194
    },
    {
        nombre: "Propiedad 303",
        direccion: "Calle 5, Barcelona",
        fechaDePublicacion: "2024-06-06",
        cantidadDeFotos: 12,
        metrosCuadrados: 190,
        precioDeVenta: 554201
    },
    {
        nombre: "Propiedad 304",
        direccion: "Calle 29, Valencia",
        fechaDePublicacion: "2024-06-24",
        cantidadDeFotos: 13,
        metrosCuadrados: 392,
        precioDeVenta: 293859
    },
    {
        nombre: "Propiedad 305",
        direccion: "Calle 67, Valencia",
        fechaDePublicacion: "2024-06-28",
        cantidadDeFotos: 2,
        metrosCuadrados: 263,
        precioDeVenta: 483928
    },
    {
        nombre: "Propiedad 306",
        direccion: "Calle 53, Bilbao",
        fechaDePublicacion: "2024-06-04",
        cantidadDeFotos: 1,
        metrosCuadrados: 317,
        precioDeVenta: 198950
    },
    {
        nombre: "Propiedad 307",
        direccion: "Calle 50, Las Palmas de Gran Canaria",
        fechaDePublicacion: "2024-06-17",
        cantidadDeFotos: 13,
        metrosCuadrados: 228,
        precioDeVenta: 870936
    },
    {
        nombre: "Propiedad 308",
        direccion: "Calle 88, Murcia",
        fechaDePublicacion: "2024-06-22",
        cantidadDeFotos: 8,
        metrosCuadrados: 198,
        precioDeVenta: 95803
    },
    {
        nombre: "Propiedad 309",
        direccion: "Calle 96, Madrid",
        fechaDePublicacion: "2024-06-02",
        cantidadDeFotos: 20,
        metrosCuadrados: 426,
        precioDeVenta: 456301
    },
    {
        nombre: "Propiedad 310",
        direccion: "Calle 45, Murcia",
        fechaDePublicacion: "2024-06-05",
        cantidadDeFotos: 9,
        metrosCuadrados: 493,
        precioDeVenta: 311988
    },
    {
        nombre: "Propiedad 311",
        direccion: "Calle 82, Valencia",
        fechaDePublicacion: "2024-06-01",
        cantidadDeFotos: 4,
        metrosCuadrados: 368,
        precioDeVenta: 988771
    },
    {
        nombre: "Propiedad 312",
        direccion: "Calle 4, Bilbao",
        fechaDePublicacion: "2024-06-04",
        cantidadDeFotos: 1,
        metrosCuadrados: 73,
        precioDeVenta: 681228
    },
    {
        nombre: "Propiedad 313",
        direccion: "Calle 36, Las Palmas de Gran Canaria",
        fechaDePublicacion: "2024-06-21",
        cantidadDeFotos: 5,
        metrosCuadrados: 123,
        precioDeVenta: 168371
    },
    {
        nombre: "Propiedad 314",
        direccion: "Calle 10, Zaragoza",
        fechaDePublicacion: "2024-06-22",
        cantidadDeFotos: 13,
        metrosCuadrados: 417,
        precioDeVenta: 732719
    },
    {
        nombre: "Propiedad 315",
        direccion: "Calle 76, Sevilla",
        fechaDePublicacion: "2024-06-07",
        cantidadDeFotos: 6,
        metrosCuadrados: 66,
        precioDeVenta: 257418
    },
    {
        nombre: "Propiedad 316",
        direccion: "Calle 33, Zaragoza",
        fechaDePublicacion: "2024-06-02",
        cantidadDeFotos: 16,
        metrosCuadrados: 112,
        precioDeVenta: 505234
    },
    {
        nombre: "Propiedad 317",
        direccion: "Calle 69, Palma",
        fechaDePublicacion: "2024-06-02",
        cantidadDeFotos: 18,
        metrosCuadrados: 132,
        precioDeVenta: 462352
    },
    {
        nombre: "Propiedad 318",
        direccion: "Calle 99, Málaga",
        fechaDePublicacion: "2024-06-16",
        cantidadDeFotos: 14,
        metrosCuadrados: 249,
        precioDeVenta: 447486
    },
    {
        nombre: "Propiedad 319",
        direccion: "Calle 71, Palma",
        fechaDePublicacion: "2024-06-10",
        cantidadDeFotos: 10,
        metrosCuadrados: 332,
        precioDeVenta: 174401
    },
    {
        nombre: "Propiedad 320",
        direccion: "Calle 29, Zaragoza",
        fechaDePublicacion: "2024-06-26",
        cantidadDeFotos: 15,
        metrosCuadrados: 278,
        precioDeVenta: 293509
    },
    {
        nombre: "Propiedad 321",
        direccion: "Calle 19, Málaga",
        fechaDePublicacion: "2024-06-03",
        cantidadDeFotos: 16,
        metrosCuadrados: 254,
        precioDeVenta: 918719
    },
    {
        nombre: "Propiedad 322",
        direccion: "Calle 48, Barcelona",
        fechaDePublicacion: "2024-06-10",
        cantidadDeFotos: 16,
        metrosCuadrados: 384,
        precioDeVenta: 643358
    },
    {
        nombre: "Propiedad 323",
        direccion: "Calle 90, Murcia",
        fechaDePublicacion: "2024-06-28",
        cantidadDeFotos: 14,
        metrosCuadrados: 262,
        precioDeVenta: 467631
    },
    {
        nombre: "Propiedad 324",
        direccion: "Calle 23, Palma",
        fechaDePublicacion: "2024-06-14",
        cantidadDeFotos: 3,
        metrosCuadrados: 196,
        precioDeVenta: 110403
    },
    {
        nombre: "Propiedad 325",
        direccion: "Calle 70, Zaragoza",
        fechaDePublicacion: "2024-06-01",
        cantidadDeFotos: 13,
        metrosCuadrados: 133,
        precioDeVenta: 733248
    },
    {
        nombre: "Propiedad 326",
        direccion: "Calle 49, Palma",
        fechaDePublicacion: "2024-06-27",
        cantidadDeFotos: 13,
        metrosCuadrados: 244,
        precioDeVenta: 956023
    },
    {
        nombre: "Propiedad 327",
        direccion: "Calle 22, Valencia",
        fechaDePublicacion: "2024-06-27",
        cantidadDeFotos: 2,
        metrosCuadrados: 126,
        precioDeVenta: 224170
    },
    {
        nombre: "Propiedad 328",
        direccion: "Calle 81, Murcia",
        fechaDePublicacion: "2024-06-29",
        cantidadDeFotos: 5,
        metrosCuadrados: 217,
        precioDeVenta: 877147
    },
    {
        nombre: "Propiedad 329",
        direccion: "Calle 48, Palma",
        fechaDePublicacion: "2024-06-07",
        cantidadDeFotos: 7,
        metrosCuadrados: 209,
        precioDeVenta: 329155
    },
    {
        nombre: "Propiedad 330",
        direccion: "Calle 72, Palma",
        fechaDePublicacion: "2024-06-26",
        cantidadDeFotos: 4,
        metrosCuadrados: 99,
        precioDeVenta: 70542
    },
    {
        nombre: "Propiedad 331",
        direccion: "Calle 16, Bilbao",
        fechaDePublicacion: "2024-06-29",
        cantidadDeFotos: 15,
        metrosCuadrados: 66,
        precioDeVenta: 656873
    },
    {
        nombre: "Propiedad 332",
        direccion: "Calle 80, Madrid",
        fechaDePublicacion: "2024-06-04",
        cantidadDeFotos: 13,
        metrosCuadrados: 299,
        precioDeVenta: 371126
    },
    {
        nombre: "Propiedad 333",
        direccion: "Calle 81, Murcia",
        fechaDePublicacion: "2024-06-08",
        cantidadDeFotos: 9,
        metrosCuadrados: 394,
        precioDeVenta: 935725
    },
    {
        nombre: "Propiedad 334",
        direccion: "Calle 58, Palma",
        fechaDePublicacion: "2024-06-20",
        cantidadDeFotos: 17,
        metrosCuadrados: 272,
        precioDeVenta: 288301
    },
    {
        nombre: "Propiedad 335",
        direccion: "Calle 42, Sevilla",
        fechaDePublicacion: "2024-06-25",
        cantidadDeFotos: 15,
        metrosCuadrados: 463,
        precioDeVenta: 381151
    },
    {
        nombre: "Propiedad 336",
        direccion: "Calle 44, Murcia",
        fechaDePublicacion: "2024-06-22",
        cantidadDeFotos: 18,
        metrosCuadrados: 220,
        precioDeVenta: 202262
    },
    {
        nombre: "Propiedad 337",
        direccion: "Calle 42, Palma",
        fechaDePublicacion: "2024-06-21",
        cantidadDeFotos: 1,
        metrosCuadrados: 482,
        precioDeVenta: 660972
    },
    {
        nombre: "Propiedad 338",
        direccion: "Calle 82, Palma",
        fechaDePublicacion: "2024-06-10",
        cantidadDeFotos: 12,
        metrosCuadrados: 83,
        precioDeVenta: 370360
    },
    {
        nombre: "Propiedad 339",
        direccion: "Calle 78, Murcia",
        fechaDePublicacion: "2024-06-16",
        cantidadDeFotos: 19,
        metrosCuadrados: 193,
        precioDeVenta: 573138
    },
    {
        nombre: "Propiedad 340",
        direccion: "Calle 38, Palma",
        fechaDePublicacion: "2024-06-12",
        cantidadDeFotos: 6,
        metrosCuadrados: 146,
        precioDeVenta: 496322
    },
    {
        nombre: "Propiedad 341",
        direccion: "Calle 16, Valencia",
        fechaDePublicacion: "2024-06-02",
        cantidadDeFotos: 14,
        metrosCuadrados: 320,
        precioDeVenta: 788002
    },
    {
        nombre: "Propiedad 342",
        direccion: "Calle 81, Las Palmas de Gran Canaria",
        fechaDePublicacion: "2024-06-28",
        cantidadDeFotos: 17,
        metrosCuadrados: 180,
        precioDeVenta: 72247
    },
    {
        nombre: "Propiedad 343",
        direccion: "Calle 91, Barcelona",
        fechaDePublicacion: "2024-06-19",
        cantidadDeFotos: 13,
        metrosCuadrados: 321,
        precioDeVenta: 116887
    },
    {
        nombre: "Propiedad 344",
        direccion: "Calle 36, Málaga",
        fechaDePublicacion: "2024-06-14",
        cantidadDeFotos: 10,
        metrosCuadrados: 128,
        precioDeVenta: 100042
    },
    {
        nombre: "Propiedad 345",
        direccion: "Calle 71, Sevilla",
        fechaDePublicacion: "2024-06-20",
        cantidadDeFotos: 17,
        metrosCuadrados: 219,
        precioDeVenta: 948337
    },
    {
        nombre: "Propiedad 346",
        direccion: "Calle 70, Murcia",
        fechaDePublicacion: "2024-06-04",
        cantidadDeFotos: 5,
        metrosCuadrados: 265,
        precioDeVenta: 796519
    },
    {
        nombre: "Propiedad 347",
        direccion: "Calle 1, Barcelona",
        fechaDePublicacion: "2024-06-10",
        cantidadDeFotos: 10,
        metrosCuadrados: 233,
        precioDeVenta: 472792
    },
    {
        nombre: "Propiedad 348",
        direccion: "Calle 95, Valencia",
        fechaDePublicacion: "2024-06-19",
        cantidadDeFotos: 5,
        metrosCuadrados: 349,
        precioDeVenta: 982246
    },
    {
        nombre: "Propiedad 349",
        direccion: "Calle 16, Málaga",
        fechaDePublicacion: "2024-06-22",
        cantidadDeFotos: 7,
        metrosCuadrados: 160,
        precioDeVenta: 404279
    },
    {
        nombre: "Propiedad 350",
        direccion: "Calle 70, Palma",
        fechaDePublicacion: "2024-06-25",
        cantidadDeFotos: 2,
        metrosCuadrados: 474,
        precioDeVenta: 667089
    },
    {
        nombre: "Propiedad 351",
        direccion: "Calle 10, Valencia",
        fechaDePublicacion: "2024-06-26",
        cantidadDeFotos: 6,
        metrosCuadrados: 442,
        precioDeVenta: 858592
    },
    {
        nombre: "Propiedad 352",
        direccion: "Calle 20, Málaga",
        fechaDePublicacion: "2024-06-01",
        cantidadDeFotos: 5,
        metrosCuadrados: 350,
        precioDeVenta: 606292
    },
    {
        nombre: "Propiedad 353",
        direccion: "Calle 33, Las Palmas de Gran Canaria",
        fechaDePublicacion: "2024-06-12",
        cantidadDeFotos: 5,
        metrosCuadrados: 436,
        precioDeVenta: 479423
    },
    {
        nombre: "Propiedad 354",
        direccion: "Calle 90, Sevilla",
        fechaDePublicacion: "2024-06-20",
        cantidadDeFotos: 3,
        metrosCuadrados: 389,
        precioDeVenta: 595064
    },
    {
        nombre: "Propiedad 355",
        direccion: "Calle 69, Las Palmas de Gran Canaria",
        fechaDePublicacion: "2024-06-20",
        cantidadDeFotos: 2,
        metrosCuadrados: 452,
        precioDeVenta: 525724
    },
    {
        nombre: "Propiedad 356",
        direccion: "Calle 84, Barcelona",
        fechaDePublicacion: "2024-06-29",
        cantidadDeFotos: 17,
        metrosCuadrados: 54,
        precioDeVenta: 811255
    },
    {
        nombre: "Propiedad 357",
        direccion: "Calle 35, Madrid",
        fechaDePublicacion: "2024-06-14",
        cantidadDeFotos: 5,
        metrosCuadrados: 54,
        precioDeVenta: 420009
    },
    {
        nombre: "Propiedad 358",
        direccion: "Calle 24, Bilbao",
        fechaDePublicacion: "2024-06-05",
        cantidadDeFotos: 12,
        metrosCuadrados: 240,
        precioDeVenta: 723877
    },
    {
        nombre: "Propiedad 359",
        direccion: "Calle 78, Barcelona",
        fechaDePublicacion: "2024-06-28",
        cantidadDeFotos: 6,
        metrosCuadrados: 70,
        precioDeVenta: 419134
    },
    {
        nombre: "Propiedad 360",
        direccion: "Calle 72, Bilbao",
        fechaDePublicacion: "2024-06-22",
        cantidadDeFotos: 14,
        metrosCuadrados: 319,
        precioDeVenta: 379382
    },
    {
        nombre: "Propiedad 361",
        direccion: "Calle 96, Barcelona",
        fechaDePublicacion: "2024-06-18",
        cantidadDeFotos: 2,
        metrosCuadrados: 255,
        precioDeVenta: 186045
    },
    {
        nombre: "Propiedad 362",
        direccion: "Calle 24, Sevilla",
        fechaDePublicacion: "2024-06-12",
        cantidadDeFotos: 16,
        metrosCuadrados: 56,
        precioDeVenta: 542358
    },
    {
        nombre: "Propiedad 363",
        direccion: "Calle 28, Bilbao",
        fechaDePublicacion: "2024-06-28",
        cantidadDeFotos: 11,
        metrosCuadrados: 280,
        precioDeVenta: 852361
    },
    {
        nombre: "Propiedad 364",
        direccion: "Calle 25, Palma",
        fechaDePublicacion: "2024-06-13",
        cantidadDeFotos: 19,
        metrosCuadrados: 435,
        precioDeVenta: 698514
    },
    {
        nombre: "Propiedad 365",
        direccion: "Calle 10, Zaragoza",
        fechaDePublicacion: "2024-06-14",
        cantidadDeFotos: 2,
        metrosCuadrados: 83,
        precioDeVenta: 60673
    },
    {
        nombre: "Propiedad 366",
        direccion: "Calle 15, Barcelona",
        fechaDePublicacion: "2024-06-10",
        cantidadDeFotos: 19,
        metrosCuadrados: 305,
        precioDeVenta: 275587
    },
    {
        nombre: "Propiedad 367",
        direccion: "Calle 85, Barcelona",
        fechaDePublicacion: "2024-06-05",
        cantidadDeFotos: 19,
        metrosCuadrados: 456,
        precioDeVenta: 244406
    },
    {
        nombre: "Propiedad 368",
        direccion: "Calle 18, Las Palmas de Gran Canaria",
        fechaDePublicacion: "2024-06-05",
        cantidadDeFotos: 5,
        metrosCuadrados: 473,
        precioDeVenta: 896098
    },
    {
        nombre: "Propiedad 369",
        direccion: "Calle 83, Valencia",
        fechaDePublicacion: "2024-06-14",
        cantidadDeFotos: 20,
        metrosCuadrados: 389,
        precioDeVenta: 425392
    },
    {
        nombre: "Propiedad 370",
        direccion: "Calle 79, Palma",
        fechaDePublicacion: "2024-06-04",
        cantidadDeFotos: 12,
        metrosCuadrados: 420,
        precioDeVenta: 749039
    },
    {
        nombre: "Propiedad 371",
        direccion: "Calle 86, Murcia",
        fechaDePublicacion: "2024-06-24",
        cantidadDeFotos: 11,
        metrosCuadrados: 311,
        precioDeVenta: 978630
    },
    {
        nombre: "Propiedad 372",
        direccion: "Calle 18, Bilbao",
        fechaDePublicacion: "2024-06-21",
        cantidadDeFotos: 7,
        metrosCuadrados: 150,
        precioDeVenta: 101944
    },
    {
        nombre: "Propiedad 373",
        direccion: "Calle 96, Zaragoza",
        fechaDePublicacion: "2024-06-11",
        cantidadDeFotos: 15,
        metrosCuadrados: 68,
        precioDeVenta: 670430
    },
    {
        nombre: "Propiedad 374",
        direccion: "Calle 76, Sevilla",
        fechaDePublicacion: "2024-06-13",
        cantidadDeFotos: 18,
        metrosCuadrados: 161,
        precioDeVenta: 347252
    },
    {
        nombre: "Propiedad 375",
        direccion: "Calle 74, Sevilla",
        fechaDePublicacion: "2024-06-08",
        cantidadDeFotos: 7,
        metrosCuadrados: 322,
        precioDeVenta: 51032
    },
    {
        nombre: "Propiedad 376",
        direccion: "Calle 14, Bilbao",
        fechaDePublicacion: "2024-06-25",
        cantidadDeFotos: 6,
        metrosCuadrados: 308,
        precioDeVenta: 924856
    },
    {
        nombre: "Propiedad 377",
        direccion: "Calle 76, Madrid",
        fechaDePublicacion: "2024-06-08",
        cantidadDeFotos: 5,
        metrosCuadrados: 191,
        precioDeVenta: 611779
    },
    {
        nombre: "Propiedad 378",
        direccion: "Calle 97, Sevilla",
        fechaDePublicacion: "2024-06-27",
        cantidadDeFotos: 7,
        metrosCuadrados: 247,
        precioDeVenta: 878769
    },
    {
        nombre: "Propiedad 379",
        direccion: "Calle 49, Madrid",
        fechaDePublicacion: "2024-06-27",
        cantidadDeFotos: 4,
        metrosCuadrados: 364,
        precioDeVenta: 779449
    },
    {
        nombre: "Propiedad 380",
        direccion: "Calle 85, Palma",
        fechaDePublicacion: "2024-06-16",
        cantidadDeFotos: 19,
        metrosCuadrados: 194,
        precioDeVenta: 144462
    },
    {
        nombre: "Propiedad 381",
        direccion: "Calle 8, Zaragoza",
        fechaDePublicacion: "2024-06-12",
        cantidadDeFotos: 2,
        metrosCuadrados: 210,
        precioDeVenta: 223290
    },
    {
        nombre: "Propiedad 382",
        direccion: "Calle 94, Las Palmas de Gran Canaria",
        fechaDePublicacion: "2024-06-26",
        cantidadDeFotos: 15,
        metrosCuadrados: 453,
        precioDeVenta: 657293
    },
    {
        nombre: "Propiedad 383",
        direccion: "Calle 27, Las Palmas de Gran Canaria",
        fechaDePublicacion: "2024-06-05",
        cantidadDeFotos: 14,
        metrosCuadrados: 305,
        precioDeVenta: 799994
    },
    {
        nombre: "Propiedad 384",
        direccion: "Calle 5, Las Palmas de Gran Canaria",
        fechaDePublicacion: "2024-06-19",
        cantidadDeFotos: 9,
        metrosCuadrados: 86,
        precioDeVenta: 969470
    },
    {
        nombre: "Propiedad 385",
        direccion: "Calle 90, Madrid",
        fechaDePublicacion: "2024-06-18",
        cantidadDeFotos: 5,
        metrosCuadrados: 150,
        precioDeVenta: 907378
    },
    {
        nombre: "Propiedad 386",
        direccion: "Calle 98, Valencia",
        fechaDePublicacion: "2024-06-22",
        cantidadDeFotos: 8,
        metrosCuadrados: 318,
        precioDeVenta: 402475
    },
    {
        nombre: "Propiedad 387",
        direccion: "Calle 74, Murcia",
        fechaDePublicacion: "2024-06-08",
        cantidadDeFotos: 7,
        metrosCuadrados: 410,
        precioDeVenta: 633489
    },
    {
        nombre: "Propiedad 388",
        direccion: "Calle 29, Murcia",
        fechaDePublicacion: "2024-06-29",
        cantidadDeFotos: 1,
        metrosCuadrados: 150,
        precioDeVenta: 838208
    },
    {
        nombre: "Propiedad 389",
        direccion: "Calle 74, Las Palmas de Gran Canaria",
        fechaDePublicacion: "2024-06-11",
        cantidadDeFotos: 5,
        metrosCuadrados: 289,
        precioDeVenta: 924452
    },
    {
        nombre: "Propiedad 390",
        direccion: "Calle 7, Málaga",
        fechaDePublicacion: "2024-06-22",
        cantidadDeFotos: 3,
        metrosCuadrados: 323,
        precioDeVenta: 455750
    },
    {
        nombre: "Propiedad 391",
        direccion: "Calle 11, Valencia",
        fechaDePublicacion: "2024-06-21",
        cantidadDeFotos: 13,
        metrosCuadrados: 405,
        precioDeVenta: 530607
    },
    {
        nombre: "Propiedad 392",
        direccion: "Calle 95, Valencia",
        fechaDePublicacion: "2024-06-06",
        cantidadDeFotos: 17,
        metrosCuadrados: 295,
        precioDeVenta: 805502
    },
    {
        nombre: "Propiedad 393",
        direccion: "Calle 63, Madrid",
        fechaDePublicacion: "2024-06-29",
        cantidadDeFotos: 14,
        metrosCuadrados: 165,
        precioDeVenta: 462920
    },
    {
        nombre: "Propiedad 394",
        direccion: "Calle 18, Málaga",
        fechaDePublicacion: "2024-06-19",
        cantidadDeFotos: 3,
        metrosCuadrados: 312,
        precioDeVenta: 399971
    },
    {
        nombre: "Propiedad 395",
        direccion: "Calle 66, Las Palmas de Gran Canaria",
        fechaDePublicacion: "2024-06-27",
        cantidadDeFotos: 9,
        metrosCuadrados: 477,
        precioDeVenta: 908963
    },
    {
        nombre: "Propiedad 396",
        direccion: "Calle 77, Bilbao",
        fechaDePublicacion: "2024-06-02",
        cantidadDeFotos: 10,
        metrosCuadrados: 109,
        precioDeVenta: 886831
    },
    {
        nombre: "Propiedad 397",
        direccion: "Calle 18, Bilbao",
        fechaDePublicacion: "2024-06-24",
        cantidadDeFotos: 10,
        metrosCuadrados: 263,
        precioDeVenta: 171697
    },
    {
        nombre: "Propiedad 398",
        direccion: "Calle 21, Palma",
        fechaDePublicacion: "2024-06-12",
        cantidadDeFotos: 10,
        metrosCuadrados: 107,
        precioDeVenta: 550246
    },
    {
        nombre: "Propiedad 399",
        direccion: "Calle 62, Valencia",
        fechaDePublicacion: "2024-06-07",
        cantidadDeFotos: 13,
        metrosCuadrados: 51,
        precioDeVenta: 214593
    },
    {
        nombre: "Propiedad 400",
        direccion: "Calle 12, Valencia",
        fechaDePublicacion: "2024-06-11",
        cantidadDeFotos: 17,
        metrosCuadrados: 298,
        precioDeVenta: 439529
    },
    {
        nombre: "Propiedad 401",
        direccion: "Calle 40, Zaragoza",
        fechaDePublicacion: "2024-06-28",
        cantidadDeFotos: 2,
        metrosCuadrados: 486,
        precioDeVenta: 560441
    },
    {
        nombre: "Propiedad 402",
        direccion: "Calle 60, Barcelona",
        fechaDePublicacion: "2024-06-12",
        cantidadDeFotos: 14,
        metrosCuadrados: 88,
        precioDeVenta: 550680
    },
    {
        nombre: "Propiedad 403",
        direccion: "Calle 47, Las Palmas de Gran Canaria",
        fechaDePublicacion: "2024-06-03",
        cantidadDeFotos: 3,
        metrosCuadrados: 148,
        precioDeVenta: 71018
    },
    {
        nombre: "Propiedad 404",
        direccion: "Calle 94, Barcelona",
        fechaDePublicacion: "2024-06-13",
        cantidadDeFotos: 18,
        metrosCuadrados: 253,
        precioDeVenta: 504677
    },
    {
        nombre: "Propiedad 405",
        direccion: "Calle 24, Barcelona",
        fechaDePublicacion: "2024-06-08",
        cantidadDeFotos: 18,
        metrosCuadrados: 65,
        precioDeVenta: 818095
    },
    {
        nombre: "Propiedad 406",
        direccion: "Calle 89, Málaga",
        fechaDePublicacion: "2024-06-10",
        cantidadDeFotos: 9,
        metrosCuadrados: 265,
        precioDeVenta: 664092
    },
    {
        nombre: "Propiedad 407",
        direccion: "Calle 62, Murcia",
        fechaDePublicacion: "2024-06-24",
        cantidadDeFotos: 3,
        metrosCuadrados: 246,
        precioDeVenta: 424183
    },
    {
        nombre: "Propiedad 408",
        direccion: "Calle 16, Murcia",
        fechaDePublicacion: "2024-06-27",
        cantidadDeFotos: 16,
        metrosCuadrados: 206,
        precioDeVenta: 677068
    },
    {
        nombre: "Propiedad 409",
        direccion: "Calle 5, Sevilla",
        fechaDePublicacion: "2024-06-07",
        cantidadDeFotos: 9,
        metrosCuadrados: 492,
        precioDeVenta: 903957
    },
    {
        nombre: "Propiedad 410",
        direccion: "Calle 22, Las Palmas de Gran Canaria",
        fechaDePublicacion: "2024-06-25",
        cantidadDeFotos: 9,
        metrosCuadrados: 381,
        precioDeVenta: 886056
    },
    {
        nombre: "Propiedad 411",
        direccion: "Calle 14, Palma",
        fechaDePublicacion: "2024-06-02",
        cantidadDeFotos: 17,
        metrosCuadrados: 410,
        precioDeVenta: 324941
    },
    {
        nombre: "Propiedad 412",
        direccion: "Calle 88, Bilbao",
        fechaDePublicacion: "2024-06-05",
        cantidadDeFotos: 10,
        metrosCuadrados: 411,
        precioDeVenta: 108752
    },
    {
        nombre: "Propiedad 413",
        direccion: "Calle 22, Palma",
        fechaDePublicacion: "2024-06-21",
        cantidadDeFotos: 3,
        metrosCuadrados: 287,
        precioDeVenta: 382847
    },
    {
        nombre: "Propiedad 414",
        direccion: "Calle 25, Zaragoza",
        fechaDePublicacion: "2024-06-19",
        cantidadDeFotos: 2,
        metrosCuadrados: 453,
        precioDeVenta: 382039
    },
    {
        nombre: "Propiedad 415",
        direccion: "Calle 12, Barcelona",
        fechaDePublicacion: "2024-06-27",
        cantidadDeFotos: 8,
        metrosCuadrados: 364,
        precioDeVenta: 317075
    },
    {
        nombre: "Propiedad 416",
        direccion: "Calle 40, Málaga",
        fechaDePublicacion: "2024-06-17",
        cantidadDeFotos: 15,
        metrosCuadrados: 229,
        precioDeVenta: 382084
    },
    {
        nombre: "Propiedad 417",
        direccion: "Calle 46, Bilbao",
        fechaDePublicacion: "2024-06-25",
        cantidadDeFotos: 16,
        metrosCuadrados: 483,
        precioDeVenta: 539857
    },
    {
        nombre: "Propiedad 418",
        direccion: "Calle 40, Zaragoza",
        fechaDePublicacion: "2024-06-02",
        cantidadDeFotos: 2,
        metrosCuadrados: 451,
        precioDeVenta: 291821
    },
    {
        nombre: "Propiedad 419",
        direccion: "Calle 48, Valencia",
        fechaDePublicacion: "2024-06-09",
        cantidadDeFotos: 5,
        metrosCuadrados: 454,
        precioDeVenta: 250404
    },
    {
        nombre: "Propiedad 420",
        direccion: "Calle 27, Málaga",
        fechaDePublicacion: "2024-06-02",
        cantidadDeFotos: 16,
        metrosCuadrados: 463,
        precioDeVenta: 455936
    },
    {
        nombre: "Propiedad 421",
        direccion: "Calle 80, Barcelona",
        fechaDePublicacion: "2024-06-25",
        cantidadDeFotos: 18,
        metrosCuadrados: 422,
        precioDeVenta: 77660
    },
    {
        nombre: "Propiedad 422",
        direccion: "Calle 24, Valencia",
        fechaDePublicacion: "2024-06-09",
        cantidadDeFotos: 17,
        metrosCuadrados: 298,
        precioDeVenta: 875481
    },
    {
        nombre: "Propiedad 423",
        direccion: "Calle 28, Barcelona",
        fechaDePublicacion: "2024-06-23",
        cantidadDeFotos: 6,
        metrosCuadrados: 239,
        precioDeVenta: 84842
    },
    {
        nombre: "Propiedad 424",
        direccion: "Calle 60, Barcelona",
        fechaDePublicacion: "2024-06-11",
        cantidadDeFotos: 5,
        metrosCuadrados: 390,
        precioDeVenta: 712504
    },
    {
        nombre: "Propiedad 425",
        direccion: "Calle 59, Palma",
        fechaDePublicacion: "2024-06-05",
        cantidadDeFotos: 11,
        metrosCuadrados: 307,
        precioDeVenta: 208029
    },
    {
        nombre: "Propiedad 426",
        direccion: "Calle 34, Murcia",
        fechaDePublicacion: "2024-06-19",
        cantidadDeFotos: 16,
        metrosCuadrados: 81,
        precioDeVenta: 290765
    },
    {
        nombre: "Propiedad 427",
        direccion: "Calle 4, Murcia",
        fechaDePublicacion: "2024-06-04",
        cantidadDeFotos: 10,
        metrosCuadrados: 196,
        precioDeVenta: 666994
    },
    {
        nombre: "Propiedad 428",
        direccion: "Calle 65, Zaragoza",
        fechaDePublicacion: "2024-06-15",
        cantidadDeFotos: 12,
        metrosCuadrados: 454,
        precioDeVenta: 211059
    },
    {
        nombre: "Propiedad 429",
        direccion: "Calle 24, Murcia",
        fechaDePublicacion: "2024-06-04",
        cantidadDeFotos: 11,
        metrosCuadrados: 350,
        precioDeVenta: 620584
    },
    {
        nombre: "Propiedad 430",
        direccion: "Calle 61, Palma",
        fechaDePublicacion: "2024-06-25",
        cantidadDeFotos: 10,
        metrosCuadrados: 479,
        precioDeVenta: 462415
    },
    {
        nombre: "Propiedad 431",
        direccion: "Calle 74, Bilbao",
        fechaDePublicacion: "2024-06-29",
        cantidadDeFotos: 8,
        metrosCuadrados: 89,
        precioDeVenta: 375214
    },
    {
        nombre: "Propiedad 432",
        direccion: "Calle 90, Las Palmas de Gran Canaria",
        fechaDePublicacion: "2024-06-24",
        cantidadDeFotos: 6,
        metrosCuadrados: 131,
        precioDeVenta: 530004
    },
    {
        nombre: "Propiedad 433",
        direccion: "Calle 69, Murcia",
        fechaDePublicacion: "2024-06-28",
        cantidadDeFotos: 5,
        metrosCuadrados: 276,
        precioDeVenta: 478673
    },
    {
        nombre: "Propiedad 434",
        direccion: "Calle 75, Palma",
        fechaDePublicacion: "2024-06-28",
        cantidadDeFotos: 7,
        metrosCuadrados: 386,
        precioDeVenta: 262539
    },
    {
        nombre: "Propiedad 435",
        direccion: "Calle 18, Barcelona",
        fechaDePublicacion: "2024-06-20",
        cantidadDeFotos: 17,
        metrosCuadrados: 191,
        precioDeVenta: 479918
    },
    {
        nombre: "Propiedad 436",
        direccion: "Calle 2, Las Palmas de Gran Canaria",
        fechaDePublicacion: "2024-06-09",
        cantidadDeFotos: 2,
        metrosCuadrados: 310,
        precioDeVenta: 885282
    },
    {
        nombre: "Propiedad 437",
        direccion: "Calle 50, Sevilla",
        fechaDePublicacion: "2024-06-26",
        cantidadDeFotos: 3,
        metrosCuadrados: 211,
        precioDeVenta: 100956
    },
    {
        nombre: "Propiedad 438",
        direccion: "Calle 75, Las Palmas de Gran Canaria",
        fechaDePublicacion: "2024-06-24",
        cantidadDeFotos: 14,
        metrosCuadrados: 158,
        precioDeVenta: 218177
    },
    {
        nombre: "Propiedad 439",
        direccion: "Calle 32, Madrid",
        fechaDePublicacion: "2024-06-07",
        cantidadDeFotos: 19,
        metrosCuadrados: 132,
        precioDeVenta: 534518
    },
    {
        nombre: "Propiedad 440",
        direccion: "Calle 14, Bilbao",
        fechaDePublicacion: "2024-06-27",
        cantidadDeFotos: 2,
        metrosCuadrados: 248,
        precioDeVenta: 195719
    },
    {
        nombre: "Propiedad 441",
        direccion: "Calle 63, Málaga",
        fechaDePublicacion: "2024-06-20",
        cantidadDeFotos: 3,
        metrosCuadrados: 240,
        precioDeVenta: 195693
    },
    {
        nombre: "Propiedad 442",
        direccion: "Calle 64, Bilbao",
        fechaDePublicacion: "2024-06-16",
        cantidadDeFotos: 6,
        metrosCuadrados: 172,
        precioDeVenta: 264000
    },
    {
        nombre: "Propiedad 443",
        direccion: "Calle 26, Barcelona",
        fechaDePublicacion: "2024-06-15",
        cantidadDeFotos: 7,
        metrosCuadrados: 214,
        precioDeVenta: 508511
    },
    {
        nombre: "Propiedad 444",
        direccion: "Calle 75, Valencia",
        fechaDePublicacion: "2024-06-04",
        cantidadDeFotos: 2,
        metrosCuadrados: 266,
        precioDeVenta: 124462
    },
    {
        nombre: "Propiedad 445",
        direccion: "Calle 29, Sevilla",
        fechaDePublicacion: "2024-06-05",
        cantidadDeFotos: 3,
        metrosCuadrados: 417,
        precioDeVenta: 725479
    },
    {
        nombre: "Propiedad 446",
        direccion: "Calle 29, Zaragoza",
        fechaDePublicacion: "2024-06-04",
        cantidadDeFotos: 11,
        metrosCuadrados: 153,
        precioDeVenta: 913931
    },
    {
        nombre: "Propiedad 447",
        direccion: "Calle 72, Sevilla",
        fechaDePublicacion: "2024-06-18",
        cantidadDeFotos: 15,
        metrosCuadrados: 282,
        precioDeVenta: 637158
    },
    {
        nombre: "Propiedad 448",
        direccion: "Calle 38, Valencia",
        fechaDePublicacion: "2024-06-20",
        cantidadDeFotos: 17,
        metrosCuadrados: 162,
        precioDeVenta: 558048
    },
    {
        nombre: "Propiedad 449",
        direccion: "Calle 4, Zaragoza",
        fechaDePublicacion: "2024-06-09",
        cantidadDeFotos: 2,
        metrosCuadrados: 203,
        precioDeVenta: 756880
    },
    {
        nombre: "Propiedad 450",
        direccion: "Calle 32, Murcia",
        fechaDePublicacion: "2024-06-06",
        cantidadDeFotos: 12,
        metrosCuadrados: 304,
        precioDeVenta: 702319
    },
    {
        nombre: "Propiedad 451",
        direccion: "Calle 82, Barcelona",
        fechaDePublicacion: "2024-06-09",
        cantidadDeFotos: 2,
        metrosCuadrados: 180,
        precioDeVenta: 223019
    },
    {
        nombre: "Propiedad 452",
        direccion: "Calle 45, Málaga",
        fechaDePublicacion: "2024-06-27",
        cantidadDeFotos: 2,
        metrosCuadrados: 268,
        precioDeVenta: 697775
    },
    {
        nombre: "Propiedad 453",
        direccion: "Calle 9, Málaga",
        fechaDePublicacion: "2024-06-11",
        cantidadDeFotos: 14,
        metrosCuadrados: 479,
        precioDeVenta: 145860
    },
    {
        nombre: "Propiedad 454",
        direccion: "Calle 14, Valencia",
        fechaDePublicacion: "2024-06-21",
        cantidadDeFotos: 6,
        metrosCuadrados: 496,
        precioDeVenta: 122342
    },
    {
        nombre: "Propiedad 455",
        direccion: "Calle 29, Las Palmas de Gran Canaria",
        fechaDePublicacion: "2024-06-26",
        cantidadDeFotos: 4,
        metrosCuadrados: 453,
        precioDeVenta: 956798
    },
    {
        nombre: "Propiedad 456",
        direccion: "Calle 22, Bilbao",
        fechaDePublicacion: "2024-06-15",
        cantidadDeFotos: 1,
        metrosCuadrados: 194,
        precioDeVenta: 432977
    },
    {
        nombre: "Propiedad 457",
        direccion: "Calle 23, Valencia",
        fechaDePublicacion: "2024-06-18",
        cantidadDeFotos: 13,
        metrosCuadrados: 70,
        precioDeVenta: 775807
    },
    {
        nombre: "Propiedad 458",
        direccion: "Calle 14, Barcelona",
        fechaDePublicacion: "2024-06-02",
        cantidadDeFotos: 5,
        metrosCuadrados: 294,
        precioDeVenta: 732228
    },
    {
        nombre: "Propiedad 459",
        direccion: "Calle 75, Sevilla",
        fechaDePublicacion: "2024-06-13",
        cantidadDeFotos: 11,
        metrosCuadrados: 290,
        precioDeVenta: 750100
    },
    {
        nombre: "Propiedad 460",
        direccion: "Calle 74, Bilbao",
        fechaDePublicacion: "2024-06-16",
        cantidadDeFotos: 6,
        metrosCuadrados: 327,
        precioDeVenta: 182768
    },
    {
        nombre: "Propiedad 461",
        direccion: "Calle 70, Bilbao",
        fechaDePublicacion: "2024-06-19",
        cantidadDeFotos: 3,
        metrosCuadrados: 472,
        precioDeVenta: 339249
    },
    {
        nombre: "Propiedad 462",
        direccion: "Calle 29, Sevilla",
        fechaDePublicacion: "2024-06-05",
        cantidadDeFotos: 4,
        metrosCuadrados: 446,
        precioDeVenta: 304368
    },
    {
        nombre: "Propiedad 463",
        direccion: "Calle 31, Bilbao",
        fechaDePublicacion: "2024-06-19",
        cantidadDeFotos: 3,
        metrosCuadrados: 59,
        precioDeVenta: 779082
    },
    {
        nombre: "Propiedad 464",
        direccion: "Calle 24, Sevilla",
        fechaDePublicacion: "2024-06-02",
        cantidadDeFotos: 7,
        metrosCuadrados: 445,
        precioDeVenta: 154614
    },
    {
        nombre: "Propiedad 465",
        direccion: "Calle 9, Málaga",
        fechaDePublicacion: "2024-06-29",
        cantidadDeFotos: 17,
        metrosCuadrados: 391,
        precioDeVenta: 519314
    },
    {
        nombre: "Propiedad 466",
        direccion: "Calle 91, Las Palmas de Gran Canaria",
        fechaDePublicacion: "2024-06-27",
        cantidadDeFotos: 7,
        metrosCuadrados: 338,
        precioDeVenta: 256161
    },
    {
        nombre: "Propiedad 467",
        direccion: "Calle 38, Palma",
        fechaDePublicacion: "2024-06-17",
        cantidadDeFotos: 14,
        metrosCuadrados: 458,
        precioDeVenta: 196136
    },
    {
        nombre: "Propiedad 468",
        direccion: "Calle 74, Zaragoza",
        fechaDePublicacion: "2024-06-29",
        cantidadDeFotos: 11,
        metrosCuadrados: 446,
        precioDeVenta: 457282
    },
    {
        nombre: "Propiedad 469",
        direccion: "Calle 91, Barcelona",
        fechaDePublicacion: "2024-06-18",
        cantidadDeFotos: 9,
        metrosCuadrados: 169,
        precioDeVenta: 136227
    },
    {
        nombre: "Propiedad 470",
        direccion: "Calle 88, Madrid",
        fechaDePublicacion: "2024-06-27",
        cantidadDeFotos: 10,
        metrosCuadrados: 194,
        precioDeVenta: 899320
    },
    {
        nombre: "Propiedad 471",
        direccion: "Calle 7, Valencia",
        fechaDePublicacion: "2024-06-20",
        cantidadDeFotos: 14,
        metrosCuadrados: 306,
        precioDeVenta: 258252
    },
    {
        nombre: "Propiedad 472",
        direccion: "Calle 64, Madrid",
        fechaDePublicacion: "2024-06-06",
        cantidadDeFotos: 15,
        metrosCuadrados: 448,
        precioDeVenta: 763104
    },
    {
        nombre: "Propiedad 473",
        direccion: "Calle 94, Las Palmas de Gran Canaria",
        fechaDePublicacion: "2024-06-23",
        cantidadDeFotos: 16,
        metrosCuadrados: 414,
        precioDeVenta: 851294
    },
    {
        nombre: "Propiedad 474",
        direccion: "Calle 39, Sevilla",
        fechaDePublicacion: "2024-06-10",
        cantidadDeFotos: 10,
        metrosCuadrados: 301,
        precioDeVenta: 525701
    },
    {
        nombre: "Propiedad 475",
        direccion: "Calle 66, Murcia",
        fechaDePublicacion: "2024-06-17",
        cantidadDeFotos: 3,
        metrosCuadrados: 227,
        precioDeVenta: 143861
    },
    {
        nombre: "Propiedad 476",
        direccion: "Calle 55, Valencia",
        fechaDePublicacion: "2024-06-04",
        cantidadDeFotos: 5,
        metrosCuadrados: 346,
        precioDeVenta: 269082
    },
    {
        nombre: "Propiedad 477",
        direccion: "Calle 98, Zaragoza",
        fechaDePublicacion: "2024-06-25",
        cantidadDeFotos: 19,
        metrosCuadrados: 149,
        precioDeVenta: 623089
    },
    {
        nombre: "Propiedad 478",
        direccion: "Calle 71, Málaga",
        fechaDePublicacion: "2024-06-02",
        cantidadDeFotos: 3,
        metrosCuadrados: 67,
        precioDeVenta: 627068
    },
    {
        nombre: "Propiedad 479",
        direccion: "Calle 6, Bilbao",
        fechaDePublicacion: "2024-06-03",
        cantidadDeFotos: 15,
        metrosCuadrados: 229,
        precioDeVenta: 77726
    },
    {
        nombre: "Propiedad 480",
        direccion: "Calle 40, Málaga",
        fechaDePublicacion: "2024-06-12",
        cantidadDeFotos: 17,
        metrosCuadrados: 262,
        precioDeVenta: 567831
    },
    {
        nombre: "Propiedad 481",
        direccion: "Calle 43, Madrid",
        fechaDePublicacion: "2024-06-10",
        cantidadDeFotos: 8,
        metrosCuadrados: 125,
        precioDeVenta: 261754
    },
    {
        nombre: "Propiedad 482",
        direccion: "Calle 78, Palma",
        fechaDePublicacion: "2024-06-21",
        cantidadDeFotos: 15,
        metrosCuadrados: 475,
        precioDeVenta: 52780
    },
    {
        nombre: "Propiedad 483",
        direccion: "Calle 87, Valencia",
        fechaDePublicacion: "2024-06-03",
        cantidadDeFotos: 3,
        metrosCuadrados: 167,
        precioDeVenta: 372649
    },
    {
        nombre: "Propiedad 484",
        direccion: "Calle 24, Madrid",
        fechaDePublicacion: "2024-06-19",
        cantidadDeFotos: 6,
        metrosCuadrados: 409,
        precioDeVenta: 614062
    },
    {
        nombre: "Propiedad 485",
        direccion: "Calle 65, Bilbao",
        fechaDePublicacion: "2024-06-17",
        cantidadDeFotos: 19,
        metrosCuadrados: 432,
        precioDeVenta: 933187
    },
    {
        nombre: "Propiedad 486",
        direccion: "Calle 45, Murcia",
        fechaDePublicacion: "2024-06-02",
        cantidadDeFotos: 13,
        metrosCuadrados: 216,
        precioDeVenta: 158961
    },
    {
        nombre: "Propiedad 487",
        direccion: "Calle 24, Zaragoza",
        fechaDePublicacion: "2024-06-04",
        cantidadDeFotos: 10,
        metrosCuadrados: 322,
        precioDeVenta: 148489
    },
    {
        nombre: "Propiedad 488",
        direccion: "Calle 2, Barcelona",
        fechaDePublicacion: "2024-06-24",
        cantidadDeFotos: 13,
        metrosCuadrados: 112,
        precioDeVenta: 917317
    },
    {
        nombre: "Propiedad 489",
        direccion: "Calle 69, Sevilla",
        fechaDePublicacion: "2024-06-07",
        cantidadDeFotos: 17,
        metrosCuadrados: 198,
        precioDeVenta: 591302
    },
    {
        nombre: "Propiedad 490",
        direccion: "Calle 74, Barcelona",
        fechaDePublicacion: "2024-06-28",
        cantidadDeFotos: 17,
        metrosCuadrados: 135,
        precioDeVenta: 431809
    },
    {
        nombre: "Propiedad 491",
        direccion: "Calle 95, Palma",
        fechaDePublicacion: "2024-06-08",
        cantidadDeFotos: 10,
        metrosCuadrados: 292,
        precioDeVenta: 332364
    },
    {
        nombre: "Propiedad 492",
        direccion: "Calle 58, Las Palmas de Gran Canaria",
        fechaDePublicacion: "2024-06-17",
        cantidadDeFotos: 15,
        metrosCuadrados: 361,
        precioDeVenta: 310903
    },
    {
        nombre: "Propiedad 493",
        direccion: "Calle 17, Sevilla",
        fechaDePublicacion: "2024-06-19",
        cantidadDeFotos: 8,
        metrosCuadrados: 183,
        precioDeVenta: 942891
    },
    {
        nombre: "Propiedad 494",
        direccion: "Calle 67, Málaga",
        fechaDePublicacion: "2024-06-17",
        cantidadDeFotos: 18,
        metrosCuadrados: 144,
        precioDeVenta: 675690
    },
    {
        nombre: "Propiedad 495",
        direccion: "Calle 95, Valencia",
        fechaDePublicacion: "2024-06-25",
        cantidadDeFotos: 17,
        metrosCuadrados: 52,
        precioDeVenta: 486506
    },
    {
        nombre: "Propiedad 496",
        direccion: "Calle 16, Valencia",
        fechaDePublicacion: "2024-06-28",
        cantidadDeFotos: 6,
        metrosCuadrados: 113,
        precioDeVenta: 774395
    },
    {
        nombre: "Propiedad 497",
        direccion: "Calle 84, Madrid",
        fechaDePublicacion: "2024-06-07",
        cantidadDeFotos: 16,
        metrosCuadrados: 346,
        precioDeVenta: 235981
    },
    {
        nombre: "Propiedad 498",
        direccion: "Calle 9, Barcelona",
        fechaDePublicacion: "2024-06-07",
        cantidadDeFotos: 14,
        metrosCuadrados: 262,
        precioDeVenta: 690003
    },
    {
        nombre: "Propiedad 499",
        direccion: "Calle 44, Murcia",
        fechaDePublicacion: "2024-06-20",
        cantidadDeFotos: 3,
        metrosCuadrados: 344,
        precioDeVenta: 665331
    },
    {
        nombre: "Propiedad 500",
        direccion: "Calle 42, Madrid",
        fechaDePublicacion: "2024-06-14",
        cantidadDeFotos: 4,
        metrosCuadrados: 409,
        precioDeVenta: 310966
    },
    {
        nombre: "Propiedad 501",
        direccion: "Calle 79, Las Palmas de Gran Canaria",
        fechaDePublicacion: "2024-06-14",
        cantidadDeFotos: 10,
        metrosCuadrados: 417,
        precioDeVenta: 498172
    },
    {
        nombre: "Propiedad 502",
        direccion: "Calle 29, Málaga",
        fechaDePublicacion: "2024-06-19",
        cantidadDeFotos: 16,
        metrosCuadrados: 330,
        precioDeVenta: 481275
    },
    {
        nombre: "Propiedad 503",
        direccion: "Calle 52, Málaga",
        fechaDePublicacion: "2024-06-17",
        cantidadDeFotos: 19,
        metrosCuadrados: 482,
        precioDeVenta: 489446
    },
    {
        nombre: "Propiedad 504",
        direccion: "Calle 48, Málaga",
        fechaDePublicacion: "2024-06-29",
        cantidadDeFotos: 17,
        metrosCuadrados: 361,
        precioDeVenta: 981949
    },
    {
        nombre: "Propiedad 505",
        direccion: "Calle 19, Zaragoza",
        fechaDePublicacion: "2024-06-11",
        cantidadDeFotos: 8,
        metrosCuadrados: 399,
        precioDeVenta: 729227
    },
    {
        nombre: "Propiedad 506",
        direccion: "Calle 76, Sevilla",
        fechaDePublicacion: "2024-06-05",
        cantidadDeFotos: 4,
        metrosCuadrados: 474,
        precioDeVenta: 153305
    },
    {
        nombre: "Propiedad 507",
        direccion: "Calle 88, Madrid",
        fechaDePublicacion: "2024-06-18",
        cantidadDeFotos: 8,
        metrosCuadrados: 135,
        precioDeVenta: 977862
    },
    {
        nombre: "Propiedad 508",
        direccion: "Calle 89, Barcelona",
        fechaDePublicacion: "2024-06-13",
        cantidadDeFotos: 5,
        metrosCuadrados: 195,
        precioDeVenta: 280397
    },
    {
        nombre: "Propiedad 509",
        direccion: "Calle 52, Palma",
        fechaDePublicacion: "2024-06-03",
        cantidadDeFotos: 1,
        metrosCuadrados: 189,
        precioDeVenta: 371265
    },
    {
        nombre: "Propiedad 510",
        direccion: "Calle 86, Málaga",
        fechaDePublicacion: "2024-06-02",
        cantidadDeFotos: 11,
        metrosCuadrados: 482,
        precioDeVenta: 377235
    },
    {
        nombre: "Propiedad 511",
        direccion: "Calle 55, Barcelona",
        fechaDePublicacion: "2024-06-17",
        cantidadDeFotos: 20,
        metrosCuadrados: 158,
        precioDeVenta: 149490
    },
    {
        nombre: "Propiedad 512",
        direccion: "Calle 57, Palma",
        fechaDePublicacion: "2024-06-23",
        cantidadDeFotos: 5,
        metrosCuadrados: 431,
        precioDeVenta: 462875
    },
    {
        nombre: "Propiedad 513",
        direccion: "Calle 58, Murcia",
        fechaDePublicacion: "2024-06-10",
        cantidadDeFotos: 4,
        metrosCuadrados: 367,
        precioDeVenta: 219397
    },
    {
        nombre: "Propiedad 514",
        direccion: "Calle 49, Bilbao",
        fechaDePublicacion: "2024-06-24",
        cantidadDeFotos: 11,
        metrosCuadrados: 130,
        precioDeVenta: 122505
    },
    {
        nombre: "Propiedad 515",
        direccion: "Calle 83, Las Palmas de Gran Canaria",
        fechaDePublicacion: "2024-06-29",
        cantidadDeFotos: 1,
        metrosCuadrados: 476,
        precioDeVenta: 607334
    },
    {
        nombre: "Propiedad 516",
        direccion: "Calle 47, Barcelona",
        fechaDePublicacion: "2024-06-05",
        cantidadDeFotos: 17,
        metrosCuadrados: 165,
        precioDeVenta: 211424
    },
    {
        nombre: "Propiedad 517",
        direccion: "Calle 49, Sevilla",
        fechaDePublicacion: "2024-06-23",
        cantidadDeFotos: 5,
        metrosCuadrados: 361,
        precioDeVenta: 881842
    },
    {
        nombre: "Propiedad 518",
        direccion: "Calle 73, Las Palmas de Gran Canaria",
        fechaDePublicacion: "2024-06-17",
        cantidadDeFotos: 12,
        metrosCuadrados: 300,
        precioDeVenta: 903011
    },
    {
        nombre: "Propiedad 519",
        direccion: "Calle 81, Barcelona",
        fechaDePublicacion: "2024-06-10",
        cantidadDeFotos: 9,
        metrosCuadrados: 348,
        precioDeVenta: 860240
    },
    {
        nombre: "Propiedad 520",
        direccion: "Calle 3, Barcelona",
        fechaDePublicacion: "2024-06-04",
        cantidadDeFotos: 19,
        metrosCuadrados: 232,
        precioDeVenta: 942377
    },
    {
        nombre: "Propiedad 521",
        direccion: "Calle 1, Zaragoza",
        fechaDePublicacion: "2024-06-12",
        cantidadDeFotos: 15,
        metrosCuadrados: 357,
        precioDeVenta: 753180
    },
    {
        nombre: "Propiedad 522",
        direccion: "Calle 83, Madrid",
        fechaDePublicacion: "2024-06-10",
        cantidadDeFotos: 19,
        metrosCuadrados: 375,
        precioDeVenta: 818995
    },
    {
        nombre: "Propiedad 523",
        direccion: "Calle 2, Madrid",
        fechaDePublicacion: "2024-06-12",
        cantidadDeFotos: 1,
        metrosCuadrados: 185,
        precioDeVenta: 304017
    },
    {
        nombre: "Propiedad 524",
        direccion: "Calle 62, Madrid",
        fechaDePublicacion: "2024-06-05",
        cantidadDeFotos: 7,
        metrosCuadrados: 424,
        precioDeVenta: 870786
    },
    {
        nombre: "Propiedad 525",
        direccion: "Calle 93, Barcelona",
        fechaDePublicacion: "2024-06-04",
        cantidadDeFotos: 1,
        metrosCuadrados: 143,
        precioDeVenta: 719465
    },
    {
        nombre: "Propiedad 526",
        direccion: "Calle 6, Madrid",
        fechaDePublicacion: "2024-06-11",
        cantidadDeFotos: 18,
        metrosCuadrados: 253,
        precioDeVenta: 960771
    },
    {
        nombre: "Propiedad 527",
        direccion: "Calle 94, Barcelona",
        fechaDePublicacion: "2024-06-14",
        cantidadDeFotos: 17,
        metrosCuadrados: 207,
        precioDeVenta: 300489
    },
    {
        nombre: "Propiedad 528",
        direccion: "Calle 49, Valencia",
        fechaDePublicacion: "2024-06-01",
        cantidadDeFotos: 9,
        metrosCuadrados: 470,
        precioDeVenta: 915129
    },
    {
        nombre: "Propiedad 529",
        direccion: "Calle 89, Barcelona",
        fechaDePublicacion: "2024-06-16",
        cantidadDeFotos: 7,
        metrosCuadrados: 357,
        precioDeVenta: 918231
    },
    {
        nombre: "Propiedad 530",
        direccion: "Calle 23, Valencia",
        fechaDePublicacion: "2024-06-04",
        cantidadDeFotos: 8,
        metrosCuadrados: 417,
        precioDeVenta: 636166
    },
    {
        nombre: "Propiedad 531",
        direccion: "Calle 71, Murcia",
        fechaDePublicacion: "2024-06-28",
        cantidadDeFotos: 9,
        metrosCuadrados: 373,
        precioDeVenta: 508237
    },
    {
        nombre: "Propiedad 532",
        direccion: "Calle 34, Málaga",
        fechaDePublicacion: "2024-06-23",
        cantidadDeFotos: 2,
        metrosCuadrados: 282,
        precioDeVenta: 852917
    },
    {
        nombre: "Propiedad 533",
        direccion: "Calle 11, Barcelona",
        fechaDePublicacion: "2024-06-02",
        cantidadDeFotos: 6,
        metrosCuadrados: 484,
        precioDeVenta: 882903
    },
    {
        nombre: "Propiedad 534",
        direccion: "Calle 34, Barcelona",
        fechaDePublicacion: "2024-06-27",
        cantidadDeFotos: 8,
        metrosCuadrados: 480,
        precioDeVenta: 408291
    },
    {
        nombre: "Propiedad 535",
        direccion: "Calle 91, Bilbao",
        fechaDePublicacion: "2024-06-24",
        cantidadDeFotos: 14,
        metrosCuadrados: 72,
        precioDeVenta: 830021
    },
    {
        nombre: "Propiedad 536",
        direccion: "Calle 8, Sevilla",
        fechaDePublicacion: "2024-06-01",
        cantidadDeFotos: 18,
        metrosCuadrados: 442,
        precioDeVenta: 887209
    },
    {
        nombre: "Propiedad 537",
        direccion: "Calle 93, Valencia",
        fechaDePublicacion: "2024-06-23",
        cantidadDeFotos: 7,
        metrosCuadrados: 340,
        precioDeVenta: 375915
    },
    {
        nombre: "Propiedad 538",
        direccion: "Calle 48, Valencia",
        fechaDePublicacion: "2024-06-23",
        cantidadDeFotos: 1,
        metrosCuadrados: 161,
        precioDeVenta: 352857
    },
    {
        nombre: "Propiedad 539",
        direccion: "Calle 96, Bilbao",
        fechaDePublicacion: "2024-06-27",
        cantidadDeFotos: 3,
        metrosCuadrados: 221,
        precioDeVenta: 141128
    },
    {
        nombre: "Propiedad 540",
        direccion: "Calle 84, Zaragoza",
        fechaDePublicacion: "2024-06-26",
        cantidadDeFotos: 20,
        metrosCuadrados: 314,
        precioDeVenta: 667008
    },
    {
        nombre: "Propiedad 541",
        direccion: "Calle 87, Murcia",
        fechaDePublicacion: "2024-06-11",
        cantidadDeFotos: 5,
        metrosCuadrados: 156,
        precioDeVenta: 393731
    },
    {
        nombre: "Propiedad 542",
        direccion: "Calle 42, Las Palmas de Gran Canaria",
        fechaDePublicacion: "2024-06-09",
        cantidadDeFotos: 5,
        metrosCuadrados: 410,
        precioDeVenta: 505256
    },
    {
        nombre: "Propiedad 543",
        direccion: "Calle 28, Las Palmas de Gran Canaria",
        fechaDePublicacion: "2024-06-17",
        cantidadDeFotos: 3,
        metrosCuadrados: 67,
        precioDeVenta: 558024
    },
    {
        nombre: "Propiedad 544",
        direccion: "Calle 72, Palma",
        fechaDePublicacion: "2024-06-06",
        cantidadDeFotos: 19,
        metrosCuadrados: 263,
        precioDeVenta: 539264
    },
    {
        nombre: "Propiedad 545",
        direccion: "Calle 83, Palma",
        fechaDePublicacion: "2024-06-21",
        cantidadDeFotos: 18,
        metrosCuadrados: 268,
        precioDeVenta: 680638
    },
    {
        nombre: "Propiedad 546",
        direccion: "Calle 1, Bilbao",
        fechaDePublicacion: "2024-06-14",
        cantidadDeFotos: 8,
        metrosCuadrados: 245,
        precioDeVenta: 988759
    },
    {
        nombre: "Propiedad 547",
        direccion: "Calle 40, Las Palmas de Gran Canaria",
        fechaDePublicacion: "2024-06-14",
        cantidadDeFotos: 10,
        metrosCuadrados: 266,
        precioDeVenta: 821399
    },
    {
        nombre: "Propiedad 548",
        direccion: "Calle 42, Bilbao",
        fechaDePublicacion: "2024-06-11",
        cantidadDeFotos: 13,
        metrosCuadrados: 90,
        precioDeVenta: 111587
    },
    {
        nombre: "Propiedad 549",
        direccion: "Calle 18, Málaga",
        fechaDePublicacion: "2024-06-11",
        cantidadDeFotos: 2,
        metrosCuadrados: 204,
        precioDeVenta: 842054
    },
    {
        nombre: "Propiedad 550",
        direccion: "Calle 40, Palma",
        fechaDePublicacion: "2024-06-19",
        cantidadDeFotos: 18,
        metrosCuadrados: 253,
        precioDeVenta: 961825
    },
    {
        nombre: "Propiedad 551",
        direccion: "Calle 84, Palma",
        fechaDePublicacion: "2024-06-21",
        cantidadDeFotos: 20,
        metrosCuadrados: 295,
        precioDeVenta: 991386
    },
    {
        nombre: "Propiedad 552",
        direccion: "Calle 17, Madrid",
        fechaDePublicacion: "2024-06-17",
        cantidadDeFotos: 5,
        metrosCuadrados: 67,
        precioDeVenta: 318971
    },
    {
        nombre: "Propiedad 553",
        direccion: "Calle 77, Palma",
        fechaDePublicacion: "2024-06-29",
        cantidadDeFotos: 3,
        metrosCuadrados: 95,
        precioDeVenta: 727458
    },
    {
        nombre: "Propiedad 554",
        direccion: "Calle 15, Zaragoza",
        fechaDePublicacion: "2024-06-11",
        cantidadDeFotos: 11,
        metrosCuadrados: 471,
        precioDeVenta: 533785
    },
    {
        nombre: "Propiedad 555",
        direccion: "Calle 13, Bilbao",
        fechaDePublicacion: "2024-06-05",
        cantidadDeFotos: 16,
        metrosCuadrados: 426,
        precioDeVenta: 295522
    },
    {
        nombre: "Propiedad 556",
        direccion: "Calle 79, Murcia",
        fechaDePublicacion: "2024-06-05",
        cantidadDeFotos: 7,
        metrosCuadrados: 220,
        precioDeVenta: 222251
    },
    {
        nombre: "Propiedad 557",
        direccion: "Calle 56, Zaragoza",
        fechaDePublicacion: "2024-06-02",
        cantidadDeFotos: 10,
        metrosCuadrados: 150,
        precioDeVenta: 732554
    },
    {
        nombre: "Propiedad 558",
        direccion: "Calle 37, Las Palmas de Gran Canaria",
        fechaDePublicacion: "2024-06-04",
        cantidadDeFotos: 6,
        metrosCuadrados: 304,
        precioDeVenta: 923965
    },
    {
        nombre: "Propiedad 559",
        direccion: "Calle 2, Palma",
        fechaDePublicacion: "2024-06-09",
        cantidadDeFotos: 7,
        metrosCuadrados: 296,
        precioDeVenta: 644826
    },
    {
        nombre: "Propiedad 560",
        direccion: "Calle 4, Barcelona",
        fechaDePublicacion: "2024-06-27",
        cantidadDeFotos: 19,
        metrosCuadrados: 210,
        precioDeVenta: 78510
    },
    {
        nombre: "Propiedad 561",
        direccion: "Calle 95, Málaga",
        fechaDePublicacion: "2024-06-25",
        cantidadDeFotos: 16,
        metrosCuadrados: 95,
        precioDeVenta: 614336
    },
    {
        nombre: "Propiedad 562",
        direccion: "Calle 5, Bilbao",
        fechaDePublicacion: "2024-06-20",
        cantidadDeFotos: 15,
        metrosCuadrados: 183,
        precioDeVenta: 80498
    },
    {
        nombre: "Propiedad 563",
        direccion: "Calle 32, Barcelona",
        fechaDePublicacion: "2024-06-19",
        cantidadDeFotos: 14,
        metrosCuadrados: 322,
        precioDeVenta: 651393
    },
    {
        nombre: "Propiedad 564",
        direccion: "Calle 33, Zaragoza",
        fechaDePublicacion: "2024-06-03",
        cantidadDeFotos: 12,
        metrosCuadrados: 446,
        precioDeVenta: 804479
    },
    {
        nombre: "Propiedad 565",
        direccion: "Calle 55, Sevilla",
        fechaDePublicacion: "2024-06-26",
        cantidadDeFotos: 19,
        metrosCuadrados: 264,
        precioDeVenta: 884494
    },
    {
        nombre: "Propiedad 566",
        direccion: "Calle 61, Bilbao",
        fechaDePublicacion: "2024-06-07",
        cantidadDeFotos: 7,
        metrosCuadrados: 240,
        precioDeVenta: 166695
    },
    {
        nombre: "Propiedad 567",
        direccion: "Calle 6, Murcia",
        fechaDePublicacion: "2024-06-26",
        cantidadDeFotos: 1,
        metrosCuadrados: 102,
        precioDeVenta: 416543
    },
    {
        nombre: "Propiedad 568",
        direccion: "Calle 76, Sevilla",
        fechaDePublicacion: "2024-06-01",
        cantidadDeFotos: 19,
        metrosCuadrados: 388,
        precioDeVenta: 196608
    },
    {
        nombre: "Propiedad 569",
        direccion: "Calle 3, Zaragoza",
        fechaDePublicacion: "2024-06-27",
        cantidadDeFotos: 4,
        metrosCuadrados: 187,
        precioDeVenta: 863579
    },
    {
        nombre: "Propiedad 570",
        direccion: "Calle 78, Bilbao",
        fechaDePublicacion: "2024-06-27",
        cantidadDeFotos: 9,
        metrosCuadrados: 499,
        precioDeVenta: 543536
    },
    {
        nombre: "Propiedad 571",
        direccion: "Calle 47, Palma",
        fechaDePublicacion: "2024-06-22",
        cantidadDeFotos: 8,
        metrosCuadrados: 454,
        precioDeVenta: 880607
    },
    {
        nombre: "Propiedad 572",
        direccion: "Calle 57, Bilbao",
        fechaDePublicacion: "2024-06-23",
        cantidadDeFotos: 2,
        metrosCuadrados: 173,
        precioDeVenta: 337811
    },
    {
        nombre: "Propiedad 573",
        direccion: "Calle 54, Bilbao",
        fechaDePublicacion: "2024-06-14",
        cantidadDeFotos: 20,
        metrosCuadrados: 212,
        precioDeVenta: 357582
    },
    {
        nombre: "Propiedad 574",
        direccion: "Calle 88, Las Palmas de Gran Canaria",
        fechaDePublicacion: "2024-06-13",
        cantidadDeFotos: 15,
        metrosCuadrados: 376,
        precioDeVenta: 504744
    },
    {
        nombre: "Propiedad 575",
        direccion: "Calle 49, Sevilla",
        fechaDePublicacion: "2024-06-05",
        cantidadDeFotos: 17,
        metrosCuadrados: 378,
        precioDeVenta: 603741
    },
    {
        nombre: "Propiedad 576",
        direccion: "Calle 70, Murcia",
        fechaDePublicacion: "2024-06-18",
        cantidadDeFotos: 5,
        metrosCuadrados: 123,
        precioDeVenta: 164804
    },
    {
        nombre: "Propiedad 577",
        direccion: "Calle 8, Palma",
        fechaDePublicacion: "2024-06-11",
        cantidadDeFotos: 12,
        metrosCuadrados: 112,
        precioDeVenta: 265903
    },
    {
        nombre: "Propiedad 578",
        direccion: "Calle 24, Madrid",
        fechaDePublicacion: "2024-06-10",
        cantidadDeFotos: 16,
        metrosCuadrados: 189,
        precioDeVenta: 999484
    },
    {
        nombre: "Propiedad 579",
        direccion: "Calle 88, Sevilla",
        fechaDePublicacion: "2024-06-14",
        cantidadDeFotos: 6,
        metrosCuadrados: 496,
        precioDeVenta: 596380
    },
    {
        nombre: "Propiedad 580",
        direccion: "Calle 14, Murcia",
        fechaDePublicacion: "2024-05-31",
        cantidadDeFotos: 2,
        metrosCuadrados: 51,
        precioDeVenta: 176463
    },
    {
        nombre: "Propiedad 581",
        direccion: "Calle 46, Zaragoza",
        fechaDePublicacion: "2024-06-19",
        cantidadDeFotos: 10,
        metrosCuadrados: 245,
        precioDeVenta: 429083
    },
    {
        nombre: "Propiedad 582",
        direccion: "Calle 49, Las Palmas de Gran Canaria",
        fechaDePublicacion: "2024-06-05",
        cantidadDeFotos: 1,
        metrosCuadrados: 248,
        precioDeVenta: 930456
    },
    {
        nombre: "Propiedad 583",
        direccion: "Calle 1, Palma",
        fechaDePublicacion: "2024-06-25",
        cantidadDeFotos: 5,
        metrosCuadrados: 81,
        precioDeVenta: 806322
    },
    {
        nombre: "Propiedad 584",
        direccion: "Calle 18, Valencia",
        fechaDePublicacion: "2024-06-09",
        cantidadDeFotos: 7,
        metrosCuadrados: 167,
        precioDeVenta: 928133
    },
    {
        nombre: "Propiedad 585",
        direccion: "Calle 82, Madrid",
        fechaDePublicacion: "2024-06-13",
        cantidadDeFotos: 12,
        metrosCuadrados: 295,
        precioDeVenta: 541477
    },
    {
        nombre: "Propiedad 586",
        direccion: "Calle 30, Barcelona",
        fechaDePublicacion: "2024-06-21",
        cantidadDeFotos: 5,
        metrosCuadrados: 400,
        precioDeVenta: 549028
    },
    {
        nombre: "Propiedad 587",
        direccion: "Calle 51, Murcia",
        fechaDePublicacion: "2024-06-03",
        cantidadDeFotos: 9,
        metrosCuadrados: 337,
        precioDeVenta: 710364
    },
    {
        nombre: "Propiedad 588",
        direccion: "Calle 2, Bilbao",
        fechaDePublicacion: "2024-06-27",
        cantidadDeFotos: 17,
        metrosCuadrados: 80,
        precioDeVenta: 577575
    },
    {
        nombre: "Propiedad 589",
        direccion: "Calle 11, Madrid",
        fechaDePublicacion: "2024-06-21",
        cantidadDeFotos: 7,
        metrosCuadrados: 306,
        precioDeVenta: 176796
    },
    {
        nombre: "Propiedad 590",
        direccion: "Calle 39, Zaragoza",
        fechaDePublicacion: "2024-06-10",
        cantidadDeFotos: 16,
        metrosCuadrados: 462,
        precioDeVenta: 250356
    },
    {
        nombre: "Propiedad 591",
        direccion: "Calle 63, Palma",
        fechaDePublicacion: "2024-06-09",
        cantidadDeFotos: 1,
        metrosCuadrados: 379,
        precioDeVenta: 599411
    },
    {
        nombre: "Propiedad 592",
        direccion: "Calle 11, Madrid",
        fechaDePublicacion: "2024-06-23",
        cantidadDeFotos: 17,
        metrosCuadrados: 255,
        precioDeVenta: 161879
    },
    {
        nombre: "Propiedad 593",
        direccion: "Calle 54, Sevilla",
        fechaDePublicacion: "2024-06-28",
        cantidadDeFotos: 2,
        metrosCuadrados: 383,
        precioDeVenta: 183993
    },
    {
        nombre: "Propiedad 594",
        direccion: "Calle 15, Bilbao",
        fechaDePublicacion: "2024-06-07",
        cantidadDeFotos: 18,
        metrosCuadrados: 76,
        precioDeVenta: 613278
    },
    {
        nombre: "Propiedad 595",
        direccion: "Calle 56, Madrid",
        fechaDePublicacion: "2024-06-21",
        cantidadDeFotos: 18,
        metrosCuadrados: 177,
        precioDeVenta: 451377
    },
    {
        nombre: "Propiedad 596",
        direccion: "Calle 26, Barcelona",
        fechaDePublicacion: "2024-06-04",
        cantidadDeFotos: 18,
        metrosCuadrados: 172,
        precioDeVenta: 350414
    },
    {
        nombre: "Propiedad 597",
        direccion: "Calle 38, Madrid",
        fechaDePublicacion: "2024-06-15",
        cantidadDeFotos: 4,
        metrosCuadrados: 94,
        precioDeVenta: 342639
    },
    {
        nombre: "Propiedad 598",
        direccion: "Calle 35, Palma",
        fechaDePublicacion: "2024-06-19",
        cantidadDeFotos: 7,
        metrosCuadrados: 356,
        precioDeVenta: 604880
    },
    {
        nombre: "Propiedad 599",
        direccion: "Calle 35, Murcia",
        fechaDePublicacion: "2024-06-20",
        cantidadDeFotos: 17,
        metrosCuadrados: 488,
        precioDeVenta: 419160
    },
    {
        nombre: "Propiedad 600",
        direccion: "Calle 84, Murcia",
        fechaDePublicacion: "2024-06-02",
        cantidadDeFotos: 20,
        metrosCuadrados: 493,
        precioDeVenta: 79867
    },
    {
        nombre: "Propiedad 601",
        direccion: "Calle 25, Zaragoza",
        fechaDePublicacion: "2024-06-19",
        cantidadDeFotos: 5,
        metrosCuadrados: 54,
        precioDeVenta: 225823
    },
    {
        nombre: "Propiedad 602",
        direccion: "Calle 2, Málaga",
        fechaDePublicacion: "2024-06-27",
        cantidadDeFotos: 18,
        metrosCuadrados: 99,
        precioDeVenta: 722772
    },
    {
        nombre: "Propiedad 603",
        direccion: "Calle 16, Valencia",
        fechaDePublicacion: "2024-06-22",
        cantidadDeFotos: 12,
        metrosCuadrados: 489,
        precioDeVenta: 914611
    },
    {
        nombre: "Propiedad 604",
        direccion: "Calle 23, Las Palmas de Gran Canaria",
        fechaDePublicacion: "2024-06-11",
        cantidadDeFotos: 19,
        metrosCuadrados: 386,
        precioDeVenta: 415951
    },
    {
        nombre: "Propiedad 605",
        direccion: "Calle 6, Madrid",
        fechaDePublicacion: "2024-06-23",
        cantidadDeFotos: 20,
        metrosCuadrados: 233,
        precioDeVenta: 531701
    },
    {
        nombre: "Propiedad 606",
        direccion: "Calle 61, Valencia",
        fechaDePublicacion: "2024-06-22",
        cantidadDeFotos: 17,
        metrosCuadrados: 246,
        precioDeVenta: 165294
    },
    {
        nombre: "Propiedad 607",
        direccion: "Calle 80, Bilbao",
        fechaDePublicacion: "2024-06-03",
        cantidadDeFotos: 20,
        metrosCuadrados: 279,
        precioDeVenta: 241803
    },
    {
        nombre: "Propiedad 608",
        direccion: "Calle 94, Valencia",
        fechaDePublicacion: "2024-06-12",
        cantidadDeFotos: 5,
        metrosCuadrados: 351,
        precioDeVenta: 516413
    },
    {
        nombre: "Propiedad 609",
        direccion: "Calle 33, Málaga",
        fechaDePublicacion: "2024-06-07",
        cantidadDeFotos: 17,
        metrosCuadrados: 126,
        precioDeVenta: 454380
    },
    {
        nombre: "Propiedad 610",
        direccion: "Calle 21, Málaga",
        fechaDePublicacion: "2024-06-10",
        cantidadDeFotos: 2,
        metrosCuadrados: 215,
        precioDeVenta: 311384
    },
    {
        nombre: "Propiedad 611",
        direccion: "Calle 77, Sevilla",
        fechaDePublicacion: "2024-06-06",
        cantidadDeFotos: 13,
        metrosCuadrados: 302,
        precioDeVenta: 381942
    },
    {
        nombre: "Propiedad 612",
        direccion: "Calle 71, Sevilla",
        fechaDePublicacion: "2024-06-20",
        cantidadDeFotos: 14,
        metrosCuadrados: 140,
        precioDeVenta: 778625
    },
    {
        nombre: "Propiedad 613",
        direccion: "Calle 67, Zaragoza",
        fechaDePublicacion: "2024-06-23",
        cantidadDeFotos: 6,
        metrosCuadrados: 291,
        precioDeVenta: 285606
    },
    {
        nombre: "Propiedad 614",
        direccion: "Calle 4, Valencia",
        fechaDePublicacion: "2024-06-06",
        cantidadDeFotos: 11,
        metrosCuadrados: 366,
        precioDeVenta: 592137
    },
    {
        nombre: "Propiedad 615",
        direccion: "Calle 91, Las Palmas de Gran Canaria",
        fechaDePublicacion: "2024-06-04",
        cantidadDeFotos: 3,
        metrosCuadrados: 127,
        precioDeVenta: 303340
    },
    {
        nombre: "Propiedad 616",
        direccion: "Calle 99, Málaga",
        fechaDePublicacion: "2024-06-11",
        cantidadDeFotos: 11,
        metrosCuadrados: 348,
        precioDeVenta: 447867
    },
    {
        nombre: "Propiedad 617",
        direccion: "Calle 36, Sevilla",
        fechaDePublicacion: "2024-06-06",
        cantidadDeFotos: 16,
        metrosCuadrados: 295,
        precioDeVenta: 582147
    },
    {
        nombre: "Propiedad 618",
        direccion: "Calle 91, Las Palmas de Gran Canaria",
        fechaDePublicacion: "2024-06-25",
        cantidadDeFotos: 5,
        metrosCuadrados: 128,
        precioDeVenta: 349099
    },
    {
        nombre: "Propiedad 619",
        direccion: "Calle 20, Barcelona",
        fechaDePublicacion: "2024-06-17",
        cantidadDeFotos: 5,
        metrosCuadrados: 429,
        precioDeVenta: 435402
    },
    {
        nombre: "Propiedad 620",
        direccion: "Calle 42, Zaragoza",
        fechaDePublicacion: "2024-06-12",
        cantidadDeFotos: 8,
        metrosCuadrados: 359,
        precioDeVenta: 194011
    },
    {
        nombre: "Propiedad 621",
        direccion: "Calle 15, Las Palmas de Gran Canaria",
        fechaDePublicacion: "2024-06-13",
        cantidadDeFotos: 20,
        metrosCuadrados: 311,
        precioDeVenta: 645799
    },
    {
        nombre: "Propiedad 622",
        direccion: "Calle 60, Málaga",
        fechaDePublicacion: "2024-06-18",
        cantidadDeFotos: 8,
        metrosCuadrados: 205,
        precioDeVenta: 234502
    },
    {
        nombre: "Propiedad 623",
        direccion: "Calle 5, Sevilla",
        fechaDePublicacion: "2024-06-15",
        cantidadDeFotos: 9,
        metrosCuadrados: 140,
        precioDeVenta: 648338
    },
    {
        nombre: "Propiedad 624",
        direccion: "Calle 29, Madrid",
        fechaDePublicacion: "2024-06-27",
        cantidadDeFotos: 18,
        metrosCuadrados: 445,
        precioDeVenta: 80968
    },
    {
        nombre: "Propiedad 625",
        direccion: "Calle 36, Barcelona",
        fechaDePublicacion: "2024-06-16",
        cantidadDeFotos: 20,
        metrosCuadrados: 394,
        precioDeVenta: 525059
    },
    {
        nombre: "Propiedad 626",
        direccion: "Calle 62, Bilbao",
        fechaDePublicacion: "2024-06-02",
        cantidadDeFotos: 4,
        metrosCuadrados: 393,
        precioDeVenta: 98768
    },
    {
        nombre: "Propiedad 627",
        direccion: "Calle 98, Valencia",
        fechaDePublicacion: "2024-06-14",
        cantidadDeFotos: 13,
        metrosCuadrados: 141,
        precioDeVenta: 693790
    },
    {
        nombre: "Propiedad 628",
        direccion: "Calle 63, Madrid",
        fechaDePublicacion: "2024-06-27",
        cantidadDeFotos: 19,
        metrosCuadrados: 442,
        precioDeVenta: 676665
    },
    {
        nombre: "Propiedad 629",
        direccion: "Calle 68, Bilbao",
        fechaDePublicacion: "2024-06-16",
        cantidadDeFotos: 16,
        metrosCuadrados: 133,
        precioDeVenta: 255399
    },
    {
        nombre: "Propiedad 630",
        direccion: "Calle 23, Las Palmas de Gran Canaria",
        fechaDePublicacion: "2024-06-18",
        cantidadDeFotos: 2,
        metrosCuadrados: 138,
        precioDeVenta: 525621
    },
    {
        nombre: "Propiedad 631",
        direccion: "Calle 65, Sevilla",
        fechaDePublicacion: "2024-06-18",
        cantidadDeFotos: 8,
        metrosCuadrados: 183,
        precioDeVenta: 748232
    },
    {
        nombre: "Propiedad 632",
        direccion: "Calle 30, Murcia",
        fechaDePublicacion: "2024-06-26",
        cantidadDeFotos: 7,
        metrosCuadrados: 407,
        precioDeVenta: 131499
    },
    {
        nombre: "Propiedad 633",
        direccion: "Calle 50, Palma",
        fechaDePublicacion: "2024-06-22",
        cantidadDeFotos: 18,
        metrosCuadrados: 379,
        precioDeVenta: 376022
    },
    {
        nombre: "Propiedad 634",
        direccion: "Calle 18, Barcelona",
        fechaDePublicacion: "2024-06-20",
        cantidadDeFotos: 13,
        metrosCuadrados: 78,
        precioDeVenta: 470080
    },
    {
        nombre: "Propiedad 635",
        direccion: "Calle 53, Málaga",
        fechaDePublicacion: "2024-06-10",
        cantidadDeFotos: 9,
        metrosCuadrados: 176,
        precioDeVenta: 267900
    },
    {
        nombre: "Propiedad 636",
        direccion: "Calle 76, Málaga",
        fechaDePublicacion: "2024-06-28",
        cantidadDeFotos: 16,
        metrosCuadrados: 246,
        precioDeVenta: 193794
    },
    {
        nombre: "Propiedad 637",
        direccion: "Calle 14, Palma",
        fechaDePublicacion: "2024-06-20",
        cantidadDeFotos: 1,
        metrosCuadrados: 427,
        precioDeVenta: 671122
    },
    {
        nombre: "Propiedad 638",
        direccion: "Calle 48, Sevilla",
        fechaDePublicacion: "2024-06-09",
        cantidadDeFotos: 2,
        metrosCuadrados: 350,
        precioDeVenta: 819465
    },
    {
        nombre: "Propiedad 639",
        direccion: "Calle 68, Barcelona",
        fechaDePublicacion: "2024-06-02",
        cantidadDeFotos: 15,
        metrosCuadrados: 235,
        precioDeVenta: 491432
    },
    {
        nombre: "Propiedad 640",
        direccion: "Calle 46, Málaga",
        fechaDePublicacion: "2024-06-28",
        cantidadDeFotos: 20,
        metrosCuadrados: 177,
        precioDeVenta: 299797
    },
    {
        nombre: "Propiedad 641",
        direccion: "Calle 90, Madrid",
        fechaDePublicacion: "2024-06-16",
        cantidadDeFotos: 11,
        metrosCuadrados: 82,
        precioDeVenta: 661695
    },
    {
        nombre: "Propiedad 642",
        direccion: "Calle 93, Murcia",
        fechaDePublicacion: "2024-06-23",
        cantidadDeFotos: 12,
        metrosCuadrados: 391,
        precioDeVenta: 766964
    },
    {
        nombre: "Propiedad 643",
        direccion: "Calle 95, Madrid",
        fechaDePublicacion: "2024-06-01",
        cantidadDeFotos: 2,
        metrosCuadrados: 410,
        precioDeVenta: 194203
    },
    {
        nombre: "Propiedad 644",
        direccion: "Calle 96, Sevilla",
        fechaDePublicacion: "2024-06-21",
        cantidadDeFotos: 1,
        metrosCuadrados: 390,
        precioDeVenta: 874204
    },
    {
        nombre: "Propiedad 645",
        direccion: "Calle 13, Valencia",
        fechaDePublicacion: "2024-06-12",
        cantidadDeFotos: 16,
        metrosCuadrados: 385,
        precioDeVenta: 705872
    },
    {
        nombre: "Propiedad 646",
        direccion: "Calle 77, Madrid",
        fechaDePublicacion: "2024-06-27",
        cantidadDeFotos: 6,
        metrosCuadrados: 169,
        precioDeVenta: 633550
    },
    {
        nombre: "Propiedad 647",
        direccion: "Calle 19, Sevilla",
        fechaDePublicacion: "2024-06-21",
        cantidadDeFotos: 11,
        metrosCuadrados: 223,
        precioDeVenta: 518327
    },
    {
        nombre: "Propiedad 648",
        direccion: "Calle 91, Las Palmas de Gran Canaria",
        fechaDePublicacion: "2024-06-11",
        cantidadDeFotos: 15,
        metrosCuadrados: 311,
        precioDeVenta: 371191
    },
    {
        nombre: "Propiedad 649",
        direccion: "Calle 15, Málaga",
        fechaDePublicacion: "2024-06-01",
        cantidadDeFotos: 8,
        metrosCuadrados: 140,
        precioDeVenta: 894338
    },
    {
        nombre: "Propiedad 650",
        direccion: "Calle 95, Madrid",
        fechaDePublicacion: "2024-06-28",
        cantidadDeFotos: 8,
        metrosCuadrados: 469,
        precioDeVenta: 944271
    },
    {
        nombre: "Propiedad 651",
        direccion: "Calle 73, Málaga",
        fechaDePublicacion: "2024-06-22",
        cantidadDeFotos: 17,
        metrosCuadrados: 337,
        precioDeVenta: 614854
    },
    {
        nombre: "Propiedad 652",
        direccion: "Calle 35, Palma",
        fechaDePublicacion: "2024-06-19",
        cantidadDeFotos: 3,
        metrosCuadrados: 339,
        precioDeVenta: 730773
    },
    {
        nombre: "Propiedad 653",
        direccion: "Calle 66, Palma",
        fechaDePublicacion: "2024-06-05",
        cantidadDeFotos: 11,
        metrosCuadrados: 373,
        precioDeVenta: 250312
    },
    {
        nombre: "Propiedad 654",
        direccion: "Calle 47, Palma",
        fechaDePublicacion: "2024-06-10",
        cantidadDeFotos: 2,
        metrosCuadrados: 137,
        precioDeVenta: 298238
    },
    {
        nombre: "Propiedad 655",
        direccion: "Calle 15, Madrid",
        fechaDePublicacion: "2024-06-18",
        cantidadDeFotos: 8,
        metrosCuadrados: 226,
        precioDeVenta: 349315
    },
    {
        nombre: "Propiedad 656",
        direccion: "Calle 80, Bilbao",
        fechaDePublicacion: "2024-06-17",
        cantidadDeFotos: 3,
        metrosCuadrados: 172,
        precioDeVenta: 612493
    },
    {
        nombre: "Propiedad 657",
        direccion: "Calle 76, Palma",
        fechaDePublicacion: "2024-06-11",
        cantidadDeFotos: 16,
        metrosCuadrados: 215,
        precioDeVenta: 977385
    },
    {
        nombre: "Propiedad 658",
        direccion: "Calle 31, Madrid",
        fechaDePublicacion: "2024-06-06",
        cantidadDeFotos: 15,
        metrosCuadrados: 360,
        precioDeVenta: 386151
    },
    {
        nombre: "Propiedad 659",
        direccion: "Calle 14, Zaragoza",
        fechaDePublicacion: "2024-06-01",
        cantidadDeFotos: 10,
        metrosCuadrados: 60,
        precioDeVenta: 118511
    },
    {
        nombre: "Propiedad 660",
        direccion: "Calle 50, Murcia",
        fechaDePublicacion: "2024-06-12",
        cantidadDeFotos: 4,
        metrosCuadrados: 135,
        precioDeVenta: 51007
    },
    {
        nombre: "Propiedad 661",
        direccion: "Calle 37, Madrid",
        fechaDePublicacion: "2024-06-07",
        cantidadDeFotos: 11,
        metrosCuadrados: 457,
        precioDeVenta: 152064
    },
    {
        nombre: "Propiedad 662",
        direccion: "Calle 78, Murcia",
        fechaDePublicacion: "2024-06-21",
        cantidadDeFotos: 20,
        metrosCuadrados: 123,
        precioDeVenta: 61611
    },
    {
        nombre: "Propiedad 663",
        direccion: "Calle 7, Sevilla",
        fechaDePublicacion: "2024-06-01",
        cantidadDeFotos: 16,
        metrosCuadrados: 316,
        precioDeVenta: 314788
    },
    {
        nombre: "Propiedad 664",
        direccion: "Calle 39, Zaragoza",
        fechaDePublicacion: "2024-06-18",
        cantidadDeFotos: 14,
        metrosCuadrados: 174,
        precioDeVenta: 156526
    },
    {
        nombre: "Propiedad 665",
        direccion: "Calle 59, Madrid",
        fechaDePublicacion: "2024-06-18",
        cantidadDeFotos: 3,
        metrosCuadrados: 236,
        precioDeVenta: 776838
    },
    {
        nombre: "Propiedad 666",
        direccion: "Calle 21, Málaga",
        fechaDePublicacion: "2024-06-15",
        cantidadDeFotos: 8,
        metrosCuadrados: 99,
        precioDeVenta: 225321
    },
    {
        nombre: "Propiedad 667",
        direccion: "Calle 87, Murcia",
        fechaDePublicacion: "2024-06-01",
        cantidadDeFotos: 8,
        metrosCuadrados: 415,
        precioDeVenta: 401343
    },
    {
        nombre: "Propiedad 668",
        direccion: "Calle 53, Madrid",
        fechaDePublicacion: "2024-06-25",
        cantidadDeFotos: 15,
        metrosCuadrados: 151,
        precioDeVenta: 865366
    },
    {
        nombre: "Propiedad 669",
        direccion: "Calle 69, Zaragoza",
        fechaDePublicacion: "2024-06-26",
        cantidadDeFotos: 20,
        metrosCuadrados: 409,
        precioDeVenta: 533338
    },
    {
        nombre: "Propiedad 670",
        direccion: "Calle 96, Valencia",
        fechaDePublicacion: "2024-06-12",
        cantidadDeFotos: 11,
        metrosCuadrados: 215,
        precioDeVenta: 424889
    },
    {
        nombre: "Propiedad 671",
        direccion: "Calle 40, Las Palmas de Gran Canaria",
        fechaDePublicacion: "2024-06-11",
        cantidadDeFotos: 11,
        metrosCuadrados: 77,
        precioDeVenta: 994933
    },
    {
        nombre: "Propiedad 672",
        direccion: "Calle 22, Las Palmas de Gran Canaria",
        fechaDePublicacion: "2024-06-14",
        cantidadDeFotos: 18,
        metrosCuadrados: 59,
        precioDeVenta: 927447
    },
    {
        nombre: "Propiedad 673",
        direccion: "Calle 81, Madrid",
        fechaDePublicacion: "2024-06-19",
        cantidadDeFotos: 3,
        metrosCuadrados: 56,
        precioDeVenta: 892018
    },
    {
        nombre: "Propiedad 674",
        direccion: "Calle 44, Madrid",
        fechaDePublicacion: "2024-06-25",
        cantidadDeFotos: 6,
        metrosCuadrados: 316,
        precioDeVenta: 499292
    },
    {
        nombre: "Propiedad 675",
        direccion: "Calle 80, Málaga",
        fechaDePublicacion: "2024-06-27",
        cantidadDeFotos: 16,
        metrosCuadrados: 467,
        precioDeVenta: 819934
    },
    {
        nombre: "Propiedad 676",
        direccion: "Calle 5, Málaga",
        fechaDePublicacion: "2024-06-29",
        cantidadDeFotos: 1,
        metrosCuadrados: 255,
        precioDeVenta: 827491
    },
    {
        nombre: "Propiedad 677",
        direccion: "Calle 22, Barcelona",
        fechaDePublicacion: "2024-06-23",
        cantidadDeFotos: 6,
        metrosCuadrados: 151,
        precioDeVenta: 69908
    },
    {
        nombre: "Propiedad 678",
        direccion: "Calle 59, Barcelona",
        fechaDePublicacion: "2024-06-19",
        cantidadDeFotos: 10,
        metrosCuadrados: 64,
        precioDeVenta: 366138
    },
    {
        nombre: "Propiedad 679",
        direccion: "Calle 52, Málaga",
        fechaDePublicacion: "2024-06-14",
        cantidadDeFotos: 15,
        metrosCuadrados: 371,
        precioDeVenta: 92026
    },
    {
        nombre: "Propiedad 680",
        direccion: "Calle 64, Murcia",
        fechaDePublicacion: "2024-06-02",
        cantidadDeFotos: 10,
        metrosCuadrados: 353,
        precioDeVenta: 240938
    },
    {
        nombre: "Propiedad 681",
        direccion: "Calle 26, Las Palmas de Gran Canaria",
        fechaDePublicacion: "2024-06-28",
        cantidadDeFotos: 15,
        metrosCuadrados: 346,
        precioDeVenta: 564230
    },
    {
        nombre: "Propiedad 682",
        direccion: "Calle 42, Málaga",
        fechaDePublicacion: "2024-06-13",
        cantidadDeFotos: 9,
        metrosCuadrados: 419,
        precioDeVenta: 300955
    },
    {
        nombre: "Propiedad 683",
        direccion: "Calle 71, Zaragoza",
        fechaDePublicacion: "2024-06-12",
        cantidadDeFotos: 3,
        metrosCuadrados: 67,
        precioDeVenta: 924512
    },
    {
        nombre: "Propiedad 684",
        direccion: "Calle 47, Murcia",
        fechaDePublicacion: "2024-06-18",
        cantidadDeFotos: 15,
        metrosCuadrados: 284,
        precioDeVenta: 700314
    },
    {
        nombre: "Propiedad 685",
        direccion: "Calle 58, Palma",
        fechaDePublicacion: "2024-06-20",
        cantidadDeFotos: 10,
        metrosCuadrados: 268,
        precioDeVenta: 224146
    },
    {
        nombre: "Propiedad 686",
        direccion: "Calle 89, Las Palmas de Gran Canaria",
        fechaDePublicacion: "2024-06-06",
        cantidadDeFotos: 5,
        metrosCuadrados: 70,
        precioDeVenta: 120235
    },
    {
        nombre: "Propiedad 687",
        direccion: "Calle 12, Palma",
        fechaDePublicacion: "2024-06-23",
        cantidadDeFotos: 1,
        metrosCuadrados: 60,
        precioDeVenta: 215014
    },
    {
        nombre: "Propiedad 688",
        direccion: "Calle 71, Bilbao",
        fechaDePublicacion: "2024-06-21",
        cantidadDeFotos: 4,
        metrosCuadrados: 252,
        precioDeVenta: 176307
    },
    {
        nombre: "Propiedad 689",
        direccion: "Calle 79, Bilbao",
        fechaDePublicacion: "2024-06-15",
        cantidadDeFotos: 20,
        metrosCuadrados: 268,
        precioDeVenta: 719274
    },
    {
        nombre: "Propiedad 690",
        direccion: "Calle 24, Murcia",
        fechaDePublicacion: "2024-06-18",
        cantidadDeFotos: 7,
        metrosCuadrados: 77,
        precioDeVenta: 259072
    },
    {
        nombre: "Propiedad 691",
        direccion: "Calle 4, Zaragoza",
        fechaDePublicacion: "2024-06-07",
        cantidadDeFotos: 18,
        metrosCuadrados: 66,
        precioDeVenta: 594468
    },
    {
        nombre: "Propiedad 692",
        direccion: "Calle 70, Bilbao",
        fechaDePublicacion: "2024-06-27",
        cantidadDeFotos: 5,
        metrosCuadrados: 52,
        precioDeVenta: 781639
    },
    {
        nombre: "Propiedad 693",
        direccion: "Calle 12, Bilbao",
        fechaDePublicacion: "2024-06-09",
        cantidadDeFotos: 18,
        metrosCuadrados: 356,
        precioDeVenta: 520805
    },
    {
        nombre: "Propiedad 694",
        direccion: "Calle 21, Zaragoza",
        fechaDePublicacion: "2024-06-11",
        cantidadDeFotos: 9,
        metrosCuadrados: 81,
        precioDeVenta: 101855
    },
    {
        nombre: "Propiedad 695",
        direccion: "Calle 49, Barcelona",
        fechaDePublicacion: "2024-06-21",
        cantidadDeFotos: 1,
        metrosCuadrados: 408,
        precioDeVenta: 322541
    },
    {
        nombre: "Propiedad 696",
        direccion: "Calle 3, Bilbao",
        fechaDePublicacion: "2024-06-28",
        cantidadDeFotos: 4,
        metrosCuadrados: 212,
        precioDeVenta: 92505
    },
    {
        nombre: "Propiedad 697",
        direccion: "Calle 31, Palma",
        fechaDePublicacion: "2024-06-28",
        cantidadDeFotos: 10,
        metrosCuadrados: 405,
        precioDeVenta: 937094
    },
    {
        nombre: "Propiedad 698",
        direccion: "Calle 56, Palma",
        fechaDePublicacion: "2024-06-05",
        cantidadDeFotos: 12,
        metrosCuadrados: 362,
        precioDeVenta: 612409
    },
    {
        nombre: "Propiedad 699",
        direccion: "Calle 60, Murcia",
        fechaDePublicacion: "2024-06-01",
        cantidadDeFotos: 11,
        metrosCuadrados: 78,
        precioDeVenta: 788066
    },
    {
        nombre: "Propiedad 700",
        direccion: "Calle 83, Sevilla",
        fechaDePublicacion: "2024-06-23",
        cantidadDeFotos: 10,
        metrosCuadrados: 294,
        precioDeVenta: 886059
    },
    {
        nombre: "Propiedad 701",
        direccion: "Calle 73, Sevilla",
        fechaDePublicacion: "2024-06-07",
        cantidadDeFotos: 11,
        metrosCuadrados: 274,
        precioDeVenta: 260315
    },
    {
        nombre: "Propiedad 702",
        direccion: "Calle 98, Zaragoza",
        fechaDePublicacion: "2024-06-13",
        cantidadDeFotos: 19,
        metrosCuadrados: 445,
        precioDeVenta: 665644
    },
    {
        nombre: "Propiedad 703",
        direccion: "Calle 29, Barcelona",
        fechaDePublicacion: "2024-06-22",
        cantidadDeFotos: 5,
        metrosCuadrados: 140,
        precioDeVenta: 406885
    },
    {
        nombre: "Propiedad 704",
        direccion: "Calle 61, Zaragoza",
        fechaDePublicacion: "2024-06-19",
        cantidadDeFotos: 5,
        metrosCuadrados: 358,
        precioDeVenta: 262191
    },
    {
        nombre: "Propiedad 705",
        direccion: "Calle 15, Madrid",
        fechaDePublicacion: "2024-06-29",
        cantidadDeFotos: 4,
        metrosCuadrados: 144,
        precioDeVenta: 226561
    },
    {
        nombre: "Propiedad 706",
        direccion: "Calle 54, Madrid",
        fechaDePublicacion: "2024-06-20",
        cantidadDeFotos: 16,
        metrosCuadrados: 431,
        precioDeVenta: 246866
    },
    {
        nombre: "Propiedad 707",
        direccion: "Calle 91, Bilbao",
        fechaDePublicacion: "2024-06-04",
        cantidadDeFotos: 12,
        metrosCuadrados: 326,
        precioDeVenta: 613178
    },
    {
        nombre: "Propiedad 708",
        direccion: "Calle 23, Sevilla",
        fechaDePublicacion: "2024-06-09",
        cantidadDeFotos: 16,
        metrosCuadrados: 248,
        precioDeVenta: 55375
    },
    {
        nombre: "Propiedad 709",
        direccion: "Calle 26, Palma",
        fechaDePublicacion: "2024-06-28",
        cantidadDeFotos: 1,
        metrosCuadrados: 171,
        precioDeVenta: 543821
    },
    {
        nombre: "Propiedad 710",
        direccion: "Calle 20, Zaragoza",
        fechaDePublicacion: "2024-06-13",
        cantidadDeFotos: 3,
        metrosCuadrados: 240,
        precioDeVenta: 395919
    },
    {
        nombre: "Propiedad 711",
        direccion: "Calle 87, Madrid",
        fechaDePublicacion: "2024-06-21",
        cantidadDeFotos: 19,
        metrosCuadrados: 422,
        precioDeVenta: 347108
    },
    {
        nombre: "Propiedad 712",
        direccion: "Calle 58, Sevilla",
        fechaDePublicacion: "2024-06-03",
        cantidadDeFotos: 10,
        metrosCuadrados: 206,
        precioDeVenta: 752726
    },
    {
        nombre: "Propiedad 713",
        direccion: "Calle 51, Málaga",
        fechaDePublicacion: "2024-06-09",
        cantidadDeFotos: 6,
        metrosCuadrados: 125,
        precioDeVenta: 216197
    },
    {
        nombre: "Propiedad 714",
        direccion: "Calle 80, Málaga",
        fechaDePublicacion: "2024-06-15",
        cantidadDeFotos: 14,
        metrosCuadrados: 325,
        precioDeVenta: 510718
    },
    {
        nombre: "Propiedad 715",
        direccion: "Calle 47, Sevilla",
        fechaDePublicacion: "2024-06-01",
        cantidadDeFotos: 4,
        metrosCuadrados: 206,
        precioDeVenta: 518695
    },
    {
        nombre: "Propiedad 716",
        direccion: "Calle 67, Valencia",
        fechaDePublicacion: "2024-06-07",
        cantidadDeFotos: 10,
        metrosCuadrados: 234,
        precioDeVenta: 88089
    },
    {
        nombre: "Propiedad 717",
        direccion: "Calle 92, Sevilla",
        fechaDePublicacion: "2024-06-13",
        cantidadDeFotos: 12,
        metrosCuadrados: 312,
        precioDeVenta: 947810
    },
    {
        nombre: "Propiedad 718",
        direccion: "Calle 1, Murcia",
        fechaDePublicacion: "2024-06-21",
        cantidadDeFotos: 4,
        metrosCuadrados: 112,
        precioDeVenta: 589509
    },
    {
        nombre: "Propiedad 719",
        direccion: "Calle 80, Valencia",
        fechaDePublicacion: "2024-06-25",
        cantidadDeFotos: 8,
        metrosCuadrados: 394,
        precioDeVenta: 828479
    },
    {
        nombre: "Propiedad 720",
        direccion: "Calle 84, Málaga",
        fechaDePublicacion: "2024-06-15",
        cantidadDeFotos: 8,
        metrosCuadrados: 493,
        precioDeVenta: 657577
    },
    {
        nombre: "Propiedad 721",
        direccion: "Calle 89, Murcia",
        fechaDePublicacion: "2024-06-29",
        cantidadDeFotos: 18,
        metrosCuadrados: 360,
        precioDeVenta: 872924
    },
    {
        nombre: "Propiedad 722",
        direccion: "Calle 55, Palma",
        fechaDePublicacion: "2024-06-24",
        cantidadDeFotos: 15,
        metrosCuadrados: 67,
        precioDeVenta: 755053
    },
    {
        nombre: "Propiedad 723",
        direccion: "Calle 87, Palma",
        fechaDePublicacion: "2024-06-08",
        cantidadDeFotos: 6,
        metrosCuadrados: 473,
        precioDeVenta: 337761
    },
    {
        nombre: "Propiedad 724",
        direccion: "Calle 53, Zaragoza",
        fechaDePublicacion: "2024-06-27",
        cantidadDeFotos: 14,
        metrosCuadrados: 103,
        precioDeVenta: 661921
    },
    {
        nombre: "Propiedad 725",
        direccion: "Calle 53, Palma",
        fechaDePublicacion: "2024-06-28",
        cantidadDeFotos: 18,
        metrosCuadrados: 303,
        precioDeVenta: 229081
    },
    {
        nombre: "Propiedad 726",
        direccion: "Calle 81, Barcelona",
        fechaDePublicacion: "2024-06-28",
        cantidadDeFotos: 17,
        metrosCuadrados: 185,
        precioDeVenta: 404051
    },
    {
        nombre: "Propiedad 727",
        direccion: "Calle 26, Las Palmas de Gran Canaria",
        fechaDePublicacion: "2024-06-20",
        cantidadDeFotos: 13,
        metrosCuadrados: 246,
        precioDeVenta: 158201
    },
    {
        nombre: "Propiedad 728",
        direccion: "Calle 73, Las Palmas de Gran Canaria",
        fechaDePublicacion: "2024-06-25",
        cantidadDeFotos: 3,
        metrosCuadrados: 204,
        precioDeVenta: 388129
    },
    {
        nombre: "Propiedad 729",
        direccion: "Calle 69, Sevilla",
        fechaDePublicacion: "2024-06-02",
        cantidadDeFotos: 19,
        metrosCuadrados: 125,
        precioDeVenta: 216900
    },
    {
        nombre: "Propiedad 730",
        direccion: "Calle 43, Bilbao",
        fechaDePublicacion: "2024-06-29",
        cantidadDeFotos: 16,
        metrosCuadrados: 465,
        precioDeVenta: 150311
    },
    {
        nombre: "Propiedad 731",
        direccion: "Calle 57, Zaragoza",
        fechaDePublicacion: "2024-06-03",
        cantidadDeFotos: 12,
        metrosCuadrados: 182,
        precioDeVenta: 980640
    },
    {
        nombre: "Propiedad 732",
        direccion: "Calle 97, Bilbao",
        fechaDePublicacion: "2024-06-23",
        cantidadDeFotos: 12,
        metrosCuadrados: 482,
        precioDeVenta: 600086
    },
    {
        nombre: "Propiedad 733",
        direccion: "Calle 53, Zaragoza",
        fechaDePublicacion: "2024-06-12",
        cantidadDeFotos: 15,
        metrosCuadrados: 235,
        precioDeVenta: 59202
    },
    {
        nombre: "Propiedad 734",
        direccion: "Calle 21, Málaga",
        fechaDePublicacion: "2024-06-14",
        cantidadDeFotos: 11,
        metrosCuadrados: 398,
        precioDeVenta: 679935
    },
    {
        nombre: "Propiedad 735",
        direccion: "Calle 42, Bilbao",
        fechaDePublicacion: "2024-06-12",
        cantidadDeFotos: 5,
        metrosCuadrados: 351,
        precioDeVenta: 754317
    },
    {
        nombre: "Propiedad 736",
        direccion: "Calle 82, Zaragoza",
        fechaDePublicacion: "2024-06-27",
        cantidadDeFotos: 16,
        metrosCuadrados: 138,
        precioDeVenta: 375975
    },
    {
        nombre: "Propiedad 737",
        direccion: "Calle 54, Málaga",
        fechaDePublicacion: "2024-06-27",
        cantidadDeFotos: 11,
        metrosCuadrados: 349,
        precioDeVenta: 53713
    },
    {
        nombre: "Propiedad 738",
        direccion: "Calle 2, Málaga",
        fechaDePublicacion: "2024-06-03",
        cantidadDeFotos: 12,
        metrosCuadrados: 74,
        precioDeVenta: 295010
    },
    {
        nombre: "Propiedad 739",
        direccion: "Calle 88, Palma",
        fechaDePublicacion: "2024-06-09",
        cantidadDeFotos: 5,
        metrosCuadrados: 356,
        precioDeVenta: 109975
    },
    {
        nombre: "Propiedad 740",
        direccion: "Calle 22, Sevilla",
        fechaDePublicacion: "2024-06-24",
        cantidadDeFotos: 8,
        metrosCuadrados: 449,
        precioDeVenta: 840124
    },
    {
        nombre: "Propiedad 741",
        direccion: "Calle 36, Barcelona",
        fechaDePublicacion: "2024-06-07",
        cantidadDeFotos: 3,
        metrosCuadrados: 327,
        precioDeVenta: 710030
    },
    {
        nombre: "Propiedad 742",
        direccion: "Calle 53, Málaga",
        fechaDePublicacion: "2024-06-05",
        cantidadDeFotos: 15,
        metrosCuadrados: 76,
        precioDeVenta: 365985
    },
    {
        nombre: "Propiedad 743",
        direccion: "Calle 26, Valencia",
        fechaDePublicacion: "2024-06-17",
        cantidadDeFotos: 15,
        metrosCuadrados: 335,
        precioDeVenta: 522964
    },
    {
        nombre: "Propiedad 744",
        direccion: "Calle 65, Madrid",
        fechaDePublicacion: "2024-06-24",
        cantidadDeFotos: 8,
        metrosCuadrados: 155,
        precioDeVenta: 172824
    },
    {
        nombre: "Propiedad 745",
        direccion: "Calle 85, Barcelona",
        fechaDePublicacion: "2024-06-17",
        cantidadDeFotos: 17,
        metrosCuadrados: 426,
        precioDeVenta: 276877
    },
    {
        nombre: "Propiedad 746",
        direccion: "Calle 97, Palma",
        fechaDePublicacion: "2024-06-21",
        cantidadDeFotos: 10,
        metrosCuadrados: 362,
        precioDeVenta: 986438
    },
    {
        nombre: "Propiedad 747",
        direccion: "Calle 64, Zaragoza",
        fechaDePublicacion: "2024-06-19",
        cantidadDeFotos: 12,
        metrosCuadrados: 151,
        precioDeVenta: 77201
    },
    {
        nombre: "Propiedad 748",
        direccion: "Calle 71, Barcelona",
        fechaDePublicacion: "2024-06-13",
        cantidadDeFotos: 4,
        metrosCuadrados: 144,
        precioDeVenta: 714478
    },
    {
        nombre: "Propiedad 749",
        direccion: "Calle 30, Las Palmas de Gran Canaria",
        fechaDePublicacion: "2024-06-22",
        cantidadDeFotos: 15,
        metrosCuadrados: 147,
        precioDeVenta: 381151
    },
    {
        nombre: "Propiedad 750",
        direccion: "Calle 87, Palma",
        fechaDePublicacion: "2024-06-22",
        cantidadDeFotos: 7,
        metrosCuadrados: 238,
        precioDeVenta: 673547
    },
    {
        nombre: "Propiedad 751",
        direccion: "Calle 18, Barcelona",
        fechaDePublicacion: "2024-06-22",
        cantidadDeFotos: 12,
        metrosCuadrados: 460,
        precioDeVenta: 86152
    },
    {
        nombre: "Propiedad 752",
        direccion: "Calle 33, Sevilla",
        fechaDePublicacion: "2024-06-25",
        cantidadDeFotos: 14,
        metrosCuadrados: 470,
        precioDeVenta: 306467
    },
    {
        nombre: "Propiedad 753",
        direccion: "Calle 74, Madrid",
        fechaDePublicacion: "2024-06-18",
        cantidadDeFotos: 4,
        metrosCuadrados: 173,
        precioDeVenta: 555882
    },
    {
        nombre: "Propiedad 754",
        direccion: "Calle 64, Barcelona",
        fechaDePublicacion: "2024-06-29",
        cantidadDeFotos: 19,
        metrosCuadrados: 239,
        precioDeVenta: 771360
    },
    {
        nombre: "Propiedad 755",
        direccion: "Calle 47, Sevilla",
        fechaDePublicacion: "2024-06-16",
        cantidadDeFotos: 18,
        metrosCuadrados: 158,
        precioDeVenta: 723058
    },
    {
        nombre: "Propiedad 756",
        direccion: "Calle 71, Zaragoza",
        fechaDePublicacion: "2024-06-05",
        cantidadDeFotos: 4,
        metrosCuadrados: 216,
        precioDeVenta: 459547
    },
    {
        nombre: "Propiedad 757",
        direccion: "Calle 49, Palma",
        fechaDePublicacion: "2024-06-20",
        cantidadDeFotos: 5,
        metrosCuadrados: 201,
        precioDeVenta: 310679
    },
    {
        nombre: "Propiedad 758",
        direccion: "Calle 52, Palma",
        fechaDePublicacion: "2024-06-22",
        cantidadDeFotos: 17,
        metrosCuadrados: 306,
        precioDeVenta: 418520
    },
    {
        nombre: "Propiedad 759",
        direccion: "Calle 23, Sevilla",
        fechaDePublicacion: "2024-06-11",
        cantidadDeFotos: 15,
        metrosCuadrados: 113,
        precioDeVenta: 980511
    },
    {
        nombre: "Propiedad 760",
        direccion: "Calle 7, Málaga",
        fechaDePublicacion: "2024-06-28",
        cantidadDeFotos: 7,
        metrosCuadrados: 75,
        precioDeVenta: 524692
    },
    {
        nombre: "Propiedad 761",
        direccion: "Calle 14, Málaga",
        fechaDePublicacion: "2024-06-23",
        cantidadDeFotos: 2,
        metrosCuadrados: 209,
        precioDeVenta: 172064
    },
    {
        nombre: "Propiedad 762",
        direccion: "Calle 99, Bilbao",
        fechaDePublicacion: "2024-06-07",
        cantidadDeFotos: 17,
        metrosCuadrados: 75,
        precioDeVenta: 585816
    },
    {
        nombre: "Propiedad 763",
        direccion: "Calle 75, Sevilla",
        fechaDePublicacion: "2024-06-16",
        cantidadDeFotos: 4,
        metrosCuadrados: 467,
        precioDeVenta: 644181
    },
    {
        nombre: "Propiedad 764",
        direccion: "Calle 42, Murcia",
        fechaDePublicacion: "2024-06-22",
        cantidadDeFotos: 12,
        metrosCuadrados: 295,
        precioDeVenta: 251629
    },
    {
        nombre: "Propiedad 765",
        direccion: "Calle 86, Valencia",
        fechaDePublicacion: "2024-06-26",
        cantidadDeFotos: 1,
        metrosCuadrados: 375,
        precioDeVenta: 573912
    },
    {
        nombre: "Propiedad 766",
        direccion: "Calle 10, Las Palmas de Gran Canaria",
        fechaDePublicacion: "2024-06-18",
        cantidadDeFotos: 17,
        metrosCuadrados: 372,
        precioDeVenta: 423216
    },
    {
        nombre: "Propiedad 767",
        direccion: "Calle 46, Madrid",
        fechaDePublicacion: "2024-05-31",
        cantidadDeFotos: 11,
        metrosCuadrados: 418,
        precioDeVenta: 796686
    },
    {
        nombre: "Propiedad 768",
        direccion: "Calle 85, Valencia",
        fechaDePublicacion: "2024-06-01",
        cantidadDeFotos: 10,
        metrosCuadrados: 411,
        precioDeVenta: 920206
    },
    {
        nombre: "Propiedad 769",
        direccion: "Calle 62, Madrid",
        fechaDePublicacion: "2024-06-03",
        cantidadDeFotos: 12,
        metrosCuadrados: 420,
        precioDeVenta: 618309
    },
    {
        nombre: "Propiedad 770",
        direccion: "Calle 78, Zaragoza",
        fechaDePublicacion: "2024-06-12",
        cantidadDeFotos: 19,
        metrosCuadrados: 135,
        precioDeVenta: 332633
    },
    {
        nombre: "Propiedad 771",
        direccion: "Calle 43, Málaga",
        fechaDePublicacion: "2024-06-24",
        cantidadDeFotos: 14,
        metrosCuadrados: 232,
        precioDeVenta: 76692
    },
    {
        nombre: "Propiedad 772",
        direccion: "Calle 43, Valencia",
        fechaDePublicacion: "2024-06-10",
        cantidadDeFotos: 18,
        metrosCuadrados: 351,
        precioDeVenta: 901736
    },
    {
        nombre: "Propiedad 773",
        direccion: "Calle 45, Sevilla",
        fechaDePublicacion: "2024-06-12",
        cantidadDeFotos: 12,
        metrosCuadrados: 283,
        precioDeVenta: 802824
    },
    {
        nombre: "Propiedad 774",
        direccion: "Calle 20, Málaga",
        fechaDePublicacion: "2024-06-02",
        cantidadDeFotos: 8,
        metrosCuadrados: 150,
        precioDeVenta: 222139
    },
    {
        nombre: "Propiedad 775",
        direccion: "Calle 54, Las Palmas de Gran Canaria",
        fechaDePublicacion: "2024-06-02",
        cantidadDeFotos: 8,
        metrosCuadrados: 116,
        precioDeVenta: 602662
    },
    {
        nombre: "Propiedad 776",
        direccion: "Calle 41, Málaga",
        fechaDePublicacion: "2024-06-24",
        cantidadDeFotos: 20,
        metrosCuadrados: 156,
        precioDeVenta: 741081
    },
    {
        nombre: "Propiedad 777",
        direccion: "Calle 89, Sevilla",
        fechaDePublicacion: "2024-06-04",
        cantidadDeFotos: 9,
        metrosCuadrados: 263,
        precioDeVenta: 769481
    },
    {
        nombre: "Propiedad 778",
        direccion: "Calle 12, Palma",
        fechaDePublicacion: "2024-06-01",
        cantidadDeFotos: 2,
        metrosCuadrados: 225,
        precioDeVenta: 382430
    },
    {
        nombre: "Propiedad 779",
        direccion: "Calle 68, Málaga",
        fechaDePublicacion: "2024-06-17",
        cantidadDeFotos: 17,
        metrosCuadrados: 380,
        precioDeVenta: 260287
    },
    {
        nombre: "Propiedad 780",
        direccion: "Calle 93, Sevilla",
        fechaDePublicacion: "2024-06-11",
        cantidadDeFotos: 9,
        metrosCuadrados: 229,
        precioDeVenta: 576746
    },
    {
        nombre: "Propiedad 781",
        direccion: "Calle 29, Palma",
        fechaDePublicacion: "2024-06-10",
        cantidadDeFotos: 19,
        metrosCuadrados: 430,
        precioDeVenta: 427682
    },
    {
        nombre: "Propiedad 782",
        direccion: "Calle 69, Zaragoza",
        fechaDePublicacion: "2024-06-12",
        cantidadDeFotos: 20,
        metrosCuadrados: 240,
        precioDeVenta: 997161
    },
    {
        nombre: "Propiedad 783",
        direccion: "Calle 89, Valencia",
        fechaDePublicacion: "2024-06-04",
        cantidadDeFotos: 15,
        metrosCuadrados: 91,
        precioDeVenta: 911760
    },
    {
        nombre: "Propiedad 784",
        direccion: "Calle 54, Zaragoza",
        fechaDePublicacion: "2024-06-01",
        cantidadDeFotos: 7,
        metrosCuadrados: 260,
        precioDeVenta: 648459
    },
    {
        nombre: "Propiedad 785",
        direccion: "Calle 32, Madrid",
        fechaDePublicacion: "2024-06-14",
        cantidadDeFotos: 1,
        metrosCuadrados: 212,
        precioDeVenta: 949585
    },
    {
        nombre: "Propiedad 786",
        direccion: "Calle 12, Bilbao",
        fechaDePublicacion: "2024-06-13",
        cantidadDeFotos: 7,
        metrosCuadrados: 385,
        precioDeVenta: 984759
    },
    {
        nombre: "Propiedad 787",
        direccion: "Calle 1, Palma",
        fechaDePublicacion: "2024-06-06",
        cantidadDeFotos: 18,
        metrosCuadrados: 166,
        precioDeVenta: 182667
    },
    {
        nombre: "Propiedad 788",
        direccion: "Calle 93, Barcelona",
        fechaDePublicacion: "2024-06-18",
        cantidadDeFotos: 9,
        metrosCuadrados: 327,
        precioDeVenta: 209753
    },
    {
        nombre: "Propiedad 789",
        direccion: "Calle 9, Valencia",
        fechaDePublicacion: "2024-06-01",
        cantidadDeFotos: 19,
        metrosCuadrados: 383,
        precioDeVenta: 300390
    },
    {
        nombre: "Propiedad 790",
        direccion: "Calle 56, Sevilla",
        fechaDePublicacion: "2024-06-06",
        cantidadDeFotos: 6,
        metrosCuadrados: 278,
        precioDeVenta: 957613
    },
    {
        nombre: "Propiedad 791",
        direccion: "Calle 46, Bilbao",
        fechaDePublicacion: "2024-06-20",
        cantidadDeFotos: 1,
        metrosCuadrados: 476,
        precioDeVenta: 245754
    },
    {
        nombre: "Propiedad 792",
        direccion: "Calle 11, Murcia",
        fechaDePublicacion: "2024-06-24",
        cantidadDeFotos: 13,
        metrosCuadrados: 319,
        precioDeVenta: 740757
    },
    {
        nombre: "Propiedad 793",
        direccion: "Calle 93, Murcia",
        fechaDePublicacion: "2024-06-04",
        cantidadDeFotos: 4,
        metrosCuadrados: 434,
        precioDeVenta: 88099
    },
    {
        nombre: "Propiedad 794",
        direccion: "Calle 97, Málaga",
        fechaDePublicacion: "2024-06-01",
        cantidadDeFotos: 8,
        metrosCuadrados: 198,
        precioDeVenta: 531158
    },
    {
        nombre: "Propiedad 795",
        direccion: "Calle 50, Las Palmas de Gran Canaria",
        fechaDePublicacion: "2024-06-01",
        cantidadDeFotos: 7,
        metrosCuadrados: 184,
        precioDeVenta: 273723
    },
    {
        nombre: "Propiedad 796",
        direccion: "Calle 59, Bilbao",
        fechaDePublicacion: "2024-06-26",
        cantidadDeFotos: 1,
        metrosCuadrados: 231,
        precioDeVenta: 434148
    },
    {
        nombre: "Propiedad 797",
        direccion: "Calle 91, Palma",
        fechaDePublicacion: "2024-06-20",
        cantidadDeFotos: 19,
        metrosCuadrados: 348,
        precioDeVenta: 747507
    },
    {
        nombre: "Propiedad 798",
        direccion: "Calle 87, Málaga",
        fechaDePublicacion: "2024-06-16",
        cantidadDeFotos: 4,
        metrosCuadrados: 233,
        precioDeVenta: 948028
    },
    {
        nombre: "Propiedad 799",
        direccion: "Calle 92, Murcia",
        fechaDePublicacion: "2024-06-27",
        cantidadDeFotos: 14,
        metrosCuadrados: 397,
        precioDeVenta: 986974
    },
    {
        nombre: "Propiedad 800",
        direccion: "Calle 13, Valencia",
        fechaDePublicacion: "2024-06-16",
        cantidadDeFotos: 9,
        metrosCuadrados: 379,
        precioDeVenta: 86661
    },
    {
        nombre: "Propiedad 801",
        direccion: "Calle 50, Barcelona",
        fechaDePublicacion: "2024-06-29",
        cantidadDeFotos: 17,
        metrosCuadrados: 473,
        precioDeVenta: 200662
    },
    {
        nombre: "Propiedad 802",
        direccion: "Calle 49, Valencia",
        fechaDePublicacion: "2024-06-09",
        cantidadDeFotos: 10,
        metrosCuadrados: 102,
        precioDeVenta: 63566
    },
    {
        nombre: "Propiedad 803",
        direccion: "Calle 68, Valencia",
        fechaDePublicacion: "2024-06-08",
        cantidadDeFotos: 4,
        metrosCuadrados: 234,
        precioDeVenta: 446283
    },
    {
        nombre: "Propiedad 804",
        direccion: "Calle 95, Zaragoza",
        fechaDePublicacion: "2024-06-14",
        cantidadDeFotos: 5,
        metrosCuadrados: 203,
        precioDeVenta: 371704
    },
    {
        nombre: "Propiedad 805",
        direccion: "Calle 83, Las Palmas de Gran Canaria",
        fechaDePublicacion: "2024-05-31",
        cantidadDeFotos: 6,
        metrosCuadrados: 245,
        precioDeVenta: 385484
    },
    {
        nombre: "Propiedad 806",
        direccion: "Calle 61, Las Palmas de Gran Canaria",
        fechaDePublicacion: "2024-06-11",
        cantidadDeFotos: 1,
        metrosCuadrados: 146,
        precioDeVenta: 565458
    },
    {
        nombre: "Propiedad 807",
        direccion: "Calle 65, Palma",
        fechaDePublicacion: "2024-06-16",
        cantidadDeFotos: 3,
        metrosCuadrados: 52,
        precioDeVenta: 470382
    },
    {
        nombre: "Propiedad 808",
        direccion: "Calle 11, Zaragoza",
        fechaDePublicacion: "2024-06-05",
        cantidadDeFotos: 3,
        metrosCuadrados: 399,
        precioDeVenta: 101542
    },
    {
        nombre: "Propiedad 809",
        direccion: "Calle 30, Las Palmas de Gran Canaria",
        fechaDePublicacion: "2024-06-15",
        cantidadDeFotos: 16,
        metrosCuadrados: 235,
        precioDeVenta: 863578
    },
    {
        nombre: "Propiedad 810",
        direccion: "Calle 14, Palma",
        fechaDePublicacion: "2024-06-09",
        cantidadDeFotos: 3,
        metrosCuadrados: 499,
        precioDeVenta: 343630
    },
    {
        nombre: "Propiedad 811",
        direccion: "Calle 37, Barcelona",
        fechaDePublicacion: "2024-06-06",
        cantidadDeFotos: 19,
        metrosCuadrados: 321,
        precioDeVenta: 825103
    },
    {
        nombre: "Propiedad 812",
        direccion: "Calle 99, Murcia",
        fechaDePublicacion: "2024-06-18",
        cantidadDeFotos: 8,
        metrosCuadrados: 332,
        precioDeVenta: 220712
    },
    {
        nombre: "Propiedad 813",
        direccion: "Calle 31, Las Palmas de Gran Canaria",
        fechaDePublicacion: "2024-06-26",
        cantidadDeFotos: 18,
        metrosCuadrados: 144,
        precioDeVenta: 109360
    },
    {
        nombre: "Propiedad 814",
        direccion: "Calle 24, Barcelona",
        fechaDePublicacion: "2024-06-02",
        cantidadDeFotos: 3,
        metrosCuadrados: 299,
        precioDeVenta: 699987
    },
    {
        nombre: "Propiedad 815",
        direccion: "Calle 3, Málaga",
        fechaDePublicacion: "2024-06-04",
        cantidadDeFotos: 4,
        metrosCuadrados: 412,
        precioDeVenta: 685737
    },
    {
        nombre: "Propiedad 816",
        direccion: "Calle 39, Barcelona",
        fechaDePublicacion: "2024-06-02",
        cantidadDeFotos: 5,
        metrosCuadrados: 255,
        precioDeVenta: 263903
    },
    {
        nombre: "Propiedad 817",
        direccion: "Calle 49, Madrid",
        fechaDePublicacion: "2024-06-06",
        cantidadDeFotos: 13,
        metrosCuadrados: 51,
        precioDeVenta: 551027
    },
    {
        nombre: "Propiedad 818",
        direccion: "Calle 79, Barcelona",
        fechaDePublicacion: "2024-06-26",
        cantidadDeFotos: 6,
        metrosCuadrados: 435,
        precioDeVenta: 938237
    },
    {
        nombre: "Propiedad 819",
        direccion: "Calle 11, Bilbao",
        fechaDePublicacion: "2024-06-12",
        cantidadDeFotos: 7,
        metrosCuadrados: 362,
        precioDeVenta: 820830
    },
    {
        nombre: "Propiedad 820",
        direccion: "Calle 70, Barcelona",
        fechaDePublicacion: "2024-06-06",
        cantidadDeFotos: 9,
        metrosCuadrados: 267,
        precioDeVenta: 194546
    },
    {
        nombre: "Propiedad 821",
        direccion: "Calle 47, Sevilla",
        fechaDePublicacion: "2024-06-25",
        cantidadDeFotos: 13,
        metrosCuadrados: 316,
        precioDeVenta: 875854
    },
    {
        nombre: "Propiedad 822",
        direccion: "Calle 62, Palma",
        fechaDePublicacion: "2024-06-22",
        cantidadDeFotos: 16,
        metrosCuadrados: 383,
        precioDeVenta: 897393
    },
    {
        nombre: "Propiedad 823",
        direccion: "Calle 21, Las Palmas de Gran Canaria",
        fechaDePublicacion: "2024-06-03",
        cantidadDeFotos: 3,
        metrosCuadrados: 332,
        precioDeVenta: 367198
    },
    {
        nombre: "Propiedad 824",
        direccion: "Calle 86, Zaragoza",
        fechaDePublicacion: "2024-06-14",
        cantidadDeFotos: 14,
        metrosCuadrados: 281,
        precioDeVenta: 600934
    },
    {
        nombre: "Propiedad 825",
        direccion: "Calle 3, Madrid",
        fechaDePublicacion: "2024-06-08",
        cantidadDeFotos: 13,
        metrosCuadrados: 239,
        precioDeVenta: 446878
    },
    {
        nombre: "Propiedad 826",
        direccion: "Calle 59, Málaga",
        fechaDePublicacion: "2024-06-25",
        cantidadDeFotos: 7,
        metrosCuadrados: 431,
        precioDeVenta: 209724
    },
    {
        nombre: "Propiedad 827",
        direccion: "Calle 51, Málaga",
        fechaDePublicacion: "2024-06-18",
        cantidadDeFotos: 14,
        metrosCuadrados: 189,
        precioDeVenta: 483615
    },
    {
        nombre: "Propiedad 828",
        direccion: "Calle 89, Palma",
        fechaDePublicacion: "2024-06-18",
        cantidadDeFotos: 6,
        metrosCuadrados: 114,
        precioDeVenta: 465375
    },
    {
        nombre: "Propiedad 829",
        direccion: "Calle 51, Palma",
        fechaDePublicacion: "2024-06-27",
        cantidadDeFotos: 16,
        metrosCuadrados: 71,
        precioDeVenta: 625366
    },
    {
        nombre: "Propiedad 830",
        direccion: "Calle 83, Valencia",
        fechaDePublicacion: "2024-06-22",
        cantidadDeFotos: 17,
        metrosCuadrados: 209,
        precioDeVenta: 853431
    },
    {
        nombre: "Propiedad 831",
        direccion: "Calle 25, Palma",
        fechaDePublicacion: "2024-06-07",
        cantidadDeFotos: 8,
        metrosCuadrados: 277,
        precioDeVenta: 217168
    },
    {
        nombre: "Propiedad 832",
        direccion: "Calle 22, Barcelona",
        fechaDePublicacion: "2024-06-03",
        cantidadDeFotos: 3,
        metrosCuadrados: 78,
        precioDeVenta: 826204
    },
    {
        nombre: "Propiedad 833",
        direccion: "Calle 5, Barcelona",
        fechaDePublicacion: "2024-06-20",
        cantidadDeFotos: 7,
        metrosCuadrados: 494,
        precioDeVenta: 50669
    },
    {
        nombre: "Propiedad 834",
        direccion: "Calle 98, Bilbao",
        fechaDePublicacion: "2024-06-05",
        cantidadDeFotos: 14,
        metrosCuadrados: 102,
        precioDeVenta: 398121
    },
    {
        nombre: "Propiedad 835",
        direccion: "Calle 15, Sevilla",
        fechaDePublicacion: "2024-06-08",
        cantidadDeFotos: 13,
        metrosCuadrados: 314,
        precioDeVenta: 639610
    },
    {
        nombre: "Propiedad 836",
        direccion: "Calle 17, Murcia",
        fechaDePublicacion: "2024-06-28",
        cantidadDeFotos: 14,
        metrosCuadrados: 263,
        precioDeVenta: 592461
    },
    {
        nombre: "Propiedad 837",
        direccion: "Calle 35, Zaragoza",
        fechaDePublicacion: "2024-06-12",
        cantidadDeFotos: 9,
        metrosCuadrados: 379,
        precioDeVenta: 72490
    },
    {
        nombre: "Propiedad 838",
        direccion: "Calle 14, Bilbao",
        fechaDePublicacion: "2024-06-27",
        cantidadDeFotos: 8,
        metrosCuadrados: 164,
        precioDeVenta: 136664
    },
    {
        nombre: "Propiedad 839",
        direccion: "Calle 75, Madrid",
        fechaDePublicacion: "2024-06-25",
        cantidadDeFotos: 7,
        metrosCuadrados: 475,
        precioDeVenta: 705832
    },
    {
        nombre: "Propiedad 840",
        direccion: "Calle 35, Palma",
        fechaDePublicacion: "2024-06-21",
        cantidadDeFotos: 11,
        metrosCuadrados: 141,
        precioDeVenta: 524990
    },
    {
        nombre: "Propiedad 841",
        direccion: "Calle 68, Las Palmas de Gran Canaria",
        fechaDePublicacion: "2024-06-24",
        cantidadDeFotos: 7,
        metrosCuadrados: 264,
        precioDeVenta: 610639
    },
    {
        nombre: "Propiedad 842",
        direccion: "Calle 9, Málaga",
        fechaDePublicacion: "2024-06-21",
        cantidadDeFotos: 3,
        metrosCuadrados: 346,
        precioDeVenta: 62916
    },
    {
        nombre: "Propiedad 843",
        direccion: "Calle 27, Bilbao",
        fechaDePublicacion: "2024-06-02",
        cantidadDeFotos: 16,
        metrosCuadrados: 286,
        precioDeVenta: 253199
    },
    {
        nombre: "Propiedad 844",
        direccion: "Calle 58, Las Palmas de Gran Canaria",
        fechaDePublicacion: "2024-06-26",
        cantidadDeFotos: 4,
        metrosCuadrados: 221,
        precioDeVenta: 341417
    },
    {
        nombre: "Propiedad 845",
        direccion: "Calle 65, Sevilla",
        fechaDePublicacion: "2024-06-12",
        cantidadDeFotos: 2,
        metrosCuadrados: 233,
        precioDeVenta: 214383
    },
    {
        nombre: "Propiedad 846",
        direccion: "Calle 58, Zaragoza",
        fechaDePublicacion: "2024-06-15",
        cantidadDeFotos: 14,
        metrosCuadrados: 99,
        precioDeVenta: 725474
    },
    {
        nombre: "Propiedad 847",
        direccion: "Calle 98, Las Palmas de Gran Canaria",
        fechaDePublicacion: "2024-06-17",
        cantidadDeFotos: 13,
        metrosCuadrados: 390,
        precioDeVenta: 642989
    },
    {
        nombre: "Propiedad 848",
        direccion: "Calle 29, Barcelona",
        fechaDePublicacion: "2024-06-03",
        cantidadDeFotos: 3,
        metrosCuadrados: 315,
        precioDeVenta: 906320
    },
    {
        nombre: "Propiedad 849",
        direccion: "Calle 67, Zaragoza",
        fechaDePublicacion: "2024-06-04",
        cantidadDeFotos: 6,
        metrosCuadrados: 97,
        precioDeVenta: 146420
    },
    {
        nombre: "Propiedad 850",
        direccion: "Calle 44, Bilbao",
        fechaDePublicacion: "2024-06-14",
        cantidadDeFotos: 7,
        metrosCuadrados: 60,
        precioDeVenta: 542885
    },
    {
        nombre: "Propiedad 851",
        direccion: "Calle 85, Bilbao",
        fechaDePublicacion: "2024-06-27",
        cantidadDeFotos: 16,
        metrosCuadrados: 263,
        precioDeVenta: 582426
    },
    {
        nombre: "Propiedad 852",
        direccion: "Calle 34, Murcia",
        fechaDePublicacion: "2024-06-24",
        cantidadDeFotos: 5,
        metrosCuadrados: 232,
        precioDeVenta: 504721
    },
    {
        nombre: "Propiedad 853",
        direccion: "Calle 18, Las Palmas de Gran Canaria",
        fechaDePublicacion: "2024-06-11",
        cantidadDeFotos: 11,
        metrosCuadrados: 484,
        precioDeVenta: 159114
    },
    {
        nombre: "Propiedad 854",
        direccion: "Calle 91, Bilbao",
        fechaDePublicacion: "2024-06-08",
        cantidadDeFotos: 17,
        metrosCuadrados: 488,
        precioDeVenta: 520486
    },
    {
        nombre: "Propiedad 855",
        direccion: "Calle 58, Bilbao",
        fechaDePublicacion: "2024-06-29",
        cantidadDeFotos: 5,
        metrosCuadrados: 296,
        precioDeVenta: 860693
    },
    {
        nombre: "Propiedad 856",
        direccion: "Calle 71, Valencia",
        fechaDePublicacion: "2024-06-17",
        cantidadDeFotos: 8,
        metrosCuadrados: 207,
        precioDeVenta: 959876
    },
    {
        nombre: "Propiedad 857",
        direccion: "Calle 4, Palma",
        fechaDePublicacion: "2024-06-09",
        cantidadDeFotos: 18,
        metrosCuadrados: 289,
        precioDeVenta: 694844
    },
    {
        nombre: "Propiedad 858",
        direccion: "Calle 42, Palma",
        fechaDePublicacion: "2024-06-27",
        cantidadDeFotos: 14,
        metrosCuadrados: 315,
        precioDeVenta: 896800
    },
    {
        nombre: "Propiedad 859",
        direccion: "Calle 50, Sevilla",
        fechaDePublicacion: "2024-06-08",
        cantidadDeFotos: 14,
        metrosCuadrados: 271,
        precioDeVenta: 683172
    },
    {
        nombre: "Propiedad 860",
        direccion: "Calle 4, Las Palmas de Gran Canaria",
        fechaDePublicacion: "2024-06-16",
        cantidadDeFotos: 3,
        metrosCuadrados: 52,
        precioDeVenta: 913568
    },
    {
        nombre: "Propiedad 861",
        direccion: "Calle 6, Madrid",
        fechaDePublicacion: "2024-06-16",
        cantidadDeFotos: 5,
        metrosCuadrados: 84,
        precioDeVenta: 665793
    },
    {
        nombre: "Propiedad 862",
        direccion: "Calle 38, Las Palmas de Gran Canaria",
        fechaDePublicacion: "2024-06-08",
        cantidadDeFotos: 8,
        metrosCuadrados: 76,
        precioDeVenta: 791531
    },
    {
        nombre: "Propiedad 863",
        direccion: "Calle 82, Valencia",
        fechaDePublicacion: "2024-06-15",
        cantidadDeFotos: 16,
        metrosCuadrados: 372,
        precioDeVenta: 785378
    },
    {
        nombre: "Propiedad 864",
        direccion: "Calle 78, Las Palmas de Gran Canaria",
        fechaDePublicacion: "2024-06-14",
        cantidadDeFotos: 7,
        metrosCuadrados: 378,
        precioDeVenta: 386067
    },
    {
        nombre: "Propiedad 865",
        direccion: "Calle 16, Zaragoza",
        fechaDePublicacion: "2024-06-08",
        cantidadDeFotos: 8,
        metrosCuadrados: 348,
        precioDeVenta: 875258
    },
    {
        nombre: "Propiedad 866",
        direccion: "Calle 10, Málaga",
        fechaDePublicacion: "2024-06-20",
        cantidadDeFotos: 8,
        metrosCuadrados: 443,
        precioDeVenta: 261598
    },
    {
        nombre: "Propiedad 867",
        direccion: "Calle 36, Sevilla",
        fechaDePublicacion: "2024-06-25",
        cantidadDeFotos: 16,
        metrosCuadrados: 290,
        precioDeVenta: 742825
    },
    {
        nombre: "Propiedad 868",
        direccion: "Calle 97, Bilbao",
        fechaDePublicacion: "2024-06-05",
        cantidadDeFotos: 1,
        metrosCuadrados: 498,
        precioDeVenta: 464662
    },
    {
        nombre: "Propiedad 869",
        direccion: "Calle 23, Valencia",
        fechaDePublicacion: "2024-06-09",
        cantidadDeFotos: 6,
        metrosCuadrados: 431,
        precioDeVenta: 780497
    },
    {
        nombre: "Propiedad 870",
        direccion: "Calle 12, Málaga",
        fechaDePublicacion: "2024-06-27",
        cantidadDeFotos: 11,
        metrosCuadrados: 217,
        precioDeVenta: 55750
    },
    {
        nombre: "Propiedad 871",
        direccion: "Calle 21, Valencia",
        fechaDePublicacion: "2024-06-24",
        cantidadDeFotos: 2,
        metrosCuadrados: 366,
        precioDeVenta: 131377
    },
    {
        nombre: "Propiedad 872",
        direccion: "Calle 68, Palma",
        fechaDePublicacion: "2024-06-12",
        cantidadDeFotos: 7,
        metrosCuadrados: 226,
        precioDeVenta: 722442
    },
    {
        nombre: "Propiedad 873",
        direccion: "Calle 81, Valencia",
        fechaDePublicacion: "2024-06-19",
        cantidadDeFotos: 4,
        metrosCuadrados: 124,
        precioDeVenta: 494801
    },
    {
        nombre: "Propiedad 874",
        direccion: "Calle 43, Murcia",
        fechaDePublicacion: "2024-06-26",
        cantidadDeFotos: 2,
        metrosCuadrados: 343,
        precioDeVenta: 937927
    },
    {
        nombre: "Propiedad 875",
        direccion: "Calle 96, Sevilla",
        fechaDePublicacion: "2024-06-09",
        cantidadDeFotos: 11,
        metrosCuadrados: 287,
        precioDeVenta: 75965
    },
    {
        nombre: "Propiedad 876",
        direccion: "Calle 29, Madrid",
        fechaDePublicacion: "2024-06-16",
        cantidadDeFotos: 1,
        metrosCuadrados: 355,
        precioDeVenta: 896681
    },
    {
        nombre: "Propiedad 877",
        direccion: "Calle 95, Sevilla",
        fechaDePublicacion: "2024-06-24",
        cantidadDeFotos: 18,
        metrosCuadrados: 97,
        precioDeVenta: 440397
    },
    {
        nombre: "Propiedad 878",
        direccion: "Calle 60, Madrid",
        fechaDePublicacion: "2024-06-09",
        cantidadDeFotos: 19,
        metrosCuadrados: 450,
        precioDeVenta: 847578
    },
    {
        nombre: "Propiedad 879",
        direccion: "Calle 97, Barcelona",
        fechaDePublicacion: "2024-06-09",
        cantidadDeFotos: 2,
        metrosCuadrados: 454,
        precioDeVenta: 56652
    },
    {
        nombre: "Propiedad 880",
        direccion: "Calle 25, Las Palmas de Gran Canaria",
        fechaDePublicacion: "2024-06-24",
        cantidadDeFotos: 5,
        metrosCuadrados: 328,
        precioDeVenta: 625399
    },
    {
        nombre: "Propiedad 881",
        direccion: "Calle 47, Las Palmas de Gran Canaria",
        fechaDePublicacion: "2024-06-20",
        cantidadDeFotos: 5,
        metrosCuadrados: 137,
        precioDeVenta: 507922
    },
    {
        nombre: "Propiedad 882",
        direccion: "Calle 60, Sevilla",
        fechaDePublicacion: "2024-06-12",
        cantidadDeFotos: 4,
        metrosCuadrados: 231,
        precioDeVenta: 194740
    },
    {
        nombre: "Propiedad 883",
        direccion: "Calle 75, Palma",
        fechaDePublicacion: "2024-06-19",
        cantidadDeFotos: 8,
        metrosCuadrados: 291,
        precioDeVenta: 742062
    },
    {
        nombre: "Propiedad 884",
        direccion: "Calle 8, Sevilla",
        fechaDePublicacion: "2024-06-25",
        cantidadDeFotos: 16,
        metrosCuadrados: 476,
        precioDeVenta: 700266
    },
    {
        nombre: "Propiedad 885",
        direccion: "Calle 39, Madrid",
        fechaDePublicacion: "2024-06-11",
        cantidadDeFotos: 8,
        metrosCuadrados: 304,
        precioDeVenta: 525336
    },
    {
        nombre: "Propiedad 886",
        direccion: "Calle 24, Barcelona",
        fechaDePublicacion: "2024-06-17",
        cantidadDeFotos: 13,
        metrosCuadrados: 446,
        precioDeVenta: 492802
    },
    {
        nombre: "Propiedad 887",
        direccion: "Calle 76, Madrid",
        fechaDePublicacion: "2024-06-13",
        cantidadDeFotos: 9,
        metrosCuadrados: 229,
        precioDeVenta: 244033
    },
    {
        nombre: "Propiedad 888",
        direccion: "Calle 30, Valencia",
        fechaDePublicacion: "2024-06-10",
        cantidadDeFotos: 14,
        metrosCuadrados: 348,
        precioDeVenta: 184963
    },
    {
        nombre: "Propiedad 889",
        direccion: "Calle 88, Barcelona",
        fechaDePublicacion: "2024-06-05",
        cantidadDeFotos: 16,
        metrosCuadrados: 296,
        precioDeVenta: 82474
    },
    {
        nombre: "Propiedad 890",
        direccion: "Calle 33, Murcia",
        fechaDePublicacion: "2024-06-14",
        cantidadDeFotos: 15,
        metrosCuadrados: 125,
        precioDeVenta: 422452
    },
    {
        nombre: "Propiedad 891",
        direccion: "Calle 13, Palma",
        fechaDePublicacion: "2024-06-23",
        cantidadDeFotos: 14,
        metrosCuadrados: 423,
        precioDeVenta: 998982
    },
    {
        nombre: "Propiedad 892",
        direccion: "Calle 45, Valencia",
        fechaDePublicacion: "2024-06-10",
        cantidadDeFotos: 7,
        metrosCuadrados: 212,
        precioDeVenta: 832467
    },
    {
        nombre: "Propiedad 893",
        direccion: "Calle 79, Palma",
        fechaDePublicacion: "2024-06-17",
        cantidadDeFotos: 6,
        metrosCuadrados: 121,
        precioDeVenta: 889341
    },
    {
        nombre: "Propiedad 894",
        direccion: "Calle 42, Barcelona",
        fechaDePublicacion: "2024-06-07",
        cantidadDeFotos: 9,
        metrosCuadrados: 53,
        precioDeVenta: 632275
    },
    {
        nombre: "Propiedad 895",
        direccion: "Calle 58, Barcelona",
        fechaDePublicacion: "2024-06-15",
        cantidadDeFotos: 12,
        metrosCuadrados: 481,
        precioDeVenta: 267141
    },
    {
        nombre: "Propiedad 896",
        direccion: "Calle 50, Palma",
        fechaDePublicacion: "2024-06-18",
        cantidadDeFotos: 20,
        metrosCuadrados: 235,
        precioDeVenta: 698684
    },
    {
        nombre: "Propiedad 897",
        direccion: "Calle 35, Madrid",
        fechaDePublicacion: "2024-06-01",
        cantidadDeFotos: 6,
        metrosCuadrados: 312,
        precioDeVenta: 482082
    },
    {
        nombre: "Propiedad 898",
        direccion: "Calle 59, Málaga",
        fechaDePublicacion: "2024-06-20",
        cantidadDeFotos: 18,
        metrosCuadrados: 321,
        precioDeVenta: 506287
    },
    {
        nombre: "Propiedad 899",
        direccion: "Calle 63, Zaragoza",
        fechaDePublicacion: "2024-06-13",
        cantidadDeFotos: 5,
        metrosCuadrados: 370,
        precioDeVenta: 452940
    },
    {
        nombre: "Propiedad 900",
        direccion: "Calle 79, Málaga",
        fechaDePublicacion: "2024-06-28",
        cantidadDeFotos: 18,
        metrosCuadrados: 224,
        precioDeVenta: 914198
    },
    {
        nombre: "Propiedad 901",
        direccion: "Calle 26, Valencia",
        fechaDePublicacion: "2024-06-19",
        cantidadDeFotos: 4,
        metrosCuadrados: 199,
        precioDeVenta: 647051
    },
    {
        nombre: "Propiedad 902",
        direccion: "Calle 49, Sevilla",
        fechaDePublicacion: "2024-06-18",
        cantidadDeFotos: 5,
        metrosCuadrados: 498,
        precioDeVenta: 854083
    },
    {
        nombre: "Propiedad 903",
        direccion: "Calle 65, Málaga",
        fechaDePublicacion: "2024-06-25",
        cantidadDeFotos: 5,
        metrosCuadrados: 207,
        precioDeVenta: 359684
    },
    {
        nombre: "Propiedad 904",
        direccion: "Calle 75, Zaragoza",
        fechaDePublicacion: "2024-06-18",
        cantidadDeFotos: 10,
        metrosCuadrados: 171,
        precioDeVenta: 843807
    },
    {
        nombre: "Propiedad 905",
        direccion: "Calle 20, Palma",
        fechaDePublicacion: "2024-06-20",
        cantidadDeFotos: 14,
        metrosCuadrados: 214,
        precioDeVenta: 332117
    },
    {
        nombre: "Propiedad 906",
        direccion: "Calle 40, Málaga",
        fechaDePublicacion: "2024-06-02",
        cantidadDeFotos: 8,
        metrosCuadrados: 278,
        precioDeVenta: 284249
    },
    {
        nombre: "Propiedad 907",
        direccion: "Calle 2, Bilbao",
        fechaDePublicacion: "2024-06-04",
        cantidadDeFotos: 1,
        metrosCuadrados: 94,
        precioDeVenta: 508863
    },
    {
        nombre: "Propiedad 908",
        direccion: "Calle 4, Las Palmas de Gran Canaria",
        fechaDePublicacion: "2024-06-21",
        cantidadDeFotos: 5,
        metrosCuadrados: 424,
        precioDeVenta: 709129
    },
    {
        nombre: "Propiedad 909",
        direccion: "Calle 25, Valencia",
        fechaDePublicacion: "2024-06-09",
        cantidadDeFotos: 15,
        metrosCuadrados: 112,
        precioDeVenta: 159216
    },
    {
        nombre: "Propiedad 910",
        direccion: "Calle 63, Las Palmas de Gran Canaria",
        fechaDePublicacion: "2024-06-28",
        cantidadDeFotos: 16,
        metrosCuadrados: 115,
        precioDeVenta: 159586
    },
    {
        nombre: "Propiedad 911",
        direccion: "Calle 8, Murcia",
        fechaDePublicacion: "2024-06-09",
        cantidadDeFotos: 9,
        metrosCuadrados: 494,
        precioDeVenta: 277181
    },
    {
        nombre: "Propiedad 912",
        direccion: "Calle 43, Palma",
        fechaDePublicacion: "2024-06-03",
        cantidadDeFotos: 11,
        metrosCuadrados: 254,
        precioDeVenta: 324998
    },
    {
        nombre: "Propiedad 913",
        direccion: "Calle 91, Valencia",
        fechaDePublicacion: "2024-06-27",
        cantidadDeFotos: 10,
        metrosCuadrados: 198,
        precioDeVenta: 86359
    },
    {
        nombre: "Propiedad 914",
        direccion: "Calle 19, Barcelona",
        fechaDePublicacion: "2024-06-16",
        cantidadDeFotos: 10,
        metrosCuadrados: 234,
        precioDeVenta: 753170
    },
    {
        nombre: "Propiedad 915",
        direccion: "Calle 55, Sevilla",
        fechaDePublicacion: "2024-06-07",
        cantidadDeFotos: 20,
        metrosCuadrados: 212,
        precioDeVenta: 260772
    },
    {
        nombre: "Propiedad 916",
        direccion: "Calle 38, Murcia",
        fechaDePublicacion: "2024-06-03",
        cantidadDeFotos: 19,
        metrosCuadrados: 349,
        precioDeVenta: 161728
    },
    {
        nombre: "Propiedad 917",
        direccion: "Calle 55, Palma",
        fechaDePublicacion: "2024-06-07",
        cantidadDeFotos: 1,
        metrosCuadrados: 137,
        precioDeVenta: 433236
    },
    {
        nombre: "Propiedad 918",
        direccion: "Calle 68, Barcelona",
        fechaDePublicacion: "2024-06-08",
        cantidadDeFotos: 15,
        metrosCuadrados: 265,
        precioDeVenta: 327018
    },
    {
        nombre: "Propiedad 919",
        direccion: "Calle 17, Valencia",
        fechaDePublicacion: "2024-06-19",
        cantidadDeFotos: 19,
        metrosCuadrados: 237,
        precioDeVenta: 92491
    },
    {
        nombre: "Propiedad 920",
        direccion: "Calle 70, Málaga",
        fechaDePublicacion: "2024-06-16",
        cantidadDeFotos: 7,
        metrosCuadrados: 353,
        precioDeVenta: 244996
    },
    {
        nombre: "Propiedad 921",
        direccion: "Calle 5, Murcia",
        fechaDePublicacion: "2024-06-10",
        cantidadDeFotos: 2,
        metrosCuadrados: 180,
        precioDeVenta: 860419
    },
    {
        nombre: "Propiedad 922",
        direccion: "Calle 57, Murcia",
        fechaDePublicacion: "2024-06-18",
        cantidadDeFotos: 17,
        metrosCuadrados: 190,
        precioDeVenta: 262648
    },
    {
        nombre: "Propiedad 923",
        direccion: "Calle 99, Zaragoza",
        fechaDePublicacion: "2024-06-13",
        cantidadDeFotos: 12,
        metrosCuadrados: 86,
        precioDeVenta: 646128
    },
    {
        nombre: "Propiedad 924",
        direccion: "Calle 66, Murcia",
        fechaDePublicacion: "2024-06-12",
        cantidadDeFotos: 17,
        metrosCuadrados: 81,
        precioDeVenta: 741853
    },
    {
        nombre: "Propiedad 925",
        direccion: "Calle 17, Barcelona",
        fechaDePublicacion: "2024-06-23",
        cantidadDeFotos: 11,
        metrosCuadrados: 95,
        precioDeVenta: 703154
    },
    {
        nombre: "Propiedad 926",
        direccion: "Calle 52, Sevilla",
        fechaDePublicacion: "2024-06-10",
        cantidadDeFotos: 9,
        metrosCuadrados: 191,
        precioDeVenta: 976115
    },
    {
        nombre: "Propiedad 927",
        direccion: "Calle 70, Madrid",
        fechaDePublicacion: "2024-06-28",
        cantidadDeFotos: 8,
        metrosCuadrados: 207,
        precioDeVenta: 236622
    },
    {
        nombre: "Propiedad 928",
        direccion: "Calle 18, Madrid",
        fechaDePublicacion: "2024-06-05",
        cantidadDeFotos: 10,
        metrosCuadrados: 252,
        precioDeVenta: 956980
    },
    {
        nombre: "Propiedad 929",
        direccion: "Calle 18, Murcia",
        fechaDePublicacion: "2024-06-02",
        cantidadDeFotos: 3,
        metrosCuadrados: 354,
        precioDeVenta: 385622
    },
    {
        nombre: "Propiedad 930",
        direccion: "Calle 17, Murcia",
        fechaDePublicacion: "2024-06-06",
        cantidadDeFotos: 15,
        metrosCuadrados: 262,
        precioDeVenta: 482215
    },
    {
        nombre: "Propiedad 931",
        direccion: "Calle 56, Málaga",
        fechaDePublicacion: "2024-06-14",
        cantidadDeFotos: 20,
        metrosCuadrados: 466,
        precioDeVenta: 264733
    },
    {
        nombre: "Propiedad 932",
        direccion: "Calle 26, Málaga",
        fechaDePublicacion: "2024-06-04",
        cantidadDeFotos: 15,
        metrosCuadrados: 103,
        precioDeVenta: 384423
    },
    {
        nombre: "Propiedad 933",
        direccion: "Calle 19, Las Palmas de Gran Canaria",
        fechaDePublicacion: "2024-06-10",
        cantidadDeFotos: 12,
        metrosCuadrados: 299,
        precioDeVenta: 257337
    },
    {
        nombre: "Propiedad 934",
        direccion: "Calle 32, Murcia",
        fechaDePublicacion: "2024-06-24",
        cantidadDeFotos: 2,
        metrosCuadrados: 461,
        precioDeVenta: 182664
    },
    {
        nombre: "Propiedad 935",
        direccion: "Calle 46, Palma",
        fechaDePublicacion: "2024-06-09",
        cantidadDeFotos: 2,
        metrosCuadrados: 313,
        precioDeVenta: 73993
    },
    {
        nombre: "Propiedad 936",
        direccion: "Calle 33, Bilbao",
        fechaDePublicacion: "2024-06-04",
        cantidadDeFotos: 15,
        metrosCuadrados: 58,
        precioDeVenta: 350047
    },
    {
        nombre: "Propiedad 937",
        direccion: "Calle 60, Valencia",
        fechaDePublicacion: "2024-06-26",
        cantidadDeFotos: 1,
        metrosCuadrados: 148,
        precioDeVenta: 729133
    },
    {
        nombre: "Propiedad 938",
        direccion: "Calle 66, Bilbao",
        fechaDePublicacion: "2024-06-13",
        cantidadDeFotos: 8,
        metrosCuadrados: 224,
        precioDeVenta: 993830
    },
    {
        nombre: "Propiedad 939",
        direccion: "Calle 77, Murcia",
        fechaDePublicacion: "2024-06-03",
        cantidadDeFotos: 20,
        metrosCuadrados: 291,
        precioDeVenta: 895584
    },
    {
        nombre: "Propiedad 940",
        direccion: "Calle 86, Las Palmas de Gran Canaria",
        fechaDePublicacion: "2024-06-12",
        cantidadDeFotos: 7,
        metrosCuadrados: 73,
        precioDeVenta: 711964
    },
    {
        nombre: "Propiedad 941",
        direccion: "Calle 70, Bilbao",
        fechaDePublicacion: "2024-06-21",
        cantidadDeFotos: 13,
        metrosCuadrados: 253,
        precioDeVenta: 241276
    },
    {
        nombre: "Propiedad 942",
        direccion: "Calle 75, Madrid",
        fechaDePublicacion: "2024-06-21",
        cantidadDeFotos: 12,
        metrosCuadrados: 130,
        precioDeVenta: 475693
    },
    {
        nombre: "Propiedad 943",
        direccion: "Calle 78, Sevilla",
        fechaDePublicacion: "2024-06-20",
        cantidadDeFotos: 11,
        metrosCuadrados: 53,
        precioDeVenta: 162315
    },
    {
        nombre: "Propiedad 944",
        direccion: "Calle 19, Las Palmas de Gran Canaria",
        fechaDePublicacion: "2024-06-17",
        cantidadDeFotos: 5,
        metrosCuadrados: 71,
        precioDeVenta: 721921
    },
    {
        nombre: "Propiedad 945",
        direccion: "Calle 7, Madrid",
        fechaDePublicacion: "2024-06-06",
        cantidadDeFotos: 18,
        metrosCuadrados: 272,
        precioDeVenta: 986865
    },
    {
        nombre: "Propiedad 946",
        direccion: "Calle 9, Zaragoza",
        fechaDePublicacion: "2024-06-04",
        cantidadDeFotos: 15,
        metrosCuadrados: 172,
        precioDeVenta: 676305
    },
    {
        nombre: "Propiedad 947",
        direccion: "Calle 26, Barcelona",
        fechaDePublicacion: "2024-06-13",
        cantidadDeFotos: 2,
        metrosCuadrados: 388,
        precioDeVenta: 617346
    },
    {
        nombre: "Propiedad 948",
        direccion: "Calle 43, Sevilla",
        fechaDePublicacion: "2024-06-13",
        cantidadDeFotos: 18,
        metrosCuadrados: 99,
        precioDeVenta: 709503
    },
    {
        nombre: "Propiedad 949",
        direccion: "Calle 55, Las Palmas de Gran Canaria",
        fechaDePublicacion: "2024-06-12",
        cantidadDeFotos: 2,
        metrosCuadrados: 249,
        precioDeVenta: 579805
    },
    {
        nombre: "Propiedad 950",
        direccion: "Calle 22, Zaragoza",
        fechaDePublicacion: "2024-06-03",
        cantidadDeFotos: 19,
        metrosCuadrados: 447,
        precioDeVenta: 941568
    },
    {
        nombre: "Propiedad 951",
        direccion: "Calle 7, Murcia",
        fechaDePublicacion: "2024-06-12",
        cantidadDeFotos: 20,
        metrosCuadrados: 269,
        precioDeVenta: 974369
    },
    {
        nombre: "Propiedad 952",
        direccion: "Calle 60, Zaragoza",
        fechaDePublicacion: "2024-06-23",
        cantidadDeFotos: 11,
        metrosCuadrados: 150,
        precioDeVenta: 451511
    },
    {
        nombre: "Propiedad 953",
        direccion: "Calle 51, Barcelona",
        fechaDePublicacion: "2024-06-25",
        cantidadDeFotos: 9,
        metrosCuadrados: 204,
        precioDeVenta: 339251
    },
    {
        nombre: "Propiedad 954",
        direccion: "Calle 17, Valencia",
        fechaDePublicacion: "2024-06-17",
        cantidadDeFotos: 14,
        metrosCuadrados: 190,
        precioDeVenta: 264036
    },
    {
        nombre: "Propiedad 955",
        direccion: "Calle 87, Valencia",
        fechaDePublicacion: "2024-06-19",
        cantidadDeFotos: 5,
        metrosCuadrados: 78,
        precioDeVenta: 809565
    },
    {
        nombre: "Propiedad 956",
        direccion: "Calle 83, Palma",
        fechaDePublicacion: "2024-06-16",
        cantidadDeFotos: 10,
        metrosCuadrados: 59,
        precioDeVenta: 428177
    },
    {
        nombre: "Propiedad 957",
        direccion: "Calle 8, Palma",
        fechaDePublicacion: "2024-06-07",
        cantidadDeFotos: 8,
        metrosCuadrados: 228,
        precioDeVenta: 289297
    },
    {
        nombre: "Propiedad 958",
        direccion: "Calle 29, Palma",
        fechaDePublicacion: "2024-06-21",
        cantidadDeFotos: 5,
        metrosCuadrados: 477,
        precioDeVenta: 329408
    },
    {
        nombre: "Propiedad 959",
        direccion: "Calle 41, Sevilla",
        fechaDePublicacion: "2024-06-10",
        cantidadDeFotos: 20,
        metrosCuadrados: 443,
        precioDeVenta: 175794
    },
    {
        nombre: "Propiedad 960",
        direccion: "Calle 69, Murcia",
        fechaDePublicacion: "2024-06-23",
        cantidadDeFotos: 15,
        metrosCuadrados: 197,
        precioDeVenta: 285489
    },
    {
        nombre: "Propiedad 961",
        direccion: "Calle 37, Zaragoza",
        fechaDePublicacion: "2024-06-04",
        cantidadDeFotos: 18,
        metrosCuadrados: 52,
        precioDeVenta: 625359
    },
    {
        nombre: "Propiedad 962",
        direccion: "Calle 26, Las Palmas de Gran Canaria",
        fechaDePublicacion: "2024-06-25",
        cantidadDeFotos: 11,
        metrosCuadrados: 150,
        precioDeVenta: 610692
    },
    {
        nombre: "Propiedad 963",
        direccion: "Calle 31, Valencia",
        fechaDePublicacion: "2024-06-07",
        cantidadDeFotos: 10,
        metrosCuadrados: 477,
        precioDeVenta: 85912
    },
    {
        nombre: "Propiedad 964",
        direccion: "Calle 10, Valencia",
        fechaDePublicacion: "2024-06-10",
        cantidadDeFotos: 12,
        metrosCuadrados: 361,
        precioDeVenta: 679022
    },
    {
        nombre: "Propiedad 965",
        direccion: "Calle 87, Sevilla",
        fechaDePublicacion: "2024-06-05",
        cantidadDeFotos: 11,
        metrosCuadrados: 195,
        precioDeVenta: 817446
    },
    {
        nombre: "Propiedad 966",
        direccion: "Calle 6, Zaragoza",
        fechaDePublicacion: "2024-06-02",
        cantidadDeFotos: 8,
        metrosCuadrados: 235,
        precioDeVenta: 404459
    },
    {
        nombre: "Propiedad 967",
        direccion: "Calle 63, Las Palmas de Gran Canaria",
        fechaDePublicacion: "2024-06-11",
        cantidadDeFotos: 9,
        metrosCuadrados: 297,
        precioDeVenta: 83268
    },
    {
        nombre: "Propiedad 968",
        direccion: "Calle 46, Málaga",
        fechaDePublicacion: "2024-06-06",
        cantidadDeFotos: 20,
        metrosCuadrados: 440,
        precioDeVenta: 393066
    },
    {
        nombre: "Propiedad 969",
        direccion: "Calle 89, Valencia",
        fechaDePublicacion: "2024-06-15",
        cantidadDeFotos: 3,
        metrosCuadrados: 268,
        precioDeVenta: 860740
    },
    {
        nombre: "Propiedad 970",
        direccion: "Calle 68, Murcia",
        fechaDePublicacion: "2024-06-29",
        cantidadDeFotos: 20,
        metrosCuadrados: 165,
        precioDeVenta: 509331
    },
    {
        nombre: "Propiedad 971",
        direccion: "Calle 4, Bilbao",
        fechaDePublicacion: "2024-06-27",
        cantidadDeFotos: 7,
        metrosCuadrados: 58,
        precioDeVenta: 846222
    },
    {
        nombre: "Propiedad 972",
        direccion: "Calle 96, Bilbao",
        fechaDePublicacion: "2024-06-10",
        cantidadDeFotos: 3,
        metrosCuadrados: 168,
        precioDeVenta: 141004
    },
    {
        nombre: "Propiedad 973",
        direccion: "Calle 80, Las Palmas de Gran Canaria",
        fechaDePublicacion: "2024-06-13",
        cantidadDeFotos: 14,
        metrosCuadrados: 103,
        precioDeVenta: 73253
    },
    {
        nombre: "Propiedad 974",
        direccion: "Calle 3, Murcia",
        fechaDePublicacion: "2024-06-20",
        cantidadDeFotos: 4,
        metrosCuadrados: 60,
        precioDeVenta: 552402
    },
    {
        nombre: "Propiedad 975",
        direccion: "Calle 58, Madrid",
        fechaDePublicacion: "2024-06-28",
        cantidadDeFotos: 7,
        metrosCuadrados: 57,
        precioDeVenta: 467216
    },
    {
        nombre: "Propiedad 976",
        direccion: "Calle 90, Bilbao",
        fechaDePublicacion: "2024-06-06",
        cantidadDeFotos: 2,
        metrosCuadrados: 448,
        precioDeVenta: 403681
    },
    {
        nombre: "Propiedad 977",
        direccion: "Calle 94, Bilbao",
        fechaDePublicacion: "2024-06-29",
        cantidadDeFotos: 11,
        metrosCuadrados: 497,
        precioDeVenta: 392204
    },
    {
        nombre: "Propiedad 978",
        direccion: "Calle 34, Valencia",
        fechaDePublicacion: "2024-06-26",
        cantidadDeFotos: 7,
        metrosCuadrados: 431,
        precioDeVenta: 651560
    },
    {
        nombre: "Propiedad 979",
        direccion: "Calle 59, Las Palmas de Gran Canaria",
        fechaDePublicacion: "2024-06-29",
        cantidadDeFotos: 11,
        metrosCuadrados: 297,
        precioDeVenta: 134308
    },
    {
        nombre: "Propiedad 980",
        direccion: "Calle 74, Palma",
        fechaDePublicacion: "2024-06-29",
        cantidadDeFotos: 8,
        metrosCuadrados: 351,
        precioDeVenta: 686557
    },
    {
        nombre: "Propiedad 981",
        direccion: "Calle 35, Barcelona",
        fechaDePublicacion: "2024-06-05",
        cantidadDeFotos: 2,
        metrosCuadrados: 75,
        precioDeVenta: 964032
    },
    {
        nombre: "Propiedad 982",
        direccion: "Calle 79, Málaga",
        fechaDePublicacion: "2024-06-18",
        cantidadDeFotos: 5,
        metrosCuadrados: 334,
        precioDeVenta: 67500
    },
    {
        nombre: "Propiedad 983",
        direccion: "Calle 79, Palma",
        fechaDePublicacion: "2024-06-06",
        cantidadDeFotos: 1,
        metrosCuadrados: 402,
        precioDeVenta: 79296
    },
    {
        nombre: "Propiedad 984",
        direccion: "Calle 31, Las Palmas de Gran Canaria",
        fechaDePublicacion: "2024-06-17",
        cantidadDeFotos: 5,
        metrosCuadrados: 332,
        precioDeVenta: 419494
    },
    {
        nombre: "Propiedad 985",
        direccion: "Calle 82, Zaragoza",
        fechaDePublicacion: "2024-06-11",
        cantidadDeFotos: 3,
        metrosCuadrados: 211,
        precioDeVenta: 226991
    },
    {
        nombre: "Propiedad 986",
        direccion: "Calle 41, Madrid",
        fechaDePublicacion: "2024-06-13",
        cantidadDeFotos: 18,
        metrosCuadrados: 495,
        precioDeVenta: 771394
    },
    {
        nombre: "Propiedad 987",
        direccion: "Calle 9, Zaragoza",
        fechaDePublicacion: "2024-06-05",
        cantidadDeFotos: 6,
        metrosCuadrados: 417,
        precioDeVenta: 744607
    },
    {
        nombre: "Propiedad 988",
        direccion: "Calle 94, Murcia",
        fechaDePublicacion: "2024-06-14",
        cantidadDeFotos: 17,
        metrosCuadrados: 252,
        precioDeVenta: 539849
    },
    {
        nombre: "Propiedad 989",
        direccion: "Calle 41, Sevilla",
        fechaDePublicacion: "2024-06-01",
        cantidadDeFotos: 6,
        metrosCuadrados: 137,
        precioDeVenta: 671968
    },
    {
        nombre: "Propiedad 990",
        direccion: "Calle 14, Sevilla",
        fechaDePublicacion: "2024-06-09",
        cantidadDeFotos: 1,
        metrosCuadrados: 480,
        precioDeVenta: 399486
    },
    {
        nombre: "Propiedad 991",
        direccion: "Calle 49, Málaga",
        fechaDePublicacion: "2024-06-05",
        cantidadDeFotos: 6,
        metrosCuadrados: 71,
        precioDeVenta: 559824
    },
    {
        nombre: "Propiedad 992",
        direccion: "Calle 35, Zaragoza",
        fechaDePublicacion: "2024-06-27",
        cantidadDeFotos: 20,
        metrosCuadrados: 414,
        precioDeVenta: 444779
    },
    {
        nombre: "Propiedad 993",
        direccion: "Calle 32, Barcelona",
        fechaDePublicacion: "2024-06-03",
        cantidadDeFotos: 9,
        metrosCuadrados: 228,
        precioDeVenta: 180677
    },
    {
        nombre: "Propiedad 994",
        direccion: "Calle 70, Valencia",
        fechaDePublicacion: "2024-06-02",
        cantidadDeFotos: 15,
        metrosCuadrados: 424,
        precioDeVenta: 275339
    },
    {
        nombre: "Propiedad 995",
        direccion: "Calle 64, Madrid",
        fechaDePublicacion: "2024-06-09",
        cantidadDeFotos: 20,
        metrosCuadrados: 310,
        precioDeVenta: 740256
    },
    {
        nombre: "Propiedad 996",
        direccion: "Calle 51, Las Palmas de Gran Canaria",
        fechaDePublicacion: "2024-06-29",
        cantidadDeFotos: 10,
        metrosCuadrados: 237,
        precioDeVenta: 207434
    },
    {
        nombre: "Propiedad 997",
        direccion: "Calle 64, Bilbao",
        fechaDePublicacion: "2024-06-07",
        cantidadDeFotos: 3,
        metrosCuadrados: 185,
        precioDeVenta: 898557
    },
    {
        nombre: "Propiedad 998",
        direccion: "Calle 81, Sevilla",
        fechaDePublicacion: "2024-06-06",
        cantidadDeFotos: 13,
        metrosCuadrados: 218,
        precioDeVenta: 643799
    },
    {
        nombre: "Propiedad 999",
        direccion: "Calle 67, Murcia",
        fechaDePublicacion: "2024-06-20",
        cantidadDeFotos: 18,
        metrosCuadrados: 184,
        precioDeVenta: 740012
    },
    {
        nombre: "Propiedad 1000",
        direccion: "Calle 34, Valencia",
        fechaDePublicacion: "2024-06-25",
        cantidadDeFotos: 1,
        metrosCuadrados: 165,
        precioDeVenta: 197119
    },
    {
        nombre: "Propiedad 1001",
        direccion: "Calle 37, Valencia",
        fechaDePublicacion: "2024-06-02",
        cantidadDeFotos: 20,
        metrosCuadrados: 262,
        precioDeVenta: 181510
    },
    {
        nombre: "Propiedad 1002",
        direccion: "Calle 28, Madrid",
        fechaDePublicacion: "2024-06-25",
        cantidadDeFotos: 7,
        metrosCuadrados: 392,
        precioDeVenta: 394914
    },
    {
        nombre: "Propiedad 1003",
        direccion: "Calle 93, Barcelona",
        fechaDePublicacion: "2024-06-08",
        cantidadDeFotos: 6,
        metrosCuadrados: 154,
        precioDeVenta: 836692
    },
    {
        nombre: "Propiedad 1004",
        direccion: "Calle 34, Palma",
        fechaDePublicacion: "2024-06-25",
        cantidadDeFotos: 16,
        metrosCuadrados: 81,
        precioDeVenta: 326579
    },
    {
        nombre: "Propiedad 1005",
        direccion: "Calle 91, Las Palmas de Gran Canaria",
        fechaDePublicacion: "2024-06-24",
        cantidadDeFotos: 17,
        metrosCuadrados: 177,
        precioDeVenta: 174686
    },
    {
        nombre: "Propiedad 1006",
        direccion: "Calle 25, Bilbao",
        fechaDePublicacion: "2024-06-03",
        cantidadDeFotos: 6,
        metrosCuadrados: 339,
        precioDeVenta: 484425
    },
    {
        nombre: "Propiedad 1007",
        direccion: "Calle 22, Barcelona",
        fechaDePublicacion: "2024-06-22",
        cantidadDeFotos: 14,
        metrosCuadrados: 191,
        precioDeVenta: 613961
    },
    {
        nombre: "Propiedad 1008",
        direccion: "Calle 50, Las Palmas de Gran Canaria",
        fechaDePublicacion: "2024-06-25",
        cantidadDeFotos: 5,
        metrosCuadrados: 391,
        precioDeVenta: 219236
    },
    {
        nombre: "Propiedad 1009",
        direccion: "Calle 80, Barcelona",
        fechaDePublicacion: "2024-06-07",
        cantidadDeFotos: 10,
        metrosCuadrados: 337,
        precioDeVenta: 546673
    },
    {
        nombre: "Propiedad 1010",
        direccion: "Calle 40, Bilbao",
        fechaDePublicacion: "2024-06-03",
        cantidadDeFotos: 9,
        metrosCuadrados: 249,
        precioDeVenta: 105706
    },
    {
        nombre: "Propiedad 1011",
        direccion: "Calle 30, Bilbao",
        fechaDePublicacion: "2024-06-18",
        cantidadDeFotos: 16,
        metrosCuadrados: 258,
        precioDeVenta: 732888
    },
    {
        nombre: "Propiedad 1012",
        direccion: "Calle 16, Valencia",
        fechaDePublicacion: "2024-06-11",
        cantidadDeFotos: 10,
        metrosCuadrados: 98,
        precioDeVenta: 710903
    },
    {
        nombre: "Propiedad 1013",
        direccion: "Calle 16, Sevilla",
        fechaDePublicacion: "2024-06-09",
        cantidadDeFotos: 15,
        metrosCuadrados: 161,
        precioDeVenta: 426324
    },
    {
        nombre: "Propiedad 1014",
        direccion: "Calle 77, Sevilla",
        fechaDePublicacion: "2024-06-15",
        cantidadDeFotos: 3,
        metrosCuadrados: 239,
        precioDeVenta: 147089
    },
    {
        nombre: "Propiedad 1015",
        direccion: "Calle 97, Sevilla",
        fechaDePublicacion: "2024-06-14",
        cantidadDeFotos: 9,
        metrosCuadrados: 308,
        precioDeVenta: 152978
    },
    {
        nombre: "Propiedad 1016",
        direccion: "Calle 27, Bilbao",
        fechaDePublicacion: "2024-06-18",
        cantidadDeFotos: 6,
        metrosCuadrados: 159,
        precioDeVenta: 180811
    },
    {
        nombre: "Propiedad 1017",
        direccion: "Calle 71, Zaragoza",
        fechaDePublicacion: "2024-06-17",
        cantidadDeFotos: 4,
        metrosCuadrados: 267,
        precioDeVenta: 592937
    },
    {
        nombre: "Propiedad 1018",
        direccion: "Calle 67, Madrid",
        fechaDePublicacion: "2024-06-13",
        cantidadDeFotos: 20,
        metrosCuadrados: 84,
        precioDeVenta: 793682
    },
    {
        nombre: "Propiedad 1019",
        direccion: "Calle 12, Madrid",
        fechaDePublicacion: "2024-06-11",
        cantidadDeFotos: 6,
        metrosCuadrados: 88,
        precioDeVenta: 486582
    },
    {
        nombre: "Propiedad 1020",
        direccion: "Calle 9, Barcelona",
        fechaDePublicacion: "2024-06-03",
        cantidadDeFotos: 8,
        metrosCuadrados: 388,
        precioDeVenta: 819798
    },
    {
        nombre: "Propiedad 1021",
        direccion: "Calle 66, Zaragoza",
        fechaDePublicacion: "2024-06-29",
        cantidadDeFotos: 11,
        metrosCuadrados: 80,
        precioDeVenta: 120283
    },
    {
        nombre: "Propiedad 1022",
        direccion: "Calle 95, Valencia",
        fechaDePublicacion: "2024-06-26",
        cantidadDeFotos: 13,
        metrosCuadrados: 147,
        precioDeVenta: 987969
    },
    {
        nombre: "Propiedad 1023",
        direccion: "Calle 68, Bilbao",
        fechaDePublicacion: "2024-06-04",
        cantidadDeFotos: 20,
        metrosCuadrados: 468,
        precioDeVenta: 606705
    },
    {
        nombre: "Propiedad 1024",
        direccion: "Calle 74, Palma",
        fechaDePublicacion: "2024-06-29",
        cantidadDeFotos: 7,
        metrosCuadrados: 167,
        precioDeVenta: 799590
    },
    {
        nombre: "Propiedad 1025",
        direccion: "Calle 81, Murcia",
        fechaDePublicacion: "2024-06-06",
        cantidadDeFotos: 14,
        metrosCuadrados: 305,
        precioDeVenta: 996907
    },
    {
        nombre: "Propiedad 1026",
        direccion: "Calle 86, Madrid",
        fechaDePublicacion: "2024-06-11",
        cantidadDeFotos: 7,
        metrosCuadrados: 389,
        precioDeVenta: 286060
    },
    {
        nombre: "Propiedad 1027",
        direccion: "Calle 46, Barcelona",
        fechaDePublicacion: "2024-06-16",
        cantidadDeFotos: 18,
        metrosCuadrados: 315,
        precioDeVenta: 621676
    },
    {
        nombre: "Propiedad 1028",
        direccion: "Calle 2, Las Palmas de Gran Canaria",
        fechaDePublicacion: "2024-06-10",
        cantidadDeFotos: 15,
        metrosCuadrados: 283,
        precioDeVenta: 888270
    },
    {
        nombre: "Propiedad 1029",
        direccion: "Calle 33, Zaragoza",
        fechaDePublicacion: "2024-06-04",
        cantidadDeFotos: 10,
        metrosCuadrados: 237,
        precioDeVenta: 871557
    },
    {
        nombre: "Propiedad 1030",
        direccion: "Calle 40, Murcia",
        fechaDePublicacion: "2024-06-23",
        cantidadDeFotos: 16,
        metrosCuadrados: 313,
        precioDeVenta: 654058
    },
    {
        nombre: "Propiedad 1031",
        direccion: "Calle 43, Murcia",
        fechaDePublicacion: "2024-06-16",
        cantidadDeFotos: 4,
        metrosCuadrados: 431,
        precioDeVenta: 624245
    },
    {
        nombre: "Propiedad 1032",
        direccion: "Calle 57, Málaga",
        fechaDePublicacion: "2024-06-26",
        cantidadDeFotos: 17,
        metrosCuadrados: 136,
        precioDeVenta: 443813
    },
    {
        nombre: "Propiedad 1033",
        direccion: "Calle 99, Barcelona",
        fechaDePublicacion: "2024-06-27",
        cantidadDeFotos: 6,
        metrosCuadrados: 411,
        precioDeVenta: 457764
    },
    {
        nombre: "Propiedad 1034",
        direccion: "Calle 53, Sevilla",
        fechaDePublicacion: "2024-06-15",
        cantidadDeFotos: 2,
        metrosCuadrados: 324,
        precioDeVenta: 161844
    },
    {
        nombre: "Propiedad 1035",
        direccion: "Calle 98, Las Palmas de Gran Canaria",
        fechaDePublicacion: "2024-06-03",
        cantidadDeFotos: 15,
        metrosCuadrados: 247,
        precioDeVenta: 886272
    },
    {
        nombre: "Propiedad 1036",
        direccion: "Calle 17, Palma",
        fechaDePublicacion: "2024-06-14",
        cantidadDeFotos: 4,
        metrosCuadrados: 446,
        precioDeVenta: 237506
    },
    {
        nombre: "Propiedad 1037",
        direccion: "Calle 2, Zaragoza",
        fechaDePublicacion: "2024-06-23",
        cantidadDeFotos: 8,
        metrosCuadrados: 267,
        precioDeVenta: 451964
    },
    {
        nombre: "Propiedad 1038",
        direccion: "Calle 59, Madrid",
        fechaDePublicacion: "2024-06-19",
        cantidadDeFotos: 18,
        metrosCuadrados: 415,
        precioDeVenta: 69885
    },
    {
        nombre: "Propiedad 1039",
        direccion: "Calle 58, Bilbao",
        fechaDePublicacion: "2024-06-16",
        cantidadDeFotos: 11,
        metrosCuadrados: 317,
        precioDeVenta: 410997
    },
    {
        nombre: "Propiedad 1040",
        direccion: "Calle 42, Las Palmas de Gran Canaria",
        fechaDePublicacion: "2024-06-04",
        cantidadDeFotos: 18,
        metrosCuadrados: 354,
        precioDeVenta: 566871
    },
    {
        nombre: "Propiedad 1041",
        direccion: "Calle 46, Málaga",
        fechaDePublicacion: "2024-06-10",
        cantidadDeFotos: 11,
        metrosCuadrados: 461,
        precioDeVenta: 294852
    },
    {
        nombre: "Propiedad 1042",
        direccion: "Calle 20, Valencia",
        fechaDePublicacion: "2024-06-11",
        cantidadDeFotos: 4,
        metrosCuadrados: 50,
        precioDeVenta: 544539
    },
    {
        nombre: "Propiedad 1043",
        direccion: "Calle 88, Madrid",
        fechaDePublicacion: "2024-06-18",
        cantidadDeFotos: 3,
        metrosCuadrados: 452,
        precioDeVenta: 957715
    },
    {
        nombre: "Propiedad 1044",
        direccion: "Calle 99, Palma",
        fechaDePublicacion: "2024-06-02",
        cantidadDeFotos: 1,
        metrosCuadrados: 388,
        precioDeVenta: 231467
    },
    {
        nombre: "Propiedad 1045",
        direccion: "Calle 93, Sevilla",
        fechaDePublicacion: "2024-06-20",
        cantidadDeFotos: 11,
        metrosCuadrados: 331,
        precioDeVenta: 707098
    },
    {
        nombre: "Propiedad 1046",
        direccion: "Calle 80, Sevilla",
        fechaDePublicacion: "2024-06-18",
        cantidadDeFotos: 5,
        metrosCuadrados: 150,
        precioDeVenta: 538060
    },
    {
        nombre: "Propiedad 1047",
        direccion: "Calle 92, Bilbao",
        fechaDePublicacion: "2024-06-01",
        cantidadDeFotos: 1,
        metrosCuadrados: 104,
        precioDeVenta: 444261
    },
    {
        nombre: "Propiedad 1048",
        direccion: "Calle 45, Málaga",
        fechaDePublicacion: "2024-06-25",
        cantidadDeFotos: 1,
        metrosCuadrados: 486,
        precioDeVenta: 253183
    },
    {
        nombre: "Propiedad 1049",
        direccion: "Calle 25, Zaragoza",
        fechaDePublicacion: "2024-06-05",
        cantidadDeFotos: 11,
        metrosCuadrados: 414,
        precioDeVenta: 589597
    },
    {
        nombre: "Propiedad 1050",
        direccion: "Calle 47, Bilbao",
        fechaDePublicacion: "2024-06-22",
        cantidadDeFotos: 14,
        metrosCuadrados: 384,
        precioDeVenta: 948275
    },
    {
        nombre: "Propiedad 1051",
        direccion: "Calle 50, Zaragoza",
        fechaDePublicacion: "2024-06-01",
        cantidadDeFotos: 12,
        metrosCuadrados: 308,
        precioDeVenta: 705977
    },
    {
        nombre: "Propiedad 1052",
        direccion: "Calle 44, Murcia",
        fechaDePublicacion: "2024-06-09",
        cantidadDeFotos: 20,
        metrosCuadrados: 358,
        precioDeVenta: 178912
    },
    {
        nombre: "Propiedad 1053",
        direccion: "Calle 13, Murcia",
        fechaDePublicacion: "2024-06-09",
        cantidadDeFotos: 6,
        metrosCuadrados: 448,
        precioDeVenta: 594513
    },
    {
        nombre: "Propiedad 1054",
        direccion: "Calle 92, Zaragoza",
        fechaDePublicacion: "2024-06-29",
        cantidadDeFotos: 2,
        metrosCuadrados: 259,
        precioDeVenta: 756632
    },
    {
        nombre: "Propiedad 1055",
        direccion: "Calle 41, Sevilla",
        fechaDePublicacion: "2024-06-15",
        cantidadDeFotos: 15,
        metrosCuadrados: 444,
        precioDeVenta: 782868
    },
    {
        nombre: "Propiedad 1056",
        direccion: "Calle 8, Bilbao",
        fechaDePublicacion: "2024-06-29",
        cantidadDeFotos: 5,
        metrosCuadrados: 281,
        precioDeVenta: 707088
    },
    {
        nombre: "Propiedad 1057",
        direccion: "Calle 47, Barcelona",
        fechaDePublicacion: "2024-06-13",
        cantidadDeFotos: 18,
        metrosCuadrados: 133,
        precioDeVenta: 504510
    },
    {
        nombre: "Propiedad 1058",
        direccion: "Calle 79, Palma",
        fechaDePublicacion: "2024-06-28",
        cantidadDeFotos: 5,
        metrosCuadrados: 298,
        precioDeVenta: 407870
    },
    {
        nombre: "Propiedad 1059",
        direccion: "Calle 28, Sevilla",
        fechaDePublicacion: "2024-06-02",
        cantidadDeFotos: 6,
        metrosCuadrados: 75,
        precioDeVenta: 163614
    },
    {
        nombre: "Propiedad 1060",
        direccion: "Calle 55, Málaga",
        fechaDePublicacion: "2024-06-09",
        cantidadDeFotos: 4,
        metrosCuadrados: 496,
        precioDeVenta: 152733
    },
    {
        nombre: "Propiedad 1061",
        direccion: "Calle 48, Zaragoza",
        fechaDePublicacion: "2024-06-12",
        cantidadDeFotos: 14,
        metrosCuadrados: 168,
        precioDeVenta: 970619
    },
    {
        nombre: "Propiedad 1062",
        direccion: "Calle 90, Bilbao",
        fechaDePublicacion: "2024-06-28",
        cantidadDeFotos: 15,
        metrosCuadrados: 329,
        precioDeVenta: 551174
    },
    {
        nombre: "Propiedad 1063",
        direccion: "Calle 97, Palma",
        fechaDePublicacion: "2024-06-24",
        cantidadDeFotos: 15,
        metrosCuadrados: 320,
        precioDeVenta: 450149
    },
    {
        nombre: "Propiedad 1064",
        direccion: "Calle 18, Valencia",
        fechaDePublicacion: "2024-06-17",
        cantidadDeFotos: 7,
        metrosCuadrados: 297,
        precioDeVenta: 547004
    },
    {
        nombre: "Propiedad 1065",
        direccion: "Calle 23, Sevilla",
        fechaDePublicacion: "2024-06-25",
        cantidadDeFotos: 15,
        metrosCuadrados: 457,
        precioDeVenta: 723314
    },
    {
        nombre: "Propiedad 1066",
        direccion: "Calle 7, Bilbao",
        fechaDePublicacion: "2024-06-03",
        cantidadDeFotos: 1,
        metrosCuadrados: 268,
        precioDeVenta: 804916
    },
    {
        nombre: "Propiedad 1067",
        direccion: "Calle 67, Valencia",
        fechaDePublicacion: "2024-06-21",
        cantidadDeFotos: 6,
        metrosCuadrados: 269,
        precioDeVenta: 325014
    },
    {
        nombre: "Propiedad 1068",
        direccion: "Calle 78, Zaragoza",
        fechaDePublicacion: "2024-06-03",
        cantidadDeFotos: 9,
        metrosCuadrados: 69,
        precioDeVenta: 886337
    },
    {
        nombre: "Propiedad 1069",
        direccion: "Calle 50, Las Palmas de Gran Canaria",
        fechaDePublicacion: "2024-06-23",
        cantidadDeFotos: 5,
        metrosCuadrados: 322,
        precioDeVenta: 835988
    },
    {
        nombre: "Propiedad 1070",
        direccion: "Calle 11, Barcelona",
        fechaDePublicacion: "2024-06-11",
        cantidadDeFotos: 12,
        metrosCuadrados: 328,
        precioDeVenta: 198348
    },
    {
        nombre: "Propiedad 1071",
        direccion: "Calle 64, Las Palmas de Gran Canaria",
        fechaDePublicacion: "2024-06-04",
        cantidadDeFotos: 18,
        metrosCuadrados: 401,
        precioDeVenta: 887595
    },
    {
        nombre: "Propiedad 1072",
        direccion: "Calle 2, Murcia",
        fechaDePublicacion: "2024-06-23",
        cantidadDeFotos: 16,
        metrosCuadrados: 340,
        precioDeVenta: 956105
    },
    {
        nombre: "Propiedad 1073",
        direccion: "Calle 95, Bilbao",
        fechaDePublicacion: "2024-06-22",
        cantidadDeFotos: 19,
        metrosCuadrados: 222,
        precioDeVenta: 792837
    },
    {
        nombre: "Propiedad 1074",
        direccion: "Calle 96, Sevilla",
        fechaDePublicacion: "2024-06-07",
        cantidadDeFotos: 10,
        metrosCuadrados: 197,
        precioDeVenta: 812044
    },
    {
        nombre: "Propiedad 1075",
        direccion: "Calle 29, Palma",
        fechaDePublicacion: "2024-06-29",
        cantidadDeFotos: 13,
        metrosCuadrados: 59,
        precioDeVenta: 905312
    },
    {
        nombre: "Propiedad 1076",
        direccion: "Calle 41, Barcelona",
        fechaDePublicacion: "2024-06-09",
        cantidadDeFotos: 20,
        metrosCuadrados: 496,
        precioDeVenta: 621063
    },
    {
        nombre: "Propiedad 1077",
        direccion: "Calle 38, Valencia",
        fechaDePublicacion: "2024-06-07",
        cantidadDeFotos: 3,
        metrosCuadrados: 381,
        precioDeVenta: 240072
    },
    {
        nombre: "Propiedad 1078",
        direccion: "Calle 4, Bilbao",
        fechaDePublicacion: "2024-06-20",
        cantidadDeFotos: 17,
        metrosCuadrados: 391,
        precioDeVenta: 427771
    },
    {
        nombre: "Propiedad 1079",
        direccion: "Calle 35, Las Palmas de Gran Canaria",
        fechaDePublicacion: "2024-06-16",
        cantidadDeFotos: 20,
        metrosCuadrados: 490,
        precioDeVenta: 145527
    },
    {
        nombre: "Propiedad 1080",
        direccion: "Calle 86, Barcelona",
        fechaDePublicacion: "2024-06-17",
        cantidadDeFotos: 3,
        metrosCuadrados: 302,
        precioDeVenta: 767467
    },
    {
        nombre: "Propiedad 1081",
        direccion: "Calle 37, Murcia",
        fechaDePublicacion: "2024-06-06",
        cantidadDeFotos: 12,
        metrosCuadrados: 493,
        precioDeVenta: 714206
    },
    {
        nombre: "Propiedad 1082",
        direccion: "Calle 77, Palma",
        fechaDePublicacion: "2024-06-26",
        cantidadDeFotos: 14,
        metrosCuadrados: 323,
        precioDeVenta: 835122
    },
    {
        nombre: "Propiedad 1083",
        direccion: "Calle 83, Las Palmas de Gran Canaria",
        fechaDePublicacion: "2024-06-20",
        cantidadDeFotos: 14,
        metrosCuadrados: 257,
        precioDeVenta: 336660
    },
    {
        nombre: "Propiedad 1084",
        direccion: "Calle 77, Sevilla",
        fechaDePublicacion: "2024-06-03",
        cantidadDeFotos: 14,
        metrosCuadrados: 448,
        precioDeVenta: 844030
    },
    {
        nombre: "Propiedad 1085",
        direccion: "Calle 19, Barcelona",
        fechaDePublicacion: "2024-06-18",
        cantidadDeFotos: 20,
        metrosCuadrados: 365,
        precioDeVenta: 671682
    },
    {
        nombre: "Propiedad 1086",
        direccion: "Calle 4, Valencia",
        fechaDePublicacion: "2024-06-14",
        cantidadDeFotos: 16,
        metrosCuadrados: 261,
        precioDeVenta: 734554
    },
    {
        nombre: "Propiedad 1087",
        direccion: "Calle 36, Murcia",
        fechaDePublicacion: "2024-06-10",
        cantidadDeFotos: 11,
        metrosCuadrados: 300,
        precioDeVenta: 911928
    },
    {
        nombre: "Propiedad 1088",
        direccion: "Calle 19, Málaga",
        fechaDePublicacion: "2024-06-10",
        cantidadDeFotos: 5,
        metrosCuadrados: 162,
        precioDeVenta: 652117
    },
    {
        nombre: "Propiedad 1089",
        direccion: "Calle 44, Barcelona",
        fechaDePublicacion: "2024-06-17",
        cantidadDeFotos: 7,
        metrosCuadrados: 70,
        precioDeVenta: 51450
    },
    {
        nombre: "Propiedad 1090",
        direccion: "Calle 32, Murcia",
        fechaDePublicacion: "2024-06-24",
        cantidadDeFotos: 18,
        metrosCuadrados: 97,
        precioDeVenta: 128087
    },
    {
        nombre: "Propiedad 1091",
        direccion: "Calle 5, Sevilla",
        fechaDePublicacion: "2024-06-20",
        cantidadDeFotos: 5,
        metrosCuadrados: 88,
        precioDeVenta: 694001
    },
    {
        nombre: "Propiedad 1092",
        direccion: "Calle 11, Palma",
        fechaDePublicacion: "2024-06-28",
        cantidadDeFotos: 11,
        metrosCuadrados: 228,
        precioDeVenta: 172351
    },
    {
        nombre: "Propiedad 1093",
        direccion: "Calle 52, Málaga",
        fechaDePublicacion: "2024-06-16",
        cantidadDeFotos: 5,
        metrosCuadrados: 418,
        precioDeVenta: 982762
    },
    {
        nombre: "Propiedad 1094",
        direccion: "Calle 29, Valencia",
        fechaDePublicacion: "2024-06-15",
        cantidadDeFotos: 8,
        metrosCuadrados: 225,
        precioDeVenta: 776255
    },
    {
        nombre: "Propiedad 1095",
        direccion: "Calle 22, Bilbao",
        fechaDePublicacion: "2024-06-24",
        cantidadDeFotos: 4,
        metrosCuadrados: 382,
        precioDeVenta: 778969
    },
    {
        nombre: "Propiedad 1096",
        direccion: "Calle 66, Barcelona",
        fechaDePublicacion: "2024-06-26",
        cantidadDeFotos: 6,
        metrosCuadrados: 195,
        precioDeVenta: 847109
    },
    {
        nombre: "Propiedad 1097",
        direccion: "Calle 79, Bilbao",
        fechaDePublicacion: "2024-06-12",
        cantidadDeFotos: 20,
        metrosCuadrados: 281,
        precioDeVenta: 982457
    },
    {
        nombre: "Propiedad 1098",
        direccion: "Calle 26, Barcelona",
        fechaDePublicacion: "2024-06-06",
        cantidadDeFotos: 6,
        metrosCuadrados: 296,
        precioDeVenta: 988988
    },
    {
        nombre: "Propiedad 1099",
        direccion: "Calle 5, Bilbao",
        fechaDePublicacion: "2024-06-18",
        cantidadDeFotos: 20,
        metrosCuadrados: 438,
        precioDeVenta: 61175
    },
    {
        nombre: "Propiedad 1100",
        direccion: "Calle 19, Las Palmas de Gran Canaria",
        fechaDePublicacion: "2024-06-29",
        cantidadDeFotos: 3,
        metrosCuadrados: 305,
        precioDeVenta: 601469
    },
    {
        nombre: "Propiedad 1101",
        direccion: "Calle 67, Las Palmas de Gran Canaria",
        fechaDePublicacion: "2024-06-01",
        cantidadDeFotos: 5,
        metrosCuadrados: 81,
        precioDeVenta: 352981
    },
    {
        nombre: "Propiedad 1102",
        direccion: "Calle 39, Las Palmas de Gran Canaria",
        fechaDePublicacion: "2024-06-14",
        cantidadDeFotos: 3,
        metrosCuadrados: 109,
        precioDeVenta: 651314
    },
    {
        nombre: "Propiedad 1103",
        direccion: "Calle 99, Valencia",
        fechaDePublicacion: "2024-06-19",
        cantidadDeFotos: 20,
        metrosCuadrados: 363,
        precioDeVenta: 188322
    },
    {
        nombre: "Propiedad 1104",
        direccion: "Calle 39, Murcia",
        fechaDePublicacion: "2024-06-06",
        cantidadDeFotos: 15,
        metrosCuadrados: 452,
        precioDeVenta: 788997
    },
    {
        nombre: "Propiedad 1105",
        direccion: "Calle 36, Málaga",
        fechaDePublicacion: "2024-06-13",
        cantidadDeFotos: 10,
        metrosCuadrados: 470,
        precioDeVenta: 68501
    },
    {
        nombre: "Propiedad 1106",
        direccion: "Calle 91, Bilbao",
        fechaDePublicacion: "2024-06-01",
        cantidadDeFotos: 19,
        metrosCuadrados: 249,
        precioDeVenta: 99569
    },
    {
        nombre: "Propiedad 1107",
        direccion: "Calle 56, Barcelona",
        fechaDePublicacion: "2024-06-03",
        cantidadDeFotos: 20,
        metrosCuadrados: 457,
        precioDeVenta: 618164
    },
    {
        nombre: "Propiedad 1108",
        direccion: "Calle 23, Madrid",
        fechaDePublicacion: "2024-06-14",
        cantidadDeFotos: 11,
        metrosCuadrados: 278,
        precioDeVenta: 430646
    },
    {
        nombre: "Propiedad 1109",
        direccion: "Calle 25, Málaga",
        fechaDePublicacion: "2024-06-17",
        cantidadDeFotos: 17,
        metrosCuadrados: 181,
        precioDeVenta: 459268
    },
    {
        nombre: "Propiedad 1110",
        direccion: "Calle 38, Sevilla",
        fechaDePublicacion: "2024-06-01",
        cantidadDeFotos: 6,
        metrosCuadrados: 183,
        precioDeVenta: 204563
    },
    {
        nombre: "Propiedad 1111",
        direccion: "Calle 90, Valencia",
        fechaDePublicacion: "2024-06-19",
        cantidadDeFotos: 17,
        metrosCuadrados: 295,
        precioDeVenta: 335534
    },
    {
        nombre: "Propiedad 1112",
        direccion: "Calle 66, Palma",
        fechaDePublicacion: "2024-06-29",
        cantidadDeFotos: 6,
        metrosCuadrados: 137,
        precioDeVenta: 904342
    },
    {
        nombre: "Propiedad 1113",
        direccion: "Calle 17, Zaragoza",
        fechaDePublicacion: "2024-06-20",
        cantidadDeFotos: 17,
        metrosCuadrados: 481,
        precioDeVenta: 780483
    },
    {
        nombre: "Propiedad 1114",
        direccion: "Calle 64, Sevilla",
        fechaDePublicacion: "2024-06-14",
        cantidadDeFotos: 10,
        metrosCuadrados: 302,
        precioDeVenta: 555427
    },
    {
        nombre: "Propiedad 1115",
        direccion: "Calle 3, Sevilla",
        fechaDePublicacion: "2024-06-03",
        cantidadDeFotos: 5,
        metrosCuadrados: 410,
        precioDeVenta: 166456
    },
    {
        nombre: "Propiedad 1116",
        direccion: "Calle 75, Zaragoza",
        fechaDePublicacion: "2024-06-23",
        cantidadDeFotos: 17,
        metrosCuadrados: 428,
        precioDeVenta: 580764
    },
    {
        nombre: "Propiedad 1117",
        direccion: "Calle 96, Murcia",
        fechaDePublicacion: "2024-06-03",
        cantidadDeFotos: 1,
        metrosCuadrados: 226,
        precioDeVenta: 157561
    },
    {
        nombre: "Propiedad 1118",
        direccion: "Calle 82, Sevilla",
        fechaDePublicacion: "2024-06-19",
        cantidadDeFotos: 11,
        metrosCuadrados: 350,
        precioDeVenta: 182116
    },
    {
        nombre: "Propiedad 1119",
        direccion: "Calle 95, Zaragoza",
        fechaDePublicacion: "2024-06-21",
        cantidadDeFotos: 15,
        metrosCuadrados: 98,
        precioDeVenta: 289377
    },
    {
        nombre: "Propiedad 1120",
        direccion: "Calle 12, Málaga",
        fechaDePublicacion: "2024-06-07",
        cantidadDeFotos: 3,
        metrosCuadrados: 173,
        precioDeVenta: 817453
    },
    {
        nombre: "Propiedad 1121",
        direccion: "Calle 5, Palma",
        fechaDePublicacion: "2024-06-02",
        cantidadDeFotos: 8,
        metrosCuadrados: 207,
        precioDeVenta: 814262
    },
    {
        nombre: "Propiedad 1122",
        direccion: "Calle 62, Zaragoza",
        fechaDePublicacion: "2024-06-19",
        cantidadDeFotos: 8,
        metrosCuadrados: 262,
        precioDeVenta: 781248
    },
    {
        nombre: "Propiedad 1123",
        direccion: "Calle 80, Zaragoza",
        fechaDePublicacion: "2024-06-27",
        cantidadDeFotos: 2,
        metrosCuadrados: 243,
        precioDeVenta: 895082
    },
    {
        nombre: "Propiedad 1124",
        direccion: "Calle 8, Madrid",
        fechaDePublicacion: "2024-06-14",
        cantidadDeFotos: 7,
        metrosCuadrados: 313,
        precioDeVenta: 152762
    },
    {
        nombre: "Propiedad 1125",
        direccion: "Calle 57, Sevilla",
        fechaDePublicacion: "2024-06-15",
        cantidadDeFotos: 9,
        metrosCuadrados: 415,
        precioDeVenta: 216898
    },
    {
        nombre: "Propiedad 1126",
        direccion: "Calle 59, Barcelona",
        fechaDePublicacion: "2024-06-25",
        cantidadDeFotos: 8,
        metrosCuadrados: 155,
        precioDeVenta: 965215
    },
    {
        nombre: "Propiedad 1127",
        direccion: "Calle 47, Sevilla",
        fechaDePublicacion: "2024-06-07",
        cantidadDeFotos: 15,
        metrosCuadrados: 330,
        precioDeVenta: 467636
    },
    {
        nombre: "Propiedad 1128",
        direccion: "Calle 59, Bilbao",
        fechaDePublicacion: "2024-06-07",
        cantidadDeFotos: 8,
        metrosCuadrados: 160,
        precioDeVenta: 955055
    },
    {
        nombre: "Propiedad 1129",
        direccion: "Calle 2, Zaragoza",
        fechaDePublicacion: "2024-06-08",
        cantidadDeFotos: 2,
        metrosCuadrados: 321,
        precioDeVenta: 921287
    },
    {
        nombre: "Propiedad 1130",
        direccion: "Calle 40, Murcia",
        fechaDePublicacion: "2024-06-16",
        cantidadDeFotos: 1,
        metrosCuadrados: 100,
        precioDeVenta: 441665
    },
    {
        nombre: "Propiedad 1131",
        direccion: "Calle 17, Valencia",
        fechaDePublicacion: "2024-06-17",
        cantidadDeFotos: 18,
        metrosCuadrados: 51,
        precioDeVenta: 394038
    },
    {
        nombre: "Propiedad 1132",
        direccion: "Calle 97, Palma",
        fechaDePublicacion: "2024-06-01",
        cantidadDeFotos: 9,
        metrosCuadrados: 436,
        precioDeVenta: 663447
    },
    {
        nombre: "Propiedad 1133",
        direccion: "Calle 33, Las Palmas de Gran Canaria",
        fechaDePublicacion: "2024-06-15",
        cantidadDeFotos: 14,
        metrosCuadrados: 51,
        precioDeVenta: 735008
    },
    {
        nombre: "Propiedad 1134",
        direccion: "Calle 18, Barcelona",
        fechaDePublicacion: "2024-06-28",
        cantidadDeFotos: 20,
        metrosCuadrados: 343,
        precioDeVenta: 861617
    },
    {
        nombre: "Propiedad 1135",
        direccion: "Calle 19, Sevilla",
        fechaDePublicacion: "2024-06-21",
        cantidadDeFotos: 11,
        metrosCuadrados: 327,
        precioDeVenta: 998487
    },
    {
        nombre: "Propiedad 1136",
        direccion: "Calle 97, Madrid",
        fechaDePublicacion: "2024-06-01",
        cantidadDeFotos: 17,
        metrosCuadrados: 199,
        precioDeVenta: 666655
    },
    {
        nombre: "Propiedad 1137",
        direccion: "Calle 42, Palma",
        fechaDePublicacion: "2024-06-05",
        cantidadDeFotos: 13,
        metrosCuadrados: 236,
        precioDeVenta: 388605
    },
    {
        nombre: "Propiedad 1138",
        direccion: "Calle 98, Bilbao",
        fechaDePublicacion: "2024-06-12",
        cantidadDeFotos: 12,
        metrosCuadrados: 270,
        precioDeVenta: 467729
    },
    {
        nombre: "Propiedad 1139",
        direccion: "Calle 55, Sevilla",
        fechaDePublicacion: "2024-06-15",
        cantidadDeFotos: 5,
        metrosCuadrados: 55,
        precioDeVenta: 831102
    },
    {
        nombre: "Propiedad 1140",
        direccion: "Calle 23, Murcia",
        fechaDePublicacion: "2024-06-28",
        cantidadDeFotos: 17,
        metrosCuadrados: 314,
        precioDeVenta: 871309
    },
    {
        nombre: "Propiedad 1141",
        direccion: "Calle 66, Bilbao",
        fechaDePublicacion: "2024-06-27",
        cantidadDeFotos: 18,
        metrosCuadrados: 334,
        precioDeVenta: 911997
    },
    {
        nombre: "Propiedad 1142",
        direccion: "Calle 37, Málaga",
        fechaDePublicacion: "2024-06-16",
        cantidadDeFotos: 20,
        metrosCuadrados: 304,
        precioDeVenta: 700000
    },
    {
        nombre: "Propiedad 1143",
        direccion: "Calle 43, Murcia",
        fechaDePublicacion: "2024-06-08",
        cantidadDeFotos: 9,
        metrosCuadrados: 351,
        precioDeVenta: 55517
    },
    {
        nombre: "Propiedad 1144",
        direccion: "Calle 19, Barcelona",
        fechaDePublicacion: "2024-06-18",
        cantidadDeFotos: 5,
        metrosCuadrados: 199,
        precioDeVenta: 944962
    },
    {
        nombre: "Propiedad 1145",
        direccion: "Calle 64, Palma",
        fechaDePublicacion: "2024-06-25",
        cantidadDeFotos: 19,
        metrosCuadrados: 442,
        precioDeVenta: 932476
    },
    {
        nombre: "Propiedad 1146",
        direccion: "Calle 19, Valencia",
        fechaDePublicacion: "2024-06-16",
        cantidadDeFotos: 10,
        metrosCuadrados: 263,
        precioDeVenta: 976917
    },
    {
        nombre: "Propiedad 1147",
        direccion: "Calle 13, Bilbao",
        fechaDePublicacion: "2024-06-14",
        cantidadDeFotos: 2,
        metrosCuadrados: 200,
        precioDeVenta: 832109
    },
    {
        nombre: "Propiedad 1148",
        direccion: "Calle 94, Las Palmas de Gran Canaria",
        fechaDePublicacion: "2024-06-16",
        cantidadDeFotos: 18,
        metrosCuadrados: 213,
        precioDeVenta: 476984
    },
    {
        nombre: "Propiedad 1149",
        direccion: "Calle 8, Barcelona",
        fechaDePublicacion: "2024-06-16",
        cantidadDeFotos: 17,
        metrosCuadrados: 146,
        precioDeVenta: 754429
    },
    {
        nombre: "Propiedad 1150",
        direccion: "Calle 22, Sevilla",
        fechaDePublicacion: "2024-06-25",
        cantidadDeFotos: 13,
        metrosCuadrados: 253,
        precioDeVenta: 232007
    },
    {
        nombre: "Propiedad 1151",
        direccion: "Calle 12, Las Palmas de Gran Canaria",
        fechaDePublicacion: "2024-06-03",
        cantidadDeFotos: 17,
        metrosCuadrados: 73,
        precioDeVenta: 385002
    },
    {
        nombre: "Propiedad 1152",
        direccion: "Calle 56, Murcia",
        fechaDePublicacion: "2024-06-25",
        cantidadDeFotos: 19,
        metrosCuadrados: 353,
        precioDeVenta: 73865
    },
    {
        nombre: "Propiedad 1153",
        direccion: "Calle 98, Murcia",
        fechaDePublicacion: "2024-06-15",
        cantidadDeFotos: 9,
        metrosCuadrados: 117,
        precioDeVenta: 354635
    },
    {
        nombre: "Propiedad 1154",
        direccion: "Calle 7, Las Palmas de Gran Canaria",
        fechaDePublicacion: "2024-06-20",
        cantidadDeFotos: 17,
        metrosCuadrados: 482,
        precioDeVenta: 840278
    },
    {
        nombre: "Propiedad 1155",
        direccion: "Calle 61, Málaga",
        fechaDePublicacion: "2024-06-04",
        cantidadDeFotos: 9,
        metrosCuadrados: 245,
        precioDeVenta: 250084
    },
    {
        nombre: "Propiedad 1156",
        direccion: "Calle 12, Valencia",
        fechaDePublicacion: "2024-06-04",
        cantidadDeFotos: 17,
        metrosCuadrados: 163,
        precioDeVenta: 364720
    },
    {
        nombre: "Propiedad 1157",
        direccion: "Calle 10, Las Palmas de Gran Canaria",
        fechaDePublicacion: "2024-06-29",
        cantidadDeFotos: 7,
        metrosCuadrados: 444,
        precioDeVenta: 244069
    },
    {
        nombre: "Propiedad 1158",
        direccion: "Calle 8, Las Palmas de Gran Canaria",
        fechaDePublicacion: "2024-06-07",
        cantidadDeFotos: 11,
        metrosCuadrados: 443,
        precioDeVenta: 845808
    },
    {
        nombre: "Propiedad 1159",
        direccion: "Calle 39, Palma",
        fechaDePublicacion: "2024-06-22",
        cantidadDeFotos: 2,
        metrosCuadrados: 372,
        precioDeVenta: 665458
    },
    {
        nombre: "Propiedad 1160",
        direccion: "Calle 29, Barcelona",
        fechaDePublicacion: "2024-06-12",
        cantidadDeFotos: 5,
        metrosCuadrados: 176,
        precioDeVenta: 619039
    },
    {
        nombre: "Propiedad 1161",
        direccion: "Calle 66, Murcia",
        fechaDePublicacion: "2024-06-25",
        cantidadDeFotos: 18,
        metrosCuadrados: 117,
        precioDeVenta: 858145
    },
    {
        nombre: "Propiedad 1162",
        direccion: "Calle 72, Zaragoza",
        fechaDePublicacion: "2024-06-25",
        cantidadDeFotos: 16,
        metrosCuadrados: 410,
        precioDeVenta: 377647
    },
    {
        nombre: "Propiedad 1163",
        direccion: "Calle 39, Palma",
        fechaDePublicacion: "2024-06-18",
        cantidadDeFotos: 11,
        metrosCuadrados: 322,
        precioDeVenta: 310962
    },
    {
        nombre: "Propiedad 1164",
        direccion: "Calle 81, Valencia",
        fechaDePublicacion: "2024-06-02",
        cantidadDeFotos: 18,
        metrosCuadrados: 409,
        precioDeVenta: 510309
    },
    {
        nombre: "Propiedad 1165",
        direccion: "Calle 17, Barcelona",
        fechaDePublicacion: "2024-06-26",
        cantidadDeFotos: 5,
        metrosCuadrados: 159,
        precioDeVenta: 658446
    },
    {
        nombre: "Propiedad 1166",
        direccion: "Calle 2, Murcia",
        fechaDePublicacion: "2024-06-03",
        cantidadDeFotos: 8,
        metrosCuadrados: 248,
        precioDeVenta: 308276
    },
    {
        nombre: "Propiedad 1167",
        direccion: "Calle 15, Zaragoza",
        fechaDePublicacion: "2024-06-06",
        cantidadDeFotos: 13,
        metrosCuadrados: 263,
        precioDeVenta: 686345
    },
    {
        nombre: "Propiedad 1168",
        direccion: "Calle 36, Palma",
        fechaDePublicacion: "2024-06-12",
        cantidadDeFotos: 5,
        metrosCuadrados: 362,
        precioDeVenta: 169209
    },
    {
        nombre: "Propiedad 1169",
        direccion: "Calle 40, Málaga",
        fechaDePublicacion: "2024-06-24",
        cantidadDeFotos: 2,
        metrosCuadrados: 433,
        precioDeVenta: 728775
    },
    {
        nombre: "Propiedad 1170",
        direccion: "Calle 4, Barcelona",
        fechaDePublicacion: "2024-06-20",
        cantidadDeFotos: 6,
        metrosCuadrados: 92,
        precioDeVenta: 659600
    },
    {
        nombre: "Propiedad 1171",
        direccion: "Calle 35, Barcelona",
        fechaDePublicacion: "2024-06-18",
        cantidadDeFotos: 3,
        metrosCuadrados: 51,
        precioDeVenta: 913857
    },
    {
        nombre: "Propiedad 1172",
        direccion: "Calle 48, Murcia",
        fechaDePublicacion: "2024-06-26",
        cantidadDeFotos: 14,
        metrosCuadrados: 334,
        precioDeVenta: 790146
    },
    {
        nombre: "Propiedad 1173",
        direccion: "Calle 63, Palma",
        fechaDePublicacion: "2024-06-14",
        cantidadDeFotos: 18,
        metrosCuadrados: 258,
        precioDeVenta: 166978
    },
    {
        nombre: "Propiedad 1174",
        direccion: "Calle 61, Málaga",
        fechaDePublicacion: "2024-06-04",
        cantidadDeFotos: 14,
        metrosCuadrados: 184,
        precioDeVenta: 396870
    },
    {
        nombre: "Propiedad 1175",
        direccion: "Calle 43, Murcia",
        fechaDePublicacion: "2024-06-08",
        cantidadDeFotos: 19,
        metrosCuadrados: 144,
        precioDeVenta: 308846
    },
    {
        nombre: "Propiedad 1176",
        direccion: "Calle 20, Barcelona",
        fechaDePublicacion: "2024-06-13",
        cantidadDeFotos: 18,
        metrosCuadrados: 188,
        precioDeVenta: 90823
    },
    {
        nombre: "Propiedad 1177",
        direccion: "Calle 34, Valencia",
        fechaDePublicacion: "2024-06-28",
        cantidadDeFotos: 3,
        metrosCuadrados: 282,
        precioDeVenta: 582948
    },
    {
        nombre: "Propiedad 1178",
        direccion: "Calle 4, Murcia",
        fechaDePublicacion: "2024-06-12",
        cantidadDeFotos: 14,
        metrosCuadrados: 489,
        precioDeVenta: 194460
    },
    {
        nombre: "Propiedad 1179",
        direccion: "Calle 78, Las Palmas de Gran Canaria",
        fechaDePublicacion: "2024-06-28",
        cantidadDeFotos: 20,
        metrosCuadrados: 92,
        precioDeVenta: 862768
    },
    {
        nombre: "Propiedad 1180",
        direccion: "Calle 27, Zaragoza",
        fechaDePublicacion: "2024-06-03",
        cantidadDeFotos: 18,
        metrosCuadrados: 138,
        precioDeVenta: 942577
    },
    {
        nombre: "Propiedad 1181",
        direccion: "Calle 93, Bilbao",
        fechaDePublicacion: "2024-06-05",
        cantidadDeFotos: 13,
        metrosCuadrados: 216,
        precioDeVenta: 285698
    },
    {
        nombre: "Propiedad 1182",
        direccion: "Calle 7, Sevilla",
        fechaDePublicacion: "2024-06-20",
        cantidadDeFotos: 1,
        metrosCuadrados: 364,
        precioDeVenta: 734761
    },
    {
        nombre: "Propiedad 1183",
        direccion: "Calle 18, Barcelona",
        fechaDePublicacion: "2024-06-26",
        cantidadDeFotos: 5,
        metrosCuadrados: 202,
        precioDeVenta: 334054
    },
    {
        nombre: "Propiedad 1184",
        direccion: "Calle 44, Bilbao",
        fechaDePublicacion: "2024-06-21",
        cantidadDeFotos: 12,
        metrosCuadrados: 378,
        precioDeVenta: 171773
    },
    {
        nombre: "Propiedad 1185",
        direccion: "Calle 74, Murcia",
        fechaDePublicacion: "2024-06-19",
        cantidadDeFotos: 3,
        metrosCuadrados: 493,
        precioDeVenta: 902574
    },
    {
        nombre: "Propiedad 1186",
        direccion: "Calle 76, Bilbao",
        fechaDePublicacion: "2024-06-22",
        cantidadDeFotos: 13,
        metrosCuadrados: 97,
        precioDeVenta: 717069
    },
    {
        nombre: "Propiedad 1187",
        direccion: "Calle 58, Palma",
        fechaDePublicacion: "2024-06-08",
        cantidadDeFotos: 10,
        metrosCuadrados: 108,
        precioDeVenta: 373740
    },
    {
        nombre: "Propiedad 1188",
        direccion: "Calle 73, Sevilla",
        fechaDePublicacion: "2024-06-27",
        cantidadDeFotos: 2,
        metrosCuadrados: 148,
        precioDeVenta: 310927
    },
    {
        nombre: "Propiedad 1189",
        direccion: "Calle 26, Málaga",
        fechaDePublicacion: "2024-06-18",
        cantidadDeFotos: 5,
        metrosCuadrados: 240,
        precioDeVenta: 819634
    },
    {
        nombre: "Propiedad 1190",
        direccion: "Calle 46, Valencia",
        fechaDePublicacion: "2024-06-21",
        cantidadDeFotos: 14,
        metrosCuadrados: 317,
        precioDeVenta: 824734
    },
    {
        nombre: "Propiedad 1191",
        direccion: "Calle 76, Bilbao",
        fechaDePublicacion: "2024-06-24",
        cantidadDeFotos: 16,
        metrosCuadrados: 163,
        precioDeVenta: 382923
    },
    {
        nombre: "Propiedad 1192",
        direccion: "Calle 72, Palma",
        fechaDePublicacion: "2024-06-28",
        cantidadDeFotos: 14,
        metrosCuadrados: 381,
        precioDeVenta: 859004
    },
    {
        nombre: "Propiedad 1193",
        direccion: "Calle 94, Barcelona",
        fechaDePublicacion: "2024-06-25",
        cantidadDeFotos: 8,
        metrosCuadrados: 225,
        precioDeVenta: 775015
    },
    {
        nombre: "Propiedad 1194",
        direccion: "Calle 51, Las Palmas de Gran Canaria",
        fechaDePublicacion: "2024-06-06",
        cantidadDeFotos: 9,
        metrosCuadrados: 496,
        precioDeVenta: 286780
    },
    {
        nombre: "Propiedad 1195",
        direccion: "Calle 83, Las Palmas de Gran Canaria",
        fechaDePublicacion: "2024-06-07",
        cantidadDeFotos: 12,
        metrosCuadrados: 256,
        precioDeVenta: 283687
    },
    {
        nombre: "Propiedad 1196",
        direccion: "Calle 3, Sevilla",
        fechaDePublicacion: "2024-06-09",
        cantidadDeFotos: 3,
        metrosCuadrados: 446,
        precioDeVenta: 727452
    },
    {
        nombre: "Propiedad 1197",
        direccion: "Calle 80, Madrid",
        fechaDePublicacion: "2024-06-07",
        cantidadDeFotos: 20,
        metrosCuadrados: 161,
        precioDeVenta: 717523
    },
    {
        nombre: "Propiedad 1198",
        direccion: "Calle 55, Palma",
        fechaDePublicacion: "2024-06-10",
        cantidadDeFotos: 14,
        metrosCuadrados: 189,
        precioDeVenta: 347098
    },
    {
        nombre: "Propiedad 1199",
        direccion: "Calle 11, Zaragoza",
        fechaDePublicacion: "2024-06-07",
        cantidadDeFotos: 12,
        metrosCuadrados: 430,
        precioDeVenta: 346818
    },
    {
        nombre: "Propiedad 1200",
        direccion: "Calle 14, Málaga",
        fechaDePublicacion: "2024-06-26",
        cantidadDeFotos: 1,
        metrosCuadrados: 172,
        precioDeVenta: 405282
    },
    {
        nombre: "Propiedad 1201",
        direccion: "Calle 16, Valencia",
        fechaDePublicacion: "2024-06-01",
        cantidadDeFotos: 12,
        metrosCuadrados: 238,
        precioDeVenta: 282447
    },
    {
        nombre: "Propiedad 1202",
        direccion: "Calle 26, Barcelona",
        fechaDePublicacion: "2024-06-06",
        cantidadDeFotos: 20,
        metrosCuadrados: 314,
        precioDeVenta: 929318
    },
    {
        nombre: "Propiedad 1203",
        direccion: "Calle 42, Palma",
        fechaDePublicacion: "2024-06-23",
        cantidadDeFotos: 13,
        metrosCuadrados: 55,
        precioDeVenta: 410070
    },
    {
        nombre: "Propiedad 1204",
        direccion: "Calle 2, Málaga",
        fechaDePublicacion: "2024-06-13",
        cantidadDeFotos: 13,
        metrosCuadrados: 291,
        precioDeVenta: 217079
    },
    {
        nombre: "Propiedad 1205",
        direccion: "Calle 17, Madrid",
        fechaDePublicacion: "2024-06-04",
        cantidadDeFotos: 13,
        metrosCuadrados: 191,
        precioDeVenta: 826632
    },
    {
        nombre: "Propiedad 1206",
        direccion: "Calle 7, Palma",
        fechaDePublicacion: "2024-06-23",
        cantidadDeFotos: 20,
        metrosCuadrados: 469,
        precioDeVenta: 742749
    },
    {
        nombre: "Propiedad 1207",
        direccion: "Calle 17, Barcelona",
        fechaDePublicacion: "2024-06-04",
        cantidadDeFotos: 18,
        metrosCuadrados: 209,
        precioDeVenta: 631657
    },
    {
        nombre: "Propiedad 1208",
        direccion: "Calle 83, Las Palmas de Gran Canaria",
        fechaDePublicacion: "2024-06-12",
        cantidadDeFotos: 11,
        metrosCuadrados: 309,
        precioDeVenta: 952270
    },
    {
        nombre: "Propiedad 1209",
        direccion: "Calle 49, Las Palmas de Gran Canaria",
        fechaDePublicacion: "2024-06-16",
        cantidadDeFotos: 13,
        metrosCuadrados: 114,
        precioDeVenta: 53041
    },
    {
        nombre: "Propiedad 1210",
        direccion: "Calle 73, Barcelona",
        fechaDePublicacion: "2024-06-23",
        cantidadDeFotos: 8,
        metrosCuadrados: 347,
        precioDeVenta: 664501
    },
    {
        nombre: "Propiedad 1211",
        direccion: "Calle 9, Murcia",
        fechaDePublicacion: "2024-06-02",
        cantidadDeFotos: 17,
        metrosCuadrados: 352,
        precioDeVenta: 628828
    },
    {
        nombre: "Propiedad 1212",
        direccion: "Calle 35, Las Palmas de Gran Canaria",
        fechaDePublicacion: "2024-06-20",
        cantidadDeFotos: 10,
        metrosCuadrados: 314,
        precioDeVenta: 229610
    },
    {
        nombre: "Propiedad 1213",
        direccion: "Calle 71, Las Palmas de Gran Canaria",
        fechaDePublicacion: "2024-06-23",
        cantidadDeFotos: 5,
        metrosCuadrados: 363,
        precioDeVenta: 487712
    },
    {
        nombre: "Propiedad 1214",
        direccion: "Calle 15, Palma",
        fechaDePublicacion: "2024-06-04",
        cantidadDeFotos: 17,
        metrosCuadrados: 334,
        precioDeVenta: 324076
    },
    {
        nombre: "Propiedad 1215",
        direccion: "Calle 92, Sevilla",
        fechaDePublicacion: "2024-06-09",
        cantidadDeFotos: 6,
        metrosCuadrados: 433,
        precioDeVenta: 711621
    },
    {
        nombre: "Propiedad 1216",
        direccion: "Calle 98, Palma",
        fechaDePublicacion: "2024-06-07",
        cantidadDeFotos: 19,
        metrosCuadrados: 146,
        precioDeVenta: 710317
    },
    {
        nombre: "Propiedad 1217",
        direccion: "Calle 97, Madrid",
        fechaDePublicacion: "2024-06-20",
        cantidadDeFotos: 9,
        metrosCuadrados: 477,
        precioDeVenta: 83270
    },
    {
        nombre: "Propiedad 1218",
        direccion: "Calle 52, Murcia",
        fechaDePublicacion: "2024-06-27",
        cantidadDeFotos: 9,
        metrosCuadrados: 415,
        precioDeVenta: 802144
    },
    {
        nombre: "Propiedad 1219",
        direccion: "Calle 19, Murcia",
        fechaDePublicacion: "2024-06-06",
        cantidadDeFotos: 16,
        metrosCuadrados: 340,
        precioDeVenta: 652749
    },
    {
        nombre: "Propiedad 1220",
        direccion: "Calle 64, Málaga",
        fechaDePublicacion: "2024-06-28",
        cantidadDeFotos: 1,
        metrosCuadrados: 238,
        precioDeVenta: 659217
    },
    {
        nombre: "Propiedad 1221",
        direccion: "Calle 14, Madrid",
        fechaDePublicacion: "2024-06-03",
        cantidadDeFotos: 18,
        metrosCuadrados: 326,
        precioDeVenta: 410051
    },
    {
        nombre: "Propiedad 1222",
        direccion: "Calle 47, Bilbao",
        fechaDePublicacion: "2024-06-05",
        cantidadDeFotos: 19,
        metrosCuadrados: 222,
        precioDeVenta: 859805
    },
    {
        nombre: "Propiedad 1223",
        direccion: "Calle 18, Bilbao",
        fechaDePublicacion: "2024-06-17",
        cantidadDeFotos: 15,
        metrosCuadrados: 367,
        precioDeVenta: 198412
    },
    {
        nombre: "Propiedad 1224",
        direccion: "Calle 80, Palma",
        fechaDePublicacion: "2024-06-03",
        cantidadDeFotos: 20,
        metrosCuadrados: 405,
        precioDeVenta: 651429
    },
    {
        nombre: "Propiedad 1225",
        direccion: "Calle 33, Las Palmas de Gran Canaria",
        fechaDePublicacion: "2024-06-04",
        cantidadDeFotos: 18,
        metrosCuadrados: 233,
        precioDeVenta: 696223
    },
    {
        nombre: "Propiedad 1226",
        direccion: "Calle 5, Palma",
        fechaDePublicacion: "2024-06-25",
        cantidadDeFotos: 9,
        metrosCuadrados: 263,
        precioDeVenta: 289820
    },
    {
        nombre: "Propiedad 1227",
        direccion: "Calle 89, Barcelona",
        fechaDePublicacion: "2024-06-12",
        cantidadDeFotos: 6,
        metrosCuadrados: 95,
        precioDeVenta: 149836
    },
    {
        nombre: "Propiedad 1228",
        direccion: "Calle 28, Las Palmas de Gran Canaria",
        fechaDePublicacion: "2024-06-13",
        cantidadDeFotos: 11,
        metrosCuadrados: 382,
        precioDeVenta: 603951
    },
    {
        nombre: "Propiedad 1229",
        direccion: "Calle 15, Bilbao",
        fechaDePublicacion: "2024-06-25",
        cantidadDeFotos: 9,
        metrosCuadrados: 160,
        precioDeVenta: 565717
    },
    {
        nombre: "Propiedad 1230",
        direccion: "Calle 21, Barcelona",
        fechaDePublicacion: "2024-06-01",
        cantidadDeFotos: 19,
        metrosCuadrados: 110,
        precioDeVenta: 114629
    },
    {
        nombre: "Propiedad 1231",
        direccion: "Calle 55, Sevilla",
        fechaDePublicacion: "2024-06-14",
        cantidadDeFotos: 13,
        metrosCuadrados: 200,
        precioDeVenta: 515789
    },
    {
        nombre: "Propiedad 1232",
        direccion: "Calle 97, Las Palmas de Gran Canaria",
        fechaDePublicacion: "2024-06-18",
        cantidadDeFotos: 18,
        metrosCuadrados: 463,
        precioDeVenta: 865558
    },
    {
        nombre: "Propiedad 1233",
        direccion: "Calle 19, Sevilla",
        fechaDePublicacion: "2024-06-19",
        cantidadDeFotos: 19,
        metrosCuadrados: 302,
        precioDeVenta: 575701
    },
    {
        nombre: "Propiedad 1234",
        direccion: "Calle 8, Zaragoza",
        fechaDePublicacion: "2024-06-25",
        cantidadDeFotos: 8,
        metrosCuadrados: 341,
        precioDeVenta: 639751
    },
    {
        nombre: "Propiedad 1235",
        direccion: "Calle 96, Barcelona",
        fechaDePublicacion: "2024-06-20",
        cantidadDeFotos: 1,
        metrosCuadrados: 305,
        precioDeVenta: 805542
    },
    {
        nombre: "Propiedad 1236",
        direccion: "Calle 55, Zaragoza",
        fechaDePublicacion: "2024-06-29",
        cantidadDeFotos: 12,
        metrosCuadrados: 427,
        precioDeVenta: 908458
    },
    {
        nombre: "Propiedad 1237",
        direccion: "Calle 82, Madrid",
        fechaDePublicacion: "2024-06-17",
        cantidadDeFotos: 6,
        metrosCuadrados: 72,
        precioDeVenta: 421094
    },
    {
        nombre: "Propiedad 1238",
        direccion: "Calle 21, Las Palmas de Gran Canaria",
        fechaDePublicacion: "2024-06-20",
        cantidadDeFotos: 14,
        metrosCuadrados: 379,
        precioDeVenta: 431919
    },
    {
        nombre: "Propiedad 1239",
        direccion: "Calle 48, Bilbao",
        fechaDePublicacion: "2024-06-11",
        cantidadDeFotos: 12,
        metrosCuadrados: 155,
        precioDeVenta: 351276
    },
    {
        nombre: "Propiedad 1240",
        direccion: "Calle 28, Barcelona",
        fechaDePublicacion: "2024-06-01",
        cantidadDeFotos: 7,
        metrosCuadrados: 101,
        precioDeVenta: 764900
    },
    {
        nombre: "Propiedad 1241",
        direccion: "Calle 85, Barcelona",
        fechaDePublicacion: "2024-06-11",
        cantidadDeFotos: 6,
        metrosCuadrados: 480,
        precioDeVenta: 403667
    },
    {
        nombre: "Propiedad 1242",
        direccion: "Calle 20, Valencia",
        fechaDePublicacion: "2024-06-02",
        cantidadDeFotos: 10,
        metrosCuadrados: 350,
        precioDeVenta: 775147
    },
    {
        nombre: "Propiedad 1243",
        direccion: "Calle 1, Málaga",
        fechaDePublicacion: "2024-06-12",
        cantidadDeFotos: 2,
        metrosCuadrados: 131,
        precioDeVenta: 274932
    },
    {
        nombre: "Propiedad 1244",
        direccion: "Calle 49, Palma",
        fechaDePublicacion: "2024-06-26",
        cantidadDeFotos: 2,
        metrosCuadrados: 483,
        precioDeVenta: 362133
    },
    {
        nombre: "Propiedad 1245",
        direccion: "Calle 90, Barcelona",
        fechaDePublicacion: "2024-06-03",
        cantidadDeFotos: 10,
        metrosCuadrados: 488,
        precioDeVenta: 807519
    },
    {
        nombre: "Propiedad 1246",
        direccion: "Calle 43, Palma",
        fechaDePublicacion: "2024-06-03",
        cantidadDeFotos: 6,
        metrosCuadrados: 491,
        precioDeVenta: 908421
    },
    {
        nombre: "Propiedad 1247",
        direccion: "Calle 9, Valencia",
        fechaDePublicacion: "2024-06-06",
        cantidadDeFotos: 16,
        metrosCuadrados: 354,
        precioDeVenta: 973956
    },
    {
        nombre: "Propiedad 1248",
        direccion: "Calle 64, Palma",
        fechaDePublicacion: "2024-06-18",
        cantidadDeFotos: 13,
        metrosCuadrados: 478,
        precioDeVenta: 302220
    },
    {
        nombre: "Propiedad 1249",
        direccion: "Calle 22, Valencia",
        fechaDePublicacion: "2024-06-16",
        cantidadDeFotos: 12,
        metrosCuadrados: 377,
        precioDeVenta: 279059
    },
    {
        nombre: "Propiedad 1250",
        direccion: "Calle 49, Madrid",
        fechaDePublicacion: "2024-06-23",
        cantidadDeFotos: 15,
        metrosCuadrados: 283,
        precioDeVenta: 313681
    },
    {
        nombre: "Propiedad 1251",
        direccion: "Calle 77, Valencia",
        fechaDePublicacion: "2024-06-15",
        cantidadDeFotos: 3,
        metrosCuadrados: 377,
        precioDeVenta: 57968
    },
    {
        nombre: "Propiedad 1252",
        direccion: "Calle 14, Valencia",
        fechaDePublicacion: "2024-06-12",
        cantidadDeFotos: 10,
        metrosCuadrados: 108,
        precioDeVenta: 391826
    },
    {
        nombre: "Propiedad 1253",
        direccion: "Calle 84, Murcia",
        fechaDePublicacion: "2024-06-03",
        cantidadDeFotos: 5,
        metrosCuadrados: 303,
        precioDeVenta: 359409
    },
    {
        nombre: "Propiedad 1254",
        direccion: "Calle 22, Las Palmas de Gran Canaria",
        fechaDePublicacion: "2024-06-23",
        cantidadDeFotos: 7,
        metrosCuadrados: 306,
        precioDeVenta: 821037
    },
    {
        nombre: "Propiedad 1255",
        direccion: "Calle 80, Madrid",
        fechaDePublicacion: "2024-06-19",
        cantidadDeFotos: 13,
        metrosCuadrados: 497,
        precioDeVenta: 990457
    },
    {
        nombre: "Propiedad 1256",
        direccion: "Calle 11, Las Palmas de Gran Canaria",
        fechaDePublicacion: "2024-06-08",
        cantidadDeFotos: 4,
        metrosCuadrados: 412,
        precioDeVenta: 586146
    },
    {
        nombre: "Propiedad 1257",
        direccion: "Calle 59, Sevilla",
        fechaDePublicacion: "2024-06-25",
        cantidadDeFotos: 18,
        metrosCuadrados: 166,
        precioDeVenta: 435661
    },
    {
        nombre: "Propiedad 1258",
        direccion: "Calle 9, Barcelona",
        fechaDePublicacion: "2024-06-18",
        cantidadDeFotos: 20,
        metrosCuadrados: 290,
        precioDeVenta: 743285
    },
    {
        nombre: "Propiedad 1259",
        direccion: "Calle 95, Sevilla",
        fechaDePublicacion: "2024-06-04",
        cantidadDeFotos: 5,
        metrosCuadrados: 107,
        precioDeVenta: 853603
    },
    {
        nombre: "Propiedad 1260",
        direccion: "Calle 49, Málaga",
        fechaDePublicacion: "2024-06-03",
        cantidadDeFotos: 14,
        metrosCuadrados: 480,
        precioDeVenta: 981374
    },
    {
        nombre: "Propiedad 1261",
        direccion: "Calle 36, Palma",
        fechaDePublicacion: "2024-06-01",
        cantidadDeFotos: 6,
        metrosCuadrados: 127,
        precioDeVenta: 887303
    },
    {
        nombre: "Propiedad 1262",
        direccion: "Calle 33, Valencia",
        fechaDePublicacion: "2024-06-24",
        cantidadDeFotos: 11,
        metrosCuadrados: 340,
        precioDeVenta: 824071
    },
    {
        nombre: "Propiedad 1263",
        direccion: "Calle 50, Madrid",
        fechaDePublicacion: "2024-06-02",
        cantidadDeFotos: 11,
        metrosCuadrados: 277,
        precioDeVenta: 861181
    },
    {
        nombre: "Propiedad 1264",
        direccion: "Calle 62, Zaragoza",
        fechaDePublicacion: "2024-06-11",
        cantidadDeFotos: 13,
        metrosCuadrados: 237,
        precioDeVenta: 873315
    },
    {
        nombre: "Propiedad 1265",
        direccion: "Calle 2, Madrid",
        fechaDePublicacion: "2024-06-23",
        cantidadDeFotos: 2,
        metrosCuadrados: 63,
        precioDeVenta: 632575
    },
    {
        nombre: "Propiedad 1266",
        direccion: "Calle 26, Barcelona",
        fechaDePublicacion: "2024-06-03",
        cantidadDeFotos: 2,
        metrosCuadrados: 428,
        precioDeVenta: 72960
    },
    {
        nombre: "Propiedad 1267",
        direccion: "Calle 52, Palma",
        fechaDePublicacion: "2024-06-04",
        cantidadDeFotos: 9,
        metrosCuadrados: 418,
        precioDeVenta: 954085
    },
    {
        nombre: "Propiedad 1268",
        direccion: "Calle 32, Murcia",
        fechaDePublicacion: "2024-06-12",
        cantidadDeFotos: 11,
        metrosCuadrados: 189,
        precioDeVenta: 953244
    },
    {
        nombre: "Propiedad 1269",
        direccion: "Calle 48, Valencia",
        fechaDePublicacion: "2024-06-15",
        cantidadDeFotos: 19,
        metrosCuadrados: 401,
        precioDeVenta: 792600
    },
    {
        nombre: "Propiedad 1270",
        direccion: "Calle 92, Barcelona",
        fechaDePublicacion: "2024-06-11",
        cantidadDeFotos: 9,
        metrosCuadrados: 103,
        precioDeVenta: 503932
    },
    {
        nombre: "Propiedad 1271",
        direccion: "Calle 42, Málaga",
        fechaDePublicacion: "2024-06-06",
        cantidadDeFotos: 14,
        metrosCuadrados: 199,
        precioDeVenta: 362550
    },
    {
        nombre: "Propiedad 1272",
        direccion: "Calle 50, Murcia",
        fechaDePublicacion: "2024-06-02",
        cantidadDeFotos: 13,
        metrosCuadrados: 305,
        precioDeVenta: 407960
    },
    {
        nombre: "Propiedad 1273",
        direccion: "Calle 60, Palma",
        fechaDePublicacion: "2024-06-09",
        cantidadDeFotos: 10,
        metrosCuadrados: 225,
        precioDeVenta: 920247
    },
    {
        nombre: "Propiedad 1274",
        direccion: "Calle 22, Málaga",
        fechaDePublicacion: "2024-06-23",
        cantidadDeFotos: 15,
        metrosCuadrados: 346,
        precioDeVenta: 796827
    },
    {
        nombre: "Propiedad 1275",
        direccion: "Calle 30, Valencia",
        fechaDePublicacion: "2024-06-01",
        cantidadDeFotos: 20,
        metrosCuadrados: 202,
        precioDeVenta: 135701
    },
    {
        nombre: "Propiedad 1276",
        direccion: "Calle 62, Barcelona",
        fechaDePublicacion: "2024-06-05",
        cantidadDeFotos: 8,
        metrosCuadrados: 399,
        precioDeVenta: 590064
    },
    {
        nombre: "Propiedad 1277",
        direccion: "Calle 29, Barcelona",
        fechaDePublicacion: "2024-06-28",
        cantidadDeFotos: 15,
        metrosCuadrados: 440,
        precioDeVenta: 241783
    },
    {
        nombre: "Propiedad 1278",
        direccion: "Calle 7, Bilbao",
        fechaDePublicacion: "2024-06-23",
        cantidadDeFotos: 11,
        metrosCuadrados: 484,
        precioDeVenta: 878761
    },
    {
        nombre: "Propiedad 1279",
        direccion: "Calle 72, Málaga",
        fechaDePublicacion: "2024-06-17",
        cantidadDeFotos: 8,
        metrosCuadrados: 192,
        precioDeVenta: 223330
    },
    {
        nombre: "Propiedad 1280",
        direccion: "Calle 41, Murcia",
        fechaDePublicacion: "2024-06-19",
        cantidadDeFotos: 6,
        metrosCuadrados: 489,
        precioDeVenta: 467843
    },
    {
        nombre: "Propiedad 1281",
        direccion: "Calle 55, Madrid",
        fechaDePublicacion: "2024-06-17",
        cantidadDeFotos: 6,
        metrosCuadrados: 112,
        precioDeVenta: 722801
    },
    {
        nombre: "Propiedad 1282",
        direccion: "Calle 66, Madrid",
        fechaDePublicacion: "2024-06-04",
        cantidadDeFotos: 9,
        metrosCuadrados: 256,
        precioDeVenta: 541333
    },
    {
        nombre: "Propiedad 1283",
        direccion: "Calle 28, Madrid",
        fechaDePublicacion: "2024-06-06",
        cantidadDeFotos: 16,
        metrosCuadrados: 266,
        precioDeVenta: 364769
    },
    {
        nombre: "Propiedad 1284",
        direccion: "Calle 89, Murcia",
        fechaDePublicacion: "2024-06-26",
        cantidadDeFotos: 8,
        metrosCuadrados: 162,
        precioDeVenta: 893521
    },
    {
        nombre: "Propiedad 1285",
        direccion: "Calle 19, Las Palmas de Gran Canaria",
        fechaDePublicacion: "2024-06-24",
        cantidadDeFotos: 6,
        metrosCuadrados: 366,
        precioDeVenta: 464621
    },
    {
        nombre: "Propiedad 1286",
        direccion: "Calle 64, Barcelona",
        fechaDePublicacion: "2024-06-07",
        cantidadDeFotos: 11,
        metrosCuadrados: 495,
        precioDeVenta: 298114
    },
    {
        nombre: "Propiedad 1287",
        direccion: "Calle 17, Málaga",
        fechaDePublicacion: "2024-06-02",
        cantidadDeFotos: 17,
        metrosCuadrados: 95,
        precioDeVenta: 104383
    },
    {
        nombre: "Propiedad 1288",
        direccion: "Calle 37, Bilbao",
        fechaDePublicacion: "2024-06-26",
        cantidadDeFotos: 12,
        metrosCuadrados: 459,
        precioDeVenta: 337259
    },
    {
        nombre: "Propiedad 1289",
        direccion: "Calle 91, Madrid",
        fechaDePublicacion: "2024-06-28",
        cantidadDeFotos: 3,
        metrosCuadrados: 211,
        precioDeVenta: 958235
    },
    {
        nombre: "Propiedad 1290",
        direccion: "Calle 79, Zaragoza",
        fechaDePublicacion: "2024-06-06",
        cantidadDeFotos: 19,
        metrosCuadrados: 257,
        precioDeVenta: 727091
    },
    {
        nombre: "Propiedad 1291",
        direccion: "Calle 47, Palma",
        fechaDePublicacion: "2024-06-09",
        cantidadDeFotos: 18,
        metrosCuadrados: 451,
        precioDeVenta: 632173
    },
    {
        nombre: "Propiedad 1292",
        direccion: "Calle 43, Madrid",
        fechaDePublicacion: "2024-06-25",
        cantidadDeFotos: 20,
        metrosCuadrados: 219,
        precioDeVenta: 342270
    },
    {
        nombre: "Propiedad 1293",
        direccion: "Calle 57, Barcelona",
        fechaDePublicacion: "2024-06-16",
        cantidadDeFotos: 7,
        metrosCuadrados: 88,
        precioDeVenta: 726076
    },
    {
        nombre: "Propiedad 1294",
        direccion: "Calle 87, Murcia",
        fechaDePublicacion: "2024-06-17",
        cantidadDeFotos: 6,
        metrosCuadrados: 250,
        precioDeVenta: 256738
    },
    {
        nombre: "Propiedad 1295",
        direccion: "Calle 95, Las Palmas de Gran Canaria",
        fechaDePublicacion: "2024-06-01",
        cantidadDeFotos: 10,
        metrosCuadrados: 382,
        precioDeVenta: 501371
    },
    {
        nombre: "Propiedad 1296",
        direccion: "Calle 35, Las Palmas de Gran Canaria",
        fechaDePublicacion: "2024-06-01",
        cantidadDeFotos: 18,
        metrosCuadrados: 196,
        precioDeVenta: 719566
    },
    {
        nombre: "Propiedad 1297",
        direccion: "Calle 62, Barcelona",
        fechaDePublicacion: "2024-06-21",
        cantidadDeFotos: 10,
        metrosCuadrados: 185,
        precioDeVenta: 436897
    },
    {
        nombre: "Propiedad 1298",
        direccion: "Calle 58, Málaga",
        fechaDePublicacion: "2024-06-17",
        cantidadDeFotos: 19,
        metrosCuadrados: 154,
        precioDeVenta: 413603
    },
    {
        nombre: "Propiedad 1299",
        direccion: "Calle 89, Sevilla",
        fechaDePublicacion: "2024-06-18",
        cantidadDeFotos: 8,
        metrosCuadrados: 367,
        precioDeVenta: 230310
    },
    {
        nombre: "Propiedad 1300",
        direccion: "Calle 13, Palma",
        fechaDePublicacion: "2024-06-16",
        cantidadDeFotos: 8,
        metrosCuadrados: 146,
        precioDeVenta: 509717
    },
    {
        nombre: "Propiedad 1301",
        direccion: "Calle 87, Madrid",
        fechaDePublicacion: "2024-06-23",
        cantidadDeFotos: 4,
        metrosCuadrados: 448,
        precioDeVenta: 586725
    },
    {
        nombre: "Propiedad 1302",
        direccion: "Calle 15, Madrid",
        fechaDePublicacion: "2024-06-29",
        cantidadDeFotos: 6,
        metrosCuadrados: 268,
        precioDeVenta: 471786
    },
    {
        nombre: "Propiedad 1303",
        direccion: "Calle 26, Las Palmas de Gran Canaria",
        fechaDePublicacion: "2024-06-06",
        cantidadDeFotos: 16,
        metrosCuadrados: 234,
        precioDeVenta: 796418
    },
    {
        nombre: "Propiedad 1304",
        direccion: "Calle 47, Las Palmas de Gran Canaria",
        fechaDePublicacion: "2024-06-28",
        cantidadDeFotos: 11,
        metrosCuadrados: 98,
        precioDeVenta: 999884
    },
    {
        nombre: "Propiedad 1305",
        direccion: "Calle 6, Madrid",
        fechaDePublicacion: "2024-06-14",
        cantidadDeFotos: 6,
        metrosCuadrados: 335,
        precioDeVenta: 552517
    },
    {
        nombre: "Propiedad 1306",
        direccion: "Calle 41, Murcia",
        fechaDePublicacion: "2024-06-14",
        cantidadDeFotos: 17,
        metrosCuadrados: 372,
        precioDeVenta: 210020
    },
    {
        nombre: "Propiedad 1307",
        direccion: "Calle 40, Barcelona",
        fechaDePublicacion: "2024-06-12",
        cantidadDeFotos: 17,
        metrosCuadrados: 342,
        precioDeVenta: 137942
    },
    {
        nombre: "Propiedad 1308",
        direccion: "Calle 81, Madrid",
        fechaDePublicacion: "2024-06-09",
        cantidadDeFotos: 9,
        metrosCuadrados: 348,
        precioDeVenta: 326477
    },
    {
        nombre: "Propiedad 1309",
        direccion: "Calle 96, Bilbao",
        fechaDePublicacion: "2024-06-12",
        cantidadDeFotos: 6,
        metrosCuadrados: 308,
        precioDeVenta: 918430
    },
    {
        nombre: "Propiedad 1310",
        direccion: "Calle 39, Valencia",
        fechaDePublicacion: "2024-06-11",
        cantidadDeFotos: 18,
        metrosCuadrados: 414,
        precioDeVenta: 599515
    },
    {
        nombre: "Propiedad 1311",
        direccion: "Calle 47, Murcia",
        fechaDePublicacion: "2024-06-04",
        cantidadDeFotos: 9,
        metrosCuadrados: 334,
        precioDeVenta: 283916
    },
    {
        nombre: "Propiedad 1312",
        direccion: "Calle 64, Las Palmas de Gran Canaria",
        fechaDePublicacion: "2024-06-07",
        cantidadDeFotos: 2,
        metrosCuadrados: 206,
        precioDeVenta: 445742
    },
    {
        nombre: "Propiedad 1313",
        direccion: "Calle 47, Palma",
        fechaDePublicacion: "2024-06-02",
        cantidadDeFotos: 19,
        metrosCuadrados: 474,
        precioDeVenta: 335521
    },
    {
        nombre: "Propiedad 1314",
        direccion: "Calle 20, Valencia",
        fechaDePublicacion: "2024-06-14",
        cantidadDeFotos: 11,
        metrosCuadrados: 499,
        precioDeVenta: 985240
    },
    {
        nombre: "Propiedad 1315",
        direccion: "Calle 71, Las Palmas de Gran Canaria",
        fechaDePublicacion: "2024-06-03",
        cantidadDeFotos: 6,
        metrosCuadrados: 128,
        precioDeVenta: 89651
    },
    {
        nombre: "Propiedad 1316",
        direccion: "Calle 12, Valencia",
        fechaDePublicacion: "2024-06-04",
        cantidadDeFotos: 9,
        metrosCuadrados: 98,
        precioDeVenta: 123566
    },
    {
        nombre: "Propiedad 1317",
        direccion: "Calle 61, Madrid",
        fechaDePublicacion: "2024-06-20",
        cantidadDeFotos: 15,
        metrosCuadrados: 275,
        precioDeVenta: 369139
    },
    {
        nombre: "Propiedad 1318",
        direccion: "Calle 12, Zaragoza",
        fechaDePublicacion: "2024-06-19",
        cantidadDeFotos: 17,
        metrosCuadrados: 339,
        precioDeVenta: 782467
    },
    {
        nombre: "Propiedad 1319",
        direccion: "Calle 86, Zaragoza",
        fechaDePublicacion: "2024-06-23",
        cantidadDeFotos: 12,
        metrosCuadrados: 477,
        precioDeVenta: 840576
    },
    {
        nombre: "Propiedad 1320",
        direccion: "Calle 35, Bilbao",
        fechaDePublicacion: "2024-06-16",
        cantidadDeFotos: 3,
        metrosCuadrados: 126,
        precioDeVenta: 650790
    },
    {
        nombre: "Propiedad 1321",
        direccion: "Calle 19, Palma",
        fechaDePublicacion: "2024-06-23",
        cantidadDeFotos: 11,
        metrosCuadrados: 304,
        precioDeVenta: 823987
    },
    {
        nombre: "Propiedad 1322",
        direccion: "Calle 71, Barcelona",
        fechaDePublicacion: "2024-06-29",
        cantidadDeFotos: 3,
        metrosCuadrados: 212,
        precioDeVenta: 889273
    },
    {
        nombre: "Propiedad 1323",
        direccion: "Calle 87, Murcia",
        fechaDePublicacion: "2024-06-26",
        cantidadDeFotos: 18,
        metrosCuadrados: 277,
        precioDeVenta: 785309
    },
    {
        nombre: "Propiedad 1324",
        direccion: "Calle 92, Bilbao",
        fechaDePublicacion: "2024-06-14",
        cantidadDeFotos: 8,
        metrosCuadrados: 404,
        precioDeVenta: 634861
    },
    {
        nombre: "Propiedad 1325",
        direccion: "Calle 5, Murcia",
        fechaDePublicacion: "2024-06-20",
        cantidadDeFotos: 10,
        metrosCuadrados: 90,
        precioDeVenta: 653176
    },
    {
        nombre: "Propiedad 1326",
        direccion: "Calle 71, Zaragoza",
        fechaDePublicacion: "2024-06-26",
        cantidadDeFotos: 3,
        metrosCuadrados: 119,
        precioDeVenta: 857623
    },
    {
        nombre: "Propiedad 1327",
        direccion: "Calle 43, Sevilla",
        fechaDePublicacion: "2024-06-27",
        cantidadDeFotos: 6,
        metrosCuadrados: 134,
        precioDeVenta: 881427
    },
    {
        nombre: "Propiedad 1328",
        direccion: "Calle 54, Palma",
        fechaDePublicacion: "2024-06-21",
        cantidadDeFotos: 3,
        metrosCuadrados: 227,
        precioDeVenta: 892723
    },
    {
        nombre: "Propiedad 1329",
        direccion: "Calle 90, Zaragoza",
        fechaDePublicacion: "2024-06-22",
        cantidadDeFotos: 14,
        metrosCuadrados: 174,
        precioDeVenta: 483690
    },
    {
        nombre: "Propiedad 1330",
        direccion: "Calle 87, Palma",
        fechaDePublicacion: "2024-06-25",
        cantidadDeFotos: 15,
        metrosCuadrados: 241,
        precioDeVenta: 410256
    },
    {
        nombre: "Propiedad 1331",
        direccion: "Calle 11, Zaragoza",
        fechaDePublicacion: "2024-06-04",
        cantidadDeFotos: 5,
        metrosCuadrados: 183,
        precioDeVenta: 242974
    },
    {
        nombre: "Propiedad 1332",
        direccion: "Calle 18, Zaragoza",
        fechaDePublicacion: "2024-06-02",
        cantidadDeFotos: 17,
        metrosCuadrados: 237,
        precioDeVenta: 624363
    },
    {
        nombre: "Propiedad 1333",
        direccion: "Calle 89, Las Palmas de Gran Canaria",
        fechaDePublicacion: "2024-06-29",
        cantidadDeFotos: 3,
        metrosCuadrados: 238,
        precioDeVenta: 459821
    },
    {
        nombre: "Propiedad 1334",
        direccion: "Calle 85, Sevilla",
        fechaDePublicacion: "2024-06-11",
        cantidadDeFotos: 10,
        metrosCuadrados: 449,
        precioDeVenta: 409548
    },
    {
        nombre: "Propiedad 1335",
        direccion: "Calle 59, Sevilla",
        fechaDePublicacion: "2024-06-18",
        cantidadDeFotos: 18,
        metrosCuadrados: 333,
        precioDeVenta: 340133
    },
    {
        nombre: "Propiedad 1336",
        direccion: "Calle 90, Madrid",
        fechaDePublicacion: "2024-06-14",
        cantidadDeFotos: 4,
        metrosCuadrados: 483,
        precioDeVenta: 67945
    },
    {
        nombre: "Propiedad 1337",
        direccion: "Calle 99, Murcia",
        fechaDePublicacion: "2024-06-14",
        cantidadDeFotos: 7,
        metrosCuadrados: 283,
        precioDeVenta: 442503
    },
    {
        nombre: "Propiedad 1338",
        direccion: "Calle 30, Málaga",
        fechaDePublicacion: "2024-06-29",
        cantidadDeFotos: 11,
        metrosCuadrados: 117,
        precioDeVenta: 198051
    },
    {
        nombre: "Propiedad 1339",
        direccion: "Calle 16, Sevilla",
        fechaDePublicacion: "2024-06-01",
        cantidadDeFotos: 8,
        metrosCuadrados: 284,
        precioDeVenta: 466714
    },
    {
        nombre: "Propiedad 1340",
        direccion: "Calle 58, Bilbao",
        fechaDePublicacion: "2024-06-14",
        cantidadDeFotos: 13,
        metrosCuadrados: 239,
        precioDeVenta: 667312
    },
    {
        nombre: "Propiedad 1341",
        direccion: "Calle 12, Valencia",
        fechaDePublicacion: "2024-06-28",
        cantidadDeFotos: 13,
        metrosCuadrados: 325,
        precioDeVenta: 816514
    },
    {
        nombre: "Propiedad 1342",
        direccion: "Calle 20, Las Palmas de Gran Canaria",
        fechaDePublicacion: "2024-06-07",
        cantidadDeFotos: 14,
        metrosCuadrados: 392,
        precioDeVenta: 478297
    },
    {
        nombre: "Propiedad 1343",
        direccion: "Calle 42, Valencia",
        fechaDePublicacion: "2024-06-24",
        cantidadDeFotos: 13,
        metrosCuadrados: 286,
        precioDeVenta: 935860
    },
    {
        nombre: "Propiedad 1344",
        direccion: "Calle 81, Valencia",
        fechaDePublicacion: "2024-06-23",
        cantidadDeFotos: 20,
        metrosCuadrados: 55,
        precioDeVenta: 526371
    },
    {
        nombre: "Propiedad 1345",
        direccion: "Calle 53, Valencia",
        fechaDePublicacion: "2024-06-25",
        cantidadDeFotos: 16,
        metrosCuadrados: 448,
        precioDeVenta: 188392
    },
    {
        nombre: "Propiedad 1346",
        direccion: "Calle 93, Madrid",
        fechaDePublicacion: "2024-06-04",
        cantidadDeFotos: 4,
        metrosCuadrados: 160,
        precioDeVenta: 908700
    },
    {
        nombre: "Propiedad 1347",
        direccion: "Calle 60, Palma",
        fechaDePublicacion: "2024-06-04",
        cantidadDeFotos: 10,
        metrosCuadrados: 146,
        precioDeVenta: 348131
    },
    {
        nombre: "Propiedad 1348",
        direccion: "Calle 64, Madrid",
        fechaDePublicacion: "2024-06-08",
        cantidadDeFotos: 10,
        metrosCuadrados: 198,
        precioDeVenta: 781978
    },
    {
        nombre: "Propiedad 1349",
        direccion: "Calle 80, Valencia",
        fechaDePublicacion: "2024-06-26",
        cantidadDeFotos: 11,
        metrosCuadrados: 413,
        precioDeVenta: 600920
    },
    {
        nombre: "Propiedad 1350",
        direccion: "Calle 68, Palma",
        fechaDePublicacion: "2024-06-27",
        cantidadDeFotos: 4,
        metrosCuadrados: 261,
        precioDeVenta: 475223
    },
    {
        nombre: "Propiedad 1351",
        direccion: "Calle 32, Valencia",
        fechaDePublicacion: "2024-06-17",
        cantidadDeFotos: 7,
        metrosCuadrados: 492,
        precioDeVenta: 811003
    },
    {
        nombre: "Propiedad 1352",
        direccion: "Calle 97, Zaragoza",
        fechaDePublicacion: "2024-06-16",
        cantidadDeFotos: 8,
        metrosCuadrados: 127,
        precioDeVenta: 535824
    },
    {
        nombre: "Propiedad 1353",
        direccion: "Calle 26, Zaragoza",
        fechaDePublicacion: "2024-06-05",
        cantidadDeFotos: 2,
        metrosCuadrados: 239,
        precioDeVenta: 646661
    },
    {
        nombre: "Propiedad 1354",
        direccion: "Calle 65, Valencia",
        fechaDePublicacion: "2024-06-03",
        cantidadDeFotos: 3,
        metrosCuadrados: 196,
        precioDeVenta: 378212
    },
    {
        nombre: "Propiedad 1355",
        direccion: "Calle 76, Las Palmas de Gran Canaria",
        fechaDePublicacion: "2024-06-25",
        cantidadDeFotos: 5,
        metrosCuadrados: 245,
        precioDeVenta: 777445
    },
    {
        nombre: "Propiedad 1356",
        direccion: "Calle 98, Sevilla",
        fechaDePublicacion: "2024-06-10",
        cantidadDeFotos: 6,
        metrosCuadrados: 484,
        precioDeVenta: 931941
    },
    {
        nombre: "Propiedad 1357",
        direccion: "Calle 65, Sevilla",
        fechaDePublicacion: "2024-06-26",
        cantidadDeFotos: 2,
        metrosCuadrados: 476,
        precioDeVenta: 844931
    },
    {
        nombre: "Propiedad 1358",
        direccion: "Calle 41, Madrid",
        fechaDePublicacion: "2024-06-23",
        cantidadDeFotos: 16,
        metrosCuadrados: 358,
        precioDeVenta: 372988
    },
    {
        nombre: "Propiedad 1359",
        direccion: "Calle 41, Las Palmas de Gran Canaria",
        fechaDePublicacion: "2024-06-28",
        cantidadDeFotos: 4,
        metrosCuadrados: 293,
        precioDeVenta: 505590
    },
    {
        nombre: "Propiedad 1360",
        direccion: "Calle 95, Bilbao",
        fechaDePublicacion: "2024-06-19",
        cantidadDeFotos: 11,
        metrosCuadrados: 410,
        precioDeVenta: 470586
    },
    {
        nombre: "Propiedad 1361",
        direccion: "Calle 92, Las Palmas de Gran Canaria",
        fechaDePublicacion: "2024-06-17",
        cantidadDeFotos: 17,
        metrosCuadrados: 86,
        precioDeVenta: 667397
    },
    {
        nombre: "Propiedad 1362",
        direccion: "Calle 3, Valencia",
        fechaDePublicacion: "2024-06-13",
        cantidadDeFotos: 4,
        metrosCuadrados: 324,
        precioDeVenta: 302664
    },
    {
        nombre: "Propiedad 1363",
        direccion: "Calle 45, Madrid",
        fechaDePublicacion: "2024-06-21",
        cantidadDeFotos: 15,
        metrosCuadrados: 413,
        precioDeVenta: 620590
    },
    {
        nombre: "Propiedad 1364",
        direccion: "Calle 95, Valencia",
        fechaDePublicacion: "2024-06-28",
        cantidadDeFotos: 2,
        metrosCuadrados: 180,
        precioDeVenta: 368655
    },
    {
        nombre: "Propiedad 1365",
        direccion: "Calle 70, Málaga",
        fechaDePublicacion: "2024-06-07",
        cantidadDeFotos: 16,
        metrosCuadrados: 102,
        precioDeVenta: 615768
    },
    {
        nombre: "Propiedad 1366",
        direccion: "Calle 28, Sevilla",
        fechaDePublicacion: "2024-06-26",
        cantidadDeFotos: 17,
        metrosCuadrados: 447,
        precioDeVenta: 782440
    },
    {
        nombre: "Propiedad 1367",
        direccion: "Calle 23, Madrid",
        fechaDePublicacion: "2024-06-15",
        cantidadDeFotos: 8,
        metrosCuadrados: 467,
        precioDeVenta: 755493
    },
    {
        nombre: "Propiedad 1368",
        direccion: "Calle 82, Palma",
        fechaDePublicacion: "2024-06-05",
        cantidadDeFotos: 15,
        metrosCuadrados: 309,
        precioDeVenta: 443527
    },
    {
        nombre: "Propiedad 1369",
        direccion: "Calle 96, Murcia",
        fechaDePublicacion: "2024-06-06",
        cantidadDeFotos: 9,
        metrosCuadrados: 166,
        precioDeVenta: 382676
    },
    {
        nombre: "Propiedad 1370",
        direccion: "Calle 99, Málaga",
        fechaDePublicacion: "2024-06-15",
        cantidadDeFotos: 10,
        metrosCuadrados: 79,
        precioDeVenta: 421080
    },
    {
        nombre: "Propiedad 1371",
        direccion: "Calle 5, Valencia",
        fechaDePublicacion: "2024-06-27",
        cantidadDeFotos: 3,
        metrosCuadrados: 402,
        precioDeVenta: 624034
    },
    {
        nombre: "Propiedad 1372",
        direccion: "Calle 10, Palma",
        fechaDePublicacion: "2024-06-01",
        cantidadDeFotos: 7,
        metrosCuadrados: 154,
        precioDeVenta: 62461
    },
    {
        nombre: "Propiedad 1373",
        direccion: "Calle 60, Valencia",
        fechaDePublicacion: "2024-06-29",
        cantidadDeFotos: 20,
        metrosCuadrados: 136,
        precioDeVenta: 555082
    },
    {
        nombre: "Propiedad 1374",
        direccion: "Calle 4, Sevilla",
        fechaDePublicacion: "2024-06-10",
        cantidadDeFotos: 13,
        metrosCuadrados: 414,
        precioDeVenta: 370309
    },
    {
        nombre: "Propiedad 1375",
        direccion: "Calle 76, Valencia",
        fechaDePublicacion: "2024-06-26",
        cantidadDeFotos: 13,
        metrosCuadrados: 273,
        precioDeVenta: 804874
    },
    {
        nombre: "Propiedad 1376",
        direccion: "Calle 51, Málaga",
        fechaDePublicacion: "2024-06-26",
        cantidadDeFotos: 7,
        metrosCuadrados: 273,
        precioDeVenta: 146025
    },
    {
        nombre: "Propiedad 1377",
        direccion: "Calle 28, Las Palmas de Gran Canaria",
        fechaDePublicacion: "2024-06-01",
        cantidadDeFotos: 3,
        metrosCuadrados: 300,
        precioDeVenta: 543944
    },
    {
        nombre: "Propiedad 1378",
        direccion: "Calle 6, Valencia",
        fechaDePublicacion: "2024-06-11",
        cantidadDeFotos: 20,
        metrosCuadrados: 214,
        precioDeVenta: 195033
    },
    {
        nombre: "Propiedad 1379",
        direccion: "Calle 38, Sevilla",
        fechaDePublicacion: "2024-06-17",
        cantidadDeFotos: 12,
        metrosCuadrados: 121,
        precioDeVenta: 777225
    },
    {
        nombre: "Propiedad 1380",
        direccion: "Calle 44, Barcelona",
        fechaDePublicacion: "2024-06-03",
        cantidadDeFotos: 16,
        metrosCuadrados: 441,
        precioDeVenta: 793052
    },
    {
        nombre: "Propiedad 1381",
        direccion: "Calle 25, Valencia",
        fechaDePublicacion: "2024-06-17",
        cantidadDeFotos: 17,
        metrosCuadrados: 381,
        precioDeVenta: 526744
    },
    {
        nombre: "Propiedad 1382",
        direccion: "Calle 12, Sevilla",
        fechaDePublicacion: "2024-06-16",
        cantidadDeFotos: 12,
        metrosCuadrados: 150,
        precioDeVenta: 843133
    },
    {
        nombre: "Propiedad 1383",
        direccion: "Calle 28, Madrid",
        fechaDePublicacion: "2024-06-09",
        cantidadDeFotos: 18,
        metrosCuadrados: 254,
        precioDeVenta: 972494
    },
    {
        nombre: "Propiedad 1384",
        direccion: "Calle 28, Murcia",
        fechaDePublicacion: "2024-06-01",
        cantidadDeFotos: 6,
        metrosCuadrados: 487,
        precioDeVenta: 318414
    },
    {
        nombre: "Propiedad 1385",
        direccion: "Calle 34, Barcelona",
        fechaDePublicacion: "2024-06-09",
        cantidadDeFotos: 10,
        metrosCuadrados: 99,
        precioDeVenta: 755195
    },
    {
        nombre: "Propiedad 1386",
        direccion: "Calle 24, Las Palmas de Gran Canaria",
        fechaDePublicacion: "2024-06-28",
        cantidadDeFotos: 13,
        metrosCuadrados: 393,
        precioDeVenta: 114716
    },
    {
        nombre: "Propiedad 1387",
        direccion: "Calle 14, Málaga",
        fechaDePublicacion: "2024-06-19",
        cantidadDeFotos: 8,
        metrosCuadrados: 486,
        precioDeVenta: 761380
    },
    {
        nombre: "Propiedad 1388",
        direccion: "Calle 12, Bilbao",
        fechaDePublicacion: "2024-06-13",
        cantidadDeFotos: 12,
        metrosCuadrados: 413,
        precioDeVenta: 847611
    },
    {
        nombre: "Propiedad 1389",
        direccion: "Calle 28, Palma",
        fechaDePublicacion: "2024-06-20",
        cantidadDeFotos: 12,
        metrosCuadrados: 55,
        precioDeVenta: 641296
    },
    {
        nombre: "Propiedad 1390",
        direccion: "Calle 42, Las Palmas de Gran Canaria",
        fechaDePublicacion: "2024-06-05",
        cantidadDeFotos: 10,
        metrosCuadrados: 60,
        precioDeVenta: 919412
    },
    {
        nombre: "Propiedad 1391",
        direccion: "Calle 44, Sevilla",
        fechaDePublicacion: "2024-06-27",
        cantidadDeFotos: 14,
        metrosCuadrados: 257,
        precioDeVenta: 211871
    },
    {
        nombre: "Propiedad 1392",
        direccion: "Calle 5, Madrid",
        fechaDePublicacion: "2024-06-07",
        cantidadDeFotos: 18,
        metrosCuadrados: 125,
        precioDeVenta: 740507
    },
    {
        nombre: "Propiedad 1393",
        direccion: "Calle 97, Zaragoza",
        fechaDePublicacion: "2024-06-24",
        cantidadDeFotos: 5,
        metrosCuadrados: 80,
        precioDeVenta: 551773
    },
    {
        nombre: "Propiedad 1394",
        direccion: "Calle 99, Murcia",
        fechaDePublicacion: "2024-06-17",
        cantidadDeFotos: 5,
        metrosCuadrados: 479,
        precioDeVenta: 565833
    },
    {
        nombre: "Propiedad 1395",
        direccion: "Calle 98, Murcia",
        fechaDePublicacion: "2024-06-16",
        cantidadDeFotos: 9,
        metrosCuadrados: 103,
        precioDeVenta: 221626
    },
    {
        nombre: "Propiedad 1396",
        direccion: "Calle 58, Barcelona",
        fechaDePublicacion: "2024-06-25",
        cantidadDeFotos: 7,
        metrosCuadrados: 125,
        precioDeVenta: 135115
    },
    {
        nombre: "Propiedad 1397",
        direccion: "Calle 6, Sevilla",
        fechaDePublicacion: "2024-06-27",
        cantidadDeFotos: 6,
        metrosCuadrados: 53,
        precioDeVenta: 452268
    },
    {
        nombre: "Propiedad 1398",
        direccion: "Calle 71, Murcia",
        fechaDePublicacion: "2024-06-28",
        cantidadDeFotos: 15,
        metrosCuadrados: 149,
        precioDeVenta: 858134
    },
    {
        nombre: "Propiedad 1399",
        direccion: "Calle 13, Málaga",
        fechaDePublicacion: "2024-06-18",
        cantidadDeFotos: 16,
        metrosCuadrados: 303,
        precioDeVenta: 287032
    },
    {
        nombre: "Propiedad 1400",
        direccion: "Calle 33, Murcia",
        fechaDePublicacion: "2024-06-23",
        cantidadDeFotos: 7,
        metrosCuadrados: 461,
        precioDeVenta: 178932
    },
    {
        nombre: "Propiedad 1401",
        direccion: "Calle 61, Bilbao",
        fechaDePublicacion: "2024-06-09",
        cantidadDeFotos: 13,
        metrosCuadrados: 318,
        precioDeVenta: 737178
    },
    {
        nombre: "Propiedad 1402",
        direccion: "Calle 10, Málaga",
        fechaDePublicacion: "2024-06-11",
        cantidadDeFotos: 8,
        metrosCuadrados: 443,
        precioDeVenta: 781538
    },
    {
        nombre: "Propiedad 1403",
        direccion: "Calle 36, Barcelona",
        fechaDePublicacion: "2024-06-18",
        cantidadDeFotos: 5,
        metrosCuadrados: 448,
        precioDeVenta: 467201
    },
    {
        nombre: "Propiedad 1404",
        direccion: "Calle 2, Bilbao",
        fechaDePublicacion: "2024-06-27",
        cantidadDeFotos: 8,
        metrosCuadrados: 373,
        precioDeVenta: 508540
    },
    {
        nombre: "Propiedad 1405",
        direccion: "Calle 8, Murcia",
        fechaDePublicacion: "2024-06-29",
        cantidadDeFotos: 8,
        metrosCuadrados: 77,
        precioDeVenta: 98774
    },
    {
        nombre: "Propiedad 1406",
        direccion: "Calle 41, Barcelona",
        fechaDePublicacion: "2024-06-29",
        cantidadDeFotos: 8,
        metrosCuadrados: 467,
        precioDeVenta: 378060
    },
    {
        nombre: "Propiedad 1407",
        direccion: "Calle 2, Bilbao",
        fechaDePublicacion: "2024-06-15",
        cantidadDeFotos: 18,
        metrosCuadrados: 291,
        precioDeVenta: 272141
    },
    {
        nombre: "Propiedad 1408",
        direccion: "Calle 84, Zaragoza",
        fechaDePublicacion: "2024-06-13",
        cantidadDeFotos: 8,
        metrosCuadrados: 439,
        precioDeVenta: 154170
    },
    {
        nombre: "Propiedad 1409",
        direccion: "Calle 91, Palma",
        fechaDePublicacion: "2024-06-08",
        cantidadDeFotos: 19,
        metrosCuadrados: 57,
        precioDeVenta: 80781
    },
    {
        nombre: "Propiedad 1410",
        direccion: "Calle 1, Zaragoza",
        fechaDePublicacion: "2024-05-31",
        cantidadDeFotos: 17,
        metrosCuadrados: 263,
        precioDeVenta: 381904
    },
    {
        nombre: "Propiedad 1411",
        direccion: "Calle 62, Madrid",
        fechaDePublicacion: "2024-06-02",
        cantidadDeFotos: 10,
        metrosCuadrados: 146,
        precioDeVenta: 731746
    },
    {
        nombre: "Propiedad 1412",
        direccion: "Calle 26, Bilbao",
        fechaDePublicacion: "2024-06-13",
        cantidadDeFotos: 14,
        metrosCuadrados: 448,
        precioDeVenta: 355448
    },
    {
        nombre: "Propiedad 1413",
        direccion: "Calle 18, Málaga",
        fechaDePublicacion: "2024-06-07",
        cantidadDeFotos: 4,
        metrosCuadrados: 480,
        precioDeVenta: 304703
    },
    {
        nombre: "Propiedad 1414",
        direccion: "Calle 71, Málaga",
        fechaDePublicacion: "2024-06-11",
        cantidadDeFotos: 14,
        metrosCuadrados: 70,
        precioDeVenta: 714563
    },
    {
        nombre: "Propiedad 1415",
        direccion: "Calle 25, Zaragoza",
        fechaDePublicacion: "2024-06-14",
        cantidadDeFotos: 18,
        metrosCuadrados: 216,
        precioDeVenta: 503042
    },
    {
        nombre: "Propiedad 1416",
        direccion: "Calle 27, Sevilla",
        fechaDePublicacion: "2024-06-14",
        cantidadDeFotos: 18,
        metrosCuadrados: 463,
        precioDeVenta: 657070
    },
    {
        nombre: "Propiedad 1417",
        direccion: "Calle 31, Madrid",
        fechaDePublicacion: "2024-06-02",
        cantidadDeFotos: 7,
        metrosCuadrados: 259,
        precioDeVenta: 781973
    },
    {
        nombre: "Propiedad 1418",
        direccion: "Calle 55, Palma",
        fechaDePublicacion: "2024-06-19",
        cantidadDeFotos: 2,
        metrosCuadrados: 283,
        precioDeVenta: 178335
    },
    {
        nombre: "Propiedad 1419",
        direccion: "Calle 98, Madrid",
        fechaDePublicacion: "2024-06-22",
        cantidadDeFotos: 13,
        metrosCuadrados: 390,
        precioDeVenta: 319466
    },
    {
        nombre: "Propiedad 1420",
        direccion: "Calle 34, Murcia",
        fechaDePublicacion: "2024-06-03",
        cantidadDeFotos: 6,
        metrosCuadrados: 435,
        precioDeVenta: 135669
    },
    {
        nombre: "Propiedad 1421",
        direccion: "Calle 51, Bilbao",
        fechaDePublicacion: "2024-06-14",
        cantidadDeFotos: 16,
        metrosCuadrados: 409,
        precioDeVenta: 757125
    },
    {
        nombre: "Propiedad 1422",
        direccion: "Calle 89, Valencia",
        fechaDePublicacion: "2024-06-13",
        cantidadDeFotos: 14,
        metrosCuadrados: 322,
        precioDeVenta: 501030
    },
    {
        nombre: "Propiedad 1423",
        direccion: "Calle 32, Madrid",
        fechaDePublicacion: "2024-06-12",
        cantidadDeFotos: 10,
        metrosCuadrados: 126,
        precioDeVenta: 303336
    },
    {
        nombre: "Propiedad 1424",
        direccion: "Calle 70, Zaragoza",
        fechaDePublicacion: "2024-06-16",
        cantidadDeFotos: 17,
        metrosCuadrados: 201,
        precioDeVenta: 498204
    },
    {
        nombre: "Propiedad 1425",
        direccion: "Calle 98, Barcelona",
        fechaDePublicacion: "2024-06-13",
        cantidadDeFotos: 15,
        metrosCuadrados: 79,
        precioDeVenta: 553351
    },
    {
        nombre: "Propiedad 1426",
        direccion: "Calle 65, Sevilla",
        fechaDePublicacion: "2024-06-25",
        cantidadDeFotos: 18,
        metrosCuadrados: 139,
        precioDeVenta: 156262
    },
    {
        nombre: "Propiedad 1427",
        direccion: "Calle 15, Bilbao",
        fechaDePublicacion: "2024-06-27",
        cantidadDeFotos: 19,
        metrosCuadrados: 442,
        precioDeVenta: 489463
    },
    {
        nombre: "Propiedad 1428",
        direccion: "Calle 78, Murcia",
        fechaDePublicacion: "2024-06-03",
        cantidadDeFotos: 10,
        metrosCuadrados: 272,
        precioDeVenta: 735463
    },
    {
        nombre: "Propiedad 1429",
        direccion: "Calle 53, Sevilla",
        fechaDePublicacion: "2024-06-02",
        cantidadDeFotos: 2,
        metrosCuadrados: 112,
        precioDeVenta: 561957
    },
    {
        nombre: "Propiedad 1430",
        direccion: "Calle 37, Madrid",
        fechaDePublicacion: "2024-06-11",
        cantidadDeFotos: 8,
        metrosCuadrados: 330,
        precioDeVenta: 719001
    },
    {
        nombre: "Propiedad 1431",
        direccion: "Calle 67, Madrid",
        fechaDePublicacion: "2024-06-17",
        cantidadDeFotos: 16,
        metrosCuadrados: 284,
        precioDeVenta: 219892
    },
    {
        nombre: "Propiedad 1432",
        direccion: "Calle 80, Málaga",
        fechaDePublicacion: "2024-06-26",
        cantidadDeFotos: 2,
        metrosCuadrados: 425,
        precioDeVenta: 541365
    },
    {
        nombre: "Propiedad 1433",
        direccion: "Calle 79, Sevilla",
        fechaDePublicacion: "2024-06-29",
        cantidadDeFotos: 14,
        metrosCuadrados: 255,
        precioDeVenta: 249125
    },
    {
        nombre: "Propiedad 1434",
        direccion: "Calle 37, Valencia",
        fechaDePublicacion: "2024-06-01",
        cantidadDeFotos: 10,
        metrosCuadrados: 319,
        precioDeVenta: 78686
    },
    {
        nombre: "Propiedad 1435",
        direccion: "Calle 5, Sevilla",
        fechaDePublicacion: "2024-06-21",
        cantidadDeFotos: 18,
        metrosCuadrados: 105,
        precioDeVenta: 411158
    },
    {
        nombre: "Propiedad 1436",
        direccion: "Calle 76, Sevilla",
        fechaDePublicacion: "2024-06-24",
        cantidadDeFotos: 7,
        metrosCuadrados: 151,
        precioDeVenta: 827488
    },
    {
        nombre: "Propiedad 1437",
        direccion: "Calle 78, Madrid",
        fechaDePublicacion: "2024-06-05",
        cantidadDeFotos: 18,
        metrosCuadrados: 132,
        precioDeVenta: 432640
    },
    {
        nombre: "Propiedad 1438",
        direccion: "Calle 85, Barcelona",
        fechaDePublicacion: "2024-06-28",
        cantidadDeFotos: 6,
        metrosCuadrados: 387,
        precioDeVenta: 858887
    },
    {
        nombre: "Propiedad 1439",
        direccion: "Calle 84, Valencia",
        fechaDePublicacion: "2024-06-25",
        cantidadDeFotos: 9,
        metrosCuadrados: 448,
        precioDeVenta: 106414
    },
    {
        nombre: "Propiedad 1440",
        direccion: "Calle 7, Murcia",
        fechaDePublicacion: "2024-06-03",
        cantidadDeFotos: 11,
        metrosCuadrados: 275,
        precioDeVenta: 401329
    },
    {
        nombre: "Propiedad 1441",
        direccion: "Calle 40, Málaga",
        fechaDePublicacion: "2024-06-21",
        cantidadDeFotos: 11,
        metrosCuadrados: 86,
        precioDeVenta: 951254
    },
    {
        nombre: "Propiedad 1442",
        direccion: "Calle 97, Barcelona",
        fechaDePublicacion: "2024-06-08",
        cantidadDeFotos: 18,
        metrosCuadrados: 72,
        precioDeVenta: 360737
    },
    {
        nombre: "Propiedad 1443",
        direccion: "Calle 98, Bilbao",
        fechaDePublicacion: "2024-06-04",
        cantidadDeFotos: 16,
        metrosCuadrados: 460,
        precioDeVenta: 522288
    },
    {
        nombre: "Propiedad 1444",
        direccion: "Calle 26, Bilbao",
        fechaDePublicacion: "2024-06-26",
        cantidadDeFotos: 5,
        metrosCuadrados: 110,
        precioDeVenta: 602233
    },
    {
        nombre: "Propiedad 1445",
        direccion: "Calle 79, Málaga",
        fechaDePublicacion: "2024-06-09",
        cantidadDeFotos: 3,
        metrosCuadrados: 357,
        precioDeVenta: 249014
    },
    {
        nombre: "Propiedad 1446",
        direccion: "Calle 31, Málaga",
        fechaDePublicacion: "2024-06-04",
        cantidadDeFotos: 18,
        metrosCuadrados: 56,
        precioDeVenta: 659992
    },
    {
        nombre: "Propiedad 1447",
        direccion: "Calle 63, Sevilla",
        fechaDePublicacion: "2024-06-09",
        cantidadDeFotos: 12,
        metrosCuadrados: 110,
        precioDeVenta: 911261
    },
    {
        nombre: "Propiedad 1448",
        direccion: "Calle 38, Bilbao",
        fechaDePublicacion: "2024-06-12",
        cantidadDeFotos: 9,
        metrosCuadrados: 122,
        precioDeVenta: 604028
    },
    {
        nombre: "Propiedad 1449",
        direccion: "Calle 17, Valencia",
        fechaDePublicacion: "2024-06-21",
        cantidadDeFotos: 17,
        metrosCuadrados: 159,
        precioDeVenta: 296800
    },
    {
        nombre: "Propiedad 1450",
        direccion: "Calle 96, Zaragoza",
        fechaDePublicacion: "2024-06-01",
        cantidadDeFotos: 15,
        metrosCuadrados: 212,
        precioDeVenta: 383886
    },
    {
        nombre: "Propiedad 1451",
        direccion: "Calle 19, Barcelona",
        fechaDePublicacion: "2024-06-25",
        cantidadDeFotos: 7,
        metrosCuadrados: 200,
        precioDeVenta: 83438
    },
    {
        nombre: "Propiedad 1452",
        direccion: "Calle 24, Málaga",
        fechaDePublicacion: "2024-06-14",
        cantidadDeFotos: 7,
        metrosCuadrados: 104,
        precioDeVenta: 349250
    },
    {
        nombre: "Propiedad 1453",
        direccion: "Calle 91, Zaragoza",
        fechaDePublicacion: "2024-06-07",
        cantidadDeFotos: 5,
        metrosCuadrados: 311,
        precioDeVenta: 666215
    },
    {
        nombre: "Propiedad 1454",
        direccion: "Calle 22, Bilbao",
        fechaDePublicacion: "2024-06-14",
        cantidadDeFotos: 6,
        metrosCuadrados: 224,
        precioDeVenta: 653066
    },
    {
        nombre: "Propiedad 1455",
        direccion: "Calle 83, Madrid",
        fechaDePublicacion: "2024-06-26",
        cantidadDeFotos: 6,
        metrosCuadrados: 144,
        precioDeVenta: 99973
    },
    {
        nombre: "Propiedad 1456",
        direccion: "Calle 5, Barcelona",
        fechaDePublicacion: "2024-06-13",
        cantidadDeFotos: 3,
        metrosCuadrados: 248,
        precioDeVenta: 169175
    },
    {
        nombre: "Propiedad 1457",
        direccion: "Calle 78, Las Palmas de Gran Canaria",
        fechaDePublicacion: "2024-06-13",
        cantidadDeFotos: 8,
        metrosCuadrados: 467,
        precioDeVenta: 908786
    },
    {
        nombre: "Propiedad 1458",
        direccion: "Calle 36, Valencia",
        fechaDePublicacion: "2024-06-18",
        cantidadDeFotos: 6,
        metrosCuadrados: 80,
        precioDeVenta: 463108
    },
    {
        nombre: "Propiedad 1459",
        direccion: "Calle 81, Sevilla",
        fechaDePublicacion: "2024-06-25",
        cantidadDeFotos: 14,
        metrosCuadrados: 314,
        precioDeVenta: 690005
    },
    {
        nombre: "Propiedad 1460",
        direccion: "Calle 15, Las Palmas de Gran Canaria",
        fechaDePublicacion: "2024-06-22",
        cantidadDeFotos: 15,
        metrosCuadrados: 202,
        precioDeVenta: 697858
    },
    {
        nombre: "Propiedad 1461",
        direccion: "Calle 40, Palma",
        fechaDePublicacion: "2024-06-10",
        cantidadDeFotos: 7,
        metrosCuadrados: 400,
        precioDeVenta: 511945
    },
    {
        nombre: "Propiedad 1462",
        direccion: "Calle 17, Valencia",
        fechaDePublicacion: "2024-06-02",
        cantidadDeFotos: 6,
        metrosCuadrados: 289,
        precioDeVenta: 820363
    },
    {
        nombre: "Propiedad 1463",
        direccion: "Calle 4, Sevilla",
        fechaDePublicacion: "2024-06-23",
        cantidadDeFotos: 2,
        metrosCuadrados: 77,
        precioDeVenta: 146963
    },
    {
        nombre: "Propiedad 1464",
        direccion: "Calle 9, Madrid",
        fechaDePublicacion: "2024-06-01",
        cantidadDeFotos: 7,
        metrosCuadrados: 324,
        precioDeVenta: 285509
    },
    {
        nombre: "Propiedad 1465",
        direccion: "Calle 98, Bilbao",
        fechaDePublicacion: "2024-06-10",
        cantidadDeFotos: 18,
        metrosCuadrados: 215,
        precioDeVenta: 276687
    },
    {
        nombre: "Propiedad 1466",
        direccion: "Calle 21, Las Palmas de Gran Canaria",
        fechaDePublicacion: "2024-06-16",
        cantidadDeFotos: 15,
        metrosCuadrados: 135,
        precioDeVenta: 926941
    },
    {
        nombre: "Propiedad 1467",
        direccion: "Calle 44, Las Palmas de Gran Canaria",
        fechaDePublicacion: "2024-06-04",
        cantidadDeFotos: 2,
        metrosCuadrados: 324,
        precioDeVenta: 909151
    },
    {
        nombre: "Propiedad 1468",
        direccion: "Calle 31, Bilbao",
        fechaDePublicacion: "2024-06-08",
        cantidadDeFotos: 20,
        metrosCuadrados: 154,
        precioDeVenta: 351106
    },
    {
        nombre: "Propiedad 1469",
        direccion: "Calle 78, Las Palmas de Gran Canaria",
        fechaDePublicacion: "2024-06-16",
        cantidadDeFotos: 3,
        metrosCuadrados: 127,
        precioDeVenta: 175479
    },
    {
        nombre: "Propiedad 1470",
        direccion: "Calle 19, Murcia",
        fechaDePublicacion: "2024-06-25",
        cantidadDeFotos: 13,
        metrosCuadrados: 103,
        precioDeVenta: 217812
    },
    {
        nombre: "Propiedad 1471",
        direccion: "Calle 64, Bilbao",
        fechaDePublicacion: "2024-06-09",
        cantidadDeFotos: 14,
        metrosCuadrados: 296,
        precioDeVenta: 274672
    },
    {
        nombre: "Propiedad 1472",
        direccion: "Calle 66, Murcia",
        fechaDePublicacion: "2024-06-13",
        cantidadDeFotos: 13,
        metrosCuadrados: 394,
        precioDeVenta: 153352
    },
    {
        nombre: "Propiedad 1473",
        direccion: "Calle 41, Valencia",
        fechaDePublicacion: "2024-06-28",
        cantidadDeFotos: 14,
        metrosCuadrados: 62,
        precioDeVenta: 685818
    },
    {
        nombre: "Propiedad 1474",
        direccion: "Calle 33, Zaragoza",
        fechaDePublicacion: "2024-06-28",
        cantidadDeFotos: 20,
        metrosCuadrados: 466,
        precioDeVenta: 835185
    },
    {
        nombre: "Propiedad 1475",
        direccion: "Calle 83, Sevilla",
        fechaDePublicacion: "2024-06-24",
        cantidadDeFotos: 4,
        metrosCuadrados: 194,
        precioDeVenta: 183375
    },
    {
        nombre: "Propiedad 1476",
        direccion: "Calle 52, Madrid",
        fechaDePublicacion: "2024-06-08",
        cantidadDeFotos: 15,
        metrosCuadrados: 155,
        precioDeVenta: 215140
    },
    {
        nombre: "Propiedad 1477",
        direccion: "Calle 6, Murcia",
        fechaDePublicacion: "2024-06-19",
        cantidadDeFotos: 12,
        metrosCuadrados: 201,
        precioDeVenta: 351986
    },
    {
        nombre: "Propiedad 1478",
        direccion: "Calle 42, Las Palmas de Gran Canaria",
        fechaDePublicacion: "2024-06-06",
        cantidadDeFotos: 18,
        metrosCuadrados: 272,
        precioDeVenta: 75822
    },
    {
        nombre: "Propiedad 1479",
        direccion: "Calle 72, Valencia",
        fechaDePublicacion: "2024-06-27",
        cantidadDeFotos: 5,
        metrosCuadrados: 201,
        precioDeVenta: 456424
    },
    {
        nombre: "Propiedad 1480",
        direccion: "Calle 4, Málaga",
        fechaDePublicacion: "2024-06-11",
        cantidadDeFotos: 1,
        metrosCuadrados: 454,
        precioDeVenta: 507568
    },
    {
        nombre: "Propiedad 1481",
        direccion: "Calle 22, Las Palmas de Gran Canaria",
        fechaDePublicacion: "2024-06-12",
        cantidadDeFotos: 16,
        metrosCuadrados: 118,
        precioDeVenta: 85574
    },
    {
        nombre: "Propiedad 1482",
        direccion: "Calle 2, Valencia",
        fechaDePublicacion: "2024-06-11",
        cantidadDeFotos: 6,
        metrosCuadrados: 168,
        precioDeVenta: 330751
    },
    {
        nombre: "Propiedad 1483",
        direccion: "Calle 18, Palma",
        fechaDePublicacion: "2024-06-13",
        cantidadDeFotos: 2,
        metrosCuadrados: 181,
        precioDeVenta: 820316
    },
    {
        nombre: "Propiedad 1484",
        direccion: "Calle 78, Bilbao",
        fechaDePublicacion: "2024-06-01",
        cantidadDeFotos: 19,
        metrosCuadrados: 352,
        precioDeVenta: 260346
    },
    {
        nombre: "Propiedad 1485",
        direccion: "Calle 91, Madrid",
        fechaDePublicacion: "2024-06-24",
        cantidadDeFotos: 7,
        metrosCuadrados: 227,
        precioDeVenta: 986298
    },
    {
        nombre: "Propiedad 1486",
        direccion: "Calle 1, Sevilla",
        fechaDePublicacion: "2024-06-07",
        cantidadDeFotos: 5,
        metrosCuadrados: 100,
        precioDeVenta: 704651
    },
    {
        nombre: "Propiedad 1487",
        direccion: "Calle 57, Madrid",
        fechaDePublicacion: "2024-06-14",
        cantidadDeFotos: 5,
        metrosCuadrados: 399,
        precioDeVenta: 847686
    },
    {
        nombre: "Propiedad 1488",
        direccion: "Calle 87, Valencia",
        fechaDePublicacion: "2024-06-14",
        cantidadDeFotos: 3,
        metrosCuadrados: 249,
        precioDeVenta: 696178
    },
    {
        nombre: "Propiedad 1489",
        direccion: "Calle 56, Madrid",
        fechaDePublicacion: "2024-06-04",
        cantidadDeFotos: 12,
        metrosCuadrados: 131,
        precioDeVenta: 727161
    },
    {
        nombre: "Propiedad 1490",
        direccion: "Calle 32, Bilbao",
        fechaDePublicacion: "2024-06-26",
        cantidadDeFotos: 2,
        metrosCuadrados: 325,
        precioDeVenta: 821782
    },
    {
        nombre: "Propiedad 1491",
        direccion: "Calle 43, Valencia",
        fechaDePublicacion: "2024-06-23",
        cantidadDeFotos: 16,
        metrosCuadrados: 483,
        precioDeVenta: 554722
    },
    {
        nombre: "Propiedad 1492",
        direccion: "Calle 55, Valencia",
        fechaDePublicacion: "2024-06-14",
        cantidadDeFotos: 12,
        metrosCuadrados: 350,
        precioDeVenta: 859895
    },
    {
        nombre: "Propiedad 1493",
        direccion: "Calle 79, Palma",
        fechaDePublicacion: "2024-06-13",
        cantidadDeFotos: 12,
        metrosCuadrados: 497,
        precioDeVenta: 331736
    },
    {
        nombre: "Propiedad 1494",
        direccion: "Calle 73, Las Palmas de Gran Canaria",
        fechaDePublicacion: "2024-06-04",
        cantidadDeFotos: 19,
        metrosCuadrados: 312,
        precioDeVenta: 311798
    },
    {
        nombre: "Propiedad 1495",
        direccion: "Calle 41, Zaragoza",
        fechaDePublicacion: "2024-06-12",
        cantidadDeFotos: 8,
        metrosCuadrados: 115,
        precioDeVenta: 415870
    },
    {
        nombre: "Propiedad 1496",
        direccion: "Calle 84, Madrid",
        fechaDePublicacion: "2024-06-28",
        cantidadDeFotos: 10,
        metrosCuadrados: 434,
        precioDeVenta: 807897
    },
    {
        nombre: "Propiedad 1497",
        direccion: "Calle 68, Valencia",
        fechaDePublicacion: "2024-06-13",
        cantidadDeFotos: 7,
        metrosCuadrados: 490,
        precioDeVenta: 606402
    },
    {
        nombre: "Propiedad 1498",
        direccion: "Calle 1, Valencia",
        fechaDePublicacion: "2024-06-03",
        cantidadDeFotos: 7,
        metrosCuadrados: 375,
        precioDeVenta: 460351
    },
    {
        nombre: "Propiedad 1499",
        direccion: "Calle 22, Bilbao",
        fechaDePublicacion: "2024-06-20",
        cantidadDeFotos: 6,
        metrosCuadrados: 468,
        precioDeVenta: 348225
    },
    {
        nombre: "Propiedad 1500",
        direccion: "Calle 64, Palma",
        fechaDePublicacion: "2024-06-17",
        cantidadDeFotos: 15,
        metrosCuadrados: 388,
        precioDeVenta: 692503
    },
    {
        nombre: "Propiedad 1501",
        direccion: "Calle 91, Zaragoza",
        fechaDePublicacion: "2024-06-29",
        cantidadDeFotos: 17,
        metrosCuadrados: 277,
        precioDeVenta: 117499
    },
    {
        nombre: "Propiedad 1502",
        direccion: "Calle 45, Murcia",
        fechaDePublicacion: "2024-06-21",
        cantidadDeFotos: 7,
        metrosCuadrados: 455,
        precioDeVenta: 737552
    },
    {
        nombre: "Propiedad 1503",
        direccion: "Calle 47, Barcelona",
        fechaDePublicacion: "2024-06-06",
        cantidadDeFotos: 4,
        metrosCuadrados: 333,
        precioDeVenta: 728699
    },
    {
        nombre: "Propiedad 1504",
        direccion: "Calle 7, Las Palmas de Gran Canaria",
        fechaDePublicacion: "2024-06-07",
        cantidadDeFotos: 1,
        metrosCuadrados: 109,
        precioDeVenta: 792902
    },
    {
        nombre: "Propiedad 1505",
        direccion: "Calle 60, Zaragoza",
        fechaDePublicacion: "2024-06-29",
        cantidadDeFotos: 7,
        metrosCuadrados: 493,
        precioDeVenta: 213563
    },
    {
        nombre: "Propiedad 1506",
        direccion: "Calle 79, Palma",
        fechaDePublicacion: "2024-06-18",
        cantidadDeFotos: 9,
        metrosCuadrados: 199,
        precioDeVenta: 828123
    },
    {
        nombre: "Propiedad 1507",
        direccion: "Calle 15, Madrid",
        fechaDePublicacion: "2024-06-08",
        cantidadDeFotos: 14,
        metrosCuadrados: 141,
        precioDeVenta: 817827
    },
    {
        nombre: "Propiedad 1508",
        direccion: "Calle 70, Madrid",
        fechaDePublicacion: "2024-06-13",
        cantidadDeFotos: 12,
        metrosCuadrados: 52,
        precioDeVenta: 437322
    },
    {
        nombre: "Propiedad 1509",
        direccion: "Calle 36, Las Palmas de Gran Canaria",
        fechaDePublicacion: "2024-06-03",
        cantidadDeFotos: 15,
        metrosCuadrados: 485,
        precioDeVenta: 658535
    },
    {
        nombre: "Propiedad 1510",
        direccion: "Calle 82, Málaga",
        fechaDePublicacion: "2024-06-29",
        cantidadDeFotos: 9,
        metrosCuadrados: 138,
        precioDeVenta: 697396
    },
    {
        nombre: "Propiedad 1511",
        direccion: "Calle 44, Palma",
        fechaDePublicacion: "2024-06-27",
        cantidadDeFotos: 14,
        metrosCuadrados: 101,
        precioDeVenta: 546041
    },
    {
        nombre: "Propiedad 1512",
        direccion: "Calle 54, Bilbao",
        fechaDePublicacion: "2024-06-25",
        cantidadDeFotos: 19,
        metrosCuadrados: 90,
        precioDeVenta: 262451
    },
    {
        nombre: "Propiedad 1513",
        direccion: "Calle 76, Sevilla",
        fechaDePublicacion: "2024-06-06",
        cantidadDeFotos: 9,
        metrosCuadrados: 422,
        precioDeVenta: 781860
    },
    {
        nombre: "Propiedad 1514",
        direccion: "Calle 81, Madrid",
        fechaDePublicacion: "2024-06-15",
        cantidadDeFotos: 4,
        metrosCuadrados: 320,
        precioDeVenta: 615629
    },
    {
        nombre: "Propiedad 1515",
        direccion: "Calle 67, Palma",
        fechaDePublicacion: "2024-06-17",
        cantidadDeFotos: 6,
        metrosCuadrados: 475,
        precioDeVenta: 415919
    },
    {
        nombre: "Propiedad 1516",
        direccion: "Calle 59, Barcelona",
        fechaDePublicacion: "2024-06-22",
        cantidadDeFotos: 15,
        metrosCuadrados: 400,
        precioDeVenta: 817311
    },
    {
        nombre: "Propiedad 1517",
        direccion: "Calle 54, Valencia",
        fechaDePublicacion: "2024-06-15",
        cantidadDeFotos: 16,
        metrosCuadrados: 274,
        precioDeVenta: 845561
    },
    {
        nombre: "Propiedad 1518",
        direccion: "Calle 47, Las Palmas de Gran Canaria",
        fechaDePublicacion: "2024-06-24",
        cantidadDeFotos: 10,
        metrosCuadrados: 273,
        precioDeVenta: 992804
    },
    {
        nombre: "Propiedad 1519",
        direccion: "Calle 99, Valencia",
        fechaDePublicacion: "2024-06-05",
        cantidadDeFotos: 11,
        metrosCuadrados: 233,
        precioDeVenta: 68450
    },
    {
        nombre: "Propiedad 1520",
        direccion: "Calle 67, Barcelona",
        fechaDePublicacion: "2024-06-03",
        cantidadDeFotos: 20,
        metrosCuadrados: 138,
        precioDeVenta: 144437
    },
    {
        nombre: "Propiedad 1521",
        direccion: "Calle 44, Las Palmas de Gran Canaria",
        fechaDePublicacion: "2024-06-18",
        cantidadDeFotos: 4,
        metrosCuadrados: 179,
        precioDeVenta: 807434
    },
    {
        nombre: "Propiedad 1522",
        direccion: "Calle 18, Málaga",
        fechaDePublicacion: "2024-06-02",
        cantidadDeFotos: 8,
        metrosCuadrados: 269,
        precioDeVenta: 156119
    },
    {
        nombre: "Propiedad 1523",
        direccion: "Calle 95, Las Palmas de Gran Canaria",
        fechaDePublicacion: "2024-06-14",
        cantidadDeFotos: 14,
        metrosCuadrados: 345,
        precioDeVenta: 80249
    },
    {
        nombre: "Propiedad 1524",
        direccion: "Calle 89, Las Palmas de Gran Canaria",
        fechaDePublicacion: "2024-06-09",
        cantidadDeFotos: 20,
        metrosCuadrados: 391,
        precioDeVenta: 175672
    },
    {
        nombre: "Propiedad 1525",
        direccion: "Calle 45, Bilbao",
        fechaDePublicacion: "2024-06-29",
        cantidadDeFotos: 3,
        metrosCuadrados: 467,
        precioDeVenta: 611574
    },
    {
        nombre: "Propiedad 1526",
        direccion: "Calle 60, Murcia",
        fechaDePublicacion: "2024-06-09",
        cantidadDeFotos: 9,
        metrosCuadrados: 490,
        precioDeVenta: 990643
    },
    {
        nombre: "Propiedad 1527",
        direccion: "Calle 8, Málaga",
        fechaDePublicacion: "2024-06-03",
        cantidadDeFotos: 8,
        metrosCuadrados: 255,
        precioDeVenta: 97371
    },
    {
        nombre: "Propiedad 1528",
        direccion: "Calle 72, Palma",
        fechaDePublicacion: "2024-06-14",
        cantidadDeFotos: 2,
        metrosCuadrados: 274,
        precioDeVenta: 750683
    },
    {
        nombre: "Propiedad 1529",
        direccion: "Calle 89, Las Palmas de Gran Canaria",
        fechaDePublicacion: "2024-06-25",
        cantidadDeFotos: 9,
        metrosCuadrados: 328,
        precioDeVenta: 526630
    },
    {
        nombre: "Propiedad 1530",
        direccion: "Calle 23, Bilbao",
        fechaDePublicacion: "2024-06-18",
        cantidadDeFotos: 8,
        metrosCuadrados: 95,
        precioDeVenta: 119058
    },
    {
        nombre: "Propiedad 1531",
        direccion: "Calle 17, Valencia",
        fechaDePublicacion: "2024-06-11",
        cantidadDeFotos: 9,
        metrosCuadrados: 321,
        precioDeVenta: 90974
    },
    {
        nombre: "Propiedad 1532",
        direccion: "Calle 29, Madrid",
        fechaDePublicacion: "2024-06-04",
        cantidadDeFotos: 6,
        metrosCuadrados: 258,
        precioDeVenta: 968375
    },
    {
        nombre: "Propiedad 1533",
        direccion: "Calle 68, Valencia",
        fechaDePublicacion: "2024-06-27",
        cantidadDeFotos: 2,
        metrosCuadrados: 160,
        precioDeVenta: 539098
    },
    {
        nombre: "Propiedad 1534",
        direccion: "Calle 51, Valencia",
        fechaDePublicacion: "2024-06-12",
        cantidadDeFotos: 8,
        metrosCuadrados: 415,
        precioDeVenta: 593466
    },
    {
        nombre: "Propiedad 1535",
        direccion: "Calle 93, Las Palmas de Gran Canaria",
        fechaDePublicacion: "2024-06-17",
        cantidadDeFotos: 12,
        metrosCuadrados: 154,
        precioDeVenta: 744429
    },
    {
        nombre: "Propiedad 1536",
        direccion: "Calle 58, Bilbao",
        fechaDePublicacion: "2024-06-07",
        cantidadDeFotos: 12,
        metrosCuadrados: 218,
        precioDeVenta: 923446
    },
    {
        nombre: "Propiedad 1537",
        direccion: "Calle 54, Bilbao",
        fechaDePublicacion: "2024-06-20",
        cantidadDeFotos: 13,
        metrosCuadrados: 135,
        precioDeVenta: 158028
    },
    {
        nombre: "Propiedad 1538",
        direccion: "Calle 17, Murcia",
        fechaDePublicacion: "2024-06-23",
        cantidadDeFotos: 13,
        metrosCuadrados: 317,
        precioDeVenta: 609383
    },
    {
        nombre: "Propiedad 1539",
        direccion: "Calle 16, Barcelona",
        fechaDePublicacion: "2024-06-28",
        cantidadDeFotos: 17,
        metrosCuadrados: 449,
        precioDeVenta: 245040
    },
    {
        nombre: "Propiedad 1540",
        direccion: "Calle 85, Bilbao",
        fechaDePublicacion: "2024-06-09",
        cantidadDeFotos: 7,
        metrosCuadrados: 370,
        precioDeVenta: 112784
    },
    {
        nombre: "Propiedad 1541",
        direccion: "Calle 57, Madrid",
        fechaDePublicacion: "2024-06-21",
        cantidadDeFotos: 6,
        metrosCuadrados: 390,
        precioDeVenta: 109662
    },
    {
        nombre: "Propiedad 1542",
        direccion: "Calle 46, Sevilla",
        fechaDePublicacion: "2024-06-24",
        cantidadDeFotos: 1,
        metrosCuadrados: 362,
        precioDeVenta: 293447
    },
    {
        nombre: "Propiedad 1543",
        direccion: "Calle 59, Zaragoza",
        fechaDePublicacion: "2024-06-09",
        cantidadDeFotos: 10,
        metrosCuadrados: 341,
        precioDeVenta: 252772
    },
    {
        nombre: "Propiedad 1544",
        direccion: "Calle 23, Zaragoza",
        fechaDePublicacion: "2024-06-20",
        cantidadDeFotos: 8,
        metrosCuadrados: 113,
        precioDeVenta: 441324
    },
    {
        nombre: "Propiedad 1545",
        direccion: "Calle 98, Bilbao",
        fechaDePublicacion: "2024-06-24",
        cantidadDeFotos: 13,
        metrosCuadrados: 417,
        precioDeVenta: 185282
    },
    {
        nombre: "Propiedad 1546",
        direccion: "Calle 84, Zaragoza",
        fechaDePublicacion: "2024-06-10",
        cantidadDeFotos: 5,
        metrosCuadrados: 431,
        precioDeVenta: 737138
    },
    {
        nombre: "Propiedad 1547",
        direccion: "Calle 93, Las Palmas de Gran Canaria",
        fechaDePublicacion: "2024-06-04",
        cantidadDeFotos: 16,
        metrosCuadrados: 169,
        precioDeVenta: 113958
    },
    {
        nombre: "Propiedad 1548",
        direccion: "Calle 73, Barcelona",
        fechaDePublicacion: "2024-06-29",
        cantidadDeFotos: 12,
        metrosCuadrados: 118,
        precioDeVenta: 62118
    },
    {
        nombre: "Propiedad 1549",
        direccion: "Calle 40, Murcia",
        fechaDePublicacion: "2024-06-17",
        cantidadDeFotos: 18,
        metrosCuadrados: 182,
        precioDeVenta: 474601
    },
    {
        nombre: "Propiedad 1550",
        direccion: "Calle 87, Bilbao",
        fechaDePublicacion: "2024-06-06",
        cantidadDeFotos: 11,
        metrosCuadrados: 255,
        precioDeVenta: 581435
    },
    {
        nombre: "Propiedad 1551",
        direccion: "Calle 69, Sevilla",
        fechaDePublicacion: "2024-06-03",
        cantidadDeFotos: 2,
        metrosCuadrados: 237,
        precioDeVenta: 708206
    },
    {
        nombre: "Propiedad 1552",
        direccion: "Calle 57, Palma",
        fechaDePublicacion: "2024-06-26",
        cantidadDeFotos: 20,
        metrosCuadrados: 229,
        precioDeVenta: 84052
    },
    {
        nombre: "Propiedad 1553",
        direccion: "Calle 91, Valencia",
        fechaDePublicacion: "2024-06-16",
        cantidadDeFotos: 13,
        metrosCuadrados: 299,
        precioDeVenta: 749279
    },
    {
        nombre: "Propiedad 1554",
        direccion: "Calle 25, Bilbao",
        fechaDePublicacion: "2024-06-18",
        cantidadDeFotos: 8,
        metrosCuadrados: 427,
        precioDeVenta: 474094
    },
    {
        nombre: "Propiedad 1555",
        direccion: "Calle 4, Las Palmas de Gran Canaria",
        fechaDePublicacion: "2024-06-27",
        cantidadDeFotos: 5,
        metrosCuadrados: 327,
        precioDeVenta: 224885
    },
    {
        nombre: "Propiedad 1556",
        direccion: "Calle 50, Sevilla",
        fechaDePublicacion: "2024-06-03",
        cantidadDeFotos: 7,
        metrosCuadrados: 133,
        precioDeVenta: 119054
    },
    {
        nombre: "Propiedad 1557",
        direccion: "Calle 42, Palma",
        fechaDePublicacion: "2024-06-05",
        cantidadDeFotos: 14,
        metrosCuadrados: 125,
        precioDeVenta: 468986
    },
    {
        nombre: "Propiedad 1558",
        direccion: "Calle 74, Zaragoza",
        fechaDePublicacion: "2024-06-28",
        cantidadDeFotos: 19,
        metrosCuadrados: 176,
        precioDeVenta: 944315
    },
    {
        nombre: "Propiedad 1559",
        direccion: "Calle 96, Madrid",
        fechaDePublicacion: "2024-06-22",
        cantidadDeFotos: 18,
        metrosCuadrados: 212,
        precioDeVenta: 542040
    },
    {
        nombre: "Propiedad 1560",
        direccion: "Calle 90, Sevilla",
        fechaDePublicacion: "2024-06-27",
        cantidadDeFotos: 15,
        metrosCuadrados: 124,
        precioDeVenta: 108596
    },
    {
        nombre: "Propiedad 1561",
        direccion: "Calle 87, Las Palmas de Gran Canaria",
        fechaDePublicacion: "2024-06-07",
        cantidadDeFotos: 13,
        metrosCuadrados: 200,
        precioDeVenta: 471925
    },
    {
        nombre: "Propiedad 1562",
        direccion: "Calle 46, Palma",
        fechaDePublicacion: "2024-06-22",
        cantidadDeFotos: 2,
        metrosCuadrados: 361,
        precioDeVenta: 486994
    },
    {
        nombre: "Propiedad 1563",
        direccion: "Calle 61, Palma",
        fechaDePublicacion: "2024-06-10",
        cantidadDeFotos: 11,
        metrosCuadrados: 351,
        precioDeVenta: 58183
    },
    {
        nombre: "Propiedad 1564",
        direccion: "Calle 62, Murcia",
        fechaDePublicacion: "2024-06-21",
        cantidadDeFotos: 16,
        metrosCuadrados: 118,
        precioDeVenta: 299053
    },
    {
        nombre: "Propiedad 1565",
        direccion: "Calle 97, Barcelona",
        fechaDePublicacion: "2024-06-02",
        cantidadDeFotos: 19,
        metrosCuadrados: 424,
        precioDeVenta: 324256
    },
    {
        nombre: "Propiedad 1566",
        direccion: "Calle 69, Sevilla",
        fechaDePublicacion: "2024-06-04",
        cantidadDeFotos: 17,
        metrosCuadrados: 233,
        precioDeVenta: 545012
    },
    {
        nombre: "Propiedad 1567",
        direccion: "Calle 62, Palma",
        fechaDePublicacion: "2024-06-29",
        cantidadDeFotos: 17,
        metrosCuadrados: 438,
        precioDeVenta: 468530
    },
    {
        nombre: "Propiedad 1568",
        direccion: "Calle 41, Barcelona",
        fechaDePublicacion: "2024-06-07",
        cantidadDeFotos: 19,
        metrosCuadrados: 416,
        precioDeVenta: 404187
    },
    {
        nombre: "Propiedad 1569",
        direccion: "Calle 88, Valencia",
        fechaDePublicacion: "2024-06-28",
        cantidadDeFotos: 4,
        metrosCuadrados: 434,
        precioDeVenta: 136971
    },
    {
        nombre: "Propiedad 1570",
        direccion: "Calle 77, Murcia",
        fechaDePublicacion: "2024-06-11",
        cantidadDeFotos: 1,
        metrosCuadrados: 384,
        precioDeVenta: 581521
    },
    {
        nombre: "Propiedad 1571",
        direccion: "Calle 24, Madrid",
        fechaDePublicacion: "2024-06-22",
        cantidadDeFotos: 11,
        metrosCuadrados: 140,
        precioDeVenta: 330400
    },
    {
        nombre: "Propiedad 1572",
        direccion: "Calle 33, Barcelona",
        fechaDePublicacion: "2024-06-20",
        cantidadDeFotos: 16,
        metrosCuadrados: 303,
        precioDeVenta: 560167
    },
    {
        nombre: "Propiedad 1573",
        direccion: "Calle 4, Barcelona",
        fechaDePublicacion: "2024-06-10",
        cantidadDeFotos: 4,
        metrosCuadrados: 241,
        precioDeVenta: 843977
    },
    {
        nombre: "Propiedad 1574",
        direccion: "Calle 12, Bilbao",
        fechaDePublicacion: "2024-06-13",
        cantidadDeFotos: 8,
        metrosCuadrados: 55,
        precioDeVenta: 187650
    },
    {
        nombre: "Propiedad 1575",
        direccion: "Calle 61, Valencia",
        fechaDePublicacion: "2024-06-02",
        cantidadDeFotos: 12,
        metrosCuadrados: 235,
        precioDeVenta: 726878
    },
    {
        nombre: "Propiedad 1576",
        direccion: "Calle 13, Málaga",
        fechaDePublicacion: "2024-06-20",
        cantidadDeFotos: 1,
        metrosCuadrados: 392,
        precioDeVenta: 140075
    },
    {
        nombre: "Propiedad 1577",
        direccion: "Calle 20, Bilbao",
        fechaDePublicacion: "2024-06-14",
        cantidadDeFotos: 4,
        metrosCuadrados: 193,
        precioDeVenta: 394553
    },
    {
        nombre: "Propiedad 1578",
        direccion: "Calle 25, Sevilla",
        fechaDePublicacion: "2024-06-24",
        cantidadDeFotos: 17,
        metrosCuadrados: 295,
        precioDeVenta: 362319
    },
    {
        nombre: "Propiedad 1579",
        direccion: "Calle 86, Málaga",
        fechaDePublicacion: "2024-06-21",
        cantidadDeFotos: 15,
        metrosCuadrados: 97,
        precioDeVenta: 247016
    },
    {
        nombre: "Propiedad 1580",
        direccion: "Calle 1, Palma",
        fechaDePublicacion: "2024-06-18",
        cantidadDeFotos: 11,
        metrosCuadrados: 331,
        precioDeVenta: 323716
    },
    {
        nombre: "Propiedad 1581",
        direccion: "Calle 25, Zaragoza",
        fechaDePublicacion: "2024-06-10",
        cantidadDeFotos: 9,
        metrosCuadrados: 417,
        precioDeVenta: 449387
    },
    {
        nombre: "Propiedad 1582",
        direccion: "Calle 64, Las Palmas de Gran Canaria",
        fechaDePublicacion: "2024-06-13",
        cantidadDeFotos: 19,
        metrosCuadrados: 310,
        precioDeVenta: 548581
    },
    {
        nombre: "Propiedad 1583",
        direccion: "Calle 17, Barcelona",
        fechaDePublicacion: "2024-06-19",
        cantidadDeFotos: 3,
        metrosCuadrados: 425,
        precioDeVenta: 468928
    },
    {
        nombre: "Propiedad 1584",
        direccion: "Calle 39, Murcia",
        fechaDePublicacion: "2024-06-19",
        cantidadDeFotos: 7,
        metrosCuadrados: 457,
        precioDeVenta: 88668
    },
    {
        nombre: "Propiedad 1585",
        direccion: "Calle 14, Valencia",
        fechaDePublicacion: "2024-06-04",
        cantidadDeFotos: 10,
        metrosCuadrados: 311,
        precioDeVenta: 861080
    },
    {
        nombre: "Propiedad 1586",
        direccion: "Calle 68, Zaragoza",
        fechaDePublicacion: "2024-06-26",
        cantidadDeFotos: 8,
        metrosCuadrados: 173,
        precioDeVenta: 917421
    },
    {
        nombre: "Propiedad 1587",
        direccion: "Calle 18, Murcia",
        fechaDePublicacion: "2024-06-01",
        cantidadDeFotos: 3,
        metrosCuadrados: 374,
        precioDeVenta: 450789
    },
    {
        nombre: "Propiedad 1588",
        direccion: "Calle 9, Las Palmas de Gran Canaria",
        fechaDePublicacion: "2024-06-27",
        cantidadDeFotos: 20,
        metrosCuadrados: 150,
        precioDeVenta: 896685
    },
    {
        nombre: "Propiedad 1589",
        direccion: "Calle 62, Murcia",
        fechaDePublicacion: "2024-06-12",
        cantidadDeFotos: 5,
        metrosCuadrados: 336,
        precioDeVenta: 934889
    },
    {
        nombre: "Propiedad 1590",
        direccion: "Calle 31, Zaragoza",
        fechaDePublicacion: "2024-06-01",
        cantidadDeFotos: 8,
        metrosCuadrados: 177,
        precioDeVenta: 644294
    },
    {
        nombre: "Propiedad 1591",
        direccion: "Calle 48, Murcia",
        fechaDePublicacion: "2024-06-20",
        cantidadDeFotos: 13,
        metrosCuadrados: 336,
        precioDeVenta: 740280
    },
    {
        nombre: "Propiedad 1592",
        direccion: "Calle 3, Málaga",
        fechaDePublicacion: "2024-06-14",
        cantidadDeFotos: 10,
        metrosCuadrados: 147,
        precioDeVenta: 731336
    },
    {
        nombre: "Propiedad 1593",
        direccion: "Calle 13, Zaragoza",
        fechaDePublicacion: "2024-06-07",
        cantidadDeFotos: 12,
        metrosCuadrados: 213,
        precioDeVenta: 608731
    },
    {
        nombre: "Propiedad 1594",
        direccion: "Calle 7, Barcelona",
        fechaDePublicacion: "2024-06-17",
        cantidadDeFotos: 14,
        metrosCuadrados: 452,
        precioDeVenta: 544603
    },
    {
        nombre: "Propiedad 1595",
        direccion: "Calle 59, Las Palmas de Gran Canaria",
        fechaDePublicacion: "2024-06-13",
        cantidadDeFotos: 7,
        metrosCuadrados: 245,
        precioDeVenta: 927505
    },
    {
        nombre: "Propiedad 1596",
        direccion: "Calle 98, Sevilla",
        fechaDePublicacion: "2024-06-18",
        cantidadDeFotos: 18,
        metrosCuadrados: 392,
        precioDeVenta: 586929
    },
    {
        nombre: "Propiedad 1597",
        direccion: "Calle 13, Las Palmas de Gran Canaria",
        fechaDePublicacion: "2024-06-16",
        cantidadDeFotos: 10,
        metrosCuadrados: 148,
        precioDeVenta: 651315
    },
    {
        nombre: "Propiedad 1598",
        direccion: "Calle 59, Valencia",
        fechaDePublicacion: "2024-06-06",
        cantidadDeFotos: 17,
        metrosCuadrados: 56,
        precioDeVenta: 884690
    },
    {
        nombre: "Propiedad 1599",
        direccion: "Calle 15, Sevilla",
        fechaDePublicacion: "2024-06-23",
        cantidadDeFotos: 15,
        metrosCuadrados: 94,
        precioDeVenta: 600783
    },
    {
        nombre: "Propiedad 1600",
        direccion: "Calle 54, Sevilla",
        fechaDePublicacion: "2024-06-02",
        cantidadDeFotos: 11,
        metrosCuadrados: 170,
        precioDeVenta: 706911
    },
    {
        nombre: "Propiedad 1601",
        direccion: "Calle 21, Zaragoza",
        fechaDePublicacion: "2024-06-05",
        cantidadDeFotos: 12,
        metrosCuadrados: 377,
        precioDeVenta: 892309
    },
    {
        nombre: "Propiedad 1602",
        direccion: "Calle 23, Madrid",
        fechaDePublicacion: "2024-06-25",
        cantidadDeFotos: 2,
        metrosCuadrados: 462,
        precioDeVenta: 239832
    },
    {
        nombre: "Propiedad 1603",
        direccion: "Calle 82, Palma",
        fechaDePublicacion: "2024-06-11",
        cantidadDeFotos: 2,
        metrosCuadrados: 475,
        precioDeVenta: 69624
    },
    {
        nombre: "Propiedad 1604",
        direccion: "Calle 90, Barcelona",
        fechaDePublicacion: "2024-06-05",
        cantidadDeFotos: 12,
        metrosCuadrados: 320,
        precioDeVenta: 305914
    },
    {
        nombre: "Propiedad 1605",
        direccion: "Calle 52, Madrid",
        fechaDePublicacion: "2024-06-13",
        cantidadDeFotos: 16,
        metrosCuadrados: 420,
        precioDeVenta: 766924
    },
    {
        nombre: "Propiedad 1606",
        direccion: "Calle 97, Bilbao",
        fechaDePublicacion: "2024-06-10",
        cantidadDeFotos: 15,
        metrosCuadrados: 153,
        precioDeVenta: 855468
    },
    {
        nombre: "Propiedad 1607",
        direccion: "Calle 47, Zaragoza",
        fechaDePublicacion: "2024-06-02",
        cantidadDeFotos: 7,
        metrosCuadrados: 429,
        precioDeVenta: 201110
    },
    {
        nombre: "Propiedad 1608",
        direccion: "Calle 51, Murcia",
        fechaDePublicacion: "2024-06-21",
        cantidadDeFotos: 19,
        metrosCuadrados: 446,
        precioDeVenta: 826088
    },
    {
        nombre: "Propiedad 1609",
        direccion: "Calle 56, Madrid",
        fechaDePublicacion: "2024-06-03",
        cantidadDeFotos: 14,
        metrosCuadrados: 98,
        precioDeVenta: 735862
    },
    {
        nombre: "Propiedad 1610",
        direccion: "Calle 92, Palma",
        fechaDePublicacion: "2024-06-19",
        cantidadDeFotos: 13,
        metrosCuadrados: 448,
        precioDeVenta: 610403
    },
    {
        nombre: "Propiedad 1611",
        direccion: "Calle 59, Palma",
        fechaDePublicacion: "2024-06-14",
        cantidadDeFotos: 3,
        metrosCuadrados: 102,
        precioDeVenta: 76265
    },
    {
        nombre: "Propiedad 1612",
        direccion: "Calle 63, Las Palmas de Gran Canaria",
        fechaDePublicacion: "2024-06-18",
        cantidadDeFotos: 4,
        metrosCuadrados: 406,
        precioDeVenta: 273849
    },
    {
        nombre: "Propiedad 1613",
        direccion: "Calle 93, Valencia",
        fechaDePublicacion: "2024-06-12",
        cantidadDeFotos: 17,
        metrosCuadrados: 83,
        precioDeVenta: 920150
    },
    {
        nombre: "Propiedad 1614",
        direccion: "Calle 59, Barcelona",
        fechaDePublicacion: "2024-06-08",
        cantidadDeFotos: 17,
        metrosCuadrados: 227,
        precioDeVenta: 920851
    },
    {
        nombre: "Propiedad 1615",
        direccion: "Calle 64, Barcelona",
        fechaDePublicacion: "2024-06-01",
        cantidadDeFotos: 16,
        metrosCuadrados: 350,
        precioDeVenta: 196731
    },
    {
        nombre: "Propiedad 1616",
        direccion: "Calle 13, Madrid",
        fechaDePublicacion: "2024-06-17",
        cantidadDeFotos: 1,
        metrosCuadrados: 344,
        precioDeVenta: 979077
    },
    {
        nombre: "Propiedad 1617",
        direccion: "Calle 24, Sevilla",
        fechaDePublicacion: "2024-06-11",
        cantidadDeFotos: 14,
        metrosCuadrados: 427,
        precioDeVenta: 726738
    },
    {
        nombre: "Propiedad 1618",
        direccion: "Calle 41, Madrid",
        fechaDePublicacion: "2024-06-09",
        cantidadDeFotos: 9,
        metrosCuadrados: 482,
        precioDeVenta: 664447
    },
    {
        nombre: "Propiedad 1619",
        direccion: "Calle 72, Málaga",
        fechaDePublicacion: "2024-06-11",
        cantidadDeFotos: 5,
        metrosCuadrados: 224,
        precioDeVenta: 988258
    },
    {
        nombre: "Propiedad 1620",
        direccion: "Calle 45, Palma",
        fechaDePublicacion: "2024-06-14",
        cantidadDeFotos: 16,
        metrosCuadrados: 96,
        precioDeVenta: 349671
    },
    {
        nombre: "Propiedad 1621",
        direccion: "Calle 20, Sevilla",
        fechaDePublicacion: "2024-06-11",
        cantidadDeFotos: 19,
        metrosCuadrados: 218,
        precioDeVenta: 811311
    },
    {
        nombre: "Propiedad 1622",
        direccion: "Calle 43, Zaragoza",
        fechaDePublicacion: "2024-06-12",
        cantidadDeFotos: 13,
        metrosCuadrados: 180,
        precioDeVenta: 815401
    },
    {
        nombre: "Propiedad 1623",
        direccion: "Calle 52, Sevilla",
        fechaDePublicacion: "2024-06-06",
        cantidadDeFotos: 13,
        metrosCuadrados: 212,
        precioDeVenta: 712522
    },
    {
        nombre: "Propiedad 1624",
        direccion: "Calle 97, Barcelona",
        fechaDePublicacion: "2024-06-29",
        cantidadDeFotos: 15,
        metrosCuadrados: 494,
        precioDeVenta: 685993
    },
    {
        nombre: "Propiedad 1625",
        direccion: "Calle 33, Valencia",
        fechaDePublicacion: "2024-06-21",
        cantidadDeFotos: 10,
        metrosCuadrados: 357,
        precioDeVenta: 698774
    },
    {
        nombre: "Propiedad 1626",
        direccion: "Calle 1, Valencia",
        fechaDePublicacion: "2024-06-25",
        cantidadDeFotos: 16,
        metrosCuadrados: 379,
        precioDeVenta: 556343
    },
    {
        nombre: "Propiedad 1627",
        direccion: "Calle 41, Sevilla",
        fechaDePublicacion: "2024-06-25",
        cantidadDeFotos: 20,
        metrosCuadrados: 148,
        precioDeVenta: 180966
    },
    {
        nombre: "Propiedad 1628",
        direccion: "Calle 93, Murcia",
        fechaDePublicacion: "2024-06-11",
        cantidadDeFotos: 2,
        metrosCuadrados: 396,
        precioDeVenta: 562480
    },
    {
        nombre: "Propiedad 1629",
        direccion: "Calle 25, Barcelona",
        fechaDePublicacion: "2024-06-22",
        cantidadDeFotos: 19,
        metrosCuadrados: 372,
        precioDeVenta: 465766
    },
    {
        nombre: "Propiedad 1630",
        direccion: "Calle 31, Zaragoza",
        fechaDePublicacion: "2024-06-19",
        cantidadDeFotos: 6,
        metrosCuadrados: 343,
        precioDeVenta: 981770
    },
    {
        nombre: "Propiedad 1631",
        direccion: "Calle 62, Madrid",
        fechaDePublicacion: "2024-06-11",
        cantidadDeFotos: 7,
        metrosCuadrados: 337,
        precioDeVenta: 538509
    },
    {
        nombre: "Propiedad 1632",
        direccion: "Calle 70, Bilbao",
        fechaDePublicacion: "2024-06-21",
        cantidadDeFotos: 13,
        metrosCuadrados: 301,
        precioDeVenta: 550471
    },
    {
        nombre: "Propiedad 1633",
        direccion: "Calle 96, Las Palmas de Gran Canaria",
        fechaDePublicacion: "2024-06-08",
        cantidadDeFotos: 10,
        metrosCuadrados: 184,
        precioDeVenta: 919933
    },
    {
        nombre: "Propiedad 1634",
        direccion: "Calle 92, Madrid",
        fechaDePublicacion: "2024-06-02",
        cantidadDeFotos: 1,
        metrosCuadrados: 307,
        precioDeVenta: 416979
    },
    {
        nombre: "Propiedad 1635",
        direccion: "Calle 75, Madrid",
        fechaDePublicacion: "2024-06-27",
        cantidadDeFotos: 16,
        metrosCuadrados: 245,
        precioDeVenta: 955955
    },
    {
        nombre: "Propiedad 1636",
        direccion: "Calle 25, Valencia",
        fechaDePublicacion: "2024-06-14",
        cantidadDeFotos: 8,
        metrosCuadrados: 486,
        precioDeVenta: 815599
    },
    {
        nombre: "Propiedad 1637",
        direccion: "Calle 59, Madrid",
        fechaDePublicacion: "2024-06-12",
        cantidadDeFotos: 5,
        metrosCuadrados: 357,
        precioDeVenta: 109400
    },
    {
        nombre: "Propiedad 1638",
        direccion: "Calle 72, Bilbao",
        fechaDePublicacion: "2024-06-17",
        cantidadDeFotos: 8,
        metrosCuadrados: 244,
        precioDeVenta: 849092
    },
    {
        nombre: "Propiedad 1639",
        direccion: "Calle 76, Sevilla",
        fechaDePublicacion: "2024-06-01",
        cantidadDeFotos: 7,
        metrosCuadrados: 420,
        precioDeVenta: 632020
    },
    {
        nombre: "Propiedad 1640",
        direccion: "Calle 31, Barcelona",
        fechaDePublicacion: "2024-06-22",
        cantidadDeFotos: 8,
        metrosCuadrados: 267,
        precioDeVenta: 82870
    },
    {
        nombre: "Propiedad 1641",
        direccion: "Calle 17, Zaragoza",
        fechaDePublicacion: "2024-06-16",
        cantidadDeFotos: 2,
        metrosCuadrados: 413,
        precioDeVenta: 738975
    },
    {
        nombre: "Propiedad 1642",
        direccion: "Calle 1, Murcia",
        fechaDePublicacion: "2024-06-28",
        cantidadDeFotos: 14,
        metrosCuadrados: 250,
        precioDeVenta: 397791
    },
    {
        nombre: "Propiedad 1643",
        direccion: "Calle 21, Sevilla",
        fechaDePublicacion: "2024-06-08",
        cantidadDeFotos: 17,
        metrosCuadrados: 73,
        precioDeVenta: 693454
    },
    {
        nombre: "Propiedad 1644",
        direccion: "Calle 68, Palma",
        fechaDePublicacion: "2024-06-04",
        cantidadDeFotos: 20,
        metrosCuadrados: 472,
        precioDeVenta: 979052
    },
    {
        nombre: "Propiedad 1645",
        direccion: "Calle 64, Madrid",
        fechaDePublicacion: "2024-06-01",
        cantidadDeFotos: 17,
        metrosCuadrados: 209,
        precioDeVenta: 812287
    },
    {
        nombre: "Propiedad 1646",
        direccion: "Calle 83, Bilbao",
        fechaDePublicacion: "2024-06-18",
        cantidadDeFotos: 6,
        metrosCuadrados: 57,
        precioDeVenta: 396429
    },
    {
        nombre: "Propiedad 1647",
        direccion: "Calle 90, Málaga",
        fechaDePublicacion: "2024-06-21",
        cantidadDeFotos: 2,
        metrosCuadrados: 184,
        precioDeVenta: 432715
    },
    {
        nombre: "Propiedad 1648",
        direccion: "Calle 60, Zaragoza",
        fechaDePublicacion: "2024-06-27",
        cantidadDeFotos: 1,
        metrosCuadrados: 167,
        precioDeVenta: 100507
    },
    {
        nombre: "Propiedad 1649",
        direccion: "Calle 4, Málaga",
        fechaDePublicacion: "2024-06-02",
        cantidadDeFotos: 19,
        metrosCuadrados: 331,
        precioDeVenta: 546298
    },
    {
        nombre: "Propiedad 1650",
        direccion: "Calle 69, Zaragoza",
        fechaDePublicacion: "2024-06-11",
        cantidadDeFotos: 18,
        metrosCuadrados: 193,
        precioDeVenta: 576383
    },
    {
        nombre: "Propiedad 1651",
        direccion: "Calle 27, Madrid",
        fechaDePublicacion: "2024-06-08",
        cantidadDeFotos: 14,
        metrosCuadrados: 236,
        precioDeVenta: 653760
    },
    {
        nombre: "Propiedad 1652",
        direccion: "Calle 7, Zaragoza",
        fechaDePublicacion: "2024-06-06",
        cantidadDeFotos: 19,
        metrosCuadrados: 283,
        precioDeVenta: 985304
    },
    {
        nombre: "Propiedad 1653",
        direccion: "Calle 41, Sevilla",
        fechaDePublicacion: "2024-06-17",
        cantidadDeFotos: 17,
        metrosCuadrados: 238,
        precioDeVenta: 793693
    },
    {
        nombre: "Propiedad 1654",
        direccion: "Calle 83, Valencia",
        fechaDePublicacion: "2024-06-17",
        cantidadDeFotos: 15,
        metrosCuadrados: 174,
        precioDeVenta: 505635
    },
    {
        nombre: "Propiedad 1655",
        direccion: "Calle 1, Palma",
        fechaDePublicacion: "2024-06-07",
        cantidadDeFotos: 7,
        metrosCuadrados: 348,
        precioDeVenta: 950555
    },
    {
        nombre: "Propiedad 1656",
        direccion: "Calle 4, Valencia",
        fechaDePublicacion: "2024-06-24",
        cantidadDeFotos: 8,
        metrosCuadrados: 114,
        precioDeVenta: 840064
    },
    {
        nombre: "Propiedad 1657",
        direccion: "Calle 88, Zaragoza",
        fechaDePublicacion: "2024-06-26",
        cantidadDeFotos: 19,
        metrosCuadrados: 149,
        precioDeVenta: 622426
    },
    {
        nombre: "Propiedad 1658",
        direccion: "Calle 35, Sevilla",
        fechaDePublicacion: "2024-06-04",
        cantidadDeFotos: 1,
        metrosCuadrados: 497,
        precioDeVenta: 695497
    },
    {
        nombre: "Propiedad 1659",
        direccion: "Calle 35, Las Palmas de Gran Canaria",
        fechaDePublicacion: "2024-06-23",
        cantidadDeFotos: 14,
        metrosCuadrados: 140,
        precioDeVenta: 52317
    },
    {
        nombre: "Propiedad 1660",
        direccion: "Calle 29, Bilbao",
        fechaDePublicacion: "2024-06-25",
        cantidadDeFotos: 5,
        metrosCuadrados: 383,
        precioDeVenta: 332663
    },
    {
        nombre: "Propiedad 1661",
        direccion: "Calle 14, Palma",
        fechaDePublicacion: "2024-06-23",
        cantidadDeFotos: 15,
        metrosCuadrados: 393,
        precioDeVenta: 879499
    },
    {
        nombre: "Propiedad 1662",
        direccion: "Calle 77, Madrid",
        fechaDePublicacion: "2024-06-23",
        cantidadDeFotos: 14,
        metrosCuadrados: 192,
        precioDeVenta: 51286
    },
    {
        nombre: "Propiedad 1663",
        direccion: "Calle 84, Las Palmas de Gran Canaria",
        fechaDePublicacion: "2024-06-29",
        cantidadDeFotos: 6,
        metrosCuadrados: 260,
        precioDeVenta: 880489
    },
    {
        nombre: "Propiedad 1664",
        direccion: "Calle 97, Valencia",
        fechaDePublicacion: "2024-06-02",
        cantidadDeFotos: 9,
        metrosCuadrados: 244,
        precioDeVenta: 126198
    },
    {
        nombre: "Propiedad 1665",
        direccion: "Calle 47, Madrid",
        fechaDePublicacion: "2024-06-28",
        cantidadDeFotos: 9,
        metrosCuadrados: 250,
        precioDeVenta: 465003
    },
    {
        nombre: "Propiedad 1666",
        direccion: "Calle 71, Valencia",
        fechaDePublicacion: "2024-06-10",
        cantidadDeFotos: 6,
        metrosCuadrados: 168,
        precioDeVenta: 126666
    },
    {
        nombre: "Propiedad 1667",
        direccion: "Calle 54, Palma",
        fechaDePublicacion: "2024-06-10",
        cantidadDeFotos: 6,
        metrosCuadrados: 139,
        precioDeVenta: 794683
    },
    {
        nombre: "Propiedad 1668",
        direccion: "Calle 89, Sevilla",
        fechaDePublicacion: "2024-06-04",
        cantidadDeFotos: 8,
        metrosCuadrados: 421,
        precioDeVenta: 913616
    },
    {
        nombre: "Propiedad 1669",
        direccion: "Calle 19, Valencia",
        fechaDePublicacion: "2024-06-01",
        cantidadDeFotos: 14,
        metrosCuadrados: 126,
        precioDeVenta: 813689
    },
    {
        nombre: "Propiedad 1670",
        direccion: "Calle 26, Zaragoza",
        fechaDePublicacion: "2024-06-09",
        cantidadDeFotos: 13,
        metrosCuadrados: 479,
        precioDeVenta: 131393
    },
    {
        nombre: "Propiedad 1671",
        direccion: "Calle 53, Málaga",
        fechaDePublicacion: "2024-06-04",
        cantidadDeFotos: 3,
        metrosCuadrados: 240,
        precioDeVenta: 263556
    },
    {
        nombre: "Propiedad 1672",
        direccion: "Calle 1, Sevilla",
        fechaDePublicacion: "2024-06-09",
        cantidadDeFotos: 12,
        metrosCuadrados: 145,
        precioDeVenta: 258013
    },
    {
        nombre: "Propiedad 1673",
        direccion: "Calle 42, Palma",
        fechaDePublicacion: "2024-06-21",
        cantidadDeFotos: 16,
        metrosCuadrados: 414,
        precioDeVenta: 929443
    },
    {
        nombre: "Propiedad 1674",
        direccion: "Calle 1, Palma",
        fechaDePublicacion: "2024-06-24",
        cantidadDeFotos: 14,
        metrosCuadrados: 246,
        precioDeVenta: 566603
    },
    {
        nombre: "Propiedad 1675",
        direccion: "Calle 10, Murcia",
        fechaDePublicacion: "2024-06-09",
        cantidadDeFotos: 17,
        metrosCuadrados: 208,
        precioDeVenta: 561447
    },
    {
        nombre: "Propiedad 1676",
        direccion: "Calle 70, Bilbao",
        fechaDePublicacion: "2024-06-09",
        cantidadDeFotos: 20,
        metrosCuadrados: 472,
        precioDeVenta: 59286
    },
    {
        nombre: "Propiedad 1677",
        direccion: "Calle 23, Valencia",
        fechaDePublicacion: "2024-06-03",
        cantidadDeFotos: 13,
        metrosCuadrados: 432,
        precioDeVenta: 133183
    },
    {
        nombre: "Propiedad 1678",
        direccion: "Calle 43, Zaragoza",
        fechaDePublicacion: "2024-06-16",
        cantidadDeFotos: 13,
        metrosCuadrados: 456,
        precioDeVenta: 470204
    },
    {
        nombre: "Propiedad 1679",
        direccion: "Calle 72, Madrid",
        fechaDePublicacion: "2024-06-20",
        cantidadDeFotos: 19,
        metrosCuadrados: 160,
        precioDeVenta: 155139
    },
    {
        nombre: "Propiedad 1680",
        direccion: "Calle 39, Murcia",
        fechaDePublicacion: "2024-06-09",
        cantidadDeFotos: 13,
        metrosCuadrados: 128,
        precioDeVenta: 710730
    },
    {
        nombre: "Propiedad 1681",
        direccion: "Calle 62, Madrid",
        fechaDePublicacion: "2024-06-15",
        cantidadDeFotos: 5,
        metrosCuadrados: 320,
        precioDeVenta: 960981
    },
    {
        nombre: "Propiedad 1682",
        direccion: "Calle 27, Murcia",
        fechaDePublicacion: "2024-06-20",
        cantidadDeFotos: 16,
        metrosCuadrados: 403,
        precioDeVenta: 355129
    },
    {
        nombre: "Propiedad 1683",
        direccion: "Calle 80, Málaga",
        fechaDePublicacion: "2024-06-28",
        cantidadDeFotos: 9,
        metrosCuadrados: 455,
        precioDeVenta: 171064
    },
    {
        nombre: "Propiedad 1684",
        direccion: "Calle 90, Las Palmas de Gran Canaria",
        fechaDePublicacion: "2024-06-14",
        cantidadDeFotos: 2,
        metrosCuadrados: 263,
        precioDeVenta: 496633
    },
    {
        nombre: "Propiedad 1685",
        direccion: "Calle 26, Barcelona",
        fechaDePublicacion: "2024-05-31",
        cantidadDeFotos: 4,
        metrosCuadrados: 122,
        precioDeVenta: 302404
    },
    {
        nombre: "Propiedad 1686",
        direccion: "Calle 41, Bilbao",
        fechaDePublicacion: "2024-06-16",
        cantidadDeFotos: 1,
        metrosCuadrados: 131,
        precioDeVenta: 480647
    },
    {
        nombre: "Propiedad 1687",
        direccion: "Calle 94, Valencia",
        fechaDePublicacion: "2024-06-22",
        cantidadDeFotos: 19,
        metrosCuadrados: 233,
        precioDeVenta: 678994
    },
    {
        nombre: "Propiedad 1688",
        direccion: "Calle 15, Sevilla",
        fechaDePublicacion: "2024-06-20",
        cantidadDeFotos: 19,
        metrosCuadrados: 195,
        precioDeVenta: 846894
    },
    {
        nombre: "Propiedad 1689",
        direccion: "Calle 37, Valencia",
        fechaDePublicacion: "2024-06-05",
        cantidadDeFotos: 13,
        metrosCuadrados: 336,
        precioDeVenta: 214158
    },
    {
        nombre: "Propiedad 1690",
        direccion: "Calle 24, Sevilla",
        fechaDePublicacion: "2024-06-21",
        cantidadDeFotos: 1,
        metrosCuadrados: 139,
        precioDeVenta: 347323
    },
    {
        nombre: "Propiedad 1691",
        direccion: "Calle 19, Sevilla",
        fechaDePublicacion: "2024-06-24",
        cantidadDeFotos: 6,
        metrosCuadrados: 244,
        precioDeVenta: 777968
    },
    {
        nombre: "Propiedad 1692",
        direccion: "Calle 5, Sevilla",
        fechaDePublicacion: "2024-06-18",
        cantidadDeFotos: 2,
        metrosCuadrados: 190,
        precioDeVenta: 743229
    },
    {
        nombre: "Propiedad 1693",
        direccion: "Calle 25, Palma",
        fechaDePublicacion: "2024-06-10",
        cantidadDeFotos: 16,
        metrosCuadrados: 207,
        precioDeVenta: 699705
    },
    {
        nombre: "Propiedad 1694",
        direccion: "Calle 68, Palma",
        fechaDePublicacion: "2024-06-06",
        cantidadDeFotos: 19,
        metrosCuadrados: 429,
        precioDeVenta: 830706
    },
    {
        nombre: "Propiedad 1695",
        direccion: "Calle 23, Palma",
        fechaDePublicacion: "2024-06-14",
        cantidadDeFotos: 16,
        metrosCuadrados: 172,
        precioDeVenta: 185064
    },
    {
        nombre: "Propiedad 1696",
        direccion: "Calle 70, Bilbao",
        fechaDePublicacion: "2024-06-18",
        cantidadDeFotos: 8,
        metrosCuadrados: 480,
        precioDeVenta: 335041
    },
    {
        nombre: "Propiedad 1697",
        direccion: "Calle 75, Sevilla",
        fechaDePublicacion: "2024-06-17",
        cantidadDeFotos: 11,
        metrosCuadrados: 368,
        precioDeVenta: 761017
    },
    {
        nombre: "Propiedad 1698",
        direccion: "Calle 90, Málaga",
        fechaDePublicacion: "2024-06-21",
        cantidadDeFotos: 2,
        metrosCuadrados: 320,
        precioDeVenta: 259406
    },
    {
        nombre: "Propiedad 1699",
        direccion: "Calle 59, Barcelona",
        fechaDePublicacion: "2024-06-09",
        cantidadDeFotos: 1,
        metrosCuadrados: 50,
        precioDeVenta: 560032
    },
    {
        nombre: "Propiedad 1700",
        direccion: "Calle 31, Sevilla",
        fechaDePublicacion: "2024-06-29",
        cantidadDeFotos: 6,
        metrosCuadrados: 203,
        precioDeVenta: 104490
    },
    {
        nombre: "Propiedad 1701",
        direccion: "Calle 71, Zaragoza",
        fechaDePublicacion: "2024-06-18",
        cantidadDeFotos: 15,
        metrosCuadrados: 333,
        precioDeVenta: 202239
    },
    {
        nombre: "Propiedad 1702",
        direccion: "Calle 48, Las Palmas de Gran Canaria",
        fechaDePublicacion: "2024-06-24",
        cantidadDeFotos: 14,
        metrosCuadrados: 216,
        precioDeVenta: 157893
    },
    {
        nombre: "Propiedad 1703",
        direccion: "Calle 86, Valencia",
        fechaDePublicacion: "2024-06-14",
        cantidadDeFotos: 10,
        metrosCuadrados: 108,
        precioDeVenta: 707582
    },
    {
        nombre: "Propiedad 1704",
        direccion: "Calle 81, Málaga",
        fechaDePublicacion: "2024-06-09",
        cantidadDeFotos: 18,
        metrosCuadrados: 376,
        precioDeVenta: 475689
    },
    {
        nombre: "Propiedad 1705",
        direccion: "Calle 31, Málaga",
        fechaDePublicacion: "2024-06-07",
        cantidadDeFotos: 12,
        metrosCuadrados: 449,
        precioDeVenta: 439577
    },
    {
        nombre: "Propiedad 1706",
        direccion: "Calle 54, Madrid",
        fechaDePublicacion: "2024-06-11",
        cantidadDeFotos: 9,
        metrosCuadrados: 346,
        precioDeVenta: 249381
    },
    {
        nombre: "Propiedad 1707",
        direccion: "Calle 23, Valencia",
        fechaDePublicacion: "2024-06-13",
        cantidadDeFotos: 8,
        metrosCuadrados: 472,
        precioDeVenta: 243983
    },
    {
        nombre: "Propiedad 1708",
        direccion: "Calle 94, Palma",
        fechaDePublicacion: "2024-06-25",
        cantidadDeFotos: 14,
        metrosCuadrados: 286,
        precioDeVenta: 926360
    },
    {
        nombre: "Propiedad 1709",
        direccion: "Calle 14, Madrid",
        fechaDePublicacion: "2024-06-25",
        cantidadDeFotos: 2,
        metrosCuadrados: 84,
        precioDeVenta: 392336
    },
    {
        nombre: "Propiedad 1710",
        direccion: "Calle 45, Zaragoza",
        fechaDePublicacion: "2024-06-13",
        cantidadDeFotos: 2,
        metrosCuadrados: 384,
        precioDeVenta: 709581
    },
    {
        nombre: "Propiedad 1711",
        direccion: "Calle 29, Sevilla",
        fechaDePublicacion: "2024-06-22",
        cantidadDeFotos: 13,
        metrosCuadrados: 448,
        precioDeVenta: 205367
    },
    {
        nombre: "Propiedad 1712",
        direccion: "Calle 98, Madrid",
        fechaDePublicacion: "2024-06-05",
        cantidadDeFotos: 7,
        metrosCuadrados: 314,
        precioDeVenta: 546398
    },
    {
        nombre: "Propiedad 1713",
        direccion: "Calle 78, Murcia",
        fechaDePublicacion: "2024-06-14",
        cantidadDeFotos: 3,
        metrosCuadrados: 164,
        precioDeVenta: 773228
    },
    {
        nombre: "Propiedad 1714",
        direccion: "Calle 94, Murcia",
        fechaDePublicacion: "2024-06-19",
        cantidadDeFotos: 11,
        metrosCuadrados: 317,
        precioDeVenta: 611926
    },
    {
        nombre: "Propiedad 1715",
        direccion: "Calle 28, Valencia",
        fechaDePublicacion: "2024-06-25",
        cantidadDeFotos: 7,
        metrosCuadrados: 319,
        precioDeVenta: 878188
    },
    {
        nombre: "Propiedad 1716",
        direccion: "Calle 26, Málaga",
        fechaDePublicacion: "2024-06-19",
        cantidadDeFotos: 3,
        metrosCuadrados: 241,
        precioDeVenta: 286439
    },
    {
        nombre: "Propiedad 1717",
        direccion: "Calle 85, Las Palmas de Gran Canaria",
        fechaDePublicacion: "2024-06-02",
        cantidadDeFotos: 1,
        metrosCuadrados: 346,
        precioDeVenta: 335988
    },
    {
        nombre: "Propiedad 1718",
        direccion: "Calle 45, Palma",
        fechaDePublicacion: "2024-06-05",
        cantidadDeFotos: 8,
        metrosCuadrados: 263,
        precioDeVenta: 823138
    },
    {
        nombre: "Propiedad 1719",
        direccion: "Calle 56, Palma",
        fechaDePublicacion: "2024-06-09",
        cantidadDeFotos: 7,
        metrosCuadrados: 117,
        precioDeVenta: 855668
    },
    {
        nombre: "Propiedad 1720",
        direccion: "Calle 37, Zaragoza",
        fechaDePublicacion: "2024-06-16",
        cantidadDeFotos: 16,
        metrosCuadrados: 216,
        precioDeVenta: 207925
    },
    {
        nombre: "Propiedad 1721",
        direccion: "Calle 51, Murcia",
        fechaDePublicacion: "2024-06-13",
        cantidadDeFotos: 13,
        metrosCuadrados: 408,
        precioDeVenta: 749231
    },
    {
        nombre: "Propiedad 1722",
        direccion: "Calle 54, Sevilla",
        fechaDePublicacion: "2024-06-01",
        cantidadDeFotos: 5,
        metrosCuadrados: 101,
        precioDeVenta: 797141
    },
    {
        nombre: "Propiedad 1723",
        direccion: "Calle 75, Murcia",
        fechaDePublicacion: "2024-06-23",
        cantidadDeFotos: 18,
        metrosCuadrados: 379,
        precioDeVenta: 502011
    },
    {
        nombre: "Propiedad 1724",
        direccion: "Calle 62, Murcia",
        fechaDePublicacion: "2024-06-06",
        cantidadDeFotos: 10,
        metrosCuadrados: 72,
        precioDeVenta: 974365
    },
    {
        nombre: "Propiedad 1725",
        direccion: "Calle 31, Valencia",
        fechaDePublicacion: "2024-06-16",
        cantidadDeFotos: 15,
        metrosCuadrados: 139,
        precioDeVenta: 80672
    },
    {
        nombre: "Propiedad 1726",
        direccion: "Calle 20, Palma",
        fechaDePublicacion: "2024-06-05",
        cantidadDeFotos: 3,
        metrosCuadrados: 70,
        precioDeVenta: 912717
    },
    {
        nombre: "Propiedad 1727",
        direccion: "Calle 3, Las Palmas de Gran Canaria",
        fechaDePublicacion: "2024-06-12",
        cantidadDeFotos: 18,
        metrosCuadrados: 210,
        precioDeVenta: 664669
    },
    {
        nombre: "Propiedad 1728",
        direccion: "Calle 64, Murcia",
        fechaDePublicacion: "2024-06-23",
        cantidadDeFotos: 17,
        metrosCuadrados: 92,
        precioDeVenta: 873215
    },
    {
        nombre: "Propiedad 1729",
        direccion: "Calle 71, Valencia",
        fechaDePublicacion: "2024-06-14",
        cantidadDeFotos: 17,
        metrosCuadrados: 398,
        precioDeVenta: 974155
    },
    {
        nombre: "Propiedad 1730",
        direccion: "Calle 35, Sevilla",
        fechaDePublicacion: "2024-06-04",
        cantidadDeFotos: 14,
        metrosCuadrados: 495,
        precioDeVenta: 878603
    },
    {
        nombre: "Propiedad 1731",
        direccion: "Calle 71, Bilbao",
        fechaDePublicacion: "2024-06-11",
        cantidadDeFotos: 3,
        metrosCuadrados: 369,
        precioDeVenta: 212774
    },
    {
        nombre: "Propiedad 1732",
        direccion: "Calle 67, Zaragoza",
        fechaDePublicacion: "2024-06-22",
        cantidadDeFotos: 17,
        metrosCuadrados: 193,
        precioDeVenta: 939670
    },
    {
        nombre: "Propiedad 1733",
        direccion: "Calle 8, Valencia",
        fechaDePublicacion: "2024-06-05",
        cantidadDeFotos: 15,
        metrosCuadrados: 233,
        precioDeVenta: 411700
    },
    {
        nombre: "Propiedad 1734",
        direccion: "Calle 69, Málaga",
        fechaDePublicacion: "2024-06-04",
        cantidadDeFotos: 14,
        metrosCuadrados: 363,
        precioDeVenta: 402377
    },
    {
        nombre: "Propiedad 1735",
        direccion: "Calle 70, Murcia",
        fechaDePublicacion: "2024-06-18",
        cantidadDeFotos: 14,
        metrosCuadrados: 340,
        precioDeVenta: 159218
    },
    {
        nombre: "Propiedad 1736",
        direccion: "Calle 51, Sevilla",
        fechaDePublicacion: "2024-06-05",
        cantidadDeFotos: 2,
        metrosCuadrados: 126,
        precioDeVenta: 285862
    },
    {
        nombre: "Propiedad 1737",
        direccion: "Calle 67, Murcia",
        fechaDePublicacion: "2024-06-17",
        cantidadDeFotos: 3,
        metrosCuadrados: 444,
        precioDeVenta: 363597
    },
    {
        nombre: "Propiedad 1738",
        direccion: "Calle 89, Málaga",
        fechaDePublicacion: "2024-06-15",
        cantidadDeFotos: 19,
        metrosCuadrados: 57,
        precioDeVenta: 164076
    },
    {
        nombre: "Propiedad 1739",
        direccion: "Calle 33, Barcelona",
        fechaDePublicacion: "2024-06-27",
        cantidadDeFotos: 16,
        metrosCuadrados: 207,
        precioDeVenta: 580440
    },
    {
        nombre: "Propiedad 1740",
        direccion: "Calle 9, Madrid",
        fechaDePublicacion: "2024-06-09",
        cantidadDeFotos: 8,
        metrosCuadrados: 406,
        precioDeVenta: 772096
    },
    {
        nombre: "Propiedad 1741",
        direccion: "Calle 43, Bilbao",
        fechaDePublicacion: "2024-06-25",
        cantidadDeFotos: 8,
        metrosCuadrados: 428,
        precioDeVenta: 263120
    },
    {
        nombre: "Propiedad 1742",
        direccion: "Calle 60, Sevilla",
        fechaDePublicacion: "2024-06-09",
        cantidadDeFotos: 7,
        metrosCuadrados: 116,
        precioDeVenta: 285018
    },
    {
        nombre: "Propiedad 1743",
        direccion: "Calle 45, Bilbao",
        fechaDePublicacion: "2024-06-03",
        cantidadDeFotos: 18,
        metrosCuadrados: 247,
        precioDeVenta: 219537
    },
    {
        nombre: "Propiedad 1744",
        direccion: "Calle 74, Valencia",
        fechaDePublicacion: "2024-06-22",
        cantidadDeFotos: 20,
        metrosCuadrados: 263,
        precioDeVenta: 392870
    },
    {
        nombre: "Propiedad 1745",
        direccion: "Calle 45, Madrid",
        fechaDePublicacion: "2024-06-27",
        cantidadDeFotos: 8,
        metrosCuadrados: 340,
        precioDeVenta: 363749
    },
    {
        nombre: "Propiedad 1746",
        direccion: "Calle 13, Madrid",
        fechaDePublicacion: "2024-06-28",
        cantidadDeFotos: 16,
        metrosCuadrados: 486,
        precioDeVenta: 817450
    },
    {
        nombre: "Propiedad 1747",
        direccion: "Calle 94, Málaga",
        fechaDePublicacion: "2024-06-20",
        cantidadDeFotos: 1,
        metrosCuadrados: 420,
        precioDeVenta: 581023
    },
    {
        nombre: "Propiedad 1748",
        direccion: "Calle 6, Bilbao",
        fechaDePublicacion: "2024-06-25",
        cantidadDeFotos: 6,
        metrosCuadrados: 457,
        precioDeVenta: 366747
    },
    {
        nombre: "Propiedad 1749",
        direccion: "Calle 49, Valencia",
        fechaDePublicacion: "2024-06-21",
        cantidadDeFotos: 14,
        metrosCuadrados: 118,
        precioDeVenta: 232873
    },
    {
        nombre: "Propiedad 1750",
        direccion: "Calle 57, Barcelona",
        fechaDePublicacion: "2024-06-16",
        cantidadDeFotos: 11,
        metrosCuadrados: 334,
        precioDeVenta: 620805
    },
    {
        nombre: "Propiedad 1751",
        direccion: "Calle 5, Murcia",
        fechaDePublicacion: "2024-06-16",
        cantidadDeFotos: 11,
        metrosCuadrados: 297,
        precioDeVenta: 378362
    },
    {
        nombre: "Propiedad 1752",
        direccion: "Calle 24, Palma",
        fechaDePublicacion: "2024-06-27",
        cantidadDeFotos: 6,
        metrosCuadrados: 282,
        precioDeVenta: 508246
    },
    {
        nombre: "Propiedad 1753",
        direccion: "Calle 45, Bilbao",
        fechaDePublicacion: "2024-06-26",
        cantidadDeFotos: 2,
        metrosCuadrados: 234,
        precioDeVenta: 860603
    },
    {
        nombre: "Propiedad 1754",
        direccion: "Calle 91, Las Palmas de Gran Canaria",
        fechaDePublicacion: "2024-06-16",
        cantidadDeFotos: 1,
        metrosCuadrados: 176,
        precioDeVenta: 427386
    },
    {
        nombre: "Propiedad 1755",
        direccion: "Calle 95, Palma",
        fechaDePublicacion: "2024-06-15",
        cantidadDeFotos: 5,
        metrosCuadrados: 121,
        precioDeVenta: 559806
    },
    {
        nombre: "Propiedad 1756",
        direccion: "Calle 49, Zaragoza",
        fechaDePublicacion: "2024-06-16",
        cantidadDeFotos: 9,
        metrosCuadrados: 401,
        precioDeVenta: 177783
    },
    {
        nombre: "Propiedad 1757",
        direccion: "Calle 53, Sevilla",
        fechaDePublicacion: "2024-06-29",
        cantidadDeFotos: 13,
        metrosCuadrados: 469,
        precioDeVenta: 52184
    },
    {
        nombre: "Propiedad 1758",
        direccion: "Calle 9, Barcelona",
        fechaDePublicacion: "2024-06-22",
        cantidadDeFotos: 9,
        metrosCuadrados: 79,
        precioDeVenta: 407291
    },
    {
        nombre: "Propiedad 1759",
        direccion: "Calle 70, Barcelona",
        fechaDePublicacion: "2024-06-04",
        cantidadDeFotos: 19,
        metrosCuadrados: 197,
        precioDeVenta: 557765
    },
    {
        nombre: "Propiedad 1760",
        direccion: "Calle 8, Zaragoza",
        fechaDePublicacion: "2024-06-22",
        cantidadDeFotos: 18,
        metrosCuadrados: 316,
        precioDeVenta: 419442
    },
    {
        nombre: "Propiedad 1761",
        direccion: "Calle 3, Murcia",
        fechaDePublicacion: "2024-06-09",
        cantidadDeFotos: 8,
        metrosCuadrados: 140,
        precioDeVenta: 448391
    },
    {
        nombre: "Propiedad 1762",
        direccion: "Calle 68, Málaga",
        fechaDePublicacion: "2024-06-18",
        cantidadDeFotos: 12,
        metrosCuadrados: 286,
        precioDeVenta: 547390
    },
    {
        nombre: "Propiedad 1763",
        direccion: "Calle 31, Bilbao",
        fechaDePublicacion: "2024-06-06",
        cantidadDeFotos: 15,
        metrosCuadrados: 463,
        precioDeVenta: 230002
    },
    {
        nombre: "Propiedad 1764",
        direccion: "Calle 72, Málaga",
        fechaDePublicacion: "2024-06-29",
        cantidadDeFotos: 9,
        metrosCuadrados: 84,
        precioDeVenta: 532214
    },
    {
        nombre: "Propiedad 1765",
        direccion: "Calle 94, Valencia",
        fechaDePublicacion: "2024-06-17",
        cantidadDeFotos: 5,
        metrosCuadrados: 318,
        precioDeVenta: 343707
    },
    {
        nombre: "Propiedad 1766",
        direccion: "Calle 97, Valencia",
        fechaDePublicacion: "2024-06-20",
        cantidadDeFotos: 13,
        metrosCuadrados: 251,
        precioDeVenta: 381465
    },
    {
        nombre: "Propiedad 1767",
        direccion: "Calle 44, Sevilla",
        fechaDePublicacion: "2024-06-01",
        cantidadDeFotos: 2,
        metrosCuadrados: 212,
        precioDeVenta: 995044
    },
    {
        nombre: "Propiedad 1768",
        direccion: "Calle 65, Bilbao",
        fechaDePublicacion: "2024-06-21",
        cantidadDeFotos: 12,
        metrosCuadrados: 313,
        precioDeVenta: 132248
    },
    {
        nombre: "Propiedad 1769",
        direccion: "Calle 98, Valencia",
        fechaDePublicacion: "2024-06-08",
        cantidadDeFotos: 7,
        metrosCuadrados: 126,
        precioDeVenta: 305198
    },
    {
        nombre: "Propiedad 1770",
        direccion: "Calle 70, Málaga",
        fechaDePublicacion: "2024-06-19",
        cantidadDeFotos: 11,
        metrosCuadrados: 373,
        precioDeVenta: 974306
    },
    {
        nombre: "Propiedad 1771",
        direccion: "Calle 72, Zaragoza",
        fechaDePublicacion: "2024-06-24",
        cantidadDeFotos: 7,
        metrosCuadrados: 413,
        precioDeVenta: 129215
    },
    {
        nombre: "Propiedad 1772",
        direccion: "Calle 91, Bilbao",
        fechaDePublicacion: "2024-06-12",
        cantidadDeFotos: 18,
        metrosCuadrados: 480,
        precioDeVenta: 598483
    },
    {
        nombre: "Propiedad 1773",
        direccion: "Calle 96, Bilbao",
        fechaDePublicacion: "2024-06-02",
        cantidadDeFotos: 2,
        metrosCuadrados: 302,
        precioDeVenta: 830654
    },
    {
        nombre: "Propiedad 1774",
        direccion: "Calle 30, Málaga",
        fechaDePublicacion: "2024-06-17",
        cantidadDeFotos: 6,
        metrosCuadrados: 75,
        precioDeVenta: 230511
    },
    {
        nombre: "Propiedad 1775",
        direccion: "Calle 49, Las Palmas de Gran Canaria",
        fechaDePublicacion: "2024-06-26",
        cantidadDeFotos: 4,
        metrosCuadrados: 453,
        precioDeVenta: 134513
    },
    {
        nombre: "Propiedad 1776",
        direccion: "Calle 88, Las Palmas de Gran Canaria",
        fechaDePublicacion: "2024-06-05",
        cantidadDeFotos: 11,
        metrosCuadrados: 239,
        precioDeVenta: 234415
    },
    {
        nombre: "Propiedad 1777",
        direccion: "Calle 92, Bilbao",
        fechaDePublicacion: "2024-06-09",
        cantidadDeFotos: 20,
        metrosCuadrados: 136,
        precioDeVenta: 342060
    },
    {
        nombre: "Propiedad 1778",
        direccion: "Calle 31, Murcia",
        fechaDePublicacion: "2024-06-16",
        cantidadDeFotos: 12,
        metrosCuadrados: 433,
        precioDeVenta: 670866
    },
    {
        nombre: "Propiedad 1779",
        direccion: "Calle 23, Barcelona",
        fechaDePublicacion: "2024-06-10",
        cantidadDeFotos: 17,
        metrosCuadrados: 469,
        precioDeVenta: 525555
    },
    {
        nombre: "Propiedad 1780",
        direccion: "Calle 28, Valencia",
        fechaDePublicacion: "2024-06-21",
        cantidadDeFotos: 6,
        metrosCuadrados: 65,
        precioDeVenta: 370778
    },
    {
        nombre: "Propiedad 1781",
        direccion: "Calle 65, Palma",
        fechaDePublicacion: "2024-06-01",
        cantidadDeFotos: 17,
        metrosCuadrados: 382,
        precioDeVenta: 903373
    },
    {
        nombre: "Propiedad 1782",
        direccion: "Calle 39, Sevilla",
        fechaDePublicacion: "2024-06-19",
        cantidadDeFotos: 14,
        metrosCuadrados: 453,
        precioDeVenta: 372668
    },
    {
        nombre: "Propiedad 1783",
        direccion: "Calle 62, Barcelona",
        fechaDePublicacion: "2024-06-07",
        cantidadDeFotos: 4,
        metrosCuadrados: 436,
        precioDeVenta: 918809
    },
    {
        nombre: "Propiedad 1784",
        direccion: "Calle 58, Valencia",
        fechaDePublicacion: "2024-06-04",
        cantidadDeFotos: 18,
        metrosCuadrados: 271,
        precioDeVenta: 263527
    },
    {
        nombre: "Propiedad 1785",
        direccion: "Calle 24, Las Palmas de Gran Canaria",
        fechaDePublicacion: "2024-06-29",
        cantidadDeFotos: 20,
        metrosCuadrados: 452,
        precioDeVenta: 543819
    },
    {
        nombre: "Propiedad 1786",
        direccion: "Calle 47, Madrid",
        fechaDePublicacion: "2024-06-24",
        cantidadDeFotos: 18,
        metrosCuadrados: 401,
        precioDeVenta: 96988
    },
    {
        nombre: "Propiedad 1787",
        direccion: "Calle 29, Zaragoza",
        fechaDePublicacion: "2024-06-01",
        cantidadDeFotos: 1,
        metrosCuadrados: 390,
        precioDeVenta: 455787
    },
    {
        nombre: "Propiedad 1788",
        direccion: "Calle 26, Palma",
        fechaDePublicacion: "2024-06-05",
        cantidadDeFotos: 19,
        metrosCuadrados: 178,
        precioDeVenta: 447829
    },
    {
        nombre: "Propiedad 1789",
        direccion: "Calle 16, Valencia",
        fechaDePublicacion: "2024-06-29",
        cantidadDeFotos: 13,
        metrosCuadrados: 427,
        precioDeVenta: 602827
    },
    {
        nombre: "Propiedad 1790",
        direccion: "Calle 40, Madrid",
        fechaDePublicacion: "2024-06-11",
        cantidadDeFotos: 8,
        metrosCuadrados: 130,
        precioDeVenta: 530050
    },
    {
        nombre: "Propiedad 1791",
        direccion: "Calle 46, Barcelona",
        fechaDePublicacion: "2024-06-10",
        cantidadDeFotos: 5,
        metrosCuadrados: 177,
        precioDeVenta: 270139
    },
    {
        nombre: "Propiedad 1792",
        direccion: "Calle 87, Valencia",
        fechaDePublicacion: "2024-06-07",
        cantidadDeFotos: 9,
        metrosCuadrados: 325,
        precioDeVenta: 134894
    },
    {
        nombre: "Propiedad 1793",
        direccion: "Calle 37, Murcia",
        fechaDePublicacion: "2024-06-24",
        cantidadDeFotos: 1,
        metrosCuadrados: 66,
        precioDeVenta: 814842
    },
    {
        nombre: "Propiedad 1794",
        direccion: "Calle 94, Barcelona",
        fechaDePublicacion: "2024-06-02",
        cantidadDeFotos: 16,
        metrosCuadrados: 497,
        precioDeVenta: 309480
    },
    {
        nombre: "Propiedad 1795",
        direccion: "Calle 58, Sevilla",
        fechaDePublicacion: "2024-06-18",
        cantidadDeFotos: 11,
        metrosCuadrados: 276,
        precioDeVenta: 673726
    },
    {
        nombre: "Propiedad 1796",
        direccion: "Calle 36, Madrid",
        fechaDePublicacion: "2024-06-04",
        cantidadDeFotos: 16,
        metrosCuadrados: 55,
        precioDeVenta: 539897
    },
    {
        nombre: "Propiedad 1797",
        direccion: "Calle 56, Sevilla",
        fechaDePublicacion: "2024-06-07",
        cantidadDeFotos: 17,
        metrosCuadrados: 79,
        precioDeVenta: 829560
    },
    {
        nombre: "Propiedad 1798",
        direccion: "Calle 93, Valencia",
        fechaDePublicacion: "2024-06-08",
        cantidadDeFotos: 7,
        metrosCuadrados: 71,
        precioDeVenta: 779285
    },
    {
        nombre: "Propiedad 1799",
        direccion: "Calle 22, Las Palmas de Gran Canaria",
        fechaDePublicacion: "2024-06-05",
        cantidadDeFotos: 2,
        metrosCuadrados: 175,
        precioDeVenta: 931289
    },
    {
        nombre: "Propiedad 1800",
        direccion: "Calle 76, Bilbao",
        fechaDePublicacion: "2024-06-21",
        cantidadDeFotos: 7,
        metrosCuadrados: 223,
        precioDeVenta: 273115
    },
    {
        nombre: "Propiedad 1801",
        direccion: "Calle 33, Murcia",
        fechaDePublicacion: "2024-06-22",
        cantidadDeFotos: 7,
        metrosCuadrados: 214,
        precioDeVenta: 621194
    },
    {
        nombre: "Propiedad 1802",
        direccion: "Calle 74, Valencia",
        fechaDePublicacion: "2024-06-08",
        cantidadDeFotos: 6,
        metrosCuadrados: 261,
        precioDeVenta: 658417
    },
    {
        nombre: "Propiedad 1803",
        direccion: "Calle 48, Valencia",
        fechaDePublicacion: "2024-06-25",
        cantidadDeFotos: 15,
        metrosCuadrados: 156,
        precioDeVenta: 438289
    },
    {
        nombre: "Propiedad 1804",
        direccion: "Calle 88, Barcelona",
        fechaDePublicacion: "2024-06-20",
        cantidadDeFotos: 2,
        metrosCuadrados: 329,
        precioDeVenta: 747138
    },
    {
        nombre: "Propiedad 1805",
        direccion: "Calle 58, Valencia",
        fechaDePublicacion: "2024-06-23",
        cantidadDeFotos: 10,
        metrosCuadrados: 135,
        precioDeVenta: 517160
    },
    {
        nombre: "Propiedad 1806",
        direccion: "Calle 36, Murcia",
        fechaDePublicacion: "2024-06-19",
        cantidadDeFotos: 17,
        metrosCuadrados: 222,
        precioDeVenta: 620797
    },
    {
        nombre: "Propiedad 1807",
        direccion: "Calle 80, Bilbao",
        fechaDePublicacion: "2024-06-20",
        cantidadDeFotos: 18,
        metrosCuadrados: 491,
        precioDeVenta: 371917
    },
    {
        nombre: "Propiedad 1808",
        direccion: "Calle 89, Las Palmas de Gran Canaria",
        fechaDePublicacion: "2024-06-14",
        cantidadDeFotos: 6,
        metrosCuadrados: 378,
        precioDeVenta: 957683
    },
    {
        nombre: "Propiedad 1809",
        direccion: "Calle 60, Sevilla",
        fechaDePublicacion: "2024-06-24",
        cantidadDeFotos: 4,
        metrosCuadrados: 401,
        precioDeVenta: 998060
    },
    {
        nombre: "Propiedad 1810",
        direccion: "Calle 40, Málaga",
        fechaDePublicacion: "2024-06-23",
        cantidadDeFotos: 10,
        metrosCuadrados: 412,
        precioDeVenta: 821206
    },
    {
        nombre: "Propiedad 1811",
        direccion: "Calle 31, Valencia",
        fechaDePublicacion: "2024-06-09",
        cantidadDeFotos: 7,
        metrosCuadrados: 482,
        precioDeVenta: 966339
    },
    {
        nombre: "Propiedad 1812",
        direccion: "Calle 1, Madrid",
        fechaDePublicacion: "2024-06-10",
        cantidadDeFotos: 14,
        metrosCuadrados: 160,
        precioDeVenta: 457649
    },
    {
        nombre: "Propiedad 1813",
        direccion: "Calle 59, Las Palmas de Gran Canaria",
        fechaDePublicacion: "2024-06-04",
        cantidadDeFotos: 3,
        metrosCuadrados: 449,
        precioDeVenta: 398390
    },
    {
        nombre: "Propiedad 1814",
        direccion: "Calle 31, Bilbao",
        fechaDePublicacion: "2024-06-26",
        cantidadDeFotos: 10,
        metrosCuadrados: 382,
        precioDeVenta: 521883
    },
    {
        nombre: "Propiedad 1815",
        direccion: "Calle 45, Málaga",
        fechaDePublicacion: "2024-06-11",
        cantidadDeFotos: 1,
        metrosCuadrados: 428,
        precioDeVenta: 768635
    },
    {
        nombre: "Propiedad 1816",
        direccion: "Calle 52, Murcia",
        fechaDePublicacion: "2024-06-15",
        cantidadDeFotos: 7,
        metrosCuadrados: 318,
        precioDeVenta: 508339
    },
    {
        nombre: "Propiedad 1817",
        direccion: "Calle 4, Madrid",
        fechaDePublicacion: "2024-06-11",
        cantidadDeFotos: 12,
        metrosCuadrados: 309,
        precioDeVenta: 521389
    },
    {
        nombre: "Propiedad 1818",
        direccion: "Calle 20, Barcelona",
        fechaDePublicacion: "2024-06-05",
        cantidadDeFotos: 13,
        metrosCuadrados: 68,
        precioDeVenta: 984482
    },
    {
        nombre: "Propiedad 1819",
        direccion: "Calle 84, Sevilla",
        fechaDePublicacion: "2024-06-22",
        cantidadDeFotos: 6,
        metrosCuadrados: 137,
        precioDeVenta: 519644
    },
    {
        nombre: "Propiedad 1820",
        direccion: "Calle 85, Murcia",
        fechaDePublicacion: "2024-06-18",
        cantidadDeFotos: 10,
        metrosCuadrados: 182,
        precioDeVenta: 340458
    },
    {
        nombre: "Propiedad 1821",
        direccion: "Calle 51, Palma",
        fechaDePublicacion: "2024-06-17",
        cantidadDeFotos: 20,
        metrosCuadrados: 307,
        precioDeVenta: 604555
    },
    {
        nombre: "Propiedad 1822",
        direccion: "Calle 38, Zaragoza",
        fechaDePublicacion: "2024-06-03",
        cantidadDeFotos: 20,
        metrosCuadrados: 97,
        precioDeVenta: 322660
    },
    {
        nombre: "Propiedad 1823",
        direccion: "Calle 51, Barcelona",
        fechaDePublicacion: "2024-06-28",
        cantidadDeFotos: 19,
        metrosCuadrados: 320,
        precioDeVenta: 790637
    },
    {
        nombre: "Propiedad 1824",
        direccion: "Calle 87, Málaga",
        fechaDePublicacion: "2024-06-01",
        cantidadDeFotos: 1,
        metrosCuadrados: 123,
        precioDeVenta: 103241
    },
    {
        nombre: "Propiedad 1825",
        direccion: "Calle 64, Palma",
        fechaDePublicacion: "2024-06-24",
        cantidadDeFotos: 8,
        metrosCuadrados: 376,
        precioDeVenta: 148722
    },
    {
        nombre: "Propiedad 1826",
        direccion: "Calle 61, Madrid",
        fechaDePublicacion: "2024-06-13",
        cantidadDeFotos: 9,
        metrosCuadrados: 438,
        precioDeVenta: 713250
    },
    {
        nombre: "Propiedad 1827",
        direccion: "Calle 55, Murcia",
        fechaDePublicacion: "2024-06-26",
        cantidadDeFotos: 4,
        metrosCuadrados: 372,
        precioDeVenta: 945819
    },
    {
        nombre: "Propiedad 1828",
        direccion: "Calle 9, Sevilla",
        fechaDePublicacion: "2024-06-08",
        cantidadDeFotos: 13,
        metrosCuadrados: 161,
        precioDeVenta: 808189
    },
    {
        nombre: "Propiedad 1829",
        direccion: "Calle 75, Palma",
        fechaDePublicacion: "2024-06-17",
        cantidadDeFotos: 5,
        metrosCuadrados: 95,
        precioDeVenta: 122027
    },
    {
        nombre: "Propiedad 1830",
        direccion: "Calle 84, Barcelona",
        fechaDePublicacion: "2024-06-10",
        cantidadDeFotos: 16,
        metrosCuadrados: 449,
        precioDeVenta: 73059
    },
    {
        nombre: "Propiedad 1831",
        direccion: "Calle 51, Barcelona",
        fechaDePublicacion: "2024-06-08",
        cantidadDeFotos: 4,
        metrosCuadrados: 312,
        precioDeVenta: 568490
    },
    {
        nombre: "Propiedad 1832",
        direccion: "Calle 89, Madrid",
        fechaDePublicacion: "2024-06-11",
        cantidadDeFotos: 14,
        metrosCuadrados: 208,
        precioDeVenta: 119250
    },
    {
        nombre: "Propiedad 1833",
        direccion: "Calle 37, Zaragoza",
        fechaDePublicacion: "2024-06-15",
        cantidadDeFotos: 16,
        metrosCuadrados: 382,
        precioDeVenta: 540161
    },
    {
        nombre: "Propiedad 1834",
        direccion: "Calle 70, Málaga",
        fechaDePublicacion: "2024-06-24",
        cantidadDeFotos: 7,
        metrosCuadrados: 198,
        precioDeVenta: 292828
    },
    {
        nombre: "Propiedad 1835",
        direccion: "Calle 51, Sevilla",
        fechaDePublicacion: "2024-06-18",
        cantidadDeFotos: 16,
        metrosCuadrados: 427,
        precioDeVenta: 271939
    },
    {
        nombre: "Propiedad 1836",
        direccion: "Calle 78, Bilbao",
        fechaDePublicacion: "2024-06-23",
        cantidadDeFotos: 2,
        metrosCuadrados: 77,
        precioDeVenta: 114203
    },
    {
        nombre: "Propiedad 1837",
        direccion: "Calle 18, Valencia",
        fechaDePublicacion: "2024-06-14",
        cantidadDeFotos: 17,
        metrosCuadrados: 156,
        precioDeVenta: 561970
    },
    {
        nombre: "Propiedad 1838",
        direccion: "Calle 84, Palma",
        fechaDePublicacion: "2024-06-28",
        cantidadDeFotos: 7,
        metrosCuadrados: 172,
        precioDeVenta: 112538
    },
    {
        nombre: "Propiedad 1839",
        direccion: "Calle 3, Valencia",
        fechaDePublicacion: "2024-06-15",
        cantidadDeFotos: 18,
        metrosCuadrados: 470,
        precioDeVenta: 413251
    },
    {
        nombre: "Propiedad 1840",
        direccion: "Calle 46, Málaga",
        fechaDePublicacion: "2024-06-08",
        cantidadDeFotos: 1,
        metrosCuadrados: 59,
        precioDeVenta: 410336
    },
    {
        nombre: "Propiedad 1841",
        direccion: "Calle 66, Bilbao",
        fechaDePublicacion: "2024-06-26",
        cantidadDeFotos: 15,
        metrosCuadrados: 359,
        precioDeVenta: 744190
    },
    {
        nombre: "Propiedad 1842",
        direccion: "Calle 24, Palma",
        fechaDePublicacion: "2024-06-20",
        cantidadDeFotos: 3,
        metrosCuadrados: 149,
        precioDeVenta: 550061
    },
    {
        nombre: "Propiedad 1843",
        direccion: "Calle 66, Las Palmas de Gran Canaria",
        fechaDePublicacion: "2024-06-04",
        cantidadDeFotos: 13,
        metrosCuadrados: 468,
        precioDeVenta: 884134
    },
    {
        nombre: "Propiedad 1844",
        direccion: "Calle 49, Valencia",
        fechaDePublicacion: "2024-06-27",
        cantidadDeFotos: 16,
        metrosCuadrados: 238,
        precioDeVenta: 246808
    },
    {
        nombre: "Propiedad 1845",
        direccion: "Calle 58, Sevilla",
        fechaDePublicacion: "2024-06-13",
        cantidadDeFotos: 2,
        metrosCuadrados: 331,
        precioDeVenta: 814138
    },
    {
        nombre: "Propiedad 1846",
        direccion: "Calle 30, Zaragoza",
        fechaDePublicacion: "2024-06-23",
        cantidadDeFotos: 3,
        metrosCuadrados: 369,
        precioDeVenta: 312935
    },
    {
        nombre: "Propiedad 1847",
        direccion: "Calle 67, Sevilla",
        fechaDePublicacion: "2024-06-15",
        cantidadDeFotos: 10,
        metrosCuadrados: 156,
        precioDeVenta: 324974
    },
    {
        nombre: "Propiedad 1848",
        direccion: "Calle 84, Bilbao",
        fechaDePublicacion: "2024-06-12",
        cantidadDeFotos: 17,
        metrosCuadrados: 449,
        precioDeVenta: 121855
    },
    {
        nombre: "Propiedad 1849",
        direccion: "Calle 22, Valencia",
        fechaDePublicacion: "2024-06-06",
        cantidadDeFotos: 17,
        metrosCuadrados: 253,
        precioDeVenta: 713294
    },
    {
        nombre: "Propiedad 1850",
        direccion: "Calle 86, Sevilla",
        fechaDePublicacion: "2024-06-13",
        cantidadDeFotos: 11,
        metrosCuadrados: 58,
        precioDeVenta: 702051
    },
    {
        nombre: "Propiedad 1851",
        direccion: "Calle 56, Valencia",
        fechaDePublicacion: "2024-06-17",
        cantidadDeFotos: 16,
        metrosCuadrados: 339,
        precioDeVenta: 58480
    },
    {
        nombre: "Propiedad 1852",
        direccion: "Calle 22, Murcia",
        fechaDePublicacion: "2024-06-01",
        cantidadDeFotos: 14,
        metrosCuadrados: 108,
        precioDeVenta: 419878
    },
    {
        nombre: "Propiedad 1853",
        direccion: "Calle 78, Zaragoza",
        fechaDePublicacion: "2024-06-26",
        cantidadDeFotos: 10,
        metrosCuadrados: 70,
        precioDeVenta: 948274
    },
    {
        nombre: "Propiedad 1854",
        direccion: "Calle 74, Palma",
        fechaDePublicacion: "2024-06-24",
        cantidadDeFotos: 5,
        metrosCuadrados: 106,
        precioDeVenta: 334444
    },
    {
        nombre: "Propiedad 1855",
        direccion: "Calle 85, Murcia",
        fechaDePublicacion: "2024-06-04",
        cantidadDeFotos: 1,
        metrosCuadrados: 83,
        precioDeVenta: 628346
    },
    {
        nombre: "Propiedad 1856",
        direccion: "Calle 46, Murcia",
        fechaDePublicacion: "2024-06-07",
        cantidadDeFotos: 2,
        metrosCuadrados: 471,
        precioDeVenta: 860081
    },
    {
        nombre: "Propiedad 1857",
        direccion: "Calle 24, Las Palmas de Gran Canaria",
        fechaDePublicacion: "2024-06-10",
        cantidadDeFotos: 19,
        metrosCuadrados: 134,
        precioDeVenta: 642741
    },
    {
        nombre: "Propiedad 1858",
        direccion: "Calle 13, Las Palmas de Gran Canaria",
        fechaDePublicacion: "2024-06-28",
        cantidadDeFotos: 19,
        metrosCuadrados: 493,
        precioDeVenta: 483252
    },
    {
        nombre: "Propiedad 1859",
        direccion: "Calle 10, Barcelona",
        fechaDePublicacion: "2024-06-08",
        cantidadDeFotos: 11,
        metrosCuadrados: 189,
        precioDeVenta: 638160
    },
    {
        nombre: "Propiedad 1860",
        direccion: "Calle 38, Málaga",
        fechaDePublicacion: "2024-06-11",
        cantidadDeFotos: 11,
        metrosCuadrados: 310,
        precioDeVenta: 353734
    },
    {
        nombre: "Propiedad 1861",
        direccion: "Calle 25, Málaga",
        fechaDePublicacion: "2024-06-25",
        cantidadDeFotos: 15,
        metrosCuadrados: 151,
        precioDeVenta: 387963
    },
    {
        nombre: "Propiedad 1862",
        direccion: "Calle 54, Murcia",
        fechaDePublicacion: "2024-06-23",
        cantidadDeFotos: 6,
        metrosCuadrados: 384,
        precioDeVenta: 448111
    },
    {
        nombre: "Propiedad 1863",
        direccion: "Calle 2, Barcelona",
        fechaDePublicacion: "2024-06-10",
        cantidadDeFotos: 3,
        metrosCuadrados: 115,
        precioDeVenta: 812002
    },
    {
        nombre: "Propiedad 1864",
        direccion: "Calle 22, Sevilla",
        fechaDePublicacion: "2024-06-28",
        cantidadDeFotos: 13,
        metrosCuadrados: 405,
        precioDeVenta: 696539
    },
    {
        nombre: "Propiedad 1865",
        direccion: "Calle 12, Bilbao",
        fechaDePublicacion: "2024-06-17",
        cantidadDeFotos: 19,
        metrosCuadrados: 377,
        precioDeVenta: 280444
    },
    {
        nombre: "Propiedad 1866",
        direccion: "Calle 79, Las Palmas de Gran Canaria",
        fechaDePublicacion: "2024-06-28",
        cantidadDeFotos: 19,
        metrosCuadrados: 152,
        precioDeVenta: 773045
    },
    {
        nombre: "Propiedad 1867",
        direccion: "Calle 92, Málaga",
        fechaDePublicacion: "2024-06-19",
        cantidadDeFotos: 17,
        metrosCuadrados: 255,
        precioDeVenta: 850016
    },
    {
        nombre: "Propiedad 1868",
        direccion: "Calle 41, Málaga",
        fechaDePublicacion: "2024-06-24",
        cantidadDeFotos: 2,
        metrosCuadrados: 204,
        precioDeVenta: 243162
    },
    {
        nombre: "Propiedad 1869",
        direccion: "Calle 57, Las Palmas de Gran Canaria",
        fechaDePublicacion: "2024-06-06",
        cantidadDeFotos: 6,
        metrosCuadrados: 160,
        precioDeVenta: 448204
    },
    {
        nombre: "Propiedad 1870",
        direccion: "Calle 85, Bilbao",
        fechaDePublicacion: "2024-06-24",
        cantidadDeFotos: 18,
        metrosCuadrados: 417,
        precioDeVenta: 567667
    },
    {
        nombre: "Propiedad 1871",
        direccion: "Calle 11, Barcelona",
        fechaDePublicacion: "2024-06-10",
        cantidadDeFotos: 6,
        metrosCuadrados: 449,
        precioDeVenta: 136884
    },
    {
        nombre: "Propiedad 1872",
        direccion: "Calle 33, Bilbao",
        fechaDePublicacion: "2024-06-20",
        cantidadDeFotos: 10,
        metrosCuadrados: 417,
        precioDeVenta: 802178
    },
    {
        nombre: "Propiedad 1873",
        direccion: "Calle 35, Bilbao",
        fechaDePublicacion: "2024-06-29",
        cantidadDeFotos: 15,
        metrosCuadrados: 355,
        precioDeVenta: 537983
    },
    {
        nombre: "Propiedad 1874",
        direccion: "Calle 61, Madrid",
        fechaDePublicacion: "2024-06-18",
        cantidadDeFotos: 18,
        metrosCuadrados: 87,
        precioDeVenta: 615144
    },
    {
        nombre: "Propiedad 1875",
        direccion: "Calle 93, Barcelona",
        fechaDePublicacion: "2024-06-11",
        cantidadDeFotos: 19,
        metrosCuadrados: 407,
        precioDeVenta: 894373
    },
    {
        nombre: "Propiedad 1876",
        direccion: "Calle 33, Málaga",
        fechaDePublicacion: "2024-06-26",
        cantidadDeFotos: 20,
        metrosCuadrados: 66,
        precioDeVenta: 326243
    },
    {
        nombre: "Propiedad 1877",
        direccion: "Calle 89, Sevilla",
        fechaDePublicacion: "2024-06-22",
        cantidadDeFotos: 12,
        metrosCuadrados: 388,
        precioDeVenta: 493190
    },
    {
        nombre: "Propiedad 1878",
        direccion: "Calle 69, Madrid",
        fechaDePublicacion: "2024-06-06",
        cantidadDeFotos: 6,
        metrosCuadrados: 340,
        precioDeVenta: 634591
    },
    {
        nombre: "Propiedad 1879",
        direccion: "Calle 10, Valencia",
        fechaDePublicacion: "2024-06-21",
        cantidadDeFotos: 4,
        metrosCuadrados: 232,
        precioDeVenta: 220921
    },
    {
        nombre: "Propiedad 1880",
        direccion: "Calle 21, Sevilla",
        fechaDePublicacion: "2024-06-07",
        cantidadDeFotos: 14,
        metrosCuadrados: 375,
        precioDeVenta: 685697
    },
    {
        nombre: "Propiedad 1881",
        direccion: "Calle 17, Palma",
        fechaDePublicacion: "2024-06-19",
        cantidadDeFotos: 7,
        metrosCuadrados: 213,
        precioDeVenta: 268763
    },
    {
        nombre: "Propiedad 1882",
        direccion: "Calle 46, Valencia",
        fechaDePublicacion: "2024-06-21",
        cantidadDeFotos: 14,
        metrosCuadrados: 359,
        precioDeVenta: 697567
    },
    {
        nombre: "Propiedad 1883",
        direccion: "Calle 75, Barcelona",
        fechaDePublicacion: "2024-06-22",
        cantidadDeFotos: 6,
        metrosCuadrados: 242,
        precioDeVenta: 831476
    },
    {
        nombre: "Propiedad 1884",
        direccion: "Calle 28, Valencia",
        fechaDePublicacion: "2024-06-19",
        cantidadDeFotos: 5,
        metrosCuadrados: 109,
        precioDeVenta: 179696
    },
    {
        nombre: "Propiedad 1885",
        direccion: "Calle 59, Murcia",
        fechaDePublicacion: "2024-06-13",
        cantidadDeFotos: 17,
        metrosCuadrados: 463,
        precioDeVenta: 619366
    },
    {
        nombre: "Propiedad 1886",
        direccion: "Calle 50, Valencia",
        fechaDePublicacion: "2024-06-13",
        cantidadDeFotos: 13,
        metrosCuadrados: 349,
        precioDeVenta: 281642
    },
    {
        nombre: "Propiedad 1887",
        direccion: "Calle 36, Málaga",
        fechaDePublicacion: "2024-06-21",
        cantidadDeFotos: 13,
        metrosCuadrados: 468,
        precioDeVenta: 676741
    },
    {
        nombre: "Propiedad 1888",
        direccion: "Calle 96, Sevilla",
        fechaDePublicacion: "2024-06-06",
        cantidadDeFotos: 4,
        metrosCuadrados: 258,
        precioDeVenta: 817586
    },
    {
        nombre: "Propiedad 1889",
        direccion: "Calle 81, Barcelona",
        fechaDePublicacion: "2024-06-14",
        cantidadDeFotos: 13,
        metrosCuadrados: 471,
        precioDeVenta: 486897
    },
    {
        nombre: "Propiedad 1890",
        direccion: "Calle 30, Valencia",
        fechaDePublicacion: "2024-06-16",
        cantidadDeFotos: 9,
        metrosCuadrados: 272,
        precioDeVenta: 964864
    },
    {
        nombre: "Propiedad 1891",
        direccion: "Calle 6, Bilbao",
        fechaDePublicacion: "2024-06-12",
        cantidadDeFotos: 13,
        metrosCuadrados: 358,
        precioDeVenta: 296556
    },
    {
        nombre: "Propiedad 1892",
        direccion: "Calle 66, Barcelona",
        fechaDePublicacion: "2024-06-26",
        cantidadDeFotos: 13,
        metrosCuadrados: 137,
        precioDeVenta: 231528
    },
    {
        nombre: "Propiedad 1893",
        direccion: "Calle 81, Palma",
        fechaDePublicacion: "2024-06-09",
        cantidadDeFotos: 2,
        metrosCuadrados: 58,
        precioDeVenta: 965787
    },
    {
        nombre: "Propiedad 1894",
        direccion: "Calle 81, Zaragoza",
        fechaDePublicacion: "2024-06-12",
        cantidadDeFotos: 12,
        metrosCuadrados: 172,
        precioDeVenta: 768224
    },
    {
        nombre: "Propiedad 1895",
        direccion: "Calle 77, Las Palmas de Gran Canaria",
        fechaDePublicacion: "2024-06-19",
        cantidadDeFotos: 1,
        metrosCuadrados: 480,
        precioDeVenta: 664630
    },
    {
        nombre: "Propiedad 1896",
        direccion: "Calle 51, Sevilla",
        fechaDePublicacion: "2024-06-09",
        cantidadDeFotos: 11,
        metrosCuadrados: 335,
        precioDeVenta: 275172
    },
    {
        nombre: "Propiedad 1897",
        direccion: "Calle 75, Málaga",
        fechaDePublicacion: "2024-06-02",
        cantidadDeFotos: 16,
        metrosCuadrados: 105,
        precioDeVenta: 615353
    },
    {
        nombre: "Propiedad 1898",
        direccion: "Calle 85, Madrid",
        fechaDePublicacion: "2024-06-11",
        cantidadDeFotos: 2,
        metrosCuadrados: 209,
        precioDeVenta: 803303
    },
    {
        nombre: "Propiedad 1899",
        direccion: "Calle 54, Madrid",
        fechaDePublicacion: "2024-06-29",
        cantidadDeFotos: 19,
        metrosCuadrados: 337,
        precioDeVenta: 646044
    },
    {
        nombre: "Propiedad 1900",
        direccion: "Calle 75, Palma",
        fechaDePublicacion: "2024-06-11",
        cantidadDeFotos: 11,
        metrosCuadrados: 252,
        precioDeVenta: 709724
    },
    {
        nombre: "Propiedad 1901",
        direccion: "Calle 8, Málaga",
        fechaDePublicacion: "2024-06-01",
        cantidadDeFotos: 17,
        metrosCuadrados: 415,
        precioDeVenta: 608301
    },
    {
        nombre: "Propiedad 1902",
        direccion: "Calle 24, Palma",
        fechaDePublicacion: "2024-06-13",
        cantidadDeFotos: 14,
        metrosCuadrados: 286,
        precioDeVenta: 252285
    },
    {
        nombre: "Propiedad 1903",
        direccion: "Calle 11, Zaragoza",
        fechaDePublicacion: "2024-06-09",
        cantidadDeFotos: 17,
        metrosCuadrados: 124,
        precioDeVenta: 237745
    },
    {
        nombre: "Propiedad 1904",
        direccion: "Calle 80, Las Palmas de Gran Canaria",
        fechaDePublicacion: "2024-06-01",
        cantidadDeFotos: 12,
        metrosCuadrados: 328,
        precioDeVenta: 496408
    },
    {
        nombre: "Propiedad 1905",
        direccion: "Calle 10, Palma",
        fechaDePublicacion: "2024-06-07",
        cantidadDeFotos: 9,
        metrosCuadrados: 431,
        precioDeVenta: 656579
    },
    {
        nombre: "Propiedad 1906",
        direccion: "Calle 77, Barcelona",
        fechaDePublicacion: "2024-06-06",
        cantidadDeFotos: 7,
        metrosCuadrados: 145,
        precioDeVenta: 423702
    },
    {
        nombre: "Propiedad 1907",
        direccion: "Calle 40, Valencia",
        fechaDePublicacion: "2024-06-06",
        cantidadDeFotos: 20,
        metrosCuadrados: 283,
        precioDeVenta: 237093
    },
    {
        nombre: "Propiedad 1908",
        direccion: "Calle 34, Madrid",
        fechaDePublicacion: "2024-06-02",
        cantidadDeFotos: 11,
        metrosCuadrados: 387,
        precioDeVenta: 705967
    },
    {
        nombre: "Propiedad 1909",
        direccion: "Calle 44, Las Palmas de Gran Canaria",
        fechaDePublicacion: "2024-06-23",
        cantidadDeFotos: 8,
        metrosCuadrados: 209,
        precioDeVenta: 469078
    },
    {
        nombre: "Propiedad 1910",
        direccion: "Calle 56, Las Palmas de Gran Canaria",
        fechaDePublicacion: "2024-06-09",
        cantidadDeFotos: 13,
        metrosCuadrados: 248,
        precioDeVenta: 874423
    },
    {
        nombre: "Propiedad 1911",
        direccion: "Calle 31, Sevilla",
        fechaDePublicacion: "2024-06-15",
        cantidadDeFotos: 6,
        metrosCuadrados: 471,
        precioDeVenta: 588664
    },
    {
        nombre: "Propiedad 1912",
        direccion: "Calle 11, Palma",
        fechaDePublicacion: "2024-06-10",
        cantidadDeFotos: 11,
        metrosCuadrados: 125,
        precioDeVenta: 262064
    },
    {
        nombre: "Propiedad 1913",
        direccion: "Calle 90, Las Palmas de Gran Canaria",
        fechaDePublicacion: "2024-06-25",
        cantidadDeFotos: 2,
        metrosCuadrados: 106,
        precioDeVenta: 591577
    },
    {
        nombre: "Propiedad 1914",
        direccion: "Calle 83, Palma",
        fechaDePublicacion: "2024-06-06",
        cantidadDeFotos: 12,
        metrosCuadrados: 317,
        precioDeVenta: 817382
    },
    {
        nombre: "Propiedad 1915",
        direccion: "Calle 20, Valencia",
        fechaDePublicacion: "2024-06-12",
        cantidadDeFotos: 11,
        metrosCuadrados: 229,
        precioDeVenta: 631326
    },
    {
        nombre: "Propiedad 1916",
        direccion: "Calle 80, Sevilla",
        fechaDePublicacion: "2024-06-02",
        cantidadDeFotos: 2,
        metrosCuadrados: 365,
        precioDeVenta: 543987
    },
    {
        nombre: "Propiedad 1917",
        direccion: "Calle 78, Barcelona",
        fechaDePublicacion: "2024-06-08",
        cantidadDeFotos: 6,
        metrosCuadrados: 467,
        precioDeVenta: 842011
    },
    {
        nombre: "Propiedad 1918",
        direccion: "Calle 20, Sevilla",
        fechaDePublicacion: "2024-06-22",
        cantidadDeFotos: 5,
        metrosCuadrados: 323,
        precioDeVenta: 413914
    },
    {
        nombre: "Propiedad 1919",
        direccion: "Calle 70, Valencia",
        fechaDePublicacion: "2024-06-26",
        cantidadDeFotos: 19,
        metrosCuadrados: 415,
        precioDeVenta: 76453
    },
    {
        nombre: "Propiedad 1920",
        direccion: "Calle 39, Valencia",
        fechaDePublicacion: "2024-06-26",
        cantidadDeFotos: 15,
        metrosCuadrados: 150,
        precioDeVenta: 158975
    },
    {
        nombre: "Propiedad 1921",
        direccion: "Calle 8, Sevilla",
        fechaDePublicacion: "2024-06-08",
        cantidadDeFotos: 16,
        metrosCuadrados: 424,
        precioDeVenta: 560989
    },
    {
        nombre: "Propiedad 1922",
        direccion: "Calle 19, Valencia",
        fechaDePublicacion: "2024-06-04",
        cantidadDeFotos: 12,
        metrosCuadrados: 66,
        precioDeVenta: 487947
    },
    {
        nombre: "Propiedad 1923",
        direccion: "Calle 2, Sevilla",
        fechaDePublicacion: "2024-06-27",
        cantidadDeFotos: 4,
        metrosCuadrados: 212,
        precioDeVenta: 640934
    },
    {
        nombre: "Propiedad 1924",
        direccion: "Calle 12, Bilbao",
        fechaDePublicacion: "2024-06-08",
        cantidadDeFotos: 19,
        metrosCuadrados: 411,
        precioDeVenta: 927808
    },
    {
        nombre: "Propiedad 1925",
        direccion: "Calle 30, Málaga",
        fechaDePublicacion: "2024-06-27",
        cantidadDeFotos: 8,
        metrosCuadrados: 353,
        precioDeVenta: 411001
    },
    {
        nombre: "Propiedad 1926",
        direccion: "Calle 33, Las Palmas de Gran Canaria",
        fechaDePublicacion: "2024-06-03",
        cantidadDeFotos: 15,
        metrosCuadrados: 459,
        precioDeVenta: 112066
    },
    {
        nombre: "Propiedad 1927",
        direccion: "Calle 46, Madrid",
        fechaDePublicacion: "2024-06-21",
        cantidadDeFotos: 12,
        metrosCuadrados: 122,
        precioDeVenta: 925457
    },
    {
        nombre: "Propiedad 1928",
        direccion: "Calle 58, Barcelona",
        fechaDePublicacion: "2024-06-02",
        cantidadDeFotos: 2,
        metrosCuadrados: 195,
        precioDeVenta: 717082
    },
    {
        nombre: "Propiedad 1929",
        direccion: "Calle 13, Málaga",
        fechaDePublicacion: "2024-06-05",
        cantidadDeFotos: 17,
        metrosCuadrados: 497,
        precioDeVenta: 582993
    },
    {
        nombre: "Propiedad 1930",
        direccion: "Calle 70, Murcia",
        fechaDePublicacion: "2024-06-23",
        cantidadDeFotos: 2,
        metrosCuadrados: 170,
        precioDeVenta: 784143
    },
    {
        nombre: "Propiedad 1931",
        direccion: "Calle 85, Sevilla",
        fechaDePublicacion: "2024-06-26",
        cantidadDeFotos: 4,
        metrosCuadrados: 485,
        precioDeVenta: 824681
    },
    {
        nombre: "Propiedad 1932",
        direccion: "Calle 12, Barcelona",
        fechaDePublicacion: "2024-06-02",
        cantidadDeFotos: 3,
        metrosCuadrados: 194,
        precioDeVenta: 929471
    },
    {
        nombre: "Propiedad 1933",
        direccion: "Calle 45, Las Palmas de Gran Canaria",
        fechaDePublicacion: "2024-06-12",
        cantidadDeFotos: 5,
        metrosCuadrados: 409,
        precioDeVenta: 620464
    },
    {
        nombre: "Propiedad 1934",
        direccion: "Calle 24, Madrid",
        fechaDePublicacion: "2024-06-22",
        cantidadDeFotos: 6,
        metrosCuadrados: 201,
        precioDeVenta: 968920
    },
    {
        nombre: "Propiedad 1935",
        direccion: "Calle 39, Madrid",
        fechaDePublicacion: "2024-06-15",
        cantidadDeFotos: 9,
        metrosCuadrados: 498,
        precioDeVenta: 552413
    },
    {
        nombre: "Propiedad 1936",
        direccion: "Calle 85, Bilbao",
        fechaDePublicacion: "2024-06-23",
        cantidadDeFotos: 16,
        metrosCuadrados: 335,
        precioDeVenta: 267467
    },
    {
        nombre: "Propiedad 1937",
        direccion: "Calle 45, Palma",
        fechaDePublicacion: "2024-06-03",
        cantidadDeFotos: 8,
        metrosCuadrados: 217,
        precioDeVenta: 456840
    },
    {
        nombre: "Propiedad 1938",
        direccion: "Calle 62, Bilbao",
        fechaDePublicacion: "2024-06-05",
        cantidadDeFotos: 4,
        metrosCuadrados: 83,
        precioDeVenta: 756991
    },
    {
        nombre: "Propiedad 1939",
        direccion: "Calle 88, Zaragoza",
        fechaDePublicacion: "2024-06-08",
        cantidadDeFotos: 6,
        metrosCuadrados: 376,
        precioDeVenta: 616387
    },
    {
        nombre: "Propiedad 1940",
        direccion: "Calle 57, Madrid",
        fechaDePublicacion: "2024-06-18",
        cantidadDeFotos: 18,
        metrosCuadrados: 209,
        precioDeVenta: 207498
    },
    {
        nombre: "Propiedad 1941",
        direccion: "Calle 60, Murcia",
        fechaDePublicacion: "2024-06-18",
        cantidadDeFotos: 18,
        metrosCuadrados: 403,
        precioDeVenta: 595338
    },
    {
        nombre: "Propiedad 1942",
        direccion: "Calle 84, Zaragoza",
        fechaDePublicacion: "2024-06-11",
        cantidadDeFotos: 17,
        metrosCuadrados: 490,
        precioDeVenta: 647865
    },
    {
        nombre: "Propiedad 1943",
        direccion: "Calle 53, Sevilla",
        fechaDePublicacion: "2024-06-28",
        cantidadDeFotos: 19,
        metrosCuadrados: 134,
        precioDeVenta: 235165
    },
    {
        nombre: "Propiedad 1944",
        direccion: "Calle 54, Barcelona",
        fechaDePublicacion: "2024-06-28",
        cantidadDeFotos: 14,
        metrosCuadrados: 55,
        precioDeVenta: 587976
    },
    {
        nombre: "Propiedad 1945",
        direccion: "Calle 25, Zaragoza",
        fechaDePublicacion: "2024-06-24",
        cantidadDeFotos: 9,
        metrosCuadrados: 251,
        precioDeVenta: 610848
    },
    {
        nombre: "Propiedad 1946",
        direccion: "Calle 24, Barcelona",
        fechaDePublicacion: "2024-06-19",
        cantidadDeFotos: 11,
        metrosCuadrados: 193,
        precioDeVenta: 439049
    },
    {
        nombre: "Propiedad 1947",
        direccion: "Calle 12, Barcelona",
        fechaDePublicacion: "2024-06-23",
        cantidadDeFotos: 16,
        metrosCuadrados: 166,
        precioDeVenta: 207705
    },
    {
        nombre: "Propiedad 1948",
        direccion: "Calle 10, Sevilla",
        fechaDePublicacion: "2024-06-08",
        cantidadDeFotos: 6,
        metrosCuadrados: 68,
        precioDeVenta: 814941
    },
    {
        nombre: "Propiedad 1949",
        direccion: "Calle 85, Barcelona",
        fechaDePublicacion: "2024-06-25",
        cantidadDeFotos: 15,
        metrosCuadrados: 76,
        precioDeVenta: 997671
    },
    {
        nombre: "Propiedad 1950",
        direccion: "Calle 68, Zaragoza",
        fechaDePublicacion: "2024-06-12",
        cantidadDeFotos: 14,
        metrosCuadrados: 342,
        precioDeVenta: 544854
    },
    {
        nombre: "Propiedad 1951",
        direccion: "Calle 72, Las Palmas de Gran Canaria",
        fechaDePublicacion: "2024-06-17",
        cantidadDeFotos: 3,
        metrosCuadrados: 124,
        precioDeVenta: 833331
    },
    {
        nombre: "Propiedad 1952",
        direccion: "Calle 68, Palma",
        fechaDePublicacion: "2024-06-20",
        cantidadDeFotos: 15,
        metrosCuadrados: 74,
        precioDeVenta: 513380
    },
    {
        nombre: "Propiedad 1953",
        direccion: "Calle 58, Sevilla",
        fechaDePublicacion: "2024-05-31",
        cantidadDeFotos: 18,
        metrosCuadrados: 393,
        precioDeVenta: 416492
    },
    {
        nombre: "Propiedad 1954",
        direccion: "Calle 69, Málaga",
        fechaDePublicacion: "2024-06-20",
        cantidadDeFotos: 2,
        metrosCuadrados: 279,
        precioDeVenta: 252998
    },
    {
        nombre: "Propiedad 1955",
        direccion: "Calle 38, Palma",
        fechaDePublicacion: "2024-05-31",
        cantidadDeFotos: 5,
        metrosCuadrados: 489,
        precioDeVenta: 694505
    },
    {
        nombre: "Propiedad 1956",
        direccion: "Calle 30, Madrid",
        fechaDePublicacion: "2024-06-02",
        cantidadDeFotos: 6,
        metrosCuadrados: 319,
        precioDeVenta: 718833
    },
    {
        nombre: "Propiedad 1957",
        direccion: "Calle 16, Murcia",
        fechaDePublicacion: "2024-06-05",
        cantidadDeFotos: 9,
        metrosCuadrados: 227,
        precioDeVenta: 986752
    },
    {
        nombre: "Propiedad 1958",
        direccion: "Calle 73, Barcelona",
        fechaDePublicacion: "2024-06-27",
        cantidadDeFotos: 16,
        metrosCuadrados: 358,
        precioDeVenta: 465503
    },
    {
        nombre: "Propiedad 1959",
        direccion: "Calle 94, Barcelona",
        fechaDePublicacion: "2024-06-11",
        cantidadDeFotos: 4,
        metrosCuadrados: 249,
        precioDeVenta: 928614
    },
    {
        nombre: "Propiedad 1960",
        direccion: "Calle 96, Sevilla",
        fechaDePublicacion: "2024-06-22",
        cantidadDeFotos: 19,
        metrosCuadrados: 419,
        precioDeVenta: 80924
    },
    {
        nombre: "Propiedad 1961",
        direccion: "Calle 19, Las Palmas de Gran Canaria",
        fechaDePublicacion: "2024-06-04",
        cantidadDeFotos: 7,
        metrosCuadrados: 396,
        precioDeVenta: 147523
    },
    {
        nombre: "Propiedad 1962",
        direccion: "Calle 63, Murcia",
        fechaDePublicacion: "2024-06-17",
        cantidadDeFotos: 20,
        metrosCuadrados: 141,
        precioDeVenta: 739163
    },
    {
        nombre: "Propiedad 1963",
        direccion: "Calle 89, Barcelona",
        fechaDePublicacion: "2024-06-21",
        cantidadDeFotos: 13,
        metrosCuadrados: 78,
        precioDeVenta: 956031
    },
    {
        nombre: "Propiedad 1964",
        direccion: "Calle 95, Zaragoza",
        fechaDePublicacion: "2024-06-15",
        cantidadDeFotos: 14,
        metrosCuadrados: 331,
        precioDeVenta: 384372
    },
    {
        nombre: "Propiedad 1965",
        direccion: "Calle 67, Barcelona",
        fechaDePublicacion: "2024-06-15",
        cantidadDeFotos: 2,
        metrosCuadrados: 210,
        precioDeVenta: 433185
    },
    {
        nombre: "Propiedad 1966",
        direccion: "Calle 83, Bilbao",
        fechaDePublicacion: "2024-06-25",
        cantidadDeFotos: 14,
        metrosCuadrados: 430,
        precioDeVenta: 739112
    },
    {
        nombre: "Propiedad 1967",
        direccion: "Calle 66, Zaragoza",
        fechaDePublicacion: "2024-06-06",
        cantidadDeFotos: 9,
        metrosCuadrados: 383,
        precioDeVenta: 622119
    },
    {
        nombre: "Propiedad 1968",
        direccion: "Calle 12, Sevilla",
        fechaDePublicacion: "2024-06-22",
        cantidadDeFotos: 2,
        metrosCuadrados: 216,
        precioDeVenta: 597005
    },
    {
        nombre: "Propiedad 1969",
        direccion: "Calle 40, Murcia",
        fechaDePublicacion: "2024-06-24",
        cantidadDeFotos: 1,
        metrosCuadrados: 398,
        precioDeVenta: 685827
    },
    {
        nombre: "Propiedad 1970",
        direccion: "Calle 96, Las Palmas de Gran Canaria",
        fechaDePublicacion: "2024-06-09",
        cantidadDeFotos: 19,
        metrosCuadrados: 68,
        precioDeVenta: 779332
    },
    {
        nombre: "Propiedad 1971",
        direccion: "Calle 92, Murcia",
        fechaDePublicacion: "2024-06-21",
        cantidadDeFotos: 20,
        metrosCuadrados: 113,
        precioDeVenta: 582067
    },
    {
        nombre: "Propiedad 1972",
        direccion: "Calle 82, Málaga",
        fechaDePublicacion: "2024-06-20",
        cantidadDeFotos: 16,
        metrosCuadrados: 416,
        precioDeVenta: 557279
    },
    {
        nombre: "Propiedad 1973",
        direccion: "Calle 21, Barcelona",
        fechaDePublicacion: "2024-06-27",
        cantidadDeFotos: 20,
        metrosCuadrados: 483,
        precioDeVenta: 783729
    },
    {
        nombre: "Propiedad 1974",
        direccion: "Calle 70, Barcelona",
        fechaDePublicacion: "2024-06-26",
        cantidadDeFotos: 4,
        metrosCuadrados: 237,
        precioDeVenta: 789683
    },
    {
        nombre: "Propiedad 1975",
        direccion: "Calle 16, Barcelona",
        fechaDePublicacion: "2024-06-06",
        cantidadDeFotos: 4,
        metrosCuadrados: 220,
        precioDeVenta: 963827
    },
    {
        nombre: "Propiedad 1976",
        direccion: "Calle 85, Palma",
        fechaDePublicacion: "2024-06-10",
        cantidadDeFotos: 12,
        metrosCuadrados: 267,
        precioDeVenta: 826522
    },
    {
        nombre: "Propiedad 1977",
        direccion: "Calle 50, Valencia",
        fechaDePublicacion: "2024-06-03",
        cantidadDeFotos: 8,
        metrosCuadrados: 212,
        precioDeVenta: 124631
    },
    {
        nombre: "Propiedad 1978",
        direccion: "Calle 91, Palma",
        fechaDePublicacion: "2024-06-04",
        cantidadDeFotos: 2,
        metrosCuadrados: 302,
        precioDeVenta: 952727
    },
    {
        nombre: "Propiedad 1979",
        direccion: "Calle 40, Zaragoza",
        fechaDePublicacion: "2024-06-05",
        cantidadDeFotos: 2,
        metrosCuadrados: 155,
        precioDeVenta: 647116
    },
    {
        nombre: "Propiedad 1980",
        direccion: "Calle 35, Sevilla",
        fechaDePublicacion: "2024-06-15",
        cantidadDeFotos: 2,
        metrosCuadrados: 186,
        precioDeVenta: 75435
    },
    {
        nombre: "Propiedad 1981",
        direccion: "Calle 72, Sevilla",
        fechaDePublicacion: "2024-06-17",
        cantidadDeFotos: 16,
        metrosCuadrados: 379,
        precioDeVenta: 966520
    },
    {
        nombre: "Propiedad 1982",
        direccion: "Calle 69, Sevilla",
        fechaDePublicacion: "2024-06-08",
        cantidadDeFotos: 17,
        metrosCuadrados: 332,
        precioDeVenta: 548207
    },
    {
        nombre: "Propiedad 1983",
        direccion: "Calle 74, Bilbao",
        fechaDePublicacion: "2024-06-23",
        cantidadDeFotos: 1,
        metrosCuadrados: 404,
        precioDeVenta: 180991
    },
    {
        nombre: "Propiedad 1984",
        direccion: "Calle 76, Valencia",
        fechaDePublicacion: "2024-06-01",
        cantidadDeFotos: 10,
        metrosCuadrados: 307,
        precioDeVenta: 707478
    },
    {
        nombre: "Propiedad 1985",
        direccion: "Calle 61, Zaragoza",
        fechaDePublicacion: "2024-06-10",
        cantidadDeFotos: 8,
        metrosCuadrados: 319,
        precioDeVenta: 66037
    },
    {
        nombre: "Propiedad 1986",
        direccion: "Calle 34, Murcia",
        fechaDePublicacion: "2024-06-27",
        cantidadDeFotos: 8,
        metrosCuadrados: 305,
        precioDeVenta: 978201
    },
    {
        nombre: "Propiedad 1987",
        direccion: "Calle 6, Zaragoza",
        fechaDePublicacion: "2024-06-20",
        cantidadDeFotos: 10,
        metrosCuadrados: 259,
        precioDeVenta: 892070
    },
    {
        nombre: "Propiedad 1988",
        direccion: "Calle 86, Sevilla",
        fechaDePublicacion: "2024-06-09",
        cantidadDeFotos: 7,
        metrosCuadrados: 226,
        precioDeVenta: 140832
    },
    {
        nombre: "Propiedad 1989",
        direccion: "Calle 4, Barcelona",
        fechaDePublicacion: "2024-06-06",
        cantidadDeFotos: 2,
        metrosCuadrados: 437,
        precioDeVenta: 86400
    },
    {
        nombre: "Propiedad 1990",
        direccion: "Calle 69, Barcelona",
        fechaDePublicacion: "2024-06-23",
        cantidadDeFotos: 6,
        metrosCuadrados: 230,
        precioDeVenta: 814478
    },
    {
        nombre: "Propiedad 1991",
        direccion: "Calle 65, Barcelona",
        fechaDePublicacion: "2024-06-14",
        cantidadDeFotos: 2,
        metrosCuadrados: 289,
        precioDeVenta: 844320
    },
    {
        nombre: "Propiedad 1992",
        direccion: "Calle 54, Sevilla",
        fechaDePublicacion: "2024-06-27",
        cantidadDeFotos: 11,
        metrosCuadrados: 193,
        precioDeVenta: 837839
    },
    {
        nombre: "Propiedad 1993",
        direccion: "Calle 46, Las Palmas de Gran Canaria",
        fechaDePublicacion: "2024-06-08",
        cantidadDeFotos: 14,
        metrosCuadrados: 457,
        precioDeVenta: 381425
    },
    {
        nombre: "Propiedad 1994",
        direccion: "Calle 65, Murcia",
        fechaDePublicacion: "2024-06-07",
        cantidadDeFotos: 6,
        metrosCuadrados: 137,
        precioDeVenta: 961607
    },
    {
        nombre: "Propiedad 1995",
        direccion: "Calle 10, Zaragoza",
        fechaDePublicacion: "2024-06-26",
        cantidadDeFotos: 11,
        metrosCuadrados: 385,
        precioDeVenta: 735495
    },
    {
        nombre: "Propiedad 1996",
        direccion: "Calle 71, Bilbao",
        fechaDePublicacion: "2024-06-28",
        cantidadDeFotos: 7,
        metrosCuadrados: 112,
        precioDeVenta: 401064
    },
    {
        nombre: "Propiedad 1997",
        direccion: "Calle 46, Bilbao",
        fechaDePublicacion: "2024-06-28",
        cantidadDeFotos: 11,
        metrosCuadrados: 290,
        precioDeVenta: 899183
    },
    {
        nombre: "Propiedad 1998",
        direccion: "Calle 58, Sevilla",
        fechaDePublicacion: "2024-06-10",
        cantidadDeFotos: 7,
        metrosCuadrados: 453,
        precioDeVenta: 419972
    },
    {
        nombre: "Propiedad 1999",
        direccion: "Calle 17, Valencia",
        fechaDePublicacion: "2024-06-11",
        cantidadDeFotos: 15,
        metrosCuadrados: 264,
        precioDeVenta: 207221
    },
    {
        nombre: "Propiedad 2000",
        direccion: "Calle 82, Las Palmas de Gran Canaria",
        fechaDePublicacion: "2024-06-10",
        cantidadDeFotos: 17,
        metrosCuadrados: 122,
        precioDeVenta: 761360
    },
    {
        nombre: "Propiedad 2001",
        direccion: "Calle 5, Bilbao",
        fechaDePublicacion: "2024-06-18",
        cantidadDeFotos: 7,
        metrosCuadrados: 493,
        precioDeVenta: 665655
    },
    {
        nombre: "Propiedad 2002",
        direccion: "Calle 93, Madrid",
        fechaDePublicacion: "2024-06-09",
        cantidadDeFotos: 1,
        metrosCuadrados: 284,
        precioDeVenta: 82158
    },
    {
        nombre: "Propiedad 2003",
        direccion: "Calle 99, Murcia",
        fechaDePublicacion: "2024-06-24",
        cantidadDeFotos: 18,
        metrosCuadrados: 398,
        precioDeVenta: 864636
    },
    {
        nombre: "Propiedad 2004",
        direccion: "Calle 60, Valencia",
        fechaDePublicacion: "2024-06-14",
        cantidadDeFotos: 6,
        metrosCuadrados: 348,
        precioDeVenta: 209331
    },
    {
        nombre: "Propiedad 2005",
        direccion: "Calle 31, Palma",
        fechaDePublicacion: "2024-06-02",
        cantidadDeFotos: 10,
        metrosCuadrados: 114,
        precioDeVenta: 349528
    },
    {
        nombre: "Propiedad 2006",
        direccion: "Calle 48, Valencia",
        fechaDePublicacion: "2024-06-29",
        cantidadDeFotos: 13,
        metrosCuadrados: 151,
        precioDeVenta: 95049
    },
    {
        nombre: "Propiedad 2007",
        direccion: "Calle 54, Zaragoza",
        fechaDePublicacion: "2024-06-01",
        cantidadDeFotos: 19,
        metrosCuadrados: 149,
        precioDeVenta: 870812
    },
    {
        nombre: "Propiedad 2008",
        direccion: "Calle 85, Palma",
        fechaDePublicacion: "2024-06-02",
        cantidadDeFotos: 20,
        metrosCuadrados: 67,
        precioDeVenta: 90018
    },
    {
        nombre: "Propiedad 2009",
        direccion: "Calle 96, Málaga",
        fechaDePublicacion: "2024-06-21",
        cantidadDeFotos: 6,
        metrosCuadrados: 358,
        precioDeVenta: 905166
    },
    {
        nombre: "Propiedad 2010",
        direccion: "Calle 11, Las Palmas de Gran Canaria",
        fechaDePublicacion: "2024-06-23",
        cantidadDeFotos: 13,
        metrosCuadrados: 213,
        precioDeVenta: 391296
    },
    {
        nombre: "Propiedad 2011",
        direccion: "Calle 99, Valencia",
        fechaDePublicacion: "2024-06-10",
        cantidadDeFotos: 2,
        metrosCuadrados: 338,
        precioDeVenta: 815253
    },
    {
        nombre: "Propiedad 2012",
        direccion: "Calle 4, Madrid",
        fechaDePublicacion: "2024-06-15",
        cantidadDeFotos: 12,
        metrosCuadrados: 180,
        precioDeVenta: 237316
    },
    {
        nombre: "Propiedad 2013",
        direccion: "Calle 62, Murcia",
        fechaDePublicacion: "2024-06-21",
        cantidadDeFotos: 14,
        metrosCuadrados: 332,
        precioDeVenta: 450558
    },
    {
        nombre: "Propiedad 2014",
        direccion: "Calle 92, Bilbao",
        fechaDePublicacion: "2024-06-20",
        cantidadDeFotos: 14,
        metrosCuadrados: 356,
        precioDeVenta: 278182
    },
    {
        nombre: "Propiedad 2015",
        direccion: "Calle 82, Barcelona",
        fechaDePublicacion: "2024-06-14",
        cantidadDeFotos: 13,
        metrosCuadrados: 65,
        precioDeVenta: 954397
    },
    {
        nombre: "Propiedad 2016",
        direccion: "Calle 31, Murcia",
        fechaDePublicacion: "2024-06-25",
        cantidadDeFotos: 11,
        metrosCuadrados: 365,
        precioDeVenta: 986094
    },
    {
        nombre: "Propiedad 2017",
        direccion: "Calle 39, Las Palmas de Gran Canaria",
        fechaDePublicacion: "2024-06-23",
        cantidadDeFotos: 12,
        metrosCuadrados: 461,
        precioDeVenta: 251591
    },
    {
        nombre: "Propiedad 2018",
        direccion: "Calle 92, Zaragoza",
        fechaDePublicacion: "2024-06-08",
        cantidadDeFotos: 8,
        metrosCuadrados: 115,
        precioDeVenta: 170767
    },
    {
        nombre: "Propiedad 2019",
        direccion: "Calle 71, Barcelona",
        fechaDePublicacion: "2024-06-20",
        cantidadDeFotos: 20,
        metrosCuadrados: 51,
        precioDeVenta: 501213
    },
    {
        nombre: "Propiedad 2020",
        direccion: "Calle 88, Valencia",
        fechaDePublicacion: "2024-06-11",
        cantidadDeFotos: 15,
        metrosCuadrados: 320,
        precioDeVenta: 787738
    },
    {
        nombre: "Propiedad 2021",
        direccion: "Calle 79, Barcelona",
        fechaDePublicacion: "2024-06-27",
        cantidadDeFotos: 3,
        metrosCuadrados: 388,
        precioDeVenta: 512531
    },
    {
        nombre: "Propiedad 2022",
        direccion: "Calle 23, Madrid",
        fechaDePublicacion: "2024-06-21",
        cantidadDeFotos: 7,
        metrosCuadrados: 316,
        precioDeVenta: 446561
    },
    {
        nombre: "Propiedad 2023",
        direccion: "Calle 96, Málaga",
        fechaDePublicacion: "2024-06-24",
        cantidadDeFotos: 5,
        metrosCuadrados: 218,
        precioDeVenta: 504927
    },
    {
        nombre: "Propiedad 2024",
        direccion: "Calle 17, Madrid",
        fechaDePublicacion: "2024-06-04",
        cantidadDeFotos: 15,
        metrosCuadrados: 381,
        precioDeVenta: 191928
    },
    {
        nombre: "Propiedad 2025",
        direccion: "Calle 87, Murcia",
        fechaDePublicacion: "2024-06-02",
        cantidadDeFotos: 9,
        metrosCuadrados: 300,
        precioDeVenta: 927840
    },
    {
        nombre: "Propiedad 2026",
        direccion: "Calle 59, Murcia",
        fechaDePublicacion: "2024-06-22",
        cantidadDeFotos: 11,
        metrosCuadrados: 86,
        precioDeVenta: 107096
    },
    {
        nombre: "Propiedad 2027",
        direccion: "Calle 81, Málaga",
        fechaDePublicacion: "2024-06-03",
        cantidadDeFotos: 20,
        metrosCuadrados: 103,
        precioDeVenta: 372655
    },
    {
        nombre: "Propiedad 2028",
        direccion: "Calle 77, Málaga",
        fechaDePublicacion: "2024-06-09",
        cantidadDeFotos: 13,
        metrosCuadrados: 79,
        precioDeVenta: 831429
    },
    {
        nombre: "Propiedad 2029",
        direccion: "Calle 82, Bilbao",
        fechaDePublicacion: "2024-06-03",
        cantidadDeFotos: 11,
        metrosCuadrados: 360,
        precioDeVenta: 293249
    },
    {
        nombre: "Propiedad 2030",
        direccion: "Calle 7, Madrid",
        fechaDePublicacion: "2024-06-01",
        cantidadDeFotos: 15,
        metrosCuadrados: 495,
        precioDeVenta: 433849
    },
    {
        nombre: "Propiedad 2031",
        direccion: "Calle 56, Zaragoza",
        fechaDePublicacion: "2024-06-28",
        cantidadDeFotos: 12,
        metrosCuadrados: 272,
        precioDeVenta: 979575
    },
    {
        nombre: "Propiedad 2032",
        direccion: "Calle 73, Barcelona",
        fechaDePublicacion: "2024-06-10",
        cantidadDeFotos: 7,
        metrosCuadrados: 285,
        precioDeVenta: 575017
    },
    {
        nombre: "Propiedad 2033",
        direccion: "Calle 40, Palma",
        fechaDePublicacion: "2024-06-04",
        cantidadDeFotos: 12,
        metrosCuadrados: 142,
        precioDeVenta: 432537
    },
    {
        nombre: "Propiedad 2034",
        direccion: "Calle 7, Bilbao",
        fechaDePublicacion: "2024-06-23",
        cantidadDeFotos: 19,
        metrosCuadrados: 155,
        precioDeVenta: 388546
    },
    {
        nombre: "Propiedad 2035",
        direccion: "Calle 26, Bilbao",
        fechaDePublicacion: "2024-06-18",
        cantidadDeFotos: 19,
        metrosCuadrados: 344,
        precioDeVenta: 338679
    },
    {
        nombre: "Propiedad 2036",
        direccion: "Calle 50, Zaragoza",
        fechaDePublicacion: "2024-06-16",
        cantidadDeFotos: 19,
        metrosCuadrados: 298,
        precioDeVenta: 983176
    },
    {
        nombre: "Propiedad 2037",
        direccion: "Calle 82, Madrid",
        fechaDePublicacion: "2024-06-25",
        cantidadDeFotos: 12,
        metrosCuadrados: 284,
        precioDeVenta: 792639
    },
    {
        nombre: "Propiedad 2038",
        direccion: "Calle 23, Zaragoza",
        fechaDePublicacion: "2024-06-05",
        cantidadDeFotos: 6,
        metrosCuadrados: 264,
        precioDeVenta: 813727
    },
    {
        nombre: "Propiedad 2039",
        direccion: "Calle 2, Zaragoza",
        fechaDePublicacion: "2024-06-29",
        cantidadDeFotos: 14,
        metrosCuadrados: 415,
        precioDeVenta: 645038
    },
    {
        nombre: "Propiedad 2040",
        direccion: "Calle 34, Murcia",
        fechaDePublicacion: "2024-06-21",
        cantidadDeFotos: 19,
        metrosCuadrados: 111,
        precioDeVenta: 771657
    },
    {
        nombre: "Propiedad 2041",
        direccion: "Calle 37, Palma",
        fechaDePublicacion: "2024-06-29",
        cantidadDeFotos: 5,
        metrosCuadrados: 424,
        precioDeVenta: 162542
    },
    {
        nombre: "Propiedad 2042",
        direccion: "Calle 12, Málaga",
        fechaDePublicacion: "2024-06-15",
        cantidadDeFotos: 19,
        metrosCuadrados: 426,
        precioDeVenta: 62819
    },
    {
        nombre: "Propiedad 2043",
        direccion: "Calle 26, Zaragoza",
        fechaDePublicacion: "2024-06-17",
        cantidadDeFotos: 18,
        metrosCuadrados: 445,
        precioDeVenta: 410991
    },
    {
        nombre: "Propiedad 2044",
        direccion: "Calle 90, Palma",
        fechaDePublicacion: "2024-06-20",
        cantidadDeFotos: 7,
        metrosCuadrados: 142,
        precioDeVenta: 424574
    },
    {
        nombre: "Propiedad 2045",
        direccion: "Calle 60, Málaga",
        fechaDePublicacion: "2024-06-07",
        cantidadDeFotos: 3,
        metrosCuadrados: 59,
        precioDeVenta: 798829
    },
    {
        nombre: "Propiedad 2046",
        direccion: "Calle 63, Sevilla",
        fechaDePublicacion: "2024-06-23",
        cantidadDeFotos: 14,
        metrosCuadrados: 419,
        precioDeVenta: 650995
    },
    {
        nombre: "Propiedad 2047",
        direccion: "Calle 64, Las Palmas de Gran Canaria",
        fechaDePublicacion: "2024-06-22",
        cantidadDeFotos: 9,
        metrosCuadrados: 153,
        precioDeVenta: 134531
    },
    {
        nombre: "Propiedad 2048",
        direccion: "Calle 50, Barcelona",
        fechaDePublicacion: "2024-06-29",
        cantidadDeFotos: 1,
        metrosCuadrados: 236,
        precioDeVenta: 846514
    },
    {
        nombre: "Propiedad 2049",
        direccion: "Calle 19, Murcia",
        fechaDePublicacion: "2024-06-15",
        cantidadDeFotos: 7,
        metrosCuadrados: 356,
        precioDeVenta: 577425
    },
    {
        nombre: "Propiedad 2050",
        direccion: "Calle 53, Madrid",
        fechaDePublicacion: "2024-06-01",
        cantidadDeFotos: 20,
        metrosCuadrados: 197,
        precioDeVenta: 878993
    },
    {
        nombre: "Propiedad 2051",
        direccion: "Calle 61, Las Palmas de Gran Canaria",
        fechaDePublicacion: "2024-06-25",
        cantidadDeFotos: 10,
        metrosCuadrados: 225,
        precioDeVenta: 571014
    },
    {
        nombre: "Propiedad 2052",
        direccion: "Calle 58, Barcelona",
        fechaDePublicacion: "2024-06-19",
        cantidadDeFotos: 13,
        metrosCuadrados: 300,
        precioDeVenta: 729564
    },
    {
        nombre: "Propiedad 2053",
        direccion: "Calle 49, Palma",
        fechaDePublicacion: "2024-06-22",
        cantidadDeFotos: 5,
        metrosCuadrados: 310,
        precioDeVenta: 564387
    },
    {
        nombre: "Propiedad 2054",
        direccion: "Calle 75, Las Palmas de Gran Canaria",
        fechaDePublicacion: "2024-06-19",
        cantidadDeFotos: 10,
        metrosCuadrados: 300,
        precioDeVenta: 247479
    },
    {
        nombre: "Propiedad 2055",
        direccion: "Calle 31, Sevilla",
        fechaDePublicacion: "2024-06-28",
        cantidadDeFotos: 4,
        metrosCuadrados: 318,
        precioDeVenta: 103313
    },
    {
        nombre: "Propiedad 2056",
        direccion: "Calle 83, Sevilla",
        fechaDePublicacion: "2024-06-18",
        cantidadDeFotos: 3,
        metrosCuadrados: 368,
        precioDeVenta: 249503
    },
    {
        nombre: "Propiedad 2057",
        direccion: "Calle 40, Valencia",
        fechaDePublicacion: "2024-06-24",
        cantidadDeFotos: 14,
        metrosCuadrados: 207,
        precioDeVenta: 403377
    },
    {
        nombre: "Propiedad 2058",
        direccion: "Calle 35, Las Palmas de Gran Canaria",
        fechaDePublicacion: "2024-06-22",
        cantidadDeFotos: 12,
        metrosCuadrados: 341,
        precioDeVenta: 227453
    },
    {
        nombre: "Propiedad 2059",
        direccion: "Calle 27, Sevilla",
        fechaDePublicacion: "2024-06-24",
        cantidadDeFotos: 1,
        metrosCuadrados: 231,
        precioDeVenta: 994421
    },
    {
        nombre: "Propiedad 2060",
        direccion: "Calle 84, Murcia",
        fechaDePublicacion: "2024-06-24",
        cantidadDeFotos: 16,
        metrosCuadrados: 261,
        precioDeVenta: 388659
    },
    {
        nombre: "Propiedad 2061",
        direccion: "Calle 49, Zaragoza",
        fechaDePublicacion: "2024-06-24",
        cantidadDeFotos: 10,
        metrosCuadrados: 386,
        precioDeVenta: 193294
    },
    {
        nombre: "Propiedad 2062",
        direccion: "Calle 41, Palma",
        fechaDePublicacion: "2024-06-26",
        cantidadDeFotos: 19,
        metrosCuadrados: 446,
        precioDeVenta: 332435
    },
    {
        nombre: "Propiedad 2063",
        direccion: "Calle 79, Bilbao",
        fechaDePublicacion: "2024-06-02",
        cantidadDeFotos: 16,
        metrosCuadrados: 118,
        precioDeVenta: 189891
    },
    {
        nombre: "Propiedad 2064",
        direccion: "Calle 80, Zaragoza",
        fechaDePublicacion: "2024-06-09",
        cantidadDeFotos: 12,
        metrosCuadrados: 131,
        precioDeVenta: 119002
    },
    {
        nombre: "Propiedad 2065",
        direccion: "Calle 15, Málaga",
        fechaDePublicacion: "2024-06-20",
        cantidadDeFotos: 15,
        metrosCuadrados: 410,
        precioDeVenta: 994797
    },
    {
        nombre: "Propiedad 2066",
        direccion: "Calle 29, Las Palmas de Gran Canaria",
        fechaDePublicacion: "2024-06-22",
        cantidadDeFotos: 20,
        metrosCuadrados: 256,
        precioDeVenta: 894501
    },
    {
        nombre: "Propiedad 2067",
        direccion: "Calle 39, Barcelona",
        fechaDePublicacion: "2024-06-13",
        cantidadDeFotos: 20,
        metrosCuadrados: 483,
        precioDeVenta: 892120
    },
    {
        nombre: "Propiedad 2068",
        direccion: "Calle 89, Palma",
        fechaDePublicacion: "2024-06-19",
        cantidadDeFotos: 17,
        metrosCuadrados: 221,
        precioDeVenta: 850436
    },
    {
        nombre: "Propiedad 2069",
        direccion: "Calle 37, Barcelona",
        fechaDePublicacion: "2024-06-18",
        cantidadDeFotos: 9,
        metrosCuadrados: 388,
        precioDeVenta: 357306
    },
    {
        nombre: "Propiedad 2070",
        direccion: "Calle 29, Las Palmas de Gran Canaria",
        fechaDePublicacion: "2024-06-03",
        cantidadDeFotos: 16,
        metrosCuadrados: 269,
        precioDeVenta: 789321
    },
    {
        nombre: "Propiedad 2071",
        direccion: "Calle 89, Valencia",
        fechaDePublicacion: "2024-06-08",
        cantidadDeFotos: 14,
        metrosCuadrados: 430,
        precioDeVenta: 590651
    },
    {
        nombre: "Propiedad 2072",
        direccion: "Calle 4, Palma",
        fechaDePublicacion: "2024-06-03",
        cantidadDeFotos: 9,
        metrosCuadrados: 163,
        precioDeVenta: 419415
    },
    {
        nombre: "Propiedad 2073",
        direccion: "Calle 78, Murcia",
        fechaDePublicacion: "2024-06-21",
        cantidadDeFotos: 13,
        metrosCuadrados: 93,
        precioDeVenta: 264514
    },
    {
        nombre: "Propiedad 2074",
        direccion: "Calle 32, Málaga",
        fechaDePublicacion: "2024-06-18",
        cantidadDeFotos: 19,
        metrosCuadrados: 375,
        precioDeVenta: 933394
    },
    {
        nombre: "Propiedad 2075",
        direccion: "Calle 86, Sevilla",
        fechaDePublicacion: "2024-06-19",
        cantidadDeFotos: 12,
        metrosCuadrados: 103,
        precioDeVenta: 393892
    },
    {
        nombre: "Propiedad 2076",
        direccion: "Calle 57, Valencia",
        fechaDePublicacion: "2024-06-28",
        cantidadDeFotos: 16,
        metrosCuadrados: 393,
        precioDeVenta: 719717
    },
    {
        nombre: "Propiedad 2077",
        direccion: "Calle 83, Madrid",
        fechaDePublicacion: "2024-06-21",
        cantidadDeFotos: 7,
        metrosCuadrados: 149,
        precioDeVenta: 639530
    },
    {
        nombre: "Propiedad 2078",
        direccion: "Calle 15, Barcelona",
        fechaDePublicacion: "2024-06-12",
        cantidadDeFotos: 20,
        metrosCuadrados: 176,
        precioDeVenta: 261694
    },
    {
        nombre: "Propiedad 2079",
        direccion: "Calle 91, Zaragoza",
        fechaDePublicacion: "2024-06-10",
        cantidadDeFotos: 17,
        metrosCuadrados: 156,
        precioDeVenta: 377017
    },
    {
        nombre: "Propiedad 2080",
        direccion: "Calle 28, Madrid",
        fechaDePublicacion: "2024-06-02",
        cantidadDeFotos: 12,
        metrosCuadrados: 496,
        precioDeVenta: 384878
    },
    {
        nombre: "Propiedad 2081",
        direccion: "Calle 78, Palma",
        fechaDePublicacion: "2024-06-27",
        cantidadDeFotos: 9,
        metrosCuadrados: 460,
        precioDeVenta: 223160
    },
    {
        nombre: "Propiedad 2082",
        direccion: "Calle 63, Zaragoza",
        fechaDePublicacion: "2024-06-04",
        cantidadDeFotos: 11,
        metrosCuadrados: 68,
        precioDeVenta: 913927
    },
    {
        nombre: "Propiedad 2083",
        direccion: "Calle 33, Las Palmas de Gran Canaria",
        fechaDePublicacion: "2024-06-06",
        cantidadDeFotos: 14,
        metrosCuadrados: 206,
        precioDeVenta: 261020
    },
    {
        nombre: "Propiedad 2084",
        direccion: "Calle 86, Barcelona",
        fechaDePublicacion: "2024-06-10",
        cantidadDeFotos: 3,
        metrosCuadrados: 90,
        precioDeVenta: 807589
    },
    {
        nombre: "Propiedad 2085",
        direccion: "Calle 71, Zaragoza",
        fechaDePublicacion: "2024-06-22",
        cantidadDeFotos: 6,
        metrosCuadrados: 100,
        precioDeVenta: 600359
    },
    {
        nombre: "Propiedad 2086",
        direccion: "Calle 96, Valencia",
        fechaDePublicacion: "2024-06-15",
        cantidadDeFotos: 8,
        metrosCuadrados: 120,
        precioDeVenta: 792289
    },
    {
        nombre: "Propiedad 2087",
        direccion: "Calle 5, Madrid",
        fechaDePublicacion: "2024-06-25",
        cantidadDeFotos: 7,
        metrosCuadrados: 370,
        precioDeVenta: 341574
    },
    {
        nombre: "Propiedad 2088",
        direccion: "Calle 28, Las Palmas de Gran Canaria",
        fechaDePublicacion: "2024-06-16",
        cantidadDeFotos: 9,
        metrosCuadrados: 457,
        precioDeVenta: 918447
    },
    {
        nombre: "Propiedad 2089",
        direccion: "Calle 77, Málaga",
        fechaDePublicacion: "2024-06-08",
        cantidadDeFotos: 14,
        metrosCuadrados: 107,
        precioDeVenta: 431176
    },
    {
        nombre: "Propiedad 2090",
        direccion: "Calle 88, Zaragoza",
        fechaDePublicacion: "2024-06-04",
        cantidadDeFotos: 2,
        metrosCuadrados: 422,
        precioDeVenta: 89214
    },
    {
        nombre: "Propiedad 2091",
        direccion: "Calle 41, Málaga",
        fechaDePublicacion: "2024-06-28",
        cantidadDeFotos: 16,
        metrosCuadrados: 488,
        precioDeVenta: 112305
    },
    {
        nombre: "Propiedad 2092",
        direccion: "Calle 14, Sevilla",
        fechaDePublicacion: "2024-06-01",
        cantidadDeFotos: 18,
        metrosCuadrados: 476,
        precioDeVenta: 917237
    },
    {
        nombre: "Propiedad 2093",
        direccion: "Calle 26, Bilbao",
        fechaDePublicacion: "2024-06-27",
        cantidadDeFotos: 5,
        metrosCuadrados: 404,
        precioDeVenta: 711815
    },
    {
        nombre: "Propiedad 2094",
        direccion: "Calle 34, Sevilla",
        fechaDePublicacion: "2024-06-08",
        cantidadDeFotos: 4,
        metrosCuadrados: 111,
        precioDeVenta: 932469
    },
    {
        nombre: "Propiedad 2095",
        direccion: "Calle 74, Las Palmas de Gran Canaria",
        fechaDePublicacion: "2024-06-21",
        cantidadDeFotos: 20,
        metrosCuadrados: 434,
        precioDeVenta: 588287
    },
    {
        nombre: "Propiedad 2096",
        direccion: "Calle 59, Sevilla",
        fechaDePublicacion: "2024-06-09",
        cantidadDeFotos: 8,
        metrosCuadrados: 416,
        precioDeVenta: 120340
    },
    {
        nombre: "Propiedad 2097",
        direccion: "Calle 4, Barcelona",
        fechaDePublicacion: "2024-06-26",
        cantidadDeFotos: 16,
        metrosCuadrados: 302,
        precioDeVenta: 189909
    },
    {
        nombre: "Propiedad 2098",
        direccion: "Calle 48, Sevilla",
        fechaDePublicacion: "2024-06-06",
        cantidadDeFotos: 12,
        metrosCuadrados: 388,
        precioDeVenta: 446163
    },
    {
        nombre: "Propiedad 2099",
        direccion: "Calle 62, Murcia",
        fechaDePublicacion: "2024-06-21",
        cantidadDeFotos: 18,
        metrosCuadrados: 460,
        precioDeVenta: 879678
    },
    {
        nombre: "Propiedad 2100",
        direccion: "Calle 18, Málaga",
        fechaDePublicacion: "2024-06-08",
        cantidadDeFotos: 7,
        metrosCuadrados: 371,
        precioDeVenta: 730866
    },
    {
        nombre: "Propiedad 2101",
        direccion: "Calle 5, Valencia",
        fechaDePublicacion: "2024-06-10",
        cantidadDeFotos: 5,
        metrosCuadrados: 244,
        precioDeVenta: 920675
    },
    {
        nombre: "Propiedad 2102",
        direccion: "Calle 28, Bilbao",
        fechaDePublicacion: "2024-06-20",
        cantidadDeFotos: 9,
        metrosCuadrados: 392,
        precioDeVenta: 534994
    },
    {
        nombre: "Propiedad 2103",
        direccion: "Calle 87, Palma",
        fechaDePublicacion: "2024-06-21",
        cantidadDeFotos: 12,
        metrosCuadrados: 62,
        precioDeVenta: 320964
    },
    {
        nombre: "Propiedad 2104",
        direccion: "Calle 59, Bilbao",
        fechaDePublicacion: "2024-06-07",
        cantidadDeFotos: 13,
        metrosCuadrados: 329,
        precioDeVenta: 482149
    },
    {
        nombre: "Propiedad 2105",
        direccion: "Calle 76, Bilbao",
        fechaDePublicacion: "2024-06-09",
        cantidadDeFotos: 12,
        metrosCuadrados: 124,
        precioDeVenta: 387472
    },
    {
        nombre: "Propiedad 2106",
        direccion: "Calle 91, Barcelona",
        fechaDePublicacion: "2024-06-20",
        cantidadDeFotos: 6,
        metrosCuadrados: 280,
        precioDeVenta: 882639
    },
    {
        nombre: "Propiedad 2107",
        direccion: "Calle 27, Zaragoza",
        fechaDePublicacion: "2024-06-02",
        cantidadDeFotos: 2,
        metrosCuadrados: 202,
        precioDeVenta: 654692
    },
    {
        nombre: "Propiedad 2108",
        direccion: "Calle 99, Las Palmas de Gran Canaria",
        fechaDePublicacion: "2024-06-22",
        cantidadDeFotos: 13,
        metrosCuadrados: 277,
        precioDeVenta: 234694
    },
    {
        nombre: "Propiedad 2109",
        direccion: "Calle 45, Bilbao",
        fechaDePublicacion: "2024-06-23",
        cantidadDeFotos: 15,
        metrosCuadrados: 155,
        precioDeVenta: 620612
    },
    {
        nombre: "Propiedad 2110",
        direccion: "Calle 87, Barcelona",
        fechaDePublicacion: "2024-06-06",
        cantidadDeFotos: 7,
        metrosCuadrados: 439,
        precioDeVenta: 669379
    },
    {
        nombre: "Propiedad 2111",
        direccion: "Calle 8, Murcia",
        fechaDePublicacion: "2024-06-16",
        cantidadDeFotos: 3,
        metrosCuadrados: 430,
        precioDeVenta: 135621
    },
    {
        nombre: "Propiedad 2112",
        direccion: "Calle 27, Madrid",
        fechaDePublicacion: "2024-06-23",
        cantidadDeFotos: 12,
        metrosCuadrados: 409,
        precioDeVenta: 253870
    },
    {
        nombre: "Propiedad 2113",
        direccion: "Calle 18, Bilbao",
        fechaDePublicacion: "2024-06-09",
        cantidadDeFotos: 13,
        metrosCuadrados: 65,
        precioDeVenta: 679032
    },
    {
        nombre: "Propiedad 2114",
        direccion: "Calle 7, Sevilla",
        fechaDePublicacion: "2024-06-02",
        cantidadDeFotos: 2,
        metrosCuadrados: 424,
        precioDeVenta: 419853
    },
    {
        nombre: "Propiedad 2115",
        direccion: "Calle 44, Valencia",
        fechaDePublicacion: "2024-06-25",
        cantidadDeFotos: 10,
        metrosCuadrados: 222,
        precioDeVenta: 338304
    },
    {
        nombre: "Propiedad 2116",
        direccion: "Calle 55, Barcelona",
        fechaDePublicacion: "2024-06-13",
        cantidadDeFotos: 7,
        metrosCuadrados: 146,
        precioDeVenta: 232070
    },
    {
        nombre: "Propiedad 2117",
        direccion: "Calle 40, Palma",
        fechaDePublicacion: "2024-06-26",
        cantidadDeFotos: 10,
        metrosCuadrados: 492,
        precioDeVenta: 127994
    },
    {
        nombre: "Propiedad 2118",
        direccion: "Calle 77, Las Palmas de Gran Canaria",
        fechaDePublicacion: "2024-06-24",
        cantidadDeFotos: 19,
        metrosCuadrados: 299,
        precioDeVenta: 95507
    },
    {
        nombre: "Propiedad 2119",
        direccion: "Calle 78, Valencia",
        fechaDePublicacion: "2024-06-27",
        cantidadDeFotos: 17,
        metrosCuadrados: 76,
        precioDeVenta: 168382
    },
    {
        nombre: "Propiedad 2120",
        direccion: "Calle 94, Valencia",
        fechaDePublicacion: "2024-06-02",
        cantidadDeFotos: 2,
        metrosCuadrados: 165,
        precioDeVenta: 753875
    },
    {
        nombre: "Propiedad 2121",
        direccion: "Calle 52, Madrid",
        fechaDePublicacion: "2024-06-08",
        cantidadDeFotos: 13,
        metrosCuadrados: 420,
        precioDeVenta: 380554
    },
    {
        nombre: "Propiedad 2122",
        direccion: "Calle 43, Bilbao",
        fechaDePublicacion: "2024-06-08",
        cantidadDeFotos: 4,
        metrosCuadrados: 283,
        precioDeVenta: 246701
    },
    {
        nombre: "Propiedad 2123",
        direccion: "Calle 97, Barcelona",
        fechaDePublicacion: "2024-06-05",
        cantidadDeFotos: 4,
        metrosCuadrados: 228,
        precioDeVenta: 182462
    },
    {
        nombre: "Propiedad 2124",
        direccion: "Calle 93, Bilbao",
        fechaDePublicacion: "2024-06-10",
        cantidadDeFotos: 13,
        metrosCuadrados: 192,
        precioDeVenta: 527585
    },
    {
        nombre: "Propiedad 2125",
        direccion: "Calle 91, Bilbao",
        fechaDePublicacion: "2024-06-21",
        cantidadDeFotos: 5,
        metrosCuadrados: 56,
        precioDeVenta: 534320
    },
    {
        nombre: "Propiedad 2126",
        direccion: "Calle 78, Murcia",
        fechaDePublicacion: "2024-06-09",
        cantidadDeFotos: 18,
        metrosCuadrados: 472,
        precioDeVenta: 414122
    },
    {
        nombre: "Propiedad 2127",
        direccion: "Calle 79, Madrid",
        fechaDePublicacion: "2024-06-11",
        cantidadDeFotos: 9,
        metrosCuadrados: 391,
        precioDeVenta: 541152
    },
    {
        nombre: "Propiedad 2128",
        direccion: "Calle 91, Palma",
        fechaDePublicacion: "2024-06-08",
        cantidadDeFotos: 11,
        metrosCuadrados: 139,
        precioDeVenta: 616269
    },
    {
        nombre: "Propiedad 2129",
        direccion: "Calle 11, Zaragoza",
        fechaDePublicacion: "2024-06-19",
        cantidadDeFotos: 14,
        metrosCuadrados: 467,
        precioDeVenta: 745334
    },
    {
        nombre: "Propiedad 2130",
        direccion: "Calle 17, Palma",
        fechaDePublicacion: "2024-06-12",
        cantidadDeFotos: 14,
        metrosCuadrados: 365,
        precioDeVenta: 192327
    },
    {
        nombre: "Propiedad 2131",
        direccion: "Calle 65, Las Palmas de Gran Canaria",
        fechaDePublicacion: "2024-06-23",
        cantidadDeFotos: 15,
        metrosCuadrados: 249,
        precioDeVenta: 178022
    },
    {
        nombre: "Propiedad 2132",
        direccion: "Calle 93, Madrid",
        fechaDePublicacion: "2024-06-05",
        cantidadDeFotos: 9,
        metrosCuadrados: 426,
        precioDeVenta: 182676
    },
    {
        nombre: "Propiedad 2133",
        direccion: "Calle 78, Barcelona",
        fechaDePublicacion: "2024-06-01",
        cantidadDeFotos: 2,
        metrosCuadrados: 295,
        precioDeVenta: 726692
    },
    {
        nombre: "Propiedad 2134",
        direccion: "Calle 99, Zaragoza",
        fechaDePublicacion: "2024-06-18",
        cantidadDeFotos: 2,
        metrosCuadrados: 99,
        precioDeVenta: 790684
    },
    {
        nombre: "Propiedad 2135",
        direccion: "Calle 93, Madrid",
        fechaDePublicacion: "2024-06-23",
        cantidadDeFotos: 3,
        metrosCuadrados: 358,
        precioDeVenta: 893999
    },
    {
        nombre: "Propiedad 2136",
        direccion: "Calle 22, Palma",
        fechaDePublicacion: "2024-06-24",
        cantidadDeFotos: 4,
        metrosCuadrados: 119,
        precioDeVenta: 184599
    },
    {
        nombre: "Propiedad 2137",
        direccion: "Calle 82, Barcelona",
        fechaDePublicacion: "2024-06-17",
        cantidadDeFotos: 14,
        metrosCuadrados: 295,
        precioDeVenta: 484837
    },
    {
        nombre: "Propiedad 2138",
        direccion: "Calle 32, Sevilla",
        fechaDePublicacion: "2024-05-31",
        cantidadDeFotos: 13,
        metrosCuadrados: 392,
        precioDeVenta: 334120
    },
    {
        nombre: "Propiedad 2139",
        direccion: "Calle 92, Málaga",
        fechaDePublicacion: "2024-06-14",
        cantidadDeFotos: 18,
        metrosCuadrados: 408,
        precioDeVenta: 198123
    },
    {
        nombre: "Propiedad 2140",
        direccion: "Calle 17, Barcelona",
        fechaDePublicacion: "2024-06-07",
        cantidadDeFotos: 9,
        metrosCuadrados: 335,
        precioDeVenta: 123732
    },
    {
        nombre: "Propiedad 2141",
        direccion: "Calle 87, Madrid",
        fechaDePublicacion: "2024-06-19",
        cantidadDeFotos: 2,
        metrosCuadrados: 374,
        precioDeVenta: 571410
    },
    {
        nombre: "Propiedad 2142",
        direccion: "Calle 85, Zaragoza",
        fechaDePublicacion: "2024-06-02",
        cantidadDeFotos: 6,
        metrosCuadrados: 273,
        precioDeVenta: 428583
    },
    {
        nombre: "Propiedad 2143",
        direccion: "Calle 36, Barcelona",
        fechaDePublicacion: "2024-06-12",
        cantidadDeFotos: 18,
        metrosCuadrados: 212,
        precioDeVenta: 974827
    },
    {
        nombre: "Propiedad 2144",
        direccion: "Calle 26, Málaga",
        fechaDePublicacion: "2024-06-03",
        cantidadDeFotos: 15,
        metrosCuadrados: 118,
        precioDeVenta: 746163
    },
    {
        nombre: "Propiedad 2145",
        direccion: "Calle 21, Málaga",
        fechaDePublicacion: "2024-06-24",
        cantidadDeFotos: 16,
        metrosCuadrados: 55,
        precioDeVenta: 900505
    },
    {
        nombre: "Propiedad 2146",
        direccion: "Calle 97, Palma",
        fechaDePublicacion: "2024-06-22",
        cantidadDeFotos: 6,
        metrosCuadrados: 256,
        precioDeVenta: 616175
    },
    {
        nombre: "Propiedad 2147",
        direccion: "Calle 65, Sevilla",
        fechaDePublicacion: "2024-06-17",
        cantidadDeFotos: 11,
        metrosCuadrados: 103,
        precioDeVenta: 52466
    },
    {
        nombre: "Propiedad 2148",
        direccion: "Calle 38, Málaga",
        fechaDePublicacion: "2024-06-14",
        cantidadDeFotos: 1,
        metrosCuadrados: 426,
        precioDeVenta: 377273
    },
    {
        nombre: "Propiedad 2149",
        direccion: "Calle 18, Bilbao",
        fechaDePublicacion: "2024-06-08",
        cantidadDeFotos: 17,
        metrosCuadrados: 250,
        precioDeVenta: 302107
    },
    {
        nombre: "Propiedad 2150",
        direccion: "Calle 38, Málaga",
        fechaDePublicacion: "2024-06-10",
        cantidadDeFotos: 4,
        metrosCuadrados: 273,
        precioDeVenta: 611496
    },
    {
        nombre: "Propiedad 2151",
        direccion: "Calle 21, Bilbao",
        fechaDePublicacion: "2024-06-26",
        cantidadDeFotos: 20,
        metrosCuadrados: 156,
        precioDeVenta: 678994
    },
    {
        nombre: "Propiedad 2152",
        direccion: "Calle 52, Las Palmas de Gran Canaria",
        fechaDePublicacion: "2024-06-13",
        cantidadDeFotos: 8,
        metrosCuadrados: 390,
        precioDeVenta: 439843
    },
    {
        nombre: "Propiedad 2153",
        direccion: "Calle 34, Málaga",
        fechaDePublicacion: "2024-06-08",
        cantidadDeFotos: 16,
        metrosCuadrados: 461,
        precioDeVenta: 817249
    },
    {
        nombre: "Propiedad 2154",
        direccion: "Calle 60, Madrid",
        fechaDePublicacion: "2024-06-05",
        cantidadDeFotos: 18,
        metrosCuadrados: 139,
        precioDeVenta: 170977
    },
    {
        nombre: "Propiedad 2155",
        direccion: "Calle 14, Málaga",
        fechaDePublicacion: "2024-06-12",
        cantidadDeFotos: 14,
        metrosCuadrados: 169,
        precioDeVenta: 216481
    },
    {
        nombre: "Propiedad 2156",
        direccion: "Calle 8, Barcelona",
        fechaDePublicacion: "2024-06-04",
        cantidadDeFotos: 14,
        metrosCuadrados: 328,
        precioDeVenta: 197779
    },
    {
        nombre: "Propiedad 2157",
        direccion: "Calle 71, Bilbao",
        fechaDePublicacion: "2024-06-12",
        cantidadDeFotos: 2,
        metrosCuadrados: 253,
        precioDeVenta: 575791
    },
    {
        nombre: "Propiedad 2158",
        direccion: "Calle 46, Palma",
        fechaDePublicacion: "2024-06-06",
        cantidadDeFotos: 7,
        metrosCuadrados: 96,
        precioDeVenta: 892402
    },
    {
        nombre: "Propiedad 2159",
        direccion: "Calle 16, Valencia",
        fechaDePublicacion: "2024-06-20",
        cantidadDeFotos: 19,
        metrosCuadrados: 100,
        precioDeVenta: 792449
    },
    {
        nombre: "Propiedad 2160",
        direccion: "Calle 5, Valencia",
        fechaDePublicacion: "2024-06-20",
        cantidadDeFotos: 12,
        metrosCuadrados: 487,
        precioDeVenta: 570039
    },
    {
        nombre: "Propiedad 2161",
        direccion: "Calle 27, Bilbao",
        fechaDePublicacion: "2024-06-26",
        cantidadDeFotos: 13,
        metrosCuadrados: 309,
        precioDeVenta: 214740
    },
    {
        nombre: "Propiedad 2162",
        direccion: "Calle 57, Barcelona",
        fechaDePublicacion: "2024-06-15",
        cantidadDeFotos: 5,
        metrosCuadrados: 369,
        precioDeVenta: 882481
    },
    {
        nombre: "Propiedad 2163",
        direccion: "Calle 47, Murcia",
        fechaDePublicacion: "2024-06-04",
        cantidadDeFotos: 17,
        metrosCuadrados: 370,
        precioDeVenta: 427289
    },
    {
        nombre: "Propiedad 2164",
        direccion: "Calle 51, Las Palmas de Gran Canaria",
        fechaDePublicacion: "2024-06-15",
        cantidadDeFotos: 9,
        metrosCuadrados: 185,
        precioDeVenta: 81119
    },
    {
        nombre: "Propiedad 2165",
        direccion: "Calle 28, Las Palmas de Gran Canaria",
        fechaDePublicacion: "2024-06-11",
        cantidadDeFotos: 15,
        metrosCuadrados: 185,
        precioDeVenta: 352665
    },
    {
        nombre: "Propiedad 2166",
        direccion: "Calle 70, Madrid",
        fechaDePublicacion: "2024-06-03",
        cantidadDeFotos: 13,
        metrosCuadrados: 141,
        precioDeVenta: 918683
    },
    {
        nombre: "Propiedad 2167",
        direccion: "Calle 2, Sevilla",
        fechaDePublicacion: "2024-06-12",
        cantidadDeFotos: 17,
        metrosCuadrados: 498,
        precioDeVenta: 358756
    },
    {
        nombre: "Propiedad 2168",
        direccion: "Calle 9, Sevilla",
        fechaDePublicacion: "2024-06-04",
        cantidadDeFotos: 8,
        metrosCuadrados: 350,
        precioDeVenta: 114535
    },
    {
        nombre: "Propiedad 2169",
        direccion: "Calle 69, Murcia",
        fechaDePublicacion: "2024-06-10",
        cantidadDeFotos: 10,
        metrosCuadrados: 268,
        precioDeVenta: 873037
    },
    {
        nombre: "Propiedad 2170",
        direccion: "Calle 89, Palma",
        fechaDePublicacion: "2024-06-01",
        cantidadDeFotos: 5,
        metrosCuadrados: 88,
        precioDeVenta: 887976
    },
    {
        nombre: "Propiedad 2171",
        direccion: "Calle 53, Sevilla",
        fechaDePublicacion: "2024-06-23",
        cantidadDeFotos: 5,
        metrosCuadrados: 395,
        precioDeVenta: 350859
    },
    {
        nombre: "Propiedad 2172",
        direccion: "Calle 26, Murcia",
        fechaDePublicacion: "2024-06-18",
        cantidadDeFotos: 11,
        metrosCuadrados: 404,
        precioDeVenta: 299098
    },
    {
        nombre: "Propiedad 2173",
        direccion: "Calle 84, Palma",
        fechaDePublicacion: "2024-06-11",
        cantidadDeFotos: 20,
        metrosCuadrados: 172,
        precioDeVenta: 757745
    },
    {
        nombre: "Propiedad 2174",
        direccion: "Calle 55, Barcelona",
        fechaDePublicacion: "2024-06-14",
        cantidadDeFotos: 20,
        metrosCuadrados: 424,
        precioDeVenta: 567076
    },
    {
        nombre: "Propiedad 2175",
        direccion: "Calle 48, Las Palmas de Gran Canaria",
        fechaDePublicacion: "2024-06-22",
        cantidadDeFotos: 10,
        metrosCuadrados: 199,
        precioDeVenta: 439805
    },
    {
        nombre: "Propiedad 2176",
        direccion: "Calle 27, Zaragoza",
        fechaDePublicacion: "2024-06-08",
        cantidadDeFotos: 9,
        metrosCuadrados: 237,
        precioDeVenta: 249057
    },
    {
        nombre: "Propiedad 2177",
        direccion: "Calle 42, Murcia",
        fechaDePublicacion: "2024-06-25",
        cantidadDeFotos: 8,
        metrosCuadrados: 271,
        precioDeVenta: 837130
    },
    {
        nombre: "Propiedad 2178",
        direccion: "Calle 52, Valencia",
        fechaDePublicacion: "2024-06-08",
        cantidadDeFotos: 4,
        metrosCuadrados: 229,
        precioDeVenta: 381591
    },
    {
        nombre: "Propiedad 2179",
        direccion: "Calle 62, Madrid",
        fechaDePublicacion: "2024-06-02",
        cantidadDeFotos: 7,
        metrosCuadrados: 159,
        precioDeVenta: 304798
    },
    {
        nombre: "Propiedad 2180",
        direccion: "Calle 6, Barcelona",
        fechaDePublicacion: "2024-06-28",
        cantidadDeFotos: 2,
        metrosCuadrados: 491,
        precioDeVenta: 614955
    },
    {
        nombre: "Propiedad 2181",
        direccion: "Calle 41, Zaragoza",
        fechaDePublicacion: "2024-06-25",
        cantidadDeFotos: 5,
        metrosCuadrados: 294,
        precioDeVenta: 675959
    },
    {
        nombre: "Propiedad 2182",
        direccion: "Calle 65, Murcia",
        fechaDePublicacion: "2024-06-19",
        cantidadDeFotos: 4,
        metrosCuadrados: 422,
        precioDeVenta: 673685
    },
    {
        nombre: "Propiedad 2183",
        direccion: "Calle 78, Valencia",
        fechaDePublicacion: "2024-06-12",
        cantidadDeFotos: 6,
        metrosCuadrados: 306,
        precioDeVenta: 803713
    },
    {
        nombre: "Propiedad 2184",
        direccion: "Calle 14, Barcelona",
        fechaDePublicacion: "2024-06-14",
        cantidadDeFotos: 9,
        metrosCuadrados: 412,
        precioDeVenta: 128401
    },
    {
        nombre: "Propiedad 2185",
        direccion: "Calle 35, Palma",
        fechaDePublicacion: "2024-06-19",
        cantidadDeFotos: 18,
        metrosCuadrados: 67,
        precioDeVenta: 839277
    },
    {
        nombre: "Propiedad 2186",
        direccion: "Calle 15, Murcia",
        fechaDePublicacion: "2024-06-09",
        cantidadDeFotos: 6,
        metrosCuadrados: 162,
        precioDeVenta: 805766
    },
    {
        nombre: "Propiedad 2187",
        direccion: "Calle 72, Madrid",
        fechaDePublicacion: "2024-06-27",
        cantidadDeFotos: 15,
        metrosCuadrados: 348,
        precioDeVenta: 981416
    },
    {
        nombre: "Propiedad 2188",
        direccion: "Calle 90, Las Palmas de Gran Canaria",
        fechaDePublicacion: "2024-06-08",
        cantidadDeFotos: 9,
        metrosCuadrados: 382,
        precioDeVenta: 444159
    },
    {
        nombre: "Propiedad 2189",
        direccion: "Calle 30, Las Palmas de Gran Canaria",
        fechaDePublicacion: "2024-06-18",
        cantidadDeFotos: 11,
        metrosCuadrados: 401,
        precioDeVenta: 930214
    },
    {
        nombre: "Propiedad 2190",
        direccion: "Calle 48, Valencia",
        fechaDePublicacion: "2024-06-15",
        cantidadDeFotos: 9,
        metrosCuadrados: 54,
        precioDeVenta: 802368
    },
    {
        nombre: "Propiedad 2191",
        direccion: "Calle 85, Barcelona",
        fechaDePublicacion: "2024-06-01",
        cantidadDeFotos: 20,
        metrosCuadrados: 462,
        precioDeVenta: 573513
    },
    {
        nombre: "Propiedad 2192",
        direccion: "Calle 35, Zaragoza",
        fechaDePublicacion: "2024-06-23",
        cantidadDeFotos: 9,
        metrosCuadrados: 348,
        precioDeVenta: 432124
    },
    {
        nombre: "Propiedad 2193",
        direccion: "Calle 72, Barcelona",
        fechaDePublicacion: "2024-06-27",
        cantidadDeFotos: 13,
        metrosCuadrados: 433,
        precioDeVenta: 427479
    },
    {
        nombre: "Propiedad 2194",
        direccion: "Calle 67, Málaga",
        fechaDePublicacion: "2024-06-08",
        cantidadDeFotos: 6,
        metrosCuadrados: 88,
        precioDeVenta: 396818
    },
    {
        nombre: "Propiedad 2195",
        direccion: "Calle 12, Zaragoza",
        fechaDePublicacion: "2024-06-18",
        cantidadDeFotos: 17,
        metrosCuadrados: 464,
        precioDeVenta: 294122
    },
    {
        nombre: "Propiedad 2196",
        direccion: "Calle 40, Las Palmas de Gran Canaria",
        fechaDePublicacion: "2024-06-27",
        cantidadDeFotos: 13,
        metrosCuadrados: 358,
        precioDeVenta: 385004
    },
    {
        nombre: "Propiedad 2197",
        direccion: "Calle 56, Sevilla",
        fechaDePublicacion: "2024-06-10",
        cantidadDeFotos: 14,
        metrosCuadrados: 128,
        precioDeVenta: 225043
    },
    {
        nombre: "Propiedad 2198",
        direccion: "Calle 55, Las Palmas de Gran Canaria",
        fechaDePublicacion: "2024-06-22",
        cantidadDeFotos: 9,
        metrosCuadrados: 64,
        precioDeVenta: 366904
    },
    {
        nombre: "Propiedad 2199",
        direccion: "Calle 17, Las Palmas de Gran Canaria",
        fechaDePublicacion: "2024-06-26",
        cantidadDeFotos: 6,
        metrosCuadrados: 300,
        precioDeVenta: 140484
    },
    {
        nombre: "Propiedad 2200",
        direccion: "Calle 89, Zaragoza",
        fechaDePublicacion: "2024-06-29",
        cantidadDeFotos: 12,
        metrosCuadrados: 350,
        precioDeVenta: 403240
    },
    {
        nombre: "Propiedad 2201",
        direccion: "Calle 82, Madrid",
        fechaDePublicacion: "2024-06-22",
        cantidadDeFotos: 9,
        metrosCuadrados: 398,
        precioDeVenta: 216325
    },
    {
        nombre: "Propiedad 2202",
        direccion: "Calle 87, Zaragoza",
        fechaDePublicacion: "2024-06-29",
        cantidadDeFotos: 20,
        metrosCuadrados: 67,
        precioDeVenta: 833823
    },
    {
        nombre: "Propiedad 2203",
        direccion: "Calle 10, Málaga",
        fechaDePublicacion: "2024-06-07",
        cantidadDeFotos: 5,
        metrosCuadrados: 332,
        precioDeVenta: 473667
    },
    {
        nombre: "Propiedad 2204",
        direccion: "Calle 26, Bilbao",
        fechaDePublicacion: "2024-06-22",
        cantidadDeFotos: 17,
        metrosCuadrados: 333,
        precioDeVenta: 893473
    },
    {
        nombre: "Propiedad 2205",
        direccion: "Calle 68, Las Palmas de Gran Canaria",
        fechaDePublicacion: "2024-06-11",
        cantidadDeFotos: 16,
        metrosCuadrados: 179,
        precioDeVenta: 248595
    },
    {
        nombre: "Propiedad 2206",
        direccion: "Calle 19, Palma",
        fechaDePublicacion: "2024-06-13",
        cantidadDeFotos: 19,
        metrosCuadrados: 269,
        precioDeVenta: 199751
    },
    {
        nombre: "Propiedad 2207",
        direccion: "Calle 24, Murcia",
        fechaDePublicacion: "2024-06-05",
        cantidadDeFotos: 20,
        metrosCuadrados: 475,
        precioDeVenta: 975070
    },
    {
        nombre: "Propiedad 2208",
        direccion: "Calle 11, Palma",
        fechaDePublicacion: "2024-06-22",
        cantidadDeFotos: 12,
        metrosCuadrados: 421,
        precioDeVenta: 924975
    },
    {
        nombre: "Propiedad 2209",
        direccion: "Calle 25, Zaragoza",
        fechaDePublicacion: "2024-06-17",
        cantidadDeFotos: 9,
        metrosCuadrados: 339,
        precioDeVenta: 96987
    },
    {
        nombre: "Propiedad 2210",
        direccion: "Calle 3, Valencia",
        fechaDePublicacion: "2024-06-03",
        cantidadDeFotos: 20,
        metrosCuadrados: 177,
        precioDeVenta: 965749
    },
    {
        nombre: "Propiedad 2211",
        direccion: "Calle 37, Sevilla",
        fechaDePublicacion: "2024-06-15",
        cantidadDeFotos: 11,
        metrosCuadrados: 50,
        precioDeVenta: 95076
    },
    {
        nombre: "Propiedad 2212",
        direccion: "Calle 43, Bilbao",
        fechaDePublicacion: "2024-06-02",
        cantidadDeFotos: 7,
        metrosCuadrados: 363,
        precioDeVenta: 164713
    },
    {
        nombre: "Propiedad 2213",
        direccion: "Calle 81, Málaga",
        fechaDePublicacion: "2024-06-22",
        cantidadDeFotos: 4,
        metrosCuadrados: 330,
        precioDeVenta: 154920
    },
    {
        nombre: "Propiedad 2214",
        direccion: "Calle 83, Las Palmas de Gran Canaria",
        fechaDePublicacion: "2024-06-03",
        cantidadDeFotos: 6,
        metrosCuadrados: 285,
        precioDeVenta: 809621
    },
    {
        nombre: "Propiedad 2215",
        direccion: "Calle 21, Barcelona",
        fechaDePublicacion: "2024-06-27",
        cantidadDeFotos: 16,
        metrosCuadrados: 410,
        precioDeVenta: 721626
    },
    {
        nombre: "Propiedad 2216",
        direccion: "Calle 58, Sevilla",
        fechaDePublicacion: "2024-06-15",
        cantidadDeFotos: 20,
        metrosCuadrados: 86,
        precioDeVenta: 400924
    },
    {
        nombre: "Propiedad 2217",
        direccion: "Calle 69, Bilbao",
        fechaDePublicacion: "2024-06-12",
        cantidadDeFotos: 17,
        metrosCuadrados: 432,
        precioDeVenta: 812518
    },
    {
        nombre: "Propiedad 2218",
        direccion: "Calle 45, Sevilla",
        fechaDePublicacion: "2024-06-22",
        cantidadDeFotos: 9,
        metrosCuadrados: 298,
        precioDeVenta: 156194
    },
    {
        nombre: "Propiedad 2219",
        direccion: "Calle 30, Bilbao",
        fechaDePublicacion: "2024-06-25",
        cantidadDeFotos: 14,
        metrosCuadrados: 184,
        precioDeVenta: 174450
    },
    {
        nombre: "Propiedad 2220",
        direccion: "Calle 96, Las Palmas de Gran Canaria",
        fechaDePublicacion: "2024-06-08",
        cantidadDeFotos: 17,
        metrosCuadrados: 291,
        precioDeVenta: 904032
    },
    {
        nombre: "Propiedad 2221",
        direccion: "Calle 45, Sevilla",
        fechaDePublicacion: "2024-06-18",
        cantidadDeFotos: 8,
        metrosCuadrados: 184,
        precioDeVenta: 835881
    },
    {
        nombre: "Propiedad 2222",
        direccion: "Calle 4, Sevilla",
        fechaDePublicacion: "2024-06-24",
        cantidadDeFotos: 15,
        metrosCuadrados: 415,
        precioDeVenta: 608772
    },
    {
        nombre: "Propiedad 2223",
        direccion: "Calle 42, Barcelona",
        fechaDePublicacion: "2024-06-12",
        cantidadDeFotos: 9,
        metrosCuadrados: 379,
        precioDeVenta: 200574
    },
    {
        nombre: "Propiedad 2224",
        direccion: "Calle 53, Málaga",
        fechaDePublicacion: "2024-06-14",
        cantidadDeFotos: 12,
        metrosCuadrados: 299,
        precioDeVenta: 755735
    },
    {
        nombre: "Propiedad 2225",
        direccion: "Calle 52, Valencia",
        fechaDePublicacion: "2024-06-02",
        cantidadDeFotos: 14,
        metrosCuadrados: 258,
        precioDeVenta: 402260
    },
    {
        nombre: "Propiedad 2226",
        direccion: "Calle 37, Madrid",
        fechaDePublicacion: "2024-06-08",
        cantidadDeFotos: 9,
        metrosCuadrados: 306,
        precioDeVenta: 417223
    },
    {
        nombre: "Propiedad 2227",
        direccion: "Calle 49, Bilbao",
        fechaDePublicacion: "2024-06-07",
        cantidadDeFotos: 12,
        metrosCuadrados: 58,
        precioDeVenta: 379909
    },
    {
        nombre: "Propiedad 2228",
        direccion: "Calle 18, Palma",
        fechaDePublicacion: "2024-06-09",
        cantidadDeFotos: 8,
        metrosCuadrados: 250,
        precioDeVenta: 514780
    },
    {
        nombre: "Propiedad 2229",
        direccion: "Calle 52, Palma",
        fechaDePublicacion: "2024-06-26",
        cantidadDeFotos: 16,
        metrosCuadrados: 438,
        precioDeVenta: 720826
    },
    {
        nombre: "Propiedad 2230",
        direccion: "Calle 4, Sevilla",
        fechaDePublicacion: "2024-06-23",
        cantidadDeFotos: 4,
        metrosCuadrados: 254,
        precioDeVenta: 708187
    },
    {
        nombre: "Propiedad 2231",
        direccion: "Calle 72, Palma",
        fechaDePublicacion: "2024-06-15",
        cantidadDeFotos: 15,
        metrosCuadrados: 54,
        precioDeVenta: 701008
    },
    {
        nombre: "Propiedad 2232",
        direccion: "Calle 70, Sevilla",
        fechaDePublicacion: "2024-06-20",
        cantidadDeFotos: 14,
        metrosCuadrados: 133,
        precioDeVenta: 565111
    },
    {
        nombre: "Propiedad 2233",
        direccion: "Calle 42, Las Palmas de Gran Canaria",
        fechaDePublicacion: "2024-06-26",
        cantidadDeFotos: 16,
        metrosCuadrados: 91,
        precioDeVenta: 237999
    },
    {
        nombre: "Propiedad 2234",
        direccion: "Calle 26, Málaga",
        fechaDePublicacion: "2024-06-10",
        cantidadDeFotos: 16,
        metrosCuadrados: 52,
        precioDeVenta: 488447
    },
    {
        nombre: "Propiedad 2235",
        direccion: "Calle 54, Palma",
        fechaDePublicacion: "2024-06-05",
        cantidadDeFotos: 8,
        metrosCuadrados: 290,
        precioDeVenta: 129158
    },
    {
        nombre: "Propiedad 2236",
        direccion: "Calle 22, Murcia",
        fechaDePublicacion: "2024-06-21",
        cantidadDeFotos: 18,
        metrosCuadrados: 480,
        precioDeVenta: 853566
    },
    {
        nombre: "Propiedad 2237",
        direccion: "Calle 22, Palma",
        fechaDePublicacion: "2024-06-13",
        cantidadDeFotos: 7,
        metrosCuadrados: 200,
        precioDeVenta: 826258
    },
    {
        nombre: "Propiedad 2238",
        direccion: "Calle 33, Zaragoza",
        fechaDePublicacion: "2024-06-26",
        cantidadDeFotos: 4,
        metrosCuadrados: 60,
        precioDeVenta: 590505
    },
    {
        nombre: "Propiedad 2239",
        direccion: "Calle 45, Sevilla",
        fechaDePublicacion: "2024-06-18",
        cantidadDeFotos: 3,
        metrosCuadrados: 432,
        precioDeVenta: 928915
    },
    {
        nombre: "Propiedad 2240",
        direccion: "Calle 20, Barcelona",
        fechaDePublicacion: "2024-06-17",
        cantidadDeFotos: 3,
        metrosCuadrados: 288,
        precioDeVenta: 351174
    },
    {
        nombre: "Propiedad 2241",
        direccion: "Calle 16, Sevilla",
        fechaDePublicacion: "2024-06-13",
        cantidadDeFotos: 17,
        metrosCuadrados: 284,
        precioDeVenta: 293240
    },
    {
        nombre: "Propiedad 2242",
        direccion: "Calle 40, Málaga",
        fechaDePublicacion: "2024-06-19",
        cantidadDeFotos: 10,
        metrosCuadrados: 448,
        precioDeVenta: 104386
    },
    {
        nombre: "Propiedad 2243",
        direccion: "Calle 43, Sevilla",
        fechaDePublicacion: "2024-06-02",
        cantidadDeFotos: 12,
        metrosCuadrados: 148,
        precioDeVenta: 119881
    },
    {
        nombre: "Propiedad 2244",
        direccion: "Calle 61, Málaga",
        fechaDePublicacion: "2024-06-20",
        cantidadDeFotos: 4,
        metrosCuadrados: 464,
        precioDeVenta: 815164
    },
    {
        nombre: "Propiedad 2245",
        direccion: "Calle 88, Barcelona",
        fechaDePublicacion: "2024-06-18",
        cantidadDeFotos: 17,
        metrosCuadrados: 273,
        precioDeVenta: 627666
    },
    {
        nombre: "Propiedad 2246",
        direccion: "Calle 21, Palma",
        fechaDePublicacion: "2024-06-10",
        cantidadDeFotos: 6,
        metrosCuadrados: 305,
        precioDeVenta: 226464
    },
    {
        nombre: "Propiedad 2247",
        direccion: "Calle 23, Barcelona",
        fechaDePublicacion: "2024-06-25",
        cantidadDeFotos: 15,
        metrosCuadrados: 428,
        precioDeVenta: 806483
    },
    {
        nombre: "Propiedad 2248",
        direccion: "Calle 17, Murcia",
        fechaDePublicacion: "2024-06-24",
        cantidadDeFotos: 16,
        metrosCuadrados: 266,
        precioDeVenta: 465893
    },
    {
        nombre: "Propiedad 2249",
        direccion: "Calle 97, Palma",
        fechaDePublicacion: "2024-06-06",
        cantidadDeFotos: 19,
        metrosCuadrados: 146,
        precioDeVenta: 804448
    },
    {
        nombre: "Propiedad 2250",
        direccion: "Calle 82, Barcelona",
        fechaDePublicacion: "2024-06-11",
        cantidadDeFotos: 12,
        metrosCuadrados: 66,
        precioDeVenta: 155392
    },
    {
        nombre: "Propiedad 2251",
        direccion: "Calle 77, Zaragoza",
        fechaDePublicacion: "2024-05-31",
        cantidadDeFotos: 1,
        metrosCuadrados: 424,
        precioDeVenta: 882198
    },
    {
        nombre: "Propiedad 2252",
        direccion: "Calle 72, Zaragoza",
        fechaDePublicacion: "2024-06-19",
        cantidadDeFotos: 4,
        metrosCuadrados: 218,
        precioDeVenta: 870654
    },
    {
        nombre: "Propiedad 2253",
        direccion: "Calle 74, Murcia",
        fechaDePublicacion: "2024-06-05",
        cantidadDeFotos: 2,
        metrosCuadrados: 121,
        precioDeVenta: 698240
    },
    {
        nombre: "Propiedad 2254",
        direccion: "Calle 79, Murcia",
        fechaDePublicacion: "2024-06-26",
        cantidadDeFotos: 14,
        metrosCuadrados: 214,
        precioDeVenta: 717572
    },
    {
        nombre: "Propiedad 2255",
        direccion: "Calle 94, Bilbao",
        fechaDePublicacion: "2024-06-03",
        cantidadDeFotos: 17,
        metrosCuadrados: 58,
        precioDeVenta: 437621
    },
    {
        nombre: "Propiedad 2256",
        direccion: "Calle 3, Sevilla",
        fechaDePublicacion: "2024-06-13",
        cantidadDeFotos: 20,
        metrosCuadrados: 403,
        precioDeVenta: 772027
    },
    {
        nombre: "Propiedad 2257",
        direccion: "Calle 29, Bilbao",
        fechaDePublicacion: "2024-06-27",
        cantidadDeFotos: 19,
        metrosCuadrados: 164,
        precioDeVenta: 576603
    },
    {
        nombre: "Propiedad 2258",
        direccion: "Calle 1, Zaragoza",
        fechaDePublicacion: "2024-06-28",
        cantidadDeFotos: 10,
        metrosCuadrados: 148,
        precioDeVenta: 926619
    },
    {
        nombre: "Propiedad 2259",
        direccion: "Calle 82, Murcia",
        fechaDePublicacion: "2024-06-22",
        cantidadDeFotos: 3,
        metrosCuadrados: 318,
        precioDeVenta: 254826
    },
    {
        nombre: "Propiedad 2260",
        direccion: "Calle 36, Murcia",
        fechaDePublicacion: "2024-06-26",
        cantidadDeFotos: 16,
        metrosCuadrados: 242,
        precioDeVenta: 268507
    },
    {
        nombre: "Propiedad 2261",
        direccion: "Calle 16, Valencia",
        fechaDePublicacion: "2024-06-12",
        cantidadDeFotos: 12,
        metrosCuadrados: 381,
        precioDeVenta: 735689
    },
    {
        nombre: "Propiedad 2262",
        direccion: "Calle 54, Málaga",
        fechaDePublicacion: "2024-06-28",
        cantidadDeFotos: 2,
        metrosCuadrados: 298,
        precioDeVenta: 644755
    },
    {
        nombre: "Propiedad 2263",
        direccion: "Calle 1, Murcia",
        fechaDePublicacion: "2024-06-28",
        cantidadDeFotos: 10,
        metrosCuadrados: 179,
        precioDeVenta: 865195
    },
    {
        nombre: "Propiedad 2264",
        direccion: "Calle 97, Barcelona",
        fechaDePublicacion: "2024-06-20",
        cantidadDeFotos: 1,
        metrosCuadrados: 465,
        precioDeVenta: 296373
    },
    {
        nombre: "Propiedad 2265",
        direccion: "Calle 77, Valencia",
        fechaDePublicacion: "2024-06-03",
        cantidadDeFotos: 14,
        metrosCuadrados: 83,
        precioDeVenta: 550378
    },
    {
        nombre: "Propiedad 2266",
        direccion: "Calle 94, Barcelona",
        fechaDePublicacion: "2024-06-01",
        cantidadDeFotos: 19,
        metrosCuadrados: 489,
        precioDeVenta: 56625
    },
    {
        nombre: "Propiedad 2267",
        direccion: "Calle 13, Barcelona",
        fechaDePublicacion: "2024-06-10",
        cantidadDeFotos: 17,
        metrosCuadrados: 499,
        precioDeVenta: 344075
    },
    {
        nombre: "Propiedad 2268",
        direccion: "Calle 43, Bilbao",
        fechaDePublicacion: "2024-06-13",
        cantidadDeFotos: 1,
        metrosCuadrados: 456,
        precioDeVenta: 353802
    },
    {
        nombre: "Propiedad 2269",
        direccion: "Calle 31, Sevilla",
        fechaDePublicacion: "2024-06-23",
        cantidadDeFotos: 20,
        metrosCuadrados: 193,
        precioDeVenta: 585051
    },
    {
        nombre: "Propiedad 2270",
        direccion: "Calle 61, Bilbao",
        fechaDePublicacion: "2024-06-01",
        cantidadDeFotos: 13,
        metrosCuadrados: 173,
        precioDeVenta: 175514
    },
    {
        nombre: "Propiedad 2271",
        direccion: "Calle 24, Palma",
        fechaDePublicacion: "2024-06-27",
        cantidadDeFotos: 6,
        metrosCuadrados: 364,
        precioDeVenta: 482092
    },
    {
        nombre: "Propiedad 2272",
        direccion: "Calle 14, Palma",
        fechaDePublicacion: "2024-06-13",
        cantidadDeFotos: 17,
        metrosCuadrados: 291,
        precioDeVenta: 160615
    },
    {
        nombre: "Propiedad 2273",
        direccion: "Calle 31, Sevilla",
        fechaDePublicacion: "2024-06-25",
        cantidadDeFotos: 10,
        metrosCuadrados: 345,
        precioDeVenta: 298027
    },
    {
        nombre: "Propiedad 2274",
        direccion: "Calle 85, Valencia",
        fechaDePublicacion: "2024-06-11",
        cantidadDeFotos: 4,
        metrosCuadrados: 357,
        precioDeVenta: 409474
    },
    {
        nombre: "Propiedad 2275",
        direccion: "Calle 33, Bilbao",
        fechaDePublicacion: "2024-06-14",
        cantidadDeFotos: 6,
        metrosCuadrados: 468,
        precioDeVenta: 695399
    },
    {
        nombre: "Propiedad 2276",
        direccion: "Calle 92, Zaragoza",
        fechaDePublicacion: "2024-06-18",
        cantidadDeFotos: 5,
        metrosCuadrados: 258,
        precioDeVenta: 768954
    },
    {
        nombre: "Propiedad 2277",
        direccion: "Calle 67, Barcelona",
        fechaDePublicacion: "2024-06-08",
        cantidadDeFotos: 13,
        metrosCuadrados: 487,
        precioDeVenta: 267898
    },
    {
        nombre: "Propiedad 2278",
        direccion: "Calle 23, Las Palmas de Gran Canaria",
        fechaDePublicacion: "2024-06-23",
        cantidadDeFotos: 15,
        metrosCuadrados: 52,
        precioDeVenta: 803170
    },
    {
        nombre: "Propiedad 2279",
        direccion: "Calle 65, Zaragoza",
        fechaDePublicacion: "2024-06-29",
        cantidadDeFotos: 18,
        metrosCuadrados: 95,
        precioDeVenta: 739667
    },
    {
        nombre: "Propiedad 2280",
        direccion: "Calle 73, Bilbao",
        fechaDePublicacion: "2024-06-02",
        cantidadDeFotos: 19,
        metrosCuadrados: 470,
        precioDeVenta: 361620
    },
    {
        nombre: "Propiedad 2281",
        direccion: "Calle 66, Madrid",
        fechaDePublicacion: "2024-06-16",
        cantidadDeFotos: 14,
        metrosCuadrados: 326,
        precioDeVenta: 511515
    },
    {
        nombre: "Propiedad 2282",
        direccion: "Calle 72, Madrid",
        fechaDePublicacion: "2024-06-29",
        cantidadDeFotos: 4,
        metrosCuadrados: 482,
        precioDeVenta: 274986
    },
    {
        nombre: "Propiedad 2283",
        direccion: "Calle 62, Sevilla",
        fechaDePublicacion: "2024-06-10",
        cantidadDeFotos: 12,
        metrosCuadrados: 285,
        precioDeVenta: 362081
    },
    {
        nombre: "Propiedad 2284",
        direccion: "Calle 88, Murcia",
        fechaDePublicacion: "2024-06-23",
        cantidadDeFotos: 7,
        metrosCuadrados: 94,
        precioDeVenta: 856037
    },
    {
        nombre: "Propiedad 2285",
        direccion: "Calle 77, Barcelona",
        fechaDePublicacion: "2024-06-13",
        cantidadDeFotos: 19,
        metrosCuadrados: 366,
        precioDeVenta: 931301
    },
    {
        nombre: "Propiedad 2286",
        direccion: "Calle 64, Las Palmas de Gran Canaria",
        fechaDePublicacion: "2024-06-01",
        cantidadDeFotos: 14,
        metrosCuadrados: 171,
        precioDeVenta: 766027
    },
    {
        nombre: "Propiedad 2287",
        direccion: "Calle 51, Bilbao",
        fechaDePublicacion: "2024-06-11",
        cantidadDeFotos: 8,
        metrosCuadrados: 206,
        precioDeVenta: 338451
    },
    {
        nombre: "Propiedad 2288",
        direccion: "Calle 82, Málaga",
        fechaDePublicacion: "2024-06-08",
        cantidadDeFotos: 19,
        metrosCuadrados: 106,
        precioDeVenta: 668455
    },
    {
        nombre: "Propiedad 2289",
        direccion: "Calle 79, Málaga",
        fechaDePublicacion: "2024-06-29",
        cantidadDeFotos: 14,
        metrosCuadrados: 287,
        precioDeVenta: 252560
    },
    {
        nombre: "Propiedad 2290",
        direccion: "Calle 47, Barcelona",
        fechaDePublicacion: "2024-06-12",
        cantidadDeFotos: 1,
        metrosCuadrados: 362,
        precioDeVenta: 53482
    },
    {
        nombre: "Propiedad 2291",
        direccion: "Calle 91, Sevilla",
        fechaDePublicacion: "2024-06-27",
        cantidadDeFotos: 1,
        metrosCuadrados: 150,
        precioDeVenta: 350321
    },
    {
        nombre: "Propiedad 2292",
        direccion: "Calle 36, Madrid",
        fechaDePublicacion: "2024-06-13",
        cantidadDeFotos: 16,
        metrosCuadrados: 57,
        precioDeVenta: 570250
    },
    {
        nombre: "Propiedad 2293",
        direccion: "Calle 55, Bilbao",
        fechaDePublicacion: "2024-06-11",
        cantidadDeFotos: 15,
        metrosCuadrados: 482,
        precioDeVenta: 847072
    },
    {
        nombre: "Propiedad 2294",
        direccion: "Calle 20, Murcia",
        fechaDePublicacion: "2024-06-12",
        cantidadDeFotos: 6,
        metrosCuadrados: 90,
        precioDeVenta: 543421
    },
    {
        nombre: "Propiedad 2295",
        direccion: "Calle 81, Murcia",
        fechaDePublicacion: "2024-06-19",
        cantidadDeFotos: 9,
        metrosCuadrados: 478,
        precioDeVenta: 684014
    },
    {
        nombre: "Propiedad 2296",
        direccion: "Calle 83, Valencia",
        fechaDePublicacion: "2024-06-24",
        cantidadDeFotos: 11,
        metrosCuadrados: 342,
        precioDeVenta: 863619
    },
    {
        nombre: "Propiedad 2297",
        direccion: "Calle 19, Barcelona",
        fechaDePublicacion: "2024-06-12",
        cantidadDeFotos: 20,
        metrosCuadrados: 352,
        precioDeVenta: 117607
    },
    {
        nombre: "Propiedad 2298",
        direccion: "Calle 62, Valencia",
        fechaDePublicacion: "2024-06-15",
        cantidadDeFotos: 9,
        metrosCuadrados: 431,
        precioDeVenta: 298697
    },
    {
        nombre: "Propiedad 2299",
        direccion: "Calle 70, Murcia",
        fechaDePublicacion: "2024-06-27",
        cantidadDeFotos: 12,
        metrosCuadrados: 175,
        precioDeVenta: 996199
    },
    {
        nombre: "Propiedad 2300",
        direccion: "Calle 29, Madrid",
        fechaDePublicacion: "2024-06-03",
        cantidadDeFotos: 20,
        metrosCuadrados: 296,
        precioDeVenta: 908578
    },
    {
        nombre: "Propiedad 2301",
        direccion: "Calle 89, Barcelona",
        fechaDePublicacion: "2024-06-10",
        cantidadDeFotos: 5,
        metrosCuadrados: 318,
        precioDeVenta: 734592
    },
    {
        nombre: "Propiedad 2302",
        direccion: "Calle 40, Murcia",
        fechaDePublicacion: "2024-06-07",
        cantidadDeFotos: 18,
        metrosCuadrados: 265,
        precioDeVenta: 97530
    },
    {
        nombre: "Propiedad 2303",
        direccion: "Calle 57, Zaragoza",
        fechaDePublicacion: "2024-06-05",
        cantidadDeFotos: 2,
        metrosCuadrados: 304,
        precioDeVenta: 633853
    },
    {
        nombre: "Propiedad 2304",
        direccion: "Calle 99, Las Palmas de Gran Canaria",
        fechaDePublicacion: "2024-06-25",
        cantidadDeFotos: 19,
        metrosCuadrados: 463,
        precioDeVenta: 341817
    },
    {
        nombre: "Propiedad 2305",
        direccion: "Calle 91, Palma",
        fechaDePublicacion: "2024-06-14",
        cantidadDeFotos: 12,
        metrosCuadrados: 96,
        precioDeVenta: 163551
    },
    {
        nombre: "Propiedad 2306",
        direccion: "Calle 1, Barcelona",
        fechaDePublicacion: "2024-06-11",
        cantidadDeFotos: 8,
        metrosCuadrados: 416,
        precioDeVenta: 619834
    },
    {
        nombre: "Propiedad 2307",
        direccion: "Calle 17, Valencia",
        fechaDePublicacion: "2024-06-17",
        cantidadDeFotos: 10,
        metrosCuadrados: 387,
        precioDeVenta: 285682
    },
    {
        nombre: "Propiedad 2308",
        direccion: "Calle 51, Madrid",
        fechaDePublicacion: "2024-06-11",
        cantidadDeFotos: 6,
        metrosCuadrados: 374,
        precioDeVenta: 846304
    },
    {
        nombre: "Propiedad 2309",
        direccion: "Calle 5, Palma",
        fechaDePublicacion: "2024-06-04",
        cantidadDeFotos: 18,
        metrosCuadrados: 270,
        precioDeVenta: 967893
    },
    {
        nombre: "Propiedad 2310",
        direccion: "Calle 89, Las Palmas de Gran Canaria",
        fechaDePublicacion: "2024-06-18",
        cantidadDeFotos: 6,
        metrosCuadrados: 405,
        precioDeVenta: 189491
    },
    {
        nombre: "Propiedad 2311",
        direccion: "Calle 84, Zaragoza",
        fechaDePublicacion: "2024-06-18",
        cantidadDeFotos: 18,
        metrosCuadrados: 135,
        precioDeVenta: 928168
    },
    {
        nombre: "Propiedad 2312",
        direccion: "Calle 16, Zaragoza",
        fechaDePublicacion: "2024-06-18",
        cantidadDeFotos: 19,
        metrosCuadrados: 247,
        precioDeVenta: 489717
    },
    {
        nombre: "Propiedad 2313",
        direccion: "Calle 82, Valencia",
        fechaDePublicacion: "2024-06-10",
        cantidadDeFotos: 19,
        metrosCuadrados: 252,
        precioDeVenta: 525150
    },
    {
        nombre: "Propiedad 2314",
        direccion: "Calle 28, Madrid",
        fechaDePublicacion: "2024-06-14",
        cantidadDeFotos: 20,
        metrosCuadrados: 331,
        precioDeVenta: 878899
    },
    {
        nombre: "Propiedad 2315",
        direccion: "Calle 15, Las Palmas de Gran Canaria",
        fechaDePublicacion: "2024-06-12",
        cantidadDeFotos: 6,
        metrosCuadrados: 201,
        precioDeVenta: 885845
    },
    {
        nombre: "Propiedad 2316",
        direccion: "Calle 46, Málaga",
        fechaDePublicacion: "2024-06-05",
        cantidadDeFotos: 7,
        metrosCuadrados: 366,
        precioDeVenta: 545741
    },
    {
        nombre: "Propiedad 2317",
        direccion: "Calle 50, Las Palmas de Gran Canaria",
        fechaDePublicacion: "2024-06-23",
        cantidadDeFotos: 20,
        metrosCuadrados: 436,
        precioDeVenta: 100761
    },
    {
        nombre: "Propiedad 2318",
        direccion: "Calle 1, Málaga",
        fechaDePublicacion: "2024-06-13",
        cantidadDeFotos: 13,
        metrosCuadrados: 367,
        precioDeVenta: 933908
    },
    {
        nombre: "Propiedad 2319",
        direccion: "Calle 24, Madrid",
        fechaDePublicacion: "2024-06-05",
        cantidadDeFotos: 17,
        metrosCuadrados: 202,
        precioDeVenta: 331874
    },
    {
        nombre: "Propiedad 2320",
        direccion: "Calle 84, Sevilla",
        fechaDePublicacion: "2024-06-24",
        cantidadDeFotos: 10,
        metrosCuadrados: 424,
        precioDeVenta: 423847
    },
    {
        nombre: "Propiedad 2321",
        direccion: "Calle 77, Murcia",
        fechaDePublicacion: "2024-06-17",
        cantidadDeFotos: 15,
        metrosCuadrados: 226,
        precioDeVenta: 157764
    },
    {
        nombre: "Propiedad 2322",
        direccion: "Calle 41, Murcia",
        fechaDePublicacion: "2024-06-17",
        cantidadDeFotos: 14,
        metrosCuadrados: 217,
        precioDeVenta: 119041
    },
    {
        nombre: "Propiedad 2323",
        direccion: "Calle 69, Murcia",
        fechaDePublicacion: "2024-06-12",
        cantidadDeFotos: 3,
        metrosCuadrados: 377,
        precioDeVenta: 619768
    },
    {
        nombre: "Propiedad 2324",
        direccion: "Calle 48, Zaragoza",
        fechaDePublicacion: "2024-06-07",
        cantidadDeFotos: 11,
        metrosCuadrados: 276,
        precioDeVenta: 523127
    },
    {
        nombre: "Propiedad 2325",
        direccion: "Calle 89, Zaragoza",
        fechaDePublicacion: "2024-06-16",
        cantidadDeFotos: 9,
        metrosCuadrados: 247,
        precioDeVenta: 688765
    },
    {
        nombre: "Propiedad 2326",
        direccion: "Calle 57, Sevilla",
        fechaDePublicacion: "2024-06-08",
        cantidadDeFotos: 12,
        metrosCuadrados: 200,
        precioDeVenta: 156935
    },
    {
        nombre: "Propiedad 2327",
        direccion: "Calle 96, Valencia",
        fechaDePublicacion: "2024-06-03",
        cantidadDeFotos: 17,
        metrosCuadrados: 353,
        precioDeVenta: 238843
    },
    {
        nombre: "Propiedad 2328",
        direccion: "Calle 85, Valencia",
        fechaDePublicacion: "2024-06-23",
        cantidadDeFotos: 11,
        metrosCuadrados: 353,
        precioDeVenta: 81383
    },
    {
        nombre: "Propiedad 2329",
        direccion: "Calle 57, Madrid",
        fechaDePublicacion: "2024-06-22",
        cantidadDeFotos: 2,
        metrosCuadrados: 247,
        precioDeVenta: 678601
    },
    {
        nombre: "Propiedad 2330",
        direccion: "Calle 6, Murcia",
        fechaDePublicacion: "2024-06-28",
        cantidadDeFotos: 7,
        metrosCuadrados: 83,
        precioDeVenta: 720363
    },
    {
        nombre: "Propiedad 2331",
        direccion: "Calle 3, Málaga",
        fechaDePublicacion: "2024-06-25",
        cantidadDeFotos: 19,
        metrosCuadrados: 249,
        precioDeVenta: 484135
    },
    {
        nombre: "Propiedad 2332",
        direccion: "Calle 97, Sevilla",
        fechaDePublicacion: "2024-06-16",
        cantidadDeFotos: 7,
        metrosCuadrados: 471,
        precioDeVenta: 437202
    },
    {
        nombre: "Propiedad 2333",
        direccion: "Calle 25, Sevilla",
        fechaDePublicacion: "2024-06-29",
        cantidadDeFotos: 10,
        metrosCuadrados: 145,
        precioDeVenta: 478080
    },
    {
        nombre: "Propiedad 2334",
        direccion: "Calle 14, Zaragoza",
        fechaDePublicacion: "2024-06-28",
        cantidadDeFotos: 17,
        metrosCuadrados: 125,
        precioDeVenta: 331560
    },
    {
        nombre: "Propiedad 2335",
        direccion: "Calle 72, Palma",
        fechaDePublicacion: "2024-06-05",
        cantidadDeFotos: 8,
        metrosCuadrados: 269,
        precioDeVenta: 127771
    },
    {
        nombre: "Propiedad 2336",
        direccion: "Calle 83, Valencia",
        fechaDePublicacion: "2024-06-08",
        cantidadDeFotos: 8,
        metrosCuadrados: 182,
        precioDeVenta: 472291
    },
    {
        nombre: "Propiedad 2337",
        direccion: "Calle 33, Bilbao",
        fechaDePublicacion: "2024-06-22",
        cantidadDeFotos: 9,
        metrosCuadrados: 319,
        precioDeVenta: 208789
    },
    {
        nombre: "Propiedad 2338",
        direccion: "Calle 29, Zaragoza",
        fechaDePublicacion: "2024-06-23",
        cantidadDeFotos: 6,
        metrosCuadrados: 237,
        precioDeVenta: 694792
    },
    {
        nombre: "Propiedad 2339",
        direccion: "Calle 94, Murcia",
        fechaDePublicacion: "2024-06-26",
        cantidadDeFotos: 17,
        metrosCuadrados: 494,
        precioDeVenta: 287627
    },
    {
        nombre: "Propiedad 2340",
        direccion: "Calle 73, Málaga",
        fechaDePublicacion: "2024-06-10",
        cantidadDeFotos: 9,
        metrosCuadrados: 354,
        precioDeVenta: 970571
    },
    {
        nombre: "Propiedad 2341",
        direccion: "Calle 35, Palma",
        fechaDePublicacion: "2024-06-27",
        cantidadDeFotos: 7,
        metrosCuadrados: 54,
        precioDeVenta: 457126
    },
    {
        nombre: "Propiedad 2342",
        direccion: "Calle 21, Murcia",
        fechaDePublicacion: "2024-06-01",
        cantidadDeFotos: 3,
        metrosCuadrados: 375,
        precioDeVenta: 220572
    },
    {
        nombre: "Propiedad 2343",
        direccion: "Calle 26, Palma",
        fechaDePublicacion: "2024-06-05",
        cantidadDeFotos: 5,
        metrosCuadrados: 316,
        precioDeVenta: 671074
    },
    {
        nombre: "Propiedad 2344",
        direccion: "Calle 42, Zaragoza",
        fechaDePublicacion: "2024-06-16",
        cantidadDeFotos: 13,
        metrosCuadrados: 208,
        precioDeVenta: 864173
    },
    {
        nombre: "Propiedad 2345",
        direccion: "Calle 54, Valencia",
        fechaDePublicacion: "2024-06-18",
        cantidadDeFotos: 9,
        metrosCuadrados: 351,
        precioDeVenta: 815333
    },
    {
        nombre: "Propiedad 2346",
        direccion: "Calle 29, Barcelona",
        fechaDePublicacion: "2024-06-15",
        cantidadDeFotos: 18,
        metrosCuadrados: 255,
        precioDeVenta: 673862
    },
    {
        nombre: "Propiedad 2347",
        direccion: "Calle 21, Valencia",
        fechaDePublicacion: "2024-06-11",
        cantidadDeFotos: 6,
        metrosCuadrados: 91,
        precioDeVenta: 994663
    },
    {
        nombre: "Propiedad 2348",
        direccion: "Calle 59, Valencia",
        fechaDePublicacion: "2024-06-28",
        cantidadDeFotos: 17,
        metrosCuadrados: 452,
        precioDeVenta: 335775
    },
    {
        nombre: "Propiedad 2349",
        direccion: "Calle 41, Las Palmas de Gran Canaria",
        fechaDePublicacion: "2024-06-02",
        cantidadDeFotos: 3,
        metrosCuadrados: 253,
        precioDeVenta: 944197
    },
    {
        nombre: "Propiedad 2350",
        direccion: "Calle 65, Bilbao",
        fechaDePublicacion: "2024-06-22",
        cantidadDeFotos: 20,
        metrosCuadrados: 431,
        precioDeVenta: 693999
    },
    {
        nombre: "Propiedad 2351",
        direccion: "Calle 85, Sevilla",
        fechaDePublicacion: "2024-06-09",
        cantidadDeFotos: 4,
        metrosCuadrados: 196,
        precioDeVenta: 699084
    },
    {
        nombre: "Propiedad 2352",
        direccion: "Calle 42, Málaga",
        fechaDePublicacion: "2024-06-02",
        cantidadDeFotos: 13,
        metrosCuadrados: 244,
        precioDeVenta: 160024
    },
    {
        nombre: "Propiedad 2353",
        direccion: "Calle 89, Málaga",
        fechaDePublicacion: "2024-06-22",
        cantidadDeFotos: 16,
        metrosCuadrados: 423,
        precioDeVenta: 50787
    },
    {
        nombre: "Propiedad 2354",
        direccion: "Calle 95, Málaga",
        fechaDePublicacion: "2024-06-27",
        cantidadDeFotos: 18,
        metrosCuadrados: 327,
        precioDeVenta: 606982
    },
    {
        nombre: "Propiedad 2355",
        direccion: "Calle 84, Palma",
        fechaDePublicacion: "2024-06-24",
        cantidadDeFotos: 8,
        metrosCuadrados: 410,
        precioDeVenta: 148817
    },
    {
        nombre: "Propiedad 2356",
        direccion: "Calle 21, Las Palmas de Gran Canaria",
        fechaDePublicacion: "2024-06-22",
        cantidadDeFotos: 19,
        metrosCuadrados: 169,
        precioDeVenta: 712535
    },
    {
        nombre: "Propiedad 2357",
        direccion: "Calle 59, Palma",
        fechaDePublicacion: "2024-06-13",
        cantidadDeFotos: 3,
        metrosCuadrados: 126,
        precioDeVenta: 485947
    },
    {
        nombre: "Propiedad 2358",
        direccion: "Calle 74, Barcelona",
        fechaDePublicacion: "2024-06-21",
        cantidadDeFotos: 20,
        metrosCuadrados: 72,
        precioDeVenta: 658469
    },
    {
        nombre: "Propiedad 2359",
        direccion: "Calle 9, Sevilla",
        fechaDePublicacion: "2024-06-03",
        cantidadDeFotos: 19,
        metrosCuadrados: 52,
        precioDeVenta: 880411
    },
    {
        nombre: "Propiedad 2360",
        direccion: "Calle 36, Barcelona",
        fechaDePublicacion: "2024-06-22",
        cantidadDeFotos: 19,
        metrosCuadrados: 319,
        precioDeVenta: 234231
    },
    {
        nombre: "Propiedad 2361",
        direccion: "Calle 78, Bilbao",
        fechaDePublicacion: "2024-06-28",
        cantidadDeFotos: 11,
        metrosCuadrados: 116,
        precioDeVenta: 981294
    },
    {
        nombre: "Propiedad 2362",
        direccion: "Calle 33, Barcelona",
        fechaDePublicacion: "2024-06-04",
        cantidadDeFotos: 4,
        metrosCuadrados: 250,
        precioDeVenta: 987065
    },
    {
        nombre: "Propiedad 2363",
        direccion: "Calle 81, Zaragoza",
        fechaDePublicacion: "2024-06-25",
        cantidadDeFotos: 20,
        metrosCuadrados: 110,
        precioDeVenta: 108073
    },
    {
        nombre: "Propiedad 2364",
        direccion: "Calle 34, Barcelona",
        fechaDePublicacion: "2024-06-14",
        cantidadDeFotos: 17,
        metrosCuadrados: 495,
        precioDeVenta: 89701
    },
    {
        nombre: "Propiedad 2365",
        direccion: "Calle 52, Sevilla",
        fechaDePublicacion: "2024-06-28",
        cantidadDeFotos: 16,
        metrosCuadrados: 150,
        precioDeVenta: 827283
    },
    {
        nombre: "Propiedad 2366",
        direccion: "Calle 62, Palma",
        fechaDePublicacion: "2024-06-23",
        cantidadDeFotos: 17,
        metrosCuadrados: 211,
        precioDeVenta: 494670
    },
    {
        nombre: "Propiedad 2367",
        direccion: "Calle 75, Barcelona",
        fechaDePublicacion: "2024-06-28",
        cantidadDeFotos: 5,
        metrosCuadrados: 62,
        precioDeVenta: 802452
    },
    {
        nombre: "Propiedad 2368",
        direccion: "Calle 92, Las Palmas de Gran Canaria",
        fechaDePublicacion: "2024-06-25",
        cantidadDeFotos: 16,
        metrosCuadrados: 273,
        precioDeVenta: 952876
    },
    {
        nombre: "Propiedad 2369",
        direccion: "Calle 26, Las Palmas de Gran Canaria",
        fechaDePublicacion: "2024-06-01",
        cantidadDeFotos: 13,
        metrosCuadrados: 268,
        precioDeVenta: 470636
    },
    {
        nombre: "Propiedad 2370",
        direccion: "Calle 28, Palma",
        fechaDePublicacion: "2024-06-12",
        cantidadDeFotos: 16,
        metrosCuadrados: 285,
        precioDeVenta: 96186
    },
    {
        nombre: "Propiedad 2371",
        direccion: "Calle 46, Murcia",
        fechaDePublicacion: "2024-06-19",
        cantidadDeFotos: 15,
        metrosCuadrados: 405,
        precioDeVenta: 356674
    },
    {
        nombre: "Propiedad 2372",
        direccion: "Calle 66, Madrid",
        fechaDePublicacion: "2024-06-01",
        cantidadDeFotos: 7,
        metrosCuadrados: 333,
        precioDeVenta: 224570
    },
    {
        nombre: "Propiedad 2373",
        direccion: "Calle 63, Palma",
        fechaDePublicacion: "2024-06-21",
        cantidadDeFotos: 12,
        metrosCuadrados: 411,
        precioDeVenta: 380250
    },
    {
        nombre: "Propiedad 2374",
        direccion: "Calle 95, Zaragoza",
        fechaDePublicacion: "2024-06-20",
        cantidadDeFotos: 14,
        metrosCuadrados: 428,
        precioDeVenta: 60223
    },
    {
        nombre: "Propiedad 2375",
        direccion: "Calle 27, Valencia",
        fechaDePublicacion: "2024-06-14",
        cantidadDeFotos: 17,
        metrosCuadrados: 492,
        precioDeVenta: 239307
    },
    {
        nombre: "Propiedad 2376",
        direccion: "Calle 79, Zaragoza",
        fechaDePublicacion: "2024-06-15",
        cantidadDeFotos: 2,
        metrosCuadrados: 102,
        precioDeVenta: 272096
    },
    {
        nombre: "Propiedad 2377",
        direccion: "Calle 22, Bilbao",
        fechaDePublicacion: "2024-06-07",
        cantidadDeFotos: 3,
        metrosCuadrados: 308,
        precioDeVenta: 955354
    },
    {
        nombre: "Propiedad 2378",
        direccion: "Calle 87, Madrid",
        fechaDePublicacion: "2024-06-11",
        cantidadDeFotos: 8,
        metrosCuadrados: 360,
        precioDeVenta: 874983
    },
    {
        nombre: "Propiedad 2379",
        direccion: "Calle 2, Zaragoza",
        fechaDePublicacion: "2024-06-17",
        cantidadDeFotos: 12,
        metrosCuadrados: 173,
        precioDeVenta: 489708
    },
    {
        nombre: "Propiedad 2380",
        direccion: "Calle 1, Sevilla",
        fechaDePublicacion: "2024-06-11",
        cantidadDeFotos: 5,
        metrosCuadrados: 140,
        precioDeVenta: 825286
    },
    {
        nombre: "Propiedad 2381",
        direccion: "Calle 17, Málaga",
        fechaDePublicacion: "2024-06-01",
        cantidadDeFotos: 16,
        metrosCuadrados: 227,
        precioDeVenta: 547163
    },
    {
        nombre: "Propiedad 2382",
        direccion: "Calle 75, Bilbao",
        fechaDePublicacion: "2024-06-08",
        cantidadDeFotos: 18,
        metrosCuadrados: 62,
        precioDeVenta: 758288
    },
    {
        nombre: "Propiedad 2383",
        direccion: "Calle 94, Barcelona",
        fechaDePublicacion: "2024-06-05",
        cantidadDeFotos: 13,
        metrosCuadrados: 311,
        precioDeVenta: 252431
    },
    {
        nombre: "Propiedad 2384",
        direccion: "Calle 72, Las Palmas de Gran Canaria",
        fechaDePublicacion: "2024-06-12",
        cantidadDeFotos: 8,
        metrosCuadrados: 160,
        precioDeVenta: 354484
    },
    {
        nombre: "Propiedad 2385",
        direccion: "Calle 56, Las Palmas de Gran Canaria",
        fechaDePublicacion: "2024-06-14",
        cantidadDeFotos: 15,
        metrosCuadrados: 169,
        precioDeVenta: 148408
    },
    {
        nombre: "Propiedad 2386",
        direccion: "Calle 85, Zaragoza",
        fechaDePublicacion: "2024-06-01",
        cantidadDeFotos: 19,
        metrosCuadrados: 201,
        precioDeVenta: 520751
    },
    {
        nombre: "Propiedad 2387",
        direccion: "Calle 24, Zaragoza",
        fechaDePublicacion: "2024-06-19",
        cantidadDeFotos: 9,
        metrosCuadrados: 404,
        precioDeVenta: 969532
    },
    {
        nombre: "Propiedad 2388",
        direccion: "Calle 49, Madrid",
        fechaDePublicacion: "2024-06-14",
        cantidadDeFotos: 12,
        metrosCuadrados: 113,
        precioDeVenta: 726332
    },
    {
        nombre: "Propiedad 2389",
        direccion: "Calle 91, Valencia",
        fechaDePublicacion: "2024-06-29",
        cantidadDeFotos: 18,
        metrosCuadrados: 261,
        precioDeVenta: 904067
    },
    {
        nombre: "Propiedad 2390",
        direccion: "Calle 43, Valencia",
        fechaDePublicacion: "2024-06-08",
        cantidadDeFotos: 6,
        metrosCuadrados: 161,
        precioDeVenta: 729276
    },
    {
        nombre: "Propiedad 2391",
        direccion: "Calle 34, Málaga",
        fechaDePublicacion: "2024-06-08",
        cantidadDeFotos: 9,
        metrosCuadrados: 50,
        precioDeVenta: 509272
    },
    {
        nombre: "Propiedad 2392",
        direccion: "Calle 81, Málaga",
        fechaDePublicacion: "2024-06-07",
        cantidadDeFotos: 4,
        metrosCuadrados: 352,
        precioDeVenta: 910026
    },
    {
        nombre: "Propiedad 2393",
        direccion: "Calle 33, Málaga",
        fechaDePublicacion: "2024-06-14",
        cantidadDeFotos: 15,
        metrosCuadrados: 426,
        precioDeVenta: 684023
    },
    {
        nombre: "Propiedad 2394",
        direccion: "Calle 50, Zaragoza",
        fechaDePublicacion: "2024-06-28",
        cantidadDeFotos: 1,
        metrosCuadrados: 75,
        precioDeVenta: 77559
    },
    {
        nombre: "Propiedad 2395",
        direccion: "Calle 4, Madrid",
        fechaDePublicacion: "2024-06-03",
        cantidadDeFotos: 5,
        metrosCuadrados: 197,
        precioDeVenta: 429179
    },
    {
        nombre: "Propiedad 2396",
        direccion: "Calle 94, Valencia",
        fechaDePublicacion: "2024-06-10",
        cantidadDeFotos: 5,
        metrosCuadrados: 169,
        precioDeVenta: 727853
    },
    {
        nombre: "Propiedad 2397",
        direccion: "Calle 16, Sevilla",
        fechaDePublicacion: "2024-06-23",
        cantidadDeFotos: 1,
        metrosCuadrados: 473,
        precioDeVenta: 328572
    },
    {
        nombre: "Propiedad 2398",
        direccion: "Calle 99, Sevilla",
        fechaDePublicacion: "2024-06-29",
        cantidadDeFotos: 17,
        metrosCuadrados: 84,
        precioDeVenta: 137729
    },
    {
        nombre: "Propiedad 2399",
        direccion: "Calle 52, Barcelona",
        fechaDePublicacion: "2024-06-22",
        cantidadDeFotos: 17,
        metrosCuadrados: 59,
        precioDeVenta: 308557
    },
    {
        nombre: "Propiedad 2400",
        direccion: "Calle 74, Sevilla",
        fechaDePublicacion: "2024-06-12",
        cantidadDeFotos: 17,
        metrosCuadrados: 77,
        precioDeVenta: 868075
    },
    {
        nombre: "Propiedad 2401",
        direccion: "Calle 19, Las Palmas de Gran Canaria",
        fechaDePublicacion: "2024-06-10",
        cantidadDeFotos: 1,
        metrosCuadrados: 342,
        precioDeVenta: 706920
    },
    {
        nombre: "Propiedad 2402",
        direccion: "Calle 78, Barcelona",
        fechaDePublicacion: "2024-06-19",
        cantidadDeFotos: 6,
        metrosCuadrados: 110,
        precioDeVenta: 253404
    },
    {
        nombre: "Propiedad 2403",
        direccion: "Calle 10, Madrid",
        fechaDePublicacion: "2024-06-07",
        cantidadDeFotos: 5,
        metrosCuadrados: 347,
        precioDeVenta: 621477
    },
    {
        nombre: "Propiedad 2404",
        direccion: "Calle 26, Málaga",
        fechaDePublicacion: "2024-06-19",
        cantidadDeFotos: 2,
        metrosCuadrados: 354,
        precioDeVenta: 97699
    },
    {
        nombre: "Propiedad 2405",
        direccion: "Calle 67, Las Palmas de Gran Canaria",
        fechaDePublicacion: "2024-06-16",
        cantidadDeFotos: 15,
        metrosCuadrados: 495,
        precioDeVenta: 508997
    },
    {
        nombre: "Propiedad 2406",
        direccion: "Calle 60, Bilbao",
        fechaDePublicacion: "2024-06-24",
        cantidadDeFotos: 13,
        metrosCuadrados: 254,
        precioDeVenta: 105431
    },
    {
        nombre: "Propiedad 2407",
        direccion: "Calle 28, Las Palmas de Gran Canaria",
        fechaDePublicacion: "2024-06-17",
        cantidadDeFotos: 15,
        metrosCuadrados: 290,
        precioDeVenta: 591112
    },
    {
        nombre: "Propiedad 2408",
        direccion: "Calle 4, Las Palmas de Gran Canaria",
        fechaDePublicacion: "2024-06-27",
        cantidadDeFotos: 9,
        metrosCuadrados: 330,
        precioDeVenta: 132741
    },
    {
        nombre: "Propiedad 2409",
        direccion: "Calle 37, Valencia",
        fechaDePublicacion: "2024-06-15",
        cantidadDeFotos: 17,
        metrosCuadrados: 436,
        precioDeVenta: 962528
    },
    {
        nombre: "Propiedad 2410",
        direccion: "Calle 44, Murcia",
        fechaDePublicacion: "2024-06-11",
        cantidadDeFotos: 14,
        metrosCuadrados: 210,
        precioDeVenta: 673113
    },
    {
        nombre: "Propiedad 2411",
        direccion: "Calle 71, Murcia",
        fechaDePublicacion: "2024-06-10",
        cantidadDeFotos: 4,
        metrosCuadrados: 67,
        precioDeVenta: 754879
    },
    {
        nombre: "Propiedad 2412",
        direccion: "Calle 3, Valencia",
        fechaDePublicacion: "2024-06-01",
        cantidadDeFotos: 10,
        metrosCuadrados: 379,
        precioDeVenta: 942716
    },
    {
        nombre: "Propiedad 2413",
        direccion: "Calle 43, Valencia",
        fechaDePublicacion: "2024-06-23",
        cantidadDeFotos: 14,
        metrosCuadrados: 283,
        precioDeVenta: 139126
    },
    {
        nombre: "Propiedad 2414",
        direccion: "Calle 82, Sevilla",
        fechaDePublicacion: "2024-06-13",
        cantidadDeFotos: 16,
        metrosCuadrados: 470,
        precioDeVenta: 984507
    },
    {
        nombre: "Propiedad 2415",
        direccion: "Calle 79, Las Palmas de Gran Canaria",
        fechaDePublicacion: "2024-06-02",
        cantidadDeFotos: 12,
        metrosCuadrados: 407,
        precioDeVenta: 111548
    },
    {
        nombre: "Propiedad 2416",
        direccion: "Calle 45, Zaragoza",
        fechaDePublicacion: "2024-06-23",
        cantidadDeFotos: 11,
        metrosCuadrados: 211,
        precioDeVenta: 823067
    },
    {
        nombre: "Propiedad 2417",
        direccion: "Calle 70, Palma",
        fechaDePublicacion: "2024-06-16",
        cantidadDeFotos: 20,
        metrosCuadrados: 203,
        precioDeVenta: 658044
    },
    {
        nombre: "Propiedad 2418",
        direccion: "Calle 3, Madrid",
        fechaDePublicacion: "2024-06-10",
        cantidadDeFotos: 1,
        metrosCuadrados: 178,
        precioDeVenta: 707684
    },
    {
        nombre: "Propiedad 2419",
        direccion: "Calle 43, Murcia",
        fechaDePublicacion: "2024-06-07",
        cantidadDeFotos: 3,
        metrosCuadrados: 83,
        precioDeVenta: 439017
    },
    {
        nombre: "Propiedad 2420",
        direccion: "Calle 43, Sevilla",
        fechaDePublicacion: "2024-06-23",
        cantidadDeFotos: 12,
        metrosCuadrados: 85,
        precioDeVenta: 689215
    },
    {
        nombre: "Propiedad 2421",
        direccion: "Calle 60, Madrid",
        fechaDePublicacion: "2024-06-06",
        cantidadDeFotos: 12,
        metrosCuadrados: 356,
        precioDeVenta: 279461
    },
    {
        nombre: "Propiedad 2422",
        direccion: "Calle 93, Las Palmas de Gran Canaria",
        fechaDePublicacion: "2024-06-15",
        cantidadDeFotos: 8,
        metrosCuadrados: 281,
        precioDeVenta: 810225
    },
    {
        nombre: "Propiedad 2423",
        direccion: "Calle 88, Palma",
        fechaDePublicacion: "2024-06-23",
        cantidadDeFotos: 4,
        metrosCuadrados: 57,
        precioDeVenta: 733850
    },
    {
        nombre: "Propiedad 2424",
        direccion: "Calle 47, Barcelona",
        fechaDePublicacion: "2024-06-15",
        cantidadDeFotos: 5,
        metrosCuadrados: 287,
        precioDeVenta: 934064
    },
    {
        nombre: "Propiedad 2425",
        direccion: "Calle 93, Bilbao",
        fechaDePublicacion: "2024-06-28",
        cantidadDeFotos: 2,
        metrosCuadrados: 89,
        precioDeVenta: 214891
    },
    {
        nombre: "Propiedad 2426",
        direccion: "Calle 1, Málaga",
        fechaDePublicacion: "2024-06-24",
        cantidadDeFotos: 18,
        metrosCuadrados: 179,
        precioDeVenta: 780267
    },
    {
        nombre: "Propiedad 2427",
        direccion: "Calle 84, Valencia",
        fechaDePublicacion: "2024-06-05",
        cantidadDeFotos: 1,
        metrosCuadrados: 91,
        precioDeVenta: 182180
    },
    {
        nombre: "Propiedad 2428",
        direccion: "Calle 12, Murcia",
        fechaDePublicacion: "2024-06-02",
        cantidadDeFotos: 15,
        metrosCuadrados: 161,
        precioDeVenta: 328027
    },
    {
        nombre: "Propiedad 2429",
        direccion: "Calle 35, Zaragoza",
        fechaDePublicacion: "2024-06-21",
        cantidadDeFotos: 18,
        metrosCuadrados: 209,
        precioDeVenta: 737813
    },
    {
        nombre: "Propiedad 2430",
        direccion: "Calle 44, Bilbao",
        fechaDePublicacion: "2024-06-05",
        cantidadDeFotos: 17,
        metrosCuadrados: 286,
        precioDeVenta: 408745
    },
    {
        nombre: "Propiedad 2431",
        direccion: "Calle 95, Bilbao",
        fechaDePublicacion: "2024-06-09",
        cantidadDeFotos: 7,
        metrosCuadrados: 413,
        precioDeVenta: 736733
    },
    {
        nombre: "Propiedad 2432",
        direccion: "Calle 58, Palma",
        fechaDePublicacion: "2024-06-27",
        cantidadDeFotos: 5,
        metrosCuadrados: 92,
        precioDeVenta: 879993
    },
    {
        nombre: "Propiedad 2433",
        direccion: "Calle 92, Málaga",
        fechaDePublicacion: "2024-06-03",
        cantidadDeFotos: 1,
        metrosCuadrados: 315,
        precioDeVenta: 691819
    },
    {
        nombre: "Propiedad 2434",
        direccion: "Calle 43, Palma",
        fechaDePublicacion: "2024-06-12",
        cantidadDeFotos: 6,
        metrosCuadrados: 423,
        precioDeVenta: 408749
    },
    {
        nombre: "Propiedad 2435",
        direccion: "Calle 82, Valencia",
        fechaDePublicacion: "2024-06-16",
        cantidadDeFotos: 7,
        metrosCuadrados: 295,
        precioDeVenta: 400685
    },
    {
        nombre: "Propiedad 2436",
        direccion: "Calle 32, Valencia",
        fechaDePublicacion: "2024-06-29",
        cantidadDeFotos: 11,
        metrosCuadrados: 76,
        precioDeVenta: 946926
    },
    {
        nombre: "Propiedad 2437",
        direccion: "Calle 33, Las Palmas de Gran Canaria",
        fechaDePublicacion: "2024-06-21",
        cantidadDeFotos: 3,
        metrosCuadrados: 490,
        precioDeVenta: 403428
    },
    {
        nombre: "Propiedad 2438",
        direccion: "Calle 28, Málaga",
        fechaDePublicacion: "2024-06-27",
        cantidadDeFotos: 11,
        metrosCuadrados: 158,
        precioDeVenta: 61901
    },
    {
        nombre: "Propiedad 2439",
        direccion: "Calle 18, Madrid",
        fechaDePublicacion: "2024-06-07",
        cantidadDeFotos: 14,
        metrosCuadrados: 417,
        precioDeVenta: 386995
    },
    {
        nombre: "Propiedad 2440",
        direccion: "Calle 11, Sevilla",
        fechaDePublicacion: "2024-06-20",
        cantidadDeFotos: 10,
        metrosCuadrados: 213,
        precioDeVenta: 731791
    },
    {
        nombre: "Propiedad 2441",
        direccion: "Calle 63, Málaga",
        fechaDePublicacion: "2024-06-12",
        cantidadDeFotos: 14,
        metrosCuadrados: 348,
        precioDeVenta: 352473
    },
    {
        nombre: "Propiedad 2442",
        direccion: "Calle 69, Málaga",
        fechaDePublicacion: "2024-06-28",
        cantidadDeFotos: 18,
        metrosCuadrados: 172,
        precioDeVenta: 357112
    },
    {
        nombre: "Propiedad 2443",
        direccion: "Calle 97, Murcia",
        fechaDePublicacion: "2024-06-14",
        cantidadDeFotos: 2,
        metrosCuadrados: 385,
        precioDeVenta: 59832
    },
    {
        nombre: "Propiedad 2444",
        direccion: "Calle 64, Málaga",
        fechaDePublicacion: "2024-06-02",
        cantidadDeFotos: 20,
        metrosCuadrados: 303,
        precioDeVenta: 599703
    },
    {
        nombre: "Propiedad 2445",
        direccion: "Calle 87, Palma",
        fechaDePublicacion: "2024-06-29",
        cantidadDeFotos: 15,
        metrosCuadrados: 327,
        precioDeVenta: 911339
    },
    {
        nombre: "Propiedad 2446",
        direccion: "Calle 14, Zaragoza",
        fechaDePublicacion: "2024-06-05",
        cantidadDeFotos: 3,
        metrosCuadrados: 311,
        precioDeVenta: 567034
    },
    {
        nombre: "Propiedad 2447",
        direccion: "Calle 75, Barcelona",
        fechaDePublicacion: "2024-06-10",
        cantidadDeFotos: 4,
        metrosCuadrados: 271,
        precioDeVenta: 911519
    },
    {
        nombre: "Propiedad 2448",
        direccion: "Calle 91, Zaragoza",
        fechaDePublicacion: "2024-06-27",
        cantidadDeFotos: 19,
        metrosCuadrados: 190,
        precioDeVenta: 999617
    },
    {
        nombre: "Propiedad 2449",
        direccion: "Calle 2, Barcelona",
        fechaDePublicacion: "2024-06-25",
        cantidadDeFotos: 6,
        metrosCuadrados: 99,
        precioDeVenta: 492867
    },
    {
        nombre: "Propiedad 2450",
        direccion: "Calle 44, Las Palmas de Gran Canaria",
        fechaDePublicacion: "2024-06-15",
        cantidadDeFotos: 9,
        metrosCuadrados: 275,
        precioDeVenta: 471409
    },
    {
        nombre: "Propiedad 2451",
        direccion: "Calle 95, Murcia",
        fechaDePublicacion: "2024-06-12",
        cantidadDeFotos: 9,
        metrosCuadrados: 284,
        precioDeVenta: 410913
    },
    {
        nombre: "Propiedad 2452",
        direccion: "Calle 25, Las Palmas de Gran Canaria",
        fechaDePublicacion: "2024-06-16",
        cantidadDeFotos: 7,
        metrosCuadrados: 406,
        precioDeVenta: 396780
    },
    {
        nombre: "Propiedad 2453",
        direccion: "Calle 9, Valencia",
        fechaDePublicacion: "2024-06-12",
        cantidadDeFotos: 13,
        metrosCuadrados: 121,
        precioDeVenta: 573280
    },
    {
        nombre: "Propiedad 2454",
        direccion: "Calle 26, Zaragoza",
        fechaDePublicacion: "2024-06-01",
        cantidadDeFotos: 4,
        metrosCuadrados: 473,
        precioDeVenta: 538876
    },
    {
        nombre: "Propiedad 2455",
        direccion: "Calle 20, Málaga",
        fechaDePublicacion: "2024-06-28",
        cantidadDeFotos: 4,
        metrosCuadrados: 461,
        precioDeVenta: 767933
    },
    {
        nombre: "Propiedad 2456",
        direccion: "Calle 92, Murcia",
        fechaDePublicacion: "2024-06-07",
        cantidadDeFotos: 17,
        metrosCuadrados: 156,
        precioDeVenta: 541282
    },
    {
        nombre: "Propiedad 2457",
        direccion: "Calle 31, Valencia",
        fechaDePublicacion: "2024-06-22",
        cantidadDeFotos: 13,
        metrosCuadrados: 288,
        precioDeVenta: 407616
    },
    {
        nombre: "Propiedad 2458",
        direccion: "Calle 1, Valencia",
        fechaDePublicacion: "2024-06-15",
        cantidadDeFotos: 17,
        metrosCuadrados: 437,
        precioDeVenta: 447225
    },
    {
        nombre: "Propiedad 2459",
        direccion: "Calle 44, Madrid",
        fechaDePublicacion: "2024-06-12",
        cantidadDeFotos: 7,
        metrosCuadrados: 281,
        precioDeVenta: 620045
    },
    {
        nombre: "Propiedad 2460",
        direccion: "Calle 31, Zaragoza",
        fechaDePublicacion: "2024-06-27",
        cantidadDeFotos: 16,
        metrosCuadrados: 204,
        precioDeVenta: 844260
    },
    {
        nombre: "Propiedad 2461",
        direccion: "Calle 50, Zaragoza",
        fechaDePublicacion: "2024-06-18",
        cantidadDeFotos: 19,
        metrosCuadrados: 227,
        precioDeVenta: 679227
    },
    {
        nombre: "Propiedad 2462",
        direccion: "Calle 94, Zaragoza",
        fechaDePublicacion: "2024-06-26",
        cantidadDeFotos: 20,
        metrosCuadrados: 186,
        precioDeVenta: 626181
    },
    {
        nombre: "Propiedad 2463",
        direccion: "Calle 32, Bilbao",
        fechaDePublicacion: "2024-06-14",
        cantidadDeFotos: 16,
        metrosCuadrados: 318,
        precioDeVenta: 310380
    },
    {
        nombre: "Propiedad 2464",
        direccion: "Calle 53, Valencia",
        fechaDePublicacion: "2024-06-26",
        cantidadDeFotos: 1,
        metrosCuadrados: 224,
        precioDeVenta: 197497
    },
    {
        nombre: "Propiedad 2465",
        direccion: "Calle 20, Madrid",
        fechaDePublicacion: "2024-06-13",
        cantidadDeFotos: 17,
        metrosCuadrados: 210,
        precioDeVenta: 562007
    },
    {
        nombre: "Propiedad 2466",
        direccion: "Calle 10, Palma",
        fechaDePublicacion: "2024-06-22",
        cantidadDeFotos: 14,
        metrosCuadrados: 150,
        precioDeVenta: 418932
    },
    {
        nombre: "Propiedad 2467",
        direccion: "Calle 74, Murcia",
        fechaDePublicacion: "2024-06-10",
        cantidadDeFotos: 14,
        metrosCuadrados: 70,
        precioDeVenta: 499675
    },
    {
        nombre: "Propiedad 2468",
        direccion: "Calle 56, Bilbao",
        fechaDePublicacion: "2024-06-12",
        cantidadDeFotos: 3,
        metrosCuadrados: 153,
        precioDeVenta: 489081
    },
    {
        nombre: "Propiedad 2469",
        direccion: "Calle 77, Málaga",
        fechaDePublicacion: "2024-06-22",
        cantidadDeFotos: 18,
        metrosCuadrados: 181,
        precioDeVenta: 219171
    },
    {
        nombre: "Propiedad 2470",
        direccion: "Calle 41, Barcelona",
        fechaDePublicacion: "2024-06-20",
        cantidadDeFotos: 3,
        metrosCuadrados: 475,
        precioDeVenta: 533094
    },
    {
        nombre: "Propiedad 2471",
        direccion: "Calle 91, Madrid",
        fechaDePublicacion: "2024-06-04",
        cantidadDeFotos: 13,
        metrosCuadrados: 198,
        precioDeVenta: 622337
    },
    {
        nombre: "Propiedad 2472",
        direccion: "Calle 13, Valencia",
        fechaDePublicacion: "2024-06-02",
        cantidadDeFotos: 13,
        metrosCuadrados: 86,
        precioDeVenta: 982714
    },
    {
        nombre: "Propiedad 2473",
        direccion: "Calle 99, Murcia",
        fechaDePublicacion: "2024-06-07",
        cantidadDeFotos: 14,
        metrosCuadrados: 272,
        precioDeVenta: 269658
    },
    {
        nombre: "Propiedad 2474",
        direccion: "Calle 32, Palma",
        fechaDePublicacion: "2024-06-04",
        cantidadDeFotos: 12,
        metrosCuadrados: 272,
        precioDeVenta: 836399
    },
    {
        nombre: "Propiedad 2475",
        direccion: "Calle 38, Madrid",
        fechaDePublicacion: "2024-06-10",
        cantidadDeFotos: 14,
        metrosCuadrados: 239,
        precioDeVenta: 761688
    },
    {
        nombre: "Propiedad 2476",
        direccion: "Calle 76, Murcia",
        fechaDePublicacion: "2024-06-06",
        cantidadDeFotos: 10,
        metrosCuadrados: 157,
        precioDeVenta: 560464
    },
    {
        nombre: "Propiedad 2477",
        direccion: "Calle 50, Málaga",
        fechaDePublicacion: "2024-06-26",
        cantidadDeFotos: 3,
        metrosCuadrados: 93,
        precioDeVenta: 242156
    },
    {
        nombre: "Propiedad 2478",
        direccion: "Calle 94, Murcia",
        fechaDePublicacion: "2024-06-02",
        cantidadDeFotos: 19,
        metrosCuadrados: 121,
        precioDeVenta: 482568
    },
    {
        nombre: "Propiedad 2479",
        direccion: "Calle 74, Bilbao",
        fechaDePublicacion: "2024-06-08",
        cantidadDeFotos: 1,
        metrosCuadrados: 192,
        precioDeVenta: 574229
    },
    {
        nombre: "Propiedad 2480",
        direccion: "Calle 52, Murcia",
        fechaDePublicacion: "2024-06-27",
        cantidadDeFotos: 11,
        metrosCuadrados: 144,
        precioDeVenta: 708953
    },
    {
        nombre: "Propiedad 2481",
        direccion: "Calle 54, Madrid",
        fechaDePublicacion: "2024-06-17",
        cantidadDeFotos: 12,
        metrosCuadrados: 83,
        precioDeVenta: 264521
    },
    {
        nombre: "Propiedad 2482",
        direccion: "Calle 65, Bilbao",
        fechaDePublicacion: "2024-06-03",
        cantidadDeFotos: 2,
        metrosCuadrados: 99,
        precioDeVenta: 690053
    },
    {
        nombre: "Propiedad 2483",
        direccion: "Calle 11, Bilbao",
        fechaDePublicacion: "2024-06-10",
        cantidadDeFotos: 14,
        metrosCuadrados: 467,
        precioDeVenta: 386013
    },
    {
        nombre: "Propiedad 2484",
        direccion: "Calle 56, Málaga",
        fechaDePublicacion: "2024-06-01",
        cantidadDeFotos: 9,
        metrosCuadrados: 96,
        precioDeVenta: 620231
    },
    {
        nombre: "Propiedad 2485",
        direccion: "Calle 11, Las Palmas de Gran Canaria",
        fechaDePublicacion: "2024-06-29",
        cantidadDeFotos: 6,
        metrosCuadrados: 404,
        precioDeVenta: 443149
    },
    {
        nombre: "Propiedad 2486",
        direccion: "Calle 14, Murcia",
        fechaDePublicacion: "2024-06-17",
        cantidadDeFotos: 5,
        metrosCuadrados: 217,
        precioDeVenta: 881087
    },
    {
        nombre: "Propiedad 2487",
        direccion: "Calle 26, Málaga",
        fechaDePublicacion: "2024-06-10",
        cantidadDeFotos: 19,
        metrosCuadrados: 142,
        precioDeVenta: 706543
    },
    {
        nombre: "Propiedad 2488",
        direccion: "Calle 79, Palma",
        fechaDePublicacion: "2024-06-29",
        cantidadDeFotos: 18,
        metrosCuadrados: 291,
        precioDeVenta: 932572
    },
    {
        nombre: "Propiedad 2489",
        direccion: "Calle 71, Sevilla",
        fechaDePublicacion: "2024-06-09",
        cantidadDeFotos: 13,
        metrosCuadrados: 85,
        precioDeVenta: 854383
    },
    {
        nombre: "Propiedad 2490",
        direccion: "Calle 54, Málaga",
        fechaDePublicacion: "2024-06-02",
        cantidadDeFotos: 8,
        metrosCuadrados: 106,
        precioDeVenta: 572937
    },
    {
        nombre: "Propiedad 2491",
        direccion: "Calle 90, Sevilla",
        fechaDePublicacion: "2024-06-17",
        cantidadDeFotos: 8,
        metrosCuadrados: 379,
        precioDeVenta: 450668
    },
    {
        nombre: "Propiedad 2492",
        direccion: "Calle 71, Murcia",
        fechaDePublicacion: "2024-06-23",
        cantidadDeFotos: 12,
        metrosCuadrados: 203,
        precioDeVenta: 570755
    },
    {
        nombre: "Propiedad 2493",
        direccion: "Calle 15, Palma",
        fechaDePublicacion: "2024-06-15",
        cantidadDeFotos: 3,
        metrosCuadrados: 144,
        precioDeVenta: 578857
    },
    {
        nombre: "Propiedad 2494",
        direccion: "Calle 26, Bilbao",
        fechaDePublicacion: "2024-06-14",
        cantidadDeFotos: 10,
        metrosCuadrados: 438,
        precioDeVenta: 335169
    },
    {
        nombre: "Propiedad 2495",
        direccion: "Calle 47, Las Palmas de Gran Canaria",
        fechaDePublicacion: "2024-06-14",
        cantidadDeFotos: 18,
        metrosCuadrados: 221,
        precioDeVenta: 600543
    },
    {
        nombre: "Propiedad 2496",
        direccion: "Calle 43, Madrid",
        fechaDePublicacion: "2024-06-23",
        cantidadDeFotos: 19,
        metrosCuadrados: 482,
        precioDeVenta: 204778
    },
    {
        nombre: "Propiedad 2497",
        direccion: "Calle 13, Bilbao",
        fechaDePublicacion: "2024-06-01",
        cantidadDeFotos: 14,
        metrosCuadrados: 61,
        precioDeVenta: 181314
    },
    {
        nombre: "Propiedad 2498",
        direccion: "Calle 19, Palma",
        fechaDePublicacion: "2024-06-26",
        cantidadDeFotos: 9,
        metrosCuadrados: 476,
        precioDeVenta: 162591
    },
    {
        nombre: "Propiedad 2499",
        direccion: "Calle 59, Sevilla",
        fechaDePublicacion: "2024-06-06",
        cantidadDeFotos: 10,
        metrosCuadrados: 423,
        precioDeVenta: 479715
    },
    {
        nombre: "Propiedad 2500",
        direccion: "Calle 42, Palma",
        fechaDePublicacion: "2024-06-26",
        cantidadDeFotos: 11,
        metrosCuadrados: 348,
        precioDeVenta: 278535
    },
    {
        nombre: "Propiedad 2501",
        direccion: "Calle 40, Murcia",
        fechaDePublicacion: "2024-06-06",
        cantidadDeFotos: 10,
        metrosCuadrados: 142,
        precioDeVenta: 948531
    },
    {
        nombre: "Propiedad 2502",
        direccion: "Calle 32, Bilbao",
        fechaDePublicacion: "2024-06-07",
        cantidadDeFotos: 8,
        metrosCuadrados: 401,
        precioDeVenta: 946971
    },
    {
        nombre: "Propiedad 2503",
        direccion: "Calle 20, Palma",
        fechaDePublicacion: "2024-06-01",
        cantidadDeFotos: 7,
        metrosCuadrados: 493,
        precioDeVenta: 63741
    },
    {
        nombre: "Propiedad 2504",
        direccion: "Calle 66, Bilbao",
        fechaDePublicacion: "2024-06-15",
        cantidadDeFotos: 4,
        metrosCuadrados: 418,
        precioDeVenta: 196818
    },
    {
        nombre: "Propiedad 2505",
        direccion: "Calle 63, Valencia",
        fechaDePublicacion: "2024-06-13",
        cantidadDeFotos: 18,
        metrosCuadrados: 254,
        precioDeVenta: 352674
    },
    {
        nombre: "Propiedad 2506",
        direccion: "Calle 7, Sevilla",
        fechaDePublicacion: "2024-06-15",
        cantidadDeFotos: 9,
        metrosCuadrados: 239,
        precioDeVenta: 647945
    },
    {
        nombre: "Propiedad 2507",
        direccion: "Calle 54, Barcelona",
        fechaDePublicacion: "2024-06-02",
        cantidadDeFotos: 9,
        metrosCuadrados: 423,
        precioDeVenta: 695103
    },
    {
        nombre: "Propiedad 2508",
        direccion: "Calle 48, Palma",
        fechaDePublicacion: "2024-06-16",
        cantidadDeFotos: 13,
        metrosCuadrados: 401,
        precioDeVenta: 647880
    },
    {
        nombre: "Propiedad 2509",
        direccion: "Calle 16, Las Palmas de Gran Canaria",
        fechaDePublicacion: "2024-06-10",
        cantidadDeFotos: 14,
        metrosCuadrados: 287,
        precioDeVenta: 758311
    },
    {
        nombre: "Propiedad 2510",
        direccion: "Calle 93, Sevilla",
        fechaDePublicacion: "2024-06-02",
        cantidadDeFotos: 1,
        metrosCuadrados: 452,
        precioDeVenta: 817281
    },
    {
        nombre: "Propiedad 2511",
        direccion: "Calle 8, Palma",
        fechaDePublicacion: "2024-06-17",
        cantidadDeFotos: 1,
        metrosCuadrados: 318,
        precioDeVenta: 423583
    },
    {
        nombre: "Propiedad 2512",
        direccion: "Calle 94, Palma",
        fechaDePublicacion: "2024-06-11",
        cantidadDeFotos: 5,
        metrosCuadrados: 144,
        precioDeVenta: 534436
    },
    {
        nombre: "Propiedad 2513",
        direccion: "Calle 72, Zaragoza",
        fechaDePublicacion: "2024-06-06",
        cantidadDeFotos: 15,
        metrosCuadrados: 271,
        precioDeVenta: 625249
    },
    {
        nombre: "Propiedad 2514",
        direccion: "Calle 92, Murcia",
        fechaDePublicacion: "2024-06-06",
        cantidadDeFotos: 12,
        metrosCuadrados: 303,
        precioDeVenta: 234767
    },
    {
        nombre: "Propiedad 2515",
        direccion: "Calle 63, Palma",
        fechaDePublicacion: "2024-06-26",
        cantidadDeFotos: 15,
        metrosCuadrados: 200,
        precioDeVenta: 457658
    },
    {
        nombre: "Propiedad 2516",
        direccion: "Calle 67, Bilbao",
        fechaDePublicacion: "2024-06-18",
        cantidadDeFotos: 1,
        metrosCuadrados: 221,
        precioDeVenta: 654040
    },
    {
        nombre: "Propiedad 2517",
        direccion: "Calle 23, Palma",
        fechaDePublicacion: "2024-06-12",
        cantidadDeFotos: 3,
        metrosCuadrados: 233,
        precioDeVenta: 301378
    },
    {
        nombre: "Propiedad 2518",
        direccion: "Calle 38, Madrid",
        fechaDePublicacion: "2024-06-22",
        cantidadDeFotos: 16,
        metrosCuadrados: 225,
        precioDeVenta: 280456
    },
    {
        nombre: "Propiedad 2519",
        direccion: "Calle 38, Málaga",
        fechaDePublicacion: "2024-06-07",
        cantidadDeFotos: 6,
        metrosCuadrados: 130,
        precioDeVenta: 857882
    },
    {
        nombre: "Propiedad 2520",
        direccion: "Calle 59, Sevilla",
        fechaDePublicacion: "2024-06-20",
        cantidadDeFotos: 9,
        metrosCuadrados: 445,
        precioDeVenta: 186074
    },
    {
        nombre: "Propiedad 2521",
        direccion: "Calle 43, Palma",
        fechaDePublicacion: "2024-06-25",
        cantidadDeFotos: 9,
        metrosCuadrados: 407,
        precioDeVenta: 92922
    },
    {
        nombre: "Propiedad 2522",
        direccion: "Calle 76, Málaga",
        fechaDePublicacion: "2024-06-16",
        cantidadDeFotos: 13,
        metrosCuadrados: 355,
        precioDeVenta: 154677
    },
    {
        nombre: "Propiedad 2523",
        direccion: "Calle 15, Palma",
        fechaDePublicacion: "2024-06-23",
        cantidadDeFotos: 13,
        metrosCuadrados: 110,
        precioDeVenta: 540061
    },
    {
        nombre: "Propiedad 2524",
        direccion: "Calle 97, Zaragoza",
        fechaDePublicacion: "2024-06-08",
        cantidadDeFotos: 20,
        metrosCuadrados: 141,
        precioDeVenta: 51071
    },
    {
        nombre: "Propiedad 2525",
        direccion: "Calle 29, Madrid",
        fechaDePublicacion: "2024-06-20",
        cantidadDeFotos: 11,
        metrosCuadrados: 453,
        precioDeVenta: 372504
    },
    {
        nombre: "Propiedad 2526",
        direccion: "Calle 10, Sevilla",
        fechaDePublicacion: "2024-06-27",
        cantidadDeFotos: 12,
        metrosCuadrados: 124,
        precioDeVenta: 553210
    },
    {
        nombre: "Propiedad 2527",
        direccion: "Calle 6, Murcia",
        fechaDePublicacion: "2024-06-21",
        cantidadDeFotos: 18,
        metrosCuadrados: 148,
        precioDeVenta: 142132
    },
    {
        nombre: "Propiedad 2528",
        direccion: "Calle 38, Zaragoza",
        fechaDePublicacion: "2024-06-12",
        cantidadDeFotos: 19,
        metrosCuadrados: 192,
        precioDeVenta: 902735
    },
    {
        nombre: "Propiedad 2529",
        direccion: "Calle 1, Málaga",
        fechaDePublicacion: "2024-06-23",
        cantidadDeFotos: 16,
        metrosCuadrados: 452,
        precioDeVenta: 772745
    },
    {
        nombre: "Propiedad 2530",
        direccion: "Calle 11, Valencia",
        fechaDePublicacion: "2024-06-04",
        cantidadDeFotos: 19,
        metrosCuadrados: 235,
        precioDeVenta: 864984
    },
    {
        nombre: "Propiedad 2531",
        direccion: "Calle 72, Barcelona",
        fechaDePublicacion: "2024-06-15",
        cantidadDeFotos: 11,
        metrosCuadrados: 175,
        precioDeVenta: 895251
    },
    {
        nombre: "Propiedad 2532",
        direccion: "Calle 67, Sevilla",
        fechaDePublicacion: "2024-06-11",
        cantidadDeFotos: 15,
        metrosCuadrados: 362,
        precioDeVenta: 793643
    },
    {
        nombre: "Propiedad 2533",
        direccion: "Calle 36, Palma",
        fechaDePublicacion: "2024-06-09",
        cantidadDeFotos: 15,
        metrosCuadrados: 210,
        precioDeVenta: 643238
    },
    {
        nombre: "Propiedad 2534",
        direccion: "Calle 24, Valencia",
        fechaDePublicacion: "2024-06-20",
        cantidadDeFotos: 6,
        metrosCuadrados: 252,
        precioDeVenta: 603884
    },
    {
        nombre: "Propiedad 2535",
        direccion: "Calle 19, Málaga",
        fechaDePublicacion: "2024-06-24",
        cantidadDeFotos: 13,
        metrosCuadrados: 214,
        precioDeVenta: 113649
    },
    {
        nombre: "Propiedad 2536",
        direccion: "Calle 65, Bilbao",
        fechaDePublicacion: "2024-06-27",
        cantidadDeFotos: 1,
        metrosCuadrados: 124,
        precioDeVenta: 533214
    },
    {
        nombre: "Propiedad 2537",
        direccion: "Calle 9, Sevilla",
        fechaDePublicacion: "2024-06-04",
        cantidadDeFotos: 1,
        metrosCuadrados: 80,
        precioDeVenta: 352700
    },
    {
        nombre: "Propiedad 2538",
        direccion: "Calle 38, Barcelona",
        fechaDePublicacion: "2024-06-15",
        cantidadDeFotos: 6,
        metrosCuadrados: 422,
        precioDeVenta: 380926
    },
    {
        nombre: "Propiedad 2539",
        direccion: "Calle 45, Las Palmas de Gran Canaria",
        fechaDePublicacion: "2024-06-06",
        cantidadDeFotos: 2,
        metrosCuadrados: 171,
        precioDeVenta: 424018
    },
    {
        nombre: "Propiedad 2540",
        direccion: "Calle 31, Bilbao",
        fechaDePublicacion: "2024-06-16",
        cantidadDeFotos: 9,
        metrosCuadrados: 136,
        precioDeVenta: 906143
    },
    {
        nombre: "Propiedad 2541",
        direccion: "Calle 59, Barcelona",
        fechaDePublicacion: "2024-06-26",
        cantidadDeFotos: 15,
        metrosCuadrados: 162,
        precioDeVenta: 268883
    },
    {
        nombre: "Propiedad 2542",
        direccion: "Calle 19, Palma",
        fechaDePublicacion: "2024-06-26",
        cantidadDeFotos: 18,
        metrosCuadrados: 207,
        precioDeVenta: 360903
    },
    {
        nombre: "Propiedad 2543",
        direccion: "Calle 92, Madrid",
        fechaDePublicacion: "2024-06-23",
        cantidadDeFotos: 3,
        metrosCuadrados: 380,
        precioDeVenta: 390348
    },
    {
        nombre: "Propiedad 2544",
        direccion: "Calle 83, Bilbao",
        fechaDePublicacion: "2024-06-02",
        cantidadDeFotos: 6,
        metrosCuadrados: 289,
        precioDeVenta: 953897
    },
    {
        nombre: "Propiedad 2545",
        direccion: "Calle 3, Barcelona",
        fechaDePublicacion: "2024-06-21",
        cantidadDeFotos: 15,
        metrosCuadrados: 382,
        precioDeVenta: 109584
    },
    {
        nombre: "Propiedad 2546",
        direccion: "Calle 95, Sevilla",
        fechaDePublicacion: "2024-06-27",
        cantidadDeFotos: 13,
        metrosCuadrados: 396,
        precioDeVenta: 774712
    },
    {
        nombre: "Propiedad 2547",
        direccion: "Calle 61, Bilbao",
        fechaDePublicacion: "2024-06-03",
        cantidadDeFotos: 5,
        metrosCuadrados: 367,
        precioDeVenta: 241187
    },
    {
        nombre: "Propiedad 2548",
        direccion: "Calle 51, Bilbao",
        fechaDePublicacion: "2024-06-17",
        cantidadDeFotos: 20,
        metrosCuadrados: 134,
        precioDeVenta: 689100
    },
    {
        nombre: "Propiedad 2549",
        direccion: "Calle 21, Barcelona",
        fechaDePublicacion: "2024-06-01",
        cantidadDeFotos: 15,
        metrosCuadrados: 318,
        precioDeVenta: 618255
    },
    {
        nombre: "Propiedad 2550",
        direccion: "Calle 20, Madrid",
        fechaDePublicacion: "2024-06-21",
        cantidadDeFotos: 11,
        metrosCuadrados: 389,
        precioDeVenta: 904332
    },
    {
        nombre: "Propiedad 2551",
        direccion: "Calle 90, Bilbao",
        fechaDePublicacion: "2024-06-04",
        cantidadDeFotos: 1,
        metrosCuadrados: 294,
        precioDeVenta: 691639
    },
    {
        nombre: "Propiedad 2552",
        direccion: "Calle 45, Palma",
        fechaDePublicacion: "2024-06-20",
        cantidadDeFotos: 17,
        metrosCuadrados: 432,
        precioDeVenta: 630564
    },
    {
        nombre: "Propiedad 2553",
        direccion: "Calle 4, Murcia",
        fechaDePublicacion: "2024-06-23",
        cantidadDeFotos: 4,
        metrosCuadrados: 442,
        precioDeVenta: 805739
    },
    {
        nombre: "Propiedad 2554",
        direccion: "Calle 21, Sevilla",
        fechaDePublicacion: "2024-06-26",
        cantidadDeFotos: 20,
        metrosCuadrados: 53,
        precioDeVenta: 144249
    },
    {
        nombre: "Propiedad 2555",
        direccion: "Calle 26, Bilbao",
        fechaDePublicacion: "2024-06-21",
        cantidadDeFotos: 3,
        metrosCuadrados: 87,
        precioDeVenta: 300113
    },
    {
        nombre: "Propiedad 2556",
        direccion: "Calle 88, Barcelona",
        fechaDePublicacion: "2024-06-22",
        cantidadDeFotos: 10,
        metrosCuadrados: 466,
        precioDeVenta: 537205
    },
    {
        nombre: "Propiedad 2557",
        direccion: "Calle 68, Sevilla",
        fechaDePublicacion: "2024-06-17",
        cantidadDeFotos: 15,
        metrosCuadrados: 436,
        precioDeVenta: 691092
    },
    {
        nombre: "Propiedad 2558",
        direccion: "Calle 76, Murcia",
        fechaDePublicacion: "2024-06-26",
        cantidadDeFotos: 15,
        metrosCuadrados: 182,
        precioDeVenta: 82309
    },
    {
        nombre: "Propiedad 2559",
        direccion: "Calle 79, Málaga",
        fechaDePublicacion: "2024-06-22",
        cantidadDeFotos: 7,
        metrosCuadrados: 109,
        precioDeVenta: 537770
    },
    {
        nombre: "Propiedad 2560",
        direccion: "Calle 55, Palma",
        fechaDePublicacion: "2024-06-21",
        cantidadDeFotos: 16,
        metrosCuadrados: 82,
        precioDeVenta: 822509
    },
    {
        nombre: "Propiedad 2561",
        direccion: "Calle 35, Sevilla",
        fechaDePublicacion: "2024-06-22",
        cantidadDeFotos: 3,
        metrosCuadrados: 311,
        precioDeVenta: 503306
    },
    {
        nombre: "Propiedad 2562",
        direccion: "Calle 70, Zaragoza",
        fechaDePublicacion: "2024-06-19",
        cantidadDeFotos: 10,
        metrosCuadrados: 172,
        precioDeVenta: 352822
    },
    {
        nombre: "Propiedad 2563",
        direccion: "Calle 65, Madrid",
        fechaDePublicacion: "2024-06-01",
        cantidadDeFotos: 7,
        metrosCuadrados: 331,
        precioDeVenta: 845088
    },
    {
        nombre: "Propiedad 2564",
        direccion: "Calle 38, Madrid",
        fechaDePublicacion: "2024-06-21",
        cantidadDeFotos: 14,
        metrosCuadrados: 205,
        precioDeVenta: 336057
    },
    {
        nombre: "Propiedad 2565",
        direccion: "Calle 71, Valencia",
        fechaDePublicacion: "2024-06-23",
        cantidadDeFotos: 17,
        metrosCuadrados: 301,
        precioDeVenta: 159885
    },
    {
        nombre: "Propiedad 2566",
        direccion: "Calle 96, Madrid",
        fechaDePublicacion: "2024-06-29",
        cantidadDeFotos: 18,
        metrosCuadrados: 453,
        precioDeVenta: 90246
    },
    {
        nombre: "Propiedad 2567",
        direccion: "Calle 29, Bilbao",
        fechaDePublicacion: "2024-06-07",
        cantidadDeFotos: 11,
        metrosCuadrados: 227,
        precioDeVenta: 886177
    },
    {
        nombre: "Propiedad 2568",
        direccion: "Calle 74, Zaragoza",
        fechaDePublicacion: "2024-06-09",
        cantidadDeFotos: 8,
        metrosCuadrados: 466,
        precioDeVenta: 411966
    },
    {
        nombre: "Propiedad 2569",
        direccion: "Calle 31, Sevilla",
        fechaDePublicacion: "2024-06-25",
        cantidadDeFotos: 10,
        metrosCuadrados: 171,
        precioDeVenta: 409997
    },
    {
        nombre: "Propiedad 2570",
        direccion: "Calle 10, Palma",
        fechaDePublicacion: "2024-06-04",
        cantidadDeFotos: 20,
        metrosCuadrados: 165,
        precioDeVenta: 416679
    },
    {
        nombre: "Propiedad 2571",
        direccion: "Calle 73, Palma",
        fechaDePublicacion: "2024-06-16",
        cantidadDeFotos: 10,
        metrosCuadrados: 357,
        precioDeVenta: 494720
    },
    {
        nombre: "Propiedad 2572",
        direccion: "Calle 7, Zaragoza",
        fechaDePublicacion: "2024-06-16",
        cantidadDeFotos: 19,
        metrosCuadrados: 160,
        precioDeVenta: 520388
    },
    {
        nombre: "Propiedad 2573",
        direccion: "Calle 21, Las Palmas de Gran Canaria",
        fechaDePublicacion: "2024-06-18",
        cantidadDeFotos: 18,
        metrosCuadrados: 149,
        precioDeVenta: 143702
    },
    {
        nombre: "Propiedad 2574",
        direccion: "Calle 8, Sevilla",
        fechaDePublicacion: "2024-06-11",
        cantidadDeFotos: 15,
        metrosCuadrados: 173,
        precioDeVenta: 169042
    },
    {
        nombre: "Propiedad 2575",
        direccion: "Calle 46, Barcelona",
        fechaDePublicacion: "2024-06-18",
        cantidadDeFotos: 10,
        metrosCuadrados: 226,
        precioDeVenta: 270461
    },
    {
        nombre: "Propiedad 2576",
        direccion: "Calle 91, Valencia",
        fechaDePublicacion: "2024-06-09",
        cantidadDeFotos: 18,
        metrosCuadrados: 68,
        precioDeVenta: 55588
    },
    {
        nombre: "Propiedad 2577",
        direccion: "Calle 53, Murcia",
        fechaDePublicacion: "2024-06-28",
        cantidadDeFotos: 3,
        metrosCuadrados: 128,
        precioDeVenta: 222813
    },
    {
        nombre: "Propiedad 2578",
        direccion: "Calle 19, Sevilla",
        fechaDePublicacion: "2024-06-05",
        cantidadDeFotos: 9,
        metrosCuadrados: 377,
        precioDeVenta: 280103
    },
    {
        nombre: "Propiedad 2579",
        direccion: "Calle 56, Zaragoza",
        fechaDePublicacion: "2024-06-27",
        cantidadDeFotos: 9,
        metrosCuadrados: 174,
        precioDeVenta: 92771
    },
    {
        nombre: "Propiedad 2580",
        direccion: "Calle 77, Palma",
        fechaDePublicacion: "2024-06-19",
        cantidadDeFotos: 13,
        metrosCuadrados: 263,
        precioDeVenta: 591798
    },
    {
        nombre: "Propiedad 2581",
        direccion: "Calle 19, Madrid",
        fechaDePublicacion: "2024-06-25",
        cantidadDeFotos: 7,
        metrosCuadrados: 210,
        precioDeVenta: 877499
    },
    {
        nombre: "Propiedad 2582",
        direccion: "Calle 31, Zaragoza",
        fechaDePublicacion: "2024-06-05",
        cantidadDeFotos: 2,
        metrosCuadrados: 206,
        precioDeVenta: 323704
    },
    {
        nombre: "Propiedad 2583",
        direccion: "Calle 72, Zaragoza",
        fechaDePublicacion: "2024-06-20",
        cantidadDeFotos: 13,
        metrosCuadrados: 164,
        precioDeVenta: 445460
    },
    {
        nombre: "Propiedad 2584",
        direccion: "Calle 82, Madrid",
        fechaDePublicacion: "2024-06-11",
        cantidadDeFotos: 6,
        metrosCuadrados: 59,
        precioDeVenta: 121315
    },
    {
        nombre: "Propiedad 2585",
        direccion: "Calle 25, Palma",
        fechaDePublicacion: "2024-06-20",
        cantidadDeFotos: 6,
        metrosCuadrados: 318,
        precioDeVenta: 946350
    },
    {
        nombre: "Propiedad 2586",
        direccion: "Calle 55, Las Palmas de Gran Canaria",
        fechaDePublicacion: "2024-06-09",
        cantidadDeFotos: 14,
        metrosCuadrados: 155,
        precioDeVenta: 751253
    },
    {
        nombre: "Propiedad 2587",
        direccion: "Calle 13, Málaga",
        fechaDePublicacion: "2024-06-05",
        cantidadDeFotos: 12,
        metrosCuadrados: 60,
        precioDeVenta: 575831
    },
    {
        nombre: "Propiedad 2588",
        direccion: "Calle 69, Zaragoza",
        fechaDePublicacion: "2024-06-24",
        cantidadDeFotos: 15,
        metrosCuadrados: 418,
        precioDeVenta: 397441
    },
    {
        nombre: "Propiedad 2589",
        direccion: "Calle 62, Las Palmas de Gran Canaria",
        fechaDePublicacion: "2024-06-02",
        cantidadDeFotos: 3,
        metrosCuadrados: 174,
        precioDeVenta: 979777
    },
    {
        nombre: "Propiedad 2590",
        direccion: "Calle 69, Madrid",
        fechaDePublicacion: "2024-06-08",
        cantidadDeFotos: 14,
        metrosCuadrados: 350,
        precioDeVenta: 279526
    },
    {
        nombre: "Propiedad 2591",
        direccion: "Calle 60, Bilbao",
        fechaDePublicacion: "2024-06-24",
        cantidadDeFotos: 15,
        metrosCuadrados: 459,
        precioDeVenta: 269981
    },
    {
        nombre: "Propiedad 2592",
        direccion: "Calle 64, Barcelona",
        fechaDePublicacion: "2024-06-18",
        cantidadDeFotos: 11,
        metrosCuadrados: 241,
        precioDeVenta: 875397
    },
    {
        nombre: "Propiedad 2593",
        direccion: "Calle 84, Sevilla",
        fechaDePublicacion: "2024-06-21",
        cantidadDeFotos: 11,
        metrosCuadrados: 227,
        precioDeVenta: 685979
    },
    {
        nombre: "Propiedad 2594",
        direccion: "Calle 43, Las Palmas de Gran Canaria",
        fechaDePublicacion: "2024-06-14",
        cantidadDeFotos: 19,
        metrosCuadrados: 255,
        precioDeVenta: 758601
    },
    {
        nombre: "Propiedad 2595",
        direccion: "Calle 39, Barcelona",
        fechaDePublicacion: "2024-06-26",
        cantidadDeFotos: 14,
        metrosCuadrados: 346,
        precioDeVenta: 301236
    },
    {
        nombre: "Propiedad 2596",
        direccion: "Calle 76, Valencia",
        fechaDePublicacion: "2024-06-04",
        cantidadDeFotos: 6,
        metrosCuadrados: 283,
        precioDeVenta: 802306
    },
    {
        nombre: "Propiedad 2597",
        direccion: "Calle 85, Murcia",
        fechaDePublicacion: "2024-06-17",
        cantidadDeFotos: 4,
        metrosCuadrados: 69,
        precioDeVenta: 766367
    },
    {
        nombre: "Propiedad 2598",
        direccion: "Calle 83, Zaragoza",
        fechaDePublicacion: "2024-06-02",
        cantidadDeFotos: 7,
        metrosCuadrados: 138,
        precioDeVenta: 231467
    },
    {
        nombre: "Propiedad 2599",
        direccion: "Calle 93, Barcelona",
        fechaDePublicacion: "2024-06-04",
        cantidadDeFotos: 11,
        metrosCuadrados: 482,
        precioDeVenta: 499444
    },
    {
        nombre: "Propiedad 2600",
        direccion: "Calle 28, Las Palmas de Gran Canaria",
        fechaDePublicacion: "2024-06-20",
        cantidadDeFotos: 3,
        metrosCuadrados: 306,
        precioDeVenta: 668133
    },
    {
        nombre: "Propiedad 2601",
        direccion: "Calle 55, Palma",
        fechaDePublicacion: "2024-06-16",
        cantidadDeFotos: 15,
        metrosCuadrados: 242,
        precioDeVenta: 210215
    },
    {
        nombre: "Propiedad 2602",
        direccion: "Calle 2, Madrid",
        fechaDePublicacion: "2024-06-04",
        cantidadDeFotos: 14,
        metrosCuadrados: 257,
        precioDeVenta: 381250
    },
    {
        nombre: "Propiedad 2603",
        direccion: "Calle 13, Sevilla",
        fechaDePublicacion: "2024-06-06",
        cantidadDeFotos: 9,
        metrosCuadrados: 309,
        precioDeVenta: 397812
    },
    {
        nombre: "Propiedad 2604",
        direccion: "Calle 9, Sevilla",
        fechaDePublicacion: "2024-06-01",
        cantidadDeFotos: 11,
        metrosCuadrados: 60,
        precioDeVenta: 641234
    },
    {
        nombre: "Propiedad 2605",
        direccion: "Calle 65, Palma",
        fechaDePublicacion: "2024-06-09",
        cantidadDeFotos: 13,
        metrosCuadrados: 150,
        precioDeVenta: 810092
    },
    {
        nombre: "Propiedad 2606",
        direccion: "Calle 60, Madrid",
        fechaDePublicacion: "2024-06-24",
        cantidadDeFotos: 14,
        metrosCuadrados: 158,
        precioDeVenta: 310860
    },
    {
        nombre: "Propiedad 2607",
        direccion: "Calle 89, Zaragoza",
        fechaDePublicacion: "2024-06-11",
        cantidadDeFotos: 7,
        metrosCuadrados: 157,
        precioDeVenta: 868544
    },
    {
        nombre: "Propiedad 2608",
        direccion: "Calle 98, Málaga",
        fechaDePublicacion: "2024-06-06",
        cantidadDeFotos: 4,
        metrosCuadrados: 197,
        precioDeVenta: 713203
    },
    {
        nombre: "Propiedad 2609",
        direccion: "Calle 60, Bilbao",
        fechaDePublicacion: "2024-06-25",
        cantidadDeFotos: 16,
        metrosCuadrados: 427,
        precioDeVenta: 433821
    },
    {
        nombre: "Propiedad 2610",
        direccion: "Calle 98, Barcelona",
        fechaDePublicacion: "2024-06-13",
        cantidadDeFotos: 5,
        metrosCuadrados: 205,
        precioDeVenta: 547477
    },
    {
        nombre: "Propiedad 2611",
        direccion: "Calle 19, Madrid",
        fechaDePublicacion: "2024-06-26",
        cantidadDeFotos: 3,
        metrosCuadrados: 282,
        precioDeVenta: 543759
    },
    {
        nombre: "Propiedad 2612",
        direccion: "Calle 72, Valencia",
        fechaDePublicacion: "2024-06-28",
        cantidadDeFotos: 5,
        metrosCuadrados: 468,
        precioDeVenta: 281534
    },
    {
        nombre: "Propiedad 2613",
        direccion: "Calle 18, Madrid",
        fechaDePublicacion: "2024-06-10",
        cantidadDeFotos: 19,
        metrosCuadrados: 167,
        precioDeVenta: 56996
    },
    {
        nombre: "Propiedad 2614",
        direccion: "Calle 62, Murcia",
        fechaDePublicacion: "2024-06-18",
        cantidadDeFotos: 10,
        metrosCuadrados: 457,
        precioDeVenta: 690370
    },
    {
        nombre: "Propiedad 2615",
        direccion: "Calle 14, Barcelona",
        fechaDePublicacion: "2024-06-10",
        cantidadDeFotos: 14,
        metrosCuadrados: 227,
        precioDeVenta: 112673
    },
    {
        nombre: "Propiedad 2616",
        direccion: "Calle 36, Zaragoza",
        fechaDePublicacion: "2024-06-22",
        cantidadDeFotos: 19,
        metrosCuadrados: 126,
        precioDeVenta: 527109
    },
    {
        nombre: "Propiedad 2617",
        direccion: "Calle 5, Murcia",
        fechaDePublicacion: "2024-06-05",
        cantidadDeFotos: 19,
        metrosCuadrados: 150,
        precioDeVenta: 154107
    },
    {
        nombre: "Propiedad 2618",
        direccion: "Calle 7, Bilbao",
        fechaDePublicacion: "2024-06-19",
        cantidadDeFotos: 10,
        metrosCuadrados: 319,
        precioDeVenta: 123123
    },
    {
        nombre: "Propiedad 2619",
        direccion: "Calle 66, Barcelona",
        fechaDePublicacion: "2024-06-21",
        cantidadDeFotos: 14,
        metrosCuadrados: 230,
        precioDeVenta: 738246
    },
    {
        nombre: "Propiedad 2620",
        direccion: "Calle 22, Valencia",
        fechaDePublicacion: "2024-06-19",
        cantidadDeFotos: 13,
        metrosCuadrados: 93,
        precioDeVenta: 960971
    },
    {
        nombre: "Propiedad 2621",
        direccion: "Calle 70, Valencia",
        fechaDePublicacion: "2024-06-05",
        cantidadDeFotos: 12,
        metrosCuadrados: 484,
        precioDeVenta: 725758
    },
    {
        nombre: "Propiedad 2622",
        direccion: "Calle 18, Murcia",
        fechaDePublicacion: "2024-06-12",
        cantidadDeFotos: 4,
        metrosCuadrados: 106,
        precioDeVenta: 958882
    },
    {
        nombre: "Propiedad 2623",
        direccion: "Calle 25, Sevilla",
        fechaDePublicacion: "2024-06-25",
        cantidadDeFotos: 9,
        metrosCuadrados: 472,
        precioDeVenta: 925320
    },
    {
        nombre: "Propiedad 2624",
        direccion: "Calle 12, Barcelona",
        fechaDePublicacion: "2024-06-26",
        cantidadDeFotos: 16,
        metrosCuadrados: 441,
        precioDeVenta: 535579
    },
    {
        nombre: "Propiedad 2625",
        direccion: "Calle 40, Barcelona",
        fechaDePublicacion: "2024-06-14",
        cantidadDeFotos: 8,
        metrosCuadrados: 247,
        precioDeVenta: 432656
    },
    {
        nombre: "Propiedad 2626",
        direccion: "Calle 11, Zaragoza",
        fechaDePublicacion: "2024-06-28",
        cantidadDeFotos: 4,
        metrosCuadrados: 208,
        precioDeVenta: 667968
    },
    {
        nombre: "Propiedad 2627",
        direccion: "Calle 53, Barcelona",
        fechaDePublicacion: "2024-06-27",
        cantidadDeFotos: 11,
        metrosCuadrados: 68,
        precioDeVenta: 967062
    },
    {
        nombre: "Propiedad 2628",
        direccion: "Calle 69, Bilbao",
        fechaDePublicacion: "2024-06-20",
        cantidadDeFotos: 11,
        metrosCuadrados: 284,
        precioDeVenta: 794647
    },
    {
        nombre: "Propiedad 2629",
        direccion: "Calle 91, Murcia",
        fechaDePublicacion: "2024-06-25",
        cantidadDeFotos: 16,
        metrosCuadrados: 443,
        precioDeVenta: 512094
    },
    {
        nombre: "Propiedad 2630",
        direccion: "Calle 33, Palma",
        fechaDePublicacion: "2024-06-24",
        cantidadDeFotos: 13,
        metrosCuadrados: 297,
        precioDeVenta: 910025
    },
    {
        nombre: "Propiedad 2631",
        direccion: "Calle 39, Málaga",
        fechaDePublicacion: "2024-06-20",
        cantidadDeFotos: 20,
        metrosCuadrados: 157,
        precioDeVenta: 255813
    },
    {
        nombre: "Propiedad 2632",
        direccion: "Calle 13, Las Palmas de Gran Canaria",
        fechaDePublicacion: "2024-06-11",
        cantidadDeFotos: 13,
        metrosCuadrados: 438,
        precioDeVenta: 769234
    },
    {
        nombre: "Propiedad 2633",
        direccion: "Calle 4, Bilbao",
        fechaDePublicacion: "2024-06-21",
        cantidadDeFotos: 15,
        metrosCuadrados: 354,
        precioDeVenta: 434337
    },
    {
        nombre: "Propiedad 2634",
        direccion: "Calle 71, Barcelona",
        fechaDePublicacion: "2024-06-12",
        cantidadDeFotos: 12,
        metrosCuadrados: 127,
        precioDeVenta: 649700
    },
    {
        nombre: "Propiedad 2635",
        direccion: "Calle 40, Palma",
        fechaDePublicacion: "2024-06-28",
        cantidadDeFotos: 11,
        metrosCuadrados: 196,
        precioDeVenta: 538281
    },
    {
        nombre: "Propiedad 2636",
        direccion: "Calle 72, Bilbao",
        fechaDePublicacion: "2024-06-10",
        cantidadDeFotos: 4,
        metrosCuadrados: 305,
        precioDeVenta: 97366
    },
    {
        nombre: "Propiedad 2637",
        direccion: "Calle 37, Sevilla",
        fechaDePublicacion: "2024-06-09",
        cantidadDeFotos: 18,
        metrosCuadrados: 146,
        precioDeVenta: 244672
    },
    {
        nombre: "Propiedad 2638",
        direccion: "Calle 42, Valencia",
        fechaDePublicacion: "2024-06-21",
        cantidadDeFotos: 11,
        metrosCuadrados: 200,
        precioDeVenta: 260928
    },
    {
        nombre: "Propiedad 2639",
        direccion: "Calle 22, Madrid",
        fechaDePublicacion: "2024-06-05",
        cantidadDeFotos: 15,
        metrosCuadrados: 83,
        precioDeVenta: 892726
    },
    {
        nombre: "Propiedad 2640",
        direccion: "Calle 86, Murcia",
        fechaDePublicacion: "2024-06-17",
        cantidadDeFotos: 8,
        metrosCuadrados: 314,
        precioDeVenta: 981940
    },
    {
        nombre: "Propiedad 2641",
        direccion: "Calle 12, Las Palmas de Gran Canaria",
        fechaDePublicacion: "2024-06-12",
        cantidadDeFotos: 11,
        metrosCuadrados: 481,
        precioDeVenta: 315371
    },
    {
        nombre: "Propiedad 2642",
        direccion: "Calle 18, Murcia",
        fechaDePublicacion: "2024-06-25",
        cantidadDeFotos: 3,
        metrosCuadrados: 283,
        precioDeVenta: 281115
    },
    {
        nombre: "Propiedad 2643",
        direccion: "Calle 4, Barcelona",
        fechaDePublicacion: "2024-06-21",
        cantidadDeFotos: 16,
        metrosCuadrados: 293,
        precioDeVenta: 202693
    },
    {
        nombre: "Propiedad 2644",
        direccion: "Calle 83, Valencia",
        fechaDePublicacion: "2024-06-17",
        cantidadDeFotos: 11,
        metrosCuadrados: 333,
        precioDeVenta: 247920
    },
    {
        nombre: "Propiedad 2645",
        direccion: "Calle 69, Murcia",
        fechaDePublicacion: "2024-06-27",
        cantidadDeFotos: 14,
        metrosCuadrados: 191,
        precioDeVenta: 840259
    },
    {
        nombre: "Propiedad 2646",
        direccion: "Calle 11, Madrid",
        fechaDePublicacion: "2024-06-12",
        cantidadDeFotos: 17,
        metrosCuadrados: 471,
        precioDeVenta: 468167
    },
    {
        nombre: "Propiedad 2647",
        direccion: "Calle 42, Bilbao",
        fechaDePublicacion: "2024-06-13",
        cantidadDeFotos: 9,
        metrosCuadrados: 283,
        precioDeVenta: 624373
    },
    {
        nombre: "Propiedad 2648",
        direccion: "Calle 45, Málaga",
        fechaDePublicacion: "2024-06-17",
        cantidadDeFotos: 8,
        metrosCuadrados: 229,
        precioDeVenta: 793566
    },
    {
        nombre: "Propiedad 2649",
        direccion: "Calle 74, Bilbao",
        fechaDePublicacion: "2024-06-10",
        cantidadDeFotos: 9,
        metrosCuadrados: 239,
        precioDeVenta: 962873
    },
    {
        nombre: "Propiedad 2650",
        direccion: "Calle 56, Zaragoza",
        fechaDePublicacion: "2024-06-10",
        cantidadDeFotos: 14,
        metrosCuadrados: 85,
        precioDeVenta: 569105
    },
    {
        nombre: "Propiedad 2651",
        direccion: "Calle 51, Palma",
        fechaDePublicacion: "2024-06-09",
        cantidadDeFotos: 13,
        metrosCuadrados: 260,
        precioDeVenta: 904873
    },
    {
        nombre: "Propiedad 2652",
        direccion: "Calle 95, Málaga",
        fechaDePublicacion: "2024-06-23",
        cantidadDeFotos: 18,
        metrosCuadrados: 64,
        precioDeVenta: 729937
    },
    {
        nombre: "Propiedad 2653",
        direccion: "Calle 50, Barcelona",
        fechaDePublicacion: "2024-06-08",
        cantidadDeFotos: 3,
        metrosCuadrados: 91,
        precioDeVenta: 782334
    },
    {
        nombre: "Propiedad 2654",
        direccion: "Calle 96, Zaragoza",
        fechaDePublicacion: "2024-06-14",
        cantidadDeFotos: 15,
        metrosCuadrados: 354,
        precioDeVenta: 178853
    },
    {
        nombre: "Propiedad 2655",
        direccion: "Calle 24, Sevilla",
        fechaDePublicacion: "2024-06-26",
        cantidadDeFotos: 1,
        metrosCuadrados: 406,
        precioDeVenta: 70558
    },
    {
        nombre: "Propiedad 2656",
        direccion: "Calle 30, Murcia",
        fechaDePublicacion: "2024-06-13",
        cantidadDeFotos: 2,
        metrosCuadrados: 183,
        precioDeVenta: 978930
    },
    {
        nombre: "Propiedad 2657",
        direccion: "Calle 98, Málaga",
        fechaDePublicacion: "2024-06-25",
        cantidadDeFotos: 9,
        metrosCuadrados: 497,
        precioDeVenta: 859834
    },
    {
        nombre: "Propiedad 2658",
        direccion: "Calle 51, Zaragoza",
        fechaDePublicacion: "2024-06-27",
        cantidadDeFotos: 2,
        metrosCuadrados: 487,
        precioDeVenta: 902855
    },
    {
        nombre: "Propiedad 2659",
        direccion: "Calle 79, Las Palmas de Gran Canaria",
        fechaDePublicacion: "2024-06-18",
        cantidadDeFotos: 12,
        metrosCuadrados: 133,
        precioDeVenta: 876847
    },
    {
        nombre: "Propiedad 2660",
        direccion: "Calle 46, Barcelona",
        fechaDePublicacion: "2024-06-22",
        cantidadDeFotos: 11,
        metrosCuadrados: 149,
        precioDeVenta: 81254
    },
    {
        nombre: "Propiedad 2661",
        direccion: "Calle 4, Sevilla",
        fechaDePublicacion: "2024-06-11",
        cantidadDeFotos: 6,
        metrosCuadrados: 169,
        precioDeVenta: 171504
    },
    {
        nombre: "Propiedad 2662",
        direccion: "Calle 93, Palma",
        fechaDePublicacion: "2024-06-05",
        cantidadDeFotos: 10,
        metrosCuadrados: 488,
        precioDeVenta: 305833
    },
    {
        nombre: "Propiedad 2663",
        direccion: "Calle 11, Madrid",
        fechaDePublicacion: "2024-06-21",
        cantidadDeFotos: 4,
        metrosCuadrados: 121,
        precioDeVenta: 84630
    },
    {
        nombre: "Propiedad 2664",
        direccion: "Calle 74, Las Palmas de Gran Canaria",
        fechaDePublicacion: "2024-06-08",
        cantidadDeFotos: 3,
        metrosCuadrados: 249,
        precioDeVenta: 579221
    },
    {
        nombre: "Propiedad 2665",
        direccion: "Calle 25, Las Palmas de Gran Canaria",
        fechaDePublicacion: "2024-06-03",
        cantidadDeFotos: 3,
        metrosCuadrados: 97,
        precioDeVenta: 514057
    },
    {
        nombre: "Propiedad 2666",
        direccion: "Calle 37, Zaragoza",
        fechaDePublicacion: "2024-06-18",
        cantidadDeFotos: 9,
        metrosCuadrados: 207,
        precioDeVenta: 137388
    },
    {
        nombre: "Propiedad 2667",
        direccion: "Calle 6, Sevilla",
        fechaDePublicacion: "2024-06-23",
        cantidadDeFotos: 8,
        metrosCuadrados: 425,
        precioDeVenta: 392092
    },
    {
        nombre: "Propiedad 2668",
        direccion: "Calle 23, Madrid",
        fechaDePublicacion: "2024-06-14",
        cantidadDeFotos: 12,
        metrosCuadrados: 169,
        precioDeVenta: 892445
    },
    {
        nombre: "Propiedad 2669",
        direccion: "Calle 2, Murcia",
        fechaDePublicacion: "2024-06-23",
        cantidadDeFotos: 12,
        metrosCuadrados: 291,
        precioDeVenta: 739523
    },
    {
        nombre: "Propiedad 2670",
        direccion: "Calle 95, Valencia",
        fechaDePublicacion: "2024-06-13",
        cantidadDeFotos: 5,
        metrosCuadrados: 120,
        precioDeVenta: 633823
    },
    {
        nombre: "Propiedad 2671",
        direccion: "Calle 35, Palma",
        fechaDePublicacion: "2024-06-03",
        cantidadDeFotos: 20,
        metrosCuadrados: 101,
        precioDeVenta: 978620
    },
    {
        nombre: "Propiedad 2672",
        direccion: "Calle 38, Sevilla",
        fechaDePublicacion: "2024-06-03",
        cantidadDeFotos: 4,
        metrosCuadrados: 57,
        precioDeVenta: 258168
    },
    {
        nombre: "Propiedad 2673",
        direccion: "Calle 55, Zaragoza",
        fechaDePublicacion: "2024-06-19",
        cantidadDeFotos: 18,
        metrosCuadrados: 214,
        precioDeVenta: 668810
    },
    {
        nombre: "Propiedad 2674",
        direccion: "Calle 69, Málaga",
        fechaDePublicacion: "2024-06-22",
        cantidadDeFotos: 5,
        metrosCuadrados: 163,
        precioDeVenta: 126283
    },
    {
        nombre: "Propiedad 2675",
        direccion: "Calle 29, Las Palmas de Gran Canaria",
        fechaDePublicacion: "2024-06-01",
        cantidadDeFotos: 13,
        metrosCuadrados: 428,
        precioDeVenta: 738929
    },
    {
        nombre: "Propiedad 2676",
        direccion: "Calle 58, Madrid",
        fechaDePublicacion: "2024-06-07",
        cantidadDeFotos: 14,
        metrosCuadrados: 331,
        precioDeVenta: 725496
    },
    {
        nombre: "Propiedad 2677",
        direccion: "Calle 6, Bilbao",
        fechaDePublicacion: "2024-06-04",
        cantidadDeFotos: 7,
        metrosCuadrados: 249,
        precioDeVenta: 353633
    },
    {
        nombre: "Propiedad 2678",
        direccion: "Calle 76, Bilbao",
        fechaDePublicacion: "2024-06-08",
        cantidadDeFotos: 12,
        metrosCuadrados: 136,
        precioDeVenta: 506650
    },
    {
        nombre: "Propiedad 2679",
        direccion: "Calle 43, Málaga",
        fechaDePublicacion: "2024-06-26",
        cantidadDeFotos: 1,
        metrosCuadrados: 147,
        precioDeVenta: 137968
    },
    {
        nombre: "Propiedad 2680",
        direccion: "Calle 25, Palma",
        fechaDePublicacion: "2024-06-15",
        cantidadDeFotos: 13,
        metrosCuadrados: 281,
        precioDeVenta: 912610
    },
    {
        nombre: "Propiedad 2681",
        direccion: "Calle 94, Sevilla",
        fechaDePublicacion: "2024-06-09",
        cantidadDeFotos: 20,
        metrosCuadrados: 171,
        precioDeVenta: 965304
    },
    {
        nombre: "Propiedad 2682",
        direccion: "Calle 61, Bilbao",
        fechaDePublicacion: "2024-06-09",
        cantidadDeFotos: 12,
        metrosCuadrados: 239,
        precioDeVenta: 833515
    },
    {
        nombre: "Propiedad 2683",
        direccion: "Calle 73, Málaga",
        fechaDePublicacion: "2024-06-04",
        cantidadDeFotos: 5,
        metrosCuadrados: 421,
        precioDeVenta: 859858
    },
    {
        nombre: "Propiedad 2684",
        direccion: "Calle 36, Valencia",
        fechaDePublicacion: "2024-06-14",
        cantidadDeFotos: 12,
        metrosCuadrados: 304,
        precioDeVenta: 613660
    },
    {
        nombre: "Propiedad 2685",
        direccion: "Calle 47, Las Palmas de Gran Canaria",
        fechaDePublicacion: "2024-06-21",
        cantidadDeFotos: 14,
        metrosCuadrados: 491,
        precioDeVenta: 440173
    },
    {
        nombre: "Propiedad 2686",
        direccion: "Calle 2, Málaga",
        fechaDePublicacion: "2024-06-28",
        cantidadDeFotos: 10,
        metrosCuadrados: 278,
        precioDeVenta: 494406
    },
    {
        nombre: "Propiedad 2687",
        direccion: "Calle 53, Bilbao",
        fechaDePublicacion: "2024-06-03",
        cantidadDeFotos: 3,
        metrosCuadrados: 175,
        precioDeVenta: 564541
    },
    {
        nombre: "Propiedad 2688",
        direccion: "Calle 99, Las Palmas de Gran Canaria",
        fechaDePublicacion: "2024-06-19",
        cantidadDeFotos: 10,
        metrosCuadrados: 231,
        precioDeVenta: 774092
    },
    {
        nombre: "Propiedad 2689",
        direccion: "Calle 91, Bilbao",
        fechaDePublicacion: "2024-06-08",
        cantidadDeFotos: 19,
        metrosCuadrados: 490,
        precioDeVenta: 366528
    },
    {
        nombre: "Propiedad 2690",
        direccion: "Calle 25, Murcia",
        fechaDePublicacion: "2024-06-20",
        cantidadDeFotos: 9,
        metrosCuadrados: 220,
        precioDeVenta: 302944
    },
    {
        nombre: "Propiedad 2691",
        direccion: "Calle 46, Bilbao",
        fechaDePublicacion: "2024-06-12",
        cantidadDeFotos: 13,
        metrosCuadrados: 404,
        precioDeVenta: 850883
    },
    {
        nombre: "Propiedad 2692",
        direccion: "Calle 93, Málaga",
        fechaDePublicacion: "2024-06-23",
        cantidadDeFotos: 13,
        metrosCuadrados: 480,
        precioDeVenta: 184397
    },
    {
        nombre: "Propiedad 2693",
        direccion: "Calle 40, Palma",
        fechaDePublicacion: "2024-06-23",
        cantidadDeFotos: 10,
        metrosCuadrados: 342,
        precioDeVenta: 625974
    },
    {
        nombre: "Propiedad 2694",
        direccion: "Calle 46, Valencia",
        fechaDePublicacion: "2024-06-11",
        cantidadDeFotos: 3,
        metrosCuadrados: 381,
        precioDeVenta: 588922
    },
    {
        nombre: "Propiedad 2695",
        direccion: "Calle 65, Valencia",
        fechaDePublicacion: "2024-06-16",
        cantidadDeFotos: 12,
        metrosCuadrados: 356,
        precioDeVenta: 894674
    },
    {
        nombre: "Propiedad 2696",
        direccion: "Calle 69, Barcelona",
        fechaDePublicacion: "2024-06-07",
        cantidadDeFotos: 16,
        metrosCuadrados: 469,
        precioDeVenta: 411148
    },
    {
        nombre: "Propiedad 2697",
        direccion: "Calle 83, Valencia",
        fechaDePublicacion: "2024-06-04",
        cantidadDeFotos: 20,
        metrosCuadrados: 429,
        precioDeVenta: 771555
    },
    {
        nombre: "Propiedad 2698",
        direccion: "Calle 98, Barcelona",
        fechaDePublicacion: "2024-06-10",
        cantidadDeFotos: 4,
        metrosCuadrados: 143,
        precioDeVenta: 919984
    },
    {
        nombre: "Propiedad 2699",
        direccion: "Calle 78, Palma",
        fechaDePublicacion: "2024-06-22",
        cantidadDeFotos: 7,
        metrosCuadrados: 293,
        precioDeVenta: 319438
    },
    {
        nombre: "Propiedad 2700",
        direccion: "Calle 94, Valencia",
        fechaDePublicacion: "2024-06-26",
        cantidadDeFotos: 20,
        metrosCuadrados: 422,
        precioDeVenta: 906350
    },
    {
        nombre: "Propiedad 2701",
        direccion: "Calle 63, Bilbao",
        fechaDePublicacion: "2024-06-24",
        cantidadDeFotos: 14,
        metrosCuadrados: 403,
        precioDeVenta: 991813
    },
    {
        nombre: "Propiedad 2702",
        direccion: "Calle 48, Barcelona",
        fechaDePublicacion: "2024-06-15",
        cantidadDeFotos: 19,
        metrosCuadrados: 379,
        precioDeVenta: 616575
    },
    {
        nombre: "Propiedad 2703",
        direccion: "Calle 54, Madrid",
        fechaDePublicacion: "2024-06-11",
        cantidadDeFotos: 16,
        metrosCuadrados: 468,
        precioDeVenta: 129761
    },
    {
        nombre: "Propiedad 2704",
        direccion: "Calle 71, Las Palmas de Gran Canaria",
        fechaDePublicacion: "2024-06-18",
        cantidadDeFotos: 14,
        metrosCuadrados: 380,
        precioDeVenta: 802211
    },
    {
        nombre: "Propiedad 2705",
        direccion: "Calle 21, Barcelona",
        fechaDePublicacion: "2024-06-17",
        cantidadDeFotos: 1,
        metrosCuadrados: 468,
        precioDeVenta: 634383
    },
    {
        nombre: "Propiedad 2706",
        direccion: "Calle 44, Madrid",
        fechaDePublicacion: "2024-06-09",
        cantidadDeFotos: 11,
        metrosCuadrados: 350,
        precioDeVenta: 822826
    },
    {
        nombre: "Propiedad 2707",
        direccion: "Calle 36, Palma",
        fechaDePublicacion: "2024-06-03",
        cantidadDeFotos: 2,
        metrosCuadrados: 131,
        precioDeVenta: 382181
    },
    {
        nombre: "Propiedad 2708",
        direccion: "Calle 97, Sevilla",
        fechaDePublicacion: "2024-06-06",
        cantidadDeFotos: 4,
        metrosCuadrados: 229,
        precioDeVenta: 625960
    },
    {
        nombre: "Propiedad 2709",
        direccion: "Calle 72, Bilbao",
        fechaDePublicacion: "2024-06-06",
        cantidadDeFotos: 18,
        metrosCuadrados: 446,
        precioDeVenta: 440821
    },
    {
        nombre: "Propiedad 2710",
        direccion: "Calle 8, Zaragoza",
        fechaDePublicacion: "2024-06-22",
        cantidadDeFotos: 11,
        metrosCuadrados: 360,
        precioDeVenta: 596589
    },
    {
        nombre: "Propiedad 2711",
        direccion: "Calle 27, Barcelona",
        fechaDePublicacion: "2024-06-07",
        cantidadDeFotos: 5,
        metrosCuadrados: 264,
        precioDeVenta: 833422
    },
    {
        nombre: "Propiedad 2712",
        direccion: "Calle 71, Sevilla",
        fechaDePublicacion: "2024-06-15",
        cantidadDeFotos: 5,
        metrosCuadrados: 106,
        precioDeVenta: 567513
    },
    {
        nombre: "Propiedad 2713",
        direccion: "Calle 74, Madrid",
        fechaDePublicacion: "2024-06-15",
        cantidadDeFotos: 8,
        metrosCuadrados: 329,
        precioDeVenta: 114338
    },
    {
        nombre: "Propiedad 2714",
        direccion: "Calle 84, Málaga",
        fechaDePublicacion: "2024-06-07",
        cantidadDeFotos: 10,
        metrosCuadrados: 83,
        precioDeVenta: 154045
    },
    {
        nombre: "Propiedad 2715",
        direccion: "Calle 50, Las Palmas de Gran Canaria",
        fechaDePublicacion: "2024-06-28",
        cantidadDeFotos: 6,
        metrosCuadrados: 442,
        precioDeVenta: 769394
    },
    {
        nombre: "Propiedad 2716",
        direccion: "Calle 38, Zaragoza",
        fechaDePublicacion: "2024-06-18",
        cantidadDeFotos: 6,
        metrosCuadrados: 491,
        precioDeVenta: 733660
    },
    {
        nombre: "Propiedad 2717",
        direccion: "Calle 97, Barcelona",
        fechaDePublicacion: "2024-06-07",
        cantidadDeFotos: 18,
        metrosCuadrados: 152,
        precioDeVenta: 316162
    },
    {
        nombre: "Propiedad 2718",
        direccion: "Calle 33, Barcelona",
        fechaDePublicacion: "2024-06-07",
        cantidadDeFotos: 15,
        metrosCuadrados: 223,
        precioDeVenta: 501470
    },
    {
        nombre: "Propiedad 2719",
        direccion: "Calle 24, Madrid",
        fechaDePublicacion: "2024-06-19",
        cantidadDeFotos: 20,
        metrosCuadrados: 467,
        precioDeVenta: 791378
    },
    {
        nombre: "Propiedad 2720",
        direccion: "Calle 4, Zaragoza",
        fechaDePublicacion: "2024-06-01",
        cantidadDeFotos: 10,
        metrosCuadrados: 350,
        precioDeVenta: 749945
    },
    {
        nombre: "Propiedad 2721",
        direccion: "Calle 21, Valencia",
        fechaDePublicacion: "2024-06-13",
        cantidadDeFotos: 20,
        metrosCuadrados: 303,
        precioDeVenta: 436096
    },
    {
        nombre: "Propiedad 2722",
        direccion: "Calle 48, Sevilla",
        fechaDePublicacion: "2024-06-10",
        cantidadDeFotos: 15,
        metrosCuadrados: 243,
        precioDeVenta: 724695
    },
    {
        nombre: "Propiedad 2723",
        direccion: "Calle 12, Las Palmas de Gran Canaria",
        fechaDePublicacion: "2024-06-04",
        cantidadDeFotos: 3,
        metrosCuadrados: 113,
        precioDeVenta: 71898
    },
    {
        nombre: "Propiedad 2724",
        direccion: "Calle 87, Bilbao",
        fechaDePublicacion: "2024-06-05",
        cantidadDeFotos: 15,
        metrosCuadrados: 227,
        precioDeVenta: 60268
    },
    {
        nombre: "Propiedad 2725",
        direccion: "Calle 21, Madrid",
        fechaDePublicacion: "2024-06-06",
        cantidadDeFotos: 3,
        metrosCuadrados: 283,
        precioDeVenta: 368967
    },
    {
        nombre: "Propiedad 2726",
        direccion: "Calle 50, Madrid",
        fechaDePublicacion: "2024-06-27",
        cantidadDeFotos: 8,
        metrosCuadrados: 257,
        precioDeVenta: 360329
    },
    {
        nombre: "Propiedad 2727",
        direccion: "Calle 51, Barcelona",
        fechaDePublicacion: "2024-06-20",
        cantidadDeFotos: 10,
        metrosCuadrados: 416,
        precioDeVenta: 565027
    },
    {
        nombre: "Propiedad 2728",
        direccion: "Calle 26, Málaga",
        fechaDePublicacion: "2024-06-11",
        cantidadDeFotos: 9,
        metrosCuadrados: 315,
        precioDeVenta: 843211
    },
    {
        nombre: "Propiedad 2729",
        direccion: "Calle 77, Sevilla",
        fechaDePublicacion: "2024-06-12",
        cantidadDeFotos: 7,
        metrosCuadrados: 192,
        precioDeVenta: 63919
    },
    {
        nombre: "Propiedad 2730",
        direccion: "Calle 78, Málaga",
        fechaDePublicacion: "2024-06-23",
        cantidadDeFotos: 5,
        metrosCuadrados: 227,
        precioDeVenta: 363933
    },
    {
        nombre: "Propiedad 2731",
        direccion: "Calle 50, Madrid",
        fechaDePublicacion: "2024-06-26",
        cantidadDeFotos: 14,
        metrosCuadrados: 269,
        precioDeVenta: 582829
    },
    {
        nombre: "Propiedad 2732",
        direccion: "Calle 65, Murcia",
        fechaDePublicacion: "2024-06-09",
        cantidadDeFotos: 13,
        metrosCuadrados: 488,
        precioDeVenta: 138042
    },
    {
        nombre: "Propiedad 2733",
        direccion: "Calle 1, Zaragoza",
        fechaDePublicacion: "2024-06-02",
        cantidadDeFotos: 20,
        metrosCuadrados: 364,
        precioDeVenta: 913467
    },
    {
        nombre: "Propiedad 2734",
        direccion: "Calle 41, Valencia",
        fechaDePublicacion: "2024-06-15",
        cantidadDeFotos: 2,
        metrosCuadrados: 452,
        precioDeVenta: 887647
    },
    {
        nombre: "Propiedad 2735",
        direccion: "Calle 83, Murcia",
        fechaDePublicacion: "2024-06-18",
        cantidadDeFotos: 14,
        metrosCuadrados: 173,
        precioDeVenta: 617671
    },
    {
        nombre: "Propiedad 2736",
        direccion: "Calle 4, Las Palmas de Gran Canaria",
        fechaDePublicacion: "2024-06-24",
        cantidadDeFotos: 7,
        metrosCuadrados: 458,
        precioDeVenta: 946394
    },
    {
        nombre: "Propiedad 2737",
        direccion: "Calle 77, Las Palmas de Gran Canaria",
        fechaDePublicacion: "2024-06-04",
        cantidadDeFotos: 13,
        metrosCuadrados: 428,
        precioDeVenta: 289587
    },
    {
        nombre: "Propiedad 2738",
        direccion: "Calle 6, Zaragoza",
        fechaDePublicacion: "2024-06-14",
        cantidadDeFotos: 9,
        metrosCuadrados: 255,
        precioDeVenta: 417127
    },
    {
        nombre: "Propiedad 2739",
        direccion: "Calle 28, Málaga",
        fechaDePublicacion: "2024-06-28",
        cantidadDeFotos: 8,
        metrosCuadrados: 122,
        precioDeVenta: 526493
    },
    {
        nombre: "Propiedad 2740",
        direccion: "Calle 56, Palma",
        fechaDePublicacion: "2024-06-04",
        cantidadDeFotos: 16,
        metrosCuadrados: 486,
        precioDeVenta: 493836
    },
    {
        nombre: "Propiedad 2741",
        direccion: "Calle 60, Málaga",
        fechaDePublicacion: "2024-06-11",
        cantidadDeFotos: 20,
        metrosCuadrados: 461,
        precioDeVenta: 535318
    },
    {
        nombre: "Propiedad 2742",
        direccion: "Calle 92, Valencia",
        fechaDePublicacion: "2024-06-28",
        cantidadDeFotos: 13,
        metrosCuadrados: 273,
        precioDeVenta: 111339
    },
    {
        nombre: "Propiedad 2743",
        direccion: "Calle 94, Barcelona",
        fechaDePublicacion: "2024-06-22",
        cantidadDeFotos: 9,
        metrosCuadrados: 53,
        precioDeVenta: 441299
    },
    {
        nombre: "Propiedad 2744",
        direccion: "Calle 97, Murcia",
        fechaDePublicacion: "2024-06-07",
        cantidadDeFotos: 5,
        metrosCuadrados: 319,
        precioDeVenta: 316113
    },
    {
        nombre: "Propiedad 2745",
        direccion: "Calle 89, Valencia",
        fechaDePublicacion: "2024-06-07",
        cantidadDeFotos: 6,
        metrosCuadrados: 238,
        precioDeVenta: 372628
    },
    {
        nombre: "Propiedad 2746",
        direccion: "Calle 85, Madrid",
        fechaDePublicacion: "2024-06-08",
        cantidadDeFotos: 8,
        metrosCuadrados: 471,
        precioDeVenta: 179349
    },
    {
        nombre: "Propiedad 2747",
        direccion: "Calle 68, Palma",
        fechaDePublicacion: "2024-06-18",
        cantidadDeFotos: 5,
        metrosCuadrados: 469,
        precioDeVenta: 449979
    },
    {
        nombre: "Propiedad 2748",
        direccion: "Calle 24, Bilbao",
        fechaDePublicacion: "2024-06-27",
        cantidadDeFotos: 14,
        metrosCuadrados: 406,
        precioDeVenta: 336868
    },
    {
        nombre: "Propiedad 2749",
        direccion: "Calle 53, Zaragoza",
        fechaDePublicacion: "2024-06-05",
        cantidadDeFotos: 9,
        metrosCuadrados: 397,
        precioDeVenta: 366838
    },
    {
        nombre: "Propiedad 2750",
        direccion: "Calle 77, Murcia",
        fechaDePublicacion: "2024-06-09",
        cantidadDeFotos: 16,
        metrosCuadrados: 489,
        precioDeVenta: 797849
    },
    {
        nombre: "Propiedad 2751",
        direccion: "Calle 63, Valencia",
        fechaDePublicacion: "2024-06-01",
        cantidadDeFotos: 9,
        metrosCuadrados: 186,
        precioDeVenta: 437722
    },
    {
        nombre: "Propiedad 2752",
        direccion: "Calle 73, Las Palmas de Gran Canaria",
        fechaDePublicacion: "2024-06-28",
        cantidadDeFotos: 3,
        metrosCuadrados: 499,
        precioDeVenta: 809621
    },
    {
        nombre: "Propiedad 2753",
        direccion: "Calle 23, Las Palmas de Gran Canaria",
        fechaDePublicacion: "2024-06-26",
        cantidadDeFotos: 12,
        metrosCuadrados: 469,
        precioDeVenta: 301355
    },
    {
        nombre: "Propiedad 2754",
        direccion: "Calle 53, Bilbao",
        fechaDePublicacion: "2024-06-10",
        cantidadDeFotos: 11,
        metrosCuadrados: 366,
        precioDeVenta: 384639
    },
    {
        nombre: "Propiedad 2755",
        direccion: "Calle 34, Sevilla",
        fechaDePublicacion: "2024-06-09",
        cantidadDeFotos: 7,
        metrosCuadrados: 74,
        precioDeVenta: 508881
    },
    {
        nombre: "Propiedad 2756",
        direccion: "Calle 53, Madrid",
        fechaDePublicacion: "2024-06-29",
        cantidadDeFotos: 17,
        metrosCuadrados: 440,
        precioDeVenta: 361531
    },
    {
        nombre: "Propiedad 2757",
        direccion: "Calle 77, Málaga",
        fechaDePublicacion: "2024-06-12",
        cantidadDeFotos: 2,
        metrosCuadrados: 243,
        precioDeVenta: 113967
    },
    {
        nombre: "Propiedad 2758",
        direccion: "Calle 19, Sevilla",
        fechaDePublicacion: "2024-06-09",
        cantidadDeFotos: 3,
        metrosCuadrados: 344,
        precioDeVenta: 713055
    },
    {
        nombre: "Propiedad 2759",
        direccion: "Calle 71, Bilbao",
        fechaDePublicacion: "2024-06-23",
        cantidadDeFotos: 9,
        metrosCuadrados: 234,
        precioDeVenta: 203114
    },
    {
        nombre: "Propiedad 2760",
        direccion: "Calle 6, Madrid",
        fechaDePublicacion: "2024-06-17",
        cantidadDeFotos: 20,
        metrosCuadrados: 272,
        precioDeVenta: 228412
    },
    {
        nombre: "Propiedad 2761",
        direccion: "Calle 75, Málaga",
        fechaDePublicacion: "2024-06-06",
        cantidadDeFotos: 7,
        metrosCuadrados: 190,
        precioDeVenta: 416341
    },
    {
        nombre: "Propiedad 2762",
        direccion: "Calle 76, Las Palmas de Gran Canaria",
        fechaDePublicacion: "2024-06-22",
        cantidadDeFotos: 14,
        metrosCuadrados: 456,
        precioDeVenta: 969262
    },
    {
        nombre: "Propiedad 2763",
        direccion: "Calle 50, Palma",
        fechaDePublicacion: "2024-06-11",
        cantidadDeFotos: 19,
        metrosCuadrados: 490,
        precioDeVenta: 315555
    },
    {
        nombre: "Propiedad 2764",
        direccion: "Calle 5, Valencia",
        fechaDePublicacion: "2024-06-21",
        cantidadDeFotos: 5,
        metrosCuadrados: 173,
        precioDeVenta: 846486
    },
    {
        nombre: "Propiedad 2765",
        direccion: "Calle 80, Las Palmas de Gran Canaria",
        fechaDePublicacion: "2024-06-27",
        cantidadDeFotos: 11,
        metrosCuadrados: 448,
        precioDeVenta: 732000
    },
    {
        nombre: "Propiedad 2766",
        direccion: "Calle 58, Murcia",
        fechaDePublicacion: "2024-06-15",
        cantidadDeFotos: 11,
        metrosCuadrados: 474,
        precioDeVenta: 695177
    },
    {
        nombre: "Propiedad 2767",
        direccion: "Calle 56, Zaragoza",
        fechaDePublicacion: "2024-06-06",
        cantidadDeFotos: 2,
        metrosCuadrados: 63,
        precioDeVenta: 966553
    },
    {
        nombre: "Propiedad 2768",
        direccion: "Calle 71, Palma",
        fechaDePublicacion: "2024-06-05",
        cantidadDeFotos: 7,
        metrosCuadrados: 97,
        precioDeVenta: 999044
    },
    {
        nombre: "Propiedad 2769",
        direccion: "Calle 7, Bilbao",
        fechaDePublicacion: "2024-06-26",
        cantidadDeFotos: 11,
        metrosCuadrados: 143,
        precioDeVenta: 838169
    },
    {
        nombre: "Propiedad 2770",
        direccion: "Calle 75, Bilbao",
        fechaDePublicacion: "2024-06-03",
        cantidadDeFotos: 9,
        metrosCuadrados: 201,
        precioDeVenta: 830294
    },
    {
        nombre: "Propiedad 2771",
        direccion: "Calle 56, Palma",
        fechaDePublicacion: "2024-06-03",
        cantidadDeFotos: 9,
        metrosCuadrados: 259,
        precioDeVenta: 172812
    },
    {
        nombre: "Propiedad 2772",
        direccion: "Calle 41, Zaragoza",
        fechaDePublicacion: "2024-06-28",
        cantidadDeFotos: 19,
        metrosCuadrados: 202,
        precioDeVenta: 973657
    },
    {
        nombre: "Propiedad 2773",
        direccion: "Calle 63, Bilbao",
        fechaDePublicacion: "2024-06-18",
        cantidadDeFotos: 9,
        metrosCuadrados: 75,
        precioDeVenta: 831540
    },
    {
        nombre: "Propiedad 2774",
        direccion: "Calle 29, Valencia",
        fechaDePublicacion: "2024-06-10",
        cantidadDeFotos: 11,
        metrosCuadrados: 252,
        precioDeVenta: 562802
    },
    {
        nombre: "Propiedad 2775",
        direccion: "Calle 52, Zaragoza",
        fechaDePublicacion: "2024-06-28",
        cantidadDeFotos: 9,
        metrosCuadrados: 149,
        precioDeVenta: 584704
    },
    {
        nombre: "Propiedad 2776",
        direccion: "Calle 11, Las Palmas de Gran Canaria",
        fechaDePublicacion: "2024-06-15",
        cantidadDeFotos: 16,
        metrosCuadrados: 293,
        precioDeVenta: 624784
    },
    {
        nombre: "Propiedad 2777",
        direccion: "Calle 3, Murcia",
        fechaDePublicacion: "2024-06-10",
        cantidadDeFotos: 5,
        metrosCuadrados: 135,
        precioDeVenta: 50793
    },
    {
        nombre: "Propiedad 2778",
        direccion: "Calle 5, Sevilla",
        fechaDePublicacion: "2024-06-23",
        cantidadDeFotos: 6,
        metrosCuadrados: 462,
        precioDeVenta: 405834
    },
    {
        nombre: "Propiedad 2779",
        direccion: "Calle 62, Málaga",
        fechaDePublicacion: "2024-06-15",
        cantidadDeFotos: 12,
        metrosCuadrados: 497,
        precioDeVenta: 733055
    },
    {
        nombre: "Propiedad 2780",
        direccion: "Calle 11, Bilbao",
        fechaDePublicacion: "2024-06-04",
        cantidadDeFotos: 1,
        metrosCuadrados: 466,
        precioDeVenta: 167047
    },
    {
        nombre: "Propiedad 2781",
        direccion: "Calle 46, Valencia",
        fechaDePublicacion: "2024-06-08",
        cantidadDeFotos: 10,
        metrosCuadrados: 141,
        precioDeVenta: 546703
    },
    {
        nombre: "Propiedad 2782",
        direccion: "Calle 4, Palma",
        fechaDePublicacion: "2024-06-19",
        cantidadDeFotos: 16,
        metrosCuadrados: 118,
        precioDeVenta: 543849
    },
    {
        nombre: "Propiedad 2783",
        direccion: "Calle 69, Sevilla",
        fechaDePublicacion: "2024-06-15",
        cantidadDeFotos: 18,
        metrosCuadrados: 330,
        precioDeVenta: 501530
    },
    {
        nombre: "Propiedad 2784",
        direccion: "Calle 80, Málaga",
        fechaDePublicacion: "2024-06-08",
        cantidadDeFotos: 20,
        metrosCuadrados: 179,
        precioDeVenta: 83378
    },
    {
        nombre: "Propiedad 2785",
        direccion: "Calle 95, Palma",
        fechaDePublicacion: "2024-06-06",
        cantidadDeFotos: 3,
        metrosCuadrados: 350,
        precioDeVenta: 588526
    },
    {
        nombre: "Propiedad 2786",
        direccion: "Calle 4, Las Palmas de Gran Canaria",
        fechaDePublicacion: "2024-06-20",
        cantidadDeFotos: 8,
        metrosCuadrados: 286,
        precioDeVenta: 290638
    },
    {
        nombre: "Propiedad 2787",
        direccion: "Calle 30, Barcelona",
        fechaDePublicacion: "2024-06-07",
        cantidadDeFotos: 11,
        metrosCuadrados: 263,
        precioDeVenta: 880893
    },
    {
        nombre: "Propiedad 2788",
        direccion: "Calle 23, Barcelona",
        fechaDePublicacion: "2024-06-17",
        cantidadDeFotos: 11,
        metrosCuadrados: 460,
        precioDeVenta: 983009
    },
    {
        nombre: "Propiedad 2789",
        direccion: "Calle 67, Valencia",
        fechaDePublicacion: "2024-06-01",
        cantidadDeFotos: 19,
        metrosCuadrados: 115,
        precioDeVenta: 202289
    },
    {
        nombre: "Propiedad 2790",
        direccion: "Calle 40, Bilbao",
        fechaDePublicacion: "2024-06-18",
        cantidadDeFotos: 18,
        metrosCuadrados: 140,
        precioDeVenta: 547660
    },
    {
        nombre: "Propiedad 2791",
        direccion: "Calle 87, Barcelona",
        fechaDePublicacion: "2024-06-05",
        cantidadDeFotos: 19,
        metrosCuadrados: 184,
        precioDeVenta: 491599
    },
    {
        nombre: "Propiedad 2792",
        direccion: "Calle 47, Palma",
        fechaDePublicacion: "2024-06-23",
        cantidadDeFotos: 8,
        metrosCuadrados: 268,
        precioDeVenta: 70563
    },
    {
        nombre: "Propiedad 2793",
        direccion: "Calle 19, Madrid",
        fechaDePublicacion: "2024-06-05",
        cantidadDeFotos: 8,
        metrosCuadrados: 477,
        precioDeVenta: 977840
    },
    {
        nombre: "Propiedad 2794",
        direccion: "Calle 57, Barcelona",
        fechaDePublicacion: "2024-06-09",
        cantidadDeFotos: 4,
        metrosCuadrados: 270,
        precioDeVenta: 232800
    },
    {
        nombre: "Propiedad 2795",
        direccion: "Calle 33, Valencia",
        fechaDePublicacion: "2024-06-03",
        cantidadDeFotos: 18,
        metrosCuadrados: 344,
        precioDeVenta: 272609
    },
    {
        nombre: "Propiedad 2796",
        direccion: "Calle 21, Palma",
        fechaDePublicacion: "2024-06-02",
        cantidadDeFotos: 11,
        metrosCuadrados: 424,
        precioDeVenta: 262666
    },
    {
        nombre: "Propiedad 2797",
        direccion: "Calle 22, Sevilla",
        fechaDePublicacion: "2024-06-17",
        cantidadDeFotos: 10,
        metrosCuadrados: 146,
        precioDeVenta: 281256
    },
    {
        nombre: "Propiedad 2798",
        direccion: "Calle 81, Sevilla",
        fechaDePublicacion: "2024-06-24",
        cantidadDeFotos: 6,
        metrosCuadrados: 196,
        precioDeVenta: 194586
    },
    {
        nombre: "Propiedad 2799",
        direccion: "Calle 84, Sevilla",
        fechaDePublicacion: "2024-06-12",
        cantidadDeFotos: 11,
        metrosCuadrados: 379,
        precioDeVenta: 828767
    },
    {
        nombre: "Propiedad 2800",
        direccion: "Calle 31, Valencia",
        fechaDePublicacion: "2024-06-10",
        cantidadDeFotos: 9,
        metrosCuadrados: 377,
        precioDeVenta: 604712
    },
    {
        nombre: "Propiedad 2801",
        direccion: "Calle 92, Madrid",
        fechaDePublicacion: "2024-06-25",
        cantidadDeFotos: 9,
        metrosCuadrados: 258,
        precioDeVenta: 145388
    },
    {
        nombre: "Propiedad 2802",
        direccion: "Calle 11, Madrid",
        fechaDePublicacion: "2024-06-29",
        cantidadDeFotos: 18,
        metrosCuadrados: 143,
        precioDeVenta: 961694
    },
    {
        nombre: "Propiedad 2803",
        direccion: "Calle 70, Zaragoza",
        fechaDePublicacion: "2024-06-05",
        cantidadDeFotos: 8,
        metrosCuadrados: 54,
        precioDeVenta: 586817
    },
    {
        nombre: "Propiedad 2804",
        direccion: "Calle 99, Barcelona",
        fechaDePublicacion: "2024-06-13",
        cantidadDeFotos: 4,
        metrosCuadrados: 208,
        precioDeVenta: 956865
    },
    {
        nombre: "Propiedad 2805",
        direccion: "Calle 94, Málaga",
        fechaDePublicacion: "2024-06-07",
        cantidadDeFotos: 19,
        metrosCuadrados: 317,
        precioDeVenta: 547594
    },
    {
        nombre: "Propiedad 2806",
        direccion: "Calle 36, Barcelona",
        fechaDePublicacion: "2024-06-19",
        cantidadDeFotos: 11,
        metrosCuadrados: 123,
        precioDeVenta: 514061
    },
    {
        nombre: "Propiedad 2807",
        direccion: "Calle 38, Sevilla",
        fechaDePublicacion: "2024-06-07",
        cantidadDeFotos: 5,
        metrosCuadrados: 381,
        precioDeVenta: 307369
    },
    {
        nombre: "Propiedad 2808",
        direccion: "Calle 68, Bilbao",
        fechaDePublicacion: "2024-06-11",
        cantidadDeFotos: 2,
        metrosCuadrados: 287,
        precioDeVenta: 405190
    },
    {
        nombre: "Propiedad 2809",
        direccion: "Calle 93, Madrid",
        fechaDePublicacion: "2024-06-27",
        cantidadDeFotos: 6,
        metrosCuadrados: 369,
        precioDeVenta: 876003
    },
    {
        nombre: "Propiedad 2810",
        direccion: "Calle 43, Palma",
        fechaDePublicacion: "2024-06-04",
        cantidadDeFotos: 1,
        metrosCuadrados: 418,
        precioDeVenta: 714586
    },
    {
        nombre: "Propiedad 2811",
        direccion: "Calle 81, Zaragoza",
        fechaDePublicacion: "2024-06-06",
        cantidadDeFotos: 2,
        metrosCuadrados: 325,
        precioDeVenta: 146766
    },
    {
        nombre: "Propiedad 2812",
        direccion: "Calle 88, Valencia",
        fechaDePublicacion: "2024-06-05",
        cantidadDeFotos: 9,
        metrosCuadrados: 315,
        precioDeVenta: 609056
    },
    {
        nombre: "Propiedad 2813",
        direccion: "Calle 93, Málaga",
        fechaDePublicacion: "2024-06-18",
        cantidadDeFotos: 3,
        metrosCuadrados: 249,
        precioDeVenta: 843831
    },
    {
        nombre: "Propiedad 2814",
        direccion: "Calle 54, Zaragoza",
        fechaDePublicacion: "2024-06-06",
        cantidadDeFotos: 2,
        metrosCuadrados: 329,
        precioDeVenta: 67395
    },
    {
        nombre: "Propiedad 2815",
        direccion: "Calle 95, Murcia",
        fechaDePublicacion: "2024-06-05",
        cantidadDeFotos: 15,
        metrosCuadrados: 410,
        precioDeVenta: 815963
    },
    {
        nombre: "Propiedad 2816",
        direccion: "Calle 97, Valencia",
        fechaDePublicacion: "2024-06-02",
        cantidadDeFotos: 14,
        metrosCuadrados: 125,
        precioDeVenta: 782498
    },
    {
        nombre: "Propiedad 2817",
        direccion: "Calle 79, Zaragoza",
        fechaDePublicacion: "2024-06-21",
        cantidadDeFotos: 6,
        metrosCuadrados: 185,
        precioDeVenta: 179311
    },
    {
        nombre: "Propiedad 2818",
        direccion: "Calle 45, Madrid",
        fechaDePublicacion: "2024-06-15",
        cantidadDeFotos: 15,
        metrosCuadrados: 199,
        precioDeVenta: 457840
    },
    {
        nombre: "Propiedad 2819",
        direccion: "Calle 22, Málaga",
        fechaDePublicacion: "2024-06-09",
        cantidadDeFotos: 18,
        metrosCuadrados: 382,
        precioDeVenta: 195189
    },
    {
        nombre: "Propiedad 2820",
        direccion: "Calle 98, Bilbao",
        fechaDePublicacion: "2024-06-08",
        cantidadDeFotos: 7,
        metrosCuadrados: 341,
        precioDeVenta: 279840
    },
    {
        nombre: "Propiedad 2821",
        direccion: "Calle 45, Madrid",
        fechaDePublicacion: "2024-06-02",
        cantidadDeFotos: 8,
        metrosCuadrados: 64,
        precioDeVenta: 226739
    },
    {
        nombre: "Propiedad 2822",
        direccion: "Calle 30, Palma",
        fechaDePublicacion: "2024-06-28",
        cantidadDeFotos: 16,
        metrosCuadrados: 354,
        precioDeVenta: 938830
    },
    {
        nombre: "Propiedad 2823",
        direccion: "Calle 51, Bilbao",
        fechaDePublicacion: "2024-06-05",
        cantidadDeFotos: 15,
        metrosCuadrados: 90,
        precioDeVenta: 916993
    },
    {
        nombre: "Propiedad 2824",
        direccion: "Calle 95, Valencia",
        fechaDePublicacion: "2024-06-02",
        cantidadDeFotos: 13,
        metrosCuadrados: 295,
        precioDeVenta: 289888
    },
    {
        nombre: "Propiedad 2825",
        direccion: "Calle 46, Las Palmas de Gran Canaria",
        fechaDePublicacion: "2024-06-04",
        cantidadDeFotos: 17,
        metrosCuadrados: 225,
        precioDeVenta: 745579
    },
    {
        nombre: "Propiedad 2826",
        direccion: "Calle 87, Bilbao",
        fechaDePublicacion: "2024-06-15",
        cantidadDeFotos: 3,
        metrosCuadrados: 138,
        precioDeVenta: 84023
    },
    {
        nombre: "Propiedad 2827",
        direccion: "Calle 80, Bilbao",
        fechaDePublicacion: "2024-06-16",
        cantidadDeFotos: 14,
        metrosCuadrados: 327,
        precioDeVenta: 607011
    },
    {
        nombre: "Propiedad 2828",
        direccion: "Calle 45, Las Palmas de Gran Canaria",
        fechaDePublicacion: "2024-05-31",
        cantidadDeFotos: 6,
        metrosCuadrados: 310,
        precioDeVenta: 947544
    },
    {
        nombre: "Propiedad 2829",
        direccion: "Calle 28, Madrid",
        fechaDePublicacion: "2024-06-21",
        cantidadDeFotos: 8,
        metrosCuadrados: 74,
        precioDeVenta: 328565
    },
    {
        nombre: "Propiedad 2830",
        direccion: "Calle 10, Barcelona",
        fechaDePublicacion: "2024-06-04",
        cantidadDeFotos: 9,
        metrosCuadrados: 413,
        precioDeVenta: 916933
    },
    {
        nombre: "Propiedad 2831",
        direccion: "Calle 10, Bilbao",
        fechaDePublicacion: "2024-06-24",
        cantidadDeFotos: 4,
        metrosCuadrados: 235,
        precioDeVenta: 513085
    },
    {
        nombre: "Propiedad 2832",
        direccion: "Calle 86, Palma",
        fechaDePublicacion: "2024-06-16",
        cantidadDeFotos: 15,
        metrosCuadrados: 371,
        precioDeVenta: 316545
    },
    {
        nombre: "Propiedad 2833",
        direccion: "Calle 35, Barcelona",
        fechaDePublicacion: "2024-06-16",
        cantidadDeFotos: 18,
        metrosCuadrados: 329,
        precioDeVenta: 165071
    },
    {
        nombre: "Propiedad 2834",
        direccion: "Calle 51, Valencia",
        fechaDePublicacion: "2024-06-07",
        cantidadDeFotos: 18,
        metrosCuadrados: 216,
        precioDeVenta: 899359
    },
    {
        nombre: "Propiedad 2835",
        direccion: "Calle 49, Madrid",
        fechaDePublicacion: "2024-06-08",
        cantidadDeFotos: 1,
        metrosCuadrados: 386,
        precioDeVenta: 107372
    },
    {
        nombre: "Propiedad 2836",
        direccion: "Calle 55, Barcelona",
        fechaDePublicacion: "2024-06-12",
        cantidadDeFotos: 8,
        metrosCuadrados: 141,
        precioDeVenta: 993802
    },
    {
        nombre: "Propiedad 2837",
        direccion: "Calle 46, Palma",
        fechaDePublicacion: "2024-06-14",
        cantidadDeFotos: 19,
        metrosCuadrados: 120,
        precioDeVenta: 193421
    },
    {
        nombre: "Propiedad 2838",
        direccion: "Calle 6, Madrid",
        fechaDePublicacion: "2024-06-01",
        cantidadDeFotos: 14,
        metrosCuadrados: 384,
        precioDeVenta: 290108
    },
    {
        nombre: "Propiedad 2839",
        direccion: "Calle 72, Madrid",
        fechaDePublicacion: "2024-06-09",
        cantidadDeFotos: 8,
        metrosCuadrados: 217,
        precioDeVenta: 105652
    },
    {
        nombre: "Propiedad 2840",
        direccion: "Calle 24, Barcelona",
        fechaDePublicacion: "2024-06-05",
        cantidadDeFotos: 14,
        metrosCuadrados: 284,
        precioDeVenta: 178706
    },
    {
        nombre: "Propiedad 2841",
        direccion: "Calle 79, Palma",
        fechaDePublicacion: "2024-06-10",
        cantidadDeFotos: 11,
        metrosCuadrados: 369,
        precioDeVenta: 952195
    },
    {
        nombre: "Propiedad 2842",
        direccion: "Calle 7, Las Palmas de Gran Canaria",
        fechaDePublicacion: "2024-06-12",
        cantidadDeFotos: 7,
        metrosCuadrados: 175,
        precioDeVenta: 913142
    },
    {
        nombre: "Propiedad 2843",
        direccion: "Calle 33, Madrid",
        fechaDePublicacion: "2024-06-17",
        cantidadDeFotos: 17,
        metrosCuadrados: 133,
        precioDeVenta: 363068
    },
    {
        nombre: "Propiedad 2844",
        direccion: "Calle 64, Barcelona",
        fechaDePublicacion: "2024-06-09",
        cantidadDeFotos: 7,
        metrosCuadrados: 323,
        precioDeVenta: 733892
    },
    {
        nombre: "Propiedad 2845",
        direccion: "Calle 1, Barcelona",
        fechaDePublicacion: "2024-06-01",
        cantidadDeFotos: 9,
        metrosCuadrados: 427,
        precioDeVenta: 655919
    },
    {
        nombre: "Propiedad 2846",
        direccion: "Calle 24, Las Palmas de Gran Canaria",
        fechaDePublicacion: "2024-06-07",
        cantidadDeFotos: 16,
        metrosCuadrados: 477,
        precioDeVenta: 324462
    },
    {
        nombre: "Propiedad 2847",
        direccion: "Calle 22, Murcia",
        fechaDePublicacion: "2024-06-11",
        cantidadDeFotos: 13,
        metrosCuadrados: 312,
        precioDeVenta: 992172
    },
    {
        nombre: "Propiedad 2848",
        direccion: "Calle 31, Bilbao",
        fechaDePublicacion: "2024-06-16",
        cantidadDeFotos: 14,
        metrosCuadrados: 354,
        precioDeVenta: 271235
    },
    {
        nombre: "Propiedad 2849",
        direccion: "Calle 55, Valencia",
        fechaDePublicacion: "2024-06-15",
        cantidadDeFotos: 5,
        metrosCuadrados: 59,
        precioDeVenta: 401988
    },
    {
        nombre: "Propiedad 2850",
        direccion: "Calle 86, Valencia",
        fechaDePublicacion: "2024-06-17",
        cantidadDeFotos: 15,
        metrosCuadrados: 239,
        precioDeVenta: 331915
    },
    {
        nombre: "Propiedad 2851",
        direccion: "Calle 35, Barcelona",
        fechaDePublicacion: "2024-06-25",
        cantidadDeFotos: 19,
        metrosCuadrados: 444,
        precioDeVenta: 877047
    },
    {
        nombre: "Propiedad 2852",
        direccion: "Calle 19, Sevilla",
        fechaDePublicacion: "2024-06-11",
        cantidadDeFotos: 18,
        metrosCuadrados: 254,
        precioDeVenta: 570027
    },
    {
        nombre: "Propiedad 2853",
        direccion: "Calle 5, Palma",
        fechaDePublicacion: "2024-06-03",
        cantidadDeFotos: 8,
        metrosCuadrados: 246,
        precioDeVenta: 670770
    },
    {
        nombre: "Propiedad 2854",
        direccion: "Calle 12, Bilbao",
        fechaDePublicacion: "2024-06-19",
        cantidadDeFotos: 1,
        metrosCuadrados: 496,
        precioDeVenta: 568678
    },
    {
        nombre: "Propiedad 2855",
        direccion: "Calle 48, Málaga",
        fechaDePublicacion: "2024-06-05",
        cantidadDeFotos: 15,
        metrosCuadrados: 179,
        precioDeVenta: 779260
    },
    {
        nombre: "Propiedad 2856",
        direccion: "Calle 70, Murcia",
        fechaDePublicacion: "2024-06-05",
        cantidadDeFotos: 9,
        metrosCuadrados: 445,
        precioDeVenta: 159445
    },
    {
        nombre: "Propiedad 2857",
        direccion: "Calle 93, Las Palmas de Gran Canaria",
        fechaDePublicacion: "2024-06-17",
        cantidadDeFotos: 6,
        metrosCuadrados: 455,
        precioDeVenta: 314298
    },
    {
        nombre: "Propiedad 2858",
        direccion: "Calle 25, Las Palmas de Gran Canaria",
        fechaDePublicacion: "2024-06-18",
        cantidadDeFotos: 9,
        metrosCuadrados: 315,
        precioDeVenta: 194559
    },
    {
        nombre: "Propiedad 2859",
        direccion: "Calle 4, Las Palmas de Gran Canaria",
        fechaDePublicacion: "2024-06-08",
        cantidadDeFotos: 15,
        metrosCuadrados: 149,
        precioDeVenta: 57206
    },
    {
        nombre: "Propiedad 2860",
        direccion: "Calle 44, Murcia",
        fechaDePublicacion: "2024-06-25",
        cantidadDeFotos: 16,
        metrosCuadrados: 465,
        precioDeVenta: 711586
    },
    {
        nombre: "Propiedad 2861",
        direccion: "Calle 27, Madrid",
        fechaDePublicacion: "2024-06-15",
        cantidadDeFotos: 17,
        metrosCuadrados: 412,
        precioDeVenta: 828978
    },
    {
        nombre: "Propiedad 2862",
        direccion: "Calle 75, Zaragoza",
        fechaDePublicacion: "2024-06-11",
        cantidadDeFotos: 3,
        metrosCuadrados: 442,
        precioDeVenta: 712700
    },
    {
        nombre: "Propiedad 2863",
        direccion: "Calle 7, Málaga",
        fechaDePublicacion: "2024-06-20",
        cantidadDeFotos: 12,
        metrosCuadrados: 346,
        precioDeVenta: 679034
    },
    {
        nombre: "Propiedad 2864",
        direccion: "Calle 46, Las Palmas de Gran Canaria",
        fechaDePublicacion: "2024-06-22",
        cantidadDeFotos: 13,
        metrosCuadrados: 328,
        precioDeVenta: 638000
    },
    {
        nombre: "Propiedad 2865",
        direccion: "Calle 34, Palma",
        fechaDePublicacion: "2024-06-16",
        cantidadDeFotos: 5,
        metrosCuadrados: 125,
        precioDeVenta: 842922
    },
    {
        nombre: "Propiedad 2866",
        direccion: "Calle 28, Palma",
        fechaDePublicacion: "2024-06-04",
        cantidadDeFotos: 6,
        metrosCuadrados: 77,
        precioDeVenta: 538803
    },
    {
        nombre: "Propiedad 2867",
        direccion: "Calle 16, Barcelona",
        fechaDePublicacion: "2024-06-01",
        cantidadDeFotos: 11,
        metrosCuadrados: 381,
        precioDeVenta: 237424
    },
    {
        nombre: "Propiedad 2868",
        direccion: "Calle 2, Zaragoza",
        fechaDePublicacion: "2024-06-04",
        cantidadDeFotos: 10,
        metrosCuadrados: 241,
        precioDeVenta: 364927
    },
    {
        nombre: "Propiedad 2869",
        direccion: "Calle 86, Madrid",
        fechaDePublicacion: "2024-06-26",
        cantidadDeFotos: 11,
        metrosCuadrados: 209,
        precioDeVenta: 140712
    },
    {
        nombre: "Propiedad 2870",
        direccion: "Calle 3, Bilbao",
        fechaDePublicacion: "2024-06-10",
        cantidadDeFotos: 11,
        metrosCuadrados: 438,
        precioDeVenta: 364718
    },
    {
        nombre: "Propiedad 2871",
        direccion: "Calle 20, Las Palmas de Gran Canaria",
        fechaDePublicacion: "2024-06-27",
        cantidadDeFotos: 8,
        metrosCuadrados: 256,
        precioDeVenta: 450469
    },
    {
        nombre: "Propiedad 2872",
        direccion: "Calle 75, Málaga",
        fechaDePublicacion: "2024-06-16",
        cantidadDeFotos: 15,
        metrosCuadrados: 409,
        precioDeVenta: 269464
    },
    {
        nombre: "Propiedad 2873",
        direccion: "Calle 42, Valencia",
        fechaDePublicacion: "2024-06-11",
        cantidadDeFotos: 7,
        metrosCuadrados: 356,
        precioDeVenta: 607636
    },
    {
        nombre: "Propiedad 2874",
        direccion: "Calle 72, Barcelona",
        fechaDePublicacion: "2024-06-15",
        cantidadDeFotos: 13,
        metrosCuadrados: 269,
        precioDeVenta: 659989
    },
    {
        nombre: "Propiedad 2875",
        direccion: "Calle 94, Las Palmas de Gran Canaria",
        fechaDePublicacion: "2024-06-10",
        cantidadDeFotos: 11,
        metrosCuadrados: 164,
        precioDeVenta: 665027
    },
    {
        nombre: "Propiedad 2876",
        direccion: "Calle 16, Barcelona",
        fechaDePublicacion: "2024-06-11",
        cantidadDeFotos: 11,
        metrosCuadrados: 148,
        precioDeVenta: 345499
    },
    {
        nombre: "Propiedad 2877",
        direccion: "Calle 65, Sevilla",
        fechaDePublicacion: "2024-06-19",
        cantidadDeFotos: 7,
        metrosCuadrados: 410,
        precioDeVenta: 897393
    },
    {
        nombre: "Propiedad 2878",
        direccion: "Calle 46, Las Palmas de Gran Canaria",
        fechaDePublicacion: "2024-06-11",
        cantidadDeFotos: 9,
        metrosCuadrados: 86,
        precioDeVenta: 577441
    },
    {
        nombre: "Propiedad 2879",
        direccion: "Calle 43, Valencia",
        fechaDePublicacion: "2024-06-26",
        cantidadDeFotos: 10,
        metrosCuadrados: 298,
        precioDeVenta: 248058
    },
    {
        nombre: "Propiedad 2880",
        direccion: "Calle 49, Zaragoza",
        fechaDePublicacion: "2024-06-29",
        cantidadDeFotos: 13,
        metrosCuadrados: 460,
        precioDeVenta: 690120
    },
    {
        nombre: "Propiedad 2881",
        direccion: "Calle 19, Las Palmas de Gran Canaria",
        fechaDePublicacion: "2024-06-04",
        cantidadDeFotos: 18,
        metrosCuadrados: 61,
        precioDeVenta: 256924
    },
    {
        nombre: "Propiedad 2882",
        direccion: "Calle 90, Palma",
        fechaDePublicacion: "2024-06-06",
        cantidadDeFotos: 6,
        metrosCuadrados: 184,
        precioDeVenta: 879793
    },
    {
        nombre: "Propiedad 2883",
        direccion: "Calle 1, Murcia",
        fechaDePublicacion: "2024-06-12",
        cantidadDeFotos: 5,
        metrosCuadrados: 371,
        precioDeVenta: 769569
    },
    {
        nombre: "Propiedad 2884",
        direccion: "Calle 45, Palma",
        fechaDePublicacion: "2024-06-15",
        cantidadDeFotos: 6,
        metrosCuadrados: 341,
        precioDeVenta: 236941
    },
    {
        nombre: "Propiedad 2885",
        direccion: "Calle 77, Zaragoza",
        fechaDePublicacion: "2024-06-17",
        cantidadDeFotos: 11,
        metrosCuadrados: 288,
        precioDeVenta: 741938
    },
    {
        nombre: "Propiedad 2886",
        direccion: "Calle 99, Bilbao",
        fechaDePublicacion: "2024-06-07",
        cantidadDeFotos: 10,
        metrosCuadrados: 160,
        precioDeVenta: 345810
    },
    {
        nombre: "Propiedad 2887",
        direccion: "Calle 10, Valencia",
        fechaDePublicacion: "2024-06-03",
        cantidadDeFotos: 16,
        metrosCuadrados: 107,
        precioDeVenta: 419597
    },
    {
        nombre: "Propiedad 2888",
        direccion: "Calle 53, Murcia",
        fechaDePublicacion: "2024-06-24",
        cantidadDeFotos: 14,
        metrosCuadrados: 160,
        precioDeVenta: 645867
    },
    {
        nombre: "Propiedad 2889",
        direccion: "Calle 17, Barcelona",
        fechaDePublicacion: "2024-06-13",
        cantidadDeFotos: 9,
        metrosCuadrados: 122,
        precioDeVenta: 982186
    },
    {
        nombre: "Propiedad 2890",
        direccion: "Calle 17, Valencia",
        fechaDePublicacion: "2024-06-22",
        cantidadDeFotos: 19,
        metrosCuadrados: 155,
        precioDeVenta: 280398
    },
    {
        nombre: "Propiedad 2891",
        direccion: "Calle 24, Murcia",
        fechaDePublicacion: "2024-06-28",
        cantidadDeFotos: 15,
        metrosCuadrados: 452,
        precioDeVenta: 53787
    },
    {
        nombre: "Propiedad 2892",
        direccion: "Calle 45, Bilbao",
        fechaDePublicacion: "2024-06-11",
        cantidadDeFotos: 6,
        metrosCuadrados: 206,
        precioDeVenta: 889036
    },
    {
        nombre: "Propiedad 2893",
        direccion: "Calle 29, Zaragoza",
        fechaDePublicacion: "2024-06-02",
        cantidadDeFotos: 20,
        metrosCuadrados: 264,
        precioDeVenta: 709235
    },
    {
        nombre: "Propiedad 2894",
        direccion: "Calle 88, Málaga",
        fechaDePublicacion: "2024-06-19",
        cantidadDeFotos: 3,
        metrosCuadrados: 394,
        precioDeVenta: 179235
    },
    {
        nombre: "Propiedad 2895",
        direccion: "Calle 32, Murcia",
        fechaDePublicacion: "2024-06-14",
        cantidadDeFotos: 15,
        metrosCuadrados: 120,
        precioDeVenta: 861788
    },
    {
        nombre: "Propiedad 2896",
        direccion: "Calle 1, Barcelona",
        fechaDePublicacion: "2024-06-08",
        cantidadDeFotos: 3,
        metrosCuadrados: 170,
        precioDeVenta: 241975
    },
    {
        nombre: "Propiedad 2897",
        direccion: "Calle 59, Las Palmas de Gran Canaria",
        fechaDePublicacion: "2024-06-03",
        cantidadDeFotos: 10,
        metrosCuadrados: 180,
        precioDeVenta: 134513
    },
    {
        nombre: "Propiedad 2898",
        direccion: "Calle 3, Murcia",
        fechaDePublicacion: "2024-06-09",
        cantidadDeFotos: 2,
        metrosCuadrados: 106,
        precioDeVenta: 815007
    },
    {
        nombre: "Propiedad 2899",
        direccion: "Calle 39, Zaragoza",
        fechaDePublicacion: "2024-06-21",
        cantidadDeFotos: 6,
        metrosCuadrados: 453,
        precioDeVenta: 615547
    },
    {
        nombre: "Propiedad 2900",
        direccion: "Calle 92, Sevilla",
        fechaDePublicacion: "2024-06-28",
        cantidadDeFotos: 11,
        metrosCuadrados: 430,
        precioDeVenta: 679828
    },
    {
        nombre: "Propiedad 2901",
        direccion: "Calle 52, Las Palmas de Gran Canaria",
        fechaDePublicacion: "2024-06-26",
        cantidadDeFotos: 4,
        metrosCuadrados: 79,
        precioDeVenta: 706285
    },
    {
        nombre: "Propiedad 2902",
        direccion: "Calle 88, Málaga",
        fechaDePublicacion: "2024-06-21",
        cantidadDeFotos: 11,
        metrosCuadrados: 146,
        precioDeVenta: 669353
    },
    {
        nombre: "Propiedad 2903",
        direccion: "Calle 78, Zaragoza",
        fechaDePublicacion: "2024-06-10",
        cantidadDeFotos: 19,
        metrosCuadrados: 178,
        precioDeVenta: 650573
    },
    {
        nombre: "Propiedad 2904",
        direccion: "Calle 65, Zaragoza",
        fechaDePublicacion: "2024-06-24",
        cantidadDeFotos: 11,
        metrosCuadrados: 407,
        precioDeVenta: 336116
    },
    {
        nombre: "Propiedad 2905",
        direccion: "Calle 26, Barcelona",
        fechaDePublicacion: "2024-06-13",
        cantidadDeFotos: 5,
        metrosCuadrados: 261,
        precioDeVenta: 523460
    },
    {
        nombre: "Propiedad 2906",
        direccion: "Calle 79, Valencia",
        fechaDePublicacion: "2024-06-13",
        cantidadDeFotos: 2,
        metrosCuadrados: 111,
        precioDeVenta: 786814
    },
    {
        nombre: "Propiedad 2907",
        direccion: "Calle 28, Barcelona",
        fechaDePublicacion: "2024-06-02",
        cantidadDeFotos: 6,
        metrosCuadrados: 244,
        precioDeVenta: 295036
    },
    {
        nombre: "Propiedad 2908",
        direccion: "Calle 27, Las Palmas de Gran Canaria",
        fechaDePublicacion: "2024-06-08",
        cantidadDeFotos: 20,
        metrosCuadrados: 432,
        precioDeVenta: 273372
    },
    {
        nombre: "Propiedad 2909",
        direccion: "Calle 56, Zaragoza",
        fechaDePublicacion: "2024-06-19",
        cantidadDeFotos: 9,
        metrosCuadrados: 416,
        precioDeVenta: 354779
    },
    {
        nombre: "Propiedad 2910",
        direccion: "Calle 85, Zaragoza",
        fechaDePublicacion: "2024-06-18",
        cantidadDeFotos: 7,
        metrosCuadrados: 411,
        precioDeVenta: 837362
    },
    {
        nombre: "Propiedad 2911",
        direccion: "Calle 1, Murcia",
        fechaDePublicacion: "2024-06-11",
        cantidadDeFotos: 6,
        metrosCuadrados: 78,
        precioDeVenta: 414109
    },
    {
        nombre: "Propiedad 2912",
        direccion: "Calle 80, Sevilla",
        fechaDePublicacion: "2024-06-11",
        cantidadDeFotos: 8,
        metrosCuadrados: 76,
        precioDeVenta: 60577
    },
    {
        nombre: "Propiedad 2913",
        direccion: "Calle 70, Valencia",
        fechaDePublicacion: "2024-06-13",
        cantidadDeFotos: 3,
        metrosCuadrados: 284,
        precioDeVenta: 484419
    },
    {
        nombre: "Propiedad 2914",
        direccion: "Calle 98, Madrid",
        fechaDePublicacion: "2024-06-25",
        cantidadDeFotos: 6,
        metrosCuadrados: 399,
        precioDeVenta: 520320
    },
    {
        nombre: "Propiedad 2915",
        direccion: "Calle 50, Valencia",
        fechaDePublicacion: "2024-06-14",
        cantidadDeFotos: 20,
        metrosCuadrados: 351,
        precioDeVenta: 145284
    },
    {
        nombre: "Propiedad 2916",
        direccion: "Calle 22, Valencia",
        fechaDePublicacion: "2024-06-16",
        cantidadDeFotos: 20,
        metrosCuadrados: 327,
        precioDeVenta: 691182
    },
    {
        nombre: "Propiedad 2917",
        direccion: "Calle 63, Barcelona",
        fechaDePublicacion: "2024-06-27",
        cantidadDeFotos: 12,
        metrosCuadrados: 272,
        precioDeVenta: 231979
    },
    {
        nombre: "Propiedad 2918",
        direccion: "Calle 61, Barcelona",
        fechaDePublicacion: "2024-06-22",
        cantidadDeFotos: 19,
        metrosCuadrados: 367,
        precioDeVenta: 216695
    },
    {
        nombre: "Propiedad 2919",
        direccion: "Calle 84, Palma",
        fechaDePublicacion: "2024-06-17",
        cantidadDeFotos: 3,
        metrosCuadrados: 161,
        precioDeVenta: 499576
    },
    {
        nombre: "Propiedad 2920",
        direccion: "Calle 17, Palma",
        fechaDePublicacion: "2024-06-14",
        cantidadDeFotos: 9,
        metrosCuadrados: 478,
        precioDeVenta: 178852
    },
    {
        nombre: "Propiedad 2921",
        direccion: "Calle 77, Madrid",
        fechaDePublicacion: "2024-06-24",
        cantidadDeFotos: 19,
        metrosCuadrados: 287,
        precioDeVenta: 722319
    },
    {
        nombre: "Propiedad 2922",
        direccion: "Calle 4, Valencia",
        fechaDePublicacion: "2024-06-06",
        cantidadDeFotos: 10,
        metrosCuadrados: 236,
        precioDeVenta: 611903
    },
    {
        nombre: "Propiedad 2923",
        direccion: "Calle 89, Madrid",
        fechaDePublicacion: "2024-05-31",
        cantidadDeFotos: 10,
        metrosCuadrados: 381,
        precioDeVenta: 479833
    },
    {
        nombre: "Propiedad 2924",
        direccion: "Calle 81, Palma",
        fechaDePublicacion: "2024-06-09",
        cantidadDeFotos: 1,
        metrosCuadrados: 342,
        precioDeVenta: 245251
    },
    {
        nombre: "Propiedad 2925",
        direccion: "Calle 63, Palma",
        fechaDePublicacion: "2024-06-29",
        cantidadDeFotos: 6,
        metrosCuadrados: 92,
        precioDeVenta: 495849
    },
    {
        nombre: "Propiedad 2926",
        direccion: "Calle 37, Murcia",
        fechaDePublicacion: "2024-06-15",
        cantidadDeFotos: 15,
        metrosCuadrados: 343,
        precioDeVenta: 348259
    },
    {
        nombre: "Propiedad 2927",
        direccion: "Calle 8, Palma",
        fechaDePublicacion: "2024-06-19",
        cantidadDeFotos: 11,
        metrosCuadrados: 245,
        precioDeVenta: 712820
    },
    {
        nombre: "Propiedad 2928",
        direccion: "Calle 52, Murcia",
        fechaDePublicacion: "2024-06-22",
        cantidadDeFotos: 1,
        metrosCuadrados: 88,
        precioDeVenta: 698768
    },
    {
        nombre: "Propiedad 2929",
        direccion: "Calle 8, Bilbao",
        fechaDePublicacion: "2024-06-14",
        cantidadDeFotos: 4,
        metrosCuadrados: 279,
        precioDeVenta: 512322
    },
    {
        nombre: "Propiedad 2930",
        direccion: "Calle 24, Las Palmas de Gran Canaria",
        fechaDePublicacion: "2024-06-06",
        cantidadDeFotos: 17,
        metrosCuadrados: 283,
        precioDeVenta: 707232
    },
    {
        nombre: "Propiedad 2931",
        direccion: "Calle 26, Las Palmas de Gran Canaria",
        fechaDePublicacion: "2024-06-09",
        cantidadDeFotos: 4,
        metrosCuadrados: 430,
        precioDeVenta: 485983
    },
    {
        nombre: "Propiedad 2932",
        direccion: "Calle 25, Barcelona",
        fechaDePublicacion: "2024-06-03",
        cantidadDeFotos: 8,
        metrosCuadrados: 76,
        precioDeVenta: 175163
    },
    {
        nombre: "Propiedad 2933",
        direccion: "Calle 44, Bilbao",
        fechaDePublicacion: "2024-06-22",
        cantidadDeFotos: 12,
        metrosCuadrados: 392,
        precioDeVenta: 300108
    },
    {
        nombre: "Propiedad 2934",
        direccion: "Calle 98, Palma",
        fechaDePublicacion: "2024-06-25",
        cantidadDeFotos: 7,
        metrosCuadrados: 176,
        precioDeVenta: 955775
    },
    {
        nombre: "Propiedad 2935",
        direccion: "Calle 56, Zaragoza",
        fechaDePublicacion: "2024-06-07",
        cantidadDeFotos: 19,
        metrosCuadrados: 63,
        precioDeVenta: 442809
    },
    {
        nombre: "Propiedad 2936",
        direccion: "Calle 32, Málaga",
        fechaDePublicacion: "2024-06-23",
        cantidadDeFotos: 19,
        metrosCuadrados: 228,
        precioDeVenta: 357026
    },
    {
        nombre: "Propiedad 2937",
        direccion: "Calle 4, Madrid",
        fechaDePublicacion: "2024-06-11",
        cantidadDeFotos: 15,
        metrosCuadrados: 390,
        precioDeVenta: 842037
    },
    {
        nombre: "Propiedad 2938",
        direccion: "Calle 54, Barcelona",
        fechaDePublicacion: "2024-06-05",
        cantidadDeFotos: 4,
        metrosCuadrados: 452,
        precioDeVenta: 677729
    },
    {
        nombre: "Propiedad 2939",
        direccion: "Calle 31, Palma",
        fechaDePublicacion: "2024-06-14",
        cantidadDeFotos: 11,
        metrosCuadrados: 182,
        precioDeVenta: 389249
    },
    {
        nombre: "Propiedad 2940",
        direccion: "Calle 58, Barcelona",
        fechaDePublicacion: "2024-06-09",
        cantidadDeFotos: 10,
        metrosCuadrados: 81,
        precioDeVenta: 460531
    },
    {
        nombre: "Propiedad 2941",
        direccion: "Calle 92, Madrid",
        fechaDePublicacion: "2024-06-09",
        cantidadDeFotos: 16,
        metrosCuadrados: 435,
        precioDeVenta: 951347
    },
    {
        nombre: "Propiedad 2942",
        direccion: "Calle 5, Madrid",
        fechaDePublicacion: "2024-06-27",
        cantidadDeFotos: 15,
        metrosCuadrados: 452,
        precioDeVenta: 587425
    },
    {
        nombre: "Propiedad 2943",
        direccion: "Calle 60, Palma",
        fechaDePublicacion: "2024-06-26",
        cantidadDeFotos: 14,
        metrosCuadrados: 413,
        precioDeVenta: 341499
    },
    {
        nombre: "Propiedad 2944",
        direccion: "Calle 21, Málaga",
        fechaDePublicacion: "2024-06-08",
        cantidadDeFotos: 1,
        metrosCuadrados: 275,
        precioDeVenta: 363642
    },
    {
        nombre: "Propiedad 2945",
        direccion: "Calle 9, Zaragoza",
        fechaDePublicacion: "2024-06-04",
        cantidadDeFotos: 7,
        metrosCuadrados: 345,
        precioDeVenta: 142124
    },
    {
        nombre: "Propiedad 2946",
        direccion: "Calle 68, Barcelona",
        fechaDePublicacion: "2024-06-02",
        cantidadDeFotos: 14,
        metrosCuadrados: 427,
        precioDeVenta: 856385
    },
    {
        nombre: "Propiedad 2947",
        direccion: "Calle 43, Madrid",
        fechaDePublicacion: "2024-06-03",
        cantidadDeFotos: 18,
        metrosCuadrados: 155,
        precioDeVenta: 907950
    },
    {
        nombre: "Propiedad 2948",
        direccion: "Calle 5, Barcelona",
        fechaDePublicacion: "2024-06-20",
        cantidadDeFotos: 16,
        metrosCuadrados: 414,
        precioDeVenta: 514758
    },
    {
        nombre: "Propiedad 2949",
        direccion: "Calle 61, Valencia",
        fechaDePublicacion: "2024-06-26",
        cantidadDeFotos: 20,
        metrosCuadrados: 58,
        precioDeVenta: 432926
    },
    {
        nombre: "Propiedad 2950",
        direccion: "Calle 68, Madrid",
        fechaDePublicacion: "2024-06-17",
        cantidadDeFotos: 12,
        metrosCuadrados: 183,
        precioDeVenta: 730847
    },
    {
        nombre: "Propiedad 2951",
        direccion: "Calle 93, Murcia",
        fechaDePublicacion: "2024-06-13",
        cantidadDeFotos: 6,
        metrosCuadrados: 103,
        precioDeVenta: 961222
    },
    {
        nombre: "Propiedad 2952",
        direccion: "Calle 60, Bilbao",
        fechaDePublicacion: "2024-06-16",
        cantidadDeFotos: 18,
        metrosCuadrados: 168,
        precioDeVenta: 99539
    },
    {
        nombre: "Propiedad 2953",
        direccion: "Calle 5, Barcelona",
        fechaDePublicacion: "2024-06-03",
        cantidadDeFotos: 4,
        metrosCuadrados: 147,
        precioDeVenta: 785940
    },
    {
        nombre: "Propiedad 2954",
        direccion: "Calle 45, Barcelona",
        fechaDePublicacion: "2024-06-05",
        cantidadDeFotos: 16,
        metrosCuadrados: 329,
        precioDeVenta: 345562
    },
    {
        nombre: "Propiedad 2955",
        direccion: "Calle 66, Málaga",
        fechaDePublicacion: "2024-06-18",
        cantidadDeFotos: 20,
        metrosCuadrados: 184,
        precioDeVenta: 174654
    },
    {
        nombre: "Propiedad 2956",
        direccion: "Calle 5, Murcia",
        fechaDePublicacion: "2024-06-04",
        cantidadDeFotos: 1,
        metrosCuadrados: 316,
        precioDeVenta: 120961
    },
    {
        nombre: "Propiedad 2957",
        direccion: "Calle 81, Madrid",
        fechaDePublicacion: "2024-06-01",
        cantidadDeFotos: 19,
        metrosCuadrados: 162,
        precioDeVenta: 95443
    },
    {
        nombre: "Propiedad 2958",
        direccion: "Calle 31, Murcia",
        fechaDePublicacion: "2024-06-23",
        cantidadDeFotos: 13,
        metrosCuadrados: 251,
        precioDeVenta: 738861
    },
    {
        nombre: "Propiedad 2959",
        direccion: "Calle 5, Barcelona",
        fechaDePublicacion: "2024-06-10",
        cantidadDeFotos: 18,
        metrosCuadrados: 253,
        precioDeVenta: 592982
    },
    {
        nombre: "Propiedad 2960",
        direccion: "Calle 95, Sevilla",
        fechaDePublicacion: "2024-06-04",
        cantidadDeFotos: 14,
        metrosCuadrados: 441,
        precioDeVenta: 487353
    },
    {
        nombre: "Propiedad 2961",
        direccion: "Calle 51, Bilbao",
        fechaDePublicacion: "2024-06-09",
        cantidadDeFotos: 4,
        metrosCuadrados: 78,
        precioDeVenta: 319422
    },
    {
        nombre: "Propiedad 2962",
        direccion: "Calle 19, Murcia",
        fechaDePublicacion: "2024-06-05",
        cantidadDeFotos: 15,
        metrosCuadrados: 429,
        precioDeVenta: 146352
    },
    {
        nombre: "Propiedad 2963",
        direccion: "Calle 71, Barcelona",
        fechaDePublicacion: "2024-06-17",
        cantidadDeFotos: 11,
        metrosCuadrados: 278,
        precioDeVenta: 616468
    },
    {
        nombre: "Propiedad 2964",
        direccion: "Calle 66, Málaga",
        fechaDePublicacion: "2024-06-05",
        cantidadDeFotos: 7,
        metrosCuadrados: 177,
        precioDeVenta: 721283
    },
    {
        nombre: "Propiedad 2965",
        direccion: "Calle 81, Málaga",
        fechaDePublicacion: "2024-06-26",
        cantidadDeFotos: 19,
        metrosCuadrados: 148,
        precioDeVenta: 723636
    },
    {
        nombre: "Propiedad 2966",
        direccion: "Calle 67, Valencia",
        fechaDePublicacion: "2024-06-21",
        cantidadDeFotos: 1,
        metrosCuadrados: 54,
        precioDeVenta: 828839
    },
    {
        nombre: "Propiedad 2967",
        direccion: "Calle 30, Málaga",
        fechaDePublicacion: "2024-06-15",
        cantidadDeFotos: 17,
        metrosCuadrados: 389,
        precioDeVenta: 225613
    },
    {
        nombre: "Propiedad 2968",
        direccion: "Calle 72, Sevilla",
        fechaDePublicacion: "2024-06-10",
        cantidadDeFotos: 11,
        metrosCuadrados: 50,
        precioDeVenta: 323810
    },
    {
        nombre: "Propiedad 2969",
        direccion: "Calle 54, Las Palmas de Gran Canaria",
        fechaDePublicacion: "2024-06-01",
        cantidadDeFotos: 3,
        metrosCuadrados: 482,
        precioDeVenta: 574555
    },
    {
        nombre: "Propiedad 2970",
        direccion: "Calle 29, Málaga",
        fechaDePublicacion: "2024-06-21",
        cantidadDeFotos: 10,
        metrosCuadrados: 153,
        precioDeVenta: 346821
    },
    {
        nombre: "Propiedad 2971",
        direccion: "Calle 28, Sevilla",
        fechaDePublicacion: "2024-06-29",
        cantidadDeFotos: 15,
        metrosCuadrados: 139,
        precioDeVenta: 138809
    },
    {
        nombre: "Propiedad 2972",
        direccion: "Calle 29, Málaga",
        fechaDePublicacion: "2024-06-02",
        cantidadDeFotos: 17,
        metrosCuadrados: 217,
        precioDeVenta: 158542
    },
    {
        nombre: "Propiedad 2973",
        direccion: "Calle 34, Bilbao",
        fechaDePublicacion: "2024-06-23",
        cantidadDeFotos: 7,
        metrosCuadrados: 215,
        precioDeVenta: 789191
    },
    {
        nombre: "Propiedad 2974",
        direccion: "Calle 2, Sevilla",
        fechaDePublicacion: "2024-06-01",
        cantidadDeFotos: 1,
        metrosCuadrados: 277,
        precioDeVenta: 872861
    },
    {
        nombre: "Propiedad 2975",
        direccion: "Calle 73, Las Palmas de Gran Canaria",
        fechaDePublicacion: "2024-06-06",
        cantidadDeFotos: 3,
        metrosCuadrados: 228,
        precioDeVenta: 805685
    },
    {
        nombre: "Propiedad 2976",
        direccion: "Calle 91, Málaga",
        fechaDePublicacion: "2024-06-24",
        cantidadDeFotos: 6,
        metrosCuadrados: 496,
        precioDeVenta: 359433
    },
    {
        nombre: "Propiedad 2977",
        direccion: "Calle 13, Zaragoza",
        fechaDePublicacion: "2024-06-12",
        cantidadDeFotos: 6,
        metrosCuadrados: 446,
        precioDeVenta: 353147
    },
    {
        nombre: "Propiedad 2978",
        direccion: "Calle 20, Zaragoza",
        fechaDePublicacion: "2024-06-26",
        cantidadDeFotos: 18,
        metrosCuadrados: 297,
        precioDeVenta: 589495
    },
    {
        nombre: "Propiedad 2979",
        direccion: "Calle 21, Valencia",
        fechaDePublicacion: "2024-06-15",
        cantidadDeFotos: 6,
        metrosCuadrados: 404,
        precioDeVenta: 627400
    },
    {
        nombre: "Propiedad 2980",
        direccion: "Calle 2, Murcia",
        fechaDePublicacion: "2024-06-21",
        cantidadDeFotos: 12,
        metrosCuadrados: 295,
        precioDeVenta: 529132
    },
    {
        nombre: "Propiedad 2981",
        direccion: "Calle 20, Madrid",
        fechaDePublicacion: "2024-06-08",
        cantidadDeFotos: 2,
        metrosCuadrados: 328,
        precioDeVenta: 451995
    },
    {
        nombre: "Propiedad 2982",
        direccion: "Calle 98, Zaragoza",
        fechaDePublicacion: "2024-06-29",
        cantidadDeFotos: 14,
        metrosCuadrados: 406,
        precioDeVenta: 904465
    },
    {
        nombre: "Propiedad 2983",
        direccion: "Calle 13, Zaragoza",
        fechaDePublicacion: "2024-06-27",
        cantidadDeFotos: 2,
        metrosCuadrados: 164,
        precioDeVenta: 345259
    },
    {
        nombre: "Propiedad 2984",
        direccion: "Calle 46, Valencia",
        fechaDePublicacion: "2024-06-13",
        cantidadDeFotos: 10,
        metrosCuadrados: 204,
        precioDeVenta: 553342
    },
    {
        nombre: "Propiedad 2985",
        direccion: "Calle 11, Las Palmas de Gran Canaria",
        fechaDePublicacion: "2024-06-01",
        cantidadDeFotos: 19,
        metrosCuadrados: 429,
        precioDeVenta: 846040
    },
    {
        nombre: "Propiedad 2986",
        direccion: "Calle 23, Las Palmas de Gran Canaria",
        fechaDePublicacion: "2024-06-23",
        cantidadDeFotos: 9,
        metrosCuadrados: 93,
        precioDeVenta: 982525
    },
    {
        nombre: "Propiedad 2987",
        direccion: "Calle 1, Bilbao",
        fechaDePublicacion: "2024-06-27",
        cantidadDeFotos: 2,
        metrosCuadrados: 368,
        precioDeVenta: 768749
    },
    {
        nombre: "Propiedad 2988",
        direccion: "Calle 51, Málaga",
        fechaDePublicacion: "2024-06-27",
        cantidadDeFotos: 10,
        metrosCuadrados: 138,
        precioDeVenta: 596434
    },
    {
        nombre: "Propiedad 2989",
        direccion: "Calle 23, Madrid",
        fechaDePublicacion: "2024-06-14",
        cantidadDeFotos: 2,
        metrosCuadrados: 143,
        precioDeVenta: 401375
    },
    {
        nombre: "Propiedad 2990",
        direccion: "Calle 54, Madrid",
        fechaDePublicacion: "2024-06-04",
        cantidadDeFotos: 19,
        metrosCuadrados: 289,
        precioDeVenta: 676320
    },
    {
        nombre: "Propiedad 2991",
        direccion: "Calle 32, Madrid",
        fechaDePublicacion: "2024-06-22",
        cantidadDeFotos: 20,
        metrosCuadrados: 479,
        precioDeVenta: 135086
    },
    {
        nombre: "Propiedad 2992",
        direccion: "Calle 24, Valencia",
        fechaDePublicacion: "2024-06-05",
        cantidadDeFotos: 9,
        metrosCuadrados: 153,
        precioDeVenta: 173552
    },
    {
        nombre: "Propiedad 2993",
        direccion: "Calle 53, Las Palmas de Gran Canaria",
        fechaDePublicacion: "2024-06-15",
        cantidadDeFotos: 6,
        metrosCuadrados: 172,
        precioDeVenta: 179910
    },
    {
        nombre: "Propiedad 2994",
        direccion: "Calle 43, Valencia",
        fechaDePublicacion: "2024-06-14",
        cantidadDeFotos: 18,
        metrosCuadrados: 102,
        precioDeVenta: 597000
    },
    {
        nombre: "Propiedad 2995",
        direccion: "Calle 46, Valencia",
        fechaDePublicacion: "2024-06-27",
        cantidadDeFotos: 14,
        metrosCuadrados: 305,
        precioDeVenta: 760175
    },
    {
        nombre: "Propiedad 2996",
        direccion: "Calle 89, Las Palmas de Gran Canaria",
        fechaDePublicacion: "2024-06-18",
        cantidadDeFotos: 1,
        metrosCuadrados: 223,
        precioDeVenta: 156402
    },
    {
        nombre: "Propiedad 2997",
        direccion: "Calle 96, Las Palmas de Gran Canaria",
        fechaDePublicacion: "2024-06-03",
        cantidadDeFotos: 9,
        metrosCuadrados: 108,
        precioDeVenta: 883391
    },
    {
        nombre: "Propiedad 2998",
        direccion: "Calle 46, Bilbao",
        fechaDePublicacion: "2024-06-03",
        cantidadDeFotos: 1,
        metrosCuadrados: 417,
        precioDeVenta: 83235
    },
    {
        nombre: "Propiedad 2999",
        direccion: "Calle 22, Murcia",
        fechaDePublicacion: "2024-06-18",
        cantidadDeFotos: 12,
        metrosCuadrados: 362,
        precioDeVenta: 337400
    },
    {
        nombre: "Propiedad 3000",
        direccion: "Calle 94, Sevilla",
        fechaDePublicacion: "2024-06-07",
        cantidadDeFotos: 6,
        metrosCuadrados: 239,
        precioDeVenta: 811512
    }
]