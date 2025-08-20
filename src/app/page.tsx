import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Services } from './components/Services';
import { Portfolio } from './components/Portfolio';
import { BookingForm } from './components/BookingForm';
import { Testimonials } from './components/Testimonials';
import { Footer } from './components/Footer';

export default function Home() {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <Hero />
        <About />
        <Services />
        <Portfolio />
        <Testimonials />
        <BookingForm />
      </main>
      <Footer />
    </div>
  );
}
