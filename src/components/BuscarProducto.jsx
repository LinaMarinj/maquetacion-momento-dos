import EstilosBuscador from "./Buscar.module.css";
import { Link } from "react-router";

function BuscarProducto() {
  return (
    <>
      <section className={EstilosBuscador.seccionBuscar}>
        <div>
          <section className={EstilosBuscador.containerBuscar}>
            <div>
              <input
                className={EstilosBuscador.inputBuscar}
                type="text"
                name="ID"
                placeholder="ID"
                required
              />
            </div>
            <div>
              <Link to="/catalogoproducto">
                <button className={EstilosBuscador.btnBuscar}>Buscar</button>
              </Link>
            </div>
            <div>
              <Link className={EstilosBuscador.links} to="/buscarcliente">
                Buscar cliente
              </Link>
            </div>
          </section>
        </div>

        <div>
          <h1 className={EstilosBuscador.title}>Buscar Producto</h1>
        </div>
      </section>
    </>
  );
}

export default BuscarProducto;
