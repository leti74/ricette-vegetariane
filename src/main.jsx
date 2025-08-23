import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./pages/App.jsx";
import { Perche } from "./pages/Perche.jsx";
import { RicettePerIngrediente } from "./pages/RicettePerIngrediente.jsx";
import { CercaRicetta } from "./pages/CercaRicetta.jsx";
import { RicettaSelezionata } from "./pages/RicettaSelezionata.jsx";
import { ElencoRicetteProvider } from "./stores/ElencoRicetteContext.jsx";
import { HashRouter, Routes, Route } from "react-router-dom";

ReactDOM.createRoot(document.getElementById("root")).render(
  <ElencoRicetteProvider>
    <React.StrictMode>
      <HashRouter>
        <Routes>
          <Route path="/" element={<App />} />
          <Route path="/perche" element={<Perche />} />
          <Route path="/perIngrediente" element={<RicettePerIngrediente />} />
          <Route path="/cerca" element={<CercaRicetta />} />
          <Route path="/:ricettaID" element={<RicettaSelezionata />} />
        </Routes>
      </HashRouter>
    </React.StrictMode>
  </ElencoRicetteProvider>
);
