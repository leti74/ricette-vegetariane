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

  const ricetta = ricette?.find((r) => r.id == ricettaID.toString());

  console.log(ricetta);

  function stripHTML(html) {
    const tempDiv = document.createElement("div");
    tempDiv.innerHTML = html;
    return tempDiv.textContent || "";
  }

  if (!ricetta) {
    return <p>Recipe not found</p>;
  }

  return (
    <>
      <Navigationbar />
      <div className="ricettaSelezionata">
        <div className="immagine-titolo">
          <img
            className="ricettaSelezionata-img"
            src={ricetta.image}
            alt="img recipies"
          />
          <h1 className="titolo-ricetta">{ricetta.title}</h1>
        </div>

        <div className="dettagli">
          <button className="bt-categoria">
            {ricetta.dishTypes?.[0] || "Ricetta"}
          </button>
          <p>Main ingredient: {ricetta.extendedIngredients?.[0]?.name}</p>
          <p>Tempo: {ricetta.readyInMinutes} MIN.</p>
          <p>Porzioni: {ricetta.servings}</p>
        </div>

        <div className="ricettaSelezionata-ingredienti">
          <div className="ingredienti-ricetta">
            <h2>Ingredienti</h2>
            {Array.isArray(ricetta.extendedIngredients) &&
              ricetta.extendedIngredients.map((ingrediente, i) => (
                <div
                  key={i + ingrediente.id}
                  className="ingrediente-contenitore"
                >
                  <input type="checkbox" className="checkbox-ingredenti" />
                  <p className="ingrediente">
                    {ingrediente.amount} {ingrediente.unit} {ingrediente.name}
                  </p>
                </div>
              ))}
          </div>
          <div className="ricettaSelezionata-descrizione">
            <p>{stripHTML(ricetta.summary)}</p>
          </div>
        </div>

        <div className="ricettaSelezionata-procedimento">
          <h2>Procedimento</h2>
          <ol>
            {ricetta.analyzedInstructions?.[0]?.steps?.map((s, i) => (
              <li key={i}>{s.step}</li>
            )) || "Nessun Procedimento"}
          </ol>
        </div>
      </div>
      <Footer />
    </>
  );
};
