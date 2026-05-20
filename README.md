# Compressio

MVP Astro pour un site gratuit de compression d'images en ligne, pensé pour le SEO et une monétisation future via Google AdSense.

## Idée choisie

Le premier outil est un compresseur d'images JPG, PNG et WebP.

- Demande en ligne forte : les requêtes autour de "compresser image", "réduire taille photo" et "convertir WebP" sont fréquentes et evergreen.
- Intérêt utilisateur clair : réduire le poids d'une image pour un site, un email, un formulaire ou les réseaux sociaux.
- Développement raisonnable : traitement côté navigateur avec `canvas`, sans backend ni stockage.
- Monétisation future : pages informationnelles + outil gratuit + emplacements publicitaires non intrusifs.
- SEO extensible : chaque nouvel outil peut avoir sa page dédiée et rejoindre la page catalogue.

## Stack technique

- Langage : TypeScript et Astro.
- Frontend : Astro statique avec JavaScript navigateur pour l'outil.
- Backend : aucun pour le MVP, ce qui réduit les coûts et les risques de confidentialité.
- Base de données : aucune pour la V1.
- Build : Astro.
- Hébergement recommandé : Cloudflare Pages, Netlify ou Vercel.

## Commandes

```bash
npm install
npm run dev
npm run build
npm run preview
```

En local, Astro affiche l'URL de développement dans le terminal, généralement `http://localhost:4321`.

## Déploiement GitHub + Vercel

1. Créer un dépôt GitHub vide.
2. Pousser ce projet sur le dépôt.
3. Aller sur Vercel, choisir "Add New Project", puis importer le dépôt GitHub.
4. Vercel détecte Astro automatiquement. Les valeurs sont aussi fixées dans `vercel.json` :
   - build command : `npm run build`
   - output directory : `dist`
5. Ajouter la variable d'environnement `PUBLIC_SITE_URL` avec le domaine de production.
6. Déployer.
7. Compléter les mentions légales avec les informations réelles de l'éditeur avant l'ouverture publique.

Commandes Git si le dépôt distant existe déjà :

```bash
git init
git add .
git commit -m "Initial Compressio MVP"
git branch -M main
git remote add origin https://github.com/VOTRE-COMPTE/VOTRE-REPO.git
git push -u origin main
```

## Architecture

```text
src/
  components/        Composants réutilisables, outil image, slot publicité
  config/            Configuration du site
  data/              Catalogue des outils
  layouts/           Layout SEO global
  pages/             Routes Astro
  styles/            CSS global responsive
public/              Fichiers publics, robots.txt, favicon
```

Pour ajouter un outil, ajouter une entrée dans `src/data/tools.ts`, puis créer la page dans `src/pages/outils/`.

## Améliorations futures

- Télécharger toutes les images compressées dans un ZIP.
- Ajouter AVIF si le support navigateur est suffisant.
- Créer un outil dédié de conversion WebP.
- Ajouter une CMP cookies avant activation AdSense.
- Ajouter un blog SEO court autour de l'optimisation image.
- Ajouter des tests Playwright pour les parcours critiques.
