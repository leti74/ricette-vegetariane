import "./CercaRicetta.css";
import { BarraDiRicerca } from "../components/BarraDiRicerca";
import { Footer } from "../components/Footer";
import { Navigationbar } from "../components/Navigationbar";
import { DropdownFiltro } from "../components/DropdownFiltro";
import { ElencoRicette } from "../components/ElencoRicette";

export const CercaRicetta = () => {
  return (
    <>
      <Navigationbar />

      <DropdownFiltro classeDropdown="Ricette" />

      <BarraDiRicerca
        titoloBarraDiRicerca={"Recipe"}
        placeholderBarraDiRicerca={"Search among the recipes"}
      />

      <div className="elenco-ricette">
        <ElencoRicette></ElencoRicette>
      </div>

      <Footer />
    </>
  );
};
