import Estiloscatalogos from "./Bloque.module.css";

function Bloque({ imageSrc, imageAlt, buttonText, key }) {
  return (
    <div key={key} className={Estiloscatalogos.Bloque}>
      <img className={Estiloscatalogos.imagen} src={imageSrc} alt={imageAlt} />
      <button className={Estiloscatalogos.btnVer}>{buttonText}</button>
    </div>
  );
}

export default Bloque;
