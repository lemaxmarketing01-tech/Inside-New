
import React from 'react';

const About: React.FC = () => {
  return (
    <div className="pt-12">
      {/* Page Header */}
      <div className="bg-black text-white py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl md:text-6xl font-black mb-4 uppercase tracking-tighter">ABOUT <span className="text-orange-500">INSIDE SOLUTION</span></h1>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto font-light">Pioneering IT excellence with a technology-first approach since our inception in Anand.</p>
        </div>
      </div>

      {/* Leadership Section - Vimal Patel */}
      <section className="py-24 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
             <div className="relative">
                <div className="absolute inset-0 bg-orange-500 rounded-3xl rotate-3 scale-105 opacity-10"></div>
                {/* Founder Photo: Vimal Patel */}
                <img 
                  src="https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&q=80&w=800" 
                  alt="Vimal Patel - CEO & Founder" 
                  className="relative z-10 rounded-3xl shadow-2xl w-full h-[600px] object-cover"
                />
                <div className="absolute -bottom-6 -right-6 bg-black p-8 rounded-2xl shadow-xl z-20 border-r-4 border-orange-500">
                  <h3 className="text-white text-2xl font-black">Vimal Patel</h3>
                  <p className="text-orange-500 font-bold text-sm tracking-widest uppercase">CEO & Founder</p>
                </div>
             </div>
             <div>
                <span className="text-orange-500 font-black tracking-widest uppercase text-xs mb-4 block">Voice of Leadership</span>
                <h2 className="text-4xl font-black mb-8 text-black leading-tight">STEERING TECHNOLOGY TOWARDS THE <span className="text-orange-500">FUTURE</span></h2>
                <p className="text-gray-600 mb-6 text-lg leading-relaxed italic border-l-4 border-orange-500 pl-6">
                  "At Inside Solution, we don't just sell boxes or services; we architect the digital backbone of your business. Our mission has always been to bring international tech standards to the local ecosystem of Anand and beyond."
                </p>
                <div className="space-y-6 text-gray-600">
                  <p>
                    Under the visionary leadership of **Vimal Patel**, Inside Solution has grown from a local tech hub into a Pan-India technology partner. With over two decades of technical expertise, Vimal has focused on building a company that prioritizes deep engineering over superficial sales.
                  </p>
                  <p>
                    His philosophy of "Inside Out Excellence" ensures that every server, every surveillance camera, and every network packet is handled with the precision of a craftsman. Under his guidance, the company has established the most advanced in-house diagnostic lab in Gujarat.
                  </p>
                </div>
                {/* Icons removed as per request for a cleaner professional look */}
             </div>
          </div>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-24 bg-zinc-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="order-2 lg:order-1">
              <h2 className="text-3xl font-black mb-6 text-black border-l-8 border-orange-500 pl-6 uppercase">OUR JOURNEY</h2>
              <p className="text-gray-600 mb-6 text-lg leading-relaxed">
                Based in the heart of Anand, Gujarat, **Inside Solution** has emerged as a leading name in the IT sector. We didn't just want to be another computer shop; we aimed to be an end-to-end technology partner. 
              </p>
              <p className="text-gray-600 mb-6 text-lg leading-relaxed">
                Today, we serve a diverse clientele ranging from small retail shops to large-scale industrial corporations across India. Our growth is fueled by our obsession with the latest tools and a commitment to solving complex technical challenges with simplicity and reliability.
              </p>
              <div className="grid grid-cols-2 gap-6 mt-10">
                <div className="p-6 bg-white rounded-2xl border border-gray-100 shadow-sm">
                  <h4 className="text-orange-500 font-black text-3xl mb-1">500+</h4>
                  <p className="text-gray-500 text-xs font-bold uppercase tracking-widest">Enterprise Clients</p>
                </div>
                <div className="p-6 bg-white rounded-2xl border border-gray-100 shadow-sm">
                  <h4 className="text-orange-500 font-black text-3xl mb-1">15+</h4>
                  <p className="text-gray-500 text-xs font-bold uppercase tracking-widest">Years Experience</p>
                </div>
              </div>
            </div>
            <div className="relative order-1 lg:order-2">
              {/* Office Image Update: Inside wall logo */}
              <img 
                src="https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&q=80&w=1000" 
                alt="Inside Solution Wall Logo Office" 
                className="rounded-3xl shadow-2xl border-4 border-white object-cover h-[450px] w-full"
              />
              <div className="absolute -bottom-10 -right-10 hidden xl:block w-64 h-64 border-8 border-orange-500/20 rounded-3xl -z-10"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Vision & Mission */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Updated Vision card to match Mission card styling exactly */}
          <div className="bg-zinc-950 p-12 rounded-[3rem] shadow-xl border-t-8 border-white hover:-translate-y-2 transition-transform duration-500">
            <div className="w-16 h-16 bg-white text-black rounded-2xl flex items-center justify-center mb-6 shadow-lg">
              <i className="fas fa-eye text-2xl"></i>
            </div>
            <h3 className="text-2xl font-black mb-4 text-white">Our Vision</h3>
            <p className="text-gray-400 leading-relaxed font-light">
              To be India's most trusted technology infrastructure partner, driving digital transformation for businesses of all sizes through innovation and unparalleled technical support. We aim to set the gold standard for IT reliability.
            </p>
          </div>
          {/* Mission card (Standard Reference) */}
          <div className="bg-zinc-950 p-12 rounded-[3rem] shadow-xl border-t-8 border-white hover:-translate-y-2 transition-transform duration-500">
            <div className="w-16 h-16 bg-white text-black rounded-2xl flex items-center justify-center mb-6 shadow-lg">
              <i className="fas fa-bullseye text-2xl"></i>
            </div>
            <h3 className="text-2xl font-black mb-4 text-white">Our Mission</h3>
            <p className="text-gray-400 leading-relaxed font-light">
              To provide future-ready IT solutions that are reliable, secure, and cost-effective. We empower our clients with the latest equipment and 24/7 technical expertise to ensure their business never stops, regardless of location.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
