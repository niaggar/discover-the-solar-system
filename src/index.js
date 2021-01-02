
//Declaracion de const / varibles / extenciones
const express = require('express');
const app = express();
const path = require('path');
const nodemailer = require('nodemailer');

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
// ----> Home
app.get('/', (req, res) => {
  res.render('landPage.html');
});
// ----> Contacto
app.get('/contacto', (req, res) => {
  res.render('contactPage.html');
});
// ----> Info
app.get('/info', (req, res) => {
  res.render('infoPage.html');
});
// ----> Enviar Mail
app.post('/send-email', async (req, res) => {
  const { nombre, correo, mensaje } = req.body;

  contenidoHTML = ` 
    <h1>Datos de usuarios</h1>
    <ul>
      <li>Nombre: ${nombre}</li>
      <li>Correo: ${correo}</li>
    </ul>
    <p>${mensaje}</p>
  `;

  const transporter = nodemailer.createTransport({
    host: 'smtp.ethereal.email',
    port: 587,
    auth: {
        user: 'golden.rau84@ethereal.email',
        pass: 'Mvn4GgpMwjcPus8Zsp'
    },
    tls: {
      rejectUnauthorized: false,
    }
  });

  const info = await transporter.sendMail({
    from: 'Contacto --- Proyecto Planetas',
    to: 'nicholson2002@outlook.es',
    subject: 'Contacto del sitio web',
    html: contenidoHTML,
  });

  res.render('successPage.html');
});