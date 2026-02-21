import { createBrowserRouter } from "react-router-dom"

import RootLayout from "@/components/layouts/RootLayout"
import DashboardLayout from "@/components/layouts/DashboardLayout"
import Login from "@/components/pages/Login"
import Dashboard from "@/components/pages/Dashboard"
import Posts from "@/components/pages/Posts"
import Post from '@/components/pages/Post'
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
    id: 'root',
    path: "/",
    Component: RootLayout,
    children: [
      {
        id: 'dashboardRedirct',
        index: true,
        loader: rootLoader,
      },
      {
        id: 'dashboardLayout',
        path: "dashboard",
        loader: dashboardPageLoader,
        Component: DashboardLayout,
        children: [
          {
            id: 'dashboard',
            index: true,
            Component: Dashboard,
          },
          {
            id: 'posts-loader-route',
            path: 'posts',
            loader: postsPageLoader,
            children: [
              {
                id: 'posts',
                index: true,
                Component: Posts
              },
              {
                id: 'post',
                path: ':id',
                Component: Post,
              }
            ]
          }
        ],
      },
      {
        id: 'login',
        path: "login",
        loader: loginPageLoader,
        Component: Login,
        action: loginAction,
      },
      {
        id: 'notFound',
        path: "*",
        Component: NotFound,
      },
    ],
  },
]

const router = createBrowserRouter(routes)

export default router
