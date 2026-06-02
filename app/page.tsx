const galleryItems = [
  "Canchas panorámicas",
  "Torneos y comunidad",
  "Clases privadas",
  "Experiencia premium",
];

export default function Home() {
  return (
    <main>
      <section className="hero" id="inicio">
        <div className="overlay">
          <nav className="navbar glass-navbar">
            <div className="brand">
              <img src="/logo.png" alt="Padel del Valle" className="brand-logo" />
              <div>
                <div className="logo">PADEL DEL VALLE</div>
                <span className="brand-subtitle">Padel Club</span>
              </div>
            </div>

            <div className="nav-links">
              <a href="#inicio">Inicio</a>
              <a href="#reservas">Reservas</a>
              <a href="#torneos">Torneos</a>
              <a href="#clases">Clases</a>
              <a href="#contacto">Contacto</a>
            </div>
          </nav>

          <section className="hero-content">
            <p className="subtitle">Canchas premium · Comunidad · Experiencia</p>

            <h1>
              PADEL
              <br />
              DEL VALLE
            </h1>

            <p className="description">
              Vive una experiencia premium de pádel en una de las comunidades
              deportivas más exclusivas de la ciudad.
            </p>

            <div className="buttons">
              <a href="#reservas" className="primary-btn">
                Reservar cancha
              </a>

              <a href="#club" className="secondary-btn">
                Ver instalaciones
              </a>
            </div>
          </section>

          <a href="#club" className="scroll-indicator">
            ⌄
          </a>
        </div>
      </section>

      <section className="section club-section" id="club">
        <div className="section-copy reveal">
          <p className="eyebrow">El club</p>
          <h2>Una experiencia diseñada para jugar, competir y convivir.</h2>
          <p>
            Pádel del Valle combina canchas panorámicas, comunidad activa,
            clases, torneos y una experiencia visual premium para jugadores de
            todos los niveles.
          </p>
        </div>

        <div className="stats-grid reveal">
          <div>
            <span>02</span>
            <p>Canchas panorámicas</p>
          </div>
          <div>
            <span>+2K</span>
            <p>Comunidad digital</p>
          </div>
          <div>
            <span>360°</span>
            <p>Experiencia deportiva</p>
          </div>
        </div>
      </section>

      <section className="section split-section" id="reservas">
        <div className="visual-card reveal">
          <span>Playtomic</span>
          <h3>Reservas rápidas desde la plataforma que ya utilizan.</h3>
          <p>
            El sitio puede mantener el flujo actual de reservas y llevar al
            jugador directamente a Playtomic, WhatsApp o llamada.
          </p>
          <a className="mini-btn" href="#">
            Ir a reservar
          </a>
        </div>

        <div className="section-copy reveal">
          <p className="eyebrow">Reservas</p>
          <h2>Un sitio web premium conectado a su sistema actual.</h2>
          <p>
            Esta opción permite profesionalizar la presencia digital del club
            sin cambiar la operación actual. El usuario conoce el club, revisa
            servicios y reserva desde el canal que ustedes ya manejan.
          </p>
        </div>
      </section>

      <section className="section services-section" id="clases">
        <div className="section-heading reveal">
          <p className="eyebrow">Clases y comunidad</p>
          <h2>Todo lo que el jugador necesita encontrar en un solo lugar.</h2>
        </div>

        <div className="cards-grid">
          <div className="service-card reveal">
            <span>01</span>
            <h3>Clases</h3>
            <p>Información clara sobre clases individuales, grupales y niveles.</p>
          </div>

          <div className="service-card reveal">
            <span>02</span>
            <h3>Entrenadores</h3>
            <p>Perfiles de coaches, experiencia, horarios y llamada a reservar.</p>
          </div>

          <div className="service-card reveal">
            <span>03</span>
            <h3>Torneos</h3>
            <p>Calendario de eventos, convocatorias, categorías e inscripciones.</p>
          </div>
        </div>
      </section>

      <section className="section gallery-section" id="torneos">
        <div className="section-heading reveal">
          <p className="eyebrow">Torneos y galería</p>
          <h2>Una marca visual con movimiento, energía y comunidad.</h2>
        </div>

        <div className="gallery-grid">
          {galleryItems.map((item) => (
            <div className="gallery-item reveal" key={item}>
              <p>{item}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="section contact-section" id="contacto">
        <div className="contact-box reveal">
          <p className="eyebrow">Ubicación y contacto</p>
          <h2>Listo para recibir nuevos jugadores.</h2>
          <p>
            Mapa, dirección, WhatsApp, horarios, redes sociales y botones claros
            para facilitar que cualquier persona llegue o reserve.
          </p>

          <div className="buttons">
            <a
              href="https://wa.me/525578603125"
              target="_blank"
              className="primary-btn"
            >
              Contactar por WhatsApp
            </a>
            <a href="#" className="secondary-btn">
              Ver ubicación
            </a>
          </div>
        </div>
      </section>

      <footer className="footer">
        <div className="footer-left">
          <div className="footer-brand">
            <img src="/logo.png" alt="Padel del Valle" className="footer-logo-img" />
            <div>
              <h3>PADEL DEL VALLE</h3>
              <p>Comunidad, clases, torneos y experiencia premium de pádel.</p>
            </div>
          </div>
        </div>

        <div className="footer-right">
          <a href="#">
            <img src="/instagram.png" alt="Instagram" />
            Instagram
          </a>
          <a href="#reservas">
            <img src="/calendar.png" alt="Reservas" />
            Reservas
          </a>
          <a href="#contacto">
            <img src="/maps.png" alt="Ubicación" />
            Ubicación
          </a>
        </div>
      </footer>

      <a
        href="https://wa.me/525578603125"
        target="_blank"
        className="whatsapp-float"
      >
        <img src="/whatsapp.png" alt="WhatsApp" />
        WhatsApp
      </a>
    </main>
  );
}