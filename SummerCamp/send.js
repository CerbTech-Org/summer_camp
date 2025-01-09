const express = require('express');
const nodemailer = require('nodemailer');
const dotenv = require('dotenv');
const bodyParser = require('body-parser');
dotenv.config();

const app = express();
const port = process.env.PORT || 3000;

app.use(express.static('SummerCamp'));
app.use(bodyParser.json());

function createTransporter() {
    return nodemailer.createTransport({
        host: 'smtp.gmail.com',
        port: 587,
        secure: false,
        auth: {
            user: process.env.EMAIL,
            pass: process.env.PASSWORD,
        },
    });
}

app.post('/send-reminders', (req, res) => {
    const { nom, email, sujet, message } = req.body;

    if (!email || !nom || !sujet || !message) {
        return res.status(400).send('Erreur : tous les champs sont requis.');
    }

    const transporter = createTransporter();

    const mailOptions = {
        from: process.env.EMAIL,
        to: email,
        subject: sujet,
        text: `Nom: ${nom}\n\nEmail: ${email}\n\nMessage:\n${message}`
    };

    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            console.error('Erreur lors de l\'envoi de l\'email :', error);
            return res.status(500).send('Erreur lors de l\'envoi de l\'email');
        } else {
            return res.send('Email envoyé avec succès');
        }
    });
});

app.post('/contact', (req, res) => {
    const { nom, email, contact, message } = req.body;

    if (!email || !nom || !contact || !message ) {
        return res.status(400).send('Erreur : tous les champs sont requis.');
    }

    const transporter = createTransporter();

    const mailOptions = {
        from: process.env.EMAIL,
        to: process.env.EMAIL,
        subject: `Contact de ${nom}`,
        text: `Je m'appelle ${nom}\n\nEmail: ${email}\nJe vous ai contacté pour ${contact}.\nMessage:\n${message}`
    };

    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            console.error('Erreur lors de l\'envoi de l\'email :', error);
            return res.status(500).send('Erreur lors de l\'envoi de l\'email');
        } else {
            return res.send('Email envoyé avec succès');
        }
    });
});

app.post('/donate', (req, res) => {
    const { name, surname, email, telephone, objet, description } = req.body;

    if (!name || !surname || !email || !telephone || !objet || !description) {
        return res.status(400).send('Erreur : tous les champs sont requis.');
    }

    const transporter = createTransporter();

    const mailOptions = {
        from: process.env.EMAIL,
        to: process.env.EMAIL,
        subject: `Formulaire de don`,
        text: `
                    Je m'appelle ${name} ${surname}.\n\n
                    Mon numéro de téléphnone et Email sont 
                    ${telephone} ${email}.\n\n 
                    Je voudrais faire un don ${objet}, 
                    Voici une description de mon don ${description}
                `
    };

    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            console.error('Erreur lors de l\'envoi de l\'email :', error);
            return res.status(500).send('Erreur lors de l\'envoi de l\'email');
        } else {
            return res.send('Email envoyé avec succès');
        }
    });
});

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});
