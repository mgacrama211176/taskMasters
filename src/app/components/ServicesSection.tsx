import React from "react";

interface ServiceCardProps {
  title: string;
  description: string;
  id: string;
  icon: React.ReactNode;
}

const ServiceCard = ({ title, description, id, icon }: ServiceCardProps) => (
  <div
    id={id}
    className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl  duration-300 cursor-pointer hover:scale-105 hover:bg-gray-100 transition-all "
  >
    <div className="text-blue-500 mb-4 text-3xl flex justify-center">
      {icon}
    </div>
    <h3 className="text-xl font-bold mb-3 text-center">{title}</h3>
    <p className="text-gray-600">{description}</p>
  </div>
);

const ServicesSection = () => {
  const services = [
    {
      id: "customer-service",
      title: "Customer Service",
      description:
        "24/7 customer support, ticket management, and client communication handling.",
      icon: "👥",
    },
    {
      id: "logistics",
      title: "Logistics Operations",
      description:
        "Supply chain management, inventory tracking, and shipping coordination.",
      icon: "🚚",
    },
    {
      id: "sales",
      title: "Sales",
      description:
        "Lead generation, sales funnel management, and customer relationship building.",
      icon: "💰",
    },
    {
      id: "accounting",
      title: "Accounting",
      description:
        "Bookkeeping, invoice processing, and financial report preparation.",
      icon: "📊",
    },
    {
      id: "admin-support",
      title: "Admin Support",
      description:
        "Calendar management, email handling, and document organization.",
      icon: "📝",
    },
  ];

  return (
    <section className="py-20 bg-gray-50" id="services">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-4">Our Services</h2>
        <p className="text-gray-600 text-center mb-12 max-w-2xl mx-auto">
          We offer a comprehensive range of virtual assistance services to help
          your business grow and succeed.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.slice(0, services.length - 2).map((service) => (
            <ServiceCard
              key={service.id}
              id={service.id}
              title={service.title}
              description={service.description}
              icon={service.icon}
            />
          ))}
          <div className="flex justify-center col-span-full gap-8">
            {services.slice(services.length - 2).map((service) => (
              <div className="w-full md:w-1/2 lg:w-1/3">
                <ServiceCard
                  key={service.id}
                  id={service.id}
                  title={service.title}
                  description={service.description}
                  icon={service.icon}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
