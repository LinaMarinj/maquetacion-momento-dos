import Estiloscatalogos from "./Catalogos.module.css";

function Bloque({ imageSrc, imageAlt, buttonText, key }) {
  return (
    <div key={key} className={Estiloscatalogos.Bloque}>
      <img src={imageSrc} alt={imageAlt} />
      <button className={Estiloscatalogos.btnVer}>{buttonText}</button>
    </div>
  );
}

export default Bloque;
