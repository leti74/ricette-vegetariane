import { BarraDiRicerca } from "../components/BarraDiRicerca";
import { Navigationbar } from "../components/Navigationbar";
import { ElencoRicette } from "../components/ElencoRicette";
import { ElencoRicetteProvider } from "../stores/ElencoRicetteContext";

export const RicettePerIngrediente = () => {
  return (
    <>
      <Navigationbar></Navigationbar>
      <ElencoRicetteProvider>
        <BarraDiRicerca
          titoloBarraDiRicerca={"Cerca per Ingrediente"}
          placeholderBarraDiRicerca={"Inserisci Ingrediente"}
        ></BarraDiRicerca>

        <div className="elenco-ricette">
          <ElencoRicette></ElencoRicette>
        </div>
      </ElencoRicetteProvider>
    </>
  );
};
