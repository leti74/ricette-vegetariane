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
        <img src="ricette-vegetali.jpg" alt="img vegetarian cuisine" />

        <div className="slogan">
          <h1>
            TRANSFORM THE WORLD,
            <br></br>
            ONE INGREDIENT AT A TIME.
          </h1>

          <div className="slogan-p">
            <p>
              Choose wellness and discover the taste of a vegan lifestyle.
              <br></br>
              Ricette, ispirazione, consapevolezza: tutto in un solo posto.
            </p>
          </div>
        </div>
      </div>

      <div className="home2">
        <h2>Support a healthy and sustainable lifestyle</h2>
        <p>
          Understanding food and knowing how to prepare it is essential to
          taking care of ourselves over time. This is why we promote a{" "}
          <span className="grassetto"> plant-based cuisine</span>, A conscious
          choice that is good for your health, stems from an ethical vision, and
          <span className="grassetto">
            protects the environment we live in.
          </span>
        </p>
      </div>

      <div className="home3">
        <h3>
          Vegetarian recipes,
          <br></br>
          easy and fast
        </h3>
        <p>Get inspired</p>

        <ElencoRicette></ElencoRicette>
      </div>

      <div className="home4">
        <h3>
          A space where plant-based cuisine isn't a sacrifice, but an adventure
          of flavor and creativity that can make a difference every day.
        </h3>
        <button className="bt-cerca">
          <Link to={"/cerca"} className="grassetto">
            Search for a recipe
          </Link>
        </button>
      </div>
      <Footer></Footer>
    </>
  );
}

export default App;
