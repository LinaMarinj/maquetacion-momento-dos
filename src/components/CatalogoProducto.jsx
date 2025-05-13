import Estiloscatalogos from "./Catalogos.module.css";
import Bloque from "./Bloque";

function CatalogoProducto() {
  const dataProducto = [
    {
      imageSrc: "test",
      imageAlt: "test",
      buttonText: "Ver",
    },
    {
      imageSrc: "test",
      imageAlt: "test",
      buttonText: "Ver",
    },
    {
      imageSrc: "test",
      imageAlt: "test",
      buttonText: "Ver",
    },
    {
      imageSrc: "test",
      imageAlt: "test",
      buttonText: "Ver",
    },
    {
      imageSrc: "test",
      imageAlt: "test",
      buttonText: "Ver",
    },
    {
      imageSrc: "test",
      imageAlt: "test",
      buttonText: "Ver",
    },
  ];

  return (
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
    </section>
  );
}

export default CatalogoProducto;
