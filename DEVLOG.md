# Admin Dashboard — Tailwind CSS

## 📌 Description

Application de tableau de bord administrateur construite avec Tailwind CSS,
offrant une interface moderne et responsive pour la gestion des données.

## 🛠️ Technologies

- Vite
- React (JavaScript)
- Tailwind CSS
- React Router
- Lucide Icons
- Recharts

## 🚀 Initialisation

1. création du dossier du projet et initialisation avec npm :
   ```bash
   mkdir admin-dashboard
   cd admin-dashboard
   npm init -y
   ```
2. Installation de vite avec React et js :
   ```bash
   npm create vite@latest .
   ```
3. Installation de Tailwind CSS et ses dépendances v3.4.17:
   ```bash
   npm install -D tailwindcss@3 postcss autoprefixer
   npx tailwindcss init -p
   ```
4. Configuration de Tailwind CSS en modifiant le fichier `tailwind.config.js` :
   ```javaScript
   /** @type {import('tailwindcss').Config} */
    export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {},
    },
    plugins: [],
    }
   ```
5. Ajout des directives Tailwind dans le fichier CSS principal (`src/index.css`) :
   ```css
   @tailwind base;
   @tailwind components;
   @tailwind utilities;
   ```
6. Supression du dossier `src/assets` et du app.css.

7. Installation du routeur React (react-router-dom v6.14.2) :

- Cette bibliothèque permet la navigation entre différentes pages de l'application.
  ```bash
  npm install react-router-dom
  ```

8. Installation de lucide-icons (react-icons v4.10.1) :

- Cette bibliothèque fournit des icônes SVG réactives pour une utilisation dans l'interface utilisateur.
  ```bash
  npm install lucide-react
  ```

9. Installation de recharts (recharts v2.6.2) :

- Cette bibliothèque est utilisée pour créer des graphiques et des visualisations de données dans le tableau de bord.
  ```bash
  npm install recharts
  ```
- En une commande :
  ```bash
  npm install react-router-dom lucide-react recharts
  ```

---

## Démarrage du projet

Pour démarrer le projet en mode développement, utilisez la commande suivante :

```bash
npm run dev
```

## ⚙️ Configuration du routage

Dans `main.jsx`, importation de `BrowserRouter` :

- Importation de BrowserRouter depuis react-router-dom pour gérer le routage dans l'application React.

```javascript
import { BrowserRouter } from "react-router-dom";

<BrowserRouter>
  <App />
</BrowserRouter>;
```
