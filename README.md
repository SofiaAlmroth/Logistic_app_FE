## Logistic App Frontend
This is the frontend of the Logistic App, designed for managing orders, sales, and inventory in a logistics system. The frontend interacts with the backend API to provide a seamless user experience for tracking sales, displaying historical data, and managing logistics efficiently.

## Important Note
To use this project fully, make sure both the backend and frontend are running. The backend repository can be found [here](https://github.com/SofiaAlmroth/logistic_app_BE).

Also, the database is currently empty, so data management and certain features might not work as expected until the backend and database are properly set up.

## Features
- **Order Management**: Create, update, and view order history for both sales and purchases.
- **Sales Dashboard**: Displays graphical data using bar charts to track sales performance and history.
- **Inventory Management**: View and manage the stock of items in the inventory.
- **User Authentication**: Login, register, and profile pages for user management.

## Tech Stack
- **React**: Frontend framework for building user interfaces.
- **TypeScript**: Strong typing for better code quality and maintainability.
- **Tailwind CSS**: Utility-first CSS framework for fast and flexible styling.
- **Chart.js**: For displaying graphs and charts of sales and inventory data.

## Pages
- **Order Management Page**: Allows users to create and manage orders (sales and purchases).
- **Dashboard**: Displays charts for tracking sales history, profit margins, and other key logistics metrics.
- **Inventory Management Page**: Lists all products and allows users to update quantities and track stock levels.

## API Integration
This frontend interacts with the backend API to perform CRUD operations on orders and sales data. Key API endpoints include:

- **GET /orders**: Fetch a list of all orders (both sales and purchases).
- **POST /orders**: Create a new order (either sales or purchase).
- **GET /orders/:id**: Fetch details for a specific order.
- **PUT /orders/:id**: Update an order.
- **DELETE /orders/:id**: Delete an order.
- **GET /sales**: Fetch sales history and profit margin data.
- **POST /sales**: Create a new sale.
- **GET /sales/:id**: Fetch details for a specific sale.
- **PUT /sales/:id**: Update a sale.
- **DELETE /sales/:id**: Delete a sale.


## Installation and Setup
To run this project locally, follow these steps:

1. Clone the repository
```bash
git clone https://github.com/SofiaAlmroth/logistic_app_FE.git
cd logistic_app_FE
```

2. Install dependencies
```bash
npm install
```

3. Start the development server
```bash
npm run dev
```

The development server should now be running at http://localhost:5173.

4. Build for production
To build the project for production, run:
```bash
npm run build
```

This will generate the production-ready files in the dist/ directory.

## Backend Setup
Make sure the backend is set up and running. Clone the backend repository and follow the setup instructions provided in the backend repository's README. The backend can be found here https://github.com/SofiaAlmroth/logistic_app_BE.

# Backend Environment Variables:
Ensure that the frontend points to the correct backend URL in your .env file:

```env
REACT_APP_BACKEND_URL=http://localhost:5999  # or the production URL of your backend
```

## Deployment
The project can be deployed to any static hosting platform, such as Vercel, Netlify, or Render. After running the build command, deploy the contents of the `dist/` folder.

Note: Ensure the backend is running on a public server when deploying to production.

## Project Status
Under Development: This project is not yet complete, and certain features (like data management) may not work as expected due to the current state of the backend and empty database.

Future Improvements
- Error Handling: Improve error handling for failed API requests.
- Search and Filtering: Add more advanced search and filtering functionality for managing orders and inventory.
- React Query: For managing server-side data fetching and caching.

