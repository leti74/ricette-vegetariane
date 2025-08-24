import { BarraDiRicerca } from "../components/BarraDiRicerca";
import { Navigationbar } from "../components/Navigationbar";
import { ElencoRicette } from "../components/ElencoRicette";
import { Footer } from "../components/Footer";
import { useRef } from "react";

export const RicettePerIngrediente = () => {
  const handleclickCerca = () => {};
  const elencoRef = useRef(null);
  return (
    <>
      <Navigationbar></Navigationbar>

      <BarraDiRicerca
        scrollToRef={elencoRef}
        handleclickCerca={handleclickCerca}
        titoloBarraDiRicerca={"By Ingredient"}
        placeholderBarraDiRicerca={"Enter Ingredient"}
      ></BarraDiRicerca>

      <div className="elenco">
        <div ref={elencoRef}>
          <ElencoRicette></ElencoRicette>
        </div>
      </div>

      <Footer></Footer>
    </>
  );
};
