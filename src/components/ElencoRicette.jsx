import { RicettaID } from "./RicettaID";
import "./elencoRicette.css";
import { useEffect } from "react";
import { useContext } from "react";
import { ElencoRicetteContext } from "../stores/ElencoRicetteContext";
import { BASE_URL } from "../api/spoonacular";
import { API_KEY } from "../api/spoonacular";
import axios from "axios";
import { Link } from "react-router-dom";

export const ElencoRicette = () => {
  const { ricette, setRicette } = useContext(ElencoRicetteContext);

  useEffect(() => {
    axios
      .get(`${BASE_URL}/random`, {
        params: {
          tags: "vegetarian",
          addRecipeInformation: true,
          number: 9,
          apiKey: API_KEY,
        },
      })
      .then((ricetteCasuali) => {
        const risposta = ricetteCasuali.data.recipes;
        setRicette(risposta);
      })
      .catch((error) => {
        console.log("errore durante la chiamata API", error);
        return [];
      });
  }, []);

  return (
    <div className="elenco-ricette">
      {ricette?.length === 0 ? (
        <p className="messaggio-nessuna-ricetta">Nessuna ricetta trovata 🍽️</p>
      ) : (
        ricette?.map((ricetta) => (
          <Link to={`/${ricetta.id}`} key={ricetta.id} className="link-ricetta">
            <RicettaID
              ricettaIMG={ricetta.image}
              nome={ricetta.title}
              piatto={ricetta.dishTypes?.[0] || "Piatto"}
              ingredientePrincipale={
                ricetta.extendedIngredients?.[0]?.name || "Ricetta"
              }
            />
          </Link>
        ))
      )}
    </div>
  );
};
