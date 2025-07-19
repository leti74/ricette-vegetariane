import logo from "../assets/icons/logo-bianco.svg";
import "./Footer.css";

export const Footer = () => {
  return (
    <div className="footer">
      <div className="sezione-logo">
        <img src={logo} alt="logo" className="logo-footer" />
        <span className="footer-span-logo">VegFacile</span>
      </div>
    </div>
  );
};
