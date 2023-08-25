# Vite + ReactJS + typescript + tailwind
Projeto realizado no curso de ReactJS

## Instalation
- `npm install`

## Run project
- ` npm run dev`

# Vite + ReactJS + typescript + tailwind
Projeto realizado no curso de ReactJS

## Instalation
- `npm install`

## Run project
- ` npm run dev`

Este modelo fornece uma configuração mínima para fazer o React funcionar no Vite com HMR e algumas regras ESLint.

Atualmente, dois plugins oficiais estão disponíveis:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) usa [Babel](https://babeljs.io/) para atualização rápida
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) usa [SWC](https://swc.rs/) para atualização rápida

## Expandindo a configuração do ESLint

Se você estiver desenvolvendo um aplicativo de produção, recomendamos atualizar a configuração para habilitar as regras de fiapos com reconhecimento de tipo:

- Configure a propriedade 'parserOptions' de nível superior da seguinte forma:

```js
   parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    project: ['./tsconfig.json', './tsconfig.node.json'],
    tsconfigRootDir: __dirname,
   },
```

- Substituir `plugin:@typescript-eslint/recommended` to `plugin:@typescript-eslint/recommended-type-checked` ou `plugin:@typescript-eslint/strict-type-checked`
- Adicionar opcionalmente `plugin:@typescript-eslint/stylistic-type-checked`
- Instalar [eslint-plugin-react](https://github.com/jsx-eslint/eslint-plugin-react) e adicionar `plugin:react/recommended` & `plugin:react/jsx-runtime` para o `extends` lista