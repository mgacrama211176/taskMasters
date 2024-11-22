import React from "react";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-8">
        {/* Company Info */}
        <div className="space-y-4">
          <h3 className="text-xl font-bold">Task Masters</h3>
          <p className="text-gray-400">
            Your trusted partner in virtual assistance solutions.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="font-bold mb-4">Quick Links</h4>
          <ul className="space-y-2">
            <li>
              <Link href="/about" className="text-gray-400 hover:text-white">
                About Us
              </Link>
            </li>
            <li>
              <Link href="/services" className="text-gray-400 hover:text-white">
                Services
              </Link>
            </li>
            <li>
              <Link
                href="/how-we-work"
                className="text-gray-400 hover:text-white"
              >
                How We Work
              </Link>
            </li>
          </ul>
        </div>

        {/* Services */}
        <div>
          <h4 className="font-bold mb-4">Services</h4>
          <ul className="space-y-2">
            <li>
              <Link
                href="/services/administrative"
                className="text-gray-400 hover:text-white"
              >
                Administrative Support
              </Link>
            </li>
            <li>
              <Link
                href="/services/social-media"
                className="text-gray-400 hover:text-white"
              >
                Social Media Management
              </Link>
            </li>
            <li>
              <Link
                href="/services/customer-service"
                className="text-gray-400 hover:text-white"
              >
                Customer Service
              </Link>
            </li>
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h4 className="font-bold mb-4">Contact Us</h4>
          <ul className="space-y-2 text-gray-400">
            <li>Email: contact@taskmasters.com</li>
            <li>Phone: (555) 123-4567</li>
            <li>Hours: Mon-Fri 9am-5pm EST</li>
          </ul>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="max-w-7xl mx-auto px-6 pt-8 mt-8 border-t border-gray-800">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400">
            © 2024 Task Masters. All rights reserved.
          </p>
          <div className="flex gap-4 mt-4 md:mt-0">
            <Link href="/privacy" className="text-gray-400 hover:text-white">
              Privacy Policy
            </Link>
            <Link href="/terms" className="text-gray-400 hover:text-white">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
