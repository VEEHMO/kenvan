import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import dotenv from 'dotenv';
import { fileURLToPath } from 'url';
import { dirname } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// Charger les variables d'environnement
dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(cors());
app.use(express.json());

// Connexion à MongoDB (sera configurée plus tard)
let dbConnected = false;

try {
  await mongoose.connect(process.env.MONGODB_URI);
  console.log('Connecté à MongoDB');
  dbConnected = true;
} catch (err) {
  console.error('Erreur de connexion à MongoDB:', err);
  console.log('Fonctionnement en mode démonstration sans MongoDB');
}

// Modèle pour les messages de contact
const ContactMessageSchema = new mongoose.Schema({
  email: String,
  subject: String,
  message: String,
  recipient: String,
  date: { type: Date, default: Date.now }
});

const ContactMessage = mongoose.model('ContactMessage', ContactMessageSchema);

// Route pour envoyer un message
app.post('/api/contact', async (req, res) => {
  try {
    const { email, subject, message, recipient } = req.body;

    // Validation simple
    if (!email || !message) {
      return res.status(400).json({ success: false, message: 'L\'email et le message sont requis' });
    }

    if (dbConnected) {
      // Si MongoDB est connecté, sauvegarder le message
      const contactMessage = new ContactMessage({
        email,
        subject: subject || 'Pas de sujet',
        message,
        recipient
      });

      await contactMessage.save();

      console.log('Message enregistré dans la base de données');
    } else {
      // En mode démo, juste afficher les informations dans la console
      console.log('Message reçu (mode démo) :');
      console.log('Email:', email);
      console.log('Sujet:', subject || 'Pas de sujet');
      console.log('Message:', message);
      console.log('Destinataire:', recipient);
    }

    // Répondre avec succès dans les deux cas
    res.status(201).json({
      success: true,
      message: 'Message envoyé avec succès'
    });
  } catch (error) {
    console.error('Erreur lors de l\'envoi du message:', error);
    res.status(500).json({
      success: false,
      message: 'Une erreur est survenue lors de l\'envoi du message'
    });
  }
});

// Route pour récupérer les images pour la galerie
const photos = [
  {
    id: 1,
    url: 'https://ext.same-assets.com/3305109517/1952260857.jpeg',
    alt: 'AWGE photoshoot 1',
    width: 640,
    height: 957
  },
  {
    id: 2,
    url: 'https://ext.same-assets.com/3305109517/4151179022.jpeg',
    alt: 'AWGE photoshoot 2',
    width: 640,
    height: 957
  },
  {
    id: 3,
    url: 'https://ext.same-assets.com/3305109517/1503419552.jpeg',
    alt: 'AWGE photoshoot 3',
    width: 640,
    height: 957
  },
  {
    id: 4,
    url: 'https://ext.same-assets.com/3305109517/1403498987.jpeg',
    alt: 'AWGE group photo 1',
    width: 640,
    height: 427
  },
  {
    id: 5,
    url: 'https://ext.same-assets.com/3305109517/3228777784.jpeg',
    alt: 'AWGE group photo 2',
    width: 640,
    height: 427
  },
  {
    id: 6,
    url: 'https://ext.same-assets.com/3305109517/81589092.jpeg',
    alt: 'AWGE car scene',
    width: 640,
    height: 427
  },
  {
    id: 7,
    url: 'https://ext.same-assets.com/3305109517/2592776774.jpeg',
    alt: 'AWGE outdoor shoot',
    width: 640,
    height: 957
  },
  {
    id: 8,
    url: 'https://ext.same-assets.com/3305109517/1860890217.jpeg',
    alt: 'AWGE portrait 1',
    width: 640,
    height: 957
  }
];

app.get('/api/photos', (req, res) => {
  res.json({ success: true, photos });
});

// Démarrer le serveur
app.listen(PORT, () => {
  console.log(`Serveur démarré sur le port ${PORT}`);
});
