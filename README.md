## Goal
Goal is to build a React Native app that displays and filters a list of users. Designs for the application are provided, and the user list and filtering should be achieved by connecting to a provided Graphql endpoint. We are most interested in the way you structure your code, your use of typescript, and your approach to testing.

### Requirements
- [x] Your app should display a list of users that are returned by the listZellerCustomers query. The graphql schema you will need, and the connection details can be found in aws-exports.js and schema.gql
- [x] Your app should have a list of selectable user types that include Admin and Manager. Selecting a user type should perform a query against listZellerCustomers using that user type as a filter.
- [x] Your app should run on IOS or android
- [x] Designs for the user feature are provided below (4). If you wish to add navigation, navigation bars, drawers etc, feel free to do so.
### Bonus Points
These features are absolutely not required, however if you finish your project eary and wish to continue, here are some ideas

- [x] Implemenent a text search box that filters users by name
- [x] Implement a pull to refresh on the list
- [ ] Implement App navigation with a second, empty homescreen

## Run the Backend Server
- Go to mock-server: `cd mock-server`.
- Install dependencies: `yarn install` (or `npm install`).
- Run: `yarn start` (or `npm start`).

## Run the App
- Setting up the development environment: https://reactnative.dev/docs/environment-setup.

- Install dependencies: `yarn install` (or `npm install`).

- Run on Android: `yarn android` (or `npm run android`).

- Run on iOS: `yarn ios` (or `npm run ios`).

- Run on both Android & iOS: `yarn mobile` (or `npm run mobile`).

- Run server: `yarn start`. Then use app **Expo Go** on your mobile and scan QR code on the terminal.

## Test the App
- `yarn test` (or `npm run test`).
## GraphQL Codegen
- `yarn generate` (or `npm run generate`).

### Preview


https://github.com/CodeByRahulSaini/customer-list-app/assets/30212408/0209c03a-4d3e-4f77-ac57-429b1d3727b3



