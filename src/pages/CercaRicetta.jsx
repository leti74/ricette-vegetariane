import "./CercaRicetta.css";
import { BarraDiRicerca } from "../components/BarraDiRicerca";
import { Footer } from "../components/Footer";
import { Navigationbar } from "../components/Navigationbar";
import { DropdownFiltro } from "../components/DropdownFiltro";
import { ElencoRicette } from "../components/ElencoRicette";
import { ElencoRicetteProvider } from "../stores/ElencoRicetteContext";

export const CercaRicetta = () => {
  return (
    <>
      <Navigationbar />
      <ElencoRicetteProvider>
        <DropdownFiltro classeDropdown="Ricette" />

        <BarraDiRicerca
          titoloBarraDiRicerca={"Ricette"}
          placeholderBarraDiRicerca={"Cerca fra le ricette"}
        />

        <div className="elenco-ricette">
          <ElencoRicette></ElencoRicette>
        </div>
      </ElencoRicetteProvider>

      <Footer />
    </>
  );
};
