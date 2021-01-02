/* Codigo que activa el menu desplegable */

//Asigna los elementos
//Menu astros
const astrosBut = document.querySelector('#astros-btn');
const astrosButCerrar = document.querySelector('#astros-btn-cerrar');
//Menu a partir de 750px
const menuBut = document.querySelector('#menu-btn');
const menuButCerrar = document.querySelector('#menu-btn-cerrar');

//Establece el llamado a la funcion
//Menu astros
astrosBut.addEventListener('click', functionDesplegar);
astrosButCerrar.addEventListener('click', functionDesplegar);
//Menu a partir de 750px
menuBut.addEventListener('click', functionDesplegarMenu);
menuButCerrar.addEventListener('click', functionDesplegarMenu);

//Funcion que activa/desactiva el menu
//Menu astros
function functionDesplegar() {
	//Asigana/Elimina la clase que muestra/esconde el menu
	document.querySelector('.desplegable__lista-planetas').classList.toggle('desplegable__cerrar');
}
//Menu a partir de 750px
function functionDesplegarMenu() {
	//Asigana/Elimina la clase que muestra/esconde el menu
	document.querySelector('.navegacion__derecha').classList.toggle('navegacion__der-cerrar');
}
