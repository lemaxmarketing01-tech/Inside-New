
import React from 'react';

const WhyUs: React.FC = () => {
  return (
    <div className="pt-12">
      {/* Header */}
      <div className="bg-black text-white py-24 text-center">
        <h1 className="text-5xl md:text-6xl font-black mb-4 uppercase tracking-tighter">WHY <span className="text-orange-500">US?</span></h1>
        <p className="text-gray-400 max-w-xl mx-auto font-light">What makes Inside Solution the elite technology choice for thousands of organizations.</p>
      </div>

      {/* Main Advantage Section */}
      <section className="py-24 bg-white relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center mb-32">
            <div className="relative">
              {/* Image Update: Inside Team (Team in grey polo shirts) */}
              <img 
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80&w=1000" 
                alt="The Inside Solution Team" 
                className="rounded-[40px] shadow-2xl relative z-10 border-4 border-white object-cover h-[500px] w-full"
              />
              <div className="absolute top-10 -left-10 w-full h-full bg-orange-500 rounded-[40px] -z-0 opacity-10 blur-xl"></div>
              
              {/* Floating Fact Card */}
              <div className="absolute -bottom-10 -left-10 bg-white p-8 rounded-3xl shadow-2xl z-20 border-l-8 border-orange-500 max-w-xs">
                 <p className="text-black font-black text-lg mb-2">IN-HOUSE PRECISION</p>
                 <p className="text-gray-500 text-sm">We don't outsource. Every repair and configuration happens in our secure facility.</p>
              </div>
            </div>
            <div>
              <span className="text-orange-500 font-black tracking-widest uppercase text-xs mb-4 block">The Engineering Advantage</span>
              <h2 className="text-4xl font-black mb-8 leading-tight text-black">FULLY EQUIPPED <br/> <span className="text-orange-500">IN-HOUSE</span> FACILITY</h2>
              <div className="space-y-6 text-gray-600 mb-8">
                <p className="text-lg">
                  At **Inside Solution**, we believe that infrastructure support requires more than just a toolkit. Our headquarters in Anand houses a high-tier laboratory and assembly center.
                </p>
                <p>
                  This self-reliance allows us to maintain strict quality control and offer significantly faster turnaround times (TAT) than competitors who rely on external vendors.
                </p>
              </div>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {[
                  { icon: "fa-microchip", text: "Advanced BGA Rework Stations" },
                  { icon: "fa-network-wired", text: "Fiber Splicing Excellence" },
                  { icon: "fa-shield-virus", text: "Secure Data Sanitization" },
                  { icon: "fa-boxes", text: "Live Demo Experience Zones" },
                  { icon: "fa-vial", text: "Burn-in Testing Protocols" },
                  { icon: "fa-tools", text: "OEM Certified Engineers" }
                ].map((item, i) => (
                  <li key={i} className="flex gap-4 items-center group">
                    <div className="bg-orange-100 text-orange-500 rounded-lg w-10 h-10 flex items-center justify-center group-hover:bg-orange-500 group-hover:text-white transition-colors">
                      <i className={`fas ${item.icon} text-sm`}></i>
                    </div>
                    <span className="font-bold text-gray-800 text-sm">{item.text}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Core Pillars */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { title: "Technical Rigor", icon: "fa-rocket", desc: "Access to industrial-grade engineering tools and premium software diagnostic suites for pinpoint accuracy." },
              { title: "Nationwide Reach", icon: "fa-map-marked-alt", desc: "Our logistics network ensures we supply and service organizations from Gujarat to the farthest corners of India." },
              { title: "Human Support", icon: "fa-headset", desc: "No complex IVRs. Get direct access to senior technicians who understand the local and global tech landscape." },
              { title: "Zero Lag Service", icon: "fa-clock", desc: "We understand that downtime costs money. Our rapid response teams are optimized for minimum latency." }
            ].map((card, i) => (
              <div key={i} className="bg-zinc-50 p-10 rounded-[3rem] text-center border-2 border-transparent hover:border-orange-500 transition-all group hover:bg-white hover:shadow-2xl duration-500">
                <div className="w-20 h-20 bg-white rounded-2xl flex items-center justify-center mx-auto mb-8 shadow-inner group-hover:bg-orange-500 group-hover:text-white transition-all text-orange-500 text-3xl group-hover:rotate-12">
                  <i className={`fas ${card.icon}`}></i>
                </div>
                <h3 className="text-xl font-black mb-4 text-black">{card.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed font-light">{card.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Lifecycle Section */}
      <section className="py-24 bg-zinc-950 text-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-1/4 h-full bg-orange-500 opacity-5 -skew-x-12 translate-x-1/2"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
           <div className="text-center mb-20">
              <h2 className="text-4xl font-black mb-4">OUR PRECISION <span className="text-orange-500">LIFECYCLE</span></h2>
              <div className="w-24 h-1 bg-orange-500 mx-auto rounded-full"></div>
           </div>

           <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
              {[
                { step: "01", title: "Consultation", desc: "Deep dive into your workflow and security requirements." },
                { step: "02", title: "Architecture", desc: "Designing a scalable tech stack optimized for performance." },
                { step: "03", title: "Execution", desc: "Seamless deployment by our certified on-ground teams." },
                { step: "04", title: "Evolution", desc: "24/7 Monitoring and periodic system optimizations." }
              ].map((item, i) => (
                <div key={i} className="relative p-8 bg-zinc-900 rounded-3xl border border-zinc-800 hover:border-orange-500 transition-all group">
                   <span className="text-6xl font-black text-zinc-800 absolute top-4 right-4 group-hover:text-orange-500/10 transition-colors">{item.step}</span>
                   <h4 className="text-xl font-black mb-4 relative z-10">{item.title}</h4>
                   <p className="text-gray-500 text-sm relative z-10">{item.desc}</p>
                </div>
              ))}
           </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="bg-black py-24 border-t border-zinc-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-2 md:grid-cols-4 gap-12 text-center text-white">
          <div className="group">
            <p className="text-6xl font-black text-orange-500 mb-2 group-hover:scale-110 transition-transform">15+</p>
            <p className="text-gray-400 font-bold uppercase text-[10px] tracking-widest">Years of Trust</p>
          </div>
          <div className="group">
            <p className="text-6xl font-black text-orange-500 mb-2 group-hover:scale-110 transition-transform">5000+</p>
            <p className="text-gray-400 font-bold uppercase text-[10px] tracking-widest">Project Completions</p>
          </div>
          <div className="group">
            <p className="text-6xl font-black text-orange-500 mb-2 group-hover:scale-110 transition-transform">100%</p>
            <p className="text-gray-400 font-bold uppercase text-[10px] tracking-widest">In-house Execution</p>
          </div>
          <div className="group">
            <p className="text-6xl font-black text-orange-500 mb-2 group-hover:scale-110 transition-transform">24/7</p>
            <p className="text-gray-400 font-bold uppercase text-[10px] tracking-widest">Proactive Support</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default WhyUs;
