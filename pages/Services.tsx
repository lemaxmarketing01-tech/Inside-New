
import React from 'react';
import { CONTACT_INFO } from '../constants';

const ALL_SERVICES = [
  {
    icon: "fa-video",
    title: "CCTV Surveillance Solutions",
    desc: "Advanced IP and analog monitoring systems with AI-driven analytics, thermal imaging, and long-term cloud/local storage for industrial and residential security.",
    useCase: "Industrial Plants & Smart Cities"
  },
  {
    icon: "fa-door-open",
    title: "Gate Automation Systems",
    desc: "Smart boom barriers, sliding gate motors, and automated bollards integrated with RFID/ANPR for seamless and secure vehicle entry management.",
    useCase: "Corporate Parks & Gated Communities"
  },
  {
    icon: "fa-id-card",
    title: "Turnstile & Access Control",
    desc: "High-speed tripod turnstiles, flap barriers, and biometric readers ensuring only authorized personnel enter sensitive zones.",
    useCase: "Transit Hubs & High-Security Offices"
  },
  {
    icon: "fa-wifi",
    title: "WiFi & Network Connectivity",
    desc: "High-density wireless solutions and campus-wide WiFi mesh networks designed for zero-dead-zones and maximum throughput.",
    useCase: "Educational Campuses & Hotels"
  },
  {
    icon: "fa-tv",
    title: "Interactive Panels & Displays",
    desc: "Smart 4K interactive flat panels with multi-touch capabilities, perfect for modern classrooms and collaborative boardrooms.",
    useCase: "Modern Schools & Conference Rooms"
  },
  {
    icon: "fa-bullhorn",
    title: "PA & Announcement Systems",
    desc: "Zoned public address systems with background music (BGM) capabilities and emergency evacuation integration.",
    useCase: "Shopping Malls & Airports"
  },
  {
    icon: "fa-suitcase-rolling",
    title: "Baggage Scanner Systems",
    desc: "High-resolution X-ray scanning solutions for rapid and accurate detection of contraband in luggage and parcels.",
    useCase: "Hotels, Malls & Govt. Buildings"
  },
  {
    icon: "fa-user-shield",
    title: "Metal Detection Systems",
    desc: "Walk-through metal detectors (WTMD) and hand-held units with multi-zone detection and high sensitivity settings.",
    useCase: "Event Venues & Public Institutions"
  },
  {
    icon: "fa-laptop-code",
    title: "Computing & IT Solutions",
    desc: "End-to-end IT lifecycle management, from enterprise workstations and servers to professional laptop procurement.",
    useCase: "IT Companies & Design Studios"
  },
  {
    icon: "fa-fire-extinguisher",
    title: "Fire Safety Systems",
    desc: "Addressable fire alarm systems, smoke detectors, and suppression solutions compliant with national safety standards.",
    useCase: "Warehouses & Data Centers"
  },
  {
    icon: "fa-th-large",
    title: "Video Wall Solutions",
    desc: "Seamless, large-scale visual display systems for control rooms, command centers, and digital advertising.",
    useCase: "NOC Centers & Retail Signage"
  },
  {
    icon: "fa-project-diagram",
    title: "Network Switching Solutions",
    desc: "Core, distribution, and edge switching architectures using L2/L3 managed switches for robust data backbones.",
    useCase: "Data Centers & Large Enterprises"
  },
  {
    icon: "fa-server",
    title: "Network Rack & Infra Setup",
    desc: "Professional data center rack management, structured fiber/copper cabling, and intelligent power distribution (PDU).",
    useCase: "Server Rooms & IT Hubs"
  },
  {
    icon: "fa-phone-volume",
    title: "EPBX & Communication",
    desc: "Unified communication systems including IP-PBX, VoIP, and traditional intercom solutions for seamless business talk.",
    useCase: "Hospitality & Corporate Offices"
  },
  {
    icon: "fa-print",
    title: "Printer & Office Automation",
    desc: "Managed print services (MPS), heavy-duty photocopiers, and document digitization tools for modern workflows.",
    useCase: "Legal Firms & Administrative Depts"
  },
  {
    icon: "fa-user-lock",
    title: "Firewall & Network Security",
    desc: "Next-gen firewall (NGFW) deployment, VPN setup, and perimeter defense systems to protect against cyber threats.",
    useCase: "Banking & Financial Institutions"
  }
];

