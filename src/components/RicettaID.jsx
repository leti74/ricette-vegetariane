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
          <button className="bt-categoria">{piatto}</button>
          <button className="bt-categoria">{ingredientePrincipale}</button>
        </div>
      </div>
    </>
  );
};
