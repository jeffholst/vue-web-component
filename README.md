# Overview

This is a template project for rapid Vue web components development.  A typical use case is for building components with Vue that can easily be used in other projects with a different or no JavaScript framework.

🔍 [Demo]((https://jeffholst.github.io/vue-web-component/dist/))

## 📌 Features

- built with 💖 using Vue 3 + Vite
- streamlined development and build workflows
- automated deployment to GitHub Pages

## 💻 Commands

| Command           | Action                                           |
| :---------------- | :----------------------------------------------- |
| `npm install`     | Installs dependencies                            |
| `npm run dev`     | Starts local dev server                          |
| `npm run build`   | Build for production and GitHub pages            |
| `npm run preview` | Preview built files in /dist                     |
| `npm run ghp`     | deploy to GitHub Pages                           |

## 📁 Project Structure

```
/
├── dist/
├── src/
│   ├── components/
│   ├── index.html (*)
│   ├── main.js
│   └── style.css (*)
├── .gitignore
├── .prettierrc.json
├── README.md
├── gulpfile.js
├── package-lock.json
├── package.json
└── vite.config.js

(*) files copied during build to dist/
```

## 📃 GitHub Pages

GitHub Pages is triggerd by the **github-pages** branch.

Run the following command to deploy to GitHub Pages

```txt
npm run ghp
```

**GitHub Pages Link**: [https://jeffholst.github.io/vue-web-component/dist/](https://jeffholst.github.io/vue-web-component/dist/)

## 📋 gulp tasks

### copyFilesToDist

- copy src/style.css to dist/
- update src/index.html for produciton and copy to dist/

### gitHubPages

- merge 'main' branch into 'github-pages' branch
- push 'github-pages' branch to GitHub

## ✅ Recommended IDE Setup

- [VS Code](https://code.visualstudio.com/) + [Volar](https://marketplace.visualstudio.com/items?itemName=Vue.volar)