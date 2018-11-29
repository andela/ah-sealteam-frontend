[![Build Status](https://travis-ci.org/andela/ah-sealteam-frontend.svg?branch=develop)](https://travis-ci.org/andela/ah-sealteam-frontend)
[![Test Coverage](https://api.codeclimate.com/v1/badges/3306f79c90df8f5cc736/test_coverage)](https://codeclimate.com/github/andela/ah-sealteam-frontend/test_coverage)
[![Maintainability](https://api.codeclimate.com/v1/badges/3306f79c90df8f5cc736/maintainability)](https://codeclimate.com/github/andela/ah-sealteam-frontend/maintainability)

This repository holds the frontend for Authors Haven.
@ SEAL_TEAM

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br>
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.<br>
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.<br>
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br>
Your app is ready to be deployed!

### Formatting Code Automatically

Now we can make sure every file is formatted correctly by running the following command

```
$ npm run lint-staged
```

### Test file structure and naming conventions

- Components

Create your component folder e.g 
```
Home
```
Inside the folder, create the folder to hold the tests in the following format

```
__tests__
```
Inside it, create your file spec e.g

```
home.spec.js
```

We are putting the test files or __tests__ folder next to the code they are testing so that the relative imports appear shorter. For example, if __tests__/App.test.js and App.js are in the same folder, the test just needs to import App from '../App' instead of a long relative path. Colocation also helps find tests more quickly in larger projects.
