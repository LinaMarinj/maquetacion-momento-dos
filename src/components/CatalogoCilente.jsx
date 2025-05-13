import Estiloscatalogos from "./Catalogos.module.css";
import Bloque from "./Bloque";

function CatalogoCliente() {
  const dataCliente = [
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
      {dataCliente.map((bloquesCatalogo, index) => {
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

export default CatalogoCliente;
