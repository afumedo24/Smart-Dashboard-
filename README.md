Abdaal, Ahmed, 22110413

# Dashboard Application for WP2

[Link to MyGit Repository](https://mygit.th-deg.de/aa10413/wp2-projekt-smarthome)

## Project Description
The **Dashboard Application** is a progressive web application designed as a client-server architecture with both frontend and backend components. The project follows the Corporate Identity of THD/DIT and is usable on both mobile phones (Android, iOS) and desktop PCs. The frontend is built with Vue3 using the Composition API and routing, while the backend is implemented using ExpressJS with TypeScript. A MongoDB database is used for data storage.

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
Ensure that the MongoDB server is running on your local machine.

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
    npm run dev
    ```

## Basic Usage
To start the project, follow these steps:

After starting both applications, check the output of the frontend terminal. This will display the URL for the frontend, typically `http://localhost:5173`. Open your browser and enter this URL to access the homepage (dashboard).

To use the application:

1. Ensure you are connected to the THD network/VPN.
2. Click on the login button at the top right corner of the NavBar.
3. You will be redirected to the login page. Here, you can register a new user by clicking on the "Register" link under the login button.
4. Fill in the required data. Ensure that the password and confirm password fields match, otherwise registration will fail.
5. After registering, you will be redirected back to the login page. You can now log in with your username and password.
6. Once logged in, you are free to explore the app.

### Key Use Cases
- **Dashboard**: View the main dashboard after logging in.
- **Mensa**: Check the menu of Deggendorfer Mensa (today's or a specific day).
- **Sensors**: View current data from a Shelly sensor or get market capitalization data from companies.
- **Settings**: Update your account data or adjust sensor settings, including which sensors to use and the access frequency.

## Implementation of the Requests
This section describes how the various project requirements are implemented:

1. **Client-Server Architecture**:
    - **Frontend**: Located in `frontend/` (Vue3 with Composition API and routing)
    - **Backend**: Located in `backend/` (ExpressJS with TypeScript)

2. **Corporate Identity of THD/DIT**:
    - **Styles**: Located in `frontend/src/styles/main.css`
    - **TailwindCSS**: Used to define the color palette and fonts according to THD corporate identity. Configuration is in `tailwind.config.js`.

3. **Progressive Web App**:
    - **Responsive Design**: Implemented using TailwindCSS with breakpoints for sm, md, and lg devices. The mobile-first approach ensures all elements without breakpoints are optimized for mobile view.
    - **Dashboard Layout**: Utilizes `grid-layout-plus` library for a responsive dashboard layout, with `GridLayout` component managing layout for different screen sizes.

4. **Database**:
    - **MongoDB Configuration**: Located in `backend/utils/db.ts`. Mongoose is used to connect to the local MongoDB server using configurations from a config file.
    - **Models**: Located in `backend/src/models/`. Defines the `IUSER` interface extending `Document` for MongoDB to store user schema.

5. **REST APIs**:
    - **Internal REST API**: Implemented in `backend/src/index.ts`
    - **External REST API**: Services located in `backend/services/`

6. **Dynamic Chart**:
    - **Implementation**: Located in `frontend/components/DynamicChart.vue`
    - **Data Fetching**: Managed in `backend/controllers/sensorController.ts`

7. **Settings View**:
    - **Component**: Located in `frontend/components/SettingsView.vue`
    - **Backend Handling**: Managed in `backend/controllers/settingsController.ts`
    - **Settings JSON File**: Stored in `backend/config/settings.json`

8. **Optional Features**:
    - **Template Engine (Pug)**: Located in `backend/views/`
    - **OpenStreetMap Integration**: Located in `frontend/components/MapView.vue`

For more detailed information, please refer to the implementation files and documentation in the source code.