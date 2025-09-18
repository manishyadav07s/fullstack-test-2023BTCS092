// src/components/Footer.jsx
const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 py-10 mt-12">
      <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-8">
        
        {/* Logo + About */}
        <div>
          <h2 className="text-2xl font-bold text-white mb-4">MediCare</h2>
          <p className="text-sm">
            Providing trusted healthcare services with expert doctors and modern
            facilities. Your health is our priority.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-4">Quick Links</h3>
          <ul className="space-y-2 text-sm">
            <li><a href="#" className="hover:text-white">Home</a></li>
            <li><a href="#" className="hover:text-white">About Us</a></li>
            <li><a href="#" className="hover:text-white">Services</a></li>
            <li><a href="#" className="hover:text-white">Contact</a></li>
          </ul>
        </div>

        {/* Departments */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-4">Departments</h3>
          <ul className="space-y-2 text-sm">
            <li><a href="#" className="hover:text-white">Cardiology</a></li>
            <li><a href="#" className="hover:text-white">Neurology</a></li>
            <li><a href="#" className="hover:text-white">Orthopedic</a></li>
            <li><a href="#" className="hover:text-white">Dental Care</a></li>
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-4">Contact Us</h3>
          <p className="text-sm">📍 123 MediCare Street, New Delhi, India</p>
          <p className="text-sm">📞 +91 98765 43210</p>
          <p className="text-sm">✉️ support@medicare.com</p>
        </div>
      </div>

      {/* Bottom line */}
      <div className="border-t border-gray-700 mt-10 pt-6 text-center text-sm text-gray-500">
        © {new Date().getFullYear()} MediCare. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
