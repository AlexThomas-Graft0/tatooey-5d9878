'use client';
import { useState } from 'react';
import { supabase } from '@/lib/supabaseClient';
import { Navbar } from '@/components/Navbar';

export default function BookingPage() {
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setLoading(true);
    const formData = new FormData(e.currentTarget);
    
    const { error } = await supabase.from('bookings').insert({
      name: formData.get('name'),
      email: formData.get('email'),
      description: formData.get('description'),
      placement: formData.get('placement'),
      budget: formData.get('budget')
    });

    setLoading(false);
    if (!error) setSuccess(true);
  }

  return (
    <main className="min-h-screen bg-[#F3E9D8]">
      <Navbar />
      <div className="max-w-2xl mx-auto px-6 py-12">
        <h1 className="text-4xl font-serif mb-6">Let’s Start Your Story.</h1>
        {success ? (
          <div className="p-8 bg-green-100 text-green-800 rounded-lg">Thanks! We've received your enquiry and will be in touch soon.</div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4">
            <input name="name" placeholder="Full Name" required className="w-full p-3 rounded border" />
            <input name="email" type="email" placeholder="Email" required className="w-full p-3 rounded border" />
            <input name="placement" placeholder="Placement (e.g., Forearm)" className="w-full p-3 rounded border" />
            <textarea name="description" placeholder="Describe your design idea" required className="w-full p-3 rounded border h-32" />
            <input name="budget" placeholder="Budget Range" className="w-full p-3 rounded border" />
            <button disabled={loading} className="w-full bg-[#C56A3C] text-white py-3 rounded-full hover:opacity-90 disabled:opacity-50">
              {loading ? 'Sending...' : 'Send Inquiry'}
            </button>
          </form>
        )}
      </div>
    </main>
  );
}