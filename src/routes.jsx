import { createBrowserRouter } from "react-router-dom"
import Home from "./pages/Home"
import About from "./pages/About"
import Contact from "./pages/Contact"
import Dashboard from "./pages/Dashboard"

export const routes = createBrowserRouter([
    {
        path : '/',
        element: <Home /> ,
    },
    {
        path : '/about',
        element: <About /> ,
    },
    {
        path : '/contact',
        element: <Contact /> ,
    },
    {
        path : '/dashboard',
        element: <Dashboard /> ,
    },
])