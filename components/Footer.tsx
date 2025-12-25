
import React from 'react';
import { Link } from 'react-router-dom';
import { NAV_LINKS, CONTACT_INFO } from '../constants';

const Footer: React.FC = () => {
  return (
    <footer className="bg-[#1A1A1A] text-white pt-20 pb-10 border-t-8 border-[#F37021]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
        <div>
          <div className="flex items-center gap-3 mb-8">
            <div className="w-10 h-10 bg-[#F37021] flex items-center justify-center rounded-sm">
              <img src="logo.png" alt="Logo" className="w-full h-full object-contain" />
            </div>
            <div className="flex flex-col">
              <span className="text-xl font-black lowercase">inside</span>
              <span className="text-[10px] font-light tracking-[0.3em] uppercase text-gray-400 -mt-1">SOLUTION</span>
            </div>
          </div>
          <p className="text-gray-400 leading-relaxed mb-8 text-sm">
            Your premier partner for advanced technology solutions. Based in Anand, Gujarat, we deliver cutting-edge hardware, security, and networking systems Pan-India.
          </p>
          <div className="flex space-x-3">
            {[
              { icon: 'fa-facebook-f', link: 'https://www.facebook.com/share/1FUBQyAs8a/?mibextid=wwXIfr' },
              { icon: 'fa-linkedin-in', link: 'https://www.linkedin.com/company/insidesolution/' },
              { icon: 'fa-instagram', link: 'https://www.instagram.com/insidesolutionanand?igsh=czFsd2FhN2RreGxk' },
              { icon: 'fa-whatsapp', link: 'https://wa.me/919824441627' }
            ].map((social, i) => (
              <a 
                key={i} 
                href={social.link} 
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-zinc-800 flex items-center justify-center rounded-md hover:bg-[#F37021] transition-all duration-300"
              >
                <i className={`fab ${social.icon} text-sm`}></i>
              </a>
            ))}
          </div>
        </div>

        <div>
          <h4 className="text-sm font-black uppercase tracking-widest mb-8 border-l-4 border-[#F37021] pl-4">Quick Navigation</h4>
          <ul className="space-y-4">
            {NAV_LINKS.map(link => (
              <li key={link.path}>
                <Link to={link.path} className="text-gray-400 hover:text-[#F37021] transition-colors text-sm flex items-center gap-2 group">
                  <i className="fas fa-angle-right text-[10px] text-[#F37021] group-hover:translate-x-1 transition-transform"></i>
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="text-sm font-black uppercase tracking-widest mb-8 border-l-4 border-[#F37021] pl-4">Tech Services</h4>
          <ul className="space-y-4 text-sm text-gray-400">
            <li className="hover:text-white transition-colors cursor-pointer flex items-center gap-2">
               <span className="w-1.5 h-1.5 rounded-full bg-zinc-700"></span> CCTV & Surveillance
            </li>
            <li className="hover:text-white transition-colors cursor-pointer flex items-center gap-2">
               <span className="w-1.5 h-1.5 rounded-full bg-zinc-700"></span> Network Infrastructure
            </li>
            <li className="hover:text-white transition-colors cursor-pointer flex items-center gap-2">
               <span className="w-1.5 h-1.5 rounded-full bg-zinc-700"></span> Gate Automation
            </li>
            <li className="hover:text-white transition-colors cursor-pointer flex items-center gap-2">
               <span className="w-1.5 h-1.5 rounded-full bg-zinc-700"></span> Access Control
            </li>
            <li className="hover:text-white transition-colors cursor-pointer flex items-center gap-2">
               <span className="w-1.5 h-1.5 rounded-full bg-zinc-700"></span> IT Solutions
            </li>
          </ul>
        </div>

        <div>
          <h4 className="text-sm font-black uppercase tracking-widest mb-8 border-l-4 border-[#F37021] pl-4">Direct Contact</h4>
          <ul className="space-y-5 text-sm">
            <li className="flex gap-4 group">
              <i className="fas fa-map-marker-alt text-[#F37021] mt-1 group-hover:scale-110 transition-transform"></i>
              <span className="text-gray-400">{CONTACT_INFO.address}</span>
            </li>
            <li className="flex gap-4 group">
              <i className="fas fa-phone-alt text-[#F37021] mt-1 group-hover:scale-110 transition-transform"></i>
              <a href={`tel:${CONTACT_INFO.phone.replace(/\s/g, '')}`} className="text-gray-400 hover:text-white transition-all font-bold tracking-wider">{CONTACT_INFO.phone}</a>
            </li>
            <li className="flex gap-4 group">
              <i className="fas fa-envelope text-[#F37021] mt-1 group-hover:scale-110 transition-transform"></i>
              <a href={`mailto:${CONTACT_INFO.email}`} className="text-gray-400 hover:text-white transition-all">{CONTACT_INFO.email}</a>
            </li>
          </ul>
        </div>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-20 pt-8 border-t border-zinc-800/50 flex flex-col md:flex-row justify-between items-center gap-4">
        <p className="text-gray-500 text-[10px] uppercase tracking-widest font-bold">
          &copy; {new Date().getFullYear()} <span className="text-white font-black">inside</span> <span className="text-gray-400 font-light">SOLUTION</span>. India's Tech Partner.
        </p>
        <div className="flex gap-6 text-[10px] font-bold text-gray-500 uppercase tracking-widest">
           <a href="#" className="hover:text-[#F37021]">Privacy Policy</a>
           <a href="#" className="hover:text-[#F37021]">Terms of Service</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
