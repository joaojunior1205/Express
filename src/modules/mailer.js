const path = require("path");
const nodemailer = require('nodemailer');
const hbs = require('nodemailer-express-handlebars');

const {host, port, user, pass} = require('../config/mailConfig.json');

const transport = nodemailer.createTransport({
    host,
    port,
    auth: {user, pass}
});

transport.use('compile', hbs({
    viewEngine: {
        extName: ".html",
        partialsDir: path.resolve('./src/resources/mail/'),
        defaultLayout: false,
    },
    viewPath: path.resolve("./src/resources/mail/"),
    extName: '.html',
    defaultLayout: false,
},));

module.exports = transport;