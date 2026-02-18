import { createBrowserRouter } from "react-router"

import RootLayout from "@/components/layouts/RootLayout.jsx"
import DashboardLayout from "@/components/layouts/DashboardLayout.jsx"
import Login from "@/components/pages/Login.jsx"
import Dashboard from "@/components/pages/Dashboard.jsx"
import NotFound from "@/components/pages/NotFound.jsx"

import {
  rootLoader,
  dashboardPageLoader,
  loginPageLoader
} from "@/utils/loader.js"
import { loginAction } from "@/utils/actions.js"

const router = createBrowserRouter([
  {
    path: "/",
    Component: RootLayout,
    children: [
      {
        index: true,
        loader: rootLoader,
      },
      {
        path: "dashboard",
        loader: dashboardPageLoader,
        Component: DashboardLayout,
        children: [
          {
            index: true,
            Component: Dashboard,
          },
        ],
      },
      {
        path: "/login",
        loader: loginPageLoader,
        Component: Login,
        action: loginAction,
      },
      {
        path: "*",
        Component: NotFound,
      },
    ],
  },
])

export default router
