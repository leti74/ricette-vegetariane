import { useState } from "react";
import "./BarraDiRicerca.css";
import axios from "axios";
import { BASE_URL } from "../api/spoonacular";
import { API_KEY } from "../api/spoonacular";
import { useContext } from "react";
import { ElencoRicetteContext } from "../stores/ElencoRicetteContext";
import { useLocation } from "react-router-dom";

export const BarraDiRicerca = ({
  titoloBarraDiRicerca,
  placeholderBarraDiRicerca,
  scrollToRef,
}) => {
  const location = useLocation();
  const [inputValue, setInputValue] = useState("");
  const { setRicette } = useContext(ElencoRicetteContext);

  const handleclickCerca = () => {
    const perIngrediente = location.pathname.includes("/perIngrediente");

    axios
      .get(`${BASE_URL}/complexSearch`, {
        params: {
          ...(perIngrediente
            ? { includeIngredients: inputValue }
            : { query: inputValue }),
          apiKey: API_KEY,
          fillIngredients: true,
          instructionsRequired: true,
          tags: "vegetarian",
          addRecipeInformation: true,
        },
      })
      .then((risposta) => {
        setRicette(risposta.data.results);
        console.log(risposta.data.results);
        if (scrollToRef?.current) {
          scrollToRef.current.scrollIntoView({ behavior: "smooth" });
        }
      })
      .catch((error) => {
        console.log("errore nella richiesta:", error);
      });
  };

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
    console.log(e.target.value);
  };

  return (
    <>
      <div className="contenuto">
        <h1 className="titolo-cerca"> {titoloBarraDiRicerca}</h1>
        <div className="sezione-input">
          <input
            className="input-cerca"
            type="text"
            placeholder={placeholderBarraDiRicerca}
            onChange={handleInputChange}
            onKeyDown={(e) => {
              if (e.key === "Enter") {
                handleclickCerca();
              }
            }}
          />
          <button onClick={handleclickCerca} className="btn-invia">
            Send
          </button>
        </div>
      </div>
    </>
  );
};
