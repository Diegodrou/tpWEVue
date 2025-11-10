# TP VueJS — Gestion de Tâches (Todos)

## Objectifs du TP

Ce TP a pour but de comprendre et de mettre en pratique les concepts fondamentaux de **VueJS** avec **TypeScript** :

* Comprendre la notion de composant en VueJS
* Utiliser TypeScript pour structurer les développements
* Comprendre le fonctionnement basique du routeur Vue
* Observer les analogies entre Angular et Vue

---

## Structure du projet

```
tp-web-vue/
│
├── src/
│   ├── assets/              # Fichiers CSS et ressources
│   ├── components/
│   │   ├── TODOComponent.vue   # Composant pour une tâche individuelle
│   │   └── Todos.vue           # Composant principal (liste des tâches)
│   ├── model/
│   │   └── TODO.ts             # Classe métier représentant une tâche
│   ├── router/
│   │   └── index.ts            # Configuration du routeur Vue
│   ├── views/
│   │   ├── HomeView.vue        # Vue principale (accueille le composant Todos)
│   │   └── AboutView.vue
│   ├── App.vue                 # Composant racine
│   └── main.ts                 # Point d’entrée de l’application
│
├── package.json
├── README.md
└── vite.config.ts
```

---

## Fonctionnalités Implémentées

### Gestion des tâches (Todos.vue)

* Ajout d’une nouvelle tâche via un **input + bouton**
* Suppression d’une tâche spécifique
* Suppression de toutes les tâches
* Suppression uniquement des tâches terminées
* Affichage du nombre de tâches restantes
* Filtrage :

  * Toutes les tâches
  * Tâches à faire
  * Tâches terminées
* Affichage du footer uniquement s’il existe au moins une tâche

### Édition des tâches (TODOComponent.vue)

* Double-clic sur une tâche active le mode édition
* Le nom peut être modifié directement
* Perte de focus (évènement `blur`) ou touche *Entrée* : sauvegarde du nouveau titre

### Style

* Feuille de style dédiée (importée depuis `assets/style.css`)
* Design clair, moderne et responsive

### Directives personnalisées

Une directive `v-background` a été ajoutée dans `main.ts`.
Elle permet de changer la couleur de fond d’un élément `<div>` et son texte, avec une couleur par défaut (`lightBlue`) ou un argument personnalisé.

Exemple d’utilisation :

```html
<div v-background>Texte avec fond par défaut</div>
<div v-background:green>Texte avec fond vert</div>
```

---

## Concepts VueJS Illustrés

* Utilisation de `ref()` et `reactive()` pour la réactivité
* Liaison de données avec `v-model`
* Boucles et rendus conditionnels (`v-for`, `v-if`)
* Événements (`@click`, `@dblclick`, `@blur`, `@keyup.enter`)
* Propriétés (`defineProps`)
* `computed` pour les valeurs dérivées (filtrage des tâches)
* Communication entre composants parent/enfant

---

## Lancer le projet

1. Installer les dépendances :

   ```bash
   npm install
   ```
2. Lancer le serveur de développement :

   ```bash
   npm run dev
   ```
3. Ouvrir le navigateur à l’adresse indiquée (souvent [http://localhost:5173](http://localhost:5173))

---

## Ce que j’ai appris

Ce TP m’a permis de consolider mes connaissances sur le framework VueJS et d’approfondir plusieurs notions clés du développement web moderne.
Voici les principaux apprentissages :

### VueJS et la réactivité

* Comprendre le fonctionnement de la réactivité avec ref() et reactive()
* Observer comment Vue détecte et met à jour automatiquement le DOM lorsqu’une donnée change
* Découvrir l’utilisation de computed() pour dériver des valeurs dynamiques (comme les filtres de tâches)

### Composants et communication

* Créer des composants réutilisables (Todos.vue, TODOComponent.vue)
* Passer des propriétés (props) à un composant enfant
* Comprendre la communication parent-enfant et la gestion des événements entre eux

### Directives et événements

* Utiliser les directives de base (v-if, v-for, v-model, v-on)
* Créer une directive personnalisée (v-background) pour manipuler le DOM directement
* Gérer des événements tels que click, dblclick, keyup.enter et blur

### TypeScript et structuration

* Structurer le projet avec des classes TypeScript (TODO, TodoList) pour mieux gérer les données
* Séparer clairement la logique métier des composants visuels

### Organisation et bonnes pratiques
* Comprendre la structure d’un projet Vue avec router, views, components, model, et assets
* Appliquer une feuille de style externe et apprendre à l’importer dans un composant
* Utiliser les outils de développement Vue (Vue DevTools) pour inspecter les composants et leur état

### Fonctionnalités d’une application complète

* Mettre en place une liste de tâches interactive : ajout, suppression, filtrage, édition
* Gérer les états dynamiques des tâches (à faire, faites, en retard)
* Appliquer des conditions d’affichage (comme le footer visible uniquement s’il y a des tâches)

---

## Auteur

**Diego Droulers**
TP réalisé dans le cadre du module WE (Web engineering) — compréhension des composants, directives et réactivité en Vue.
