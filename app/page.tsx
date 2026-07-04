import { Hero } from '@/components/Hero';
import { Navbar } from '@/components/Navbar';

export default function Home() {
  return (
    <main className="min-h-screen bg-[#F3E9D8] text-[#111827]">
      <Navbar />
      <Hero />
      <section className="max-w-7xl mx-auto px-6 py-24">
        <h2 className="text-4xl font-serif text-[#C56A3C] mb-8">Why Choose tatooey?</h2>
        <div className="grid md:grid-cols-3 gap-8">
          <div className="p-6 bg-white rounded-lg shadow-sm">
            <h3 className="text-xl font-bold mb-2">10+ Years of Artistry</h3>
            <p className="text-sm">We bring a decade of professional experience to every needle stroke.</p>
          </div>
          <div className="p-6 bg-white rounded-lg shadow-sm">
            <h3 className="text-xl font-bold mb-2">Welsh Heritage</h3>
            <p className="text-sm">Specializing in Celtic knots and modern Welsh-inspired flash art.</p>
          </div>
          <div className="p-6 bg-white rounded-lg shadow-sm">
            <h3 className="text-xl font-bold mb-2">Safe & Welcoming</h3>
            <p className="text-sm">A hygienic, inclusive studio environment in the heart of Cardiff.</p>
          </div>
        </div>
      </section>
    </main>
  );
}