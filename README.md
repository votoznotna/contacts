To make the project up and running, have node.js install locally at first. Then, navigate to root folder of the project and proceed with the following:
1. run "npm install".
2. run "npm start".
4. navigate to http://localhost:4200 on any browser.

The project is made in Angular 8 with Redux pattern (NgRx). The Redux store is using local web storage for keeping serialized redux state in browser, thereby providing reload browser support. All http REST requests are using in-memory-web-api to evantually facilitate backend integration by demand.
