# Foodify

Foodify is an innovative web application designed specifically for restaurants to streamline the order management process. This app enables customers to place orders directly from their tables, notifies chefs about incoming orders, and alerts customers when their orders are ready. It also features a comprehensive admin dashboard for managing and monitoring the restaurant's operations.

## Features

**For Customers:**

*   Table-Side Ordering: Customers can browse the menu and place orders from their table.
*   Order Notifications: Customers receive a notification when their order is ready.

**For Chefs:**

*   Real-Time Order Updates: Chefs can view new orders as they are placed.
*   Order Status Management: Update order status to notify customers when their food is ready.

**For Admins:**

*   Dashboard: A centralized dashboard for managing restaurant operations.
*   Order Tracking: Monitor all active and completed orders.
*   Analytics: Insights into restaurant performance (e.g., popular items, peak hours).

## Technologies Used

**Frontend**

*   Angular: Framework for building the application.
*   SCSS: For enhanced styling capabilities.

**Backend**

*   Node.js: Server-side runtime environment.
*   Express.js: Framework for creating RESTful APIs.

**Database**

*   MongoDB: For storing orders, menu items, and user data.

**Others**

*   Zone.js: For handling asynchronous operations.
*   Karma: For unit testing.


## Demo
Check out the live demo of this project here: [Foodify](https://foodify-three.vercel.app)

## Installation

Follow these steps to run the project locally:

1.  Clone the repository:

    ```bash
    git clone https://github.com/muhammadhamx/Foodify.git
    ```

2.  Navigate to the project directory:

    ```bash
    cd foodify
    ```

3.  Install dependencies:

    ```bash
    npm install
    ```

4.  Start the development server:

    ```bash
    npm start
    ```

5.  Open your browser and go to:

    http://localhost:4200

## Usage

**Customer Interface:**

*   Browse the menu and add items to your order.
*   Submit the order and wait for a notification when it is ready.

**Chef Interface:**

*   View incoming orders in real-time.
*   Update the status of each order as it progresses.

**Admin Dashboard:**

*   Monitor all orders and restaurant activity.
*   Gain insights into performance through analytics.

## Project Structure

src/
├── app/
│   ├── components/       # Reusable components (menu, order notifications, etc.)
│   ├── services/         # Services for handling API requests and state management
│   ├── models/           # TypeScript models for data structures
│   └── app.module.ts     # Main Angular module
├── assets/               # Static assets (images, icons, etc.)
├── styles/               # Global SCSS styles
└── main.ts               # Application entry point


## Scripts

*   `npm start`: Start the development server.
*   `npm build`: Build the project for production.
*   `npm test`: Run unit tests.

## Configurations

**Environments**

*   Development: Configured for local testing with source maps enabled.
*   Production: Optimized builds with minification and output hashing.

## Future Enhancements

*   Mobile App Integration: Develop a mobile-friendly version for customers and staff.
*   Multi-Language Support: Add localization features for diverse users.
*   Reservation System: Enable table reservations directly from the app.
*   Payment Gateway: Integrate online payment options.

## License

This project is licensed under the MIT License.

## Contact

For any queries or suggestions, feel free to reach out:

Email: muhammadhamzasajid6@gmail.com
GitHub: muhammadhamx

Thank you for using Foodify! We hope it enhances your dining experience.
