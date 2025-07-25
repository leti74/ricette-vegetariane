import { Navigationbar } from "../components/Navigationbar";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Footer } from "../components/Footer";
import { ElencoRicette } from "../components/ElencoRicette";
import { Link } from "react-router-dom";
import ScrollToTop from "../components/ScrollToTop";

function App() {
  return (
    <>
      <ScrollToTop />
      <Navigationbar />

      <div className="sfondo"></div>
      <div className="home1">
        <img
          src="dist/ricette-vegetali.jpg"
          alt="immagine cucina vegetariana"
        />

        <div className="slogan">
          <h1>
            TRASFORMA IL MONDO,
            <br></br>
            UN INGREDIENTE ALLA VOLTA.
          </h1>

          <div className="slogan-p">
            <p>
              Scegli il benessere, scopri il gusto di uno stile di vita veg.
              <br></br>
              Ricette, ispirazione, consapevolezza: tutto in un solo posto.
            </p>
          </div>
        </div>
      </div>

      <div className="home2">
        <h2>
          Sostieni uno stile di vita <span className="grassetto"> sano</span> e
          sostenibile
        </h2>
        <p>
          Conoscere il cibo e saperlo preparare è fondamentale per prenderci
          cura di noi stessi nel tempo. Per questo promuoviamo una
          <span className="grassetto"> cucina vegetale</span>, scelta
          consapevole che fa bene alla salute, nasce da una visione etica e
          <span className="grassetto"> tutela l’ambiente in cui viviamo.</span>
        </p>
      </div>

      <div className="home3">
        <h3>
          Ricette vegetariane,
          <br></br>
          facili e veloci
        </h3>
        <p>Lasciati ispirare</p>

        <ElencoRicette></ElencoRicette>
      </div>

      <div className="home4">
        <h3>
          Uno spazio dove la cucina vegetale non è una rinuncia, ma un’avventura
          di gusto e creatività che ogni giorno può fare la differenza.
        </h3>
        <button className="bt-cerca">
          <Link to={"/cerca"} className="grassetto">
            Cerca ricetta
          </Link>
        </button>
      </div>
      <Footer></Footer>
    </>
  );
}

export default App;
