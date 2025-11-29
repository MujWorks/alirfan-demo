import { useState, useEffect } from 'react';

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [subMenuOpen, setSubMenuOpen] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [expandedFeature, setExpandedFeature] = useState(null);

  const nextSlide = () => setCurrentSlide((prev) => (prev + 1) % presidentNotes.length);

  const toggleFeature = (index) => {
    setExpandedFeature(expandedFeature === index ? null : index);
  };

  const presidentNotes = [
    { quote: "Human Being is the Viceregent of Almighty Allah. The reason behind this honor is that he has been equipped with knowledge. In broader perspective, this knowledge can be considered...", author: "Mr. Mujtaba Farooq, President" },
    { quote: "Education & Knowledge are rightly called the 'Third Eye' of Human Being. It gives him an insight into all affairs of life, removes all the darkness and spreads illumination...", author: "Mohammad Khalid, Principal" }
  ];

  const features = [
    { title: "Academic Facilities", bullets: ["Smart Class Rooms", "Laboratories"] },
    { title: "Computer Education", bullets: ["Labs", "Khan Academy"] },
    { title: "Academic Support", bullets: ["Regular Test Series", "Excellence Batch"] },
    { title: "Learning Resources", bullets: ["Library", "Subject-based Clubs"] },
    { title: "Competitions and Events", bullets: ["Olympiads & Competitions", "Annual Gathering"] },
    { title: "Cultural and Social Activities", bullets: ["Assembly", "Co-Curricular Activities"] },
    { title: "Physical Education", bullets: ["Sports", "Judo"] },
    { title: "Environmental Learning", bullets: ["\"Al Hamra\" Garden", "Educational Tours"] },
    { title: "Religious Studies", bullets: ["Islamic Environment", "Cultural Studies"] }
  ];

  useEffect(() => {
    const interval = setInterval(nextSlide, 8000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative min-h-screen bg-gradient-to-br from-slate-950 via-emerald-950 to-slate-900 text-white overflow-x-hidden">
      <style jsx global>{`
        .glass { background: rgba(255,255,255,0.1); backdrop-filter: blur(20px); border: 1px solid rgba(212,175,55,0.2); border-radius: 24px; box-shadow: 0 8px 32px rgba(0,0,0,0.3); }
        .menu-item { transition: all 0.3s ease; position: relative; }
        .menu-item:hover { color: #d4af37; }
        .menu-item:hover::after { width: 100%; }
        .reveal { opacity: 0; transform: translateY(50px); transition: all 0.8s ease; }
        .reveal.active { opacity: 1; transform: translateY(0); }
        @keyframes fadeInUp { from { opacity: 0; transform: translateY(30px); } to { opacity: 1; transform: translateY(0); } }
        .gradient-bg { background: linear-gradient(to bottom, #0f172a, #065f46); }
      `}</style>

      {/* Wesgreen-Inspired Menu */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-slate-900/80 backdrop-blur-md border-b border-amber-500/30">
        <div className="container mx-auto px-6 py-4 flex justify-between items-center">
          <h1 className="text-2xl font-bold text-amber-500">Al-Irfan</h1>
          <ul className="hidden md:flex space-x-8">
            <li className="menu-item"><a className="text-white hover:text-amber-500 transition text-lg font-medium" href="#">Home</a></li>
            <li className="menu-item"><a className="text-white hover:text-amber-500 transition text-lg font-medium" href="#">About</a></li>
            <li className="menu-item relative">
              <button className="text-white hover:text-amber-500 transition text-lg font-medium" onClick={() => setSubMenuOpen(!subMenuOpen)}>
                Academics
              </button>
              {subMenuOpen && (
                <div className="absolute top-full left-0 mt-2 bg-slate-900/95 backdrop-blur-md rounded-lg shadow-lg p-4 border border-amber-500/30">
                  <a className="block text-white hover:text-amber-500 py-2" href="#">Facilities</a>
                  <a className="block text-white hover:text-amber-500 py-2" href="#">Islamic Studies</a>
                </div>
              )}
            </li>
            <li className="menu-item"><a className="text-white hover:text-amber-500 transition text-lg font-medium" href="#">Facilities</a></li>
            <li className="menu-item"><a className="text-white hover:text-amber-500 transition text-lg font-medium" href="#">Admissions</a></li>
            <li className="menu-item"><a className="text-white hover:text-amber-500 transition text-lg font-medium" href="#">Contact</a></li>
          </ul>
          <button className="md:hidden text-white" onClick={() => setMenuOpen(!menuOpen)}>
            <i className="fas fa-bars text-2xl"></i>
          </button>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      {menuOpen && (
        <div className="fixed inset-0 bg-slate-900/95 z-40 flex flex-col items-center justify-center md:hidden" onClick={() => setMenuOpen(false)}>
          <ul className="space-y-8 text-3xl font-bold text-amber-500">
            {['Home', 'About', 'Academics', 'Facilities', 'Admissions', 'Contact'].map((item) => (
              <li key={item}>
                <button className="text-white hover:text-amber-500" onClick={() => setMenuOpen(false)}>
                  {item}
                </button>
              </li>
            ))}
          </ul>
        </div>
      )}

      {/* Hero */}
      <section className="min-h-screen flex items-center justify-center text-center px-6 relative z-10 pt-20">
        <div className="max-w-6xl reveal active" style={{ animation: 'fadeInUp 1s ease-out' }}>
          <h1 className="text-7xl md:text-9xl font-black text-white leading-tight mb-6">
            ALIRFAN RESIDENTIAL SCHOOL
          </h1>
          <p className="text-2xl md:text-4xl text-gray-200 mb-8 font-light">
            Unlocking Knowledge, Inspiring Growth
          </p>
          <p className="text-xl md:text-2xl text-gray-300 mb-12 max-w-4xl mx-auto">
            Empower your child with a dynamic and engaging learning environment that fosters creativity and critical thinking.
          </p>
          <a href="#enquiry" className="bg-amber-500 hover:bg-amber-400 text-black px-16 py-6 rounded-full text-2xl font-bold transition shadow-2xl">
            Discover More
          </a>
        </div>
      </section>

      {/* Leadership Insights */}
      <section className="py-24 px-6 relative z-10">
        <div className="container mx-auto max-w-6xl glass rounded-3xl p-12 md:p-16 shadow-2xl reveal" style={{ animation: 'fadeInUp 1s ease-out 0.2s' }}>
          <h2 className="text-5xl md:text-6xl font-bold text-amber-500 text-center mb-12">
            Leadership Insights
          </h2>
          <p className="text-xl leading-relaxed text-gray-200 text-center mb-12 max-w-5xl mx-auto">
            The commitment, vision, and dedication that shape our school's journey. Discover their perspectives on our educational goals, the achievements of our students, and the values that guide us.
          </p>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <img src="https://images.unsplash.com/photo-1582213782179-8d0e5e8e7b6e?w=900&q=80" alt="Secretary" className="rounded-2xl shadow-2xl" />
            <div>
              <p className="text-lg text-gray-300 mb-6">
                "True education extends beyond books — it nurtures the soul, builds character, and prepares leaders for tomorrow."
              </p>
              <p className="text-2xl font-semibold text-amber-500">— Janab Secretary Saheb</p>
            </div>
          </div>
        </div>
      </section>

      {/* President's Note */}
      <section className="py-24 px-6 bg-slate-900/50 relative z-10">
        <div className="container mx-auto max-w-5xl text-center">
          <h2 className="text-5xl md:text-6xl font-bold text-amber-500 mb-12 reveal" style={{ animation: 'fadeInUp 1s ease-out 0.4s' }}>President's Note</h2>
          <div className="space-y-8">
            {presidentNotes.map((note, i) => (
              <div key={i} className="glass rounded-3xl p-8 reveal" style={{ animation: 'fadeInUp 1s ease-out 0.6s' }}>
                <p className="text-xl italic text-gray-200 leading-relaxed">
                  {note.quote}
                </p>
                <p className="mt-6 text-2xl font-semibold text-amber-500">{note.author}</p>
              </div>
            ))}
          </div>
          <a href="PresidentNote.aspx" className="text-amber-500 hover:underline text-xl mt-8 inline-block">Read Full Note →</a>
        </div>
      </section>

      {/* Key Features */}
      <section className="py-24 px-6 relative z-10">
        <h2 className="text-5xl md:text-7xl font-bold text-center text-amber-500 mb-20 reveal" style={{ animation: 'fadeInUp 1s ease-out 0.8s' }}>Why Choose Al-Irfan?</h2>
        <div className="grid md:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {features.map((feature, i) => (
            <div
              key={i}
              className="glass p-8 rounded-3xl cursor-pointer hover:scale-105 transition reveal"
              style={{ animation: `fadeInUp 1s ease-out ${1 + i * 0.1}s` }}
              onClick={() => toggleFeature(i)}
            >
              <h3 className="text-2xl font-bold text-amber-500 mb-4">{feature.title}</h3>
              <ul className="text-gray-300 space-y-2">
                {feature.bullets.map((bullet, j) => (
                  <li key={j} className="flex items-center">
                    <i className="fas fa-check text-amber-500 mr-2"></i>
                    {bullet}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* Contact */}
      <section id="enquiry" className="py-24 px-6 bg-emerald-900/50 relative z-10">
        <div className="container mx-auto max-w-6xl text-center">
          <h2 className="text-5xl md:text-6xl font-bold text-white mb-12 reveal" style={{ animation: 'fadeInUp 1s ease-out 1.5s' }}>Ready to Join Al-Irfan?</h2>
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <div className="glass rounded-3xl p-8">
              <h3 className="text-2xl font-bold text-amber-500 mb-4">Admission Inquiries</h3>
              <p><i className="fas fa-phone mr-2 text-amber-500"></i>+91 9860 579 809</p>
              <p><i className="fas fa-envelope mr-2 text-amber-500"></i>mail@alirfanschool.com</p>
              <p>+91 8975 613 666 • +91 9923 203 933</p>
            </div>
            <div className="glass rounded-3xl p-8">
              <h3 className="text-2xl font-bold text-amber-500 mb-4">School Hours & Location</h3>
              <p>Every Day: 9:00 AM to 3:00 PM</p>
              <p><i className="fas fa-map-marker-alt mr-2 text-amber-500"></i>Khultabad, Maharashtra (IN)</p>
            </div>
          </div>
          <a href="enquiry.aspx" className="bg-amber-500 hover:bg-amber-400 text-black px-20 py-6 rounded-full text-2xl font-bold transition shadow-2xl">
            Submit Enquiry Now
          </a>
        </div>
      </section>

      <footer className="py-12 px-6 text-center bg-slate-900/50">
        <p className="text-gray-400">© 2026 Al-Irfan Residential School. All Rights Reserved.</p>
      </footer>
    </div>
  );
}