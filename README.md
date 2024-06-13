## Introduction

**manga-reader** is an innovative application designed to connect to various APIs, allowing users to view manga with a unique effect that mimics the experience of reading a physical book. The application leverages modern web technologies and libraries to provide a seamless and immersive reading experience. Key dependencies include @emotion/react, @mui/material, and styled-components, ensuring a high-quality, responsive, and visually appealing user interface.

## Features

- Fast development with Vite's HMR
- TypeScript for type safety and better developer experience
- ESLint configured for React and TypeScript
- Optional plugins for Babel and SWC

# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type aware lint rules:

- Configure the top-level `parserOptions` property like this:

```js
export default {
  // other rules...
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    project: ['./tsconfig.json', './tsconfig.node.json'],
    tsconfigRootDir: __dirname,
  },
};
```

- Replace `plugin:@typescript-eslint/recommended` to `plugin:@typescript-eslint/recommended-type-checked` or `plugin:@typescript-eslint/strict-type-checked`
- Optionally add `plugin:@typescript-eslint/stylistic-type-checked`
- Install [eslint-plugin-react](https://github.com/jsx-eslint/eslint-plugin-react) and add `plugin:react/recommended` & `plugin:react/jsx-runtime` to the `extends` list

## Project Configuration

To run this project, ensure you have the following configuration:

1. **Node.js**: Make sure you have Node.js installed. You can download it from the [official website](https://nodejs.org/).
2. **Dependencies**: Install the required dependencies by running `npm install` or `yarn install` in the project directory.
3. **Vite**: Vite is used as the build tool. Ensure you have Vite configured in your `package.json` scripts:
   ```json
   {
     "scripts": {
       "dev": "vite",
       "build": "vite build",
       "serve": "vite preview"
     }
   }
   ```
4. **TypeScript**: Ensure TypeScript is properly configured. The `tsconfig.json` should include the necessary compiler options for React and Vite.
5. **ESLint**: Make sure ESLint is configured with the recommended rules for React and TypeScript as outlined in the section above.

To start the development server, run:

```bash
npm run dev
```

or

```bash
yarn dev
```

## Contributing

Contributions are welcome! Please follow these steps to contribute:

1. Fork the repository
2. Create a new branch (\`git checkout -b feature/your-feature\`)
3. Commit your changes (\`git commit -m 'Add some feature'\`)
4. Push to the branch (\`git push origin feature/your-feature\`)
5. Open a pull request

## Task List

Here are the tasks that need to be developed for this project:

- [ ] terminnar readme pa comenzar el desarrollo del manga-reader
- [ ] establecer las task o features por ser desarrolladas

las de abajo las hizo chatgpt

- [ ] Setup project structure and initialize with Vite
- [ ] Configure ESLint with type-aware rules and recommended plugins
- [ ] Implement basic React components and set up routing
- [ ] Integrate state management (e.g., Redux or Context API)
- [ ] Set up unit testing with Jest and React Testing Library
- [ ] Add styles using CSS modules or a CSS-in-JS solution
- [ ] Implement responsive design for various screen sizes
- [ ] Optimize build for production deployment
- [ ] Write documentation and usage guides
- [ ] Set up continuous integration and deployment (CI/CD) pipeline

Feel free to adjust or add tasks as needed to match your project requirements.
