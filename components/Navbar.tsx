import Link from 'next/link';

export const Navbar = () => (
  <nav className="flex justify-between items-center px-8 py-6 border-b border-[#C56A3C]/20">
    <Link href="/" className="text-2xl font-serif font-bold text-[#C56A3C]">tatooey</Link>
    <div className="space-x-6 text-sm font-medium">
      <Link href="/gallery">Gallery</Link>
      <Link href="/artists">Artists</Link>
      <Link href="/aftercare">Aftercare</Link>
      <Link href="/booking" className="bg-[#C56A3C] text-white px-4 py-2 rounded-full hover:opacity-90">Book Now</Link>
    </div>
  </nav>
);