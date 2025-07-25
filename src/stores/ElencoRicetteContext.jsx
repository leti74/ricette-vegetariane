import { createContext, useEffect } from "react";
import { useState } from "react";

export const ElencoRicetteContext = createContext({});

export const ElencoRicetteProvider = ({ children }) => {
  const [ricette, setRicette] = useState([]);

  useEffect(() => {
    const ricetteSalvate = localStorage.getItem("ricette");
    if (ricetteSalvate) {
      setRicette(JSON.parse(ricetteSalvate));
    }
  }, []);

  useEffect(() => {
    if (ricette.length > 0) {
      localStorage.setItem("ricette", JSON.stringify(ricette));
    }
  }, [ricette]);

  return (
    <ElencoRicetteContext.Provider value={{ ricette, setRicette }}>
      {children}
    </ElencoRicetteContext.Provider>
  );
};
