import Link from 'next/link';

export const Hero = () => (
  <section className="px-6 py-24 text-center max-w-3xl mx-auto">
    <h1 className="text-5xl md:text-6xl font-serif text-[#111827] mb-6">Ink With History. Art for Today.</h1>
    <p className="text-lg mb-10 text-gray-700">Welcome to tatooey. We’re Cardiff’s home for custom body art that honors the past while pushing the boundaries of modern design.</p>
    <div className="flex gap-4 justify-center">
      <Link href="/gallery" className="px-8 py-3 border-2 border-[#C56A3C] text-[#C56A3C] font-semibold rounded-full hover:bg-[#C56A3C] hover:text-white transition">View Our Art</Link>
      <Link href="/booking" className="px-8 py-3 bg-[#C56A3C] text-white font-semibold rounded-full hover:opacity-90 transition">Book Consultation</Link>
    </div>
  </section>
);