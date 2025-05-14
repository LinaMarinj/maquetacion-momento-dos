import EstilosBuscador from "./Buscar.module.css";
import { Link } from "react-router";
import MenuPrivate from "../../components/menus/MenuPrivate"

function BuscarCliente() {
  return (
    <>
    <MenuPrivate />
      <section className={EstilosBuscador.seccionBuscar}>
        <div>
          <section className={EstilosBuscador.containerBuscar}>
            <div>
              <input
                className={EstilosBuscador.inputBuscar}
                id="correo"
                type="email"
                name="correo"
                placeholder="Correo"
                required
              />
            </div>
            <div>
              <Link to="/catalogocliente">
                <button className={EstilosBuscador.btnBuscar} type="buton">
                  Buscar
                </button>
              </Link>
            </div>
            <div>
              <Link className={EstilosBuscador.links} to="/buscarproducto">
                Buscar producto
              </Link>
            </div>
          </section>
        </div>

        <div>
          <h1 className={EstilosBuscador.title}>Buscar Cliente</h1>
        </div>
      </section>
    </>
  );
}

export default BuscarCliente;
