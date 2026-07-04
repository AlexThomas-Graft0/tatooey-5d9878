import { supabase } from '@/lib/supabaseClient';
import { Navbar } from '@/components/Navbar';

export default async function GalleryPage() {
  const { data: tattoos } = await supabase.from('tattoos').select('*');

  return (
    <main className="min-h-screen bg-[#F3E9D8]">
      <Navbar />
      <div className="max-w-7xl mx-auto px-6 py-12">
        <h1 className="text-4xl font-serif mb-12">The Cardiff Collection</h1>
        <div className="grid md:grid-cols-3 gap-6">
          {tattoos?.map((t) => (
            <div key={t.id} className="bg-white p-2 rounded shadow-sm">
              <img src={t.image_url} alt={t.category} className="w-full h-64 object-cover rounded" />
              <p className="mt-2 text-sm font-semibold p-2">{t.category}</p>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}