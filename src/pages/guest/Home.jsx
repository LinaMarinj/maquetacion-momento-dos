import EstiloHome from "./Home.module.css";
import MenuGuest from "../../components/menus/MenuGuest";

function Home() {
  return (
    <>
      <MenuGuest />
      <section>
        <div className={EstiloHome.bienvenida}>
          <div className={EstiloHome.divTitles}>
            <h1 className={EstiloHome.title}>
              ¡Bienvenidos a nuestra panadería mayorista!
            </h1>
            <p className={EstiloHome.title}>
              Panes artesanales hechos con dedicación y tradición
            </p>
          </div>
        </div>
      </section>

      <section className={EstiloHome.section}>
        <div className={EstiloHome.container}>
          <h2 className={EstiloHome.title}>Contáctenos</h2>

          <div className={EstiloHome.contactInfo}>
            <p className={EstiloHome.contactItem}>
              ¿Tienes alguna pregunta o te gustaría hacer un pedido especial?
              ¡No dudes en contactarnos!
            </p>
            <p className={EstiloHome.contactItem}>
              <strong>Teléfono y WhatsApp:</strong>{" "}
              <a href="tel:+573001234567" className={EstiloHome.contactLink}>
                +57 300 123 4567
              </a>
            </p>
            <p className={EstiloHome.contactItem}>
              <strong>Visítanos en:</strong> Calle Falsa 123, Medellín,
              Antioquia
            </p>
          </div>

          <div className={EstiloHome.formContainer}>
            <form className={EstiloHome.form}>
              <label htmlFor="name" className={EstiloHome.label}>
                Nombre:
              </label>
              <input
                type="text"
                id="name"
                className={EstiloHome.input}
                value={name}
                required
              />

              <label htmlFor="email" className={EstiloHome.label}>
                Correo Electrónico:
              </label>
              <input
                type="email"
                id="email"
                className={EstiloHome.input}
                required
              />

              <label htmlFor="message" className={EstiloHome.label}>
                Mensaje:
              </label>
              <textarea
                id="message"
                className={EstiloHome.textarea}
                rows="5"
                required
              ></textarea>

              <button type="submit" className={EstiloHome.button}>
                Enviar Mensaje
              </button>
            </form>
          </div>

          <div className={EstiloHome.location}>
            <h3>Nuestra Ubicación</h3>
            <div className={EstiloHome.mapPlaceholder}>
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3966.384782931529!2d-75.5774937!3d6.2073979!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8e44283b3381954b%3A0xa087c13c1e589826!2sCl.%20Falsa%20%23123-45!5e0!3m2!1ses-CO!2sco!4v1747245823456!5m2!1ses-CO!2sco"
                width="100%" // Haz que el mapa sea responsivo
                height="250"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Ubicación de la Panadería" // Agrega un título para accesibilidad
              />
            </div>
            <p className={EstiloHome.contactItem}>
              ¡Te esperamos en nuestra panadería para que disfrutes de nuestros
              deliciosos productos!
            </p>
          </div>
        </div>
      </section>
    </>
  );
}

export default Home;
