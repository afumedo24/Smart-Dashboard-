# Dashboard Application

[Link to MyGit Repository](https://mygit.th-deg.de/aa10413/wp2-projekt-smarthome)

## Project Description
The **Dashboard Application** is a progressive web application designed as a client-server architecture with both frontend and backend components. The project adheres to the Corporate Identity of THD/DIT and is optimized for both mobile devices (Android, iOS) and desktop PCs. The frontend is built using Vue3 with the Composition API and routing, while the backend utilizes ExpressJS with TypeScript. Data is stored in a MongoDB database.

### Key Features:
- Responsive Dashboard View
- User Input Form for Data
- User Authentication with JWT
- Static and Dynamic Charts
- Integration of External APIs for Mensa, Weather, News, and Stocks (Market Capitalization)
- Internal REST API with CRUD functionalities
- Multiple Pinia Stores for State Management
- Sensor Settings Page with Configurations stored in a JSON file

## Prerequisites
Ensure you have the following software installed:

### General
- **NodeJS**: v14.17.0 or higher
- **npm**: v6.14.13 or higher
- **MongoDB**: v4.4.6 or higher

### Frontend
- **Vue**: ^3.4.21
- **Vite**: ^5.2.8
- **Vue Router**: ^4.3.0
- **Pinia**: ^2.1.7
- **TailwindCSS**: ^3.4.3

### Backend
- **ExpressJS**: ^4.19.2
- **TypeScript**: ^5.4.3
- **Nodemon**: ^3.1.0
- **Mongoose**: ^8.2.3

## Installation
Follow these steps to set up the project:

1. Clone the repository:
    ```bash
    git clone https://mygit.th-deg.de/aa10413/wp2-projekt-smarthome
    ```
2. Navigate to the project directory:
    ```bash
    cd wp2-projekt-smarthome
    ```

### Backend Setup
Ensure that the MongoDB server is running on your local machine.

1. Navigate to the backend directory:
    ```bash
    cd backend
    ```
2. Install the dependencies:
    ```bash
    npm install
    ```
3. Start the backend server:
    ```bash
    npm run start
    ```

### Frontend Setup
1. Open a new terminal window and navigate to the frontend directory:
    ```bash
    cd wp2-projekt-smarthome/frontend
    ```
2. Install the dependencies:
    ```bash
    npm install
    ```
3. Start the frontend development server:
    ```bash
    npm run dev
    ```

## Basic Usage
To start the project, follow these steps:

1. Ensure you are connected to the THD network/VPN.
2. Check the frontend terminal output for the URL, typically `http://localhost:5173`. Open this URL in your browser to access the homepage (dashboard).
3. Click the login button at the top right corner of the NavBar.
4. Register a new user by clicking the "Register" link under the login button and filling in the required data. Ensure that the password and confirm password fields match.
5. After registering, you will be redirected back to the login page. Log in with your new username and password.
6. Once logged in, explore the app features.

### Key Use Cases
- **Dashboard**: View the main dashboard after logging in.
- **Mensa**: Check the menu of Deggendorfer Mensa (today's or a specific day).
- **Sensors**: View current data from a Shelly sensor or get market capitalization data from companies.
- **Settings**: Update your account data or adjust sensor settings, including which sensors to use and the access frequency.

## Implementation Details
This section describes how various project requirements are implemented:

1. **Client-Server Architecture**:
    - **Frontend**: Located in `frontend/src` (Vue3 with Composition API and routing)
      - `assets`: Contains fonts and images used in the project.
      - `components`: Houses Vue components that are embedded in pages.
      - `router`: Manages routing to different pages.
      - `services`: Includes types and the Axios instance for the API and the OpenMensa API.
      - `stores`: Centralized state management using Pinia, facilitating data management across components.
      - `styles`: Defines basic TailwindCSS utilities for use throughout the application.
      - `views`: Contains the individual pages displayed in the browser.
      - `App.vue`: The root component.
      - `main.ts`: Entry point for running the application.

    - **Backend**: Located in `backend/` (ExpressJS with TypeScript)
      - `config`: Contains API keys, URIs, and `settings.json`.
      - `src`:
        - `controllers`: Methods that handle requests from routes and convert them to HTTP responses.
        - `middleware`: A bridge between the client and the server.
        - `models`: Defines data structures.
        - `routes`: Manages routing throughout the server.
        - `services`: Functions for fetching data from external APIs.
        - `index.ts`: Entry point for running the server.
      - `utils`: Contains helper functions like the database connection, a logger instance, and utility functions to simplify development tasks.

2. **Corporate Identity of THD/DIT**:
    - **Styles**: Implemented in `frontend/src/styles/main.css`
    - **TailwindCSS**: Configuration in `tailwind.config.js` defines the color palette and fonts according to THD corporate identity.
        - Font: Saira
        - Colors:
            - Main: thd-blau (#1A4273), donau-blau (#009FE3), light-grey (#DADADA)
            - Added colors for accents: darkShade (#12151A), darkAccent (#4973B1)

3. **Progressive Web App**:
    - **Responsive Design**: Implemented using TailwindCSS with breakpoints for sm, md, and lg devices. The mobile-first approach ensures all elements without breakpoints are optimized for mobile view.
    - **Dashboard Layout**: Utilizes `grid-layout-plus` library for a responsive dashboard layout, managed by the `GridLayout` component for different screen sizes.

4. **Database**:
    - **MongoDB Configuration**: Implemented in `backend/utils/db.ts`. Mongoose is used to connect to the local MongoDB server using the `db_uri` from a config file.
    - **Models**: Implemented in `backend/src/models/`. Defines the `IUSER` interface extending `Document` for MongoDB to store user schema.

5. **REST APIs**:
    - **Internal REST API**: Implemented in `backend/src/index.ts`. Created REST API with the following endpoints (can only be executed with a valid JWT token, which is obtained after login):
        - Get all users: `GET /users`
            - Retrieves all users with the `find()` method.
        - Get user: `GET /user`
            - Retrieves a user with `findById()` method by extracting the userId from the body.
        - Update user: `PATCH /user`
            - Updates a user with `findByIdAndUpdate()` method and stores the new values.
        - Delete user: `DELETE /user`
            - Deletes a user with `findByIdAndDelete()` method.
    - **External REST API**: Services located in `backend/src/services/`. The functions in services fetch data with Axios. These service functions are called by their respective controller functions:
        - OpenWeather API: `GET /services/weather`
        - News API: `GET /services/news`
        - Finnhub API: `GET /services/stocks`
        - Stromzähler: `GET /services/1/data`
        - OpenMensa API: Directly embedded in the frontend

6. **Charts**:
    - **Static**: Implemented in `frontend/components/BarChart.vue`, `backend/src/services/stocksapi.ts` and `backend/src/controller/stockController.ts`
        - Uses Finnhub API to fetch market capitalization data for 6 random companies in the services file.
        - The function is called by the stockController, which sends the data to the frontend.
        - The data is stored in a stocks store and displayed in the BarChart component.
    - **Dynamic**: Implemented in `frontend/components/SensorComponent/SensorChart.vue`, `backend/src/services/sensorsapi.ts` and `backend/src/controller/sensorsController.ts`
        - Fetches the current (strom) from one of the two sensors and extracts only the current value.
        - The function is called by the sensorsController, which sends the data to the frontend.
        - The data is stored in a sensor store and displayed in the LineChart component.
        - In the LineChart component, there are two buttons that start and stop the loop for data fetching.
        - The data fetching is done in intervals of a specific frequency.
        - This frequency is read from the settings.json.

7. **Settings View**:
    - **User Settings**: Implemented in `frontend/src/components/SettingsView.vue`
        - Sends requests to the respective endpoint with the correct HTTP method.
        - Allows updating user data like username and email, and deleting user accounts.
    - **Sensor Settings**: Implemented in `frontend/src/components/SettingsView.vue`
        - Reads settings from `settings.json` in the backend and can also update the values accordingly.
        - The settings are also stored in the sensor store.

8. **Optional Features**:
    - **Logger**: Implemented in `backend/utils/logger.ts` using Pino with Pino Pretty for formatting.
    - **JSON Web Token (JWT)**: Implemented in `
    

### Sources
- [Modal Component](https://medium.com/%2540romanvinnick/vue3-composition-api-creating-a-reusable-modal-component-with-outside-click-handling-43e830d289c1)
- [REST Server](https://www.youtube.com/watch?v%253Db8ZUb_Okxro)
- [Pinia Store](https://blog.logrocket.com/complex-vue-3-state-management-pinia/)
- [JWT](https://dvmhn07.medium.com/jwt-authentication-in-node-js-a-practical-guide-c8ab1b432a49)
- [Grid Dashboard](https://grid-layout-plus.netlify.app/guide/installation.html)
- frontend/src/assets/cut.png - Image by valeria_aksakova on [Freepik](https://www.freepik.com/free-photo/golden-cutlery-with-textile-plate-dark-background-top-view_19182711.htm)
- Used Copilot for:
    - Mapping the components with IDs to the dashboard
    - Setting the Date to the previous or the next day
    - The auto-carousel functionality at the NewsCard