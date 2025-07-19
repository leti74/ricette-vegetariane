import { useState } from "react";
import "./BarraDiRicerca.css";
import axios from "axios";
import { BASE_URL } from "../api/spoonacular";
import { API_KEY } from "../api/spoonacular";
import { useContext } from "react";
import { ElencoRicetteContext } from "../stores/ElencoRicetteContext";

export const BarraDiRicerca = ({
  titoloBarraDiRicerca,
  placeholderBarraDiRicerca,
}) => {
  const [inputValue, setInputValue] = useState("");
  const { setRicette } = useContext(ElencoRicetteContext);

  const handleclickCerca = () => {
    axios
      .get(`${BASE_URL}/complexSearch`, {
        params: {
          query: inputValue,
          apiKey: API_KEY,
          tags: "vegetarian",
          addRecipeInformation: true,
        },
      })
      .then((risposta) => {
        setRicette(risposta.data.results);
        console.log(risposta.data.results);
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
          />
          <button onClick={handleclickCerca} className="btn-invia">
            invia
          </button>
        </div>
      </div>
    </>
  );
};
