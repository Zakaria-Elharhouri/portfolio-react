# SiteKom Portfolio

Un portfolio moderne et professionnel pour SiteKom, une équipe de deux développeurs full-stack. Le site présente nos compétences techniques, services et projets avec une interface élégante et responsive.

## 🚀 Fonctionnalités

- **Design moderne** : Interface élégante avec animations fluides
- **Responsive** : Optimisé pour tous les appareils (mobile, tablette, desktop)
- **Mode sombre/clair** : Basculement automatique selon les préférences système
- **Navigation fluide** : Scroll smooth entre les sections
- **Animations** : Framer Motion pour des transitions élégantes
- **Formulaire de contact** : Validation en temps réel
- **Portfolio interactif** : Filtrage par catégorie de projets
- **Témoignages** : Carrousel de témoignages clients
- **Compétences techniques** : Présentation visuelle de toutes nos technologies

## 🛠️ Technologies utilisées

### Frontend
- **React 18** avec TypeScript
- **Framer Motion** pour les animations
- **Lucide React** pour les icônes
- **React Scroll** pour la navigation fluide
- **React Intersection Observer** pour les animations au scroll

### Styling
- **CSS3** avec variables CSS personnalisées
- **Design system** complet avec palette de couleurs moderne
- **Responsive design** mobile-first
- **Animations CSS** et transitions fluides

### Outils de développement
- **Create React App** avec template TypeScript
- **ESLint** pour la qualité du code
- **Git** pour le versioning

## 📦 Installation

1. **Cloner le repository**
   ```bash
   git clone [URL_DU_REPO]
   cd sitekom-portfolio
   ```

2. **Installer les dépendances**
   ```bash
   npm install
   ```

3. **Lancer le serveur de développement**
   ```bash
   npm start
   ```

4. **Ouvrir dans le navigateur**
   ```
   http://localhost:3000
   ```

## 🏗️ Structure du projet

```
src/
├── components/
│   ├── layout/
│   │   ├── Header.tsx          # Navigation principale
│   │   └── Footer.tsx          # Pied de page
│   ├── sections/
│   │   ├── Hero.tsx            # Section d'accueil
│   │   ├── About.tsx           # À propos de l'équipe
│   │   ├── Skills.tsx          # Compétences techniques
│   │   ├── Services.tsx        # Services proposés
│   │   ├── Projects.tsx        # Portfolio des projets
│   │   ├── Testimonials.tsx    # Témoignages clients
│   │   └── Contact.tsx         # Formulaire de contact
│   └── ui/
│       ├── BackToTop.tsx       # Bouton retour en haut
│       └── Loader.tsx          # Animation de chargement
├── hooks/
│   └── useTheme.ts             # Hook pour le thème sombre/clair
├── styles/
│   └── globals.css             # Styles globaux et variables CSS
├── utils/                      # Utilitaires (à développer)
└── assets/                     # Images et ressources
```

## 🎨 Sections du site

### 1. Header/Navigation
- Logo SiteKom
- Menu de navigation sticky
- Basculement thème sombre/clair
- Menu mobile responsive

### 2. Hero Section
- Titre accrocheur avec animation de typing
- Présentation de l'équipe
- Statistiques animées
- Boutons d'action
- Particules décoratives

### 3. À Propos
- Présentation de l'équipe SiteKom
- Nos valeurs et philosophie
- Statistiques d'expérience
- Pourquoi nous choisir

### 4. Compétences Techniques
- **Frontend** : HTML5, CSS3, JavaScript, React, Vue.js, Angular, TypeScript, etc.
- **Backend** : Node.js, Python, PHP, Java, C#, Ruby, Go, Rust
- **Bases de données** : MySQL, PostgreSQL, MongoDB, Redis, Firebase
- **Cloud & DevOps** : AWS, Google Cloud, Azure, Docker, Kubernetes
- **Mobile** : React Native, Flutter, Swift, Kotlin
- **Outils** : Git, GitHub, Figma, Webpack, Vite, etc.

### 5. Services
- Développement Web Full-Stack
- Applications Mobiles
- E-commerce & CMS
- Maintenance & Support
- Consultation Technique
- UI/UX Design

### 6. Portfolio/Projets
- Grille de projets avec filtres
- Cartes projet avec images
- Technologies utilisées
- Liens GitHub et démos

### 7. Témoignages
- Carrousel de témoignages clients
- Système de notation par étoiles
- Photos des clients

### 8. Contact
- Formulaire de contact validé
- Informations de contact
- Liens réseaux sociaux
- Carte de localisation

## 🎯 Fonctionnalités spéciales

- **Animations au scroll** : Éléments qui apparaissent progressivement
- **Effet parallax** : Sur certaines sections
- **Compteurs animés** : Statistiques qui se remplissent
- **Formulaire intelligent** : Validation en temps réel
- **Bouton retour en haut** : Apparaît après scroll
- **Loading animation** : Au démarrage de l'application
- **Mode sombre** : Basculement automatique et manuel

## 📱 Responsive Design

Le site est entièrement responsive avec :
- **Mobile-first** : Conçu d'abord pour mobile
- **Breakpoints** : 768px, 1024px, 1200px
- **Navigation mobile** : Menu hamburger
- **Grilles adaptatives** : S'ajustent selon la taille d'écran
- **Images optimisées** : Chargement lazy et tailles adaptées

## 🚀 Déploiement

### Build de production
```bash
npm run build
```

### Déploiement sur Vercel
```bash
npm install -g vercel
vercel
```

### Déploiement sur Netlify
1. Connecter le repository GitHub
2. Build command : `npm run build`
3. Publish directory : `build`

## 🔧 Configuration

### Variables d'environnement
Créer un fichier `.env` :
```env
REACT_APP_SITE_NAME=SiteKom
REACT_APP_CONTACT_EMAIL=contact@sitekom.fr
REACT_APP_PHONE=+33 6 12 34 56 78
```

### Personnalisation
- **Couleurs** : Modifier les variables CSS dans `src/styles/globals.css`
- **Contenu** : Éditer les données dans chaque composant
- **Images** : Remplacer les placeholders par vos propres images

## 📈 Performance

- **Lazy loading** : Images et composants
- **Code splitting** : Chargement optimisé
- **Optimisation des images** : Formats modernes
- **Minification** : CSS et JavaScript optimisés
- **Cache** : Stratégies de mise en cache

## 🤝 Contribution

1. Fork le projet
2. Créer une branche feature (`git checkout -b feature/AmazingFeature`)
3. Commit les changements (`git commit -m 'Add some AmazingFeature'`)
4. Push vers la branche (`git push origin feature/AmazingFeature`)
5. Ouvrir une Pull Request

## 📄 Licence

Ce projet est sous licence MIT. Voir le fichier `LICENSE` pour plus de détails.

## 📞 Contact

- **Email** : contact@sitekom.fr
- **Téléphone** : +33 6 12 34 56 78
- **Site web** : [sitekom.fr](https://sitekom.fr)

---

**SiteKom** - Créateurs d'expériences digitales exceptionnelles
