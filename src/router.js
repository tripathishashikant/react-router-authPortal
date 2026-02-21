import { createBrowserRouter } from "react-router-dom"

import RootLayout from "@/components/layouts/RootLayout"
import DashboardLayout from "@/components/layouts/DashboardLayout"
import Login from "@/components/pages/Login"
import Dashboard from "@/components/pages/Dashboard"
import Posts from "@/components/pages/Posts"
import NotFound from "@/components/pages/NotFound"

import {
  rootLoader,
  dashboardPageLoader,
  loginPageLoader,
  postsPageLoader
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
          {
            path: 'posts',
            loader: postsPageLoader,
            Component: Posts
          }
        ],
      },
      {
        path: "login",
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
