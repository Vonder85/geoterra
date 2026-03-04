# Audit de Performance Web - be-geoterra.fr

**Date :** Juin 2025  
**Outil :** Google PageSpeed Insights (Lighthouse)  
**URL analysee :** https://be-geoterra.fr  
**Type d'analyse :** Mobile et Desktop

---

## 1. Resume executif

Le site **be-geoterra.fr** obtient d'excellents resultats en **Accessibilite (100)**, **Bonnes pratiques (100)** et **SEO (100)**. En revanche, le score **Performances (75/100)** est en dessous des standards recommandes, principalement a cause d'**images non optimisees** qui alourdissent considerablement le chargement de la page.

Le probleme principal est le **Largest Contentful Paint (LCP) de 17,6 secondes** sur mobile - la recommandation Google etant un LCP inferieur a 2,5 secondes. Ce chiffre penalise directement le referencement naturel (SEO), car Google utilise les Core Web Vitals comme facteur de classement depuis 2021.

> **Impact business :** Un LCP superieur a 2,5s peut entrainer une baisse de positionnement dans les resultats de recherche Google et une augmentation du taux de rebond des visiteurs.

---

## 2. Scores globaux

### Mobile

| Categorie | Score | Statut |
|---|:---:|:---:|
| **Performances** | **75** | A ameliorer |
| Accessibilite | 100 | Excellent |
| Bonnes pratiques | 100 | Excellent |
| SEO | 100 | Excellent |

### Desktop

| Categorie | Score | Statut |
|---|:---:|:---:|
| **Performances** | **84** | A ameliorer |
| **Accessibilite** | **92** | A ameliorer |
| Bonnes pratiques | 100 | Excellent |
| SEO | 100 | Excellent |

---

## 3. Core Web Vitals - Detail des metriques

### Mobile

| Metrique | Valeur | Seuil recommande | Statut |
|---|:---:|:---:|:---:|
| First Contentful Paint (FCP) | 0,9 s | < 1,8 s | Bon |
| **Largest Contentful Paint (LCP)** | **17,6 s** | **< 2,5 s** | **CRITIQUE** |
| Total Blocking Time (TBT) | 0 ms | < 200 ms | Excellent |
| Cumulative Layout Shift (CLS) | 0,001 | < 0,1 | Excellent |
| Speed Index | 0,9 s | < 3,4 s | Bon |

### Desktop

| Metrique | Valeur | Seuil recommande | Statut |
|---|:---:|:---:|:---:|
| First Contentful Paint (FCP) | 0,2 s | < 1,8 s | Excellent |
| **Largest Contentful Paint (LCP)** | **2,9 s** | **< 2,5 s** | Limite |
| Total Blocking Time (TBT) | 0 ms | < 200 ms | Excellent |
| Cumulative Layout Shift (CLS) | 0 | < 0,1 | Excellent |
| Speed Index | 0,4 s | < 3,4 s | Excellent |

**Explication :** Le LCP mesure le temps necessaire pour afficher le plus grand element visible de la page (ici, l'image de fond du hero en page d'accueil). Un LCP de 17,6s signifie que l'utilisateur mobile attend presque 18 secondes avant de voir le contenu principal.

---

## 4. Problemes identifies

### 4.1 CRITIQUE - Images non optimisees - Impact majeur

**Economies estimees : environ 2 812 Kio (2,7 Mo)**

C'est le probleme le plus impactant. Les images du site utilisent des formats anciens (PNG, JPEG) alors que des formats modernes (WebP, AVIF) permettraient des reductions de taille de 60 a 80%.

| Image | Format | Taille | Utilisee pour | Probleme |
|---|:---:|:---:|---|---|
| background.png | PNG | **1,5 Mo** | Image hero page d'accueil | Format non optimise, taille excessive |
| logo.png | PNG | **929 Ko** | Logo header/footer (48px) | Image 2000x2000px pour 48px |
| favicon.png | PNG | **929 Ko** | Favicon + prechargement | Image 2000x2000px prechargee |
| vincent.jpeg | JPEG | 140 Ko | Photo equipe (128px) | Image 1474x2048px pour 128px |
| max.jpeg | JPEG | 223 Ko | Photo equipe (128px) | Image 1536x2048px pour 128px |

**Total des images : environ 3,7 Mo** pour une page web qui ne devrait pas depasser 500 Ko.

### 4.2 CRITIQUE - Charge reseau totale excessive

**Taille totale de la page : 3 807 Kio (3,7 Mo)**

La recommandation est de rester sous 1 600 Kio. La page fait plus du double du seuil recommande, quasi exclusivement a cause des images.

### 4.3 IMPORTANT - Absence de dimensions sur les images

Aucune image du site ne comporte d'attributs width et height. Cela empeche le navigateur de reserver l'espace necessaire avant le chargement, ce qui peut provoquer des decalages visuels (sauts de page).

### 4.4 IMPORTANT - Requetes bloquant l'affichage

**Economies estimees : 160 ms (mobile) / 50 ms (desktop)**

Certaines ressources sont chargees de maniere synchrone et bloquent le premier affichage de la page.

### 4.5 IMPORTANT - Image LCP non priorisee

