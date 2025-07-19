import "./PercheVeg.css";
export const PercheVeg = ({
  percheIMG,
  percheParagrafo,
  percheTesto,
  percheTitolo1,
  percheTitolo2,
  percheStyle,
}) => {
  return (
    <>
      <div className="div1-perche">
        <div className="sfondo-img-perche">
          <img
            src={percheIMG}
            alt="immagine contestuale"
            className="img-div1"
          />
        </div>

        <div className={`div1-testo ${percheStyle}`}>
          <h2>{percheTitolo1}</h2>
          <p>{percheTesto}</p>
        </div>
      </div>
      <div className={`div2-perche ${percheStyle}`}>
        <h3>{percheTitolo2}</h3>
        <p>{percheParagrafo}</p>
      </div>
    </>
  );
};
