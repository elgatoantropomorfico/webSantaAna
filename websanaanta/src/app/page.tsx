import Navbar from '@/components/Navbar/Navbar';
import Hero from '@/components/Hero/Hero';
import Features from '@/components/Features/Features';
import Testimonials from '@/components/Testimonials/Testimonials';
import NearbyAttractions from '@/components/NearbyAttractions/NearbyAttractions';
import FinalCTA from '@/components/FinalCTA/FinalCTA';
import styles from './page.module.css';

export default function Home() {
  return (
    <div className={styles.page}>
      <Navbar />
      <main>
        <section id="inicio">
          <Hero />
        </section>
        <section id="caracteristicas">
          <Features />
        </section>
        <section id="testimonios">
          <Testimonials />
        </section>
        <section id="alrededores">
          <NearbyAttractions />
        </section>
        <section id="contacto">
          <FinalCTA />
        </section>
      </main>
    </div>
  );
}
