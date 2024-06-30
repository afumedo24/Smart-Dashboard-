Abdaal, Ahmed, 22110413

# Dashboard Application for WP2 

[Link to MyGit Repository](https://mygit.th-deg.de/aa10413/wp2-projekt-smarthome)

## Project Description
The **THD/DIT Client-Server Application** is a progressive web application designed as a client-server architecture with both frontend and backend components. The project follows the Corporate Identity of THD/DIT and is usable on both mobile phones (Android, iOS) and desktop PCs. The frontend is built with Vue3 using the Composition API and routing, while the backend is implemented using ExpressJS with TypeScript. A MongoDB database is used for data storage.

Key features include:
- User data input form
- Static and dynamic charts
- Sensor settings view with configurations stored in a JSON file
- Integration with both internal and external REST APIs

## Prerequisites
To run this project, you will need the following software installed:

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
Follow these steps to install the project:

1. Clone the repository:
    ```bash
    git clone https://mygit.th-deg.de/aa10413/wp2-projekt-smarthome
    ```
2. Navigate to the project directory:
    ```bash
    cd wp2-projekt-smarthome
    ```

### Backend
Make sure that the MongoDB server is already running on your local machine.

1. Move to the backend directory:
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

### Frontend
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
    npm run dev ```

## Basic Usage
To start the project, follow these steps:
After starting both applications, look at the output of the frontend terminal. This will display the URL for the frontend, normally `http://localhost:5173`. Open your browser and type in this URL. You will see the homepage (dashboard). 

To use the application:

1. Click on the login button at the top right corner of the NavBar.
2. You will be redirected to the login page. Here, you can register a new user for yourself by clicking on the "Register" link under the login button.
3. Fill in the required data. Ensure that the password and confirm password fields are identical, or else you cannot register.
4. After registering, you will be redirected back to the login page. Now, you can log in with your username and password.
5. Once logged in, you are free to explore the whole app. 

### Key Use Cases
- **Dashboard**: View the main dashboard after logging in.
- **Mensa**: Check the menu of Deggendorfer Mensa (todays or a specific day).
- **Sensors**: View current(strom) data from a Shelly sensor or get market capitalization data from companies.
- **Settings**: Update your account data or adjust sensor settings, including which one to use and the access frequency.

## Implementation of the Requests
This section describes how the various project requirements are implemented:

1. **Client-Server Architecture**:
    - **Frontend**: `src/frontend/` (Vue3 with Composition API and routing)
    - **Backend**: `src/backend/` (ExpressJS with TypeScript)

2. **Corporate Identity of THD/DIT**:
    - **Styles**: `src/frontend/assets/css/` (using plain CSS or a CSS framework)

3. **Progressive Web App**:
    - **Responsive Design**: Ensured through CSS and media queries.

4. **Database**:
    - **MongoDB Configuration**: `src/backend/config/db.ts`
    - **Models**: `src/backend/models/`

5. **REST APIs**:
    - **Internal REST API**: `src/backend/routes/`
    - **External REST API (openmensa.org)**: `src/backend/services/externalApi.ts`

6. **Dynamic Chart**:
    - **Implementation**: `src/frontend/components/DynamicChart.vue`
    - **Data Fetching**: `src/backend/controllers/sensorController.ts`

7. **Settings View**:
    - **Component**: `src/frontend/components/SettingsView.vue`
    - **Backend Handling**: `src/backend/controllers/settingsController.ts`
    - **Settings JSON File**: `src/backend/config/settings.json`

8. **Optional Features**:
    - **Template Engine (Pug)**: `src/backend/views/`
    - **OpenStreetMap Integration**: `src/frontend/components/MapView.vue`
