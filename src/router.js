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

export const routes = [
  {
    name: 'root',
    path: "/",
    Component: RootLayout,
    children: [
      {
        name: 'dashboardRedirct',
        index: true,
        loader: rootLoader,
      },
      {
        name: 'dashboardLayout',
        path: "dashboard",
        loader: dashboardPageLoader,
        Component: DashboardLayout,
        children: [
          {
            name: 'dashboard',
            index: true,
            Component: Dashboard,
          },
          {
            name: 'posts',
            path: 'posts',
            loader: postsPageLoader,
            Component: Posts
          }
        ],
      },
      {
        name: 'login',
        path: "login",
        loader: loginPageLoader,
        Component: Login,
        action: loginAction,
      },
      {
        name: 'notFound',
        path: "*",
        Component: NotFound,
      },
    ],
  },
]

const router = createBrowserRouter(routes)

export default router
