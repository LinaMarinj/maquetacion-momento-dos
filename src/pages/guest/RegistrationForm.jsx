import { useState } from "react";
import styles from "./RegistrationForm.module.css";
import { Link } from "react-router-dom";
import MenuGuest from "../../components/menus/MenuGuest";

function RegistrationForm() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("Formulario enviado", { username, password, email });
  };

  return (
    <>
      <MenuGuest />
      <section className={styles.section}>
        <div className={styles.div}>
          <form className={styles.form} onSubmit={handleSubmit}>
            <label className={styles.label}>Usuario:</label>
            <input
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className={styles.input}
            />
            <label className={styles.label}>Contraseña:</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className={styles.input}
            />
            <label className={styles.label}>Correo Electrónico:</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className={styles.input}
            />
            <Link to="/login" className={styles.link}>
              <button type="button" className={styles.button}>
                Registrarse
              </button>
            </Link>
          </form>
        </div>
      </section>
    </>
  );
}

export default RegistrationForm;
