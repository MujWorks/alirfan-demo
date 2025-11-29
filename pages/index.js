import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [expandedFeature, setExpandedFeature] = useState(null);

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

  const presidentNotes = [
    { quote: "Human Being is the Viceregent of Almighty Allah. The reason behind this honor is that he has been equipped with knowledge. In broader perspective, this knowledge can be considered...", author: "Mr. Mujtaba Farooq, President" },
    { quote: "Education & Knowledge are rightly called the 'Third Eye' of Human Being. It gives him an insight into all affairs of life, removes all the darkness and spreads illumination...", author: "Mohammad Khalid, Principal" }
  ];

  const toggleFeature = (index) => {
    setExpandedFeature(expandedFeature === index ? null : index);
  };

  return (
    <div className="relative min-h-screen bg-gradient-to-br from-slate-950 via-emerald-950 to-slate-900 text-white overflow-x-hidden">
      {/* Luxury Fixed Menu */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-slate-900/80 backdrop-blur-md border-b border-amber-500/30">
        <div className="container mx-auto px-6 py-4 flex justify-between items-center">
          <h1 className="text-2xl font-bold text-amber-500">Al-Irfan</h1>
          <ul className="hidden md:flex space-x-8">
            {['Home', 'About', 'Academics', 'Facilities', 'Admissions', 'Contact'].map((item) => (
              <li key={item}>
                <motion.button
                  whileHover={{ scale: 1.05, y: -2 }}
                  className="text-white hover:text-amber-500 transition text-lg font-medium relative group"
                >
                  {item}
                  <motion.div
                    className="absolute bottom-0 left-0 w-0 h-0.5 bg-amber-500 group-hover:w-full transition-all"
                  />
                </motion.button>
              </li>
            ))}
          </ul>
          <motion.button
            whileTap={{ scale: 0.95 }}
            className="md:hidden text-white"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            <i className="fas fa-bars text-2xl"></i>
          </motion.button>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-slate-900/95 z-40 flex flex-col items-center justify-center md:hidden"
            onClick={() => setMenuOpen(false)}
          >
            <ul className="space-y-8 text-3xl font-bold text-amber-500">
              {['Home', 'About', 'Academics', 'Facilities', 'Admissions', 'Contact'].map((item) => (
                <li key={item}>
                  <motion.button
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                    className="text-white hover:text-amber-500"
                    onClick={() => setMenuOpen(false)}
                  >
                    {item}
                  </motion.button>
                </li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Hero */}
      <section className="min-h-screen flex items-center justify-center text-center px-6 relative z-10 pt-20">
        <motion.div
          className="max-w-6xl"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2 }}
        >
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
        </motion.div>
      </section>

      {/* Leadership Insights */}
      <section className="py-24 px-6 relative z-10">
        <motion.div
          className="container mx-auto max-w-6xl glass rounded-3xl p-12 md:p-16 shadow-2xl"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <h2 className="text-5xl md:text-6xl font-bold text-amber-500 text-center mb-12">
            Leadership Insights
          </h2>
          <p className="text-xl leading-relaxed text-gray-200 text-center mb-12 max-w-5xl mx-auto">
            The commitment, vision, and dedication that shape our school's journey. Discover their perspectives on our educational goals, the achievements of our students, and the values that guide us.
          </p>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <img src="https://www.alirfanschool.com/images/secretary.jpg" alt="Secretary" className="rounded-2xl shadow-2xl" />
            <div>
              <p className="text-lg text-gray-300 mb-6">
                "True education extends beyond books — it nurtures the soul, builds character, and prepares leaders for tomorrow."
              </p>
              <p className="text-2xl font-semibold text-amber-500">— Janab Secretary Saheb</p>
            </div>
          </div>
        </motion.div>
      </section>

      {/* President's Note */}
      <section className="py-24 px-6 bg-slate-900/50 relative z-10">
        <motion.div
          className="container mx-auto max-w-5xl text-center"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <h2 className="text-5xl md:text-6xl font-bold text-amber-500 mb-12">President's Note</h2>
          <div className="space-y-8">
            {presidentNotes.map((note, i) => (
              <motion.div
                key={i}
                className="glass rounded-3xl p-8"
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: i * 0.2 }}
              >
                <p className="text-xl italic text-gray-200 leading-relaxed">
                  {note.quote}
                </p>
                <p className="mt-6 text-2xl font-semibold text-amber-500">{note.author}</p>
              </motion.div>
            ))}
          </div>
          <a href="PresidentNote.aspx" className="text-amber-500 hover:underline text-xl mt-8 inline-block">Read Full Note →</a>
        </motion.div>
      </section>

      {/* Key Features */}
      <section className="py-24 px-6 relative z-10">
        <motion.h2
          className="text-5xl md:text-7xl font-bold text-center text-amber-500 mb-20"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          Why Choose Al-Irfan?
        </motion.h2>
        <div className="grid md:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {features.map((feature, i) => (
            <motion.div
              key={i}
              className="glass p-8 rounded-3xl cursor-pointer hover:scale-105 transition"
              onClick={() => toggleFeature(i)}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
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
            </motion.div>
          ))}
        </div>
      </section>

      {/* Contact */}
      <section id="enquiry" className="py-24 px-6 bg-emerald-900/50 relative z-10">
        <motion.div
          className="container mx-auto max-w-6xl text-center"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <h2 className="text-5xl md:text-6xl font-bold text-white mb-12">Ready to Join Al-Irfan?</h2>
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
        </motion.div>
      </section>

      <footer className="py-12 px-6 text-center bg-slate-900/50">
        <p className="text-gray-400">© 2026 Al-Irfan Residential School. All Rights Reserved.</p>
      </footer>
    </div>
  );
}