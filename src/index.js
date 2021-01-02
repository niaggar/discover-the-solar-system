
//Declaracion de const / varibles / extenciones
const express = require('express');
const app = express();
const path = require('path');

app.use(express.urlencoded({extended: false}))

//Configuracion
//Establecer el motor de vistas
app.set('view engine', 'ejs');
app.engine('html', require('ejs').renderFile)
//Establece la ruta de la carpeta views
app.set('views', path.join(__dirname,'views'));
//Establecer el puerto
app.set('puerto', 3000);
// Enciende el servidor
app.listen(process.env.PORT || app.get('puerto'), () => {
  console.log('Server port ', app.get('puerto'));
});

//Archivos publicos
app.use(express.static(path.join(__dirname, 'public')));

//Configuracion de rutas
app.get('/', (req, res) => {
    res.render('landPage.html');
});

app.get('/contacto', (req, res) => {
    res.render('contactPage.html');
});

app.get('/info', (req, res) => {
    res.render('infoPage.html');
});
