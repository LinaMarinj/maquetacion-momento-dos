import EstilosHome from "./Home.module.css";
import { Link } from "react-router";
import Logo from "../../assets/fondos/logo.png";

function Home() {
  return (
    <div className={EstilosHome.homeContainer}>
      <section className={EstilosHome.banner}>
        <div className={EstilosHome.bannerContent}>
          <img className={EstilosHome.logo} src={Logo} alt="logo" />
          <h1 className={EstilosHome.bannerTitle}>Delipan</h1>
          <p className={EstilosHome.bannerSubtitle}>
            ¡El Sabor que Impulsa tu Negocio!
          </p>
        </div>
      </section>

      <section className={EstilosHome.descipcion}>
        <h2 className={EstilosHome.sectionTitle}>Sobre Nosotros</h2>
        <p className={EstilosHome.descriptionText}>
          Somos una empresa distribuidora de pan artesanal. Aquí podrás
          encontrar panes, pasteles, galletas y todo lo necesario para surtir tu
          negocio con productos frescos, deliciosos y de calidad.
        </p>

        <Link to="/buscarcliente">
          <button className={EstilosHome.btnVer}>Ver más</button>
        </Link>
      </section>
    </div>
  );
}

export default Home;
