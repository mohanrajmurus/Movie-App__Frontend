import { RouterProvider, createBrowserRouter } from "react-router-dom"
import Layout from "../pages/Layout"
import HomePage from "../pages/HomePage"
import React from "react"
import MovieDetailsPage from "../pages/MovieDetailsPage"
import PostMovieDetails from "../pages/admin/PostMovieDetails"
import DeleteMovie from "../pages/admin/DeleteMovie"
import LoginPage from "../pages/LoginPage"
import RegisterUser from "../pages/RegisterUser"
import ResetPassword from "../pages/ResetPassword"
import PrivateRouter from '../components/PrivateRouter'
import MovieSummary from "../components/MovieSummary"
import MovieReview from "../components/MovieReview"
const Router = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          index: true,
          element: <HomePage />,
        },
        {
          element:<PrivateRouter/>,
          children:[
            {
              path: "movie/:id",
              element: <MovieDetailsPage />,
              /* children:[
                {
                  path:'details',
                  element:<MovieSummary/>
                },
                {
                  path:'reviews',
                  element:<MovieReview/>
                }
              ] */
            },
          
          ]
        },
        {
          path: "admin",
          children: [
            {
              index: true,
              element: <PostMovieDetails />,
            },
            {
              path: "movie",
              element: <DeleteMovie />,
            },
          ],
        },
        {
          path: "user",
          children: [
            {
              index: true,
              element: <RegisterUser />,
            },
            {
              path: "login",
              element: <LoginPage />,
            },
            {
              path: "resetpassword",
              element: <ResetPassword />,
            },
          ],
        },
      ],
    },
  ])
  return <RouterProvider router={router} />
}

export default Router
