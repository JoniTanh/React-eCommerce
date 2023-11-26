# React e-Commerce App w/ Node.js, Tailwind

## About

This project is a web-based e-commerce application developed using React and Node.js. It features a user-friendly interface where users can browse products, add them to their cart, and place orders. The unique aspect of this application lies in its data handling; the products displayed in the store are fetched from a JSON file hosted on the backend, and orders placed by users are also stored in a JSON file on the backend.

Key technical aspects of the application include the use of Context and Reducer for state management, along with custom hooks to enhance functionality and maintain clean, readable code.

**Future Development Goals**

While the current version of the application serves as a robust foundation, there are several areas targeted for future development:

- **Database Integration:** Transitioning from JSON file storage to a more scalable and robust database system.
- **Enhanced Responsiveness:** Improving the application's responsiveness and user experience on mobile devices.
- **User Authentication:** Implementing user authentication to provide personalized experiences such as order history, user profiles, and more.
  These enhancements are aimed at elevating the user experience and broadening the application's capabilities.

## Project Setup

Follow these instructions to set up and run the application locally:

**Frontend Setup**

**1. Navigate to the Frontend Directory:** Open your command line and navigate to the project's frontend directory with the following command:

```
cd frontend
```

**2. Install Dependencies:** Install all necessary dependencies by running:

```
npm install
```

This command downloads and installs all dependencies defined in the `package.json` file.

**3. Start the Frontend Development Server:** Launch the development server by running either:

```
npm run dev
```

or in a production environment:

```
npm run start
```

After executing these commands, the application will be up and running, accessible in your browser.

**Backend Setup**

**1. Navigate to the Backend Directory:** Open a new command line window and navigate to the project's backend directory with the following command:

```
cd backend
```

**2. Create a .env File in the Backend Folder:** Create the file and add necessary configurations, for example:

```
PORT=3001
```

This file will contain your environment variables such as the port number.

**3. Install Backend Dependencies:** Install the necessary dependencies by running:

```
npm install
```

This command downloads and installs all dependencies defined in the `package.json` file.

**4. Start the Backend Development Server:** Launch the development server by running either:

```
npm run dev
```

or in a production environment:

```
npm run start
```

After executing these commands, the backend server will be up and running, connected to your frontend application.

### React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh
