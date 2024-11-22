"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import { Star, ChevronLeft, ChevronRight } from "lucide-react";
import Image from "next/image";

interface Testimonial {
  id: number;
  name: string;
  company: string;
  image: string;
  rating: number;
  testimonial: string;
  date: string;
}

const TestimonialsSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const testimonials: Testimonial[] = [
    {
      id: 1,
      name: "Sarah Johnson",
      company: "Tech Innovators Inc.",
      image: "/testimonials/testimonial-1.jpg",
      rating: 5,
      testimonial:
        "The virtual assistants from Task Masters have been instrumental in streamlining our operations. Their attention to detail and proactive approach has saved us countless hours.",
      date: "March 2024",
    },
    {
      id: 2,
      name: "Michael Chen",
      company: "Global Solutions Ltd.",
      image: "/testimonials/testimonial-2.jpg",
      rating: 5,
      testimonial:
        "Exceptional service! The team's ability to handle complex tasks while maintaining high quality has helped us scale our business efficiently.",
      date: "February 2024",
    },
    {
      id: 3,
      name: "Emma Davis",
      company: "Creative Studios Co.",
      image: "/testimonials/testimonial-3.jpg",
      rating: 5,
      testimonial:
        "Working with Task Masters has been a game-changer. Their virtual assistants are not just skilled but also bring fresh perspectives to our projects.",
      date: "January 2024",
    },
    {
      id: 4,
      name: "James Wilson",
      company: "E-commerce Plus",
      image: "/testimonials/testimonial-4.jpg",
      rating: 5,
      testimonial:
        "The level of professionalism and dedication shown by the Task Masters team is outstanding. They've become an integral part of our success.",
      date: "December 2023",
    },
    {
      id: 5,
      name: "Lisa Thompson",
      company: "Digital Marketing Pro",
      image: "/testimonials/testimonial-5.jpg",
      rating: 5,
      testimonial:
        "I'm impressed by how quickly the virtual assistants adapted to our company culture and requirements. They're truly exceptional at what they do.",
      date: "November 2023",
    },
    {
      id: 6,
      name: "David Rodriguez",
      company: "StartUp Ventures",
      image: "/testimonials/testimonial-6.jpg",
      rating: 5,
      testimonial:
        "Task Masters has exceeded our expectations in every way. Their virtual assistants are reliable, efficient, and always willing to go the extra mile.",
      date: "October 2023",
    },
  ];

  const nextTestimonial = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === testimonials.length - 3 ? 0 : prevIndex + 1
    );
  };

  const previousTestimonial = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? testimonials.length - 3 : prevIndex - 1
    );
  };

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl font-bold mb-4">Client Testimonials</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Discover what our clients have to say about their experience working
            with our virtual assistants.
          </p>
        </motion.div>

        <div className="relative">
          {/* Navigation Buttons */}
          <button
            onClick={previousTestimonial}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-6 bg-white rounded-full p-2 shadow-lg hover:shadow-xl transition-all z-10"
            aria-label="Previous testimonial"
          >
            <ChevronLeft className="w-6 h-6 text-gray-600" />
          </button>

          <button
            onClick={nextTestimonial}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-6 bg-white rounded-full p-2 shadow-lg hover:shadow-xl transition-all z-10"
            aria-label="Next testimonial"
          >
            <ChevronRight className="w-6 h-6 text-gray-600" />
          </button>

          {/* Testimonials Slider */}
          <div className="overflow-hidden">
            <div
              className="flex transition-transform duration-500 ease-in-out"
              style={{
                transform: `translateX(-${currentIndex * (100 / 3)}%)`,
              }}
            >
              {testimonials.map((testimonial) => (
                <div key={testimonial.id} className="min-w-[33.333%] px-4">
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 h-[400px] flex flex-col"
                  >
                    {/* Profile Section */}
                    <div className="flex items-center gap-4 mb-4">
                      <div className="relative w-16 h-16 flex-shrink-0">
                        <div className="w-16 h-16 rounded-full overflow-hidden">
                          <Image
                            src={testimonial.image}
                            alt={testimonial.name}
                            fill
                            className="object-cover"
                          />
                        </div>
                      </div>
                      <div className="flex-1 min-w-0">
                        <h4 className="font-semibold text-lg truncate">
                          {testimonial.name}
                        </h4>
                        <p className="text-gray-600 text-sm truncate">
                          {testimonial.company}
                        </p>
                      </div>
                    </div>

                    {/* Rating */}
                    <div className="flex gap-1 mb-4">
                      {[...Array(testimonial.rating)].map((_, index) => (
                        <Star
                          key={index}
                          className="w-5 h-5 fill-yellow-400 text-yellow-400"
                        />
                      ))}
                    </div>

                    {/* Testimonial Text */}
                    <p className="text-gray-700 flex-1 overflow-y-auto mb-4 leading-relaxed">
                      {testimonial.testimonial}
                    </p>

                    {/* Date - Always at bottom */}
                    <p className="text-sm text-gray-500 mt-auto">
                      {testimonial.date}
                    </p>
                  </motion.div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Dots Navigation */}
        <div className="flex justify-center gap-2 mt-8">
          {[...Array(testimonials.length - 2)].map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`w-2 h-2 rounded-full transition-all duration-300 ${
                currentIndex === index ? "bg-blue-600 w-4" : "bg-gray-300"
              }`}
              aria-label={`Go to testimonial ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
