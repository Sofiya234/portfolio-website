function Certificates() {
  const certificates = [
    {
      title: "Android Development Internship",
      issuer: "Tamizhan Skills Pvt Ltd",
      year: "2025",
      image: "/portfolio-website/certificates/android.jpg",
      link: "/portfolio-website/certificates/android.jpg",
    },

    {
      title: "Web Development Internship",
      issuer: "Athang Infotech Pvt Ltd",
      year: "2025",
      image: "/portfolio-website/certificates/web.jpg",
      link: "/portfolio-website/certificates/web.jpg",
    },

    {
      title: "AI for Students Workshop",
      issuer: "NxtWave",
      year: "2025",
      image: "/portfolio-website/certificates/nxtwave.jpg",
      link: "/portfolio-website/certificates/nxtwave.jpg",
    },

    {
      title: "Hackathon Participation",
      issuer: "AI Hackathon",
      year: "2025",
      image: "/portfolio-website/certificates/hackathon.jpg",
      link: "/portfolio-website/certificates/hackathon.jpg",
    },
  ];

  return (
    <section
      id="certificates"
      className="bg-[#1A1625] py-32 px-6"
    >
      <div className="max-w-7xl mx-auto">

        {/* Heading */}
        <div className="text-center mb-24">

          <h2 className="text-5xl md:text-6xl font-bold text-pink-100">
            Certificates
          </h2>

          <div className="w-28 h-1 bg-pink-300 mx-auto mt-5 rounded-full"></div>

          <p className="text-gray-400 mt-8 max-w-3xl mx-auto text-lg leading-relaxed">
            Certifications, internships, and achievements that reflect
            my continuous learning journey and technical growth.
          </p>

        </div>

        {/* Certificates Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">

          {certificates.map((certificate, index) => (

            <div
              key={index}
              className="bg-[#241D33] border border-pink-300/10 rounded-[30px] overflow-hidden shadow-2xl hover:-translate-y-2 hover:border-pink-300/30 transition duration-300"
            >

              {/* Image */}
              <img
                src={certificate.image}
                alt={certificate.title}
                className="w-full h-52 object-cover"
              />

              {/* Content */}
              <div className="p-6">

                <h3 className="text-xl font-semibold text-pink-100">
                  {certificate.title}
                </h3>

                <p className="text-pink-300 mt-2">
                  {certificate.issuer}
                </p>

                <p className="text-gray-400 mt-2 text-sm">
                  {certificate.year}
                </p>

                {/* Button */}
                <a
                  href={certificate.link}
                  target="_blank"
                  rel="noreferrer"
                  className="block text-center mt-6 w-full py-3 rounded-2xl bg-pink-300 text-black hover:scale-105 transition duration-300"
                >
                  View Certificate
                </a>

              </div>

            </div>

          ))}

        </div>

      </div>
    </section>
  );
}

export default Certificates;