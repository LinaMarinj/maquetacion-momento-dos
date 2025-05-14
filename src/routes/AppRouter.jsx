import { createBrowserRouter, RouterProvider } from "react-router-dom";
import BuscarCliente from "../components/BuscarCliente";
import BuscarProducto from "../components/BuscarProducto";
import CatalogoCliente from "../components/CatalogoCilente";
import CatalogoProducto from "../components/CatalogoProducto";
import Home from "../pages/guest/Home";
import Login from "../pages/guest/login";

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
  ];
  return <RouterProvider router={createBrowserRouter(rutas)} />;
}

export default AppRouter;
