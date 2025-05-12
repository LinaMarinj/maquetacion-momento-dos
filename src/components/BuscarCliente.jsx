import "./BuscarCliente.css";

function BuscarCliente() {
  return (
    <>
      <section className="seccion-cliente">
        <div>
          <section className="container-buscar-cliente">
            <div>
              <input
                className="input-buscar-cliente"
                id="correo"
                type="email"
                name="correo"
                placeholder="correo"
                required
              />
            </div>
            <div>
              <button className="btn-buscar" type="buton">
                Buscar
              </button>
            </div>
            <div>
              <a className="ancla" href="">Buscar producto</a>
            </div>
          </section>
        </div>

        <div>
          <h1 className="title" >Buscar Cliente </h1>
        </div>
      </section>
    </>
  );
}

export default BuscarCliente;
