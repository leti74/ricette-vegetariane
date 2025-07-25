import "./RicettaSelezionata.css";
import { useContext } from "react";
import { ElencoRicetteContext } from "../stores/ElencoRicetteContext";
import { useParams } from "react-router-dom";
import { Navigationbar } from "../components/Navigationbar";
import { Footer } from "../components/Footer";

export const RicettaSelezionata = () => {
  const { ricette } = useContext(ElencoRicetteContext);

  const { ricettaID } = useParams();
  console.log(ricettaID);

  const ricetta = ricette.filter((ricetta) => {
    return ricetta.id == ricettaID.toString();
  });

  if (!ricetta[0]) {
    return <p>Caricamento ricetta...</p>;
  }

  function stripHTML(html) {
    const tempDiv = document.createElement("div");
    tempDiv.innerHTML = html;
    return tempDiv.textContent || "";
  }

  console.log(ricetta[0]);
  return (
    <>
      <Navigationbar></Navigationbar>
      <div className="ricettaSelezionata">
        <div className="immagine-titolo">
          <img className="ricettaSelezionata-img" src={ricetta[0].image} />
          <h1 className="titolo-ricetta">{ricetta[0].title}</h1>
        </div>

        <div className="dettagli">
          <button className="bt-categoria">
            {ricetta[0].dishTypes?.[0] || "Ricetta"}
          </button>
          <p>Main ingredient: {ricetta[0].extendedIngredients?.[0]?.name}</p>

          <p> Tempo: {ricetta[0].readyInMinutes} MIN.</p>
          <p>Porzioni: {ricetta[0].servings}</p>
        </div>

        <div className="ricettaSelezionata-ingredienti">
          <div className="ingredienti-ricetta">
            <h2>Ingredienti</h2>
            {ricetta[0].extendedIngredients.map((ingrediente, i) => {
              return (
                <div
                  key={i + ingrediente.id}
                  className="ingrediente-contenitore"
                >
                  <input type="checkbox" className="checkbox-ingredenti" />
                  <p className="ingrediente">
                    {ingrediente.amount} {ingrediente.unit} {ingrediente.name}{" "}
                  </p>
                </div>
              );
            })}
          </div>
          <div className="ricettaSelezionata-descrizione">
            <p>{stripHTML(ricetta[0].summary)}</p>
          </div>
        </div>

        <div className="ricettaSelezionata-procedimento">
          <h2>Procedimento</h2>
          <ol>
            {ricetta[0].analyzedInstructions[0].steps.map((s, i) => (
              <li key={i}>{s.step}</li>
            ))}
          </ol>
        </div>
      </div>
      <Footer></Footer>
    </>
  );
};
