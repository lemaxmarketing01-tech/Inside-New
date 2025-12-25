
import React, { useState } from 'react';

const CATEGORIES = ['All', 'Computing', 'Security', 'Networking', 'Accessories'];

const PRODUCTS = [
  { id: 1, name: 'Precision Workstation', cat: 'Computing', img: 'https://images.unsplash.com/photo-1593642632823-8f785ba67e45?auto=format&fit=crop&q=80&w=500', price: 'Enterprise Grade' },
  { id: 2, name: 'AI Face Recognition Cam', cat: 'Security', img: 'https://images.unsplash.com/photo-1557597774-9d2739f85a76?auto=format&fit=crop&q=80&w=500', price: 'Starting ₹12,000' },
  { id: 3, name: 'Managed L3 Switch', cat: 'Networking', img: 'https://images.unsplash.com/photo-1544197150-b99a580bb7a8?auto=format&fit=crop&q=80&w=500', price: 'High Bandwidth' },
  { id: 4, name: 'High-End Gaming PC', cat: 'Computing', img: 'https://images.unsplash.com/photo-1587831990711-23ca6441447b?auto=format&fit=crop&q=80&w=500', price: 'Custom Built' },
  { id: 5, name: 'Night Vision Dome Cam', cat: 'Security', img: 'https://images.unsplash.com/photo-1521791136064-7986c29598a5?auto=format&fit=crop&q=80&w=500', price: 'Starting ₹4,500' },
  { id: 6, name: 'Mechanical RGB Keyboard', cat: 'Accessories', img: 'https://images.unsplash.com/photo-1511467687858-23d96c32e4ae?auto=format&fit=crop&q=80&w=500', price: 'Premium Feel' },
  { id: 7, name: 'Smart Video Doorbell', cat: 'Security', img: 'https://images.unsplash.com/photo-1558002038-1055907df827?auto=format&fit=crop&q=80&w=500', price: 'IoT Enabled' },
  { id: 8, name: 'Enterprise Wi-Fi 6 AP', cat: 'Networking', img: 'https://images.unsplash.com/photo-1614064641938-3bbee52942c7?auto=format&fit=crop&q=80&w=500', price: 'Wide Coverage' },
];

const Products: React.FC = () => {
  const [activeCat, setActiveCat] = useState('All');

  const filtered = activeCat === 'All' ? PRODUCTS : PRODUCTS.filter(p => p.cat === activeCat);

  return (
    <div className="pt-12">
      <div className="bg-black text-white py-20 text-center">
        <h1 className="text-5xl font-black mb-4">OUR <span className="text-orange-500">PRODUCTS</span></h1>
        <p className="text-gray-400 max-w-xl mx-auto">Latest hardware and components from world-leading brands.</p>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-4 mb-16">
          {CATEGORIES.map(cat => (
            <button
              key={cat}
              onClick={() => setActiveCat(cat)}
              className={`px-8 py-2 rounded-full font-bold transition-all border-2 ${
                activeCat === cat 
                  ? 'bg-orange-500 border-orange-500 text-white' 
                  : 'bg-white border-zinc-200 text-gray-500 hover:border-orange-500 hover:text-orange-500'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {filtered.map(product => (
            <div key={product.id} className="group bg-white rounded-2xl overflow-hidden shadow-lg border border-gray-100 hover:border-orange-500 transition-all transform hover:-translate-y-1">
              <div className="relative aspect-square overflow-hidden">
                <img src={product.img} alt={product.name} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
                <div className="absolute top-4 left-4 bg-black/80 text-white text-[10px] font-bold px-3 py-1 rounded-full backdrop-blur-sm">
                  {product.cat}
                </div>
              </div>
              <div className="p-6">
                <h3 className="font-black text-lg mb-2 group-hover:text-orange-500 transition-colors">{product.name}</h3>
                <p className="text-orange-500 font-bold mb-6">{product.price}</p>
                <button className="w-full bg-zinc-900 text-white py-3 rounded-lg font-bold group-hover:bg-orange-500 transition-colors flex items-center justify-center gap-2">
                  <i className="fas fa-shopping-cart text-xs"></i>
                  ENQUIRE NOW
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Note */}
        <div className="mt-20 p-10 bg-zinc-950 rounded-3xl text-center text-white">
          <h2 className="text-2xl font-bold mb-4">Looking for customized server configurations?</h2>
          <p className="text-gray-400 mb-8">We specialize in building tailor-made workstations and enterprise servers based on your software needs.</p>
          <button className="bg-orange-500 text-white px-10 py-4 rounded-full font-bold hover:bg-orange-600 transition-all">
            CONSULT OUR TECH TEAM
          </button>
        </div>
      </div>
    </div>
  );
};

export default Products;
