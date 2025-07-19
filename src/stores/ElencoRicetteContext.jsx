import { createContext } from "react";
import { useState } from "react";

export const ElencoRicetteContext = createContext({});

export const ElencoRicetteProvider = ({ children }) => {
  const [ricette, setRicette] = useState([]);

  return (
    <ElencoRicetteContext.Provider value={{ ricette, setRicette }}>
      {children}
    </ElencoRicetteContext.Provider>
  );
};
