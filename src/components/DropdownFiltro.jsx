import "./DropdownFiltro.css";
import Dropdown from "react-bootstrap/Dropdown";
import DropdownButton from "react-bootstrap/DropdownButton";
import { API_KEY, BASE_URL } from "../api/spoonacular";
import axios from "axios";
import { useContext } from "react";
import { ElencoRicetteContext } from "../stores/ElencoRicetteContext";

export const DropdownFiltro = ({ classeDropdown, scrollToRef }) => {
  const { setRicette } = useContext(ElencoRicetteContext);

  const handleclickFiltro = (categoria) => {
    axios
      .get(`${BASE_URL}/complexSearch`, {
        params: {
          apiKey: API_KEY,
          type: categoria,
          addRecipeInformation: true,
        },
      })
      .then((res) => {
        setRicette(res.data.results);
        console.log(res.data.results);
        if (scrollToRef?.current) {
          scrollToRef.current.scrollIntoView({ behavior: "smooth" });
        }
      })
      .catch((err) => console.error("Errore nel filtro:", err));
  };

  return (
    <DropdownButton
      id="dropdown-basic-button"
      title="Filter"
      className={`filtro-dropdown ${classeDropdown}`}
    >
      <Dropdown.Item
        href="#/action-1"
        className="selectedItem"
        onClick={() => {
          handleclickFiltro("breakfast");
        }}
      >
        Breakfast
      </Dropdown.Item>
      <Dropdown.Item
        className="selectedItem"
        onClick={() => {
          handleclickFiltro("snack");
        }}
      >
        Snack
      </Dropdown.Item>
      <Dropdown.Item
        className="selectedItem"
        onClick={() => {
          handleclickFiltro("main course");
        }}
      >
        Main Course
      </Dropdown.Item>
      <Dropdown.Item
        className="selectedItem"
        onClick={() => {
          handleclickFiltro("side dish");
        }}
      >
        Side dish
      </Dropdown.Item>
      <Dropdown.Item
        className="selectedItem"
        onClick={() => {
          handleclickFiltro("dessert");
        }}
      >
        Dessert
      </Dropdown.Item>
    </DropdownButton>
  );
};
