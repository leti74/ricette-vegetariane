import "./CercaRicetta.css";
import { BarraDiRicerca } from "../components/BarraDiRicerca";
import { Footer } from "../components/Footer";
import { Navigationbar } from "../components/Navigationbar";
import { DropdownFiltro } from "../components/DropdownFiltro";
import { ElencoRicette } from "../components/ElencoRicette";
import { useRef } from "react";

export const CercaRicetta = () => {
  const elencoRef = useRef(null);
  return (
    <>
      <Navigationbar />

      <DropdownFiltro classeDropdown="Ricette" />

      <BarraDiRicerca
        scrollToRef={elencoRef}
        titoloBarraDiRicerca={"Recipe"}
        placeholderBarraDiRicerca={"Search among the recipes"}
      />

      <div className="elenco">
        <div ref={elencoRef}>
          <ElencoRicette></ElencoRicette>
        </div>
      </div>

      <Footer />
    </>
  );
};
