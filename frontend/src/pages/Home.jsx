export default function Hero() {
  return (
    <section className="flex flex-col md:flex-row items-center justify-between px-8 py-16 bg-blue-50">
      <div className="max-w-lg">
        <h2 className="text-4xl font-bold mb-4">
          Our Focus is <span className="text-blue-600">Your Health</span>
        </h2>
        <p className="mb-6 text-gray-600">
          Quality healthcare services with expert doctors and modern facilities.
        </p>
        <button className="px-6 py-3 bg-blue-600 text-white rounded-lg">
          Get Appointment
        </button>
      </div>
      <div className="w-80 h-80 bg-gray-300 rounded-xl mt-10 md:mt-0">
        {/* Placeholder for doctor image */}
      </div>
    </section>
  );
}




