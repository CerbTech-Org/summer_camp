
# Documentation du Projet Summer Camp

## Sommaire

- [Présentation du projet](#présentation-du-projet)
- [Pré-requis](#pré-requis)
- [Installation](#installation)
- [Lancer le site](#lancer-le-site)
- [Configuration de l'environnement](#configuration-de-lenvironnement)
- [Structure du projet](#structure-du-projet)
- [Technologies utilisées](#technologies-utilisées)
- [Contact et support](#contact-et-support)

---

## Présentation du projet

**Summer Camp** est une plateforme web développée pendant mon stage. Ce projet permet aux utilisateurs de participer à divers camps estivaux, de s'inscrire à des ateliers, de consulter les programmes et de gérer leurs inscriptions. Il propose également des fonctionnalités de gestion de communication avec les clients via l’envoi d’emails et la récupération des données clients.

---

## Pré-requis

Avant de commencer, assurez-vous d’avoir les éléments suivants installés sur votre machine :

- Node.js (version recommandée : v14.x ou supérieure)
- npm (version recommandée : 6.x ou supérieure)

---

## Installation

1. Clonez le repository :
   ```bash
   git clone https://github.com/CerbTech-Org/summer_camp.git
   ```

2. Accédez au dossier du projet :
   ```bash
   cd summer_camp/SummerCamp
   ```

3. Installez les packages nécessaires :
   ```bash
   npm install
   ```

---

## Lancer le site

Pour démarrer le projet :

1. Assurez-vous que tous les packages sont installés correctement.
2. Exécutez l’application en utilisant Node.js :
   ```bash
   node send.js
   ```

---

## Configuration de l'environnement

Pour configurer les informations essentielles comme l’email pour recevoir les emails des clients et le mot de passe du compte email, vous devez modifier le fichier `.env` :

```bash
cd summer_camp/SummerCamp
nano .env
```

Ensuite, remplacez les champs suivants :
- `EMAIL` : Adresse email utilisée pour recevoir les communications des clients.
- `PASSWORD` : Le mot de passe de votre compte email.

---

## Technologies utilisées

- **Node.js** : Environnement d'exécution JavaScript côté serveur.
- **Express** : Framework web pour Node.js.
- **npm** : Gestionnaire de paquets JavaScript.
- **dotenv** : Module Node.js pour charger les variables d'environnement.
- **html** : Langage de programmation pour la structuration de la page
- **css et tailwind** : Langage de style pour la mise en forme de la page
- **javascript** : Langage de programmation pour les interactions dynamiques
---

## Contact et support

Pour toute question ou besoin d’assistance, n’hésitez pas à me contacter à l’adresse suivante :
- Email : morganechrisnaud2005@gmail.com
- LinkedIn : [Mon profil LinkedIn](https://www.linkedin.com/in/chrisnaud-agossou-11340b2b3)

---
