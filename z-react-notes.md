npm cache clean --force
npx create-react-app my-app
cd my-app
npm start

# Instalar libreria guardandolo en el packaje.json
npm install -S formik

# Vite
npm create vite@latest
npm install
npm run dev

# Dependencias importantes
npm i react-router-dom react-hot-toast axios react-hook-form

# Para instalar tailwind 
https://tailwindcss.com/docs/guides/vite
npm install -D tailwindcss postcss autoprefixer
npx tailwindcss init -p

# Configurar slint
https://www.masrinastudio.com/post/eslint-formatting-vscode-guide/

USER SETTINGS -> cmd + shift + p
"editor.codeActionsOnSave": {
        "source.fixAll.eslint": "explicit"
    },
    "eslint.alwaysShowStatus": true


# Crear react desde vanilla
npm install @vitejs/plugin-react -E
npm install react react-dom -E

<!-- * crear vite.config.js -->
index.html
modificar js por jsx para mejorar el transpilador

<!-- * intalar standard JS  -->
npm install standard -D

<!-- * agregar el linter en packaje.json:  -->
,
  "eslintConfig": {
    "extends": "./node_modules/standard/eslintrc.json"
  }

<!-- * Crear carpeta src -->
dentro de src/App.jsx

<!-- * Agregar app a main -->
Agregar info en app
agregar a main

# Notas:
- En el estado debe existir lo minimo necesario

# Testing
npm init playwright@latest
npx playwright test
- cambiar extensió  a .config.cjs
- cambiar require del test

# Debounce
npm install just-debounce-it -E 

# Redux toolkit
npm install @reduxjs/toolkit
npm install react-redux -E  ---> El -E especifica la versión específica en el package.json