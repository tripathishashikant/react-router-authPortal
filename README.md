# 🔐 React Router Auth Portal

![React](https://img.shields.io/badge/react-%2320232d.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB)
![React Router](https://img.shields.io/badge/React_Router-CA4245?style=for-the-badge&logo=react-router&logoColor=white)
![Vite](https://img.shields.io/badge/vite-%23646CFF.svg?style=for-the-badge&logo=vite&logoColor=white)

A simple authentication portal built with React Router v7, demonstrating protected routes and authentication flows using loaders and actions.

## 🚀 Features

- **Authentication**: Simple username/password login simulation using `localStorage`.
- **Protected Routes**: The Dashboard route is protected and requires authentication.
- **Responsive Layout**: Side navigation and dashboard content are vertically aligned and side-by-side on tablet and desktop.
- **Redirects**:
  - Unauthenticated users are redirected to Login when accessing protected routes.
  - Authenticated users are redirected to Dashboard when accessing Login.
- **Data APIs**: Utilizes React Router's `loader` and `action` for data handling and route protection.

## 🛠️ Getting Started

1. **Install dependencies:**

    ```bash
    npm install
    ```

2. **Run the development server:**

    ```bash
    npm run dev
    ```

## 🔑 Credentials

| Field | Value |
| :--- | :--- |
| **Username** | `admin` |
| **Password** | `123` |
