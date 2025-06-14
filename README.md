# Shiny Agency

Projet React intermédiaire — OpenClassrooms

## Présentation

Shiny Agency est une application web développée en React permettant de :

- Réaliser un test pour déterminer les besoins d’un projet web
- Consulter une liste de freelances avec leurs profils
- Naviguer entre différentes pages (accueil, test, résultats, profils)
- Changer le thème (clair/sombre)

L’application utilise une API locale pour récupérer les questions du test, les résultats et les profils freelances.

## Fonctionnalités principales

- **Accueil** : Présentation et accès rapide au test
- **Test (Survey)** : Questionnaire dynamique, navigation entre les questions, sauvegarde des réponses
- **Résultats** : Affichage des compétences recommandées selon les réponses
- **Freelances** : Liste de profils freelances récupérés via l’API
- **Thème** : Changement de mode clair/sombre via le footer
- **Gestion des erreurs** : Affichage d’une page personnalisée en cas de route inconnue

## Structure du projet

```
shiny-agency/
├── public/
├── src/
│   ├── assets/           # Images et illustrations
│   ├── components/       # Composants réutilisables (Header, Footer, Card, Error...)
│   ├── mesapis/          # Données mockées (si besoin)
│   ├── pages/            # Pages principales (Home, Survey, Freelances, Resultats)
│   ├── styles/           # Fichiers CSS globaux
│   ├── utils/            # Hooks, contextes, styles globaux, Atoms
│   └── Colors.js         # Palette de couleurs
├── package.json
└── README.md
```

## Installation et lancement

1. **Cloner le projet**
   ```bash
   git clone <url-du-repo>
   cd shiny-agency
   ```
2. **Installer les dépendances**
   ```bash
   npm install
   ```
3. **Lancer l’API locale**
   - Assurez-vous que l’API (backend) est bien démarrée sur `http://localhost:8000`.
   - Suivez les instructions du projet backend fourni par OpenClassrooms si besoin.
4. **Démarrer l’application React**
   ```bash
   npm start
   ```
   L’application sera accessible sur [http://localhost:3000](http://localhost:3000)

## Technologies utilisées

- React 19
- React Router DOM 7
- styled-components
- API REST locale (Node.js/Express fournie par OpenClassrooms)

## Auteur

Projet réalisé dans le cadre du parcours OpenClassrooms — Développeur Frontend React.

---

N’hésitez pas à adapter ce README selon vos besoins ou à ajouter des sections (tests, déploiement, etc.) si nécessaire.

# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any
