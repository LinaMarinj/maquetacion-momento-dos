import { createBrowserRouter, RouterProvider } from "react-router-dom";
import BuscarCliente from "../pages/private/BuscarCliente";
import BuscarProducto from "../pages/private/BuscarProducto";
import CatalogoCliente from "../pages/private/CatalogoCilente";
import CatalogoProducto from "../pages/private/CatalogoProducto";
import RegistrationForm from "../pages/guest/RegistrationForm";
import AboutUs from "../pages/guest/AboutUs";
import Home from "../pages/guest/Home";
import Login from "../pages/guest/login";
import Dashboard from "../pages/private/Dashboard";

function AppRouter() {
  const rutas = [
    {
      path: "/",
      element: <Home />,
    },
    {
      path: "/login",
      element: <Login />,
    },
    {
      path: "/buscarcliente",
      element: <BuscarCliente />,
    },
    {
      path: "/buscarproducto",
      element: <BuscarProducto />,
    },
    {
      path: "/catalogocliente",
      element: <CatalogoCliente />,
    },
    {
      path: "/catalogoproducto",
      element: <CatalogoProducto />,
    },
    {
      path: "/registration",
      element: <RegistrationForm />,
    },
    {
      path: "/aboutus",
      element: <AboutUs />,
    },
    {
      path: "/dashboard",
      element: <Dashboard />,
    },
  ];
  return <RouterProvider router={createBrowserRouter(rutas)} />;
}

export default AppRouter;
