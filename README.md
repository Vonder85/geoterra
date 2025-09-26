# GeoTerra - Site Vitrine

Site vitrine moderne pour un bureau d'étude géotechnique développé avec Astro et Tailwind CSS.

## 🚀 Fonctionnalités

- **Design moderne et responsive** avec Tailwind CSS
- **SEO optimisé** avec métadonnées, sitemap automatique et robots.txt
- **Formulaire de contact** intégré avec Formspree
- **Performance optimale** grâce à Astro
- **4 pages principales** : Accueil, L'entreprise, Services, Contact

## 🛠️ Technologies utilisées

- [Astro](https://astro.build/) - Framework web moderne
- [Tailwind CSS](https://tailwindcss.com/) - Framework CSS utilitaire
- [TypeScript](https://www.typescriptlang.com/) - Langage de programmation typé
- [Formspree](https://formspree.io/) - Service de gestion des formulaires

## 📦 Installation

1. Installer les dépendances :
```bash
npm install
```

2. Lancer le serveur de développement :
```bash
npm run dev
```

3. Ouvrir [http://localhost:4321](http://localhost:4321) dans votre navigateur

## 🏗️ Build

Pour construire le site pour la production :

```bash
npm run build
```

Pour prévisualiser la version de production :

```bash
npm run preview
```

## 📋 Configuration

### Formulaire de contact

Pour que le formulaire de contact fonctionne, vous devez :

1. Créer un compte sur [Formspree](https://formspree.io/)
2. Remplacer `YOUR_FORM_ID` dans `src/pages/contact.astro` ligne 41 par votre ID Formspree

### SEO

Le site est configuré avec :
- Métadonnées pour chaque page
- Sitemap automatique généré par Astro
- Fichier robots.txt
- Balises Open Graph et Twitter Cards

## 🎨 Personnalisation

### Couleurs

Les couleurs principales sont définies dans `tailwind.config.mjs` :
- Couleur primaire : Bleu (primary-*)
- Couleur secondaire : Gris (secondary-*)

### Contenu

Modifiez le contenu dans les fichiers `.astro` du dossier `src/pages/` :
- `index.astro` - Page d'accueil
- `entreprise.astro` - Page l'entreprise
- `services.astro` - Page services
- `contact.astro` - Page contact

## 📱 Responsive Design

Le site est entièrement responsive et s'adapte à tous les écrans :
- Mobile first
- Breakpoints Tailwind CSS (sm, md, lg, xl)
- Navigation mobile avec menu hamburger

## 🔍 Structure du projet

```
/
├── public/
│   ├── favicon.svg
│   └── robots.txt
├── src/
│   ├── components/
│   │   ├── Header.astro
│   │   └── Footer.astro
│   ├── layouts/
│   │   └── Layout.astro
│   └── pages/
│       ├── index.astro
│       ├── entreprise.astro
│       ├── services.astro
│       └── contact.astro
├── astro.config.mjs
├── tailwind.config.mjs
└── package.json
```

## 📄 Licence

Ce projet est sous licence MIT.