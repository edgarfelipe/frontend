import React from 'react';
import Gallery from '../components/Gallery';
import Contact from '../components/Contact';

function Home() {
  return (
    <div>
      <section className="intro">
        <h1>VALÉRIA</h1>
        <p>
          Desde muito jovem, me fascinava o mundo das marcas de luxo, o estilo e o bom gosto...
        </p>
      </section>
      <section className="gallery">
        <h2>Galeria de Marcas</h2>
        <Gallery />
      </section>
      <section className="services">
        <h2>Personal Shopper</h2>
        <p>
          É um termo em inglês usado para se referir ao profissional que presta serviços de compras personalizadas...
        </p>
      </section>
      <section className="clients">
        <h2>Clientes</h2>
        <p>Gabriela Versiane, Romana Novais, Natália Toscano...</p>
      </section>
      <Contact />
    </div>
  );
}

export default Home;
