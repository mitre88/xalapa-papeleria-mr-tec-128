export default function Home() {
  return (
    <main className="page">
      <header className="hero">
        <span className="badge">Papelería & centro de impresión</span>
        <h1>Papelería MR Tec. 128</h1>
        <p className="subtitle">
          Soluciones rápidas de papelería e impresión en la zona de Inmecafé.
        </p>
        <p className="hero-notes">
          Imprime, escanea y consigue accesorios básicos de cómputo sin dar
          vueltas.
        </p>
        <div className="cta">
          <a className="btn" href="tel:2283732369">Llámanos</a>
          <a
            className="btn wa"
            href="https://wa.me/2283732369"
            target="_blank"
            rel="noreferrer"
          >
            WhatsApp
          </a>
          <a className="btn ghost" href="#ubicacion">Ver ubicación</a>
        </div>
        <div className="highlights grid grid-3">
          <div className="highlight">
            <strong>Imprime y escanea</strong>
            <span>Documentos listos en minutos.</span>
          </div>
          <div className="highlight">
            <strong>Accesorios útiles</strong>
            <span>Memorias, cables y artículos básicos.</span>
          </div>
          <div className="highlight">
            <strong>Atención personalizada</strong>
            <span>Te ayudamos a resolver tareas y trámites.</span>
          </div>
        </div>
      </header>

      <section className="section" id="servicios">
        <h2>Servicios</h2>
        <div className="grid grid-3">
          <div className="panel">
            <h3>Impresiones y copias</h3>
            <p>Blanco y negro o color con buena calidad.</p>
          </div>
          <div className="panel">
            <h3>Escaneo y envío</h3>
            <p>Digitaliza documentos para tus trámites.</p>
          </div>
          <div className="panel">
            <h3>Papelería básica</h3>
            <p>Útiles, cuadernos y artículos de oficina.</p>
          </div>
        </div>
      </section>

      <section className="section" id="beneficios">
        <h2>Beneficios</h2>
        <div className="grid grid-3">
          <div className="panel">
            <h3>Servicio rápido</h3>
            <p>Resolvemos tus pendientes en una visita.</p>
          </div>
          <div className="panel">
            <h3>Buena ubicación</h3>
            <p>Cerca de Inmecafé, fácil de ubicar.</p>
          </div>
          <div className="panel">
            <h3>Atención confiable</h3>
            <p>Te orientamos para elegir lo mejor.</p>
          </div>
        </div>
      </section>

      <section className="section" id="testimonios">
        <h2>Testimonios</h2>
        <div className="grid grid-2">
          <blockquote className="quote">
            “Imprimen rápido y te ayudan con el formato.”
            <span>— Patricia, estudiante</span>
          </blockquote>
          <blockquote className="quote">
            “Siempre encuentro el cable o memoria que necesito.”
            <span>— Ricardo, vecino</span>
          </blockquote>
        </div>
      </section>

      <section className="section" id="horarios">
        <h2>Horario</h2>
        <div className="panel">
          <p>🕘 Lunes a Sábado: 8:00 am – 7:00 pm</p>
          <p>🕘 Domingo: 9:00 am – 2:00 pm</p>
          <p className="muted">(Horario sujeto a cambios, confírmalo antes de ir)</p>
        </div>
      </section>

      <section className="section" id="ubicacion">
        <h2>Ubicación y contacto</h2>
        <div className="location-card grid grid-2">
          <div>
            <p>📍 Tepic 16, Inmecafé, 91067 Xalapa-Enríquez, Ver.</p>
            <ul>
              <li><strong>Teléfono:</strong> 228 373 2369</li>
              <li><strong>WhatsApp:</strong> 2283732369</li>
            </ul>
          </div>
          <div>
            <p>
              Estamos en la colonia Inmecafé, con servicio ágil para estudiantes
              y oficinas.
            </p>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="cta-banner">
          <div>
            <h3>¿Necesitas imprimir hoy?</h3>
            <p>Envíanos tu archivo y lo dejamos listo.</p>
          </div>
          <div className="cta">
            <a className="btn" href="tel:2283732369">Llamar</a>
            <a
              className="btn wa"
              href="https://wa.me/2283732369"
              target="_blank"
              rel="noreferrer"
            >
              WhatsApp
            </a>
          </div>
        </div>
      </section>

      <footer className="footer">
        <p>Hecho con cariño en Xalapa. ¡Te esperamos!</p>
      </footer>
    </main>
  );
}
