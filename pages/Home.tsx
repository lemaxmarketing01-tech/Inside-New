
import React from 'react';
import { Link } from 'react-router-dom';
import { CONTACT_INFO } from '../constants';

const CLIENTS = [
  { name: 'Amul', logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c8/Amul_logo.svg/1200px-Amul_logo.svg.png' },
  { name: 'NDDB', logo: 'https://upload.wikimedia.org/wikipedia/en/b/b5/NDDB_Logo.png' },
  { name: 'SBI', logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/cc/SBI-logo.svg/1200px-SBI-logo.svg.png' },
  { name: 'Zydus', logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/ee/Zydus_Lifesciences_logo.svg/2560px-Zydus_Lifesciences_logo.svg.png' },
  { name: 'Sterling', logo: 'https://upload.wikimedia.org/wikipedia/en/thumb/5/52/Sterling_Hospitals_Logo.svg/1200px-Sterling_Hospitals_Logo.svg.png' },
  { name: 'INOX', logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/0a/Inox_Leisure_Logo.svg/1200px-Inox_Leisure_Logo.svg.png' },
  { name: 'Taco Bell', logo: 'https://upload.wikimedia.org/wikipedia/en/thumb/b/b3/Taco_Bell_2016.svg/1200px-Taco_Bell_2016.svg.png' },
  { name: 'Jindal', logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/07/Jindal_Steel_%26_Power_Logo.svg/1200px-Jindal_Steel_%26_Power_Logo.svg.png' },
  { name: 'Bank of India', logo: 'https://upload.wikimedia.org/wikipedia/en/thumb/3/3a/Bank_of_India_logo.svg/1200px-Bank_of_India_logo.svg.png' },
  { name: 'Parul University', logo: 'https://upload.wikimedia.org/wikipedia/en/7/70/Parul_University_logo.png' },
  { name: 'PVR', logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/0d/PVR_Cinemas_Logo.svg/1200px-PVR_Cinemas_Logo.svg.png' },
  { name: 'Mother\'s Recipe', logo: 'https://images.jdmagicbox.com/comp/pune/l6/0212px212.x212.120502125712.s8l6/catalogue/mothers-recipe-hadapsar-industrial-estate-pune-pickle-manufacturers-xxt532n27a.jpg' }
];

const Home: React.FC = () => {
  return (
    <div className="overflow-hidden">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center bg-black overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&q=80&w=2070" 
            alt="Inside Solution Tech" 
            className="w-full h-full object-cover opacity-30"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black via-black/80 to-transparent"></div>
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-white">
          <div className="max-w-3xl">
            <h1 className="text-5xl md:text-7xl font-black leading-tight mb-6 animate-fade-in-up">
              ADVANCED <span className="text-orange-500 underline decoration-4 underline-offset-8">TECHNOLOGY</span> SOLUTIONS FOR THE FUTURE
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-10 leading-relaxed font-light">
              Inside Solution provides cutting-edge IT infrastructure, security systems, and enterprise networking services across India. Fully equipped with in-house facilities and modern tech tools.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a 
                href={`tel:${CONTACT_INFO.phone.replace(/\s/g, '')}`}
                className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-4 rounded-md font-bold text-lg text-center transition-all transform hover:scale-105 flex items-center justify-center gap-3 shadow-lg shadow-orange-500/20"
              >
                <i className="fas fa-phone-alt"></i>
                CALL US NOW
              </a>
              <Link 
                to="/services" 
                className="border-2 border-white hover:bg-white hover:text-black text-white px-8 py-4 rounded-md font-bold text-lg text-center transition-all"
              >
                OUR SERVICES
              </Link>
            </div>
          </div>
        </div>

        {/* Floating Badges */}
        <div className="absolute bottom-10 right-10 hidden lg:flex flex-col gap-4">
          <div className="bg-white/10 backdrop-blur-md border border-white/20 p-4 rounded-xl flex items-center gap-4 animate-bounce-slow">
            <div className="w-12 h-12 bg-orange-500 rounded-full flex items-center justify-center"><i className="fas fa-check"></i></div>
            <div>
              <p className="font-bold text-white">PAN INDIA</p>
              <p className="text-xs text-gray-300">Service Coverage</p>
            </div>
          </div>
        </div>
      </section>

      {/* NEW: Our Esteemed Clients Auto-Scroll Section */}
      <section className="py-12 bg-white border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <h2 className="text-sm font-black text-gray-400 tracking-[0.3em] uppercase mb-2">OUR ESTEEMED CLIENTS</h2>
            <div className="w-12 h-1 bg-orange-500 mx-auto rounded-full"></div>
          </div>
        </div>
        
        <div className="overflow-hidden whitespace-nowrap relative">
          {/* Gradient Overlays for smooth edge transitions */}
          <div className="absolute top-0 left-0 w-20 h-full bg-gradient-to-r from-white to-transparent z-10"></div>
          <div className="absolute top-0 right-0 w-20 h-full bg-gradient-to-l from-white to-transparent z-10"></div>
          
          <div className="client-track">
            {/* First Set of Logos */}
            {CLIENTS.map((client, i) => (
              <div key={`set1-${i}`} className="client-logo-container">
                <img 
                  src={client.logo} 
                  alt={`${client.name} Logo`} 
                  className="client-logo-item" 
                  title={client.name}
                />
              </div>
            ))}
            {/* Duplicate Set for Seamless Loop */}
            {CLIENTS.map((client, i) => (
              <div key={`set2-${i}`} className="client-logo-container">
                <img 
                  src={client.logo} 
                  alt={`${client.name} Logo`} 
                  className="client-logo-item"
                  title={client.name}
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Trust Banner */}
      <section className="bg-zinc-900 py-10 border-y border-zinc-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center md:justify-between items-center gap-8 opacity-60 grayscale hover:grayscale-0 transition-all duration-500">
            <span className="text-2xl font-bold text-white">DELL</span>
            <span className="text-2xl font-bold text-white">HP</span>
            <span className="text-2xl font-bold text-white">LENOVO</span>
            <span className="text-2xl font-bold text-white">HIKVISION</span>
            <span className="text-2xl font-bold text-white">CP PLUS</span>
            <span className="text-2xl font-bold text-white">CISCO</span>
          </div>
        </div>
      </section>

      {/* Features / USP */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-4xl font-black text-black mb-4">WHY CHOOSE <span className="text-orange-500">INSIDE SOLUTION?</span></h2>
            <div className="w-24 h-1.5 bg-orange-500 mx-auto rounded-full mb-6"></div>
            <p className="text-gray-500 max-w-2xl mx-auto text-lg">
              We stand apart through our commitment to quality, speed, and advanced technical prowess.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {[
              { 
                icon: "fa-microchip", 
                title: "Latest Technology", 
                desc: "Equipped with state-of-the-art diagnostic and testing equipment for all IT repairs and setups." 
              },
              { 
                icon: "fa-users-cog", 
                title: "Expert Team", 
                desc: "Highly skilled technical professionals with deep domain expertise in networking and security." 
              },
              { 
                icon: "fa-globe-asia", 
                title: "India-Wide Support", 
                desc: "Reliable service delivery and maintenance support reaching every corner of the country." 
              }
            ].map((feature, i) => (
              <div key={i} className="group p-10 bg-gray-50 rounded-3xl hover:bg-black transition-all duration-500 shadow-sm hover:shadow-2xl hover:shadow-orange-500/20 transform hover:-translate-y-2">
                <div className="w-20 h-20 bg-orange-100 group-hover:bg-orange-500 rounded-2xl flex items-center justify-center mb-8 transition-colors duration-500">
                  <i className={`fas ${feature.icon} text-3xl text-orange-500 group-hover:text-white`}></i>
                </div>
                <h3 className="text-2xl font-bold mb-4 group-hover:text-white transition-colors">{feature.title}</h3>
                <p className="text-gray-500 group-hover:text-gray-400 transition-colors leading-relaxed">
                  {feature.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Quick Services Overview */}
      <section className="py-24 bg-zinc-950 text-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-1/3 h-full bg-orange-500 opacity-5 -skew-x-12 translate-x-1/2"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="flex flex-col lg:flex-row items-center gap-16">
            <div className="lg:w-1/2">
              <h2 className="text-4xl font-black mb-8 leading-tight">
                COMPREHENSIVE <br/>
                <span className="text-orange-500">ENTERPRISE SOLUTIONS</span>
              </h2>
              <ul className="space-y-6">
                {[
                  "Server & Data Center Setup",
                  "Structured Network Cabling",
                  "CCTV & Biometric Security Systems",
                  "Fire Safety & Industrial Security",
                  "Corporate Laptop/Desktop Procurement"
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-4 text-xl group">
                    <span className="w-8 h-8 rounded-full border border-orange-500 flex items-center justify-center text-orange-500 group-hover:bg-orange-500 group-hover:text-white transition-all text-xs">
                      <i className="fas fa-check"></i>
                    </span>
                    <span className="text-gray-300 group-hover:text-white transition-colors">{item}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-12">
                <Link to="/services" className="bg-white text-black px-10 py-4 rounded-md font-bold hover:bg-orange-500 hover:text-white transition-all">
                  VIEW ALL SERVICES
                </Link>
              </div>
            </div>
            <div className="lg:w-1/2">
              <div className="relative group">
                <img 
                  src="https://images.unsplash.com/photo-1558494949-ef010cbdcc51?auto=format&fit=crop&q=80&w=1000" 
                  alt="Tech Infrastructure" 
                  className="rounded-3xl shadow-2xl transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute -bottom-6 -left-6 bg-orange-500 p-8 rounded-2xl shadow-xl animate-pulse">
                  <p className="text-5xl font-black">15+</p>
                  <p className="font-bold text-sm">Years of Excellence</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-orange-500">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-black text-white mb-8">
            READY TO UPGRADE YOUR TECHNOLOGY?
          </h2>
          <p className="text-white/80 text-xl mb-12 max-w-2xl mx-auto font-light">
            Contact us today for a free technology assessment or a customized quote for your business requirements.
          </p>
          <a 
            href={`tel:${CONTACT_INFO.phone.replace(/\s/g, '')}`}
            className="inline-flex items-center gap-4 bg-black text-white px-12 py-5 rounded-full font-bold text-xl hover:bg-zinc-900 transition-all transform hover:scale-110 shadow-2xl"
          >
            <i className="fas fa-phone-alt"></i>
            CALL US NOW
          </a>
        </div>
      </section>
    </div>
  );
};

export default Home;
