import {createBrowserRouter, RouterProvider, type RouteObject } from 'react-router-dom'
import '../src/styles/App.css'
import Login from './pages/LoginPage/Login'
import Register from './pages/RegisterPage/Register'
import Layout from './pages/Layout/Layout'
import Home from './pages/HomePage/Home'
import AuthProvider from './context/Authcontext';

const routes: RouteObject[] = [
  {
    path: '/', element: <Layout></Layout>, children: [
      { path: "/", element: <Home></Home> },
      { path: "/login", element: <Login></Login> },
      {path:"/register",element:<Register></Register>}
      
  ] }
] 
const router = createBrowserRouter(routes)
function App() {

  return <>
    <AuthProvider>
    <RouterProvider router={router}/> 
    </AuthProvider>
    </>
}

export default App
