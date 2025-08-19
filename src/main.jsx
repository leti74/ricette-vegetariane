import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./pages/App.jsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Perche } from "./pages/Perche.jsx";
import { RicettePerIngrediente } from "./pages/RicettePerIngrediente.jsx";
import { CercaRicetta } from "./pages/CercaRicetta.jsx";
import { RicettaSelezionata } from "./pages/RicettaSelezionata.jsx";
import { ElencoRicetteProvider } from "./stores/ElencoRicetteContext.jsx";

const router = createBrowserRouter(
  [
    {
      path: "/",
      element: <App />,
    },
    {
      path: "/perche",
      element: <Perche />,
    },
    {
      path: "/perIngrediente",
      element: <RicettePerIngrediente />,
    },
    {
      path: "/cerca",
      element: <CercaRicetta />,
    },
    {
      path: "/:ricettaID",
      element: <RicettaSelezionata />,
    },
  ],
  {
    basename: "/ricette-vegetariane",
  }
);

ReactDOM.createRoot(document.getElementById("root")).render(
  <ElencoRicetteProvider>
    <React.StrictMode>
      <RouterProvider router={router} />
    </React.StrictMode>
  </ElencoRicetteProvider>
);
