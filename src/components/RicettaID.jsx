import "./RicettaID.css";
export const RicettaID = ({
  ricettaIMG,
  nome,
  piatto,
  ingredientePrincipale,
}) => {
  return (
    <>
      <div className="ricetta">
        <div className="img-contenitore">
          <img src={ricettaIMG} alt="img ricetta" />
        </div>

        <div className="titolo-contenitore">
          <h4>{nome}</h4>
        </div>

        <div className="div-categorie">
          <div className="bt-categoria">{piatto}</div>
          <div className="bt-categoria">{ingredientePrincipale}</div>
        </div>
      </div>
    </>
  );
};
