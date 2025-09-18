// src/components/Services.jsx
const Services = () => {
  const services = [
    {
      title: "Cardiology",
      desc: "Comprehensive heart care with advanced diagnostic and treatment facilities.",
    
    },
    {
      title: "Neurology",
      desc: "Expert care for brain and nervous system disorders with modern technology.",
     
    },
    {
      title: "Orthopedics",
      desc: "Advanced solutions for bone, joint, and muscle problems.",
     
    },
    {
      title: "Dental Care",
      desc: "Complete dental treatments with a focus on hygiene and comfort.",
      
    },
    {
      title: "Emergency Care",
      desc: "24/7 emergency medical services for urgent healthcare needs.",
      
    },
    {
      title: "Pharmacy",
      desc: "In-house pharmacy with all essential medicines available round the clock.",
    
    },
  ];

  return (
    <section className="py-16 bg-white">
      <div className="max-w-6xl mx-auto px-6 text-center">
        <h2 className="text-3xl font-bold text-gray-800 mb-4">Our Services</h2>
        <p className="text-gray-600 mb-12">
          We offer a wide range of healthcare services designed to meet your
          needs with compassion and professionalism.
        </p>

        {/* Grid of services */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {services.map((service, i) => (
            <div
              key={i}
              className="bg-blue-50 p-6 rounded-2xl shadow hover:shadow-lg transition"
            >
              <div className="text-4xl mb-4">{service.icon}</div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">
                {service.title}
              </h3>
              <p className="text-gray-600 text-sm">{service.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
