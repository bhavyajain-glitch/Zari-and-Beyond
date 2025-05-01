import React from 'react';
import Title from '../components/Title';
import { assets } from '../assets/frontend_assets/assets';
import Newsletter from '../components/Newsletter';

const About = () => {
  return (
    <div className="pt-20 px-8 max-w-7xl mx-auto">
      <div className="text-center">
        <Title text1="OUR" text2="STORY" />
      </div>

      <div className="my-16 flex flex-col md:flex-row gap-16 items-center">
        <img 
          className="w-full md:w-1/2 object-cover" 
          src={assets.about_img} 
          alt="Artisan embroidery process" 
        />
        <div className="flex flex-col gap-6 md:w-1/2">
          <h2 className="text-2xl font-light tracking-wide">European Craftsmanship, Modern Elegance</h2>
          <p className="leading-relaxed">
            Born from a passion for timeless European textile traditions, Zara & Beyond brings you exquisite hand-embroidered apparel that tells a story. Each piece in our collection is inspired by the rich heritage of French Provençal needlework and Italian lace-making techniques, reimagined for contemporary wardrobes.
          </p>
          <p className="leading-relaxed">
            Founded in 2023, we partner with master artisans across Europe to preserve these centuries-old embroidery crafts while supporting sustainable fashion practices. Every stitch reflects hours of meticulous handwork, transforming premium fabrics into wearable art.
          </p>
        </div>
      </div>

      <div className="py-16 text-center">
        <Title text1="THE ARTISAN" text2="DIFFERENCE" />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-0 mb-20 border-t border-l">
        <div className="border-b border-r p-10 flex flex-col gap-4">
          <h3 className="text-lg font-light tracking-wider">HERITAGE TECHNIQUES</h3>
          <p className="text-gray-600 leading-relaxed">
            Our collections feature authentic Lunéville hook embroidery, Venetian beadwork, and Hungarian Kalocsa stitch - techniques passed through generations of European artisans. Each design takes 8-25 hours of handwork to complete.
          </p>
        </div>
        <div className="border-b border-r p-10 flex flex-col gap-4">
          <h3 className="text-lg font-light tracking-wider">SUSTAINABLE LUXURY</h3>
          <p className="text-gray-600 leading-relaxed">
            We use only natural fabrics like French linen, Italian cotton, and Belgian flax, dyed with eco-friendly pigments. Our packaging is 100% recycled and biodegradable, reflecting our commitment to the environment.
          </p>
        </div>
        <div className="border-b border-r p-10 flex flex-col gap-4">
          <h3 className="text-lg font-light tracking-wider">MADE TO LAST</h3>
          <p className="text-gray-600 leading-relaxed">
            Unlike mass-produced embroidery, our pieces are reinforced with traditional methods that ensure durability. With proper care, your Zara & Beyond garments will become cherished heirlooms that age beautifully.
          </p>
        </div>
      </div>

      <div className="py-16 text-center">
        <Title text1="OUR" text2="PROMISE" />
        <p className="max-w-2xl mx-auto mt-6 leading-relaxed">
          When you choose Zara & Beyond, you're not just purchasing clothing - you're preserving artisanal heritage and supporting ethical craftsmanship. We guarantee each piece meets our exacting standards of quality and authenticity.
        </p>
      </div>

      <Newsletter />
    </div>
  );
};

export default About;