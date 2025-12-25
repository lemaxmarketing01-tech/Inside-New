
import React from 'react';

const TESTIMONIALS = [
  {
    name: "Rajesh Patel",
    company: "Gujarat Industrial Corp",
    text: "Inside Solution transformed our office networking. The transition to Wi-Fi 6 and organized cabling has improved our productivity immensely. Their technical team is top-notch.",
    avatar: "https://i.pravatar.cc/150?u=rp"
  },
  {
    name: "Anita Shah",
    company: "Creative Studios",
    text: "We needed high-end workstations for our video editing team. Inside Solution built custom rigs that outperformed our expectations. Best IT vendor in Anand!",
    avatar: "https://i.pravatar.cc/150?u=as"
  },
  {
    name: "Vikram Mehta",
    company: "Hotel Grand Palace",
    text: "Their CCTV and biometric solutions are highly reliable. The remote monitoring setup works flawlessly. Highly recommend their Annual Maintenance services.",
    avatar: "https://i.pravatar.cc/150?u=vm"
  }
];

const CATEGORIZED_CLIENTS = [
  {
    category: "Industrial",
    logos: [
      { name: "Amul", url: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c8/Amul_logo.svg/1200px-Amul_logo.svg.png" },
      { name: "NDDB", url: "https://upload.wikimedia.org/wikipedia/en/b/b5/NDDB_Logo.png" },
      { name: "GMM Pfaudler", url: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/49/GMM_Pfaudler_Logo.svg/1200px-GMM_Pfaudler_Logo.svg.png" },
      { name: "Mother's Recipe", url: "https://images.jdmagicbox.com/comp/pune/l6/0212px212.x212.120502125712.s8l6/catalogue/mothers-recipe-hadapsar-industrial-estate-pune-pickle-manufacturers-xxt532n27a.jpg" },
      { name: "Jindal Steel", url: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/07/Jindal_Steel_%26_Power_Logo.svg/1200px-Jindal_Steel_%26_Power_Logo.svg.png" },
      { name: "Duravit", url: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/40/Duravit_Logo.svg/1280px-Duravit_Logo.svg.png" }
    ]
  },
  {
    category: "Education",
    logos: [
      { name: "Parul University", url: "https://upload.wikimedia.org/wikipedia/en/7/70/Parul_University_logo.png" },
      { name: "IRMA", url: "https://upload.wikimedia.org/wikipedia/en/7/7e/IRMA_Logo.png" },
      { name: "Knowledge Group", url: "https://images.jdmagicbox.com/comp/anand/r6/0269px269.x269.170607185023.v4r6/catalogue/knowledge-high-school-bakrol-road-anand-schools-0sh6m05l5z.jpg" },
      { name: "SP University", url: "https://upload.wikimedia.org/wikipedia/en/1/14/Sardar_Patel_University_logo.png" }
    ]
  },
  {
    category: "Retail Chains",
    logos: [
      { name: "Taco Bell", url: "https://upload.wikimedia.org/wikipedia/en/thumb/b/b3/Taco_Bell_2016.svg/1200px-Taco_Bell_2016.svg.png" },
      { name: "INOX", url: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0a/Inox_Leisure_Logo.svg/1200px-Inox_Leisure_Logo.svg.png" },
      { name: "Kalyan Jewellers", url: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f6/Kalyan_Jewellers_logo.svg/2560px-Kalyan_Jewellers_logo.svg.png" },
      { name: "PVR", url: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0d/PVR_Cinemas_Logo.svg/1200px-PVR_Cinemas_Logo.svg.png" },
      { name: "Smart Superstore", url: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/23/Reliance_Smart_logo.svg/2560px-Reliance_Smart_logo.svg.png" }
    ]
  },
  {
    category: "Hospital",
    logos: [
      { name: "Zydus", url: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/ee/Zydus_Lifesciences_logo.svg/2560px-Zydus_Lifesciences_logo.svg.png" },
      { name: "Sterling Hospitals", url: "https://upload.wikimedia.org/wikipedia/en/thumb/5/52/Sterling_Hospitals_Logo.svg/1200px-Sterling_Hospitals_Logo.svg.png" },
      { name: "Sankara Eye", url: "https://upload.wikimedia.org/wikipedia/en/thumb/8/87/Sankara_Eye_Care_Institutions_Logo.svg/1200px-Sankara_Eye_Care_Institutions_Logo.svg.png" },
      { name: "Shree Krishna", url: "https://www.charutarhealth.org/sites/default/files/logo_0.png" }
    ]
  },
  {
    category: "Bank",
    logos: [
      { name: "SBI", url: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/cc/SBI-logo.svg/1200px-SBI-logo.svg.png" },
      { name: "Bank of India", url: "https://upload.wikimedia.org/wikipedia/en/thumb/3/3a/Bank_of_India_logo.svg/1200px-Bank_of_India_logo.svg.png" },
      { name: "Union Bank", url: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e0/Union_Bank_of_India_logo.svg/1200px-Union_Bank_of_India_logo.svg.png" }
    ]
  }
];

const Clients: React.FC = () => {
  return (
    <div className="pt-12 bg-white">
      {/* Header */}
      <div className="bg-black text-white py-20 text-center">
        <h1 className="text-5xl font-black mb-4 uppercase tracking-tighter">OUR <span className="text-orange-500">CLIENTS</span></h1>
        <p className="text-gray-400 max-w-xl mx-auto font-light">Building trust through consistent quality and technical reliability.</p>
      </div>

      {/* Testimonials */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
            {TESTIMONIALS.map((t, idx) => (
              <div key={idx} className="bg-gray-50 p-10 rounded-[40px] shadow-sm hover:shadow-2xl transition-all duration-500 relative">
                <div className="text-orange-500 text-5xl opacity-20 absolute top-8 right-8"><i className="fas fa-quote-right"></i></div>
                <div className="flex items-center gap-4 mb-8">
                  <img src={t.avatar} alt={t.name} className="w-16 h-16 rounded-full border-4 border-white shadow-md" />
                  <div>
                    <h4 className="font-black text-lg">{t.name}</h4>
                    <p className="text-orange-500 text-sm font-bold uppercase tracking-widest">{t.company}</p>
                  </div>
                </div>
                <p className="text-gray-600 italic leading-relaxed text-lg">"{t.text}"</p>
                <div className="mt-8 flex text-orange-500">
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Trust Grid Icons */}
      <section className="py-24 bg-zinc-50 border-y border-zinc-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-black mb-16 text-black uppercase tracking-tighter">TRUSTED BY ORGANIZATIONS ACROSS SECTORS</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-10 opacity-60">
            <div className="flex flex-col items-center gap-3">
              <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center shadow-sm text-zinc-800"><i className="fas fa-hospital text-2xl"></i></div>
              <span className="text-[10px] font-bold tracking-widest">HEALTHCARE</span>
            </div>
            <div className="flex flex-col items-center gap-3">
              <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center shadow-sm text-zinc-800"><i className="fas fa-university text-2xl"></i></div>
              <span className="text-[10px] font-bold tracking-widest">EDUCATION</span>
            </div>
            <div className="flex flex-col items-center gap-3">
              <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center shadow-sm text-zinc-800"><i className="fas fa-industry text-2xl"></i></div>
              <span className="text-[10px] font-bold tracking-widest">INDUSTRIAL</span>
            </div>
            <div className="flex flex-col items-center gap-3">
              <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center shadow-sm text-zinc-800"><i className="fas fa-store text-2xl"></i></div>
              <span className="text-[10px] font-bold tracking-widest">RETAIL</span>
            </div>
            <div className="flex flex-col items-center gap-3">
              <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center shadow-sm text-zinc-800"><i className="fas fa-hotel text-2xl"></i></div>
              <span className="text-[10px] font-bold tracking-widest">HOSPITALITY</span>
            </div>
            <div className="flex flex-col items-center gap-3">
              <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center shadow-sm text-zinc-800"><i className="fas fa-building text-2xl"></i></div>
              <span className="text-[10px] font-bold tracking-widest">CORPORATE</span>
            </div>
          </div>
        </div>
      </section>

      {/* NEW: Detailed Client Portfolio Logo Grid */}
      <section className="py-24 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-24">
            <h2 className="text-5xl font-black text-black mb-6 uppercase tracking-tighter">OUR <span className="text-orange-500">CLIENTS</span></h2>
            <p className="text-gray-500 max-w-2xl mx-auto text-lg font-light leading-relaxed">
              We empower industry leaders with resilient IT infrastructure and security solutions. Here are some of the organizations that trust Inside Solution.
            </p>
          </div>

          <div className="space-y-24">
            {CATEGORIZED_CLIENTS.map((section, sIdx) => (
              <div key={sIdx}>
                <div className="flex items-center gap-6 mb-12">
                  <h3 className="text-sm font-black text-gray-400 uppercase tracking-[0.4em] flex-shrink-0">{section.category}</h3>
                  <div className="h-px bg-gray-100 w-full"></div>
                </div>
                
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-6">
                  {section.logos.map((logo, lIdx) => (
                    <div 
                      key={lIdx} 
                      className="group bg-white rounded-2xl p-6 shadow-[0_10px_40px_rgba(0,0,0,0.04)] hover:shadow-[0_15px_50px_rgba(0,0,0,0.08)] transition-all duration-300 flex items-center justify-center aspect-[3/2] border border-gray-50"
                    >
                      <img 
                        src={logo.url} 
                        alt={logo.name} 
                        className="max-w-[85%] max-h-[75%] object-contain filter grayscale group-hover:grayscale-0 transition-all duration-500 transform group-hover:scale-105" 
                        title={logo.name}
                        onError={(e) => {
                          e.currentTarget.src = `https://via.placeholder.com/200x120?text=${logo.name}`;
                        }}
                      />
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Bottom Banner */}
      <section className="bg-black py-20 text-center">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-3xl font-black text-white mb-8">PARTNER WITH THE BEST IN TECH</h2>
          <button className="bg-orange-500 hover:bg-orange-600 text-white px-10 py-4 rounded-full font-black tracking-widest transition-all transform hover:scale-105">
            GET A CUSTOM QUOTE
          </button>
        </div>
      </section>
    </div>
  );
};

export default Clients;