L'image principale du hero (background.png) n'est pas priorisee par le navigateur. De plus, le prechargement (preload) est configure sur la mauvaise image : il cible le favicon (929 Ko) au lieu de l'image hero (1,5 Mo), ce qui retarde encore plus le LCP.

### 4.6 MINEUR - Images sous la ligne de flottaison non differees

Les photos de l'equipe (vincent.jpeg, max.jpeg) se chargent immediatement au lieu d'etre differees (lazy loading), consommant de la bande passante inutilement avant que l'utilisateur ne scrolle.

---

## 5. Audits reussis (points forts)

Le site excelle dans de nombreux domaines :

- Aucun JavaScript inutilise ou en double
- CSS minifie et sans ressources inutilisees
- Aucune tache longue bloquant le thread principal (TBT = 0 ms)
- Taille du DOM optimisee
- HTTPS correctement configure avec redirection HTTP vers HTTPS
- Fichier robots.txt valide
- Donnees structurees valides
- Balises title et meta description presentes
- Liens descriptifs et explorables
- Attributs alt sur les images
- Hierarchie des titres correcte
- Contrastes de couleurs suffisants (mobile)
- Aucune API obsolete utilisee
- Pas de cookies tiers

---

## 6. Plan d'action recommande

### Priorite 1 - Impact eleve (score +15 a +20 estime)

| No | Action | Gain estime | Effort |
|:---:|---|:---:|:---:|
| 1 | Convertir background.png en WebP/AVIF et redimensionner (1920px max) | ~1,3 Mo | Faible |
| 2 | Redimensionner et convertir logo.png a 200x200px en WebP | ~900 Ko | Faible |
| 3 | Redimensionner et convertir favicon.png a 200x200px | ~900 Ko | Faible |
| 4 | Corriger le prechargement : precharger l'image hero au lieu du favicon | LCP -3s | Faible |
| 5 | Ajouter fetchpriority=high sur l'image hero | LCP -1s | Trivial |

### Priorite 2 - Impact moyen

| No | Action | Gain estime | Effort |
|:---:|---|:---:|:---:|
| 6 | Ajouter width et height sur toutes les balises img | CLS ameliore | Faible |
| 7 | Ajouter loading=lazy sur les images sous la ligne de flottaison | ~300 Ko | Faible |
| 8 | Redimensionner les photos d'equipe a 256x256px en WebP | ~300 Ko | Faible |
| 9 | Utiliser le composant Image d'Astro pour l'optimisation automatique | Automatisation | Moyen |

### Priorite 3 - Ameliorations techniques

| No | Action | Gain estime | Effort |
|:---:|---|:---:|:---:|
| 10 | Supprimer le dns-prefetch vers fonts.googleapis.com (inutilise) | Code propre | Trivial |
| 11 | Supprimer le doublon public/background.png | -1,5 Mo serveur | Trivial |
| 12 | Differer le script Vercel Analytics | -10 ms | Faible |

---

## 7. Estimation de l'impact

### Avant optimisation

|   | Performances | LCP | Poids page |
|---|:---:|:---:|:---:|
| **Mobile** | 75 | 17,6 s | 3,7 Mo |
| **Desktop** | 84 | 2,9 s | 3,7 Mo |

### Apres optimisation (estimation)

|   | Performances | LCP | Poids page |
|---|:---:|:---:|:---:|
| **Mobile** | 95+ | < 2,5 s | ~500 Ko |
| **Desktop** | 98+ | < 1,0 s | ~500 Ko |

### Impact SEO attendu

- **Core Web Vitals** passant au vert dans Google Search Console
- **Meilleur positionnement** dans les resultats de recherche Google (facteur de classement depuis juin 2021)
- **Reduction du taux de rebond** : chaque seconde de chargement supplementaire augmente le taux de rebond d'environ 32% (source : Google)
- **Meilleure experience utilisateur** sur mobile : chargement quasi instantane au lieu de 18 secondes

---

## 8. Note sur le SEO

Le score SEO Lighthouse est deja a **100/100**, ce qui signifie que les bonnes pratiques techniques SEO sont en place (balises title, meta description, robots.txt, donnees structurees, liens descriptifs, etc.).

Cependant, **les performances web sont un facteur de classement Google distinct du score SEO Lighthouse**. Google evalue les Core Web Vitals (LCP, CLS, INP) separement et les utilise pour departager les sites dans les resultats de recherche.

Le LCP actuel de 17,6 secondes sur mobile classe le site dans la categorie **Mauvais** selon Google, ce qui peut penaliser son positionnement malgre un score SEO technique parfait.

---

## 9. Conclusion

Le site be-geoterra.fr est techniquement bien construit avec d'excellents scores en accessibilite, bonnes pratiques et SEO. Le seul point faible significatif est la **performance de chargement**, causee quasi exclusivement par des **images non optimisees**.

Les optimisations recommandees sont **simples a mettre en oeuvre** (principalement conversion et redimensionnement d'images) et permettraient d'atteindre un score de performance superieur a 95, avec un LCP conforme aux recommandations Google (< 2,5 secondes).

**L'investissement est minimal pour un impact maximal sur le referencement et l'experience utilisateur.**

---

*Rapport genere a partir de l'analyse Google PageSpeed Insights - Lighthouse v12*