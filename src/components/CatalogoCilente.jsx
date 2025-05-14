import Estiloscatalogos from "./Catalogos.module.css";
import Cliente1 from "../assets/clientes/cliente-uno.jpg";
import Cliente2 from "../assets/clientes/cliente-dos.jpg";
import Cliente3 from "../assets/clientes/cliente-tres.jpg";
import Cliente4 from "../assets/clientes/cliente-cuatro.jpg";
import Cliente5 from "../assets/clientes/cliente-cinco.jpg";
import Cliente6 from "../assets/clientes/cliente-seis.jpg";
import Bloque from "./Bloque";
import { Link } from "react-router";

function CatalogoCliente() {
  const dataCliente = [
    {
      imageSrc: Cliente1,
      imageAlt: "Cliente1",
      buttonText: "Ver",
    },
    {
      imageSrc: Cliente2,
      imageAlt: "Cliente2",
      buttonText: "Ver",
    },
    {
      imageSrc: Cliente3,
      imageAlt: "Cliente3",
      buttonText: "Ver",
    },
    {
      imageSrc: Cliente4,
      imageAlt: "Cliente4",
      buttonText: "Ver",
    },
    {
      imageSrc: Cliente5,
      imageAlt: "Cliente5",
      buttonText: "Ver",
    },
    {
      imageSrc: Cliente6,
      imageAlt: "Cliente6",
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

      <Link to="/">
        <button className={Estiloscatalogos.btnHome}>Home</button>
      </Link>
    </section>
  );
}

export default CatalogoCliente;
