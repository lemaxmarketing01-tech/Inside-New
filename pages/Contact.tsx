
import React from 'react';
import { CONTACT_INFO } from '../constants';

const Contact: React.FC = () => {
  return (
    <div className="pt-12">
      <div className="bg-black text-white py-20 text-center">
        <h1 className="text-5xl font-black mb-4">CONTACT <span className="text-orange-500">US</span></h1>
        <p className="text-gray-400 max-w-xl mx-auto">Visit us or get in touch for enterprise-grade IT solutions.</p>
      </div>

      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
            {/* Contact Details */}
            <div>
              <h2 className="text-3xl font-black mb-8 text-black">GET IN TOUCH</h2>
              <div className="space-y-10">
                <div className="flex gap-6 items-start">
                  <div className="w-14 h-14 bg-black text-orange-500 rounded-2xl flex items-center justify-center flex-shrink-0 shadow-lg shadow-orange-500/10">
                    <i className="fas fa-map-marker-alt text-2xl"></i>
                  </div>
                  <div>
                    <h4 className="text-xl font-bold mb-2">Location</h4>
                    <p className="text-gray-500 leading-relaxed">{CONTACT_INFO.address}</p>
                  </div>
                </div>
                <div className="flex gap-6 items-start">
                  <div className="w-14 h-14 bg-black text-orange-500 rounded-2xl flex items-center justify-center flex-shrink-0 shadow-lg shadow-orange-500/10">
                    <i className="fas fa-phone-alt text-2xl"></i>
                  </div>
                  <div>
                    <h4 className="text-xl font-bold mb-2">Phone</h4>
                    <p className="text-gray-500 mb-1">{CONTACT_INFO.phone}</p>
                    <p className="text-orange-500 font-bold text-xs uppercase">Support Hours: 10AM - 8PM</p>
                  </div>
                </div>
                <div className="flex gap-6 items-start">
                  <div className="w-14 h-14 bg-black text-orange-500 rounded-2xl flex items-center justify-center flex-shrink-0 shadow-lg shadow-orange-500/10">
                    <i className="fas fa-envelope text-2xl"></i>
                  </div>
                  <div>
                    <h4 className="text-xl font-bold mb-2">Email</h4>
                    <p className="text-gray-500">{CONTACT_INFO.email}</p>
                  </div>
                </div>
              </div>

              {/* Pan India Badge */}
              <div className="mt-16 p-8 bg-zinc-950 rounded-3xl relative overflow-hidden group">
                <div className="absolute top-0 right-0 w-32 h-full bg-orange-500 opacity-10 -skew-x-12 translate-x-1/2"></div>
                <h3 className="text-white text-2xl font-black mb-4 flex items-center gap-3">
                  <i className="fas fa-globe-asia text-orange-500"></i>
                  PAN INDIA SERVICE
                </h3>
                <p className="text-gray-400">
                  Providing nationwide hardware shipping and networking project management across key regions including Mumbai, Goa, Pune, and Andhra Pradesh.
                </p>
              </div>
            </div>

            {/* Contact Form */}
            <div className="bg-gray-50 p-10 rounded-[40px] shadow-xl border border-gray-100">
              <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-bold text-gray-700 mb-2">Your Name</label>
                    <input type="text" className="w-full bg-white border border-gray-200 rounded-xl px-5 py-4 focus:outline-none focus:ring-2 focus:ring-orange-500 transition-all" placeholder="John Doe" />
                  </div>
                  <div>
                    <label className="block text-sm font-bold text-gray-700 mb-2">Email Address</label>
                    <input type="email" className="w-full bg-white border border-gray-200 rounded-xl px-5 py-4 focus:outline-none focus:ring-2 focus:ring-orange-500 transition-all" placeholder="john@example.com" />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-bold text-gray-700 mb-2">Subject</label>
                  <select className="w-full bg-white border border-gray-200 rounded-xl px-5 py-4 focus:outline-none focus:ring-2 focus:ring-orange-500 transition-all">
                    <option>Product Enquiry</option>
                    <option>Networking Project</option>
                    <option>Security/CCTV Solution</option>
                    <option>AMC Support</option>
                    <option>Career</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-bold text-gray-700 mb-2">Message</label>
                  <textarea rows={5} className="w-full bg-white border border-gray-200 rounded-xl px-5 py-4 focus:outline-none focus:ring-2 focus:ring-orange-500 transition-all" placeholder="Tell us about your IT requirements..."></textarea>
                </div>
                <button type="submit" className="w-full bg-black text-white py-5 rounded-xl font-black text-lg hover:bg-orange-500 transition-all transform hover:scale-105 shadow-xl">
                  SEND MESSAGE
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="h-[550px] bg-zinc-200 relative">
        <div className="absolute inset-0 bg-gray-300">
          <iframe 
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3684.81152011111!2d72.9242!3d22.5664!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjLCsDMzJzU5LjAiTiA3MsKwNTUnMjcuMSJF!5e0!3m2!1sen!2sin!4v1715600000000!5m2!1sen!2sin&q=Shakti+Complex+Anand+Vidyanagar+Rd+Anand" 
            width="100%" 
            height="100%" 
            style={{border:0}} 
            allowFullScreen={true} 
            loading="lazy"
            title="Inside Solution Location"
          ></iframe>
        </div>
        <div className="absolute top-10 left-10 bg-white p-6 rounded-2xl shadow-2xl hidden md:block max-w-sm border-t-8 border-orange-500 z-10">
          <h4 className="font-bold text-lg mb-2 uppercase tracking-tight">INSIDE SOLUTION HQ</h4>
          <p className="text-gray-500 text-sm mb-4">Visit our experience center at Shakti Complex near Pramukh Swami Circle.</p>
          <a 
            href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(CONTACT_INFO.address)}`} 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-orange-500 font-bold flex items-center gap-2 hover:text-black transition-colors"
          >
            Get Directions <i className="fas fa-external-link-alt text-xs"></i>
          </a>
        </div>
      </section>
    </div>
  );
};

export default Contact;
