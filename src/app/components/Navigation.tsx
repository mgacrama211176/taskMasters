"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import MainButtonLink from "./MainButtonLink";
import { useStore } from "@/store/useStore";

const Navigation = () => {
  const pathname = usePathname();
  const toggleContactForm = useStore((state) => state.toggleContactForm);
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Close mobile menu on window resize
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        setIsMobileMenuOpen(false);
      }
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Close menus when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as HTMLElement;
      if (!target.closest(".navigation-menu")) {
        setIsServicesOpen(false);
      }
    };

    document.addEventListener("click", handleClickOutside);
    return () => document.removeEventListener("click", handleClickOutside);
  }, []);

  const isActive = (path: string) => pathname === path;

  const serviceItems = [
    { label: "Customer Service", id: "customer-service" },
    { label: "Logistics Operations", id: "logistics" },
    { label: "Sales", id: "sales" },
    { label: "Accounting", id: "accounting" },
    { label: "Admin Support", id: "admin-support" },
  ];

  const scrollToSection = (id: string) => {
    setIsServicesOpen(false);
    setIsMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const menuOptions = [
    { label: "Home", path: "/" },
    { label: "How we work", path: "/how-we-work" },
    { label: "Who we are", path: "/about" },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 bg-white/80 backdrop-blur-md z-50">
      <nav className="flex justify-between items-center px-4 lg:px-16 py-4 max-w-7xl mx-auto">
        <Link href="/" className="text-2xl font-bold z-50">
          Task Masters
        </Link>

        {/* Hamburger Menu Button */}
        <div className="lg:hidden z-50">
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="p-2 focus:outline-none"
            aria-label="Toggle menu"
          >
            <div className="w-6 h-5 relative flex flex-col justify-between">
              <span
                className={`w-full h-0.5 bg-black transform transition-all duration-300 ${
                  isMobileMenuOpen ? "rotate-45 translate-y-2" : ""
                }`}
              />
              <span
                className={`w-full h-0.5 bg-black transition-all duration-300 ${
                  isMobileMenuOpen ? "opacity-0" : ""
                }`}
              />
              <span
                className={`w-full h-0.5 bg-black transform transition-all duration-300 ${
                  isMobileMenuOpen ? "-rotate-45 -translate-y-2" : ""
                }`}
              />
            </div>
          </button>
        </div>

        {/* Desktop Menu */}
        <div className="hidden lg:flex items-center gap-6 font-medium navigation-menu">
          {/* Desktop menu items */}
          {menuOptions.map((option, index) => (
            <Link
              key={index}
              href={option.path}
              className={`${
                isActive(option.path)
                  ? "text-blue-500"
                  : "text-gray-700 hover:text-blue-500"
              } transition-colors duration-300`}
            >
              {option.label}
            </Link>
          ))}

          {/* Services Dropdown */}
          <div className="relative">
            <button
              onMouseEnter={() => setIsServicesOpen(true)}
              className="text-gray-700 hover:text-blue-500 transition-colors duration-300"
            >
              Our Services
            </button>

            {isServicesOpen && (
              <div
                onMouseEnter={() => setIsServicesOpen(true)}
                onMouseLeave={() => setIsServicesOpen(false)}
                className="absolute top-full left-0 mt-2 w-64 bg-white rounded-lg shadow-lg py-2 border border-gray-100"
              >
                {serviceItems.map((service) => (
                  <button
                    key={service.id}
                    onClick={() => scrollToSection(service.id)}
                    className="w-full text-left px-4 py-2 text-gray-700 hover:bg-gray-50 hover:text-blue-500 transition-colors duration-300"
                  >
                    {service.label}
                  </button>
                ))}
              </div>
            )}
          </div>

          <MainButtonLink href="/get-started">
            Get Virtual Assistant
          </MainButtonLink>
          <button
            onClick={toggleContactForm}
            className="px-6 py-2 border-2 border-black rounded-lg hover:bg-gray-100 transition-colors duration-300"
          >
            Contact Us
          </button>
        </div>

        {/* Mobile Menu Overlay */}
        {isMobileMenuOpen && (
          <div
            className="lg:hidden fixed inset-0 bg-black/50 z-40"
            onClick={() => setIsMobileMenuOpen(false)}
          />
        )}

        {/* Mobile Menu */}
        <div
          className={`fixed lg:hidden inset-x-0 top-0 pt-20 bg-white h-screen z-40 transition-transform duration-300 transform ${
            isMobileMenuOpen ? "translate-x-0" : "translate-x-full"
          }`}
        >
          <div className="px-4 py-6 space-y-4 overflow-y-auto max-h-[calc(100vh-5rem)]">
            {menuOptions.map((option, index) => (
              <Link
                key={index}
                href={option.path}
                onClick={() => setIsMobileMenuOpen(false)}
                className={`block py-2 ${
                  isActive(option.path)
                    ? "text-blue-500"
                    : "text-gray-700 hover:text-blue-500"
                } transition-colors duration-300`}
              >
                {option.label}
              </Link>
            ))}

            {/* Mobile Services Menu */}
            <div className="py-2">
              <button
                onClick={() => setIsServicesOpen(!isServicesOpen)}
                className="text-gray-700 hover:text-blue-500 transition-colors duration-300 w-full text-left"
              >
                Our Services
              </button>
              {isServicesOpen && (
                <div className="pl-4 mt-2 space-y-2">
                  {serviceItems.map((service) => (
                    <button
                      key={service.id}
                      onClick={() => scrollToSection(service.id)}
                      className="w-full text-left py-2 text-gray-700 hover:text-blue-500 transition-colors duration-300"
                    >
                      {service.label}
                    </button>
                  ))}
                </div>
              )}
            </div>

            <div className="space-y-4 pt-4">
              <MainButtonLink
                href="/get-started"
                className="w-full text-center block"
              >
                Get Virtual Assistant
              </MainButtonLink>
              <button
                onClick={() => {
                  toggleContactForm();
                  setIsMobileMenuOpen(false);
                }}
                className="w-full px-6 py-2 border-2 border-black rounded-lg hover:bg-gray-100 transition-colors duration-300"
              >
                Contact Us
              </button>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Navigation;
