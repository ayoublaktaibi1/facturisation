# Facturisation - Application de Gestion de Factures

## 📋 Présentation

Facturisation est une application web développée avec React et Vite qui permet de gérer facilement vos factures. Grâce à une interface intuitive, vous pouvez ajouter, modifier et supprimer des articles, calculer automatiquement les totaux et gérer les acomptes versés.

## ✨ Fonctionnalités

- **Gestion complète des articles**
  - Ajout d'articles avec nom, quantité et prix unitaire
  - Modification et suppression d'articles existants
  - Validation des données saisies

- **Calculs automatiques**
  - Sous-totaux par article
  - Montant total de la facture
  - Reste à payer après acompte

- **Interface adaptative**
  - Design responsive pour desktop, tablette et mobile
  - Passage automatique en mode carte sur les écrans étroits
  - Optimisations tactiles pour une meilleure expérience sur appareils mobiles

- **Persistance des données**
  - Sauvegarde automatique dans le localStorage
  - Récupération des données à la réouverture de l'application

## 🚀 Démarrage rapide

### Prérequis

- Node.js (version 16.0.0 ou supérieure)
- npm ou yarn

### Installation

1. Clonez le dépôt
   ```bash
   git clone https://github.com/ayoublaktaibi1/facturisation.git
   cd facturisation
   ```

2. Installez les dépendances
   ```bash
   npm install
   # ou
   yarn
   ```

3. Lancez l'application en mode développement
   ```bash
   npm run dev
   # ou
   yarn dev
   ```

4. Ouvrez votre navigateur à l'adresse [http://localhost:5173](http://localhost:5173)

## 🔧 Scripts disponibles

- `npm run dev` - Lance le serveur de développement
- `npm run build` - Crée une version optimisée pour la production
- `npm run preview` - Prévisualise la version de production
- `npm run lint` - Vérifie le code avec ESLint

## 🧩 Structure du projet

```
facturisation/
├── public/
├── src/
│   ├── assets/          # Images et ressources statiques
│   ├── components/      # Composants React réutilisables
│   │   ├── Header.jsx   # En-tête avec résumé des totaux
│   │   ├── ItemsTable.jsx # Tableau des articles (adaptatif)
│   │   ├── MainContent.jsx # Contenu principal
│   │   └── Sidebar.jsx  # Barre latérale avec formulaires
│   ├── styles/          # Fichiers CSS pour le styling
│   ├── App.jsx          # Composant principal et gestion d'état
│   └── main.jsx         # Point d'entrée de l'application
├── .eslintrc.js         # Configuration ESLint
├── package.json         # Dépendances et scripts
├── vite.config.js       # Configuration Vite
└── README.md            # Ce fichier
```

## 💻 Technologies utilisées

- **React 19** - Bibliothèque UI
- **Vite** - Bundler et serveur de développement
- **ESLint** - Linting du code
- **Lucide React** - Icônes SVG
- **localStorage API** - Persistance des données côté client

## 🔍 Fonctionnement détaillé

### Gestion des articles

L'application permet d'ajouter des articles à votre facture en spécifiant:
- Un nom d'article (obligatoire)
- Une quantité (obligatoire, supérieure à 0)
- Un prix unitaire (obligatoire, supérieur ou égal à 0)

Vous pouvez également modifier un article existant en cliquant sur l'icône de modification, ou le supprimer avec l'icône de suppression.

### Calcul des montants

L'application calcule automatiquement:
- Le sous-total de chaque article (quantité × prix unitaire)
- Le montant total de la facture (somme des sous-totaux)
- Le reste à payer (montant total - acompte versé)

### Persistance des données

Toutes les données sont automatiquement sauvegardées dans le localStorage du navigateur, ce qui signifie que vous retrouverez vos informations même après avoir fermé puis rouvert l'application. Un bouton "Effacer toutes les données" vous permet de réinitialiser complètement l'application si nécessaire.

## 🔜 Améliorations futures

- Génération de PDF pour l'impression des factures
- Option pour sauvegarder plusieurs factures
- Ajout des informations client/vendeur
- Support pour différentes devises
- Mode sombre
- Synchronisation des données avec un serveur

## 📄 Licence

MIT © Laktaibi Ayoub

---

Créé avec ❤️ par Laktaibi Ayoub