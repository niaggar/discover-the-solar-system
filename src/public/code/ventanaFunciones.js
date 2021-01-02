
// // // FUNCIONES DE LAS VENTANAS
// // // ----> Ventana Principal

// // Funcion que cierra la ventana
ventanaButCerrar.addEventListener('click', () => {
  // Limpia el contenido del input
  document.querySelector('.ventanta__form-input').value = "";
  // Inicia la animacion de esconder el contenedor de la ventana
  ventanaContenedor.classList.toggle('ventana__contenedor-cerrar');
  // Delay para esconder toda la ventana
  setTimeout(() => {
      ventanaFondo.style.visibility = 'hidden';
  }, 500);
});

// // Funcion que abre la ventana y modifica los valores segun el planeta
function abrirVentana() {
  // Mostrar la ventana
  ventanaFondo.style.visibility = 'visible';
  ventanaContenedor.classList.toggle('ventana__contenedor-cerrar')
  // Cambiar el titulo de la ventana
  document.querySelector('.ventana__nombre-astro').innerHTML = planetaSeleccionado;
  // Cambiar la img de la ventana
  document.getElementById('ventana__img').src = srcImg[numPlaneta];
  // Cambiar los valores de los datos en la tabla
  diametroTxt.innerHTML = Intl.NumberFormat().format(diametroPlaneta[numPlaneta]);
  masaTxt.innerHTML = masaPlaneta[numPlaneta];
  trasslacionTxt.innerHTML = traslacionPlaneta[numPlaneta];
  rotacionTxt.innerHTML = rotacionPlaneta[numPlaneta];
  satelitesTxt.innerHTML = satelitePlaneta[numPlaneta];
}

// // Funcione boton de cada palenta
// Abrir la ventana e identificar el planeta seleccionado
document.querySelector('#mercurio-btn').addEventListener('click', () => {
  planetaSeleccionado = 'Mercurio';
  numPlaneta = 0;
  abrirVentana();
});

document.querySelector('#venus-btn').addEventListener('click', () => {
  planetaSeleccionado = 'Venus';
  numPlaneta = 1;
  abrirVentana();
});

document.querySelector('#tierra-btn').addEventListener('click', () => {
  planetaSeleccionado = 'Tierra';
  numPlaneta = 2;
  abrirVentana();
});

document.querySelector('#marte-btn').addEventListener('click', () => {
  planetaSeleccionado = 'Marte';
  numPlaneta = 3;
  abrirVentana();
});

document.querySelector('#jupiter-btn').addEventListener('click', () => {
  planetaSeleccionado = 'Jupiter';
  numPlaneta = 4;
  abrirVentana();
});

document.querySelector('#saturno-btn').addEventListener('click', () => {
  planetaSeleccionado = 'Saturno';
  numPlaneta = 5;
  abrirVentana();
});

document.querySelector('#urano-btn').addEventListener('click', () => {
  planetaSeleccionado = 'Urano';
  numPlaneta = 6;
  abrirVentana();
});

document.querySelector('#neptuno-btn').addEventListener('click', () => {
  planetaSeleccionado = 'Neptuno';
  numPlaneta = 7;
  abrirVentana();
});


// // // FUNCIONES DE LAS VENTANAS
// // // ----> Ventana Secundaria

document.querySelector('.ventana__form-btn').addEventListener('click', () => {
  let pesoNormal = document.querySelector('.ventanta__form-input').value;
  document.querySelector('.ventanta__form-input').value = "";

  pesoEnElPlaneta = pesoNormal * gravedad[numPlaneta] / gravedad[2];
  pesoEnElPlaneta = pesoEnElPlaneta.toFixed(2);

  ventanaSecTitulo.innerHTML = planetaSeleccionado;
  ventanaSecPeso.innerHTML = pesoEnElPlaneta;

  ventanaSecFondo.style.visibility = 'visible';
  ventanaSecContenedor.classList.toggle('ventana-sec__contenedor-cerrar');
});

ventanaSecButCerrar.addEventListener('click', () => {
  ventanaSecContenedor.classList.toggle('ventana-sec__contenedor-cerrar');
  setTimeout(() => {
    ventanaSecFondo.style.visibility = 'hidden';
  }, 500);
});