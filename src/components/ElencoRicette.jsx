import { RicettaID } from "./RicettaID";
import "./ElencoRicette.css";
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
          number: 8,
          apiKey: API_KEY,
        },
      })
      .then((ricetteCasuali) => {
        const risposta = ricetteCasuali.data.recipes;
        console.log(risposta);
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
        <p className="messaggio-nessuna-ricetta">No recipes found 🍽️</p>
      ) : (
        ricette?.map((ricetta) => (
          <Link to={`/${ricetta.id}`} key={ricetta.id} className="link-ricetta">
            <RicettaID
              ricettaIMG={ricetta.image}
              nome={ricetta.title}
              piatto={ricetta.dishTypes?.[0] || "Dish"}
              ingredientePrincipale={
                Array.isArray(ricetta.extendedIngredients) &&
                ricetta.extendedIngredients.length > 0
                  ? ricetta.extendedIngredients[0].name
                  : "Ingrediente non disponibile"
              }
            />
          </Link>
        ))
      )}
    </div>
  );
};
