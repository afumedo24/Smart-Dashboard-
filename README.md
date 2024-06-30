Abdaal, Ahmed, 22110413

# Dashboard Application

[Link to MyGit Repository](https://mygit.th-deg.de/aa10413/wp2-projekt-smarthome)

## Project Description
The **Dashboard Application** is a progressive web application designed as a client-server architecture with both frontend and backend components. The project adheres to the Corporate Identity of THD/DIT and is optimized for both mobile devices (Android, iOS) and desktop PCs. The frontend is built using Vue3 with the Composition API and routing, while the backend utilizes ExpressJS with TypeScript. Data is stored in a MongoDB database.

### Key Features:
- User data input form
- Static and dynamic charts
- Data from Mensa, Weather, News and Market Capitalization API
- Sensor settings view with configurations stored in a JSON file
- Integration with internal and external REST APIs

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
    - **Frontend**: Located in `frontend/` (Vue3 with Composition API and routing)
    - **Backend**: Located in `backend/` (ExpressJS with TypeScript)

2. **Corporate Identity of THD/DIT**:
    - **Styles**: Located in `frontend/src/styles/main.css`
    - **TailwindCSS**: Configuration in `tailwind.config.js` defines the color palette and fonts according to THD corporate identity.

3. **Progressive Web App**:
    - **Responsive Design**: Implemented using TailwindCSS with breakpoints for sm, md, and lg devices. The mobile-first approach ensures all elements without breakpoints are optimized for mobile view.
    - **Dashboard Layout**: Utilizes `grid-layout-plus` library for a responsive dashboard layout, managed by the `GridLayout` component for different screen sizes.

4. **Database**:
    - **MongoDB Configuration**: Located in `backend/utils/db.ts`. Mongoose is used to connect to the local MongoDB server using configurations from a config file.
    - **Models**: Located in `backend/src/models/`. Defines the `IUSER` interface extending `Document` for MongoDB to store user schema.

5. **REST APIs**:
    - **Internal REST API**: Implemented in `backend/src/index.ts`
      - Endpoints:
        - Get all users: `GET /users`
        - Get user: `GET /user`
        - Update user: `PATCH /user`
        - Delete user: `DELETE /user`
    - **External REST API**: Services located in `backend/src/services/`
      - OpenWeather API: `GET /services/weather`
      - News API: `GET /services/news`
      - Finnhub API: `GET /services/stocks`
      - Stromzähler: `GET /services/1/data`
      - OpenMensa API: Directly embedded in the frontend

6. **Charts**:
    - **Static**: Implemented in `frontend/components/BarChart.vue` and `backend/src/controller/stockController.ts`
      - Uses Finnhub API to fetch market capitalization data for random companies and displays it in a bar chart.
    - **Dynamic**: Implemented in `frontend/components/SensorComponent/SensorChart.vue`
      - Start and stop buttons control data fetching intervals from sensor URLs, displayed in a line chart.

7. **Settings View**:
    - **User Settings**: Implemented in `frontend/src/components/SettingsView.vue`
      - Allows updating user data like username and email, and deleting user accounts.
    - **Sensor Settings**: Implemented in `frontend/src/components/SettingsView.vue`
      - Reads settings from `settings.json` in the backend and updates the values accordingly.
    - **Settings JSON File**: Stored in `backend/config/settings.json`

8. **Optional Features**:
    - **Logger**: Implemented in `backend/utils/logger.ts` using Pino with Pino Pretty for formatting.
    - **JSON Web Token (JWT)**: Implemented in `backend/controllers/authController.ts`
      - Generates and verifies JWT tokens for user authentication.
    - **Pinia**: Located in `frontend/src/stores/`
      - Multiple stores handle various states: user, mensa, news, weather, sensor, and stock.
      - Each store manages state and actions related to its respective module.

### Stores in Pinia:
- **User Store**: Manages user authentication and profile data.
- **Mensa Store**: Manages data related to the mensa menu.
- **News Store**: Manages news data fetched from external APIs.
- **Weather Store**: Manages weather data fetched from external APIs.
- **Sensor Store**: Manages sensor data and settings.
- **Stock Store**: Manages stock market data fetched from external APIs.

