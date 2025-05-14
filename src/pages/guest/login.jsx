import { Link } from "react-router-dom";
import styles from "./Login.module.css";

function Login() {
  return (
    <section className={styles.seccionLogin}>
      <div>
        <section className={styles.containerLogin}>
          <div>
            <input
              className={styles.inputLogin}
              id="correo"
              type="email"
              name="correo"
              placeholder="Correo"
              required
            />
          </div>
          <div>
            <input
              className={styles.inputLogin}
              id="contrasena"
              type="password"
              name="contrasena"
              placeholder="Contraseña"
              required
            />
          </div>
          <div>
            <Link to="/">
              <button className={styles.btnLogin}>Iniciar Sesión</button>
            </Link>
          </div>
          <div>
            <Link className={styles.links} to="/registro">
              ¿No tienes cuenta? Regístrate
            </Link>
          </div>
        </section>
      </div>

      <div>
        <h1 className={styles.title}>Iniciar Sesión</h1>
      </div>
    </section>
  );
}

export default Login;
