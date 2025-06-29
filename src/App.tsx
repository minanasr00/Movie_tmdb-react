import {createBrowserRouter, RouterProvider, type RouteObject } from 'react-router-dom'
import '../src/styles/App.css'
import Login from './pages/LoginPage/Login'
import Register from './pages/RegisterPage/Register'
import Layout from './pages/Layout/Layout'
import Home from './pages/HomePage/Home'
import AuthProvider from './context/Authcontext';
 import {QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query'
import Movies from './pages/Movies/Movies'
import MovieDetials from './pages/movieDetails/MovieDetials'
import PageNotFound from './pages/PageNotFound/PageNotFound'
import Series from './pages/Series/Series'
import SeriesDetails from './pages/SeriesDetails/SeriesDetails'

const routes: RouteObject[] = [
  {
    path: '/', element: <Layout></Layout>, children: [
      { path: "/", element: <Home></Home> },
      {path:"/movies" , element: <Movies></Movies>},
      {path:"/series" , element: <Series></Series>},
      { path: "/movies-details/:id", element: <MovieDetials></MovieDetials> },
      { path: "/series-details/:id", element: <SeriesDetails></SeriesDetails> },
      { path: "/login", element: <Login></Login> },
      {path:"/register",element:<Register></Register>}
      
    ]
  },
  {path : '*' ,element:<PageNotFound></PageNotFound>}
] 
const router = createBrowserRouter(routes)
const queryClient = new QueryClient()
function App() {

  return <>
    <AuthProvider>
    <QueryClientProvider client={queryClient}>
    <RouterProvider router={router}/> 
    </QueryClientProvider>
    </AuthProvider>
    </>
}

export default App
