import styles from "./AboutUs.module.css";
import MenuGuest from "../../components/menus/MenuGuest";

function AboutUs() {
  return (
    <>
      <MenuGuest />
      <section className={styles.section}>
        <div className={styles.container}>
          <h2 className={styles.title}>Acerca de</h2>

          <h3 className={styles.subtitle}>Nuestra Historia</h3>
          <p className={styles.paragraph}>
            Desde nuestra humilde apertura en el corazón de la ciudad, "El Horno
            Dorado" ha sido un lugar donde la tradición y la pasión por la
            panadería se unen para crear momentos deliciosos. Fundada por
            [Nombre del Fundador] con la visión de compartir el auténtico sabor
            del pan recién horneado, hemos crecido gracias a la dedicación a la
            calidad de nuestros ingredientes y al cariño que ponemos en cada uno
            de nuestros productos. A lo largo de los años, hemos mantenido
            nuestras recetas clásicas y a la vez hemos innovado para ofrecerte
            una variedad de delicias que te harán volver por más.
          </p>

          <h3 className={styles.subtitle}>Nuestra Filosofía y Valores</h3>
          <ul className={styles.list}>
            <li className={styles.listItem}>
              <strong>Calidad:</strong> Utilizamos ingredientes frescos y de la
              mejor calidad para asegurar un sabor excepcional en cada producto.
            </li>
            <li className={styles.listItem}>
              <strong>Tradición:</strong> Honramos las técnicas de panadería
              artesanal, transmitidas de generación en generación.
            </li>
            <li className={styles.listItem}>
              <strong>Pasión:</strong> Amamos lo que hacemos y eso se refleja en
              el cuidado y la dedicación que ponemos en cada horneada.
            </li>
            <li className={styles.listItem}>
              <strong>Comunidad:</strong> Nos esforzamos por ser un punto de
              encuentro donde las personas puedan disfrutar de buenos momentos y
              deliciosos sabores.
            </li>
            <li className={styles.listItem}>
              <strong>Frescura:</strong> Horneamos nuestros productos
              diariamente para garantizar que lleguen a tu mesa con el aroma y
              sabor recién hechos.
            </li>
          </ul>

          <section>
            <h3 className={styles.subtitle}>
              Testimonios de Nuestros Clientes
            </h3>
            <div className={styles.testimonials}>
              <div className={styles.testimonialCard}>
                <p className={styles.testimonialText}>
                  "El pan de "El Horno Dorado" es simplemente increíble. Cada
                  mordisco es una explosión de sabor y frescura. ¡Mi desayuno
                  nunca es lo mismo sin su delicioso pan de masa madre!"
                </p>
                <p className={styles.testimonialAuthor}>- Ana María G.</p>
              </div>

              <div className={styles.testimonialCard}>
                <p className={styles.testimonialText}>
                  "Los pasteles y postres de esta panadería son una verdadera
                  joya. Perfectos para cualquier ocasión especial o simplemente
                  para darte un gusto. ¡La calidad es insuperable!"
                </p>
                <p className={styles.testimonialAuthor}>- Carlos Pérez.</p>
              </div>

              <div className={styles.testimonialCard}>
                <p className={styles.testimonialText}>
                  "Me encanta la calidez del ambiente y la amabilidad del
                  personal. Siempre me hacen sentir bienvenido. Y ni hablar del
                  pan de bono, ¡es mi favorito!"
                </p>
                <p className={styles.testimonialAuthor}>- Sofía Rodríguez.</p>
              </div>
            </div>
          </section>
        </div>
      </section>
    </>
  );
}

export default AboutUs;
