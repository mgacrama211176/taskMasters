"use client";
import React from "react";
import MainButtonLink from "./MainButtonLink";
import { useStore } from "@/store/useStore";

const HeroSection = () => {
  const toggleContactForm = useStore((state) => state.toggleContactForm);

  return (
    <section className="relative h-screen flex items-center justify-center">
      {/* Video Background */}
      <div className="absolute inset-0 w-full h-full overflow-hidden">
        <div className="absolute inset-0 bg-black/50 z-10" /> {/* Overlay */}
        <video
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover"
        >
          <source src="/hero-video.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>

      {/* Content */}
      <div className="relative z-20 text-center text-white max-w-4xl mx-auto px-4">
        <h1 className="text-5xl md:text-7xl font-bold mb-6 tracking-tight">
          <span className="block mb-4">Efficient, Ethical, Effective</span>
          <span className="text-3xl md:text-4xl text-gray-200 font-normal">
            Setting the Standard in Virtual Assistance
          </span>
        </h1>

        {/* Divider */}
        <div className="w-24 h-1 bg-blue-500 mx-auto mb-8" />

        {/* Description */}
        <p className="text-xl text-gray-200 mb-12 max-w-2xl mx-auto">
          Transform your business operations with our premium virtual assistance
          services. Let us handle the details while you focus on growth.
        </p>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row gap-6 justify-center">
          <MainButtonLink href="/get-started" className="text-lg px-8 py-4">
            Get Started Today
          </MainButtonLink>
          <button
            onClick={toggleContactForm}
            className="text-lg px-8 py-4 border-2 border-white rounded-2xl 
                     hover:bg-white hover:text-black transition-all duration-300"
          >
            Schedule a Call
          </button>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20 animate-bounce">
        <svg
          className="w-6 h-6 text-white"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
        </svg>
      </div>
    </section>
  );
};

export default HeroSection;
