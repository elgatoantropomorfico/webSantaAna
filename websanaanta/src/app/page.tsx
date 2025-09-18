import Navbar from '@/components/Navbar/Navbar';
import Hero from '@/components/Hero/Hero';
import Features from '@/components/Features/Features';
import Testimonials from '@/components/Testimonials/Testimonials';
import NearbyAttractions from '@/components/NearbyAttractions/NearbyAttractions';
import FinalCTA from '@/components/FinalCTA/FinalCTA';
import styles from './page.module.css';
import fs from 'fs';
import path from 'path';
import GalleryCarousel from '@/components/GalleryCarousel/GalleryCarousel';

function getPublicImages(): string[] {
  const publicDir = path.join(process.cwd(), 'public');
  const exts = new Set(['.jpg', '.jpeg', '.png', '.webp', '.avif']);
  try {
    const files = fs.readdirSync(publicDir);
    // Only top-level images for now; can be extended to nested folders if needed
    return files
      .filter((f) => exts.has(path.extname(f).toLowerCase()))
      .map((f) => `/${f}`);
  } catch (e) {
    return [];
  }
}

export default function Home() {
  const images = getPublicImages();
  return (
    <div className={styles.page}>
      <Navbar />
      <main>
        <section id="inicio">
          <Hero />
        </section>
        <section id="galeria">
          <GalleryCarousel images={images} />
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
