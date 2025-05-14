import Estiloscatalogos from "./Catalogos.module.css";
import Bloque from "../../components/Bloque";
import Producto1 from "../../assets/productos/producto-uno.webp";
import Producto2 from "../../assets/productos/producto-dos.webp";
import Producto3 from "../../assets/productos/producto-tres.webp";
import Producto4 from "../../assets/productos/producto-cuatro.webp";
import Producto5 from "../../assets/productos/producto-cinco.webp";
import Producto6 from "../../assets/productos/producto-seis.webp";
import { Link } from "react-router";
import MenuPrivate from "../../components/menus/MenuPrivate";
function CatalogoProducto() {
  const dataProducto = [
    {
      imageSrc: Producto1,
      imageAlt: "Aretes",
      buttonText: "Ver",
    },
    {
      imageSrc: Producto2,
      imageAlt: "test",
      buttonText: "Ver",
    },
    {
      imageSrc: Producto3,
      imageAlt: "test",
      buttonText: "Ver",
    },
    {
      imageSrc: Producto4,
      imageAlt: "test",
      buttonText: "Ver",
    },
    {
      imageSrc: Producto5,
      imageAlt: "test",
      buttonText: "Ver",
    },
    {
      imageSrc: Producto6,
      imageAlt: "test",
      buttonText: "Ver",
    },
  ];

  return (
    <>
      <MenuPrivate />
      <section className={Estiloscatalogos.sectionCatalogo}>
        {dataProducto.map((bloquesCatalogo, index) => {
          return (
            <Bloque
              imageSrc={bloquesCatalogo.imageSrc}
              imageAlt={bloquesCatalogo.imageAlt}
              buttonText={bloquesCatalogo.buttonText}
              key={index}
            />
          );
        })}
        <div className={Estiloscatalogos.divBtn}>
          <Link to="/dashboard">
            <button className={Estiloscatalogos.btnHome}>Home</button>
          </Link>
        </div>
      </section>
    </>
  );
}

export default CatalogoProducto;
