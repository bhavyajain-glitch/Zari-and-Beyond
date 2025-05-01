import React from 'react';
import Title from '../components/Title';
import { assets } from '../assets/frontend_assets/assets';
import Newsletter from '../components/Newsletter';

const Contact = () => {
  return (
    <div className="pt-20 px-8 max-w-7xl mx-auto">
      {/* Page Header */}
      <div className="text-center">
        <Title text1="CONTACT" text2="US" />
        <p className="mt-6 text-gray-600 max-w-2xl mx-auto">
          We'd love to hear from you. Reach out to our team for inquiries about our hand-embroidered collections or visit our atelier.
        </p>
      </div>

      <div className="my-16 flex flex-col md:flex-row gap-16 items-center">
        {/* Contact Image */}
        <div className="w-full md:w-1/2">
          <img 
            className="w-full h-[500px] object-cover" 
            src={assets.contact_img} 
            alt="Zara & Beyond atelier visit" 
          />
        </div>

        <div className="w-full md:w-1/2 space-y-8">
          <div>
            <h3 className="text-xl font-light tracking-wider mb-4">OUR ATELIER</h3>
            <p className="text-gray-600 leading-relaxed">
              ABC Street<br />
              75001 State, Country<br />
              <span className="block mt-2">Mon-Fri: 10am-6pm</span>
            </p>
          </div>

          <div>
            <h3 className="text-xl font-light tracking-wider mb-4">CONTACT DETAILS</h3>
            <p className="text-gray-600 leading-relaxed">
              Tel: 9999999999<br />
              Email: contact@zariandbeyond.com<br />
              For wholesale: sales@zariandbeyond.com
            </p>
          </div>

          <div>
            <h3 className="text-xl font-light tracking-wider mb-4">CAREERS</h3>
            <p className="text-gray-600 leading-relaxed mb-6">
              Join our team of passionate artisans and creative professionals dedicated to preserving European embroidery traditions.
            </p>
            <button className="border border-black px-8 py-3 text-sm tracking-wider hover:bg-black hover:text-white transition-all duration-300">
              EXPLORE OPEN POSITIONS
            </button>
          </div>
        </div>
      </div>

      <div>
        <Newsletter />
      </div>
    </div>
  );
};

export default Contact;