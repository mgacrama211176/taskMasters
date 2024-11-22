"use client";
import React from "react";
import { motion } from "framer-motion";
import { Eye, Target, Users } from "lucide-react"; // Import icons

const PhilosophySection = () => {
  const fadeIn = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 },
  };

  const coreValues = [
    {
      title: "Innovation",
      description: "Constantly pushing boundaries and embracing new ideas",
      icon: "💡",
    },
    {
      title: "Integrity",
      description: "Upholding the highest ethical standards in all we do",
      icon: "🤝",
    },
    {
      title: "Collaboration",
      description: "Working together to achieve common goals",
      icon: "👥",
    },
    {
      title: "Excellence",
      description:
        "Striving for the highest quality in every aspect of our work",
      icon: "⭐",
    },
  ];

  const impacts = [
    "Improve productivity and efficiency for businesses",
    "Contribute to workforce development and job creation",
    "Drive innovation in virtual assistance services",
    "Create meaningful opportunities for our employees and partners",
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <motion.h2 {...fadeIn} className="text-4xl font-bold text-center mb-16">
          Our Vision & Mission
        </motion.h2>

        {/* Vision & Mission Cards */}
        <div className="grid md:grid-cols-2 gap-8 mb-20">
          {/* Vision Card */}
          <motion.div
            {...fadeIn}
            className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300"
          >
            <div className="flex items-center justify-center gap-3 mb-4">
              <Eye className="w-6 h-6 text-blue-600" />
              <h3 className="text-2xl font-bold">Our Vision</h3>
            </div>
            <p className="text-gray-500 text-sm mb-4 text-center">
              What we aspire to achieve
            </p>
            <p className="text-gray-800 leading-relaxed">
              To set high ethical standards and exceptional management
              practices, becoming the leading innovator in virtual assistance
              services.
            </p>
          </motion.div>

          {/* Mission Card */}
          <motion.div
            {...fadeIn}
            className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300"
          >
            <div className="flex items-center justify-center gap-3 mb-4">
              <Target className="w-6 h-6 text-blue-600" />
              <h3 className="text-2xl font-bold">Our Mission</h3>
            </div>
            <p className="text-gray-500 text-sm mb-4 text-center">
              How we'll get there
            </p>
            <p className="text-gray-800 leading-relaxed">
              To provide high-quality staff that enhance productivity,
              efficiency, and growth while fostering a culture of excellence and
              customer-centricity.
            </p>
          </motion.div>
        </div>

        {/* Core Values Section */}
        <motion.div {...fadeIn} className="mb-20">
          <div className="flex items-center gap-3 mb-8 justify-center">
            <Users className="w-6 h-6 text-blue-600" />
            <h3 className="text-2xl font-bold text-center">Core Values</h3>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {coreValues.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="bg-white rounded-xl p-6 shadow hover:shadow-md transition-all duration-300"
              >
                <div className="text-3xl mb-4 text-center">{value.icon}</div>
                <h4 className="text-lg font-semibold mb-2 text-center">
                  {value.title}
                </h4>
                <p className="text-gray-600 text-sm">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Impact Section */}
        <motion.div {...fadeIn}>
          <div className="flex items-center justify-center gap-3 mb-8">
            <span className="text-2xl">🎯</span>
            <h3 className="text-2xl font-bold">Our Impact</h3>
          </div>
          <div className="bg-white rounded-2xl p-8 shadow-lg w-1/2 mx-auto">
            <p className="text-xl mb-6">
              Through our vision and mission, we aim to:
            </p>
            <ul className="space-y-4">
              {impacts.map((impact, index) => (
                <li key={index} className="flex items-center gap-3">
                  <span className="text-blue-600">•</span>
                  <span className="text-gray-700">{impact}</span>
                </li>
              ))}
            </ul>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default PhilosophySection;
