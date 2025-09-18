const About = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
        
    
        <div>
          <img src="./assets/image.avif"
            alt="About MediCare"
            className="rounded-2xl shadow-lg"
          />
        </div>

       
        <div>
          <h2 className="text-3xl font-bold text-gray-800 mb-4">About Us</h2>
          <p className="text-gray-600 leading-relaxed mb-6">
            At <span className="font-semibold text-blue-600">MediCare</span>, we
            are committed to delivering high-quality healthcare services with
            compassion and expertise. Our mission is to provide accessible,
            affordable, and advanced medical care for every individual.
          </p>
          <p className="text-gray-600 leading-relaxed mb-6">
            With a team of experienced doctors, modern facilities, and
            state-of-the-art technology, we ensure that our patients receive the
            best treatment and care at every stage of their journey.
          </p>

          <button className="px-6 py-3 bg-blue-600 text-white rounded-lg shadow hover:bg-blue-700 transition">
            Learn More
          </button>
        </div>
      </div>
    </section>
  );
};

export default About;
