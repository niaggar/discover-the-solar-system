
// // // VARIABLES VENTANAS

// // Declarcaion de elementos usados en la ventana principal
// Boton cerrar la ventana
let ventanaButCerrar = document.querySelector('#ventana-salir');
// Fondo de la ventana
let ventanaFondo = document.querySelector('.ventana__fondo');
// Div que continene toda la info de la ventana
let ventanaContenedor = document.querySelector('.ventana__contenedor');
// Textos de la tabla
let diametroTxt = document.getElementById('valor-diametro');
let masaTxt = document.getElementById('valor-masa');
let trasslacionTxt = document.getElementById('valor-traslacion');
let rotacionTxt = document.getElementById('valor-rotacion');
let satelitesTxt = document.getElementById('valor-satelites');

// // Declaracion de elementos usados en la ventana secundaria
let ventanaSecContenedor = document.querySelector('.ventana-sec__contenedor');
let ventanaSecFondo = document.querySelector('.ventana-sec__fondo');
let ventanaSecButCerrar = document.querySelector('.ventana-sec__salir');
let ventanaSecTitulo = document.querySelector('#titulo2-modal');
let ventanaSecPeso = document.querySelector('#resultado-peso');

// // Variables para identificar el planeta
let planetaSeleccionado;
let numPlaneta;
// Variable que almacena el peso de la apersona
let pesoEnElPlaneta;



/*
 * El numero de cada planeta es el siguiente:
 * -- 0 Mercurio
 * -- 1 Venus
 * -- 2 Tierra
 * -- 3 Marte
 * -- 4 Jupiter
 * -- 5 Saturno
 * -- 6 Urano
 * -- 7 Neptuno
 */

// // // CONSTANTES VENTANAS
// Gravedad - operacion para determinar el peso de la persona
const gravedad = [
  3.70,
  8.90,
  9.81,
  3.71,
  24.79,
  9.10,
  7.80,
  11.00
];
// Modal - Ruta de la imagen de cada planeta
const srcImg = [
  './img/planetas/planeta_mercurio.svg',
  './img/planetas/planeta_venus.svg',
  './img/planetas/planeta_tierra.svg',
  './img/planetas/planeta_marte.svg',
  './img/planetas/planeta_jupiter.svg',
  './img/planetas/planeta_saturno.svg',
  './img/planetas/planeta_urano.svg',
  './img/planetas/planeta_neptuno.svg'
];
// Modal - Mostrar el diametro del planeta (Km)
const diametroPlaneta = [
  4878,
  12100,
  12756,
  6787,
  142984,
  120536,
  51108,
  49538
];
// Modal - Mostrar la masa del planeta (respecto a la tierra)
const masaPlaneta = [
  0.055,
  0.815,
  1.000,
  0.107,
  318.000,
  95.000,
  14.000,
  17.000
];
// Modal - Almacenar el time de traslacion del planeta (años)
const traslacionPlaneta = [
  0.24,
  0.61,
  1.00,
  1.88,
  11.86,
  29.45,
  84.01,
  164.79
];
// Modal - Almacenar el time de rotacion del planeta (dias)
const rotacionPlaneta = [
  58.667,
  243.000,
  1.000,
  1.030,
  0.414,
  0.426,
  0.718,
  0.674
];
// Modal - Alamcenar el num de satelites del planeta
const satelitePlaneta = [
  0,
  0,
  1,
  2,
  63,
  61,
  27,
  13
];
