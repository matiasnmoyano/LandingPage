const bodyParser = require('body-parser');
const express = require('express');
const nodemailer = require('nodemailer')
var sgTransport = require("nodemailer-sendgrid-transport");
var cors = require('cors')
const sgMail = require("@sendgrid/mail");
const server = express();
server.use(bodyParser.json());
server.use(cors())
server.get('/',function(req,res){
    res.json('Estoy funcionando')
})
server.post('/email', function(req,res){
    sgMail.setApiKey(
        "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"
      );
    
    const msj = {
        to: 'moyano.matiasnicolas.mm@gmail.com',// A ESTE CORREO LLEGAN LOS MENSAJES
        from:"igiftyu@gmail.com",// ESTE CORREO TIENE CUENTA EN SENDGRID
        subject: 'Contacto',
        html: `   <div>
                    <h1>Te enviaron un mensaje desde la página</h1>
                    <h4>Nombre: ${req.body.name}</h2>
                    <h4>Email: ${req.body.email}</h2>
                    <h4>Teléfono: ${req.body.tel}</h2>
                    <h3>${req.body.msj}</h4>
                </div> `
    }
    sgMail
    .send(msj)
    .then((mail) => {
        console.log("Email sent");
        res.status(200).json(mail);
      })
    .catch((error) => {
      console.error(error);
    });
})
module.exports = { server };