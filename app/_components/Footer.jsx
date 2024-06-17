import React from 'react';
import { Facebook, Twitter, Instagram, Linkedin } from 'lucide-react';
import Link from 'next/link';

const Footer = () => {
  return (
    <footer className="bg-gray-600 text-white p-4 mt-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul>
              <li><Link className="hover:underline" href="/">Home</Link></li>
              <li><Link className="hover:underline" href="/about">About Us</Link></li>
              <li><Link className="hover:underline" href="/services">Services</Link></li>
              <li><Link className="hover:underline" href="/contact">Contact</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
            <p>Go Home Service.</p>
            <p>Bandung, Jawa Barat, 40375</p>
            <p>Email: info@homeservice.com</p>
            <p>Phone: (123) 456-7890</p>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Follow Us</h3>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-white"><Facebook size={24} /></a>
              <a href="#" className="text-gray-400 hover:text-white"><Twitter size={24} /></a>
              <a href="#" className="text-gray-400 hover:text-white"><Instagram size={24} /></a>
              <a href="#" className="text-gray-400 hover:text-white"><Linkedin size={24} /></a>
            </div>
          </div>
        </div>
        <div className="mt-8 text-center text-gray-500">
        Akhyar Azamta  &copy; {new Date().getFullYear()} Home Service. All rights reserved.
        </div>
      </div>
    </footer>
  );
}

export default Footer;
