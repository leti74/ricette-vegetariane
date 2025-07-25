import { BarraDiRicerca } from "../components/BarraDiRicerca";
import { Navigationbar } from "../components/Navigationbar";
import { ElencoRicette } from "../components/ElencoRicette";
import { Footer } from "../components/Footer";

export const RicettePerIngrediente = () => {
  const handleclickCerca = () => {};
  return (
    <>
      <Navigationbar></Navigationbar>

      <BarraDiRicerca
        handleclickCerca={handleclickCerca}
        titoloBarraDiRicerca={"Cerca per Ingrediente"}
        placeholderBarraDiRicerca={"Inserisci Ingrediente"}
      ></BarraDiRicerca>

      <div className="elenco-ricette">
        <ElencoRicette></ElencoRicette>
      </div>
      <Footer></Footer>
    </>
  );
};