const Services: React.FC = () => {
  return (
    <div className="pt-12 bg-white">
      {/* Hero Section */}
      <div className="bg-black text-white py-24 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-full h-full" style={{ backgroundImage: 'radial-gradient(#FF6600 1px, transparent 1px)', backgroundSize: '40px 40px' }}></div>
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <span className="text-orange-500 font-bold tracking-widest uppercase text-sm mb-4 block animate-fade-in">Integrated Tech Ecosystem</span>
          <h1 className="text-5xl md:text-6xl font-black mb-6 leading-tight">ADVANCED <span className="text-orange-500">SOLUTIONS</span> FOR MODERN INFRASTRUCTURE</h1>
          <p className="text-gray-400 text-lg max-w-3xl mx-auto font-light leading-relaxed">
            Inside Solution delivers state-of-the-art technology services backed by fully equipped in-house facilities and a skilled technical team serving clients Pan-India.
          </p>
        </div>
      </div>

      {/* Services Grid */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {ALL_SERVICES.map((s, idx) => (
              <div key={idx} className="group p-8 bg-white border border-gray-100 rounded-2xl hover:shadow-2xl hover:border-orange-500/30 transition-all duration-500 flex flex-col h-full">
                <div className="w-14 h-14 bg-zinc-50 text-orange-500 rounded-xl flex items-center justify-center mb-6 group-hover:bg-orange-500 group-hover:text-white transition-all duration-500 shadow-inner">
                  <i className={`fas ${s.icon} text-xl`}></i>
                </div>
                <h3 className="text-xl font-black mb-3 text-black leading-tight group-hover:text-orange-600 transition-colors">{s.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed mb-6 flex-grow">{s.desc}</p>
                <div className="pt-4 border-t border-gray-50">
                  <span className="text-[10px] font-bold text-gray-400 uppercase tracking-tighter block mb-1">Key Use Case:</span>
                  <span className="text-xs font-bold text-black bg-orange-50 px-3 py-1 rounded-full inline-block">{s.useCase}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Facilities Section */}
      <section className="py-20 bg-zinc-950 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-orange-500 rounded-[3rem] p-12 md:p-20 relative overflow-hidden flex flex-col lg:flex-row items-center gap-12">
            <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full -mr-32 -mt-32 blur-3xl"></div>
            <div className="lg:w-2/3 relative z-10">
              <h2 className="text-4xl md:text-5xl font-black mb-6">FULLY EQUIPPED FOR EXCELLENCE</h2>
              <p className="text-xl text-white/90 mb-8 font-light leading-relaxed">
                Our in-house facility in Anand is armed with modern tools, diagnostic equipment, and a vast inventory, enabling us to deliver future-ready solutions with unmatched efficiency across India.
              </p>
              <div className="flex flex-wrap gap-4">
                <div className="bg-black/20 backdrop-blur-md px-6 py-3 rounded-full border border-white/10 flex items-center gap-2">
                  <i className="fas fa-check-circle"></i>
                  <span className="font-bold text-sm">Advanced Testing Lab</span>
                </div>
                <div className="bg-black/20 backdrop-blur-md px-6 py-3 rounded-full border border-white/10 flex items-center gap-2">
                  <i className="fas fa-check-circle"></i>
                  <span className="font-bold text-sm">Pan-India Support</span>
                </div>
                <div className="bg-black/20 backdrop-blur-md px-6 py-3 rounded-full border border-white/10 flex items-center gap-2">
                  <i className="fas fa-check-circle"></i>
                  <span className="font-bold text-sm">In-House Repair Center</span>
                </div>
              </div>
            </div>
            <div className="lg:w-1/3 text-center relative z-10">
               <a 
                href={`tel:${CONTACT_INFO.phone.replace(/\s/g, '')}`}
                className="inline-block bg-white text-orange-600 px-12 py-5 rounded-full font-black text-xl hover:bg-zinc-100 transition-all transform hover:scale-110 shadow-2xl"
              >
                CONSULT NOW
              </a>
              <p className="mt-4 text-white/70 text-sm italic">Contact us for custom consultation and pricing</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Footer Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-black mb-4">NOT SURE WHICH SOLUTION YOU NEED?</h2>
          <p className="text-gray-500 mb-10 max-w-2xl mx-auto">Our technology experts are ready to help you architect the perfect IT and security infrastructure for your specific needs.</p>
          <div className="flex justify-center gap-6">
             <a href={`mailto:${CONTACT_INFO.email}`} className="bg-black text-white px-10 py-4 rounded-xl font-bold hover:bg-zinc-800 transition-all">
               EMAIL ENQUIRY
             </a>
             <a href={`tel:${CONTACT_INFO.phone.replace(/\s/g, '')}`} className="border-2 border-black text-black px-10 py-4 rounded-xl font-bold hover:bg-black hover:text-white transition-all">
               SPEAK TO EXPERT
             </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;
