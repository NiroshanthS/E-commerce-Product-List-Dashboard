# E-commerce Product List Dashboard

# Project Overview

This project is a React.js application showcasing a product list dashboard with a modern effect and pagination features. Data is loaded dynamically from a JSON file, and optional Redux integration is provided for advanced state management.

# Requirements

Node.js and npm (or yarn) installed
Basic understanding of React.js

# Component Structure

Header: Displays logos, navigation elements, etc.
Body: Houses the main product list container.
Footer: Includes legal information, copyright, etc.
ProductCard: Individual component for each product with details and buttons.

# Features:

Product Cards: Displaying ID, name, price, quantity, "Edit" & "View" buttons.
Data Storage: Dynamic data retrieval from JSON file.
Pagination: Improved loading efficiency and navigation.
Component Separation: Clear organization and maintainability.
Optional Redux Integration: Scalable state management.

# Application Architecture

# Without Redux:

React components directly fetch data from the JSON file.
State management handled within individual components.

# With Redux:

Redux store holds the product list data and other application state.
Components connect to the store for accessing and updating data.
Actions and reducers manage data flow and updates.

# Getting Started with Create React App and Redux

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app), using the [Redux](https://redux.js.org/) and [Redux Toolkit](https://redux-toolkit.js.org/) template.

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

# Disclaimer: 
This information is provided for guidance only. Adapt and modify it based on your specific project needs and preferences.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).
