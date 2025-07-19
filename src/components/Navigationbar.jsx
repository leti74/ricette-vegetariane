import "./Navigationbar.css";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import logo from "../assets/icons/logo-verde.svg";
import { Link } from "react-router-dom";
import search from "../assets/icons/search.svg";
import ScrollToTop from "./ScrollToTop";

export const Navigationbar = () => {
  return (
    <>
      <ScrollToTop></ScrollToTop>
      <Navbar expand="lg" sticky="top" className="navbar">
        <Container fluid className="sezioni">
          <Link to={"/"} className="sezione-logo">
            <img src={logo} alt="logo" className="logo" />
            <span className="span-logo">VegFacile</span>
          </Link>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="navbar-navs">
              <Link to={"/"}>Home</Link>
              <Link to={"/perche"}>Perchè</Link>
              <Link to={"/perIngrediente"}>Per Ingrediente</Link>
              <Link to={"/cerca"}>
                <img
                  className="search-icon-navbar"
                  src={search}
                  alt="icona di ricerca"
                />
                <span className="search-span">Cerca ricette</span>
              </Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};
