# React Router Auth Portal

A simple authentication portal built with React Router v7, demonstrating protected routes and authentication flows using loaders and actions.

## Features

- **Authentication**: Simple username/password login simulation using `localStorage`.
- **Protected Routes**: The Dashboard route is protected and requires authentication.
- **Redirects**:
  - Unauthenticated users are redirected to Login when accessing protected routes.
  - Authenticated users are redirected to Dashboard when accessing Login.
- **Data APIs**: Utilizes React Router's `loader` and `action` for data handling and route protection.

## Getting Started

1. Install dependencies:

    ```bash
    npm install
    ```

2. Run the development server:

    ```bash
    npm run dev
    ```

## Credentials

- **Username**: `admin`
- **Password**: `123`
